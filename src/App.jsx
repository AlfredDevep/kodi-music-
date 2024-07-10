import { Login } from './components/Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './firebase/firebase';
import SpotifyWebApi from 'spotify-web-api-js';
import { Player } from './components/Player';
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // We run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();  
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      }).catch(error => console.error("Error fetching user: ", error));

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      }).catch(error => console.error("Error fetching playlists: ", error));

      // Ensure you provide a valid playlist ID here
      spotify.getPlaylist('4VwV8hjVXteVkVNDCYPN1M').then((response) => {
        dispatch({
          type: 'SET_DISCOVERY_WEEKLY',
          discover_weekly: response,
        });
      }).catch(error => console.error("Error fetching playlist: ", error));
    }
  }, [dispatch]);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;



