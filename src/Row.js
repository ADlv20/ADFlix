import React, { useState , useEffect} from "react";
import axios from './axios';
import "./Row.css"

const POSTER_URL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}){

    const [movies, setMovies] = useState([]);

    useEffect( ()=> {
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
 

    return(
        <div>
            <h2> { title } </h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${POSTER_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
 
export default Row;