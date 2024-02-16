/*import "./App.css";
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
        <table className="table" style={{ border: '1px solid #ccc', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Username</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Phone</th>
              <th style={styles.tableHeader}>Location</th>
              <th style={styles.tableHeader}>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.tableCell}>{user.name}</td>
                <td style={styles.tableCell}>{user.username}</td>
                <td style={styles.tableCell}>{user.email}</td>
                <td style={styles.tableCell}>{user.phone}</td>
                <td style={styles.tableCell}>{user.address.geo.lat},{user.address.geo.lng}</td>
                <td style={styles.tableCell}><a href={user.website}>Check my site here</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  tableHeader: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#000',
    color: '#fff',
  },
  tableCell: {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  oddRow: {
    backgroundColor: '#f2f2f2',
  },
  evenRow: {
    backgroundColor: '#fff',
  },
};

export default App; */

/*import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  return (
    <div>
      <h1>File handling</h1>
      <div>
        <h2>Upload Image</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {  image && <img  class="img" src={image} alt="Uploaded"  />}
      </div>
      <div>
        <h2>Upload Video</h2>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        {video && (
          <video class="fl" controls style={{ maxWidth: '100%' }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default App; */

/*import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.id === 'uploadImage') {
      setButtonLabel('View');
    } else if (e.target.id === 'uploadVideo') {
      setButtonLabel('Play');
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>File Attachment and Media Player</h1>
      <div style={{ marginBottom: '10px' }}>
        <input type="file" id="uploadImage" onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
        <label htmlFor="uploadImage">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        {file && (
          <Button variant="contained" onClick={handleOpen} disabled={!file} style={{ marginLeft: '10px' }}>
            {buttonLabel}
          </Button>
        )}
      </div>

      <div>
        <input type="file" id="uploadVideo" onChange={handleFileChange} accept="video/*" style={{ display: 'none' }} />
        <label htmlFor="uploadVideo">
          <Button variant="contained" component="span">
            Upload Video
          </Button>
        </label>
        {file && (
          <Button variant="contained" onClick={handleOpen} disabled={!file} style={{ marginLeft: '10px' }}>
            {buttonLabel}
          </Button>
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{buttonLabel}</DialogTitle>
        <DialogContent>
          {file && file.type.startsWith('image/') && <img src={URL.createObjectURL(file)} alt="Uploaded Image" style={{ width: '100%' }} />}
          {file && file.type.startsWith('video/') && (
            <video controls style={{ width: '100%' }}>
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;*/


import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [buttonType, setButtonType] = useState('');

  const handleFileChange = (e, type) => {
    setFile(e.target.files[0]);
    setButtonType(type);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clearFileState = () => {
    setFile(null);
    setButtonType('');
  };

  return (
    <div style={{ textAlign: 'center', background: 'linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF)', height: '100vh', paddingTop: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>File Handling media upload</h1>
     
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input type="file" id="uploadImage" onChange={(e) => handleFileChange(e, 'image')} accept="image/*" style={{ display: 'none' }} />
        <label htmlFor="uploadImage">
          <Button variant="contained" component="span">
            Upload Picture
          </Button>
        </label>
        {file && buttonType === 'image' && (
          <Button variant="contained" onClick={handleOpen} style={{ marginLeft: '10px' }}>
            View
          </Button>
        )}
      </div>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input type="file" id="uploadVideo" onChange={(e) => handleFileChange(e, 'video')} accept="video/*" style={{ display: 'none' }} />
        <label htmlFor="uploadVideo">
          <Button variant="contained" component="span">
            Upload Video
          </Button>
        </label>
        {file && buttonType === 'video' && (
          <Button variant="contained" onClick={handleOpen} style={{ marginLeft: '10px' }}>
            Play
          </Button>
        )}
      </div>

      <Dialog open={open} onClose={() => {handleClose(); clearFileState()}}>
        <DialogTitle>{buttonType === 'image' ? 'View' : 'Play'}</DialogTitle>
        <DialogContent>
          {file && file.type.startsWith('image/') && (
            <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ width: '100%' }} />
          )}

          {file && file.type.startsWith('video/') && (
            <video controls style={{ width: '100%' }}>
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleClose(); clearFileState()}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;






