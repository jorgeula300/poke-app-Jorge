import { useState } from "react";
import axios from "axios";

const useFeth = (url) => {
    const [data, setData] = useState()
    const getApi = () => {
        axios.get(url).then(res => setData(res.data)).catch(err => console.log(err))
    }
    const getType = (urlType) => {
        axios.get(urlType).then(res =>{
            const obj = {
                results: res.data.pokemon.map(poke => poke.pokemon)
            }
            setData(obj)
        }).catch(err => console.log(err))
    }
    return [data, getApi,getType]
}

export default useFeth;