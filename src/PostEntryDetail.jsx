import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEntryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addReply = this.addReply.bind(this);
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  }

  /*
  call func at add.js
  pass in values of form as state values & id from history
  clear form -> state back to empty string
  */
  addReply(e) {
    e.preventDefault();
    let a = Date.now();
    a = new Date(a);
    let b = a.toLocaleTimeString();
    a = a.toLocaleDateString();

    if (this.state.user && this.state.content) {
      this.props.editPost(
        { user: this.state.user, message: this.state.content },
        this.props.history.location.state.id,
        a,
        b
      );
      this.setState({
        user: '',
        content: ''
      });
    }
  }

  /*
  note: could be refactored to have reply form sub component
  */
  render() {
    return (
      <div>
        <h2>{this.props.history.location.state.post.title}</h2>
        <p>By: {this.props.history.location.state.post.user}</p>
        <p>{this.props.history.location.state.post.content}</p>
        <button>
          <Link to="/posts">Back to Posts</Link>
        </button>
        <br />
        <hr />
        <div>
          <strong>Responses</strong>
          {this.props.history.location.state.post.replies.map((reply, idx) => {
            return (
              <div key={idx}>
                {reply.user}
                {reply.message}
              </div>
            );
          })}
          Last Updated:
          {this.props.history.location.state.post.date}
          {this.props.history.location.state.post.time}
        </div>
        <br />
        <hr />
        <form>
          Reply Message:
          <textarea
            name="content"
            placeholder="Add Response"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <br />
          Reply User:
          <input
            name="user"
            placeholder="Add Username"
            value={this.state.user}
            onChange={this.handleChange}
          />
          <button onClick={this.addReply}>Post Reply</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostEntryDetail);
