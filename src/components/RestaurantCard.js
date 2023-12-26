import {IMG_URL} from "../config";

const RestaurantCard=({name, cuisines , cloudinaryImageId , avgRating }) =>{
    return (
        
            <div className='card'>
                <div className="food-img-container">
                    <img className='food-img' src={ IMG_URL + cloudinaryImageId}></img>
                </div>
            
                <h2 className="restaurant-name">{name}</h2>
                <h3>{cuisines && cuisines.join(", ")}</h3>
                <h3>{avgRating} ★</h3>
            </div>
    )
}
export default RestaurantCard;