import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      user: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
    this.clearPost = this.clearPost.bind(this);
  }

  /*
  method will gather input from all form fields using thier name ->
  set state of those fields using their input value
  */
  handleChange(e) {
    let inputFields = e.target.name;
    this.setState({
      [inputFields]: e.target.value
    });
  }

  /*
  method will take user's input text stored in state by handleChange ->
  pass values as obj into addPost, which sets state of posts in App.js ->
  clear the input fields after post is submitted
  forces UI to redirect back to /posts after form submit
  note: uses withRouter to 'connect' path to the router
  */
  createPost(e) {
    e.preventDefault();

    // note: refactor to somehting cleaner
    let a = Date.now();
    a = new Date(a);
    let b = a.toLocaleTimeString();
    a = a.toLocaleDateString();

    if (this.state.title && this.state.content) {
      this.props.addPost({
        title: this.state.title,
        content: this.state.content,
        user: this.state.user,
        replies: [],
        date: a,
        time: b
      });
      this.setState({
        title: '',
        content: '',
        user: ''
      });
      this.props.history.push('/posts');
    }
  }

  clearPost() {
    this.setState({
      title: '',
      content: '',
      user: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Create New Post</h1>
        <form>
          Title
          <input
            name="title"
            placeholder="Add Post Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          Message
          <textarea
            name="content"
            placeholder="Add Post Message"
            value={this.state.content}
            onChange={this.handleChange}
          />
          User
          <input
            name="user"
            placeholder="Add Username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button onClick={this.clearPost}>Cancel</button>
          <button onClick={this.createPost}>Create Post</button>
          <button>
            <Link to="/posts">Back to Posts</Link>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostSubmit);
