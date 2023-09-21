import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

const App = ()=> {
  const [places, setPlaces] = useState([]);
  useEffect(()=> {
    const fetchPlaces = async()=> {
      const response = await axios.get('/api/places');
      setPlaces(response.data);
    };

    fetchPlaces();
  },  []);
  return (
    <div>
      <h1>Profs Places ({ places.length })</h1>
      <ul>
        {
          places.map( place => {
            return (
              <li key={ place.id }>
                { place.name }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
