import React from 'react';
import PostListEntry from './PostListEntry'

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <PostListEntry />
      </div>
    );
  }
}

export default PostList;
