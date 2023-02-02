import { useContext } from "react";
import { PlantContext } from "../context/PlantContext";
import { usePlant } from "../hooks/usePlant";
import { PlantCard } from "./PlantCard";


const PlantList = ({filterFruit, filterVegetable}) => {

    const {plants} = useContext( PlantContext );

    if(filterFruit){
        
    }
    


    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {plants.map(plant => {
                    if(filterFruit && plant.type == 'Fruit'){
                        return <PlantCard
                            key={ plant.id }
                        { ... plant }/>;
                    }else if(filterVegetable && plant.type == 'Vegetable'){
                        return <PlantCard
                            key={ plant.id }
                        { ... plant }/>;
                    }

                })
                }
            </div>
        </>

    )
}

export default PlantList



