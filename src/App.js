import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import BookFeature from './features/Book';
import CategoryFeature from './features/Category';

function App() {
  return (
    <div className="App">
      HomePage
      <p><NavLink to="/books" activeClassName="active-menu">Books</NavLink></p>
      <p><NavLink to="/categories" activeClassName="active-menu">Categories</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={BookFeature} exact />
        <Route path="/books" component={BookFeature} />
        <Route path="/categories" component={CategoryFeature} />
        
        {/* <Route component={Notfound} /> */}
      </Switch>
    </div>
  );
}

export default App;
