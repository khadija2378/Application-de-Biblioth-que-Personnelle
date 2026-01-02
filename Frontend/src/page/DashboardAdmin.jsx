import React, { useState } from 'react';
import SideBar from '../compenents/SideBar';
import MainDashboard from '../compenents/MainDashboard';
import MainBook from '../compenents/MainBook';
import MainRead from '../compenents/MainRead';
import MainLoan from '../compenents/MainLoan';
import MainStatistic from '../compenents/MainStatistic';
import Header from '../compenents/Header';
import SidebarA from '../compenents/SidbarA';
import HeaderA from '../compenents/HeaderA';
import TableUser from '../compenents/TableUser';
import MainDashboardA from '../compenents/MainDashboardA';
import TableAdmin from '../compenents/TableAdmin';
import AddUser from '../compenents/AddUser';

const DashboardAdmin = () => {
  const [activeSection, setActiveSection] = useState("dashboardA");

     const renderContent = () => {
    switch (activeSection) {
      case "dashboardA":
        return <MainDashboardA />;
        case "add":
        return <AddUser />;
      case "users":
        return <TableUser />;
      case "admin":
        return <TableAdmin />;
      
      default:
        return <div>Sélectionnez une section</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">

      <SidebarA activeSection={activeSection} setActiveSection={setActiveSection}/>

      <main className="flex-1 flex flex-col overflow-hidden">
        <HeaderA/>

        {renderContent()}
        
      </main>
    </div>
  );
};

export default DashboardAdmin;