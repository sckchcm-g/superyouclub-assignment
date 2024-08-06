import React, { useRef } from 'react';
import LoginForm from './components/LoginForm';
import SomeData from './components/SomeData';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import TypewriterComponent from './components/Typewriter';

function HomePage() {
  // Create a reference for the login form section
  const loginFormRef = useRef(null);

  // Function to scroll to the login form section smoothly
  const scrollToLoginForm = () => {
    if (loginFormRef.current) {
      loginFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white text-black py-20">
          <div className="container mx-auto flex w-100 gap-4 flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left m-8">
              <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Platform</h1>
              <TypewriterComponent
                texts={[
                  "Experience the best features and services we offer. Join us today and start your journey!",
                  "Unlock a world of possibilities with our innovative solutions. Your success is our priority.",
                  "Discover the difference with our top-notch customer support and seamless user experience.",
                  "Join us today and start your journey! Experience the best features and services we offer.",
                ]}
              />
              <br />
              <button
                className="btn bg-opacity-75 text-lg text-white font-semibold rounded-full"
                onClick={scrollToLoginForm}
              >
                Get Started
              </button>
            </div>
            <div className="lg:w-[45%] mt-10 lg:mt-0">
              <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Hero Image" className="rounded-lg w-full" />
            </div>
          </div>
        </section>

        {/* Login Form Section */}
        <section className="forms bg-black py-20" ref={loginFormRef}>
          <div className="container mx-auto flex flex-col lg:flex-row justify-around">
            <div className="w-full lg:w-1/2 lg:mb-0">
              <SomeData />
            </div>
            <div className="w-full lg:w-1/2 lg:mb-0">
              <LoginForm />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-10 text-violet-600">Our Features</h2>
            <div className="grid grid-cols-1 m-6 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <FeatureCard
                title="Real-Time Sales Tracking"
                description="Track your sales in real-time and get instant updates on your performance. Our platform provides detailed analytics to help you make informed decisions."
              />
              <FeatureCard
                title="Comprehensive Reward Management"
                description="Easily manage and monitor your rewards. View your earnings, track reward points, and optimize your marketing strategies to maximize your rewards."
              />
              <FeatureCard
                title="Detailed Sales Reports"
                description="Access detailed reports on your sales data, including brand information, purchase dates, and reward points earned. Analyze trends and improve your marketing efforts."
              />
              <FeatureCard
                title="User-Friendly Interface"
                description="Enjoy a seamless and intuitive experience with our user-friendly interface. Navigate through your data effortlessly and access all the tools you need for success."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default HomePage;