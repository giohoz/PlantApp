import { usePlant } from "../hooks/usePlant";



export const getPlantById = ( id ) => {

    const  {plants} = usePlant();
    
    return plants.find( plant => plant.id == id);
}