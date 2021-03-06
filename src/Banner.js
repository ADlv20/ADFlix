import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";
import "./static/Banner.css"
import Quote from "./Quote";

const Banner = () => {

    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 2)
                ]
            )
            return request;
        }
        fetchData();
    },[])

    console.log(movie);

    return ( 
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}>
            
            {<div>
                <Quote />
            </div>}

            <div className="banner__contents">
                
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                
                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h4 className="banner__description">
                    { movie?.overview }
                </h4>
                
            </div>
        </header>
     );
}
 
export default Banner;