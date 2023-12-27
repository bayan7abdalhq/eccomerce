import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { loginSchema } from '../validation/validate.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { UserContext } from './../context/User';
export default function Login() {
    const navigate =useNavigate();
    let{userToken,setUserToken} =useContext(UserContext);
    
    if(userToken){
      navigate(-1);
    }
   
    const initialValues={
        email:'',
        password:'',
    };
     const onSubmit= async users=>{
        

        const{data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
        if(data.message=='success'){
            localStorage.setItem('userToken',data.token);
            setUserToken(data.token);
            toast.success('login successfully', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                }); 
                navigate('/');
    }
           
    };
    const formik=useFormik({
        initialValues,
        onSubmit,
       validationSchema:loginSchema,
    });
    const inputs =[
        {   
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },
    ];

    const renderInputs =inputs.map((input,index)=>
             <Input 
             type={input.type}
              id={input.id} 
              name={input.name} 
              title={input.title} 
              value={input.value}
              onChange={formik.handleChange}
              key={index} 
              errors={formik.errors}
              onBlur={formik.handleBlur}
              touched={formik.touched}
              />
    )

  return (
    <>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={formik.handleSubmit}>
        {renderInputs}
          
          
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <a href="#!" className="text-body">Forgot password?</a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" disabled={!formik.isValid} className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
 
</section>

    </>
  )
}
