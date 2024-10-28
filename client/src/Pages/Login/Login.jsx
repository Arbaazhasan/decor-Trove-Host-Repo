import React, { useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, adminSignIn, getAdminProfile } from '../../redux/action/adminLogin';
import { getUserProfile, userLogin, userSignIn } from '../../redux/action/userLogin';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(false);
    const [isAdminLogin, setAdminLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const { adminAuthenticated } = useSelector(state => state.admin);
    const { userAuthenticated } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handler = () => {

        isAdminLogin ?
            isSignIn ? adminSignIn(dispatch, name, username, password) : adminLogin(dispatch, username, password) :
            isSignIn ? userSignIn(dispatch, name, username, password) : userLogin(dispatch, username, password);

    };

    const passwordHandler = () => {

        setShowPassword((pre) => !pre);

    };


    useEffect(() => {


        getAdminProfile(dispatch);
        getUserProfile(dispatch);
        // console.log(userAuthenticated);

    }, [adminAuthenticated, userAuthenticated]);


    return (
        <div>
            <div className="loginPage">

                <Link to={'/'} className="goToHome">
                    <span><FaArrowLeft /></span>
                </Link>

                <div className="heading">
                    <h1>{isAdminLogin ? "Admin Login" : isSignIn ? "Sign In Now" : "Log In Now"}</h1>
                </div>

                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    handler();
                }}>

                    {isSignIn && <div>
                        <label htmlFor="">Name</label>
                        <input type="text" required onChange={(e) => { setName(e.target.value); }} />
                    </div>
                    }


                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" required onChange={(e) => { setUsername(e.target.value); }} />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type={showPassword ? "text" : "password"} required onChange={(e) => { setPassword(e.target.value); }} />
                        <div>
                            <input type="checkbox" onClick={passwordHandler} />
                            <label htmlFor="">Show Password</label>
                        </div>
                    </div>


                    <button >{isSignIn ? "SIGN IN" : "LOGIN IN"}</button>
                </form>

                {
                    isAdminLogin ? " " :
                        <div className="or">
                            <p>or</p>
                        </div>
                }

                {
                    isAdminLogin ? " " :
                        <button onClick={() => setIsSignIn((pre) => !pre)}>{isSignIn ? "HAVE AN ACCOUNT " : "CREATE AN ACCOUNT"}</button>
                }




                <Link to="/adminlogin" className="footer"><button onClick={() => { setAdminLogin((pre) => !pre); }}>{isAdminLogin ? "User Login" : "Admin Login"}</button></Link>

            </div>

        </div >
    );
};

export default Login;