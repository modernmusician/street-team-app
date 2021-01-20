import React, { useState } from 'react';
import Select from 'react-select';
import { getContest, listArtists, listContests } from '../graphql/queries';
import { gql, useQuery } from '@apollo/react-hooks';

const options = [
  { value: 'CAT', label: 'Cat' },
  { value: 'DOG', label: 'Dog' },
];

export default function NewContest({ onSubmit, onCancel }) {
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [landingButtonText, setLandingButtonText] = useState('');
  const [artistID, setArtist] = useState('');

  const artistList = useQuery(gql(listArtists));

  const activeOption = options.find(o => o.value === artistID);

  const submit = e => {
    e.preventDefault();
    onSubmit({ headline, description, landingButtonText, artistID });
  };

  const cancel = e => {
    e.preventDefault();
    onCancel();
  };

  if (artistList.loading) {
    return <p>Loading...</p>;
  }
  if (artistList.error) {
    return <p>Error: ${artistList.error.message}</p>;
  }

  console.log(artistList);
  const artistOptions = artistList.data.listArtists.items.map(item => ({
    value: item.id,
    label: item.name,
  }));
  console.log(artistOptions);
  return (
    <div className="new-contest page">
      <h1>New Contest</h1>
      <div className="box">
        <form onSubmit={submit}>
          <Select
            value={activeOption}
            defaultValue={artistOptions[0]}
            onChange={e => setArtist(e.value)}
            options={artistOptions}
          />
          <input
            className="input"
            type="text"
            placeholder="contest headline"
            value={headline}
            onChange={e => setHeadline(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="contest description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="contest landing button text"
            value={landingButtonText}
            onChange={e => setLandingButtonText(e.target.value)}
            required
          />

          <button type="submit" name="submit">
            add contest
          </button>
          <button className="error" onClick={cancel}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
