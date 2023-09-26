import React, { Component } from 'react';
import Post from './Post'

class PostFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        }
    }

    requestData = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()

                }
                throw new Error('No Access To The Server');
            })
            .then((json) => this.setState({
                posts: json
            }))
            .catch((Error) => {
                this.setState({ error: Error })

            });
    };

    componentDidMount() {
        this.requestData();
    }

    AddPostHandler() {
        const id = 101;
        const url = `https://jsonplaceholder.typicode.com/posts`;

        const method = "POST";
        const body = JSON.stringify({
            userId:id,
            title:"Post Title",
            body:"POSTPOSTPOST POST POST POST POST POST",
        });
        const header={
            "Content-type":"application/json",
        }
    //    id=id+1;



        fetch(url,
            {
                method: method,
                body:body,
                header:header,
            })
            .then((response)=>{return response.json()} )
            .then((json)=>console.log(json))
    }


    DeletePostHandler(id) {
        const url = `https://jsonplaceholder.typicode.com/posts${id}`;
        const method = "DELETE";
        fetch(url, {
            method: method
        })
            .then((response) => response.json())
            .then((json) => console.log(json))

    }

    render() {
        return (
            <>
                <div className='add-post'>
                    <label>Title:</label>
                    <input type='text' name='title'></input>
                    <label>Post:</label>
                    <input type='text' name='post'></input>
                    <button onClick={this.AddPostHandler}>Add</button>
                </div>
                <div className='posts'>

                    {
                        this.state.error
                            ? <h2>{this.state.error.message}</h2>
                            : this.state.posts.map((post) =>
                                <Post key={post.id} title={post.title} body={post.body} deletePost={() => this.DeletePostHandler(post.id)} />

                            )
                    }
                </div>



            </>
        );
    }
}

export default PostFetch;  