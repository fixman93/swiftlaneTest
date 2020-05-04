import {createReducer} from "@reduxjs/toolkit";
import * as Actions from '../actions'

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}
const initialState: {users: User[]} = {
    users: [],
}
export default createReducer<{users: User[]}>(initialState, {
    [Actions.addUser.type]: (state, {payload})=>{
        return {
            users: [...state.users, payload]
        }
}
});
