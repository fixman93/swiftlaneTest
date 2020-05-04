import { createAction } from "@reduxjs/toolkit";
import { User } from "../reducers";

export const addUser = createAction<{
  name: string;
  phone: string;
  email: string;
}>("ADD_USER");
export const editUser = createAction<User>("EDIT_USER");
