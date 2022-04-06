import React, { useState, useEffect} from "react";
import axios from "axios";

const Quote = () => {

    const GOT_API_URL = "https://game-of-thrones-quotes.herokuapp.com/v1/random";
    const [quotes, setQuotes] = useState(null);

    useEffect(() => {
        async function fetchQuote() {
            const request = await axios.get(GOT_API_URL);
            setQuotes(request.data.sentence);
            console.log(request);
            return request;
        }
        fetchQuote();
    }, [GOT_API_URL])

    console.log(quotes);
    
    return (
        <div style={{ color: "#FF0266" }}>
            <h3 style={{ "text-align": "center", "margin-bottom": "20px"}}>
            {quotes}
        </h3>
        </div>
    )
}
 
export default Quote;