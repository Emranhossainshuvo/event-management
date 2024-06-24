import { validatePassword } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const hanldeRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form .password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user; 
            console.log(user)
        }
        )
    }

return (
        <section className="bg-[#f1f1f2] rounded-xl">
            <h3 className="text-center text-3xl font-semibold mb-2 mt-3">Talks chat</h3>
            <p className="text-center mb-4 text-xl font-semibold">Register</p>
            <form
            onSubmit={hanldeRegister}
              className="flex flex-col gap-7 px-10">
                <input placeholder="Name" className="h-10 ps-3 outline-none rounded-md" type="text" name="name" id="" />
                <input placeholder="Email" className="h-10 ps-3 outline-none rounded-md" type="email" name="email" id="" />
                <input placeholder="Password" className="h-10 ps-3 outline-none rounded-md" type="password" name="password" id="" />
                <input placeholder="" className="h-10 ps-3 rounded-md" type="file" style={{ display: "none" }} name="file" id="file" />
                <label className=" cursor-pointer flex gap-2 justify-start items-center" htmlFor="file">
                    <img src="https://i.ibb.co/Yb1GxFc/icons8-image-30.png" alt="" />
                    <p className="text-lg font-semibold">
                        Upload your profile picture
                    </p>
                </label>
                <input className="h-10 cursor-pointer bg-[#31473a] text-white text-lg font-semibold rounded-md" type="submit" value="Register" />
            </form>
            <p className="text-center my-4">Already have an account?<Link to={"/login"}>Login</Link></p>
        </section>
    );
};

export default Register;