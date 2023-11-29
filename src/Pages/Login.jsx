import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.svg"
import { useContext, useState } from "react";
import { userAuth } from "../Provider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {loginUser, googleLogin} = useContext(userAuth);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            swal("Welcoem Back!", " You are now logged in.")
            navigate('/')
        })
        .catch((error) => {
            setError(error.message)
        })

    }

    const handleGoogle = () => {
        googleLogin()
        .then()
        .catch()
    }




    return (
        <section className="px-8 py-16 md:p-24 bg-slate-100 md:flex items-center justify-center gap-8">

            <div className="flex-1 flex flex-col items-center justify-center ">

                <img className="max-w-md" src={login} alt="" />
            </div>

            <div className="flex-1 flex items-center justify-center">

                <div className=" bg-slate-300 p-16 rounded-lg ">
                    <form onSubmit={handleLogin} className="flex flex-col gap-6">

                        <h2 className="font-DM text-4xl ">Welcome Back to <span className="text-red-600">LifeFlow Connect</span></h2>

                        <p className="py-6 font-Josefin "> Log in to your LifeFlow Connect account.
                            Your contribution to the blood donation community matters,
                            and we're excited to have you back.</p>

                        <input className="w-full py-2 px-6 rounded-lg" type="email" name="email" placeholder="Your Email" required />
                        <input className="w-full py-2 px-6 rounded-lg" type="password" name="password" placeholder="Your Passsword" required />

                        <div className="flex gap-2">
                        <input className="py-2 px-6 rounded-lg" type="checkbox" name="acceptTerms" />

                            <p>I accept <a className="text-red-600" href="#">Terms and condition</a> </p>
                        </div>

                        <button className="w-full py-2 px-6 rounded-lg bg-red-600 text-white" type="submit">Log In</button>


                        <p>Don't have an account? Please <Link className="font-semibold text-red-600 underline" to="/registration">Sign Up</Link></p>

                        <button onClick={handleGoogle} className="w-full py-2 px-6 rounded-lg bg-slate-100 flex items-center justify-center gap-4"> <FcGoogle></FcGoogle> Sign up with Google</button>


                        <div>
                            {
                                error && <p className="px-4 py-2 rounded-lg bg-red-700 text-white">{error}</p>
                            }
                        </div>

                    </form>
                </div>
            </div>

        </section>
    )
}

export default Login;