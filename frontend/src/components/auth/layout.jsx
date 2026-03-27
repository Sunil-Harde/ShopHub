import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <>
            <div className="flex h-screen">
                <div className="w-1/2 h-full bg-black text-white flex justify-center items-center">
                    <h1 className="text-2xl font-extrabold">Welcome to ECommerce Shopping</h1>
                </div>
                <div className="w-1/2">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AuthLayout