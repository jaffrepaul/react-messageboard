import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostSubmit from './PostSubmit';
import PostEntryDetail from './PostEntryDetail';

// const NoMatch = ({ location }) => (
//   <div>
//     <h3>404 - No page available at <code>{location.pathname}</code></h3>
//   </div>
// )

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          title: 'title1',
          message: 'message1',
          user: 'user1',
          replies: [
            {
              user: 'reply user1',
              reply: 'reply message1'
            }
          ],
          date: '12/18/2017',
          time: '5:19:44 PM',
        },
        {
          title: 'title2',
          message: 'message2',
          user: 'user2',
          replies: [
            {
              user: 'reply user2',
              reply: 'reply message2'
            },
            {
              user: 'reply user3',
              reply: 'reply message3'
            },
          ],
          date: '12/18/2017',
          time: '5:19:44 PM',
        },
      ]
    };
    this.addPost = this.addPost.bind(this);
  }

  /*
  method will take in user submitted post ->
  store posts array from state at variable ->
  push user post into stored array ->
  then set state of posts as new stored array
  */
 addPost(post) {
   const currentPosts = this.state.posts;
   currentPosts.push(post);
   this.setState({
     posts: currentPosts,
   });
 }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path='/posts'
            render={() => (
              <PostList posts={this.state.posts} />
            )}
          />
          <Route
            path='/addpost'
            render={() => (
              <PostSubmit addPost={this.addPost} />
            )}
          />
        <Route
          path='/posts/:id'
          render={() => (
            <PostEntryDetail posts={this.state.posts} />
          )}
          />
          <Redirect exact from='/' to='/posts' />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    );
  }
}

export default App;
