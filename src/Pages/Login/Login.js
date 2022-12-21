import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { login, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success("Successfully Login to your Account!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                toast.error("User Email or password doesn't exit's");
            });

    }

    const handelGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully Login to your Account!");
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Log In</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                            <Link onClick={handelGoogleLogin} className="btn text-3xl"><FcGoogle /></Link>

                        </div>
                    </form>
                    <p className='text-center'>New to Foodie Service! <Link className='text-pink-500 font-bold' to="/signup">Sign Up</Link> </p>
                    <ToastContainer />
                </div>
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="https://hackplanet.in/img/bannicon6.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;