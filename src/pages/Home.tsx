import React from 'react';
import {
  BookOpenCheck,
  Calculator,
  Users,
  BookCopy,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: 'Study Plans',
      description: 'Explore detailed study plans tailored for your IT specialization.',
      icon: <BookOpenCheck className="w-8 sm:w-10 h-8 sm:h-10 text-blue-500" />,
      link: '/study-plans',
    },
    {
      title: 'GPA Calculator',
      description: 'Easily calculate your semester and cumulative GPA.',
      icon: <Calculator className="w-8 sm:w-10 h-8 sm:h-10 text-green-500" />,
      link: '/gpa-calculator',
    },
    {
      title: 'Faculty Contacts',
      description: 'Find contact details for your professors and staff.',
      icon: <Users className="w-8 sm:w-10 h-8 sm:h-10 text-purple-500" />,
      link: '/faculty',
    },
    {
      title: 'Courses',
      description: 'Browse available courses and their descriptions.',
      icon: <BookCopy className="w-8 sm:w-10 h-8 sm:h-10 text-red-500" />,
      link: '/courses',
    },
  ];

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">Welcome to ITeams</h1>
      <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
        Your one-stop platform for academic resources in the IT faculty.
      </p>

      <div className="grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex items-start hover:shadow-xl transition-all duration-300"
          >
            <div className="mr-3 sm:mr-4">{feature.icon}</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-1">{feature.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;