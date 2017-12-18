import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostAdd from './PostAdd';
import PostEdit from './PostListEntryDetail';

const FourOhFour = () => <h1>404 - This Page Does Not Exist</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: 'title1',
          message: 'message1',
          replies: [
            {
              user: 'user1',
              reply: 'reply1'
            }
          ],
          date: '12/18/2017',
          time: '5:19:44 PM',
        },
        {
          title: 'title2',
          message: 'message2',
          replies: [
            {
              user: 'user2',
              reply: 'reply2'
            },
            {
              user: 'user3',
              reply: 'reply3'
            },
          ],
          date: '12/18/2017',
          time: '5:19:44 PM',
        },
      ]
    };
 }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/posts'
            render={() => (
              <PostList posts={this.state.posts}/>
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
