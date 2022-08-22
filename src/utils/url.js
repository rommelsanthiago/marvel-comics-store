import md5Generator from "md5"
import { v4 as uuid } from "uuid";

const ID = uuid()
const PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_API_PUBLIC_TS;
const HASH = md5Generator(ID+PRIVATE_KEY+PUBLIC_KEY);

export const BASE_URL = `https://gateway.marvel.com/v1/public/comics?ts=${ID}&apikey=${PUBLIC_KEY}&hash=${HASH}`;