import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {useLocation, useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToTab = {
    '/': '1',
    '/creative': '2',
    '/development': '3',
    '/about': '4'
  }

  const tabToPath = {
    '1': '/',
    '2': '/creative',
    '3': '/development',
    '4': '/about'
  }

  const currentTab = pathToTab[location.pathname] || '1';
  const [value, setValue] = React.useState(currentTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(tabToPath[newValue]);
  };

  return (
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', typography: 'body1' }}>

        {/* Navbar */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', paddingY: 2, paddingX: 4, position: 'relative' }}>

          {/* Left-Aligned Title */}
          <Box sx={{ flex: 1 }}>
            <h1 style={{ margin: 0, whiteSpace: 'nowrap' }}><a href={"/"}>Madison Preston</a></h1>
          </Box>

          {/* Centered Tabs */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <TabContext value={value}>
              <TabList onChange={handleChange} aria-label="Navigation tabs">
                <Tab label="Creative" value="2" />
                <Tab label="Development" value="3" />
                <Tab label="About" value="4" />
              </TabList>
            </TabContext>
          </Box>

          {/* Empty Box for Space Balance */}
          <Box sx={{ flex: 1 }} />

        </Box>

        {/* Page Content */}
        {/*<Box sx={{ flexGrow: 1, padding: 2 }}>*/}
        {/*  <TabContext value={value}>*/}
        {/*    <TabPanel value="1">Item One</TabPanel>*/}
        {/*    <TabPanel value="2">Item Two</TabPanel>*/}
        {/*    <TabPanel value="3">Item Three</TabPanel>*/}
        {/*  </TabContext>*/}
        {/*</Box>*/}
      </Box>
  );
}