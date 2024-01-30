'use client'
import React, { useEffect } from 'react'
import { Row, Col, Form, Input, Divider, Flex, message } from 'antd';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import app from '@/firebase/firebase';
import { Button } from '@mui/material/';



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
  // useEffect(() => {
  //   onAuthStateChanged(getAuth(app), (user) => {
  //     if (user) {
  //       if (user?.uid === localStorage.getItem('firebaseUID')) {
  //         messageApi.open({
  //           type: 'success',
  //           content: 'You are already logged in',
  //         });
  //         setTimeout(() => {
  //           router.push('/');
  //         }, 1500)
  //       } else {
  //         return;
  //       }
  //     }
  //   })
  // }, [])
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
        const res = await signInWithEmailAndPassword(auth, values?.email, values?.password);
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
          content : 'Something went wrong',
        });
      }
    }
  })

  return (
    <Row className='h-[calc(100vh-55px)] flex justify-center items-center'>
      {contextHolder}
      <Col span={24} className='flex justify-center items-center'>
        <Flex justify='center' align='center' className='w-[100%] md:w-[60%] lg:w-[50%] shadow-xl rounded-xl h-[370px] mx-5'>
          <Flex className='w-[100%] max-w-[400px] px-5 md:px-0 ' vertical>
            <Form style={{ marginLeft: 0 }} onFinish={() => formik.handleSubmit()} {...FormGrid} className='w-[100%] mx-4 md:mx-0' autoComplete='on' autoCorrect='on'>
              <Form.Item name='email' rules={[{ required: true, message: formik?.errors?.email }]}>
                <Input onChange={formik.handleChange} type='email' size='large' prefix={<HiOutlineMail />} placeholder='Email' />
              </Form.Item>
              <Form.Item name='password' rules={[{ required: true, message: formik.errors.password, max: 24, min: 8 }]}>
                <Input.Password onChange={formik.handleChange} size='large' prefix={<RiLockPasswordFill />} placeholder='Password' />
              </Form.Item>
              <Form.Item>
                <Flex justify='center'>
                  <Button type='submit' size='medium' className='w-[50%]' startIcon={<RiAccountBoxFill />}>
                    Login In
                  </Button>
                </Flex>
              </Form.Item>
              <Divider orientation='center'>OR</Divider>
            </Form>
            <Button style={{ backgroundColor: '#FD5D5D' }} onClick={handleGoogleAuth} variant='contained' color='warning' startIcon={<FaGoogle />} size='medium'>
              Log In with Google
            </Button>
          </Flex>
        </Flex>
      </Col>
    </Row>
  )
}

export default Login
