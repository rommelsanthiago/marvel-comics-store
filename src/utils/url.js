import md5Generator from "md5"

const TIMESTAMP= Date.now(); 
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_API_PUBLIC_TS;
const HASH = md5Generator(TIMESTAMP+PRIVATE_KEY+PUBLIC_KEY);

export const BASE_URL = `http://gateway.marvel.com/v1/public/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

//             // const timestamp = Date.now();
//             // const publicKey= 'b480c80c182e6cda92bcb6ff06e5c266';
//             // const privateKey = '0093db34bd12c8c3ef048eb43a4aa3faeeac5074';
//             // const hash=md5Generator(timestamp+privateKey+publicKey);

// `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`