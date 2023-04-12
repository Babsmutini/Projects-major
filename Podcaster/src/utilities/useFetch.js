import { useState, useEffect } from "react";
import { hash4Header } from "./hashgenerator";
import { encode } from "base-64";

const apiKey = process.env.REACT_APP_API_KEY;
const apiSecret = process.env.REACT_APP_SECRET;
const apiHeaderTime = Math.floor(Date.now() / 1000);

const useFetch = (url, requestType) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const authHeader = `Basic ${encode(`${apiKey}:${hash4Header}`)}`;
    console.log(apiKey);
    console.log(apiSecret);
    console.log(apiHeaderTime);

    console.log(hash4Header);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method: requestType,
                    "User-Agent": "SuperPodcastPlayer/1.3",
                    "X-Auth-Key": apiKey,
                    "X-Auth-Date": apiHeaderTime,
                    "Authorization": "bfe9988f00b0ff61d8904bae7b7932dd9c293041",
                });
                const responseData = await response.json();
                console.log("This is the data" + responseData);
                setData(responseData);
            } catch (error) {
                console.log(error.message);
                setError(error);
            }
            setIsLoading(false);
        };
        if (!window.__PRELOADED_DATA__) {
            // if preloaded data doesn't exist, fetch the data
            fetchData();
        } else {
            // if preloaded data exists, use it instead of making a new request
            setData(window.__PRELOADED_DATA__);
        }
    }, [url, requestType]);

    return { data, error, isLoading };
};

export default useFetch;
