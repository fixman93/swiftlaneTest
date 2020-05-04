import React from 'react';
import './App.scss';
import {Button} from "antd";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
        <Button type={'primary'}>Add User</Button>
        <UserForm/>
    </div>
  );
}

export default App;
