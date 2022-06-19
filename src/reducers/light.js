const initialState = {
    lightIsOn: false,
};

const lightReducer = (
    state = initialState, 
    action ,
) =>{
    switch(action.type){
        case 'TURN_ON': {
            return{
                ...state,
                lightIsOn: true
            }
        }
        case 'TURN_OFF': {
            return{
                ...state,
                lightIsOn: false
            }
        }
        default: {
            return state;
        }
    }
};

export default lightReducer;