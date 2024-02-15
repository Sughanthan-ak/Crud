//import logo from './logo.svg';
import './App.css';
//import {EmpTable} from  './compenents/emp-table';
import React, { useEffect, useState } from "react";
import axios from "axios";
  

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setUsers(response?.data);
    });
  }, []);

    return(
      <div>
      <nav className="navbar navbar-dark bg-light justify-content-center">
        <h2 className="text-primary">Employee Details</h2>
      </nav>
      <div className="container">
        <table className="table" border="1">
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
              <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.geo.lat},{user.address.geo.lng}</td>
                <td><a href={user.website}>Check my site here </a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
