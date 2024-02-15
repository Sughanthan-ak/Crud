import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
       
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Read Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
