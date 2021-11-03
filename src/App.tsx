import React from 'react';
import './App.css';
import SideMenu from './Components/SideMenu';
import MainBlock from './Components/MainBlock';
import SideBlock from './Components/SideBlock';

function App() {
  return (
    <div className="main" >
    
      <SideMenu />
      <MainBlock  />
      <SideBlock />
    </div>
  );
}

export default App;
