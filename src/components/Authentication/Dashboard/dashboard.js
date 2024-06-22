"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from './assets/hiringt.png';
import welcomebanner from './assets/welcomebanner.png';
import card1 from './assets/card1.png';
import card2 from './assets/card2.png';
import card3 from './assets/card3.png';
import card4 from './assets/card4.png';
import coursead1 from './assets/coursead1.png';
import coursead2 from './assets/coursead2.png';

const Dashboard = () => {
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
            <span>Aman Kapil</span>
          </div>
        </div>
      </nav>

      <div className="flex px-4 py-8">
        {/* Left Section */}
        <div className="w-1/5">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul className="mb-4">
            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Jobs</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Internships</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Guaranteed Jobs</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">My Applications</a></li>
            <li className="mb-2"><a href="#" className="text-gray-700 hover:text-gray-900">Messages</a></li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 mb-2">AI Resume</button>
          <button className="w-full bg-blue-500 text-white py-2">AI Interviews</button>
        </div>

        {/* Middle Section */}
        <div className="w-3/5 mx-4">
          <div className="bg-blue-100 rounded-lg p-6 mb-4 relative flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">Wednesday, 5 June 2024</p>
              <h1 className="text-2xl font-bold mb-2">Welcome back, Aman!</h1>
              <p className="text-gray-700">Ready to Land Your Dream Career? Let's Help!</p>
            </div>
            <Image src={welcomebanner} alt="Welcome Banner" width={200} height={200} />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Image src={card1} alt="Card 1" className="rounded-lg" />
            <Image src={card2} alt="Card 2" className="rounded-lg" />
            <Image src={card3} alt="Card 3" className="rounded-lg" />
            <Image src={card4} alt="Card 4" className="rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">HTML</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">CSS</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Java</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Python</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">React.js</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">VPS</span>
              </div>
              <input
                type="text"
                placeholder="Start typing to add skills"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Your Cover Letter</h2>
              <textarea
                placeholder="Write your cover letter here..."
                className="w-full p-2 border rounded mb-2"
                rows="5"
              ></textarea>
              <div className="flex justify-end gap-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Edit</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Read</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Download</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image src={coursead1} alt="Course Ad 1" className="rounded-lg" />
            <Image src={coursead2} alt="Course Ad 2" className="rounded-lg" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/5">
          <h2 className="text-xl font-semibold mb-4">Career Vibes</h2>
          <button className="w-full bg-blue-500 text-white py-2 mb-2">On the Hunt</button>
          <button className="w-full bg-blue-500 text-white py-2 mb-4">Browsing</button>

          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Upcoming Interviews</h3>
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <Image src="https://via.placeholder.com/30" alt="Interview 1" width={30} height={30} className="rounded-full" />
              </div>
              <div className="ml-4">
                <p className="font-semibold">XYZ Company</p>
                <p className="text-gray-600">June 10, 2024</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <Image src="https://via.placeholder.com/30" alt="Interview 2" width={30} height={30} className="rounded-full" />
              </div>
              <div className="ml-4">
                <p className="font-semibold">ABC Corp</p>
                <p className="text-gray-600">June 15, 2024</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <Image src="https://via.placeholder.com/30" alt="Interview 3" width={30} height={30} className="rounded-full" />
              </div>
              <div className="ml-4">
                <p className="font-semibold">DEF Inc.</p>
                <p className="text-gray-600">June 20, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 shadow rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-4">Recent Messages</h3>
            <div className="mb-4">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">Hey, are you available for a quick call today?</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">We have reviewed your resume and would like to schedule an interview.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
