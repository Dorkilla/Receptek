import { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function SorReceptek(props){
    const {receptLista, setReceptLista}=useContext(ApiContext);

    function kattintas(){
        console.log('valami');
    }

    return(
       <tr onClick={kattintas}>
            <td scope="row"></td>
            <td>{props.recept.nev}</td>
            <td>
                <img 
                    src={props.recept.kep_eleresi_ut} 
                    alt={props.recept.nev} 
                    height="100" 
                />
            </td>
            <td>{props.recept.leiras}</td>
            <td>{props.recept.receptkategoria[0].nev}</td>
            </tr>
    )
}

export default SorReceptek;