import { useEffect , useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();


// Author : Mann Desai

function App() {
  
  
  const [{ token } , dispatch] = useDataLayerValue();
  
  // Run Code Based On a Given Condition
  useEffect(()=>{
    //Code...
    const hash = getTokenFromUrl();
    window.location.hash = "";//Clear Out Token from console
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
    }
  } , []);

  // console.log('User : ' , user);
  // console.log('Alian : ' , token);


  return (
    <div className="App">
      {
        token ? <Player spotify={spotify}/> : <Login />
      }
    </div>
  );
}

export default App;
