import React, { FC } from "react";
import { Button, Form, Input } from "antd";
import { User } from "../reducers";

interface UserForm {
  handleSubmit: (values: any) => void;
  user?: User;
}
const UserForm: FC<UserForm> = ({ handleSubmit, user }) => {
  return (
    <Form
      name="basic"
      initialValues={user || {}}
      onFinish={(values) => handleSubmit(values)}
      onFinishFailed={() => console.log("finished")}
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
