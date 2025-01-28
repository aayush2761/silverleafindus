import { useState, useEffect } from "react";
import CloseIcon from '/icons/closeIcon.png';
import PopUpPhoto from '/helpingPhotos/PopUpPhoto.png';
import OopsIcon from '/icons/oops.png';

const PopOne = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const openTimer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(openTimer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-transparent">
            {/* Pop-up Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    {/* Modal box with rounded design */}
                    <div className="bg-white flex flex-row justify-center gap-10 item-center p-6 rounded-lg shadow-lg  text-center relative border border-gray-300">
                        <img src={PopUpPhoto}alt="Artifact example" className="w-[400px] h-[300px] object-cover rounded-md mb-4" />

                        <div className="flex flex-col justify-center items-center">
                            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-3" style={{ backgroundImage: 'url(/public/icons/closeIcon.png)' }}>
                                <img src={CloseIcon} alt="Close Icon" className="w-[25px] h-[25px]"/>
                            </button>
                            <img src={OopsIcon} alt="Oops Icon" className="w-[80px] h-[80px]"/>
                            <h2 className="text-lg font-semibold font-megante mt-10">Profile Not Found</h2>
                            <p className="mt-2 text-sm text-gray-600 font-Saudagar ">
                                You have not created a profile yet.
                                <br/>
                                Please create one to continue and access all the features.
                            </p>
                            <a
                                href="/create-profile"
                                className="mt-4 w-full px-4 py-2  bg-[#FED685] text-white font-semibold rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-1 inline-block text-center font-[\'Georgia\', serif] transition-all ease-in-out"
                            >
                                Create Profile
                            </a>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-2 text-sm text-gray-500 hover:underline font-[\'Georgia\', serif]"
                            >
                                No, thanks
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopOne;
