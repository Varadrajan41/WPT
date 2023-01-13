import logo from './logo.svg';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './component/Home'
function App() {
  return (
    <div>
      <Router>
        <Switch>
      <Route path="/" component= {Login}></Route>
      <Route path="/successful" component={Home}></Route>
   
    </Switch>
    </Router>
    </div>
    
  );
}

export default App;
