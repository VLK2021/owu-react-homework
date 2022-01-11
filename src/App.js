import './App.css';
import {useEffect, useState} from "react";
import User from "./components/user/User";
import Post from "./components/post/Post";
import Coment from "./components/coment/Coment";

function App() {

    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);
    const [coment, setComent] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value =>
                setUser([...value])
            )
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postss =>
                setPost([...postss])
            )
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(coments =>
                setComent([...coments])
            )
    }, []);


    return (
        <div className="wraper">
            <div className="wraperUserClas">
                {
                    user.map(value => <User
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        username={value.username}
                        email={value.email}
                    />)
                }
            </div>

            <div className="wraperPostsClas">
                {
                    post.map(value => <Post
                        key={value.id}
                        userId={value.userId}
                        id={value.id}
                        title={value.title}
                    />)
                }
            </div>

            <div className="wraperCometnsClas">
                {
                    coment.map(value => <Coment
                        key={value.id}
                        postId={value.postId}
                        id={value.id}
                        name={value.name}
                        email={value.email}
                    />)
                }
            </div>

        </div>
    );
}

export default App;
