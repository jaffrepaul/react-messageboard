import React from 'react';
import { Link } from 'react-router-dom';

class PostSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message:'',
      user: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createPost = this.createPost.bind(this);
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
  pass values as obj into addPost, which sets state of posts in App.js
  clear the input fields after post is submitted
  */
  createPost() {
    this.props.addPost({
      title: this.state.title,
      message: this.state.message,
      user: this.state.user,
      replies: [],
    });
    alert('Your post has been submitted')
    this.setState({
      title: '',
      message: '',
      user: '',
    });
  }

  render() {
    return (
      <div>
        Title
        <input name='title' placeholder="Add Post Title" value={this.state.title} onChange={this.handleChange} />
        Message
        <input name='message' placeholder="Add Post Message" value={this.state.message} onChange={this.handleChange} />
        User
        <input name='user' placeholder="Add Username" value={this.state.user} onChange={this.handleChange} />
        <button>Cancel</button>
        <button onClick={this.createPost}>Create Post</button>
        <button><Link to='/posts'>Back to Posts</Link></button>
      </div>
    );
  }
}

export default PostSubmit;
