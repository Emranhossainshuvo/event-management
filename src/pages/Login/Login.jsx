import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {logInUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault(); 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
    }

    return (
        <section className="h-[100vh] flex items-center justify-center bg-[#31473a]">
            {/* section to hold the main content */}
            <section className="bg-[#f1f1f2] w-[24%] rounded-xl">
                <h3 className="text-center text-3xl font-semibold mb-2 mt-3">Event management</h3>
                <p className="text-center mb-4 text-xl font-semibold">Login</p>
                <form
                onSubmit={handleLogin}
                  className="flex flex-col gap-7 px-10">
                    <input placeholder="Email" className="h-10 outline-none ps-3 rounded-md" type="email" name="email" id="" />
                    <input placeholder="Password" className="h-10 outline-none ps-3 rounded-md" type="password" name="password" id="" />

                    <input className="h-10 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Login" />
                    
                </form>
                <p className="text-center my-4">Don&apos;t have an account?<Link to={"/register"}>Register</Link></p>
            </section>
        </section>
  );
};

export default Login;