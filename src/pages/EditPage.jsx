import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PlantForm from "../components/PlantForm";
import { PlantContext } from "../context/PlantContext";
import { getPlantById } from "../helpers/getPlantById";
import { useForm } from "../hooks/useForm";

export const EditPage = ( ) => {

    const {id} = useParams();

    const plant = getPlantById( id );


    const { name,type, status ,description, update_date, onInputChange, onResetForm } = useForm({
        name: plant.name, 
        type: plant.type,
        status: plant.status,
        description: plant.description,
        update_date: ''
    })

    const { handleTogglePlant } = useContext( PlantContext );

    const navigate = useNavigate();

    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if ( description.length <= 1 || name.length <= 1 || status == '' ){
            alert('The plant needs to have a name, a description and a status.');
            return;
        }

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy; 

        const newPlant = {
            id: plant.id,
            name: name, 
            type: plant.type,
            status: status,
            description: description,
            update_date: today
        }


        handleTogglePlant( newPlant );
        

        onResetForm();
        navigate('/');
    };

    const onNavigateBack = () =>{
        navigate(-1);
    }
    



    const plantImageUrl =  (plant.type == 'Fruit')? `/src/assets/plant1.png`: `/src/assets/plant2.png`;

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
