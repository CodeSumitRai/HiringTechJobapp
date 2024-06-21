"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import logo from './assets/hiringt.png';
import hrpost02 from './assets/hrpost02.png';

function HrJobPost02() {
  const [pay, setPay] = useState({ minimum: '', maximum: '', rate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPay(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image src={logo} alt="Hiring Tech" width={100} height={40} className="h-10" />
        <div className="flex items-center">
          <button className="relative mr-4">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405 1.405C18.262 19.837 17.132 21 16 21H8c-1.132 0-2.262-1.163-2.595-2.595L4 17h5m1-4V6a4 4 0 10-8 0v7m0 4h10m0 0v1a2 2 0 11-4 0v-1m4 0H6"></path>
            </svg>
          </button>
          <div className="flex items-center">
            <Image src="https://via.placeholder.com/30" alt="User" width={30} height={30} className="w-8 h-8 rounded-full mr-2" />
            <span>Shruti Dixit</span>
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row items-start justify-between h-auto px-8 py-16">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-xl text-gray-900 mb-4">CREATE JOB POST</h1>
          <h3 className="text-xl font-bold text-gray-700 mb-8">Add Pay And Benefits</h3>
          <Image src={hrpost02} alt="HR Post 02" width={500} height={300} className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-md rounded-md">
          <form>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Pay</label>
              <select name="rate" value={pay.rate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Show pay by</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Daily">Daily</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className="flex justify-between mb-6">
              <div className="w-1/3 pr-2">
                <label className="block mb-2 font-medium">Minimum</label>
                <select name="minimum" value={pay.minimum} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">₹ 3 LPA</option>
                  <option value="3 LPA">₹ 3 LPA</option>
                  <option value="4 LPA">₹ 4 LPA</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="w-1/3 px-2">
                <label className="block mb-2 font-medium">Maximum</label>
                <select name="maximum" value={pay.maximum} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">₹ 4 LPA</option>
                  <option value="4 LPA">₹ 4 LPA</option>
                  <option value="5 LPA">₹ 5 LPA</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Compensation packages</label>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Yearly bonus</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Stock options</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Bonus opportunities</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Overtime pay</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Other</button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Benefits</label>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Health insurance</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Referral program</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Relocation assistance</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Retirement plan</button>
                <button type="button" className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full">+ Parental leave</button>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <button type="button" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Back</button>
              <button type="button" className="bg-orange-400 text-white px-4 py-2 rounded-md">Continue</button>
            </div>
            <div className="text-center">
              <span className="text-gray-600">Have feedback?</span> <a href="/feedback" className="text-orange-400">Tell us more.</a>
            </div>
          </form>
        </div>
      </div>
      <footer className="flex flex-col lg:flex-row justify-between items-center p-4 bg-white shadow-md mt-10">
        <div className="text-sm text-gray-700 mb-4 lg:mb-0">
          <span>Copyright © 2020 Hiring Tech, All rights reserved | </span>
          <a href="#privacy-policy" className="mr-2 hover:underline">Privacy Policy</a>
          <a href="#terms-conditions" className="mr-2 hover:underline">Terms & Conditions</a>
          <a href="#site-map" className="hover:underline">Site Map</a>
        </div>
        <div className="text-sm text-gray-700">
          <span>Follow us on </span>
          <a href="#linkedin" className="mr-2 hover:underline">LinkedIn</a>
          <a href="#instagram" className="mr-2 hover:underline">Instagram</a>
          <a href="#facebook" className="mr-2 hover:underline">Facebook</a>
          <a href="#twitter" className="hover:underline">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default HrJobPost02;
