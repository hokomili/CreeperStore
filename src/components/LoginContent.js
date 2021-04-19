import { useState} from "react"
import google from "../images/google-ico.png"
import { Button,Form,Input,Alert,Checkbox } from "antd"
import { Link,useHistory } from "react-router-dom";
import {useAuth} from "../store/AuthContext"

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
export default function LoginContent() {
    const {login,googleauth} = useAuth()
    const [ error ,setError] = useState("")
    const [ loading ,setLoading] = useState(false)
    const history =useHistory()

    async function signin(value){
        try{
            setError('')
            setLoading(true)
            await login(value.email,value.password)
            history.push("/Profile")
        }catch{
            setError('Failed to login')
        }
        setLoading(false)
    }
    async function googlelog(){
        try{
        setLoading(true)
        await googleauth()
        history.push("/Profile")
        }catch{
            setError('Failed to google')
        }
        setLoading(false)
    }
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                    <div className="login-title">LOG IN</div>
                    <div className="login-from-flex">
                        <div className="login-from-l">
                            <div>
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
                                    className="login-pwd"
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
                                <Link to='/Forget-Password' className="login-form-forgot" >
                                    Forgot password?
                                </Link>
                                <Form.Item {...tailLayout} name="remember" valuePropName="checked" className="from-block">
                                    <div><Checkbox>Remember me</Checkbox></div>
                                </Form.Item>

                                    <div className="sign-rwd-flex">
                                <Form.Item {...tailLayout} >
                                    <Button disabled={loading} type="primary" htmlType="submit" className="login-btn" >
                                        <div className="login-login-text">Login</div>
                                    </Button>
                                </Form.Item>
                                <Link to='/Signup' className="sign-rwd">
                                <Button className="login-sign-bottom ">
                                    < div className="login-google-text login-signup-text">Sign Up</div > 
                                </Button>
                                </Link ></div>
                            </Form>
                            </div>
                        </div>                        
                        
                        <div className="btw-text"><div className="btw-line"></div></div>
                        <div className="login-from-r">
                            
                                    <Link onClick={googlelog} to='/Profile' >
                                    <div className="login-google-bottom  ">
                                       <div className="login-google-text">Sign in with Google</div> 
                                    <img  src={google} alt="" className="google-ico"/>
                                    </div>
                                    </Link>
                            
                            <div className="or-text">OR</div>
                            <Link to='/Signup' className="big-rwd">
                                <Button className="login-sign-bottom ">
                                    < div className="login-google-text login-signup-text">Sign Up</div > 
                                </Button>
                            </Link >
                        </div>                        
                    </div>

                </div>
                
            </div>
        </div>
    );
}