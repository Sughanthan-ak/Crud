import './Style.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from an API endpoint
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div id="color">
      <h1>CRUD Read Operation</h1>
      <table>
        <thead>
          <tr>
            <th>01</th>
            <th>Elakiya</th>
            <th>elakiya.com</th>
          </tr>
          <tr>
            <th>02</th>
            <th>Sughanthan</th>
            <th>sughanthan.com</th>
          </tr>
          <tr>
            <th>03</th>
            <th>Bala</th>
            <th>elakiya.com</th>
          </tr>

        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

