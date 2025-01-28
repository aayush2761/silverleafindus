import React, { useState } from 'react';
import profile from '/texture/textureOne.jpg';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
	const { user } = useAuth0();

	const [editingProcess, setEditingProcess] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '+91',
		phoneNumber: '',
		appartmentNumber: '',
		streetNumber: '',
		city: '',
		state: '',
		country: ''
	});

	const handleEdit = () => {
		setEditingProcess(true);
	}

	const handleSave = () => {
		console.log(formData);
		setEditingProcess(false);
	}

	const handleClose = () => {
		setEditingProcess(false);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	return (
		<>
			<div className='p-4 md:p-20 pb-10'>
				<div className='flex mt-10 rounded-2xl overflow-hidden flex-col md:flex-row justify-center items-center'>
					<div className='w-full max-w-[650px] h-full p-4 xs:p-10 flex flex-col justify-center items-center transition-all ease-in-out'>
						<form className="space-y-4 w-full">
							<div className='flex flex-row justify-center items-center'>
								<img src={user.picture} alt={`${user.family_name} profile photo`} className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full transition-all ease-in-out'/>
							</div>

							<h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-megante text-gray-800 capitalize transition-all ease-in-out mt-10 md:mt-20">user profile</h2>
							
							<div className="flex flex-col sm:flex-row gap-4 mt-7">
								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="firstName" placeholder="First name" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.firstName} onChange={handleChange} />
								</div>

								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="lastName" placeholder="last name" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.lastName} onChange={handleChange} />
								</div>
							</div>

							<div>
								<div className="flex items-center border border-gray-300 p-3">
									<input type="email" name="email" placeholder="Your email" className="w-full font-megante lowercase outline-none focus:ring-0" required disabled={!editingProcess} value={formData.email} onChange={handleChange} />
								</div>
							</div>

							<div>
								<div className="flex items-center border border-gray-300 p-3">
									<select name="countryCode" className="outline-none bg-transparent text-gray-500 mr-2" disabled={!editingProcess} value={formData.countryCode} onChange={handleChange}>
										<option value="+91">+91</option>
										<option value="+1">+1</option>
									</select>
									
									<input type="text" name="phoneNumber" placeholder="Phone number" className="w-full font-megante lowercase outline-none focus:ring-0" required disabled={!editingProcess} value={formData.phoneNumber} onChange={handleChange} />
								</div>
							</div>

							<div>
								<div className="flex items-center border border-gray-300 p-3">
									<input type="text" name="appartmentNumber" placeholder="appartment number" className="w-full font-megante lowercase outline-none focus:ring-0" required disabled={!editingProcess} value={formData.appartmentNumber} onChange={handleChange} />
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="streetNumber" placeholder="street number" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.streetNumber} onChange={handleChange} />
								</div>

								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="city" placeholder="city" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.city} onChange={handleChange} />
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="state" placeholder="state" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.state} onChange={handleChange} />
								</div>

								<div className='flex flex-col gap-1 w-full md:w-[50%]'>
									<input type="text" name="country" placeholder="country" className="w-full border font-megante lowercase border-gray-300 p-3 focus:ring-1 focus:ring-amber-600 outline-none" required disabled={!editingProcess} value={formData.country} onChange={handleChange} />
								</div>
							</div>

							{!editingProcess && 
								(
									<button type="button" onClick={handleEdit} className="w-full bg-[#FED685] capitalize font-megante text-[#131313] hover:bg-amber-300 hover:cursor-pointer font-medium py-3 transition-all duration-300" >
										Edit
									</button>
								)
							}

							{editingProcess && 
								(
									<div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
										<button type="button" onClick={handleSave} className="w-full md:w-[48%] bg-[#FED685] capitalize font-megante text-[#131313] hover:bg-amber-300 hover:cursor-pointer font-medium py-3 transition-all duration-300" >
											Save
										</button>

										<button type="button" onClick={handleClose} className="w-full md:w-[48%] bg-rose-400 capitalize font-megante text-white hover:bg-rose-600 hover:cursor-pointer font-medium py-3 transition-all duration-300" >
											Cancel
										</button>	
									</div>
								)
							}
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;