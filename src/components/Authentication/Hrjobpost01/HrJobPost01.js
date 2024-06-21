"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import logo from './assets/hiringt.png';
import hrpost01 from './assets/hrpost01.png';

function HrJobPost01() {
  const [selectedOptions, setSelectedOptions] = useState({
    jobType: [],
    experienceLevel: [],
    schedule: []
  });

  const handleOptionClick = (type, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [type]: prevState[type].includes(value) ? prevState[type].filter(item => item !== value) : [...prevState[type], value]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image src={logo} alt="Hiring Tech" className="h-10" />
        <div className="flex items-center">
          <button className="relative mr-4">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405 1.405C18.262 19.837 17.132 21 16 21H8c-1.132 0-2.262-1.163-2.595-2.595L4 17h5m1-4V6a4 4 0 10-8 0v7m0 4h10m0 0v1a2 2 0 11-4 0v-1m4 0H6"></path>
            </svg>
          </button>
          <div className="flex items-center">
            <Image src="https://via.placeholder.com/30" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span>Shruti Dixit</span>
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row items-start justify-between h-auto px-8 py-16">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">CREATE JOB POST</h1>
          <h2 className="text-2xl text-gray-700 mb-8">Add Job Basics</h2>
          <Image src={hrpost01} alt="HR Post 01" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-md rounded-md">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Job Title*</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Role" />
            </div>
            <div>
              <label className="block text-gray-700">Location Type*</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="">Enter work mode</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Job Type*</label>
              <div className="flex flex-wrap gap-2">
                {['Full-time', 'Contract', 'Permanent Job', 'Internship', 'Apprenticeship'].map(type => (
                  <button type="button" key={type} onClick={() => handleOptionClick('jobType', type)} className={`p-2 border ${selectedOptions.jobType.includes(type) ? 'border-blue-500' : 'border-gray-300'} rounded`}>{type}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Experience Level</label>
              <div className="flex flex-wrap gap-2">
                {['No experience needed', 'Under 1 year', '1-2 years', '2-3 years', '3-4 years', '4-6 years', '6-8 years', '8-10 years', 'Above 10 years'].map(level => (
                  <button type="button" key={level} onClick={() => handleOptionClick('experienceLevel', level)} className={`p-2 border ${selectedOptions.experienceLevel.includes(level) ? 'border-blue-500' : 'border-gray-300'} rounded`}>{level}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Schedule</label>
              <div className="flex flex-wrap gap-2">
                {['4 hours shift', '8 hours shift', '10 hours shift', '12 hours shift', 'Monday to Friday', 'Night shift', 'Day shift', 'Evening shift'].map(shift => (
                  <button type="button" key={shift} onClick={() => handleOptionClick('schedule', shift)} className={`p-2 border ${selectedOptions.schedule.includes(shift) ? 'border-blue-500' : 'border-gray-300'} rounded`}>{shift}</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Number of Job Openings*</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                {[...Array(10).keys()].map(n => (
                  <option key={n+1} value={n+1}>{n+1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Closing Date for this Job*</label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded">Continue</button>
          </form>
          <p className="text-center mt-4 text-gray-500">Have feedback? <a href="#feedback" className="text-blue-500">Tell us more.</a></p>
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

export default HrJobPost01;
