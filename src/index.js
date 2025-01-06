import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Typography } from '@mui/material'; // Import MUI components

const App = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Hello, React with Webpack and Material-UI!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);