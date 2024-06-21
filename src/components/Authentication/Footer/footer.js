import React from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col lg:flex-row justify-between items-center p-4 bg-white shadow-md mt-10">
                <div className="text-sm text-gray-700 mb-4 lg:mb-0">
                    <span>Copyright © 2020 Hiring Tech, All rights reserved | </span>
                    <Link href="/" className="mr-2 hover:underline">Privacy Policy</Link>
                    <Link href="/" className="mr-2 hover:underline">Terms & Conditions</Link>
                    <Link href="/" className="hover:underline">Site Map</Link>
                </div>
                <div className="text-sm text-gray-700">
                    <span>Follow us on </span>
                    <Link href="/" className="mr-2 hover:underline">LinkedIn</Link>
                    <Link href="/" className="mr-2 hover:underline">Instagram</Link>
                    <Link href="/" className="mr-2 hover:underline">Facebook</Link>
                    <Link href="/" className="hover:underline">Twitter</Link>
                </div>
            </footer></div>
    )
}
