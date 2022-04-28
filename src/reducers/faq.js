let initialState = {
    question: [],
}


const faqReducer = (
    state = initialState, 
    action,
) =>{
    //[...questionAnswer, '']
    
   
    switch(action.type){
        case 'Add_FAQ': {          
            
            return {
                ...state,
                question: [...state.question, action.payload]
            }
        }

        case 'REMOVE_FAQ': {
            console.log('cadena')
            let cadena = []
            cadena = [...state.question]
            
            cadena.splice(action.payload, 1)
            return{
                ...state,
                question: [cadena]
            }
        }

        case 'REMOVE_ALL': {
            return {question: []}
        }

        case 'UPDATE_FAQ': {
            return{
                ...state,
                question: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default faqReducer;