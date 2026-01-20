import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link, useLocation} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const currentTab = {
    '/creative': 'creative',
    '/development': 'development',
    '/about': 'about',
  }[location.pathname] ?? false;

  return (
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', typography: 'body1' }}>

        {/* Navbar */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', paddingY: 2, paddingX: 4, position: 'relative' }}>

          {/* Left-Aligned Title */}
          <Box sx={{ flex: 1 }}>
            <h1 style={{ margin: 0, whiteSpace: 'nowrap' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}} >
                Madison Preston
              </Link>
            </h1>
          </Box>

          {/* Centered Tabs */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Tabs value={currentTab} aria-label="Navigation tabs">
              <Tab label="Creative" value="creative" component={Link} to="/creative" />
              <Tab label="Development" value="development" component={Link} to="/development" />
              <Tab label="About" value="about" component={Link} to="/about"/>
            </Tabs>
          </Box>

          {/* Empty Box for Space Balance */}
          <Box sx={{ flex: 1 }} />
          <LinkedInIcon />
        </Box>
      </Box>
  );
}