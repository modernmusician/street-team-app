import React, { useState } from 'react';
// import { Query } from 'react-apollo';
import { getContest, listArtists, listContests } from '../graphql/queries';
import { createContest } from '../graphql/mutations';
import { onCreateArtist, onCreateContest } from '../graphql/subscriptions';

import NewContest from './newContest';
// import gql from 'graphql-tag';
import Contest from './contest';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';

export default function DisplayContest() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(gql(listContests));
  const [createNewContest, { newContest }] = useMutation(gql(createContest));
  console.log(data);

  const onSubmit = formInput => {
    console.log(formInput);
    setModal(false);
    createNewContest({ variables: { input: formInput } });
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
          <NewContest onSubmit={onSubmit} onCancel={() => setModal(false)} />
        </div>
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Contest List</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new contest</button>
          </div>
        </div>
      </section>
      <section>
        <Contest
          data={data}
          // subscribeToMore={() => this.subscribeNewArtist(subscribeToMore)}
        />
      </section>
    </div>
  );
}

// class DisplayContest extends React.Component {
//   subscribeNewContest = subscribeToMore => {
//     return subscribeToMore({
//       document: gql(onCreateContest),
//       updateQuery: (prev, { subscriptionData }) => {
//         if (!subscriptionData.data) return prev;
//         const newContestData = subscriptionData.data.onCreateContest;
//         return Object.assign({}, prev, {
//           listContests: {
//             ...prev.listContest,
//             items: [...prev.listContest.items, newContestData],
//           },
//         });
//       },
//     });
//   };

//   render() {
//     return (
//       <div className="artist">
//         <Query query={gql(listContests)}>
//           {({ loading, data, error, subscribeToMore }) => {
//             if (loading) return <p>loading...</p>;
//             if (error) return <p>{error.message}</p>;

//             return (
//               <Contest
//                 data={data}
//                 subscribeToMore={() =>
//                   this.subscribeNewContest(subscribeToMore)
//                 }
//               />
//             );
//           }}
//         </Query>
//       </div>
//     );
//   }
// }

// export default DisplayContest;
