import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Drawer = ({links}) => {

    const [toogle,setToggle]=useState(false)
  const handleToggle=()=>{
      setToggle(!toogle)
  }
    return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label onClick={handleToggle} htmlFor="my-drawer" className="text-3xl">{
            toogle?<RxCross2 />:<MdMenuOpen />
            } 
          </label>
        </div>
        <div className="drawer-side mt-[67px]">
          <label onClick={()=>setToggle(false)} htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-[70%] md:w-[40%] p-4">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    );
};

export default Drawer;