import { useState} from "react"
import { Card,Button,Form,Input,Alert } from "antd"
import { Link } from "react-router-dom";
import {useAuth} from "../store/AuthContext"
import { GoogleAuth } from "../api"

export default function Sign() {
    const {login,currentUser} = useAuth()
    const [ error ,setError] = useState("")
    const [ loading ,setLoading] = useState(false)


    async function signin(value){
        try{
            setError('')
            setLoading(true)
            await login(value.email,value.password)
        }catch{
            setError('Failed to login')
        }
        setLoading(false)
    }

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
    return (
      <Card>
          {error && <Alert message={error} type="error" />}
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={signin}
            >
            <Form.Item
                label="Email"
                name="email"
                hasFeedback
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button disabled={loading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <Button className="googleauth" onClick={GoogleAuth}>
              Sign in with google
        </Button>
        <div>
            Don't have an account?
        </div>
        <Link to="/SignOn">Sign Up</Link>
      </Card>
    );
}