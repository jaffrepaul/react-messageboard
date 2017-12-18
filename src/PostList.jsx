import React from 'react';
import { Link } from 'react-router-dom';

import PostListEntry from './PostListEntry'

class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, idx) => {
          return (
            <PostListEntry
              key={idx}
              postBody={post}
            />
          )
        }
        )}
        <Link to={'/addpost'}>Create New Post</Link>
      </div>
    );
  }
}

export default PostList;
