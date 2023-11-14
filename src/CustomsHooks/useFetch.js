import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsloading]=useState(true);
    const [error, setError]=useState(null);


    useEffect(() => {
       setTimeout(()=>{
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error("Fetching is not successful..");
            }else{
                return res.json();
            }
           
        })
        .then((data) => {
            setData(data);
            setIsloading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsloading(false);
        })
       }, 2000)

    }, []);

    return {data, isLoading, error}

}

export default useFetch