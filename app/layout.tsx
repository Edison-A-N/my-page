import React from 'react';
import Navbar from './components/Navbar';
import './globals.css'; // 如果您有全局样式

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ width: '33.33%', background: '#f0f0f0' }}>
            <Navbar />
          </div>
          <div style={{ width: '66.67%' }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
