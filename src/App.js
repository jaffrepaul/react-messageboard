import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostSubmit from './PostSubmit';
import PostEntryDetail from './PostEntryDetail';

// note: comment out until routes are dynamic
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
          user: 'user1',
          message: 'message1',
          replies: [
            {
              user: 'userA',
              reply: 'messageA'
            }
          ],
          date: '12/18/2017',
          time: '5:19:44 PM'
        },
        {
          title: 'title2',
          user: 'user2',
          message: 'message2',
          replies: [
            {
              user: 'userB',
              reply: 'messageB'
            },
            {
              user: 'userC',
              reply: 'messageC'
            }
          ],
          date: '12/18/2017',
          time: '5:19:44 PM'
        }
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
      posts: currentPosts
    });
  }

  /*
  this method takes in a post reply and a postID
  stores state of currentPosts
  pushes reply to currentPosts replies array of specific post using postID
  setState of posts to currentPosts (including reply)
  */
  editPost(reply, postID) {
    const currentPosts = this.state.posts;
    currentPosts[postID].replies.push(reply);
    this.setState({
      posts: currentPosts
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/posts"
            render={() => <PostList posts={this.state.posts} />}
          />
          <Route
            path="/addpost"
            render={() => <PostSubmit addPost={this.addPost} />}
          />
          <Route
            path="/posts/:id"
            render={() => <PostEntryDetail editPost={this.editPost} />}
          />
          <Redirect exact from="/" to="/posts" />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    );
  }
}

export default App;
