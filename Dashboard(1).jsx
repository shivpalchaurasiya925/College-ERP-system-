
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">College ERP Dashboard</h1>
      <Link className="block text-blue-600 mb-2" to="/students">Student Records</Link>
      <Link className="block text-blue-600 mb-2" to="/attendance">Attendance</Link>
      <Link className="block text-blue-600 mb-2" to="/results">Results</Link>
      <Link className="block text-blue-600 mb-2" to="/notices">Notice Board</Link>
      <Link className="block text-blue-600 mb-2" to="/timetable">Timetable</Link>
    </div>
  );
}

export default Dashboard;
