import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { deleteContest } from '../../graphql/mutations';
import gql from 'graphql-tag';
import { listContests } from '../../graphql/queries';

class DeleteContest extends Component {
  handleDelete = deleteContest => {
    deleteContest({
      variables: {
        input: {
          id: this.props.id,
        },
      },
      optimisticResponse: () => ({
        deleteContest: {
          // This type must match the return type of
          //the query below (listPosts)
          __typename: 'ModelContestConnection',
          id: this.props.id,
          headline: this.props.headline,
          description: this.props.description,
          createdAt: this.props.createdAt,
        },
      }),
      update: (cache, { data: { deleteContest } }) => {
        const query = gql(listContests);

        // Read query from cache
        const data = cache.readQuery({ query });

        // Add updated postsList to the cache copy
        data.listContest.items = [
          ...data.listContest.items.filter(item => item.id !== this.props.id),
        ];

        //Overwrite the cache with the new results
        cache.writeQuery({ query, data });
      },
    });
  };

  render() {
    return (
      <Mutation mutation={gql(deleteContest)}>
        {(deleteContest, { loading, error }) => {
          return (
            <button onClick={() => this.handleDelete(deleteContest)}>
              Delete Contest
            </button>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteContest;
