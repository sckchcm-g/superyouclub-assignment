import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">© 2024 Website. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;