import './PostStyle.css'

const Post = (props) => {
    let {userId, id, title} = props;
    return(
        <div className="postClas">
            <h4>userId:{userId}---Id:{id}</h4>
            <h5>{title}</h5>
        </div>
    )
}
export default Post;