import React, { FC, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { State } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, setUser } from "../actions";
import history from "../history";

interface UserForm {}
const UserForm: FC<UserForm> = () => {
  const currentUser = useSelector((state: State) => state.currentUser);
  const dispatch = useDispatch();

  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
  }) => {
    if (!currentUser) {
      dispatch(addUser(values));
    } else {
      dispatch(editUser({ ...currentUser, ...values }));
    }
    history.push("/");
  };

  useEffect(() => {
    return () => {
      dispatch(setUser(null));
    };
  }, []);

  return (
    <Form
      name="basic"
      initialValues={currentUser || {}}
      onFinish={(values) => handleSubmit(values as any)}
      layout={"vertical"}
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "This input is not valid E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
