import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Typography } from '@mui/material';
import './index.css';

const App = () => {
  const App = () => {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Hello, React with Webpack and Material-UI!
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS with React and Webpack!</h1>
        </div>
      </div>
    );
  };

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);