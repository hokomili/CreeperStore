import { useState} from "react"
import { Card,Button,Form,Input,Alert } from "antd"
import {useAuth} from "../store/AuthContext"
import { Link,useHistory } from "react-router-dom"



export default function Signup() {
    const {signup,googleauth} = useAuth()
    const [ error ,setError] = useState("")
    const [ loading ,setLoading] = useState(false)
    const history=useHistory()


    async function registration(value){
        try{
            setError('')
            setLoading(true)
            await signup(value.email,value.password)
            history.push("/Profile")
        }catch{
            setError('Failed to create an account')
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
            {error && <Alert variant="danger">{error}</Alert>}
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={registration}
                >
                <Form.Item
                    label="Email"
                    name="email"
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

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
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
                Already have an account?
            </div>
            <Link to="/SignIn">Log In</Link>
        </Card>
    );
  }