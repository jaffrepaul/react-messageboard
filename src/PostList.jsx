import React from 'react';
import { Link } from 'react-router-dom';

import PostListEntry from './PostListEntry';

// note: could refactor to traditional if/else for better readability
class PostList extends React.Component {
  render() {
    return this.props.posts.length < 1 ? (
      <div>
        <h1>The Fairygodboss Message Board</h1>
        <p>There are currently no posts...add one!</p>
        <button>
          <Link to={'/addpost'}>Add Post</Link>
        </button>
      </div>
    ) : (
      <div>
        <h1>The Fairygodboss Message Board</h1>
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
