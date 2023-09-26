import React, { Component } from 'react';
import '../styles/Post.scss'

class Post extends Component {

    render() {
        const {title,body,deletePost}=this.props;
        return (
            <div className='post'>
           
            <h2>{title}</h2>
            <h4>{body}</h4>
            <button onClick={deletePost}>Delete</button>
            
            </div>
        );
    }
}

export default Post;