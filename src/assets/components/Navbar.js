import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
  if (isActive && !isMenuOpen) {
    return "text-[#FFF] border-b-animation";
  } else if (isActive) {
    return "text-[#FFF]";
  } else {
    return "text-[#607B96] hover:text-[#C4C4C4]";
  }
};

  

  return (
    <div className="items-center">
      <div className="bg-[#011627] rounded-t-[8px] h-[56px] border-[#1E2D3D] border-[1px] flex justify-between items-center">
        <div className="flex items-center w-full max-lg:justify-between">
          <div className="w-[320px]">

          <Link to="/" className="text-[#607B96] hover:text-[#C4C4C4] text-nowrap px-[17px]">
            martin-nikov
          </Link>
          </div>
          <div className="flex justify-center items-center max-lg:hidden">
            <Link to="/" className={`${getLinkClasses("/")} border-[#1E2D3D] hover:bg-[#253A4F] border-x-[1px] px-[31px] h-[56px] flex items-center justify-center relative`}>
              _hello
            </Link>
            <Link to="/about" className={`${getLinkClasses("/about")} border-[#1E2D3D] hover:bg-[#253A4F] border-x-[1px] px-[31px] h-[56px] flex items-center justify-center relative`}>
              _about-me
            </Link>
            <Link to="/projects" className={`${getLinkClasses("/projects")} border-[#1E2D3D] hover:bg-[#253A4F] border-x-[1px] px-[31px] h-[56px] flex items-center justify-center relative`}>
              _projects
            </Link>
            {/* <Link to="/contact" className={`${getLinkClasses("/contact")} border-[#1E2D3D] hover:bg-[#253A4F] border-x-[1px] px-[31px] h-[56px] flex items-center justify-center relative`}>
              _contact-me
            </Link> */}
          </div>

          <div className="lg:hidden text-[#607B96] text-2xl" onClick={toggleMenu}>
            <i className={isMenuOpen ? "ri-close-large-line px-[17px]" : "ri-menu-line px-[17px]"}></i>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#011627] border-[#1E2D3D] border-x-[1px] h-[592px]">
          <Link to="/" className={`${getLinkClasses("/")} block py-2 px-4 border-b-[1px] border-[#1E2D3D]`} onClick={toggleMenu}>
            _hello
          </Link>
          <Link to="/about" className={`${getLinkClasses("/about")} block py-2 px-4 border-b-[1px] border-[#1E2D3D]`} onClick={toggleMenu}>
            _about-me
          </Link>
          <Link to="/projects" className={`${getLinkClasses("/projects")} block py-2 px-4 border-b-[1px] border-[#1E2D3D]`} onClick={toggleMenu}>
            _projects
          </Link>
          {/* <Link to="/contact" className={`${getLinkClasses("/contact")} block py-2 px-4 border-b-[1px] border-[#1E2D3D]`} onClick={toggleMenu}>
            _contact-me
          </Link> */}
        </div>
      )}

      <style jsx>{`
        .border-b-animation::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 3px;
          background-color: #FEA55F;
          transform: scaleX(0);
          transform-origin: left;
          animation: border-bottom-animation 0.3s ease-in-out forwards;
        }

        @keyframes border-bottom-animation {
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
