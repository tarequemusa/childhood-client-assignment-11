import {Link} from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import {useContext, useState} from "react";
import {updateProfile} from "firebase/auth";
import {AuthContext} from "../../Providers/AuthProviders";


const Register = () => {
    useTitle('Register');
    const {createUser} = useContext(AuthContext);
    console.log(createUser);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        setSuccess('');
        setError('');
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        console.log(name, email, password, photo);
        event.target.reset();
        // // Password Validate:
        // if(!/(?=.*[A-Z])/.test(password)) {
        //     setError('Please add atleast one uppercase');
        //     return;
        // }
        // else if(!/(?=.*[0-9].*[0-9])/.test(password)) {
        //     setError('Please add atleast two numbers');
        //     return;
        // }
        // else if(password.length < 6) {
        //     setError('Please add atleast 6 characters in your password');
        //     return;
        // }

        // Create user in Firebase
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if(loggedUser) {
                    setError('');
                    form.reset();
                    setSuccess('User Created Successfully');
                    updateUserData(result.user, name);
                }
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

            })
    }


    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10">Create an Account</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                <p className="text-danger text-center">{error}</p>
                <p className="text-success text center">{success}</p>
            </div>
        </div>
    );
};

export default Register;