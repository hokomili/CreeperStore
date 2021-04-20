import { useState} from "react"
import { Button,Form,Input,Alert } from "antd"
import {upload}from "../api"

export default function ProductCreater() {
    const [ error ,setError] = useState("")
    const [ loading ,setLoading] = useState(false)


    async function Submission(value){
        try{
            setError('')
            setLoading(true)
            await upload(value)
            setError('success')
        }catch{
            setError('Failed to create')
        }
        setLoading(false)
    }
    return (
        <div className="login-block">
            <div className="login-bg"></div> 
            <div className="login-from">
                
                <div className="login-from-bg">
                    <Form
                        style={{alignItems:"center",justifyContent:"center"}}
                        layout="inline"
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={Submission}
                    >
                        <div className="signup-title" style={{fontSize:"70px"}}>Submit product</div>
                        {error && <Alert message={error} type="error" />}
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your title!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your category!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Category2"
                            name="category2"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your category2!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Author"
                            name="author"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your author!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Author_image"
                            name="author_image"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your author_image!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your image!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="dtlimg01"
                            name="dtlimg01"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your dtlimg01!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="dtlimg02"
                            name="dtlimg02"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your dtlimg02!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="dtlimg03"
                            name="dtlimg03"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your dtlimg03!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Views"
                            name="views"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your views!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Downloads"
                            name="downloads"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your downloads!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Favorite"
                            name="favorite"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your favorite!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item
                            label="Like"
                            name="like"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your like!',
                            },
                            ]}
                        >
                            <Input allowClear/>
                        </Form.Item>
                        <Form.Item >
                            <Button disabled={loading} type="primary" htmlType="submit" className="login-btn signup-btn" >
                            <div className="login-login-text">Upload</div>
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
                
            </div>
        </div>
    );
  }