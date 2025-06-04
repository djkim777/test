'use client';

import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "프로젝트 1",
      description: "Next.js와 TypeScript를 활용한 웹 애플리케이션",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/coding1.jpg",
      link: "#"
    },
    {
      title: "프로젝트 2",
      description: "React와 Node.js를 이용한 풀스택 애플리케이션",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/coding2.jpg",
      link: "#"
    },
    {
      title: "프로젝트 3",
      description: "Python Django를 활용한 백엔드 시스템",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "/coding3.jpg",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">프로젝트</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 