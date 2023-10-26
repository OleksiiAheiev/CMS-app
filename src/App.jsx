import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainTemplate from './layouts/MainTemplate/MainTemplate';
import tabsData from './data/tabs.json';
import TabLoader from './components/TabLoader';
import NotFound from './pages/NotFound/NotFound.jsx';
import { DefaultTabRedirect } from './helper';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainTemplate>
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
