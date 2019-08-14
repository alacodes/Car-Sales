import {ADD_FEATURE, REMOVE_FEATURE} from '../actions/carActions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    store: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing Detail Pkg', price: 1500 },
        { id: 3, name: 'Premium Sound System', price: 500 },
        { id: 4, name: 'Rear Spoiler', price: 250 },
    ]
};

export const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_FEATURE: 
            if(state.car.features.map(element=>element.id).includes(action.payload.id)) return state

            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price, 
                car:
                {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
            }
        
            
        case REMOVE_FEATURE: 
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car:
                {
                    ...state.car,
                    features: state.car.features.filter(element => element.id !== action.payload.id)
                }
            }
        default: 
            return state
    }

}