import React from 'react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/ocean.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
          안녕하세요 👋
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-200 mb-8">
          웹 개발자 포트폴리오입니다
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          창의적이고 효율적인 웹 솔루션을 만드는 것을 좋아합니다
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          첫번째 웹페이지 개발
        </button>
      </div>
    </section>
  );
};

export default Hero; 