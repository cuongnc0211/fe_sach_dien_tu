import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AuthorFeature from './features/Author';
import BookFeature from './features/Book';
import CategoryFeature from './features/Category';

function App() {
  return (
    <div className="App">
      <Header></Header>
      HomePage
      <p><NavLink to="/books" activeClassName="active-menu">Books</NavLink></p>
      <p><NavLink to="/categories" activeClassName="active-menu">Categories</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={BookFeature} exact />
        <Route path="/books" component={BookFeature} />
        <Route path="/authors" component={AuthorFeature} />
        <Route path="/categories" component={CategoryFeature} />
        
        {/* <Route component={Notfound} /> */}
      </Switch>
    </div>
  );
}

export default App;
