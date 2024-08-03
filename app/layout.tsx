'use client';

import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
// import { } from './components/BackgroundImage';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Box, CssBaseline, styled } from '@mui/material';

export const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 1;
  display: flex;
  height: 100vh;
`;


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body style={{ background: '#121212' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <BackgroundImage /> */}
          <ContentWrapper>
            <Box sx={{ width: '33%', position: 'fixed' }}>
              <Navbar />
            </Box>
            <Box sx={{ width: '67%', marginLeft: '33%' }}>
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </Box>
          </ContentWrapper>
        </ThemeProvider>
      </body>
    </html >
  );
};

export default Layout;
