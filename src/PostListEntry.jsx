import React from 'react';

class PostListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.postBody.title}
      </div>
    );
  }
}

export default PostListEntry;
