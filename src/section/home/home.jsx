import TextureOne from '/texture/textureOne.jpg';

function Home() {
    return (
        <>
            <main className="relative">
                <div className="relative w-full h-screen">
                    <img src={TextureOne} alt="" className="w-full h-full object-cover -z-10 filter brightness-50" />     
                    <div className='absolute inset-0 flex flex-col justify-center items-center px-5'>
                        <h1 className="w-full text-white text-center text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bugetaDream transition-all ease-in-out">
                            SilverLeaf Indus
                        </h1>

                        <h1 className='w-full text-white text-center text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-saudagar mt-4 transition-all ease-in-out'>
                            Crafting Timeless Stories from India's Heritage
                        </h1>

                        <button className='text-white 2xl:text-xl border-2 border-[#FED685] px-5 py-2 hover:bg-[#FED685] hover:text-black text-center text-md font-saudagar mt-10 transition-all ease-in-out'>
                            <h1>
                                <span>Discover the Stories</span>
                                <span class="block sm:inline sm:ml-1">Behind Our Creations</span>
                            </h1>

                        </button>
                    </div>               
                </div>
            </main>
        </>
    );
}

export default Home;
