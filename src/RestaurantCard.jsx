const RestaurantCard = (props) => {
    return(
        <div className="res-card">
            <img  className="res-logo"src={props.img} alt="No card" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.star}</h4>
            <h4>{props.ETA}</h4>


        </div>




    )
}
export default RestaurantCard