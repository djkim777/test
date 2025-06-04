import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 
                사용자 경험을 중심으로 한 웹 애플리케이션 개발에 관심이 많습니다.
              </p>
              <p className="text-lg text-gray-600">
                새로운 기술을 배우고 적용하는 것을 좋아하며, 
                팀과 협업하여 문제를 해결하는 것에 큰 보람을 느낍니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">주요 정보</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-medium w-24">위치:</span>
                  <span className="text-gray-600">대한민국</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-24">경력:</span>
                  <span className="text-gray-600">N년</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-24">학력:</span>
                  <span className="text-gray-600">컴퓨터공학</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium w-24">관심분야:</span>
                  <span className="text-gray-600">웹개발, UI/UX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 