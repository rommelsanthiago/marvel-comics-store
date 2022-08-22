import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StateContext from './StateContext'
import { BASE_URL } from '../utils/url'

const State = (props) => {
    const [allComics, setAllComics] = useState([]);
    const [products, setProducts] = useState([]);

    let localProducts = JSON.parse(localStorage.getItem('products'))

    let amount = 0; 
    for(const product of products){
        amount += product.amount
    }

    useEffect(()=>{

        if(localProducts){
            setProducts(localProducts)
        }

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

    const data = { 
        allComics,
        products, 
        setProducts,
        amount 
    }
    
    return (
        <StateContext.Provider value={data}>
          {props.children}
        </StateContext.Provider>
    )
};

export default State