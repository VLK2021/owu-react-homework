import './FliteStyle.css'


function Flite(props) {

    let {item} = props;

    return (
        <div className="fliteClasBlock">
            <div className="fliteClasBlock_text">
                <div>
                    {item.mission_name}
                </div>
                <div>
                    {item.launch_year}
                </div>
            </div>

            <img src={item.links.mission_patch} alt="mission_patch"/>
        </div>
    )
}

export default Flite