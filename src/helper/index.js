import { Navigate, useLocation } from "react-router-dom";
import tabsData from '../data/tabs.json';

export const DefaultTabRedirect = () => {
  let location = useLocation();
  return <Navigate to={getTabPathFromLocation(location, tabsData)} />;
};

const getTabPathFromLocation = (location, tabsData) => {
  const path = location.pathname.replace('/', '');
  const selectedTab = tabsData.find((tab) => tab.id === path);
  return selectedTab ? selectedTab.id : tabsData[0].id;
};