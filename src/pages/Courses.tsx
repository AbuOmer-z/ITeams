import React, { useState } from 'react';
import { Book, Search, GraduationCap, BookOpen } from 'lucide-react';
import { Course, courses } from '../data/courses';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMajor, setSelectedMajor] = useState<string>('all');
  const [selectedCourseType, setSelectedCourseType] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'software-development', name: 'Software Development' },
    { id: 'ai-data-science', name: 'AI & Data Science' },
    { id: 'networks-cybersecurity', name: 'Networks & Cybersecurity' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'administration-management', name: 'Administration & Management' },
  ];

  const majors = [
    { id: 'all', name: 'All Majors' },
    { id: 'cis', name: 'Computer Information Systems' },
    { id: 'bit', name: 'Business Information Technology' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
  ];

  const courseTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'obligatory-faculty', name: 'Obligatory Faculty' },
    { id: 'obligatory-specialization', name: 'Obligatory Specialization' },
    { id: 'elective-specialization', name: 'Elective Specialization' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;

    const matchesMajorAndType = course.majors.some(m => {
      const majorMatch = selectedMajor === 'all' || m.major === selectedMajor;
      const typeMatch = selectedCourseType === 'all' || m.courseType === selectedCourseType;
      return majorMatch && typeMatch;
    });

    return matchesSearch && matchesCategory && matchesMajorAndType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8"> Courses</h1>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Categories Filter */}
          {/* <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div> */}

          {/* Majors Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Major</h3>
            <div className="flex flex-wrap gap-2">
              {majors.map((major) => (
                <button
                  key={major.id}
                  className={`px-3 py-1 rounded-full text-sm ${selectedMajor === major.id ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setSelectedMajor(major.id)}
                >
                  {major.name}
                </button>
              ))}
            </div>
          </div>

          {/* Course Types Filter */}
          <div>
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Course Type</h3>
            <div className="flex flex-wrap gap-2">
              {courseTypes.map((type) => (
                <button
                  key={type.id}
                  className={`px-3 py-1 rounded-full text-sm ${selectedCourseType === type.id ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setSelectedCourseType(type.id)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => {
          // Find all matching major+type entries for display
          const matchedMajors = course.majors.filter(m => {
            const majorMatch = selectedMajor === 'all' || m.major === selectedMajor;
            const typeMatch = selectedCourseType === 'all' || m.courseType === selectedCourseType;
            return majorMatch && typeMatch;
          });

          return (
            <div key={course.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">{course.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <Book className="w-5 h-5 mr-2 text-blue-600" />
                    <span>{course.credits} Credits</span>
                  </div>
                </div>

                {/* <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  {matchedMajors.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="text-gray-700">
                          Major: {majors.find(maj => maj.id === m.major)?.name || m.major}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                        <span className="text-gray-700">
                          Type: {courseTypes.find(t => t.id === m.courseType)?.name || m.courseType}
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          );
        })}

        {filteredCourses.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
