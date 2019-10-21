import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID b0471e630bf8d3acdf35e7e7a9428f683500c71a0aa84b001398d23f9416cf31'
    }
})