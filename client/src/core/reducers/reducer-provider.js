import { SET_PROVIDER, TEST } from '../types';


const initialState = {
    test: '',
    web3Provider: null
};

export function providerReducer(state = initialState, action) {
    switch(action.type) {
        case TEST:
            return Object.assign({}, state, {
                test: action.payload
            })
        case SET_PROVIDER:
        console.log("string passed to reducer:", action.payload)
            return Object.assign({}, state, {
                web3Provider: action.provider
            })
            

            default:
                return state
    }
};

