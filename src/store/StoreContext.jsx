import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import userData from './UserData.json';

// Create a context for the store
const StoreContext = createContext();

// Provider component to wrap the application and provide the store context
export const StoreProvider = ({ children }) => {
  // State variables for authentication, user data, sales data, and error messages
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDataState, setUserDataState] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [totalSalesSum, setTotalSalesSum] = useState(0);
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);
  const [error, setError] = useState('');

  // Effect to calculate total sales and reward points whenever salesData changes
  useEffect(() => {
    const calculateSums = () => {
      const salesSum = salesData.reduce((sum, item) => sum + item.totalSales, 0);
      const rewardPointsSum = salesData.reduce((sum, item) => sum + item.rewardPoints, 0);
      setTotalSalesSum(salesSum);
      setTotalRewardPoints(rewardPointsSum);
      console.log('Sales sum:', salesSum);
      console.log('Reward points sum:', rewardPointsSum);
    };

    calculateSums();
  }, [salesData]);

  // Function to handle user login
  const login = async (email, password) => {
    try {
      // Validate email and password
      if (!email || !password) {
        throw new Error('Email and password are required.');
      }
      if (email !== userData.email) {
        throw new Error('Account does not exist.');
      }
      if (password !== userData.password) {
        throw new Error('Password did not match.');
      }

      // Set authentication state and fetch sales data
      setIsAuthenticated(true);
      setUserDataState(userData.user_data);
      const response = await axios.get('https://mocki.io/v1/ec011261-631e-46e3-95d9-ad5e0802c28d');
      setSalesData(response.data);
      setError(''); // Clear error after successful login
      console.log(response.data);
    } catch (error) {
      // Handle login errors
      console.error('Login failed', error);
      setError(error.message);
      setIsAuthenticated(false);
      setUserDataState(null);
    }
  };

  // Function to handle user logout
  const logout = () => {
    setIsAuthenticated(false);
    setUserDataState(null);
    setSalesData([]);
  };

  // Provide the store context to children components
  return (
    <StoreContext.Provider
      value={{
        isAuthenticated,
        userData: userDataState,
        salesData,
        totalSalesSum,
        totalRewardPoints,
        setIsAuthenticated,
        setUserDataState,
        setSalesData,
        login,
        logout,
        error,
        setError,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the store context
export const useStore = () => useContext(StoreContext);