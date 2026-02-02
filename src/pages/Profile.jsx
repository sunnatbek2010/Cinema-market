import React from 'react'

const Profile = () => {
  return (
    <div className="min-h-screen  text-white px-12 py-10 w-full mx-auto">

      <div className="flex-1  rounded-xl p-8">
        <h1 className="text-2xl font-semibold mb-2">
          Update Your Profile
        </h1>
        <p className="text-gray-400 mb-6">
          All fields are required to complete your profile.
        </p>

        <div className="flex-1  rounded-xl p-8">

          <div className="flex flex-col gap-4 max-w-md">
            <input type="text" placeholder="First Name" className="input-style" />
            <input type="text" placeholder="Last Name" className="input-style" />
            <input type="text" placeholder="Display Name" className="input-style" />
            <input type="number" placeholder="Phone Number" className="input-style" />

            <button className="
  inline-flex items-center justify-center
  px-6 py-2 rounded-full
  bg-gradient-to-r from-purple-600 to-indigo-600
  text-white font-semibold
  shadow-lg shadow-purple-500/30
  hover:shadow-xl hover:shadow-purple-500/50
  hover:scale-105
  active:scale-95
  transition-all duration-300

">
              Save changes
            </button>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Profile
