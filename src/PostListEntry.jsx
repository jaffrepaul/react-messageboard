import React from 'react';

class PostListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='closed-post'>
        <p>{this.props.postBody.title}</p>
        <p>Posted by: {this.props.postBody.user} | {this.props.postBody.replies.length} Comments >> </p>
      </div>
    );
  }
}

export default PostListEntry;
