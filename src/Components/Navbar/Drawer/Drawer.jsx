import { MdMenuOpen } from "react-icons/md";

const Drawer = ({links}) => {
    return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="text-3xl"><MdMenuOpen /></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-[70%] p-4">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
    );
};

export default Drawer;