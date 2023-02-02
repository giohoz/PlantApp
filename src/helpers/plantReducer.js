

export const plantReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[PLANT] Add Plant':
            return [ ... initialState, action.payload ];

        case '[PLANT] Remove Plant' :
            return initialState.filter( plant => plant.id !== action.payload );//Podemos usar esta funcion a diferencia del push ya que filter no hace mutar el arreglo si no que regresa un arreglo completamente nuevo
        
        case '[PLANT] Toggle Plant':
            return initialState.map( plant => {

                console.log(  'Estoy editando una planta' );

                if( plant.id === action.payload.id ){
                    console.log( 'Encontre la planta' );
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
            console.log('Entre');
            return initialState;
    }
}
