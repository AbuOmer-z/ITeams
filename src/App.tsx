import React, { useState } from 'react';
import { GraduationCap, Code, Database, Shield, Globe, Phone, Mail, MapPin, X, Menu } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import StudyPlans from './pages/StudyPlans';
import GpaCalculator from './pages/GpaCalculator';
import FacultyContacts from './pages/FacultyContacts';
import Courses from './pages/Courses';
import Home from './pages/Home';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <GraduationCap className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold">ITeams </span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/study-plans" className="hover:bg-gray-700 px-3 py-2 rounded-md">Study Plans</Link>
              <Link to="/gpa-calculator" className="hover:bg-gray-700 px-3 py-2 rounded-md">GPA Calculator</Link>
              <Link to="/faculty" className="hover:bg-gray-700 px-3 py-2 rounded-md">Faculty</Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          } md:hidden absolute w-full bg-gray-800 z-50 transition-all duration-300 ease-in-out transform shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/study-plans" 
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Study Plans
            </Link>
            <Link 
              to="/gpa-calculator" 
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              GPA Calculator
            </Link>
            <Link 
              to="/faculty" 
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </Link>
          </div>
        </div>
      </nav>
    

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<Home />} />
  

          <Route path="/study-plans" element={<StudyPlans />} />
          <Route path="/gpa-calculator" element={<GpaCalculator />} />
          <Route path="/faculty" element={<FacultyContacts />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                -_-
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/study-plans" className="hover:text-blue-400">Study Plans</Link></li>
                <li><Link to="/gpa-calculator" className="hover:text-blue-400">GPA Calculator</Link></li>
                <li><Link to="/faculty" className="hover:text-blue-400">Faculty</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                -_-
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 ITeams . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;