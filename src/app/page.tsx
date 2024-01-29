'use client';
import React,{useEffect,useState} from "react";
import { useRouter } from "next/navigation";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import app from '@/firebase/firebase';
import { Modal } from 'antd';
import './globals.css'

const Home = () : JSX.Element => {
  const [open,setOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  }
  useEffect(() => {
    onAuthStateChanged(getAuth(app),user => {
      if(user){
        if(user?.uid === localStorage.getItem('firebaseUID')){
          return;
        }else{
          handleOpen();
        }
      }else{
        handleOpen();
      }
    })
  },[])
  return (
      <main>
        <Modal okButtonProps={{style : {backgroundColor : 'rgb(59 130 246 / 1)'}}} open={open} onCancel={handleClose} onOk={() => {
          router.push('/login');
        }}>
          <h3 className="font-semibold text-xl">You are not sign in</h3>
          <p className="text-xs">Click ok to go Sign in page</p>
        </Modal>
      </main>
  );
}

export default Home;