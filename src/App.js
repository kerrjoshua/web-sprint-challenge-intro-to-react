import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ people, setPeople ] = useState({});
  const [ shipsData, setShipsData ] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const appendShips = people => {
    const newPeople = people.map(person => {
      if (person.starships) {
        person.starships.forEach(starship => {
          const ship = shipsData.forEach(({ url }) => {
            //console.log(url.substring(url.length - 3), starship.substring(starship.length - 3))
            //url.substring(url.length - 3) === starship.substring(starship.length - 3)
          });

          //console.log(starship, ship);
          
          const newStarship = {"url": starship, "name": ""};
          starship = newStarship;
          // axios.get(starship)
          // .then(res => {
          //   const newStarship = {"url": starship, "name": res.data.name};
          //   starship = newStarship;
          //   console.log("new starship: ", starship);
          // })
          // .catch(err => console.error(err));
        })
        return person;
      } 
      return person;
    })
    setPeople(newPeople);
  }
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setPeople(res.data);
      
    })
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
    .then(res => {
      setShipsData(res.data.results);
      //people && appendShips(people);
    })
    .catch(err => console.error(err));
    
    axios.get('https://swapi.dev/api/starships/?page=2')
    .then(res => console.log('page 2: ', res))
    .catch(err => console.error("My Error: ", err))
  }, [])
  
 


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Character data={data[0]} ships={shipsData[0]}/> */}
    </div>
  );
}

export default App;
