// src/components/login.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import logo from './assets/hiringt.png';
import background from './assets/background.png';
import { Footer } from '../Footer/footer';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordGuidelines, setPasswordGuidelines] = useState([
    "Password is too common. Please choose a more unique password.",
    "Password must be at least 8 characters long.",
    "Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one number (0-9), and one special character (e.g., !, @, #, $)"
  ]);

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match. Please re-enter your password.");
      return;
    }
    console.log("Password changed");
    setError("");
  };

  return (
    <div className="bg-cover relative min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image src={logo} alt="Hiring Tech" className="h-10" />
      </nav>
      <div className="flex flex-col items-center justify-center h-auto px-8 py-16">
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Change Password</h1>
          <input
            type="password"
            placeholder="Old Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div className="text-gray-600 text-sm mb-4">
            {passwordGuidelines.map((guideline, index) => (
              <p key={index}>* {guideline}</p>
            ))}
          </div>
          <input
            type="password"
            placeholder="Retype New Password"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button className="w-full p-2 mt-4 bg-orange-500 text-white rounded" onClick={handleChangePassword}>Update</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ChangePassword;
