import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostEdit from './PostListEntryDetail';

const FourOhFour = () => <h1>404 - This Page Does Not Exist</h1>;

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/posts'
            render={() => (
              <PostList />
            )}
          />
          <Redirect exact from='/' to='/posts' />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    );
  }
}

export default App;
