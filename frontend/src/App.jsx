import Navbar from "./components/Navbar"; 
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
function App(){
  return (
   <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme="pastel">
    <Navbar />{/* we have put the navbar component here so that it appears on all pages */}
    <Routes>
      <Route path = "/" element = { <HomePage /> } />
      <Route path = "/product" element = { <ProductPage /> } />
      <Route path = "/product/:id" element = { <ProductPage /> } />
    </Routes>
    <Toaster /> {/* Toaster component to show toast notifications */}
   </div>
  );
}
export default App;