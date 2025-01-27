import React from 'react'
import CloseButton from '/icons/closeIcon.png';

function Profile({setProfile}) {
    const handleClose = () => {
        setProfile(false);
    }

    return (
        <>
            <div className='fixed right-0 w-[50%] h-screen bg-black text-black z-50'>
                <img src={CloseButton} alt="Close Button" className='w-[30px] h-30px]' onClick={handleClose}/>
                PROFILE
            </div>
        </>
    )
}

export default Profile
