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

                    <div className="flex flex-wrap justify-center mt-20 gap-10">
                        {ProductDetails.map((product) => (
                            <div className="bg-white w-full xs:w-[80%] sm:w-[70%] md:w-[40%] max-w-[600px] shadow-lg">
                                <div className="relative">
                                    <img src={product.images[0]} alt="Nike Athletic Shoe" className="w-full h-auto" />
                                </div>
                        
                                <div className="px-6 sm:px-10 py-10 space-y-3">
                                    <h2 className="text-3xl font-saudagar text-gray-800">{product.name}</h2>
                                    <h2 className="text-lg  font-saudagar text-gray-600 lowercase">{product.description}</h2>
                                    
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-gray-600 text-lg font-saudagar">price</p>
                                            <p className="text-2xl font-bold text-gray-900 font-saudagar">₹ {product.price}</p>
                                        </div>
                                    
                                        <Link to={`/product/${product.productID}`} className="rounded-xl transition-colors uppercase font-megante px-4 py-2 lg:px-6 lg:py-4 border-2 border-[#FED685] bg-[#FED685] hover:bg-transparent hover:text-[#131313] text-black text-sm"> view details </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id='about' className='w-full mt-10 bg-gray-100'>
                    <div className='w-full h-[125px] bg-[#131313] flex flex-row justify-center items-center'>
                        <h1 className='text-[#FED685] font-bugetaDream text-6xl uppercase mt-4'>About Us</h1>
                    </div>
                    <div className='px-8 py-10 xs:px-16 lg:px-24 xl:px-28 2xl:px-44'>
                        <h2 className='text-5xl font-megante text-gray-800 mb-6'>Welcome to Silverleaf Indus</h2>
                        <p className='text-gray-600 text-xl font-saudagar leading-8 mb-4'>
                            At Silverleaf Indus, we are passionate about preserving and sharing the rich heritage of Indian artistry. Our carefully curated collection includes stunning Indian artifacts that celebrate the craftsmanship and traditions passed down through generations. From exquisite metallic horses to intricately designed boats, each piece tells a unique story of artistry and culture.
                        </p>
                        <p className='text-gray-600 text-xl font-saudagar leading-8 mb-4'>
                            Our mission is to connect collectors, enthusiasts, and admirers of Indian artifacts with timeless treasures that inspire and captivate. Whether you're seeking to add a touch of elegance to your space or looking for a meaningful gift, our collection offers something truly special.
                        </p>
                        <p className='text-gray-600 text-xl font-saudagar leading-8'>
                            Join us on a journey through the cultural legacy of India, and let Silverleaf Indus bring a piece of this incredible heritage into your life.
                        </p>
                        <div className='w-full flex flex-col lg:flex-row justify-evenly items-center mt-10 lg:mt-20 gap-10'>
                            <button className='font-megante px-10 py-4 bg-[#131313] border-2 border-[#131313] text-[#FED685] hover:bg-transparent hover:text-[#131313] transition-all ease-in-out capitalize hover:cursor-pointer'>join us</button>
                            <button className='font-megante px-10 py-4 bg-[#131313] border-2 border-[#131313] text-[#FED685] hover:bg-transparent hover:text-[#131313] transition-all ease-in-out capitalize hover:cursor-pointer'>shop now</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;