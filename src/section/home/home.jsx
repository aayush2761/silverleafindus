import React from 'react';
import { Link } from 'react-router-dom';
import TextureOne from '/texture/textureOne.jpg';
import ProductDetails from '../../essentials/productData.json';

function Home() {
    const bannerWords = ["Heritage", "Legacy", "Tradition", "Craftsmanship", "Culture", "Artistry", "Timeless", "Elegance", "Masterpiece", "Authenticity"];

    return (
        <>
            <main className="relative">
                <div id='home' className="relative w-full h-screen">
                    <img src={TextureOne} alt="Background Texture" className="w-full h-full object-cover -z-10 filter brightness-50" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-5">
                        <h1 className="w-full text-amber-50 text-center text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bugetaDream transition-all ease-in-out">
                            SilverLeaf Indus
                        </h1>

                        <h2 className="w-full text-amber-100 text-center text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-saudagar mt-4 transition-all ease-in-out">
                            Crafting Timeless Stories from India's Heritage
                        </h2>

                        <a href="#products" className="text-white md:text-2xl 2xl:text-3xl border-2 capitalize border-[#FED685] px-5 py-2 hover:bg-[#FED685] hover:text-black text-center text-md font-saudagar mt-10 transition-all ease-in-out hover:cursor-pointer">
                            Shop Now
                        </a>
                    </div>
                </div>

                <section className="relative w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] 2xl:h-[100px] bg-[#131313] flex justify-center items-center overflow-hidden transition-all ease-in-out">
                    <div className="absolute flex animate-marquee">
                        {Array(10).fill(bannerWords).flat().map((word, index) => (
                            <div key={index} className="text-amber-100 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-saudagar px-5 py-2 uppercase transition-all ease-in-out">
                                {word}
                            </div>
                        ))}
                    </div>
                </section>

                <section id='products' className='w-full h-auto pt-10'>
                    <h1 className='font-bugetaDream text-[#131313] text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl capitalize'>
                        Our Products
                    </h1>

                    <div className='flex justify-center mt-3'>
                        <span className='w-[200px] h-[2px] bg-[#131313] rounded-full'></span>
                    </div>

                    <div className="flex flex-wrap justify-center mt-10 sm:gap-4">
                        {ProductDetails.map((product) => (
                            <Link to={`/product/${product.productID}`} key={product.productID} className="w-full xs:w-[80%] sm:w-[70%] md:w-[40%] max-w-[600px]">
                                <div className='flex flex-col justify-center items-center mt-10'>
                                    <img src={product.images[0]} alt={product.name} className="w-full h-auto shadow-md" />
                                    <div className='w-full h-[75px] flex flex-row justify-between items-center'>
                                        <h1 className='font-bugetaDream text-2xl text-[#131313] hover:text-slate-800'>{product.name}</h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
