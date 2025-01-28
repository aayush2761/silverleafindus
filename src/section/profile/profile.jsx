import React from 'react';
import profile from '/texture/textureOne.jpg';

function Profile() {
  return (
    <>
        <div className='p-20 pb-10'>
            <div className='mt-10 border rounded-10'>
                <div>
                    <img src={profile} alt="Profile Picture" className='w-[50%]' />
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
