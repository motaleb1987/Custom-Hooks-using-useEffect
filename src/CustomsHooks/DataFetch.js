import React, { useEffect, useState } from 'react'
import style from './Loading.module.css'
import useFetch from './useFetch'


const DataFetch = () => {

    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  

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
            <h1>Get Data from API ("https://jsonplaceholder.typicode.com/todos")</h1>
            {error && <p>{errorMessage}</p>}
            {isLoading && loadingMeassage}
            {todosElement}
        </div>
    )
}

export default DataFetch