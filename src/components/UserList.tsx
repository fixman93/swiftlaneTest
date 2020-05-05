import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, User } from "../reducers";
import { Button } from "antd";
import history from "../history";
import UserCard from "./UserCard";

const UserList = () => {
  const users: User[] = useSelector((state: State) => state.users);

  return (
    <div className={"user__list"}>
      <Button type={"primary"} onClick={() => history.push("/new")}>
        Add User
      </Button>
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
