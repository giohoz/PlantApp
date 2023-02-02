import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../hooks/useForm";
import { getPlantByName } from "../helpers/getPlantByName";
import { PlantCard } from "../components/PlantCard";


export const SearchPage = () => {

	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const plants = getPlantByName( q ); 

	const {searchText, onInputChange,} = useForm({
		searchText: q
	});


	
	const onSearchSubmit = ( event ) => {
		event.preventDefault();

		navigate(`?q=${searchText}`, );
	  
	}
	


  return (
    <>
        <h1>Search page</h1>
        <hr />


		<div className="row">
			<div className="col-5">
				<h4>Searching</h4>
				<hr />
				<form onSubmit={ onSearchSubmit }>
					<input 
					type="text"
					placeholder="Search a plant" 
					className="form-control"
					name="searchText"
					autoComplete="off"
					value={ searchText }
					onChange={ onInputChange }
					/>

					<button className="btn btn-outline-primary mt-1">
						Search
					</button>
				</form>
			</div>

			<div className="col-7">
				<h4>Results</h4>
				<hr />

				{
					( q == '' )
					? <div className="alert alert-primary">Search a plant</div>
					: (plants.length === 0)
					? <div className="alert alert-danger">No plant with <b>{ q }</b></div>
					:<></>
				}

				{
					plants.map( plant => {
						return <PlantCard key={plant.id} {... plant}/>
					}

					)
				}

			</div>
		</div>
        
    </>
  )
}


