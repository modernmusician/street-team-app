/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Papa from 'papaparse';
import { Icon, Spinner } from '../../../../Components/UI';
import { useTable } from '../../../../Hooks/useTable';
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

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const SearchLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  font-weight: semi-bold;
  svg {
    margin: 0px 10px;
  }
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: semi-bold;
  background: none;
  border: none;
  svg {
    margin-left: 10px;
  }
`;

const formatTableData = data => {
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
            (a, b) => {
              const value = b?.action?.pointValue || 0;
              return value + a;
            },
            0
          ),
        };
      }
    );

  console.log(endUserData);
  return endUserData;
};

function Table({ tableProps }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableProps;

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
        {rows.map(row => {
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
  tableProps: PropTypes.shape({
    getTableProps: PropTypes.func,
    getTableBodyProps: PropTypes.func,
    headerGroups: PropTypes.arrayOf(PropTypes.shape({})),
    rows: PropTypes.arrayOf(PropTypes.shape({})),
    prepareRow: PropTypes.func,
  }).isRequired,
};

export const AudienceView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tableData, setTableData] = useState([]);

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

  const {
    tableProps,
    filter: { onChangeFilter },
  } = useTable(columns, tableData);

  const { userId } = useCurrentAuthUser();
  const { data, error, loading } = useQuery(getAllSubscribersFromArtistUser, {
    variables: {
      id: userId,
    },
  });

  useEffect(() => {
    console.log('tableData', tableData);
    if (data && !tableData.length) {
      const formattedData = formatTableData(data);
      setTableData(formattedData);
    }
  }, [data]);



  const onChangeSearch = e => {
    const value = e?.target?.value;
    setSearchValue(value);
    onChangeFilter(value);
  };

  const onExport = () => {
    const csv = Papa.unparse(tableData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const today = new Date();

    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `Audience-${today.toLocaleDateString('en-US')}`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let statusInfo = <h2>Something went wrong... try refreshing the page</h2>
  if (loading ) {
    statusInfo = <Spinner animation="border" role="status" variant="light" />
  }
  else if(error || !data || !tableData.length)
  {
    statusInfo = <h2>No data found yet. Try visiting your fan page.</h2>
  }

  return (
    <React.Fragment>
      <NavBar headerText="Your Audience" />
      <RootContainer fluid>
        <Container fluid>
          {tableData?.length ?
          <TableContainer>
            <ActionContainer>
              <ExportButton type="button" onClick={onExport}>
                Export <Icon name="FaExternalLinkAlt" color="black" size={20} />
              </ExportButton>
              <SearchLabel>
                Search <Icon name="FaSearch" color="black" size={20} />
                <input
                  type="text"
                  value={searchValue}
                  onChange={onChangeSearch}
                />
              </SearchLabel>
            </ActionContainer>
            <Table tableProps={tableProps} />
          </TableContainer>
          :
          statusInfo
          }
        </Container>
      </RootContainer>
    </React.Fragment>
  );
};
