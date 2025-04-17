import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import Logo from '../../assets/Logo.svg'
import Figma_Icon from '../../assets/figma-icon.svg'
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
      if (window.innerWidth >= 990) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close all dropdowns when menu is toggled
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownToggle = (dropdown) => {
    if (isMobile) {
      // On mobile, toggle the clicked dropdown
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    } else {
      // On desktop, show on hover
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownClose = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const menuItems = [
    {
      label: 'Templates',
      dropdown: [
        { label: 'Website Templates', link: 'website-templates' },
        { label: 'Web Application', link: 'web-application' },
        { label: 'Mobile App', link: 'mobile-app' },
      ],
    },
    { label: 'Components', link: 'components'},
    { label: 'Pricing', link: 'pricing' },
    { label: 'FAQs', link: 'faqs' },
  ];

  return (
    <header className="header">
      <div className="header-container">

        <div className='flex gap-16'>
        {/* Logo */}
        <div className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        > <a href="/"> <img src={Logo} alt="Droitui" /> </a> </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${activeDropdown === item.label ? 'active' : ''}`}
                onMouseEnter={!isMobile ? () => handleDropdownToggle(item.label) : undefined}
                onMouseLeave={!isMobile ? handleDropdownClose : undefined}
              >
                {item.dropdown ? (
                  <>
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      >
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='dropdown-arrow'>
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.ul 
                          className="dropdown-menu"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          role="menu"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex} className="dropdown-item" role="none">
                              <a 
                                href={subItem.link} 
                                className="dropdown-link"
                                role="menuitem"
                                tabIndex={activeDropdown === item.label ? 0 : -1}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a href={item.link} className="nav-link">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        </div>

        {/* Buttons */}
        <div className="header-buttons">
            <a href="https://www.figma.com/design/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma" className="btn btn-outline"> <img src={Figma_Icon} alt="Droitui" /> Preview </a>
            <a href="https://droitui.lemonsqueezy.com/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="btn btn-primary"> Buy Now <IoIosArrowForward className='font-bold text-lg' /> </a>
        </div>
      </div> 
    </header>
  );
};

export default Header;