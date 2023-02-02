import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PlantContext } from "../context/PlantContext";
import { getPlantById } from "../helpers/getPlantById";

export const DescriptionPage = () => {

    const navigate = useNavigate();

	const { id } = useParams();

    const plant = getPlantById( id );

	const onNavigateBack = () =>{
		navigate(-1);
	}

	const onNavigateEdit = () =>{
		navigate(`/edit/${plant.id}`);
	}

	const { handleDeletePlant } = useContext( PlantContext );

	const onDelete = () =>{
		console.log( id.toString() )
		handleDeletePlant(plant.id);
		navigate('/');

	}

	if( !plant ){
		return <Navigate to={"/"}/>
	}



    const plantImageUrl =  (plant.type == 'Fruit')? `/src/assets/plant1.png`: `/src/assets/plant2.png`;

  return (
    <div className="row mt-5">
			<div className="col-4">
				<img 
				src={plantImageUrl} 
				alt={plant.name} 
				className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8">
				<h3>Name: {plant.name}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"><b>Type: </b>{plant.type}</li>
					<li className="list-group-item"><b>Status: </b>{plant.status}</li>
					<li className="list-group-item"><b>Update date: </b>{plant.update_date}</li>
				</ul>

				<h5 className="mt-3"> Description: </h5>
				<p>{ plant.description }</p>

				<div className="mt-2">
					<button 
					className="btn btn-outline-success"
					onClick = { onNavigateEdit }
					>
						Edit
					</button>
				</div>

				<div className="mt-2">
					<button 
						className="btn btn-outline-danger btn-block"
						onClick = { onDelete }
						>
							Delete
					</button>
				</div>

				<div className="mt-2">
					<button 
					className="btn btn-outline-primary btn-block"
					onClick = { onNavigateBack }
					>
						Back
					</button>
				</div>

			</div>

		</div>
  )
}
