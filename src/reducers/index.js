import {combineReducers} from 'redux';
import counterReducer from './counter';
import faqReducer from './faq';
import lightReducer from './light';

const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer, 
    faq: faqReducer,
});

export default rootReducer;