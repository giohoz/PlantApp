

export const plantReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[PLANT] Add Plant':
            return [ ... initialState, action.payload ];

        case '[PLANT] Remove Plant' :
            return initialState.filter( plant => plant.id !== action.payload );
        
        case '[PLANT] Toggle Plant':
            return initialState.map( plant => {
                if( plant.id === action.payload.id ){
                    return {
                        ...plant,
                        name: action.payload.name,
                        description: action.payload.description,
                        status: action.payload.status,
                        update_date: action.payload.update_date
                    }
                }
                return plant;
            } );

    
        default:
            return initialState;
    }
}
