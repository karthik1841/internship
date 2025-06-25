// src/components/HomePage.jsx
import React from 'react';
import './HomePage.css'; // Create this file

import Staff from './Staff';
import Equipment from './Equipment';
import SalaryStatus from './SalaryStatus';
import StaffVsEquipmentGraph from './StaffVsEquipmentGraph';
import SalaryVsStaffGraph from './SalaryVsStaffGraph';
import PieChartComponent from './PieChartComponent';

function HomePage() {
  return (
    <div className="home-container">
      {/* ✅ Navbar */}
      <nav className="navbar">
        <h2>📊 Company Dashboard</h2>
        <div className="nav-links">
          <span>Dashboard</span>
          <span>Logout</span>
        </div>
      </nav>

      {/* ✅ Dashboard Content */}
      <div className="dashboard-grid">
        <div className="dashboard-card"><h3>👨‍💼 Staff</h3><Staff /></div>
        <div className="dashboard-card"><h3>🧰 Equipment</h3><Equipment /></div>
        <div className="dashboard-card"><h3>💵 Salary Status</h3><SalaryStatus /></div>
        <div className="dashboard-card"><h3>📈 Staff vs Equipment</h3><StaffVsEquipmentGraph /></div>
        <div className="dashboard-card"><h3>📉 Salary vs Staff</h3><SalaryVsStaffGraph /></div>
        <div className="dashboard-card"><h3>🥧 Salary Pie Chart</h3><PieChartComponent /></div>
      </div>
    </div>
  );
}

export default HomePage;
