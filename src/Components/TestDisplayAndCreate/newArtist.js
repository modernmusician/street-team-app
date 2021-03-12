import React, { useState } from 'react';

export default function NewArtist({ onSubmit, onCancel }) {
  const [name, setName] = useState('');

  const submit = e => {
    e.preventDefault();
    onSubmit({ name });
  };

  const cancel = e => {
    e.preventDefault();
    onCancel();
  };

  return (
    <div className="new-artist page">
      <h1>New Artist</h1>
      <div className="box">
        <form onSubmit={submit}>
          <input
            className="input"
            type="text"
            placeholder="name of the artist"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <button type="submit" name="submit">
            add artist
          </button>
          <button className="error" onClick={cancel}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
