import React, { useState } from 'react';
import { useStore } from '../../store/StoreContext';
import { useNavigate } from 'react-router-dom';

function SalesTable() {
  const { salesData } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('none');
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 10;
  const navigate = useNavigate();

  // Pagination logic
  const paginate = (data, currentPage, itemsPerPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    return { currentItems, totalPages };
  };

  // Filter data based on search query
  const filteredData = salesData.filter(item =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort data based on sort option and order
  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === 'none') return 0;
    let comparison = 0;
    if (sortOption === 'brand') {
      comparison = a.brand.localeCompare(b.brand);
    } else if (sortOption === 'purchaseDate') {
      comparison = new Date(a.purchaseDate) - new Date(b.purchaseDate);
    } else if (sortOption === 'totalSales') {
      comparison = b.totalSales - a.totalSales;
    } else if (sortOption === 'rewardPoints') {
      comparison = b.rewardPoints - a.rewardPoints;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  // Apply pagination to sorted data
  const { currentItems, totalPages } = paginate(sortedData, currentPage, itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle item click
  const handleItemClick = (id) => {
    navigate(`/${id}`);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle sort option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1); // Reset to first page on sort
  };

  // Handle sort order change
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1); // Reset to first page on sort order change
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center my-4 flex-col p-6 rounded-lg shadow-lg w-[80%] border-2 border-violet-500 bg-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Sales Table</h2>
      
      {/* Search and Sort Options */}
      <div className="flex 2xl:flex-row flex-col justify-between gap-2 mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by brand"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 rounded border w-[80%] border-gray-300 bg-white text-gray-900"
        />
        
        {/* Sort Options */}
        <div className='flex flex-row gap-4'>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 rounded border border-gray-300 bg-white text-gray-900"
          >
            <option value="none">None</option>
            <option value="brand">Brand</option>
            <option value="purchaseDate">Purchase Date</option>
            <option value="totalSales">Total Sales</option>
            <option value="rewardPoints">Reward Points</option>
          </select>
          
          {/* Sort Order */}
          <div className="flex flex-col items-center justify-center gap-1">
            <div>
              <label className="text-gray-900 mr-2">ASC</label>
              <input
                type="radio"
                value="asc"
                checked={sortOrder === 'asc'}
                onChange={handleSortOrderChange}
                className="text-gray-900"
              />
            </div>
            <div>
              <label className="text-gray-900 mr-2">DES</label>
              <input
                type="radio"
                value="desc"
                checked={sortOrder === 'desc'}
                onChange={handleSortOrderChange}
                className="text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto overflow-hidden rounded-lg">
        <table className="min-w-full text-gray-900 rounded-lg bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Brand</th>
              <th className="py-2 px-4 border-b border-gray-300">Purchase Date</th>
              <th className="py-2 px-4 border-b border-gray-300">Total Sales</th>
              <th className="py-2 px-4 border-b border-gray-300">Reward Points</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} onClick={() => handleItemClick(item.id)} className="cursor-pointer hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">{item.brand}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.purchaseDate}</td>
                <td className="py-2 px-4 border-b border-gray-300">₹ {item.totalSales}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.rewardPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={handlePreviousPage} 
          className={`mx-1 px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-gray-900'}`}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-violet-500 text-white' : 'bg-gray-300 text-gray-900'}`}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={handleNextPage} 
          className={`mx-1 px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-gray-300 text-gray-900'}`}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default SalesTable;