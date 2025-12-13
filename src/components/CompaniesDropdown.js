import React, { useState, useEffect, useRef } from 'react';

const CompaniesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const companies = [
    {
      name: 'Exituity',
      url: 'https://exituity.com',
      description: 'AI-Powered Business Navigator'
    },
    {
      name: 'Singh Asset Management',
      url: 'https://singh-asset-management.vercel.app/',
      description: 'Quantitative Asset Management'
    },
    {
      name: 'Interstellar Ventures',
      url: 'https://vercel.com/shubhamcodezs-projects/interstellar-ventures',
      description: 'Early-Stage Investment Firm'
    },
    {
      name: 'Qapture',
      url: 'https://qapture-frontend.vercel.app/',
      description: 'Frontend Platform'
    }
  ];

  return (
    <li className="companies-dropdown" ref={dropdownRef}>
      <button
        className="companies-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Companies
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div
          className="companies-dropdown-menu"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="dropdown-content">
            <div className="dropdown-column">
              <h3 className="dropdown-heading">Companies</h3>
              <ul className="dropdown-list">
                {companies.map((company, index) => (
                  <li key={index}>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-link"
                    >
                      <span className="dropdown-link-name">{company.name}</span>
                      <span className="dropdown-link-desc">{company.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default CompaniesDropdown;

