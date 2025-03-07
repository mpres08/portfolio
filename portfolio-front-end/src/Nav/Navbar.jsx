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
        <TabContext value={value}>
          {/* Navbar Container */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'divider', paddingY: 1 }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Creative" value="1" />
              <Tab label="Development" value="2" />
              <Tab label="About" value="3" />
            </TabList>
          </Box>

          {/* Page Content */}
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </Box>
        </TabContext>
      </Box>
  );
}