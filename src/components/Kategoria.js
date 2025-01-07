import React, {useContext} from 'react';
import {ApiContext} from "..contexts/ApiContext";
import SorReceptek from "..components/SorReceptek";

function Kategoria(){
    const {kategoriaLista}=useContext(ApiContext)

    return(
        <div>
        {kategoriaLista.map((recept)=>{
            return <SorReceptek recept={recept} key={recept.id}/>
        })}
        </div>
    )
}
export default Kategoria;