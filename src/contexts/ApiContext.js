import {createContext, useEffect, useState} from "react";
import {myAxios} from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({children})
const [receptLista, setReceptLista] = useState([]);

const getAdat=async (vegpont, callback)=>{
    try{
        const response = await myAxios.get(vegpont);
        console.log("adat", response.data)
        callback(response.data)
    }catch(err){
        console.log("HIBA", err)
    }finally{

}

const postAdat=async(vegpont, adat)=>{
    try{
        const response=await myAxios.post(vegpont, adat)
        console.log("adat", response.data);
    }catch(err){
        console.log("HIBA", err)
    }finally{

    }
}

useEffect(()=>{
    getAdat("/api/receptek, setReceptLista");
},[])

return (
    <ApiContext.Provider value={{receptLista, getAdat, postAdat}}>
    {children}
    </ApiContext.Provider>
    )
}