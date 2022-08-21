import md5Generator from "md5"

const TIMESTAMP= Date.now(); 
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_API_PUBLIC_TS;
const HASH = md5Generator(TIMESTAMP+PRIVATE_KEY+PUBLIC_KEY);

export const BASE_URL = `http://gateway.marvel.com/v1/public/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;