import { useState} from "react"
import { Button,Form,Input,Alert } from "antd"
import { Link } from "react-router-dom";
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
export default function Forget() {
    const forget =useAuth()
    const [ error ,setError] = useState("")
    const [ loading,setLoading] = useState(false)
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
    return (
      <div className="login-block">
        <div className="login-bg"></div> 
        <div className="login-from">
          {error && <Alert message={error} type="error" />}
          <div className="login-from-bg">
          <div className=" fgt-title">Forget Password</div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={sendemail}
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
                    
            <Form.Item {...tailLayout} >
              <Button type="primary" htmlType="submit" className="login-btn  foget-btn" >
              <div className="login-login-text">Send</div>
              </Button>
            </Form.Item>
          </Form>
          <div className="  fgt-botm">
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