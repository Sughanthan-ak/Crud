import axios from "axios"
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="table">
      <h1>Table3</h1>
      <table class="t">
        <thead>
          <tr>
            <th>01</th>
            <th>Elakiya</th>
            <th>Developer</th>
          </tr>
          <tr>
            <th>02</th>
            <th>bala</th>
            <th>Developer</th>
          </tr>
          <tr>
            <th>03</th>
            <th>Malavan</th>
            <th>Developer</th>
          </tr>
          <tr>
            <th>04</th>
            <th>srinath</th>
            <th>Developer</th>
          </tr>
          <tr>
            <th>05</th>
            <th>sughanthan</th>
            <th>Developer</th>
          </tr>
          
          
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
