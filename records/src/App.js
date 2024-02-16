import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setButtonLabel('View');
    } else if (selectedFile && selectedFile.type.startsWith('video/')) {
      setButtonLabel('Play');
    } else {
      setButtonLabel('');
    }
    // Clear the file input field
    e.target.value = null;
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleView = () => {
    setOpen(true);
  };

  const handlePlay = () => {
    setOpen(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>File Attachment and Media Player</h1>
      
      <div style={{ marginTop: '20px' }}>
        <input type="file" id="uploadImage" onChange={handleFileChange} accept="image/*" style={{ display: 'none' }} />
        <label htmlFor="uploadImage">
          <Button variant="contained" component="span">
            Upload Picture
          </Button>
        </label>

        {buttonLabel === 'View' && (
          <Button variant="contained" onClick={handleView} style={{ marginLeft: '10px' }}>
            View
          </Button>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <input type="file" id="uploadVideo" onChange={handleFileChange} accept="video/*" style={{ display: 'none' }} />
        <label htmlFor="uploadVideo">
          <Button variant="contained" component="span">
            Upload Video
          </Button>
        </label>

        {buttonLabel === 'Play' && (
          <Button variant="contained" onClick={handlePlay} style={{ marginLeft: '10px' }}>
            Play
          </Button>
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{buttonLabel}</DialogTitle>
        <DialogContent>
          {file && file.type.startsWith('image/') && (
            <img src={URL.createObjectURL(file)} alt="Uploaded Image" style={{ width: '100%' }} />
          )}

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

export default App;
