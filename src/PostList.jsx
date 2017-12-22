import React from 'react';
import { Link } from 'react-router-dom';

import PostListEntry from './PostListEntry';

class PostList extends React.Component {
  render() {
    let pageContent = null;
    const hasPosts = this.props.posts.length;

    if (hasPosts) {
      pageContent = (
        <div>
          {this.props.posts.map((post, idx) => {
            return <PostListEntry key={idx} id={idx} postBody={post} />;
          })}
          <button>
            <Link to={'/addpost'}>Add Post</Link>
          </button>
        </div>
      );
    } else {
      pageContent = (
      <div>
        <p>There are currently no posts...add one!</p>
        <button>
          <Link to={'/addpost'}>Add Post</Link>
        </button>
      </div>
      );
    }
    return (
      <div>
        <h1>The Fairygodboss Message Board</h1>
        {pageContent}
      </div>
    );
  }
}

export default PostList;
