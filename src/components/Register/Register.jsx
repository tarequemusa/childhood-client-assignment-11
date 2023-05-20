import {Link} from "react-router-dom";
import useTitle from "../../Hooks/useTitle";


const Register = () => {
    useTitle('Register');
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Create an Account</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                        <div>
                            <div className="form-control">
                                <input type="password" placeholder="Set Your Password" name="password" className="input input-bordered" required />
                                <label className="label text-right">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <p className="text-center text-2xl"><small>Already Have an Account? Please <Link to="/login"><span className="text-pink-700 font-bold py-20">Login !</span></Link> </small></p>
            </div>
        </div>
    );
};

export default Register;