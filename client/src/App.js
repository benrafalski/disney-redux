import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Detail from './components/Detail';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header/>
            <Login/>
          </Route>
          <Route exact path='/login'>
            <LoginPage/>
          </Route>
          <Route exact path='/home'>
            <Header/>
            <Home/>
          </Route>
          <Route path='/detail:id'>
            <Header/>
            <Detail/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
