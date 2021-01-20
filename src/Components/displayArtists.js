import React, { useState } from 'react';
// import { Query } from 'react-apollo';
import { listArtists } from '../graphql/queries';
import { onCreateArtist } from '../graphql/subscriptions';
// import gql from 'graphql-tag';
import Artist from './artist';
import { gql, useQuery } from '@apollo/react-hooks';

export default function DisplayArtist() {
  const { data, loading, error } = useQuery(gql(listArtists));
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: ${error.message}</p>;
  }
  console.log(data);
  return (
    <Artist
      data={data}
      // subscribeToMore={() => this.subscribeNewArtist(subscribeToMore)}
    />
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
