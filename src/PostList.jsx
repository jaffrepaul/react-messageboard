import React from 'react';
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
      </div>
    );
  }
}

export default PostList;
