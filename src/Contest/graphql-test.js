import React from 'react';
import { Mutation } from 'react-apollo';
import { createArtist } from '../graphql/mutations';
import gql from 'graphql-tag';

class CreateArtist extends React.Component {
  handleSubmit = (e, createArtist) => {
    e.preventDefault();
    createArtist({
      variables: {
        input: {
          name: this.name.value,
        },
      },
    }).then(res => {
      this.name.value = '';
    });
  };
  render() {
    return (
      <div>
        <h1>Create Artist</h1>

        <Mutation mutation={gql(createArtist)}>
          {(createArtist, { data, loading, error }) => {
            return (
              <div>
                <form
                  className="add-artist"
                  onSubmit={e => this.handleSubmit(e, createArtist)}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    ref={node => (this.name = node)}
                    required
                  />
                  <button>{loading ? 'Yes boss...' : 'Create Artist'}</button>
                </form>
                {error && <p>{error.message}</p>}
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default CreateArtist;
