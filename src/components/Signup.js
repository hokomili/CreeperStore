import {useRef} from "react"
import { Card,Button,Form,Input } from "antd"
import { GoogleAuth } from "../api"
import { Link } from "react-router-dom"
export default function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
        
    return (
        <Card>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Email"
                    name="Email"
                    ref={emailRef}
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    ref={passwordRef}
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm"
                    name="Confirm"
                    ref={passwordConfirmRef}
                    rules={[{ required: true, message: 'Confirm password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Button className="googleauth" onClick={GoogleAuth}>
                Sign in with google
            </Button>
            <div>
                Already have an account?
            </div>
            <Link to="/SignIn">Log In</Link>
        </Card>
    );
  }