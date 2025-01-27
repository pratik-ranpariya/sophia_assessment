import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { Get } from './common/axios/api';
import { API_GET } from './common/constant/api';

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    GetProjectList();
  }, [location]);

  const GetProjectList = () => {
    setLoading(true);
    Get(API_GET.PROJECTLIST)
      .then((response) => {
        if (response.status === 200) {
          setTableData(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex">
      <Sidebar project={tableData} />
      <ToastContainer />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home loading={loading} project={tableData} />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);