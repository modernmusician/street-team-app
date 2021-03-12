import React, { useState } from 'react';

export default function NewPicture({ onSubmit, onCancel }) {
  const [publicUrl, setPublicUrl] = useState('');

  const submit = e => {
    e.preventDefault();
    onSubmit({ publicUrl });
  };

  const cancel = e => {
    e.preventDefault();
    onCancel();
  };

  return (
    <div className="new-picture page">
      <h1>New Picture</h1>
      <div className="box">
        <form onSubmit={submit}>
          <input
            className="input"
            type="text"
            placeholder="public URL of the image"
            value={publicUrl}
            onChange={e => setPublicUrl(e.target.value)}
            required
          />

          <button type="submit" name="submit">
            add picture
          </button>
          <button className="error" onClick={cancel}>
            cancel
          </button>
        </form>
      </div>
    </div>
  );
}
