import { useNavigate } from "react-router-dom"

const AuthRegister = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="flex border justify-center items-center p-4 h-screen">
                <div className="border p-2.5 w-screen rounded-2xl">
                    <div>
                        <h1 className="text-2xl p-2.5 text-center">Register</h1>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <label>Name</label>
                        <input placeholder="Enter a name" className="border rounded-md p-1.5" />

                        <label>Email</label>
                        <input placeholder="enter a email" className="border rounded-md p-1.5" />

                        <label>Password</label>
                        <input placeholder="enter a password" className="border rounded-md p-1.5" />

                        <div className="cursor-pointer mx-auto "
                            onClick={() => navigate('/auth/login')}
                        >
                            <span className="text-black font-medium">Go to login page</span>
                        </div>

                        <button className="border m-3 p-1.5 w-25 bg-blue-400 text-center rounded-2xl">Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthRegister