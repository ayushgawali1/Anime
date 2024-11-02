import React from 'react'

function Profile() {
  return (
    <>
      <div className='w-3/4'>
        <div><h1 className='text-2xl font-bold text-black'>My Profile</h1></div>
        <div className='border-2 mt-4 flex justify-between py-5 px-6'>
          <div className='flex'>
            <div>
              <img
                className="object-cover w-20 h-20 mx-2 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
            </div>
            <div>
              <h2>Jack Adam</h2>
              <p>alphabita@gmail.com</p>
              <p>User</p>
            </div>
          </div>
          <div><button>Edit</button></div>
        </div>
        <div className='border-2 mt-4 flex justify-between py-5 px-6'>
          <div>
            <h2>Personal Information</h2>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button>Edit</button>
        </div>
      </div>
    </>
  )
}

export default Profile