
import { restaurantList , swiggyData } from "../config";
import RestaurantCard  from "./RestaurantCard";
import {useState, useEffect} from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";


function filterData(searchTxt,allRestaurants){
    const filterData = allRestaurants.filter((restaurant) => {
       return restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    });
    return filterData;
}
const Body =()=>{

    const [searchTxt , setSearchTxt] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    },[] )
    
    const getRestaurants = async () => {
        try{
            const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
             
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle);
        } 
        catch(error){
            console.error("Error fetching restaurants data :", error);
        }
       
    }
    
    console.log("render()");

    //not render component (early return)
    if (!allRestaurants) return null;

    return allRestaurants.length ===0 ?(
        <Shimmer /> 
    ) : 
    (
        <div className='Restraurant'>
            <h1 className='head'>Restaurants with online food delivery</h1>
            
            <div className="search">
                <input type="text" placeholder="Search for restaurant and food" 
                value={searchTxt}
                onChange={ (e) => {
                    setSearchTxt(e.target.value);
                }}
                />
                <button className="btn2"
                onClick={() => {
                    const data = filterData(searchTxt,allRestaurants);
                    setFilteredRestaurants(data);

                }}>Search</button>
            </div>
            <div className='Restraurant-card'>
            
                {
                    filteredRestaurants?.length==0 ? (
                        <h1>No Restaurants Found...</h1>
                    ):(
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard {...restaurant.info} />
                        </Link>
                    )
                )) 
                      
                }
            </div>
        </div>
    )
};

export default Body;