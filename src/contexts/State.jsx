import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StateContext from './StateContext'
import { BASE_URL } from '../utils/url'

const State = (props) => {
    const [allComics, setAllComics] = useState([]);

    useEffect(()=>{
        const GetComicOptions = async () => {
            let returnedComics = [];
        
            await axios(BASE_URL)
            .then(res =>{
                return res.data;
            }).then((jsonParsed)=>{
                returnedComics = (jsonParsed.data.results);    
            })
            setAllComics(returnedComics);
        }
        GetComicOptions();
    }, [])

    const data = { allComics }
    
    return (
        <StateContext.Provider value={data}>
          {props.children}
        </StateContext.Provider>
    )
};

export default State