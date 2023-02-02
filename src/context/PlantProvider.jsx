import { useState } from "react"
import { usePlant } from "../hooks/usePlant";
import { PlantContext } from "./PlantContext"


export const PlantProvider = ( {children} ) => {

    const {plants,handleNewPlant, handleDeletePlant, handleTogglePlant} = usePlant();

  return (
    
    <PlantContext.Provider value={ { plants,handleNewPlant, handleDeletePlant, handleTogglePlant } }>
        { children }
    </PlantContext.Provider>
  );
};

