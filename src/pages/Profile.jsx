import React from 'react'


const Profile = () => {
  return (
    <div className="min-h-screen  text-white px-12 py-10 w-full">
      <div className="max-w-7xl mx-auto flex gap-10">

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

              <button className="mt-3  from-blue-600 to-fuchsia-600 hover:opacity-90 transition rounded-full py-3 font-semibold">
                Save changes
              </button>
            </div>
          </div>

        </div>

      </div>
    </div >
  )
}

export default Profile
