import React from 'react';
import { withRouter } from 'react-router-dom';

class PostListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.route = this.route.bind(this);
  }

  /*
  this method pushes a proper post URL to browser history using the mapped PostEntry id as the unique ID in the browser bar
  connects the post body with this id & stores it in state
  */
  route() {
    this.props.history.push({
      pathname: `/posts/${this.props.id}`,
      state: {
        post: this.props.postBody,
        id: this.props.id
      }
    });
  }

  render() {
    return (
      <div className="closed-post" onClick={this.route}>
        <strong>{this.props.postBody.title}</strong>
        <div>
          <span>Posted by: {this.props.postBody.user} | </span>
          <span>{this.props.postBody.replies.length} Comments | </span>
          <span>Last Update: {this.props.postBody.date} @ {this.props.postBody.time}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(PostListEntry);
