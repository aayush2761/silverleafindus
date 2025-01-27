import TextureOne from '/texture/textureOne.jpg';

function Home() {
    return (
        <>
            <main className="">
                <div className="w-full">
                    <img src={TextureOne} alt="" className="w-full h-screen object-cover" />
                </div>
            </main>
        </>
    )
}

export default Home;