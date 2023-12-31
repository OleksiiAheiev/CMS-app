import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainTemplate from './layouts/MainTemplate/MainTemplate';
import TabLoader from './components/TabLoader';
import NotFound from './pages/NotFound/NotFound.jsx';
import { DefaultTabRedirect } from './helper';
import './App.css';
import Loading from './pages/Loading/Loading';

const App = () => {
  const [tabsData, setTabsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://653a1e96e3b530c8d9e93047.mockapi.io/api/v1/tabs');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setTabsData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <MainTemplate tabsData={tabsData}>
        <Routes>
          <Route path="/" element={<DefaultTabRedirect tabsData={tabsData} />} />
          {tabsData.map((tab) => (
            <Route key={tab.id} path={tab.id} element={<TabLoader path={tab.path} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainTemplate>
    </Router>
  );
};

export default App;
