"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import logo from './assets/hiringt.png';
import background from './assets/background.png';

function FeedbackPage() {
  const [feedback, setFeedback] = useState("");

  const handleProceed = () => {
    console.log("Feedback submitted:", feedback);
  };

  return (
    <div className="bg-cover relative min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Image src={logo} alt="Hiring Tech" className="h-10" />
      </nav>
      <div className="flex flex-col items-center justify-center h-auto px-8 py-16">
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Delete my account</h1>
          <p className="text-center mb-4">Aman Kapil, we&apos;re sorry to see you go.</p>
          <p className="text-center mb-4">Please note that deleting your account is irreversible and all the data associated with your <strong>user email</strong> account (including access to trainings) will be permanently deleted.</p>
          <textarea
            placeholder="Your feedback matters"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button className="w-full p-2 mt-4 bg-orange-500 text-white rounded" onClick={handleProceed}>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
