/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../../../Components/UI';
import { useTable, useSortBy } from 'react-table';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'react-bootstrap';
import { NavBar } from '../../CreateActions/NavBar';
import { RootContainer } from '../../CreateActions/views/CreateActionPage';
import { useCurrentAuthUser } from '../../CreateActions/hooks/useCurrentAuthUser';
import { getAllSubscribersFromArtistUser } from '../queries';

const TableContainer = styled.div`
  background-color: #dddddd;
  border-radius: 5px;
  padding: 2rem;

  table {
    background-color: white;
    border-radius: 5px;
    border-spacing: 0;
    padding: 10px;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    td {
      margin: 0;
      padding: 0.5rem 10px;
    }

    th {
      padding: 15px 10px;
      position: relative;
      text-decoration: ${props => (props.isSorted ? 'underline' : 'none')};
    }
  }

  thead {
    border-bottom: 1px solid #ebebeb;
    color: #6850ea;
    padding: 15px 0;
  }

  tbody {
    tr:nth-child(odd) {
      background-color: #f2f2f2;
    }
  }
`;

const SortIndicator = styled.span`
  position: absolute;
  top: 13px;
  left: 0;
`;

const TableHeaderText = styled.span`
  margin-left: 10px;
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isSorted={column.isSorted}
              >
                <SortIndicator>
                  <Icon name="FaSort" color="black" size={20} />
                </SortIndicator>
                <TableHeaderText>{column.render('Header')}</TableHeaderText>
                {/* Add a sort direction indicator */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export const AudienceView = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Points',
        accessor: 'points',
      },
    ],
    []
  );

  const { userId } = useCurrentAuthUser();
  const { data, error, loading } = useQuery(getAllSubscribersFromArtistUser, {
    variables: {
      id: userId,
    },
  });

  if (loading || error || !data) return null;

  const endUserData =
    data.getArtistUser.artist.actionPages.items[0].subscribers.items.map(
      item => {
        const firstName = item?.enduser?.firstName || '';
        const lastName = item?.enduser?.lastName || '';

        return {
          email: item?.enduser?.email,
          firstName,
          lastName,
          name: `${firstName} ${lastName}`,
          phone: item?.enduser?.phoneNumber || '',
          points: item?.enduserPageSubscriptionCompletedActions?.items.reduce(
            (a, b) => a + b,
            0
          ),
        };
      }
    );

  console.log(endUserData);

  return (
    <React.Fragment>
      <NavBar headerText="Your Audience" />
      <RootContainer fluid>
        <Container fluid>
          <TableContainer>
            <Table columns={columns} data={endUserData} />
          </TableContainer>
        </Container>
      </RootContainer>
    </React.Fragment>
  );
};
