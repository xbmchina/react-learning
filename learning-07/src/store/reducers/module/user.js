import * as types from '../../constants/types';


const initUserState = {

    userInfo: {
        hasLogined: false,
        username: '',
        avatar: '',
        id: '',
        token: ''
    }

}

export function user(state = 0,action){

    switch(action.type) {
        case types.LOGOIN_SUCCESS:
            console.log("user......"+ action.payload);
            return state+10;
        case types.LOGOUT:
            return state - 10;
        
        default:
            return state;
    }

}


