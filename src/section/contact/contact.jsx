import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const {user} = useAuth0();

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <>
            <div className="w-full h-screen px-5 sm:px-16 md:px-30 flex flex-col lg:flex-row items-center justify-between transition-all ease-in-out">
                <div className="w-full h-full flex flex-col justify-center items-center max-w-[650px] pt-[80px]">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bugetaDream text-gray-800 transition-all ease-in-out">Get in Touch</h2>
                        <p className="text-sm xs:text-md xl:text-lg font-megante text-gray-500 mt-5 mb-6 transition-all ease-in-out">We’d love to hear from you. Send us a message and we’ll respond as soon as possible!</p>
                        <div className="flex gap-4">
                            <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleInputChange} className="w-1/2 border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
                            <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} className="w-1/2 border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
                        </div>

                        <div className="flex items-center border border-gray-300 p-3">
                            <span className="text-gray-500 mr-2">@</span>
                            <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} className="w-full font-megante lowercase outline-none focus:ring-0" required />
                        </div>
                        <div className="flex items-center border border-gray-300 p-3">
                            <select name="countryCode" className="outline-none bg-transparent text-gray-500 mr-2" >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                            </select>
                            <input type="text" name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleInputChange} className="w-full font-megante lowercase outline-none focus:ring-0" />
                        </div>
                        <div>
                            <textarea name="message" rows="4" maxLength="200" placeholder="How can we help?" value={formData.message} onChange={handleInputChange} className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none resize-none" ></textarea>
                            <div className="text-right text-sm text-gray-400 mt-1">
                                {formData.message.length}/200
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-[#FED685] capitalize font-megante text-[#131313] hover:bg-amber-300 hover:cursor-pointer font-medium py-3 transition-all duration-300" >
                            submit
                        </button>
                    </form>

                    {submitted && (
                        <p className="mt-4 text-center text-green-500 font-medium">
                            Thank you for reaching out! We'll get back to you soon.
                        </p>
                    )}

                    <p className="text-center text-xs text-gray-400 mt-6">
                        By contacting us, you agree to our <span className="text-blue-500 underline hover:cursor-pointer">Terms of service</span> and{" "}
                        <span className="text-blue-500 underline hover:cursor-pointer">Privacy Policy</span>.
                    </p>
                </div>

                <div className="w-full h-full">

                </div>
            </div>
        </>
    );
}

export default Contact;
