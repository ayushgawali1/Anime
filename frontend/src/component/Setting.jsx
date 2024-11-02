import React from 'react'
import { Button } from "flowbite-react";

function Setting() {
    return (
        <>
            <div className='w-4/5 bg-white text-black mt-10 pr-5 flex flex-col gap-20'>
                <div className='flex items-center justify-between px-10 border-2 border-black rounded-lg py-9'>
                    <div className='self-start'>
                        <span><h2 className='text-2xl font-bold '>Profile</h2></span>
                        <span><h4>Set your account details</h4></span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4'>
                            <input type="text" placeholder="Type here" className="bg-inherit text-inherit input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Type here" className="bg-inherit text-inherit input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" placeholder="Type here" className="bg-inherit text-inherit input input-bordered w-full max-w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mx-2 gap-5">
                        <img
                            className="object-cover w-24 h-24 mx-2 rounded-full"
                            // src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                            alt="avatar"
                        />
                        <Button color="purple" pill>
                            Save
                        </Button>
                    </div>
                </div>
                <div>Additional</div>
            </div>
        </>
    )
}

export default Setting