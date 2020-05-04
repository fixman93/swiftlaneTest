import React, {FC} from "react";
import {Button, Checkbox, Form, Input} from "antd";

const UserForm: FC = ()=> {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={()=>console.log('finished')}
            onFinishFailed={()=>console.log('finished')}
            layout={'vertical'}
        >
            <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!', type:"email" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}
            >
                <Input />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default UserForm;
