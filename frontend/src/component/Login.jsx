import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login({ url , user, setUser , open , setOpen }) {

    const navigate = useNavigate();
    

    const [login, setLogin] = useState(false);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            const responce = await axios.post(url + `/user/${login ? "register" : "login"}`, data);
            console.log(responce);
            
            if (responce.status === 200) {
                toast.success(responce.data.message);
                setUser(true);
                localStorage.setItem("token", responce.data.token);
                localStorage.setItem("id", responce.data.id);
            }
        } catch (error) {
            if (error.status === 400) {
                toast.error(error.response.data.message)
            }
            if (error.status === 500) {
                toast.info(error.response.data.message)
            }
        }
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal" open={open} >
                <div className="modal-box flex flex-col gap-y-6">
                    <h1 className='text-2xl font-bold'>{login ? "Create Account" : "Login"}</h1>
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button type='button' onClick={() => setOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className='flex flex-col gap-y-5'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" className="grow border-0 focus:ring-0" {...register("username")} placeholder="Username" />
                            </label>
                            {login ? <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow border-0 focus:ring-0" {...register("email")} placeholder="Email" />
                            </label> : <></>}
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="password" className="grow border-0 focus:ring-0" {...register("password")} placeholder="Password" />
                            </label>
                        </div>
                        <div className='flex justify-between item-center mt-6'>
                            <button type='submit' onClick={() => { setOpen(false) ; navigate("/profile");}} className="btn ">{login ? "Create Account" : "Login"}</button>
                            <p onClick={() => setLogin(!login)} className='my-auto text-blue-500 cursor-pointer'>{!login ? "Create Account" : "Login"}</p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login