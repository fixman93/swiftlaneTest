import React, { FC } from "react";
import { Button, Card } from "antd";
import { setUser } from "../actions";
import history from "../history";
import { useDispatch } from "react-redux";
import { EditOutlined } from "@ant-design/icons";
import { User } from "../reducers";

interface UserCard {
  user: User;
}
const UserCard: FC<UserCard> = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Card
      key={user.id}
      style={{ marginTop: 16 }}
      actions={[
        <Button
          key="edit"
          icon={<EditOutlined />}
          onClick={() => {
            dispatch(setUser(user));
            history.push("/edit");
          }}
        >
          {" "}
          Edit
        </Button>,
      ]}
    >
      <Card.Meta title={`Name: ${user.name}`} />
      <Card.Meta title={`Email: ${user.email}`} />
      <Card.Meta title={`Phone: ${user.phone}`} />
    </Card>
  );
};

export default UserCard;
