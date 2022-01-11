import './ComentStyle.css'

const Coment = (props) => {
    let {postId, id, name, email} = props;
    return (
        <div className="comentClas">
            <h3>postId:{postId}---Id:{id}</h3>
            <h3>{name}</h3>
            <h5>{email}</h5>
        </div>
    )
}

export default Coment;