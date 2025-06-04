import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mt-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">자기소개 및 기술 및 특징</h2>
        <p className="text-gray-600">
          개발자로서의 자기소개 및 주요 기술 스택, 특징적인 역량에 대한 설명이 들어갑니다.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tailwind</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Jest</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Redux</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Programs</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Figma</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Photoshop</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills 