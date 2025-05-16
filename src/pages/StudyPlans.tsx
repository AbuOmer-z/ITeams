import React from 'react';
import { Download } from 'lucide-react';

function StudyPlans() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Image Section */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
      
      </div>

      {/* Download Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Download Study Plans</h2>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div>
            <h3 className="font-semibold text-lg">Complete Study Plans Package</h3>
            <p className="text-gray-600">Download the complete guide of all available study plans</p>
          </div>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.open('/public/CIS-JU aqaba.pdf', '_blank')}
          >
            <Download className="w-5 h-5" />
            CIS
          </button>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.open('/public/CYS-JU aqaba.pdf', '_blank')}
          >
            <Download className="w-5 h-5" />
            CYS
          </button>
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.open('/public/BIT-JU aqaba.pdf', '_blank')}
          >
            <Download className="w-5 h-5" />
            BIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudyPlans;