import { useState} from "react"
import { Button,Form,Input,Alert } from "antd"
import {useAuth} from "../store/AuthContext"
import { Link,useHistory } from "react-router-dom"

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
export default function Signup() {
    const {signup} = useAuth()
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
            value.password.length<8?
            setError('password need at least 8 character') 
            :
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={registration}
                    >
                        <div className="signup-title">Register Account</div>
                        {error && <Alert message={error} type="error" />}
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            className="signup-pwd"
                            label="Confirm Password"
                            name="confirm"
                            dependencies={['password']}
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },({ getFieldValue }) => ({
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
                        <Form.Item {...tailLayout} >
                            <Button disabled={loading} type="primary" htmlType="submit" className="login-btn signup-btn" >
                            <div className="login-login-text">Sign Up</div>
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="signup-bottom">
                        <div className="signup-text">
                            Already have account ?
                        </div>
                        <Link to="/Login" className="signup-text sigup-login-link">
                            Log in
                        </Link>
                        
                    </div>

                </div>
                
            </div>
        </div>
    );
  }