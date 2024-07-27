import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav style={{ height: '100%', background: '#333', color: '#fff', padding: '1rem' }}>
            <h2>导航栏</h2>
            <ul>
                <li><a href="#" style={{ color: '#fff' }}>首页</a></li>
                <li><a href="#" style={{ color: '#fff' }}>关于</a></li>
                <li><a href="#" style={{ color: '#fff' }}>联系</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
