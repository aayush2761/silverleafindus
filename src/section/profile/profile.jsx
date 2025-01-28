import React, { useState } from 'react';
import profile from '/texture/textureOne.jpg';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
	const {user} =useAuth0();

	return (
		<>
			<div className='p-20 pb-10'>
				<div className='flex mt-10 rounded-2xl overflow-hidden flex flex-row justify-center item-center'>
					<div className='w-1/2 h-full p-10 flex flex-row justify-center item-center'>
						<form className="space-y-4">
							<div className='flex flex-row justify-center item-center'>
								<img src={user.picture} alt={`${user.family_name} profile photo`} className='w-[200px] h-[200px] rounded-full'/>
							</div>

							<h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-megante text-gray-800 capitalize transition-all ease-in-out mt-20">user profile</h2>
							
							<div className="flex gap-4 mt-7">
								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>first name</p>
									<input type="text" name="firstName" placeholder="First name" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>

								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>last name</p>
									<input type="text" name="lastName" placeholder="last name" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>
							</div>

							<div>
								<p className='font-megante text-gray-500'>email</p>
								<div className="flex items-center border border-gray-300 p-3">
									<input type="email" name="email" placeholder="Your email" className="w-full font-megante lowercase outline-none focus:ring-0" required />
								</div>
							</div>

							<div>
								<p className='font-megante text-gray-500'>phone number</p>
								<div className="flex items-center border border-gray-300 p-3">
									<select name="countryCode" className="outline-none bg-transparent text-gray-500 mr-2" >
										<option value="+91">+91</option>
										<option value="+1">+1</option>
									</select>
									
									<input type="text" name="phoneNumber" placeholder="Phone number" className="w-full font-megante lowercase outline-none focus:ring-0" />
								</div>
							</div>

							<div>
								<p className='font-megante text-gray-500'>appartment number</p>
								<div className="flex items-center border border-gray-300 p-3">
									<input type="email" name="appartmentNumber" placeholder="appartment number" className="w-full font-megante lowercase outline-none focus:ring-0" required />
								</div>
							</div>

							<div className="flex gap-4">
								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>street number</p>
									<input type="text" name="streetNumber" placeholder="street number" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>

								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>city</p>
									<input type="text" name="city" placeholder="city" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>
							</div>

							<div className="flex gap-4">
								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>state</p>
									<input type="text" name="state" placeholder="state" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>

								<div className='flex flex-col gap-1 w-[50%]'>
									<p className='font-megante text-gray-500'>country</p>
									<input type="text" name="country" placeholder="country" className="w-[100%] border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required />
								</div>
							</div>

							<button type="submit" className="w-full bg-[#FED685] capitalize font-megante text-[#131313] hover:bg-amber-300 hover:cursor-pointer font-medium py-3 transition-all duration-300" >
								Edit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;