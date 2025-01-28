function UserProfile({handleClose}) {
    return (
        <div className='fixed flex flex-col justify-center items-center w-full h-screen right-0 bg-white text-black z-10 gap-6'>
            PROFILE
            <button onClick={handleClose} className='text-2xl font-megante capitalize text-rose-500'> close </button>
        </div>
    )
}

export default UserProfile