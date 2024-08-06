import React from 'react';
import UserInfoCard from './components/UserInfoCard';
import SalesTable from './components/SalesTable';

function Dashboard() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* User Information Card */}
      <UserInfoCard />
      
      {/* Sales Table */}
      <SalesTable />
    </div>
  );
}

export default Dashboard;