import React from 'react';

// NotFound Component: Displays a 404 error message and a link to go back to the home page
function NotFound() {
    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <a href="/" className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-700 transition duration-300">
                Go to Home
            </a>
        </div>
    );
}

export default NotFound;