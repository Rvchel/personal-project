import {HashRouter as Router} from 'react-router-dom';
import React from 'react';
import Product from './components/Shop/Product';
import routes from './routes';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      
      {routes}
      
    </div>
    </Router>
  );
}

export default App;
