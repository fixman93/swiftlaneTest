import React from "react";
import { useSelector } from "react-redux";
import { State, User } from "../reducers";
import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";

const UserList = () => {
  const users: User[] = useSelector((state: State) => state.users);

  console.log(users);

  return (
    <div className={"user__list"}>
      {users.map((user) => {
        return (
          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<EditOutlined key="edit" />]}
          >
            <Card.Meta title={user.name} description={user.email} />
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
