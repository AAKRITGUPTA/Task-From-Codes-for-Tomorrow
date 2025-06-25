import React, { useState, useEffect } from 'react';
import Leftsidebar from '../components/leftsidebar';
import Rightsidebar from '../components/rightsidebar';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[100vh] bg-gray-200">
        <span className="text-2xl font-bold text-gray-600">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex gap-1 w-full h-[100vh]">
      <Leftsidebar />
      <Rightsidebar />
    </div>
  );
};

export default Home;