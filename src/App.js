import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode]= React.useState(false)
    
    function toggleClick(){
        setDarkMode(prev=>!prev)
    }
  return (
    
   
        <div className="container">
            <Navbar toggleDarkMode={toggleClick} darkMode={darkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    
  );
}

export default App;
