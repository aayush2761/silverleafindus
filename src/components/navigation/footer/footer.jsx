import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="w-full h-fit bg-[#131313] text-white px-20 py-10">
            <div className="w-full h-full px-4 flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="font-bugetaDream text-[#FED685] text-7xl">SilverLeaf Indus</h1>
                    <h2 className="font-saudagar text-white text-2xl">Crafting Timeless Stories from India's Heritage</h2>
                </div>

                <Link to="/" className='px-7 py-3 mt-5 bg-[#FED685] text-xl text-[#131313] border-2 border-[#FED685] font-megante capitalize hover:bg-transparent hover:text-white transition-all ease-in-out'>
                    explore more
                </Link>

                <div className='w-full mt-10 h-fit flex flex-row justify-between item-center'>
                    <div className='w-[272px] font-bugetaDream text-2xl'>
                        LINKS
                    </div>

                    <div className='flex flex-row justify-evenly item-center gap-10'>
                        <Link className='font-megante hover:text-[#FED685]'>Terms & Conditions</Link>
                        <Link className='font-megante hover:text-[#FED685]'>FAQs</Link>
                        <Link className='font-megante hover:text-[#FED685]'>Privacy</Link>
                        <Link className='font-megante hover:text-[#FED685]'>Become a Member</Link>
                        <Link className='font-megante hover:text-[#FED685]'>Contact</Link>
                    </div>

                    <div className='flex flex-row justify-between items-center gap-6'>
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

                <div className="w-full text-center flex flex-col gap-5">
                    <p className="font-saudagar text-white text-lg">
                        &copy; 2025 <a href="https://www.silverleafindus.vercel.app/" className='hover:text-[#FED685]'>SilverLeaf Indus.</a> | Where Every Artifact Whispers India’s Story. 🌿
                    </p>
                    <p className="font-saudagar text-white text-lg">
                        Website Developed with ❤️ by <a href="" className='hover:text-[#FED685]'>BINARY BOTS</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
