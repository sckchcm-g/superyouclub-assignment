import React from 'react';
import { useStore } from '../../store/StoreContext';

function UserInfoCard() {
  // Extract necessary data and functions from the store context
  const { logout, totalSalesSum, totalRewardPoints, userData } = useStore();

  // Handle logout button click
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex items-center bg-white w-[80%] mt-10 border-2 border-violet-500 shadow-lg p-6 rounded-md text-gray-900">
      {/* User avatar */}
      <img src={userData?.image} alt="Avatar" className="rounded-full w-20 mr-6" />
      
      {/* User information */}
      <div className='flex-grow'>
        <p className="text-lg font-bold">{userData?.name}</p>
        <p className="text-md text-gray-600">{userData?.designation}</p>
      </div>
      
      {/* Sales and reward points information */}
      <div className="flex-grow">
        <p className="text-lg">Sales: ₹ {totalSalesSum}</p>
        <p className="text-lg">Reward Points: {totalRewardPoints}</p>
      </div>
      
      {/* Logout button */}
      <button className="btn btn-error text-white bg-red-600" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserInfoCard;