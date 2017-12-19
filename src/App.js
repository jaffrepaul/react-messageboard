import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import PostList from './PostList';
import PostSubmit from './PostSubmit';
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
          user: 'user1',
          replies: [
            {
              user: 'replyuser1',
              reply: 'replymessage1'
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
              user: 'replyuser2',
              reply: 'replymessage2'
            },
            {
              user: 'replyuser3',
              reply: 'replymessage3'
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
          <Redirect exact from='/' to='/posts' />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    );
  }
}

export default App;
