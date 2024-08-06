import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/StoreContext';
import { formatDistanceToNow } from 'date-fns';

function ItemDescription() {
  const { id } = useParams();
  const { salesData } = useStore();
  const navigate = useNavigate();

  // Find the item in the sales data based on the ID
  const item = salesData.find((item) => item.id === parseInt(id));
  if (!item) {
    return <div className="text-black">Item not found</div>;
  }

  // Define the commission rate and calculate the commission
  const commissionRate = 0.1; 
  const commission = item.rewardPoints * commissionRate;

  // Calculate the relative date from the purchase date
  const relativeDate = formatDistanceToNow(new Date(item.purchaseDate), { addSuffix: true });

  return (
    <div className='flex flex-col w-full items-center justify-center'>
      {/* Back button to navigate to the previous page */}
      <div className="w-[100%] p-5 border-b-2 shadow-lg border-purple-500">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 w-30 h-10 border-2 bg-violet-500 text-white rounded-xl"
        >
          Back
        </button>
      </div>

      {/* Main content area */}
      <div className="p-6 flex flex-col lg:flex-row rounded-xl bg-white gap-8 mt-12 w-[80%] ">
        {/* Image section */}
        <div>
          <img src="https://www.shutterstock.com/image-illustration/rectangle-carton-box-3d-illustration-600nw-2253758647.jpg" alt="Product" />
        </div>

        {/* Reward information section */}
        <div className='border-2 border-gray-300 h-auto p-8'>
          <h2 className="text-3xl font-bold mb-8 text-violet-500">Reward Information</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-black text-xl font-medium">Brand</td>
                <td className="border px-4 py-2 text-black text-xl">{item.brand} Product</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-black text-xl font-medium">Purchase Date</td>
                <td className="border px-4 py-2 text-black text-xl">{relativeDate} <br /> On the date {item.purchaseDate}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-black text-xl font-medium">Amount</td>
                <td className="border px-4 py-2 text-black text-xl">₹{item.totalSales}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-black text-xl font-medium">Reward Points earned</td>
                <td className="border px-4 py-2 text-black text-xl">{item.rewardPoints}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-black text-xl font-medium">Commission</td>
                <td className="border px-4 py-2 text-black text-xl">₹{commission.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-black text-sm italic" colSpan="2">*Assuming 1 point = Rs 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ItemDescription;