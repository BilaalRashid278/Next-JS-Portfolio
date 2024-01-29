'use client'
import React from 'react'
import { Row, Col, Form, Input, Button, Divider, Flex, message } from 'antd';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '@/firebase/firebase';



const FormGrid = {
  labelCol: {
    xs: {
      span: 24
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
  }
}

interface FieldProps {
  email: string,
  password: string
}


const Login: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider).then((credentials) => {
      localStorage.setItem('firebaseUID', credentials?.user?.uid);
      messageApi.open({
        type: 'success',
        content: 'Signin Successfully',
      });
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }).catch(err => {
      messageApi.open({
        type: 'error',
        content: 'Someting went wrong',
      });
    });
  };
  const formik: FormikProps<FieldProps> = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().required('Email is required').email('Please enter a valid email address'),
      password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long').max(24, 'Password must be at least 24 characters long')
    }),
    onSubmit: async (values) => {
      try {
        const res = await createUserWithEmailAndPassword(auth, values?.email, values?.password);
        localStorage.setItem('firebaseUID', res?.user?.uid);
        messageApi.open({
          type: 'success',
          content: 'Signin Successfully',
        });
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: 'Someting went wrong',
        });
      }
    }
  })

  return (
    <Row className='h-[calc(100vh-55px)]'>
      {contextHolder}
      <Col span={24} className='flex justify-center mt-36'>
        <Flex className='w-[100%] max-w-[400px]' vertical>
          <Form onFinish={() => formik.handleSubmit()} {...FormGrid} className='w-[100%] mx-4 md:mx-0' autoComplete='on' autoCorrect='on'>
            <Form.Item name='email' rules={[{ required: true, message: formik?.errors?.email }]}>
              <Input onChange={formik.handleChange} type='email' size='large' prefix={<HiOutlineMail />} placeholder='Email' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: formik.errors.password, max: 24, min: 8 }]}>
              <Input.Password onChange={formik.handleChange} size='large' prefix={<RiLockPasswordFill />} placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Flex justify='center'>
                <Button type='default' htmlType='submit' size='middle' className='w-[50%]' icon={<RiAccountBoxFill />}>
                  Sign in
                </Button>
              </Flex>
            </Form.Item>
            <Divider orientation='center'>OR</Divider>
          </Form>
          <Button onClick={handleGoogleAuth} icon={<FaGoogle />} type="primary" danger>
            Signup with Google
          </Button>
        </Flex>
      </Col>
    </Row>
  )
}

export default Login
