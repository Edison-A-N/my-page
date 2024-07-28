import React from 'react';
import Navbar from './components/Navbar';
import './globals.css'; // 如果您有全局样式

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body style={{ background: '#121212' }}>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ width: '33%' }}>
            <Navbar />
          </div>
          <div style={{ width: '67%' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
