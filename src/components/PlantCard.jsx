import { Link } from "react-router-dom";

export const PlantCard = ( { id,
    name, 
    type, 
    status,
    update_date,
    description
    } ) => {
        
        const plantImageUrl =  (type == 'Fruit')? `/src/assets/plant1.png`: `/src/assets/plant2.png`;
        

        return (
            <div className="col animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4 mt-4 ml-1">
                            <img src={plantImageUrl} className="img-thumbnail" alt={name}/>
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">Name: {name}</h5>
                                <p className="card-text">Type: { type }</p>
                                <p className="card-text">Status: { status }</p>

                                <p className="card-text">
                                    <small className="text-muted">Last Update: { update_date }</small>
                                </p>

                                <Link to={`/desc/${id}`}>
                                    More ...
                                </Link>

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
