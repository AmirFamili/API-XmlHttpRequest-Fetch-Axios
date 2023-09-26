import React, { Component } from 'react';
import Post from './Post'
import axios from 'axios'

class PostAxios2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],

        }
    }
    componentDidMount = () => {
        this.requestData();
    }


    requestData = () => {
        axios.all([
            axios.get('/posts'),
            axios.get('/users')])
            .then(axios.spread((p, u) => {
                this.setState({
                    posts: p.data,
                    users: u.data
                })
            }))

    }

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }




    render() {
        const { id, posts, title, body, users } = this.state
        return (
            <>

                <div className='posts'>

                    {

                        posts.map((post) => (
                            <Post key={post.id} title={post.title} body={post.body} />

                        ))
                    }

                    {

                        users.map((user) => (
                            <Post key={user.id} title={user.name} />

                        ))
                    }
                </div>



            </>
        );
    }
}

export default PostAxios2;  