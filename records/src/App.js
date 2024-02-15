import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
 
const App = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
 
  return (
    <div>
      <nav className="navbar navbar-dark bg-light justify-content-center">
        <h2 className="text-primary">Employee Details</h2>
      </nav>
      <div className="container">
        <table className="table" border="2">
          <thead>
            <tr>
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
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.geo.lat},{user.address.geo.lng}</td>
                <td><a href={user.website}>Check my site here</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default App;
 