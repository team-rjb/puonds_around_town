import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";


function App() {
  return (
    <div>
      <NavBar/>
      {routes}
    
    </div>
  );
}

export default App;
