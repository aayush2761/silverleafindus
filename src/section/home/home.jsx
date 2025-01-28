import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProductDetails from '../../essentials/productData.json';
import teamData from '../../essentials/teamData.json';

import TextureOne from '/texture/textureOne.jpg';
import linkedInIcon from '/icons/socials/linkedinLogoSVG.svg'
import instagramIcon from '/icons/socials/instagramLogoSVG.svg'

function Home() {
    const bannerWords = ["Heritage", "Legacy", "Tradition", "Craftsmanship", "Culture", "Artistry", "Timeless", "Elegance", "Masterpiece", "Authenticity"];

    const handleProductClick = () => {
        const element = document.getElementById("products");
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <main className="relative">
                <div id='home' className="relative w-full h-screen">
                    <img src={TextureOne} alt="Background Texture" className="w-full h-full object-cover -z-10 filter brightness-50" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-5">
                        <motion.h1
                            className="w-full text-amber-50 text-center text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bugetaDream"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            SilverLeaf Indus
                        </motion.h1>

                        <motion.h2
                            className="w-full text-amber-100 text-center text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-saudagar mt-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Crafting Timeless Stories from India's Heritage
                        </motion.h2>

                        <NavLink onClick={handleProductClick} className="text-white md:text-2xl 2xl:text-3xl border-2 capitalize border-[#FED685] px-5 py-2 hover:bg-[#FED685] hover:text-black text-center text-md font-saudagar mt-10 transition-all ease-in-out hover:cursor-pointer">
                            Shop Now
                        </NavLink>
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

                <motion.section id="products" className="w-full h-auto pt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }} >
                    <h1 className="font-bugetaDream text-[#131313] text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl capitalize">
                        Our Products
                    </h1>

                    <div className="flex justify-center mt-3">
                        <span className="w-[200px] h-[2px] bg-[#131313] rounded-full"></span>
                    </div>

                    <div className="flex flex-wrap justify-center mt-20 gap-10">
                        {ProductDetails.map((product) => (
                            <motion.div key={product.productID} className="bg-white w-full xs:w-[80%] sm:w-[70%] md:w-[40%] max-w-[600px] shadow-lg" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.2 }} >
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
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <section id="about" className="w-full mt-10" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }} >
                    <div className="w-full h-[90px] lg:h-[125px] bg-[#131313] flex flex-row justify-center items-center">
                        <h1 className="text-[#FED685] font-bugetaDream text-3xl sm:text-4xl md:text-5xl xl:text-6xl uppercase mt-4">
                            About Us
                        </h1>
                    </div>

                    <motion.div className="px-8 py-10 xs:px-16 lg:px-24 xl:px-28 2xl:px-44 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} >
                        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-megante text-gray-800 mb-6"  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }} >
                            Welcome to Silverleaf Indus
                        </motion.h2>
                        <motion.p className="text-gray-600 text-lg sm:text-xl font-saudagar leading-8 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.2 }} >
                            At Silverleaf Indus, we are passionate about preserving and sharing the rich heritage of Indian artistry.
                            Our carefully curated collection includes stunning Indian artifacts that celebrate the craftsmanship and
                            traditions passed down through generations. From exquisite metallic horses to intricately designed boats, 
                            each piece tells a unique story of artistry and culture.
                        </motion.p>

                        <motion.p className="text-gray-600 text-lg sm:text-xl font-saudagar leading-8 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.4 }} >
                            Our mission is to connect collectors, enthusiasts, and admirers of Indian artifacts with timeless treasures 
                            that inspire and captivate. Whether you're seeking to add a touch of elegance to your space or looking 
                            for a meaningful gift, our collection offers something truly special.
                        </motion.p>

                        <motion.p className="text-gray-600 text-lg sm:text-xl font-saudagar leading-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.6 }} >
                            Join us on a journey through the cultural legacy of India, and let Silverleaf Indus bring a piece of this 
                            incredible heritage into your life.
                        </motion.p>

                        <div className="w-full flex flex-col lg:flex-row justify-evenly items-center mt-10 lg:mt-20 gap-10">
                            <button className="font-megante px-10 py-4 bg-[#131313] border-2 border-[#131313] text-[#FED685] hover:bg-transparent hover:text-[#131313] transition-all ease-in-out capitalize hover:cursor-pointer">
                                Join Us
                            </button>
                            <NavLink
                                onClick={handleProductClick}
                                className="font-megante px-10 py-4 bg-[#131313] border-2 border-[#131313] text-[#FED685] hover:bg-transparent hover:text-[#131313] transition-all ease-in-out capitalize hover:cursor-pointer"
                            >
                                Shop Now
                            </NavLink>
                        </div>
                    </motion.div>

                    <span className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-[1px] md:h-[2px] mt-10 md:mt-20 rounded-full bg-gradient-to-r from-gray-100 via-[#131313] to-gray-100 shadow-md"></span>
                </section>

                <section id="team" className="w-full mt-10" >
                    <motion.div className="px-8 py-10 xs:px-16 lg:px-24 xl:px-28 2xl:px-44 flex flex-col items-center">
                        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-megante text-gray-800 mb-6 mt-10 md:mt-20 capitalize" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} >
                            Meet the Team
                        </motion.h2>

                        <motion.p className="text-gray-600 text-lg sm:text-xl font-saudagar leading-8 mb-4"  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} >
                            Behind every success is a group of talented and dedicated individuals working tirelessly to bring ideas to life. 
                            Our team is the heartbeat of our brand, blending expertise, creativity, and passion to achieve excellence.
                            Get to know the people who make it all possible.
                        </motion.p>

                        <div className="py-10 lg:px-24 xl:px-28 2xl:px-44">
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 w-full xl:max-w-4xl 2xl:max-w-5xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} >
                                {teamData.map((member, index) => (
                                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg relative group">
                                        <div className="relative w-full h-[0px] xl:h-[300px] 2xl:h-[400px] overflow-hidden">
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl" />
                                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="flex space-x-10">
                                                    {member.socialLinks.map((link, idx) => (
                                                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300" >
                                                            <img src={link.icon === "linkedIn" ? linkedInIcon : instagramIcon} alt={link.icon} className="w-10 h-10 hover:scale-110 transition-all duration-200" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-10 py-14 text-center">
                                            <h2 className="text-xl font-megante text-gray-800 uppercase font-albulaBold tracking-widest">{member.name}</h2>
                                            <h3 className="text-lg text-gray-600 mt-1 font-saudagar">- {member.role}</h3>
                                            <p className="text-gray-500 mt-4 font-saudagar text-md">{member.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

            </main>
        </>
    );
}

export default Home;