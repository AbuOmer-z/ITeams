import React, { useState } from 'react';
import { Calculator, Plus, Trash2, Info } from 'lucide-react';

interface Course {
  name: string;
  credits: number;
  grade: string;
}

function GpaCalculator() {
  const [currentGPA, setCurrentGPA] = useState<number>(0);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [courses, setCourses] = useState<Course[]>([
    { name: '', credits: 3, grade: 'A' }
  ]);
  const [semesterGPA, setSemesterGPA] = useState<number | null>(null);
  const [cumulativeGPA, setCumulativeGPA] = useState<number | null>(null);

  const gradePoints: { [key: string]: number } = {
    'A': 4.0, 'A-': 3.75,
    'B+': 3.5, 'B': 3.0, 'B-': 2.75,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'F': 0.0
  };

  const addCourse = () => {
    setCourses([...courses, { name: '', credits: 3, grade: 'A' }]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const updateCourse = (index: number, field: keyof Course, value: string | number) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  const calculateGPA = () => {
    let semesterPoints = 0;
    let semesterCredits = 0;

    courses.forEach(course => {
      semesterPoints += course.credits * gradePoints[course.grade];
      semesterCredits += course.credits;
    });

    const newSemesterGPA = semesterCredits > 0 ? semesterPoints / semesterCredits : 0;
    setSemesterGPA(newSemesterGPA);

    const totalPoints = (currentGPA * totalCredits) + semesterPoints;
    const newTotalCredits = totalCredits + semesterCredits;
    const newCumulativeGPA = newTotalCredits > 0 ? totalPoints / newTotalCredits : 0;
    setCumulativeGPA(newCumulativeGPA);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center">
          <Calculator className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-blue-600" />
          GPA Calculator
        </h1>

        <div className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Cumulative GPA
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="0.01"
              value={currentGPA}
              onChange={(e) => setCurrentGPA(Number(e.target.value))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Credits Completed
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={totalCredits}
              onChange={(e) => setTotalCredits(Number(e.target.value))}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) => updateCourse(index, 'name', e.target.value)}
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <select
                value={course.credits}
                onChange={(e) => updateCourse(index, 'credits', parseInt(e.target.value))}
                className="w-full sm:w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                {[1, 2, 3, 4, 5].map(credit => (
                  <option key={credit} value={credit}>{credit} cr.</option>
                ))}
              </select>
              <select
                value={course.grade}
                onChange={(e) => updateCourse(index, 'grade', e.target.value)}
                className="w-full sm:w-24 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                {Object.keys(gradePoints).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
              <button
                onClick={() => removeCourse(index)}
                className="w-full sm:w-auto p-2 text-red-600 hover:text-red-800 flex items-center justify-center"
                aria-label="Remove course"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={addCourse}
            className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Course
          </button>
          <button
            onClick={calculateGPA}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Calculate GPA
          </button>
        </div>

        {(semesterGPA !== null || cumulativeGPA !== null) && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Semester GPA</h2>
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">{semesterGPA?.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Cumulative GPA</h2>
              <p className="text-3xl sm:text-4xl font-bold text-green-600">{cumulativeGPA?.toFixed(2)}</p>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            <Info className="w-5 h-5 mr-2 text-gray-500 mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-600">
              Your semester GPA is calculated based on the courses listed above. 
              The cumulative GPA takes into account your previous GPA, total credits, 
              and the current semester's performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GpaCalculator;