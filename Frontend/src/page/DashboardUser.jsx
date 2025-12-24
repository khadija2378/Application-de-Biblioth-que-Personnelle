import React, { useState } from 'react';
import SideBar from '../compenents/SideBar';
import MainDashboard from '../compenents/MainDashboard';
import MainBook from '../compenents/MainBook';
import MainRead from '../compenents/MainRead';
import MainLoan from '../compenents/MainLoan';
import MainStatistic from '../compenents/MainStatistic';
import Header from '../compenents/Header';

const DashboardUser = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

     const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <MainDashboard />;
      case "book":
        return <MainBook />;
      case "read":
        return <MainRead />;
    case "loan":
        return <MainLoan />;
    case "statistic":
        return <MainStatistic />;
      default:
        return <div>Sélectionnez une section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">

      <SideBar activeSection={activeSection} setActiveSection={setActiveSection}/>

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header/>

        {renderContent()}
        
      </main>
    </div>
  );
};

export default DashboardUser;