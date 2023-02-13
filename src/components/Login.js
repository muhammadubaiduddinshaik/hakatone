import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Visibility,Email } from '@mui/icons-material'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
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
                <section className='d-flex justify-content-between'style={{width:'85%',margin: 'auto'}}>
                    <div className="left_data mt-3 p-3" style={{width:' 50%',
    marginLeft: '37%', paddingTop:'47px'}}>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail"style={{display:"flex",justifyContent:'center',alignItem:'center'}}>

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Email"  style={{
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    fontSize: '20px',
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}}/> <Email style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword" style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{
     display:'block',
    width:'100%',
    padding:'0.375rem 0.75rem',
    fontWeight:' 600',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip:' padding-box',
    appearance: 'none',
    borderRadius:' 0.25rem',
    outline: 'none',
    border: 'none',
    fontSize: "20px",
    borderBottom: '1px solid #ced4da',
    fontFamily:' unset'}}/><Visibility style={{color:'#777',fontSize:'30px',marginLeft: '-43px'}}/>
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{ fontSize: '26px',
    marginTop:' 30px',
    borderRadius: "10px",
    padding: '13px 0px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
    background: '#61B846',
    border: 'none',
    boxShadow: '0px 0px 4px 2px grey'}}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3' style={{color:'#024F9D',fontFamily:'sans-serif',fontWeight:'700',fontSize:'19px'}}>Dont't have an account?  <span>Register</span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login