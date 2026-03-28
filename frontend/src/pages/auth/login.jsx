import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('btn is working');
        console.log(formData);
        setFormData({
            email: '',
            password: ''
        })

    }

    return (
        <>
            <div className="flex border justify-center items-center p-4 h-screen">
                <div className="border p-2.5 w-screen rounded-2xl">
                    <div>
                        <h1 className="text-2xl p-2.5 text-center">login</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="enter a email"
                            className="border rounded-md p-1.5"
                            onChange={handleForm}
                            name="email"
                            value={formData.email}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="enter a password"
                            className="border rounded-md p-1.5"
                            onChange={handleForm}
                            name="password"
                            value={formData.password}
                        />

                        <div
                            className="cursor-pointer mx-auto "
                            onClick={() => navigate("/auth/register")}
                        >
                            <span className="text-black font-medium">
                                Go to register page
                            </span>
                        </div>

                        <button className="border m-3 p-1.5 w-25 bg-blue-400 text-center rounded-2xl">
                            login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AuthLogin;
