import React from "react";

const PhoneLayout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <div className="phone">
        {children}

        <nav className="bottom-nav">
          {/* Home */}
          <button className="nav-btn">
            <svg
              className="nav-icon-svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z"
                fill="none"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Perfil (centro) */}
          <button className="nav-btn nav-btn-center">
            <div className="nav-circle">
              <svg
                className="nav-icon-svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="3.2" fill="#000" />
                <path
                  d="M5 19.5c0-3.1 3.1-4.9 7-4.9s7 1.8 7 4.9"
                  fill="#000"
                />
              </svg>
            </div>
          </button>

          {/* Paquete */}
          <button className="nav-btn">
            <svg
              className="nav-icon-svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4.5 7.5 12 4l7.5 3.5L12 11z"
                fill="none"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 7.5V16L12 20v-9"
                fill="none"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 7.5V16L12 20"
                fill="none"
                stroke="#000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default PhoneLayout;
