import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <Dashboard />
        </Router>
    );
  }
}

export default App;
