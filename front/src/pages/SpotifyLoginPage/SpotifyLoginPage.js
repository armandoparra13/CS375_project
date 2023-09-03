import React, { useEffect } from 'react';
import './SpotifyLoginPage.css';
import { useAuth } from '../../contexts/Auth';

const SpotifyLogin = ({ setUserData, setLoadingUserData }) => {
  const { currentUser } = useAuth();

  return (
    <div className="Spotify-container">
      <h3>
        Login with Spotify to match with people with similar music preferences!{' '}
      </h3>
      <a
        href={`/auth/spotify?accessToken=${currentUser.accessToken}`}
        className="spotify-button"
      >
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default SpotifyLogin;
