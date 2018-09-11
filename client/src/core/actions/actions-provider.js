import { SET_PROVIDER, TEST } from '../types';

export function setProvider(provider) {
    return (dispatch) => {
        provider.eth.getAccounts((error, accounts) => {
            if (error) { return }

            const userAccount = accounts[0];

            provider.eth.defaultAccount = userAccount;

            dispatch((() => {
                return {
                    type: SET_PROVIDER,
                    provider: provider
                }
            })())
        })
    }
};


export function Test(string) {
    return (dispatch) => {

        dispatch((() => {
            return {
                type: TEST,
                payload: string
            }
        })())
    }
}
