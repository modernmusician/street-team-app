import React, { useState } from 'react';
// import { Query } from 'react-apollo';
import { listArtists } from '../graphql/queries';
import { onCreateArtist } from '../graphql/subscriptions';
// import gql from 'graphql-tag';
import Artist from './artist';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import { createArtist } from '../graphql/mutations';
import NewArtist from './newArtist';

export default function DisplayArtist() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(gql(listArtists));
  const [createNewArtist, { newArtist }] = useMutation(gql(createArtist));
  console.log(data);

  const onSubmit = formInput => {
    console.log(formInput);
    setModal(false);
    createNewArtist({ variables: { input: formInput } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: ${error.message}</p>;
  }

  if (modal) {
    return (
      <div className="row center-xs">
        <div className="col-xs-8">
          <NewArtist onSubmit={onSubmit} onCancel={() => setModal(false)} />
        </div>
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="col-xs-10">
        <h1>Artist List</h1>
      </div>
      <div className="col-xs-2">
        <button onClick={() => setModal(true)}>new artist</button>
      </div>
      <Artist
        data={data}
        // subscribeToMore={() => this.subscribeNewArtist(subscribeToMore)}
      />
    </div>
  );
}

// class DisplayArtist extends React.Component {
// subscribeNewArtist = subscribeToMore => {
//   return subscribeToMore({
//     document: gql(onCreateArtist),
//     updateQuery: (prev, { subscriptionData }) => {
//       if (!subscriptionData.data) return prev;
//       const newArtistData = subscriptionData.data.onCreateArtist;
//       return Object.assign({}, prev, {
//         listArtists: {
//           ...prev.listArtist,
//           items: [...prev.listArtist.items, newArtistData],
//         },
//       });
//     },
//   });
// };

//   render() {
//     return (
//       <div className="artist">
//         <Query query={gql(listArtists)}>
//           {({ loading, data, error, subscribeToMore }) => {
//             if (loading) return <p>loading...</p>;
//             if (error) return <p>{error.message}</p>;

//             return (
//               <Artist
//                 data={data}
//                 subscribeToMore={() => this.subscribeNewArtist(subscribeToMore)}
//               />
//             );
//           }}
//         </Query>
//       </div>
//     );
//   }
// }

// export default DisplayArtist;
