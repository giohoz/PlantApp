import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
    const [formState,setFormState] = useState( initialForm );

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value,//Esta forma de poner el name es para que lo tome como la varieble que hemos declarado antes y no para que lo tome como una nueva propiedad
        })
    }

    const onResetForm = () =>{
        
        setFormState( initialForm );
    }

    return {
        ... formState,
        formState,
        onInputChange,
        onResetForm,
    }

}