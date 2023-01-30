import './App.css';
import Box from "./components/box";
import { useState, useEffect } from 'react';


function App() {
  const [user, setUser] = useState("");
  const [photos,setPhotos] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);

  useEffect(() => {fetchImages()},[]);
  
  const myArray = [{name:"Harry"},{ name:"George"}, {name:"Hermione"},{name:"Mafalda"}];
  
  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    console.log(response)
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
    }
    

  // for (let index = 0; index < myArray.length; index++) {
  //   const element = myArray[index];
  //   console.log(element);
  // }
  // This can be rewritten as a map function and the map function can be placed in the JSX below

  return (
    <div className="App">

      <button onClick={(event) => setLoggedIn(!loggedIn)}>login or logout</button>

      {loggedIn ?
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
