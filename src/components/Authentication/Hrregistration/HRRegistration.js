"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from './assets/hiringt.png';
import background from './assets/background.png';
import openings from './assets/openings.png';
import hired from './assets/hired.png';
import companies from './assets/companies.png';

function HRRegistration() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const formData = { fullName, companyName, email, mobileNumber, password, confirmPassword, dateOfBirth };
    console.log(formData);
    setError("");
  };

  return (
    <div className="bg-cover relative min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image src={logo} alt="Hiring Tech" className="h-10" />
        <a href="#contact" className="text-lg text-gray-700 hover:underline">Contact</a>
      </nav>
      <div className="flex flex-col lg:flex-row items-start justify-between h-auto px-8 py-16">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl font-bold text-blue-900 mb-4">
            Unlock Best Talents!
            <br />
            <span className="text-base lg:text-lg">Discover Exceptional Talent, Post Your Job Today!</span>
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center h-20 lg:h-24">
              <Image src={openings} alt="Job Openings" className="w-20 lg:w-24" />
              <div className="ml-2">
                <h2 className="text-xl lg:text-2xl font-bold">100%</h2>
                <p>Verified Students</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-center h-20 lg:h-24">
              <Image src={hired} alt="Talents Hired" className="w-20 lg:w-24" />
              <div className="mr-2">
                <h2 className="text-xl lg:text-2xl font-bold">10K+</h2>
                <p>Talents</p>
              </div>
            </div>
            <div className="flex items-center h-20 lg:h-24">
              <Image src={companies} alt="Companies" className="w-20 lg:w-24" />
              <div className="ml-2">
                <h2 className="text-xl lg:text-2xl font-bold text-[#175574]">500+</h2>
                <p>Skills</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-md">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full p-2 mt-4 bg-orange-500 text-white rounded" onClick={handleClick}>Sign Up</button>
          <button className="w-full p-2 mt-4 bg-red-500 text-white rounded">Continue with Google</button>
          <p className="text-center mt-4">
            Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
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

export default HRRegistration;
