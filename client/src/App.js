import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
