import * as types from '../constants/types'



export function loginSuccess(data) {
    return {
        type: types.LOGOIN_SUCCESS,
        payload: data
    }
}



export function logOut() {

    return {
        type: types.LOGOUT
    }
}


