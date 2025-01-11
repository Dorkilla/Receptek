import { ApiContext } from "../contexts/ApiContext";
import { useContext } from "react";
import SorReceptek from "./SorReceptek";


function TablazatReceptek(){
    const{receptLista}=useContext(ApiContext);

    return(
        <div className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <table className="table">
        <thead>
            <tr>
                <th scope="col">Név:</th>
                <th scope="col">Kategória:</th>
                <th scope="col">Kép:</th>
                <th scope="col">Leírás:</th>
            </tr>
        </thead>
        <tbody>
        {receptLista.map((recept)=>{
                return <SorReceptek recept={recept} key={recept.id} />
            })}
        </tbody>
        </table>
        </div>
    )
}

export default TablazatReceptek;