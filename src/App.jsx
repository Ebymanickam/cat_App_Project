
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const[image, setImage] = useState(null);
    const[loading, setLoading] = useState(true);

    //callback function is used to handle asynchronous operations, pass data between components,
    //or execute code in response to specific events like user interactions. 
    //It allows parentgi and child components to communicate efficiently by passing functions as props.

    const fetchCatImage = () =>{
      setLoading(true);
      fetch("https://api.thecatapi.com/v1/images/search") //data is updated by setImage()
        .then(response => response.json ())  //json is a javascript library
        .then(data => {
                   console.log(data)
          setImage(data[0].url); // Set the image URL from the response
          setLoading(false); //Set Loading to false after fetching
        })
        .catch(error => {
          console.error("error message", error);
          setLoading(false); // Set loading to false if there's an error 
        });
    }

    useEffect(()=>{
      fetchCatImage();  // it will render without depency, with it will executed
      console.log("cat image render");

    },[]) // empty dependency array will stop the unnecessary re-rendering.

  return (
    <div className="App">
      <h1>Random Cats</h1>

      <div>
        {/* using ternary operator  */} 

        {                                          //state                            //height will be adjust
          loading ? (<p>Loading...</p>): (<img src={image} style={{width:'300px', height: 'auto'}} />)

        }
      </div>
      <br />

        <p>I am Hide, Don't tell anybody</p>
      <button onClick={fetchCatImage}> Get a random Cats</button>
      
    </div>
  );
}

export default App;





