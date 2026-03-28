import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { registerUser } from "../../store/auth-slice";

const initialState = {
    name: "",
    email: "",
    password: "",
}

const AuthRegister = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleRegisterForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        // console.log("btn is working");
        e.preventDefault()

        dispatch(registerUser(formData))
        console.log(formData);

    };

    return (
        <>
            <div className="flex border justify-center items-center p-4 h-screen">
                <div className="border p-2.5 w-screen rounded-2xl">
                    <div>
                        <h1 className="text-2xl p-2.5 text-center">Register</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter a name"
                            className="border rounded-md p-1.5"
                            onChange={handleRegisterForm}
                            value={formData.name}
                            name="name"
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="enter a email"
                            className="border rounded-md p-1.5"
                            onChange={handleRegisterForm}
                            value={formData.email}
                            name="email"
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="enter a password"
                            className="border rounded-md p-1.5"
                            onChange={handleRegisterForm}
                            value={formData.password}
                            name="password"
                        />

                        <div
                            className="cursor-pointer mx-auto "
                            onClick={() => navigate("/auth/login")}
                        >
                            <span className="text-black font-medium">Go to login page</span>
                        </div>

                        <button
                            className="border m-3 p-1.5 w-25 bg-blue-400 text-center rounded-2xl">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AuthRegister;
