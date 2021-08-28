import { useState } from 'react';
import { Auth } from 'aws-amplify';

export const useCurrentAuthUser = () => {
  const [userId, setUserId] = useState();
  const [artistName, setArtistName] = useState();
  Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then(user => {
      console.log('Load additional settings for user:', user);
      setUserId(user.username);
      setArtistName(user.attributes.name);
    })
    .catch(err => console.error(err));

  return {
    userId,
    artistName,
  };
};
