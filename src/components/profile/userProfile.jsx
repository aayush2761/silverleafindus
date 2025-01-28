// import React from "react";

// function UserProfile({ handleClose }) {
//   return (
//     <div className="fixed h-full flex flex-col justify-center items-center w-full right-0 bg-white text-white z-10 gap-6">
//     <div className="flex h-full items-center justify-center min-h-screen">
//       <div className="bg-white h-full p-10 rounded-3xl shadow-2xl w-full max-w-3xl border border-gold-500">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gold-500 uppercase">Sign Up</h1>
//         <form className="space-y-8">
//           <div className="grid grid-cols-2 gap-8">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-semibold text-black">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-semibold text-black">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                 placeholder="Enter your last name"
//               />
//             </div>
//             <div>
//               <label htmlFor="phoneNumber" className="block text-sm font-semibold text-black">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//             <div>
//               <label htmlFor="gender" className="block text-sm font-semibold text-black">
//                 Gender
//               </label>
//               <select
//                 id="gender"
//                 className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//               >
//                 <option value="">Select your gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold text-black">
//               Email ID
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="apartment" className="block text-sm font-semibold text-black">
//                 Apartment Number
//               </label>
//               <input
//                 type="text"
//                 id="apartment"
//                 className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                 placeholder="Enter your apartment number"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <label htmlFor="street" className="block text-sm font-semibold text-black">
//                   Street Number
//                 </label>
//                 <input
//                   type="text"
//                   id="street"
//                   className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                   placeholder="Enter your street number"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="city" className="block text-sm font-semibold text-black">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   id="city"
//                   className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                   placeholder="Enter your city"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="state" className="block text-sm font-semibold text-black">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   id="state"
//                   className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                   placeholder="Enter your state"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="country" className="block text-sm font-semibold text-black">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   id="country"
//                   className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
//                   placeholder="Enter your country"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               className="py-2 px-6 bg-gray-700 text-gold-300 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-1"
//             >
//               Edit
//             </button>
//             <button
//               type="submit"
//               className="py-2 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-1"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     <button onClick={handleClose} className="text-2xl font-megante capitalize text-rose-500"> close </button>
//   </div>
// );
// }


// export default UserProfile;
// {/* <button onClick={handleClose} className="text-2xl font-megante capitalize text-rose-500"> close </button> */}


import React from "react";

function UserProfile({ handleClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-end bg-white bg-opacity-50 z-10">
      <div className="bg-white p-10 rounded-t-3xl shadow-2xl w-full max-w-3xl border h-full sm:h-auto overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold-500 uppercase">Sign Up</h1>
        <form className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-black">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-black">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-black">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-semibold text-black">
                Gender
              </label>
              <select
                id="gender"
                className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-black">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-6">
            <div>
              <label htmlFor="apartment" className="block text-sm font-semibold text-black">
                Apartment Number
              </label>
              <input
                type="text"
                id="apartment"
                className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                placeholder="Enter your apartment number"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="street" className="block text-sm font-semibold text-black">
                  Street Number
                </label>
                <input
                  type="text"
                  id="street"
                  className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                  placeholder="Enter your street number"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-black">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-black">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                  placeholder="Enter your state"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-black">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="mt-2 block w-full rounded-lg bg-gray-100 border-gold-500 text-black shadow-sm focus:border-gold-300 focus:ring-gold-300 px-4 py-2"
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="py-2 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-1"
            >
              Edit
            </button>
            <button
              type="submit"
              className="py-2 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-1"
            >
              Save
            </button>
          </div>
        </form>
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-2xl font-megante capitalize text-rose-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
