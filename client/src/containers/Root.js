import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Web3 from 'web3';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../core/reducers';


import configureStore from '../core/store/configureStore';
import * as providerActionCreators from '../core/actions/actions-provider';

const store = configureStore();

import App from './App';


export default class Root extends Component {
    componentDidMount() {
        // const { actions } = this.props;
        // actions.provider.Test("hello world");
        // if (typeof window.web3 !== 'undefined') {
        //    const currentProvider = window.web3.currentProvider;
        //    const web3Provider = new Web3(currentProvider);
        //    actions.provider.setProvider(web3Provider);
        // }
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.provider.web3Provider !== nextProps.provider.web3Provider) {
    //         console.log('web3 prover changed updating..');
    //         this.getAvailableItems();
    //     }
    // }

    getAvailableItems() {
        console.log("getting avaiable items");
    }

    render () {
        return (
                <Provider store={store}>
                    <App />
                </Provider>
           
        )
    }
}

