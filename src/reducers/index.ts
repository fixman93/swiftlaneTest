import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../actions";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface State {
  users: User[];
  lastId: number;
  currentUser: User | null;
}
const initialState: State = {
  users: [],
  lastId: 0,
  currentUser: null,
};
export default createReducer<State>(initialState, {
  [Actions.addUser.type]: (state, { payload }) => {
    const user = { ...payload, id: state.lastId + 1 };
    return {
      ...state,
      lastId: user.id,
      users: [...state.users, user],
    };
  },
  [Actions.editUser.type]: (state, { payload }) => {
    const users = [...state.users];
    const userIds = users.map((user) => user.id);
    const index = userIds.indexOf(payload.id);
    users.splice(index, 1, payload);

    return {
      ...state,
      currentUser: null,
      users,
    };
  },
  [Actions.setUser.type]: (state, { payload }) => {
    return {
      ...state,
      currentUser: payload,
    };
  },
});
