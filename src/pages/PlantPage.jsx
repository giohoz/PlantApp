import { useState } from "react";
import { useNavigate } from "react-router-dom"
import PlantList from "../components/PlantList"


export const PlantPage = () => {
  const navigate = useNavigate();

  const [filterFruit, setFilterFruit] = useState(true);
  const [filterVegetable, setFilterVegetable] = useState(true);

  
  const onFilterFruit = () => {
    setFilterFruit(!filterFruit );
  }

  const onFilterVegetable = () => {
    setFilterVegetable( !filterVegetable );
  }
  

  const onAddPlant = () =>{
    navigate("/addPlant");
  }
  return (
    <>
        <div className="row rows-cols-1">
          <div className="col-7">
            <h1>Plant page</h1>
          </div>
          <div className="form-switch col-1 mt-3">
            <input className="form-check-input" type="checkbox"  onChange={onFilterFruit} checked={filterFruit} /> Fruit
          </div>
          <div className="form-switch col-2 mt-3">
            <input className="form-check-input" type="checkbox"  onChange={onFilterVegetable} checked={filterVegetable} /> Vegetable
          </div>

          <div className="col-2 p-2 text-end">
            <button className="btn btn-success" onClick={ onAddPlant }>Add Plant</button>
          </div>
        </div>
        <PlantList  filterFruit={ filterFruit } filterVegetable={ filterVegetable }/>
    </>
  )
}
