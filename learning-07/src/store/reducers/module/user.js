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

export function user(state = initUserState,action){

    switch(action.type) {
        case types.LOGOIN_SUCCESS:
            console.log("user......"+ action.payload.id);
            return {
                ...state,
                userInfo: action.payload
            };
        case types.LOGOUT:
            return {
                ...state,
                userInfo: ''
            };
        
        default:
            return state;
    }

}


