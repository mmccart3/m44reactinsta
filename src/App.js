import './App.css';
import Box from "./components/box";
import { useState, useEffect } from 'react';
import Login from './components/Login';
import { readCookie } from './common';
import {authCheck} from './utils/utilities'

function App() {
  const [user, setUser] = useState("");
  const [photos,setPhotos] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);
  const [cookie,setCookie] = useState();

  async function loginWithToken(cookie) {
    const user = await authCheck(cookie);
    console.log(user);
    setUser(user);
    setCookie(cookie);
  }

  useEffect(() => {
    fetchImages();
    let cookie = readCookie('jwt_token');
    if (cookie !== false) {
      loginWithToken(cookie);
    }
    },[]);
  


  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response)
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
    }
    

  return (
    <div className="App">
      <Login setter={setUser}/>
      <h1>{user} is logged in</h1>

      {user ?
      photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" />
            <h2>{item.author}</h2>
          </div>
        )
      })
      :
      <h1>Please Login</h1>
    }
      <br></br>
      
      {/* && is the equivalent of an IF statement */}
      {/* ? and : are the equivalent of an IF ELSE statement */}
      {/* <input onChange = {(event) => setUser(event.target.value)} />
      {user && <Box name={user} />} */}
      {/* IF user exists then display the username in the Box component */}
      {/* {(user == "Harry") ? <Box name="harry logged in" /> : <Box name = "harry not logged in"/>} */}
      {/* IF the username == Harry THEN display Harry logged in ELSE display Harry not logged in */}

      {/* {myArray.map((item,index) => {return (
        <div>
          <Box name={item.name} />
        </div>
      )})} */}
      
    </div>
    
  );
}

export default App;
