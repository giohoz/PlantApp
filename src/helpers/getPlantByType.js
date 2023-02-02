import { useContext } from "react";
import { PlantContext } from "../context/PlantContext";


export const getPlantByType = ( type ) => {
  
    const {plants} = useContext( PlantContext );


    return plants.filter( 
        plant => plant.type.includes(type)
     );

     
}


