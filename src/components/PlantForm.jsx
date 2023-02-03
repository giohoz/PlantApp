import { useLocation } from "react-router-dom"


const PlantForm = ( { name,type,description, onInputChange, onFormSubmit } ) => {


    const location = useLocation();
    
  return (
    <>
        <form onSubmit={onFormSubmit}>
            <h2>Plant Information</h2>
            <input value={ name } onChange = {onInputChange} name='name' type="text" id="" placeholder="Plant Name" className="form-control mb-2"/>
            <input value={ description } onChange = {onInputChange} name='description' type="text" id="" placeholder="Description" className="form-control"/>
            
            {(location.pathname === '/addPlant')?
                <>
                    <hr />
                    <h2>Type of plant</h2>
                    <div onChange={ onInputChange } >
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Fruit" name="type" />Fruit
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Vegetable" name="type" />Vegetable
                        </div>
                    </div>
                </>
                :
                <>
                    <hr />
                    <h2>Plant Status</h2>
                    <div onChange={ onInputChange } >
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Planted" name="status" />Planted
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Flowered" name="status" />Flowered
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Harvested" name="status" />Harvested
                        </div>
                    </div>
                </>
            }
            <hr />
            <button type="submit" className="btn btn-outline-success mt-1 mb-2"> {(location.pathname == '/addPlant')? 'Add' : 'Save'}</button>
        </form>
    </>
  )
}

export default PlantForm
