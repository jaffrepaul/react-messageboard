import React from 'react';
import { Link } from 'react-router-dom';


class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Add Post Form Here! <br />
        Title
        <input placeholder="Add Post Title" />
        Message
        <input placeholder="Add Post Message" />
        User
        <input placeholder="Add Username" />
        <button>Cancel</button>
        <button>Create Post</button>
        <Link to='/posts'>Back</Link>
      </div>
    );
  }
}

export default PostAdd;
