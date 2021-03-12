import React from 'react';
// import DeleteContest from './deleteContest';

class Contest extends React.Component {
  // componentDidMount() {
  //   this.props.subscribeToMore();
  // }

  render() {
    const items = this.props.data.listContests.items;

    return items.map(contest => {
      return (
        <div key={contest.headline}>
          <h1>{contest.headline}</h1>
          <p>{contest.artist.name}</p>
          <p>{contest.id}</p>
          <p>
            <button>{contest.landingButtonText}</button>
          </p>
          {/* <DeleteContest {...contest} /> */}
          <br />
        </div>
      );
    });
  }
}

export default Contest;
