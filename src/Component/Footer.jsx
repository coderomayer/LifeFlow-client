import React from 'react';

const Footer = () => {
    return (
        <div className="bg-slate-300 p-8 md:p-24">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>Search Donors</li>
                        <li>Blood Donation Requests</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <p>Email: contact@lifeflowconnect.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Connection Street, Cityville, State, ZIP Code</p>
                </div>
            </div>
            
            <div className="border-t mt-8 pt-4 text-sm">
                <p className="mb-2">© 2023 LifeFlow Connect. All rights reserved.</p>
                <p>Disclaimer: LifeFlow Connect is a fictional platform created for educational purposes. The content on this site is for demonstration only.</p>
            </div>
        </div>
    );
};

export default Footer;
