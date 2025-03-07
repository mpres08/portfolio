import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Navbar() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', typography: 'body1' }}>

        {/* Navbar */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', paddingY: 2, paddingX: 4, position: 'relative' }}>

          {/* Left-Aligned Title */}
          <Box sx={{ flex: 1 }}>
            <h1 style={{ margin: 0, whiteSpace: 'nowrap' }}>Madison Preston</h1>
          </Box>

          {/* Centered Tabs */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <TabContext value={value}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Creative" value="1" />
                <Tab label="Development" value="2" />
                <Tab label="About" value="3" />
              </TabList>
            </TabContext>
          </Box>

          {/* Empty Box for Space Balance */}
          <Box sx={{ flex: 1 }} />

        </Box>

        {/* Page Content */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <TabContext value={value}>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Box>
  );
}