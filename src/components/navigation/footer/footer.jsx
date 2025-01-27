import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="w-full h-fit bg-[#131313] text-white px-5 sm:px-20 py-10">
            <div className="w-full h-full px-4 flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col justify-center item-center gap-4 text-center">
                    <h1 className="font-bugetaDream text-[#FED685] text-4xl sm:text-5xl xl:text-7xl transition-all ease-in-out">SilverLeaf Indus</h1>
                    <h2 className="px-7 font-saudagar text-white text-md xl:text-2xl text-center transition-all ease-in-out">Crafting Timeless Stories from India's Heritage</h2>
                </div>

                <Link to="/" className='px-3 py-2 bg-[#FED685] text-xl text-[#131313] border-2 border-[#FED685] font-megante capitalize hover:bg-transparent hover:text-white transition-all ease-in-out'>
                    explore more
                </Link>

                <div className='w-full mt-5 xl:my-5 h-fit flex flex-col 2xl:flex-row-reverse justify-between item-center gap-7 transition-all ease-in-out'>
                    <div className='flex flex-col xl:flex-row xl:gap-16 justify-center items-center gap-7'>
                        <div className='font-bugetaDream text-2xl text-[#FED685] '>
                            socials
                            <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className='flex flex-row justify-center item-center gap-8 sm:gap-14 transition-all ease-in-out'>
                            <Link to="https://www.facebook.com/" className='w-[50px] h-[50px] border-2 border-[#FED685] hover:border-[#3b5998] rounded-full flex justify-center items-center hover:text-[#3b5998] transition'>
                                <FaFacebook size={20} />
                            </Link>
                            <Link to="https://www.x.com/" className='w-[50px] h-[50px] border-2 border-[#FED685] hover:border-[#00acee] rounded-full flex justify-center items-center hover:text-[#00acee] transition'>
                                <FaTwitter size={20} />
                            </Link>
                            <Link to="https://www.instagram.com/" className='w-[50px] h-[50px] border-2 border-[#FED685] hover:border-[#C13584] rounded-full flex justify-center items-center hover:text-[#C13584] transition'>
                                <FaInstagram size={20} />
                            </Link>
                            <Link to="https://www.linkedin.com/" className='w-[50px] h-[50px] border-2 border-[#FED685] hover:border-[#0077b5] rounded-full flex justify-center items-center hover:text-[#0077b5] transition'>
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center items-center gap-5 xl:gap-16 mt-5 xl:mt-0">
                        <div className="font-bugetaDream text-2xl text-center text-[#FED685]">
                            links
                            <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 transition-all ease-in-out'>
                            <div className="font-megante hover:text-[#FED685] flex items-center cursor-pointer">Terms & Conditions</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center cursor-pointer">Become a Member</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center cursor-pointer">FAQs</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center cursor-pointer">Privacy</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center cursor-pointer">Contact</div>
                        </div>
                    </div>
                </div>

                <div className="w-full text-center flex flex-col gap-5 mt-5 xl:mt-0">
                    <p className="font-saudagar text-white text-md">
                        &copy; 2025 <a href="https://www.silverleafindus.vercel.app/" className='text-[#FED685] hover:text-emerald-300 transition-all ease-in-out'>SilverLeaf Indus.</a> | Where Every Artifact Whispers India’s Story. 🌿
                    </p>
                    <p className="font-saudagar text-white text-md">
                        Website Developed with ❤️ by <a href="" className='text-[#FED685] hover:text-green-400 transition-all ease-in-out'>TEAM BINARY BOTS</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
