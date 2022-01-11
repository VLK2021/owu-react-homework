import './UserStyle.css';

const User = (props) => {
    let {id, name, username, email} = props;
    return (
        <div className="userClas">
            <h1>{id}</h1>
            <h2>{name}---{username}</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default User;
//