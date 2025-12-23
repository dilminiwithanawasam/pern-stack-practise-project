import { Link,useResolvedPath} from 'react-router-dom';
import {ShoppingCartIcon} from 'lucide-react';
import {useProductStore} from "../store/useProductStore";
    



function NavBar() {
    const {pathname} = useResolvedPath();
    const {products} = useProductStore();
    const isHomePage = pathname === "/";
    return <div className = "bg-base-100/80 backdrop-blur-lg border-b border-base-conten/10 sticky top-0 z-50">
        <div className="navbar max-w-7xl mx-auto">
           <div className = "navbar px-4 min-h-[4rem] justify-between" >
{/* Left side: Logo  */}
<div className = "flex--1 lg:flex-none">
    <Link to ="/" className = "hover:opacity-80 transition-opacity">
    <div className = "flex items-center gap-2">
        
        <span 
        className = "font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            BakeryHUB
        </span>
    </div>
    </Link>
</div>
{/* Right side: Navigation Links */}
<div className = "flex items-center gap-4">
  
    {isHomePage && (
    <div className = "indicator">
        <div className = "p-2 rounded-full  hover:bg-base-200 transition-colors">
          <ShoppingCartIcon  className = "size-5" /> 
          <span className = "badge badge-sm badge-primary indicator-item">
            {products.length}
            </span>
        </div>
    </div>
    )} 
</div>

           </div>
        </div>
        </div>

}
export default NavBar;