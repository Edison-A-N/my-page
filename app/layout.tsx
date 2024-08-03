'use client';

import React from 'react';
import Navbar from './components/Navbar';
import './globals.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body style={{ background: '#121212' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '33%' }}>
              <Navbar />
            </div>
            <div style={{ width: '67%' }}>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
