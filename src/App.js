import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component'
import './App.css';

const UniversityList = loadable(() => import('./components/University/UniversityList'));
const UniversityInfo = loadable(() => import('./components/University/UniversityInfo/UniversityInfo'));
const NotFound = loadable(() => import('./components/common/NotFound/NotFound'));


function App() {
  return (
    <div id="app"> 
      <Switch>
        <Route exact path="/" component={UniversityList} />
        <Route exact path="/university" component={UniversityList} />
        <Route path='/university/:name' component={UniversityInfo}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
