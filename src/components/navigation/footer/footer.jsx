import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="w-full h-fit bg-[#131313] text-white px-5 sm:px-20 py-10">
            <div className="w-full h-full px-4 flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col justify-center item-center gap-4 text-center">
                    <h1 className="font-bugetaDream text-[#FED685] text-4xl">SilverLeaf Indus</h1>
                    <h2 className="px-7 font-saudagar text-white text-md text-center">Crafting Timeless Stories from India's Heritage</h2>
                </div>

                <Link to="/" className='px-3 py-2 bg-[#FED685] text-xl text-[#131313] border-2 border-[#FED685] font-megante capitalize hover:bg-transparent hover:text-white transition-all ease-in-out'>
                    explore more
                </Link>

                <div className='w-full mt-5 h-fit flex flex-col justify-between item-center gap-7'>
                    <div className='flex flex-col justify-center items-center gap-7'>
                        <div className='font-bugetaDream text-2xl text-[#FED685]'>
                            socials
                            <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className='flex flex-row justify-center item-center gap-8'>
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

                    <div className="flex flex-col justify-center items-center gap-5 mt-5">
                        <div className="font-bugetaDream text-2xl text-center text-[#FED685]">
                            links
                            <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
                        </div>


                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className="font-megante hover:text-[#FED685] flex items-center">Terms & Conditions</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center">Become a Member</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center">FAQs</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center">Privacy</div>
                            <div className="font-megante hover:text-[#FED685] flex items-center">Contact</div>
                        </div>
                    </div>
                </div>

                <div className="w-full text-center flex flex-col gap-5 mt-5">
                    <p className="font-saudagar text-white text-md">
                        &copy; 2025 <a href="https://www.silverleafindus.vercel.app/" className='hover:text-[#FED685]'>SilverLeaf Indus.</a> | Where Every Artifact Whispers India’s Story. 🌿
                    </p>
                    <p className="font-saudagar text-white text-md">
                        Website Developed with ❤️ by <a href="" className='text-[#FED685] hover:text-green'>BINARY BOTS</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
