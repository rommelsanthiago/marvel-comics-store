import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5Generator from "md5";
import { v4 as uuid } from "uuid";

import StateContext from './StateContext';

const BASE_URL = `https://gateway.marvel.com/v1/public/comics`;
const ID = uuid()
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_API_PUBLIC_TS;
const HASH = md5Generator(ID+PRIVATE_KEY+PUBLIC_KEY);

const State = (props) => {
    const [allComics, setAllComics] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(0);

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
        
            await axios(`${BASE_URL}?limit=${100}&ts=${ID}&apikey=${PUBLIC_KEY}&hash=${HASH}&offset=${currentPage}`)
            .then(res =>{
                setLimit(res.data.data.limit);
                setCurrentPage(res.data.data.offset + 1);
                return res.data;
            }).then((jsonParsed)=>{
                returnedComics = (jsonParsed.data.results);    
            })
            setAllComics(returnedComics);
        }
        GetComicOptions();
    }, []);

    

    const data = { 
        allComics,
        products, 
        setProducts,
        amount,
        currentPage,
        setCurrentPage,
        limit
    }
    
    return (
        <StateContext.Provider value={data}>
          {props.children}
        </StateContext.Provider>
    )
};

export default State