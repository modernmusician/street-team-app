import React from 'react';

class Artist extends React.Component {
  // componentDidMount() {
  //   this.props.subscribeToMore();
  // }

  render() {
    const items = this.props.data.listArtists.items;

    return items.map(artist => {
      return (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <br />
        </div>
      );
    });
  }
}

export default Artist;
