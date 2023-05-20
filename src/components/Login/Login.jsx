import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import {FaGoogle} from 'react-icons/fa';
import {GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../Providers/AuthProviders";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    useTitle('Login');
    const googleProvider = new GoogleAuthProvider();

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login Page Location', location);
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        event.target.reset();
        setError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User Login Successful');
                setError('');
                console.log(loggedUser);
                Navigate(from, {replace: true});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }

    // const handleSignOut = () => {
    //     signOut(auth)
    //         .then(result => {
    //             console.log(result);
    //             setUser(null);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if(!email) {
            alert('Please provide your email address to reset password');
            return;

        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your mail inbox')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Login with Email/Password</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your Email" name="email" ref={emailRef} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Your Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div>
                            <div className='my-3'>
                                <h5 className='text-center fw-bold'>OR</h5>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center btn btn-outline">
                            <span className="text-center rounded-full bg-pink-700 text-white p-2"><FaGoogle /></span>
                            <button className='mx-2 px-4 text-light p-3' onClick={handleGoogleSignIn}> Login with Google</button>
                        </div>
                    </div>
                    <p className="text-center text-2xl"><small>New to Childhood? Please <Link to="/register"><span className="text-pink-700 font-bold py-20">Register !</span></Link> </small></p>
                    <p className="text-danger">{error}</p>
                    <p className="text-success">{success}</p>
                </div>
            </div>
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;