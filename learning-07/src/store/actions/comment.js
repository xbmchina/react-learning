import * as types from '../constants/types'


export function addComment(data) {
    console.log("addComment.... action"+data);
    return {
        type: types.ADD_COMMENT,
        payload: data
    }
}

