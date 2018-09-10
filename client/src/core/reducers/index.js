import { combineReducers } from 'redux';
import { providerReducer } from './reducer-provider';

const rootReducer = combineReducers({
    provider: providerReducer
});

export default rootReducer;