import TextureOne from '/texture/textureOne.jpg';

function Home() {
    return (
        <>
            <main className="relative">
                <div className="relative w-full h-screen">
                    <img src={TextureOne} alt="" className="w-full h-full object-cover -z-10 filter brightness-50" />     
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl p-10 font-bugetaDream text-center transition-all ease-in-out">
                            SilverLeaf Indus
                        </h1>
                    </div>               
                </div>
            </main>
        </>
    );
}

export default Home;
