import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Mail, Phone, Visibility } from '@mui/icons-material'

const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, contact, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (contact === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
            <div className='saylani-welfare-form' style={{
                    fontSize: '40px',
                    color: '#61B846',
                    fontFamily: 'sans-serif',
                    fontWeight:' 700',
                    paddingTop: '60px',textAlign:'center'
            }}>SAYLANI WELFARE</div>
                <div className='online-discount-tag' style={
                    {fontSize: "26px",
                        paddingTop: '0px',
                        fontWeight:' 600',
                        color: '#024F9D',textAlign:'center'}
                }>ONLINE DISCOUNT STORE</div>
                <section className='d-flex justify-content-between' style={{width:'85%',margin: 'auto'}}>
                    <div className="left_data mt-3 p-3" style={{width:' 50%',
    marginLeft: '33%', paddingTop:'47px'}} >
                        <Form >
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail" style={{display:"flex",justifyContent:'center',alignItem:'center'}}>

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Full Name" style={{
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontSize: '20px',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}} /><AccountCircleIcon style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail" style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
  
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Email" style={{
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontSize: '20px',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip:' padding-box',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}} />
     <Mail style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail" style={{display:'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>

                                <Form.Control onChange={getdata} name='contact' type="text" placeholder="Contact" style={{display: 'flex',
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontSize: '20px',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip:' padding-box',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}} />
    <Phone style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
 
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword" style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password"  style={{
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontSize: '20px',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip:' padding-box',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}} />
    <Visibility style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
                            </Form.Group>
                            <Button variant="primary" className='col-lg-8' onClick={addData} style={{ fontSize: '26px',
    marginTop:' 30px',
    borderRadius: "10px",
    padding: '13px 0px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    background: '#61B846',
    border: 'none',
    boxShadow: '0px 0px 4px 2px grey'}} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <p className='mt-3' style={{color:'#024F9D',fontFamily:'sans-serif',fontWeight:'700',fontSize:'19px'}}>Already have an Account? <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home