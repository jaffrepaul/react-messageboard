import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEntryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>{this.props.history.location.state.post.title}</h2>
        <p>By: {this.props.history.location.state.post.user}</p>
        <p>{this.props.history.location.state.post.message}</p>
        <button><Link to='/posts'>Back to Posts</Link></button>
      </div>
    );
  }
}

export default withRouter(PostEntryDetail);
