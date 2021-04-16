import { useState} from "react"
import { Card,Button,Form,Input,Alert } from "antd"
import { Link,useHistory } from "react-router-dom";
import {useAuth} from "../store/AuthContext"

export default function Forget() {
    const {forget,googleauth} = useAuth()
    const [ error ,setError] = useState("")
    const [ loading ,setLoading] = useState(false)
    const history =useHistory()


    async function sendemail(value){
        try{
            setError('')
            setLoading(true)
            await forget(value.email)
            setError('password reset email sent')
        }catch{
            setError('Failed to reset passwrod')
        }
        setLoading(false)
    }
    async function google(){
        try{
        setLoading(true)
        await googleauth()
        history.push("/Profile")
        }catch{
            setError('Failed to google')
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
            onFinish={sendemail}
            >
            <Form.Item
                label="Email"
                name="email"
                hasFeedback
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button disabled={loading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <Button className="googleauth" onClick={google}>
              Sign in with google
        </Button>
        <div>
            Back to Login
        </div>
        <Link to="/SignIn">Login</Link>
        <div>
            Don't have an account?
        </div>
        <Link to="/SignOn">Sign Up</Link>
      </Card>
    );
}