import React from 'react';
import { Link } from 'react-router-dom';

import PostListEntry from './PostListEntry';

class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, idx) => {
          return <PostListEntry key={idx} id={idx} postBody={post} />;
        })}
        <button>
          <Link to={'/addpost'}>Add Post</Link>
        </button>
      </div>
    );
  }
}

export default PostList;
