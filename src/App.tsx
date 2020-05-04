import React from "react";
import "./App.scss";
import { Button, Modal } from "antd";
import UserForm from "./components/UserForm";
import { useDispatch } from "react-redux";
import { addUser } from "./actions";
import UserList from "./components/UserList";

function App() {
  const dispatch = useDispatch();

  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    dispatch(addUser(values));
  };
  return (
    <div className="App">
      <Button type={"primary"}>Add User</Button>
      <UserForm handleSubmit={handleSubmit} />
      <UserList />
    </div>
  );
}

export default App;
