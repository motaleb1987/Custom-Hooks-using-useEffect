import React, { useEffect, useState } from 'react'
import style from './Loading.module.css'


const DataFetch = () => {

    
    const [data, setData] = useState(null);
    const [isLoading, setIsloading]=useState(true);
    const [error, setError]=useState(null);


    useEffect(() => {
       setTimeout(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
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

    }, [])


    const loadingMeassage=<h3 className={style.loadingSms}>Data is Loading ...</h3>
    const errorMessage=<p>{error}</p>

    const todosElement= data && data.map((todo) => {
        return (
            <div>
                 <p key={todo.id}> Id: {todo.id} Title: {todo.title}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Get Data from API (todos)</h1>
            {error && <p>{errorMessage}</p>}
            {isLoading && loadingMeassage}
            {todosElement}
        </div>
    )
}

export default DataFetch