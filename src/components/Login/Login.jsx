import {Link} from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import {FaEnvelope, FaGoogle} from 'react-icons/fa';
import {getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    // const auth = getAuth(app);
    useTitle('Login');

    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             setUser(loggedUser);
    //             navigate('/');
    //         })
    //         .catch(error => {
    //             console.log("error", error.message);
    //         })
    // }

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

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Login with Email/Password</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Your Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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
                            <button className='mx-2 px-4 text-light p-3'> Login with Google</button>
                        </div>
                    </div>
                    <p className="text-center text-2xl"><small>New to this website? Please <Link to="/register"><span className="text-pink-700 font-bold py-20">Register !</span></Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;