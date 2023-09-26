import React, { Component } from 'react';
import Post from './Post'
import axios from 'axios'

class PostAxios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            id: 0,
            error: false,
            title: "",
            body: "",
        }
    }
    componentDidMount = () => {
        this.requestData();
    }
    requestData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => this.setState({
                posts: response.data,
            }))
            .catch(() => this.setState({ error: true }));

    }

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    AddPostHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.state.title,
            body: this.state.body

        })
            .then((response) => console.log(response));

    }



    deletePostHandler = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
            .then((response) => console.log(response));


    }

    // editPostHandler = () => {
    //         axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`,{
    //             title: this.state.title,
    //             body: this.state.body
    //         }

    //         )
    //             .then((response) => console.log(response));


    //     }

    editPostHandler = () => {
        axios.patch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {
            title: this.state.title,

        }

        )
            .then((response) => console.log(response));

    }


    render() {
        const { id, posts, error, title, body } = this.state
        return (
            <>
                <div className='add-post'>
                    <label>Id:</label>
                    <input type='number' name='id' value={id} onChange={this.inputChangeHandler} ></input>
                    <label>Title:</label>
                    <input type='text' name='title' value={title} onChange={this.inputChangeHandler} ></input>
                    <label>Post:</label>
                    <input type='text' value={body} name='body' onChange={this.inputChangeHandler}></input>
                    <button className='add' onClick={this.AddPostHandler}>Add</button>
                    <button className='delete' onClick={this.deletePostHandler}>Delete</button>
                    <button className='edit' onClick={this.editPostHandler}>Edit</button>
                </div>

                <div className='posts'>

                    {
                        error ? <h3>No Access To The Server</h3> :
                            posts.map((post) => (
                                <Post key={post.id} title={post.title} body={post.body} />

                            ))
                    }
                </div>



            </>
        );
    }
}

export default PostAxios;  