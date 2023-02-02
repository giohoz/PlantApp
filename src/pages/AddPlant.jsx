import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PlantForm from "../components/PlantForm";
import { PlantContext } from "../context/PlantContext";
import { useForm } from "../hooks/useForm";

export const AddPlant = () => {

    const { name,type,description, onInputChange, onResetForm } = useForm({
        name:'', 
        type:'',
        description:'',
    })
    
    const {handleNewPlant} = useContext( PlantContext );

    const navigate = useNavigate();

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1 || name.length <= 1 || type == '' ){
            alert('The plant needs to have a name, a description and a type.');
            return;
        }

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy; 

        const newPlant = {
            id: new Date().getTime().toString(), 
            name:name,
            type: type,
            status: 'Planted',
            description: description,
            update_date: today
        }

        handleNewPlant( newPlant );

        console.log( type, description );

        onResetForm();
        navigate(-1);
    };


    const onNavigateBack = () =>{
        navigate(-1);
    }


    const plantImageUrl =  (type == 'Fruit')? `/src/assets/plant1.png`: `/src/assets/plant2.png`;

  return (
    <div className="row mt-5">
			<div className="col-4">
				<img 
				src={plantImageUrl}  
				className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8">
                <PlantForm 
                    name={name} 
                    type={type} 
                    description={description} 
                    onInputChange={onInputChange} 
                    onFormSubmit={onFormSubmit}
                />

                <button 
                className="btn btn-outline-danger"
                onClick = { onNavigateBack }
                >
                    Back
                </button>
			</div>
	</div>
  )
}
