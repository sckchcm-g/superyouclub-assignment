import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import ItemDescription from './pages/ItemDescription';
import { useStore } from './store/StoreContext';
import './App.css';

function App() {
  // Destructure isAuthenticated from the store context
  const { isAuthenticated } = useStore();

  return (
    <div className='w-full h-full flex justify-center '>
      <BrowserRouter>
        <Routes>
          {/* Route for the root path */}
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <HomePage />} />
          
          {/* Route for item description based on ID */}
          <Route path="/:id" element={isAuthenticated ? <ItemDescription /> : <NotFound />} />
          
          {/* Catch-all route for undefined paths */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;