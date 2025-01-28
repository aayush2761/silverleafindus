import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '/logo.png';
import CloseButton from '/icons/closeIcon.png';

function Profile({profile, setProfile}) {
    const {isAuthenticated, logout} = useAuth0();
    const [profilePanel, showProfilePanel] = useState(false);

    const handleShowProfile = () => {
        showProfilePanel(true);
    }

    const handleLogOut = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
        setProfile(false);
    }
    
    const handleClose = () => {
        setProfile(false);
    }

    return (
        <>
            {profile && !profilePanel && 
                <div className='fixed flex flex-col justify-center items-center w-full h-screen right-0 bg-white text-black z-10 gap-6'>
                    <div className='bg-[#131313] px-10 py-3 w-full max-w-[500px] flex flex-row justify-between items-center gap-8 transition-all ease-in-out'>
                        <img src={Logo} alt="SilverLeaf Indus Logo" className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] invert transition-all ease-in-out'/>
                        <h1 className='text-3xl xs:text-4xl font-bugetaDream text-center text-[#FED685] transition-all ease-in-out'>SilverLeaf Indus</h1>
                    </div>
                    <button onClick={handleShowProfile} className='text-2xl font-megante capitalize text-[#131313]'>View Profile</button>
                    <button onClick={handleLogOut} className='text-2xl font-megante capitalize text-rose-500'> log out </button>
                    <button onClick={handleClose} className='text-2xl font-megante capitalize text-rose-500'> close </button>
                </div>
            }

            {profilePanel && 
                <div className='fixed flex flex-col justify-center items-center w-full h-screen right-0 bg-white text-black z-10 gap-6'>
                    PROFILE
                    <button onClick={handleClose} className='text-2xl font-megante capitalize text-rose-500'> close </button>
                </div>
            }

        </>
    )
}

export default Profile
