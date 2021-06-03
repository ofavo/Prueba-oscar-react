import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewUsers from './screens/viewUsers';
import ViewIndividualUser from './screens/viewIndividualUser';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container text-center">
          <a className="navbar-brand mx-auto" href="#">
            <h2>Prueba Oscar Villamizar</h2>
         </a>
  </div>
      </nav>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ViewUsers} exact />
            <Route path='/user' component={ViewIndividualUser}  />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
