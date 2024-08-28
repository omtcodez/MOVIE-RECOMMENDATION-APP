import React from 'react';
import { Button, Form, message } from "antd";
import { Link } from "react-router-dom";
import { LoginUser } from '../../apis/users';

function Login() {

    const onFinish = async (values) => {
        try {
            const response = await LoginUser(values);
            localStorage.setItem("token" , response.data);
            message.success(response.message);

        } catch (error) {
            message.error(error.message);

        }
    };


    return (
        <div className='grid grid-cols-2 h-screen '>
            <div className="bg-primary flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-5xl text-orange-500 font-semibold">
                        JUMBO MOVIE WORLD
                    </h1>
                    <span
                        className="text-md text-gray-300 mt-2">
                        The Best Movie Reviewer That You Could Come Across
                    </span>
                </div>

            </div>


            <div className="flex items-center justify-center">
                <div className='w-[400px]'>
                    <h1 className="text-2xl mb-2 ">
                        Login To Your Account
                    </h1>
                    <hr />

                    <Form
                        layout="vertical"
                        className="flex flex-col gap-5 mt-3"
                        onFinish={onFinish}>
                        <Form.Item label="Email" name="email">
                            <input />

                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <input type="password" />
                        </Form.Item>
                        <div className="flex flex-col gap-5">
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>

                            <Link to="/Register" >
                                Don't have an account? Register Here
                            </Link>
                        </div>


                    </Form>
                </div>


            </div>


        </div>
    )
}

export default Login