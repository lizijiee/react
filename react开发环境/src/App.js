import React from 'react';
// import logo from './logo.svg';
import styles1 from "./App.module.less";
import './App.less';

function App() {
  console.log(styles1)
  return (
    <header className="common-basic-bar">
      <div className="common-all-nav">
        <img src={require('./assets/menu.png')} alt="menu-icon" className="menu-icon" />
      </div>
      <div className="common-topbar-logo">111111</div>
      <div className="common-topbar-right">111111</div>
      <div className="common-navs-menus">111111</div>
    </header>
  );
}

export default App;
