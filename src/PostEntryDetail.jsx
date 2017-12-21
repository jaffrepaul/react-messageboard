import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostEntryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      user: '',
    };
  }

  /*
  
  */
  render() {
    return (
      <div>
        <h2>{this.props.history.location.state.post.title}</h2>
        <p>By: {this.props.history.location.state.post.user}</p>
        <p>{this.props.history.location.state.post.message}</p>
        ------
          <div>
            Responses
              {this.props.history.location.state.post.replies.map((reply, idx) => {
              return (
                <div key={idx}>
                  {reply.user}
                  {reply.reply}
                </div>
              )
            }
            )}
          </div>
        <button><Link to='/posts'>Back to Posts</Link></button>
      </div>
    );
  }
}

export default withRouter(PostEntryDetail);
