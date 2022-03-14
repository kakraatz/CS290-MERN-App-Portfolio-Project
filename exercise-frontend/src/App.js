import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation.js';
import { useState } from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <GiWeightLiftingUp className='App-logo'/>
        <h1>Get Fit Exercise Planner</h1>
        <p>Use this tool to plan your next workout!</p>
        </header>
        <Navigation />
        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
        </main>
        <footer>
          <p className="siteFooter">&copy; 2022 Kevin Kraatz</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;