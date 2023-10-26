import { Navigate, useLocation } from "react-router-dom";

export const DefaultTabRedirect = ({ tabsData }) => {
  let location = useLocation();
  return <Navigate to={getTabPathFromLocation(location, tabsData)} />;
};

const getTabPathFromLocation = (location, tabsData) => {
  const path = location.pathname.replace('/', '');
  const selectedTab = tabsData.find((tab) => tab.id === path);
  return selectedTab ? selectedTab.id : tabsData[0].id;
};
