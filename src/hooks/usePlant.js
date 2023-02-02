import { useEffect, useReducer } from "react";
import { plantReducer } from "../helpers/PlantReducer";


const init = () => {
    return (localStorage.getItem('plants') != undefined)? JSON.parse(localStorage.getItem('plants')) :[];//El opuesto de JSON.stringify
}

export const usePlant = () => {


    const [plants, dispatch] = useReducer( plantReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('plants', JSON.stringify( plants ));//Es un API que viene directamente de JS
    
    }, [plants]);
    

    const handleNewPlant = (plant) => {
        const action = {
            type: '[PLANT] Add Plant',
            payload : plant,
        }
        dispatch( action );
    };

    const handleDeletePlant = ( id ) => {
        dispatch({
            type: '[PLANT] Remove Plant',
            payload : id,
        })
    };

    const handleTogglePlant = ( plant ) => {
        dispatch({
            type: '[PLANT] Toggle Plant',
            payload : plant,
        })

        
    };

    

    return {
        plants,
        handleNewPlant,
        handleDeletePlant,
        handleTogglePlant,
        // todosCount: todos.length,
        // pendingTodosCount: todos.filter( todo => !todo.done ).length,     
    }
}
