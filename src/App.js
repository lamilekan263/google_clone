import React from 'react';
import { Switch, Route} from 'react-router-dom'



import Home from './pages/home/Home';
import Search from './pages/searchPage/SearchPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
