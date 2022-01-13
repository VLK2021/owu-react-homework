import './UserDetailsStyle.css'

const UserDetails = ({
                         item: {
                             id,
                             name,
                             username,
                             email,
                             company: {catchPhrase, bs},
                             phone,
                             website,
                             address: {street, suite, city, zipcode, geo: {lat, lng}}
                         }, getPosts
                     }) => {



    return (
        <div className="wrapUserDetails">
            <div className="userDetails">
                {id} <br/> {name} <br/> {username} <br/> {email} <br/> {street} <br/> {suite} <br/> {city} <br/>
                {zipcode} <br/> {lat} <br/> {lng} <br/> {phone} <br/> {website}
                <br/> {catchPhrase} <br/> {bs}
            </div>

            <div className="btn">
                <button onClick={() => getPosts(id)}>GetPosts</button>
            </div>

        </div>
    );
};

export default UserDetails;