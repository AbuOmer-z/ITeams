import React from 'react';
import { Mail, Phone, Globe, Award } from 'lucide-react';

interface Professor {
  name:  string;
  title: string;
  email: string;
  
}

function FacultyContacts() {
  const professors: Professor[] = [
    {
      name: "empty",
      title: "-",
      email: "-",
      
    },
    {
      name: "empty",
      title: "",
      email: "",
      
    },
    {
      name: "empty",
      title: "",
      email: "",
     
    },
    {
      name: "empty",
      title: "",
      email: "",
      
    },
    {
      name: "empty",
      title: "",
      email: "",
    
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Faculty Contacts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professors.map((professor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{professor.name}</h2>
                <p className="text-gray-600 flex items-center mb-2">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  {professor.title} - {professor.department}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="flex items-center">
                <a href={`mailto:${professor.email}`} className="text-blue-600 hover:underline">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  {professor.email}
                </a>
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyContacts;