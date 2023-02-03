import { useContext } from "react";
import { PlantContext } from "../context/PlantContext";



export const getPlantByName = ( name = '' ) => {

    const {plants} = useContext( PlantContext );

    

    if( name.length ===  0 ) return [];

    return plants.filter( 
        plant => plant.name.toLocaleLowerCase().includes(name.toLocaleLowerCase().trim())
     );

}