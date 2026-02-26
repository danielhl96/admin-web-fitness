import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Header({
  setIsAdminView,
}: {
  setIsAdminView: (value: boolean) => void;
}) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const navigate = useNavigate();
  async function logout() {
    console.log('Logging out...');
    try {
      await axios.post(
        'http://localhost:3000/admins/logout',
        {},
        { withCredentials: true }
      );
      console.log('Logout successful');
      setIsAdminView(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  return (
    <div className="navbar  bg-black shadow-sm">
      <div className={'navbar-start'}>
        <div className={`dropdown ${isHeaderVisible ? 'dropdown-open' : ''}`}>
          <button
            className="btn btn-ghost text-white"
            onClick={() => setIsHeaderVisible(!isHeaderVisible)}
            aria-label="Toggle menu"
          >
            {isHeaderVisible ? (
              // X-Icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger-Icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content hidden ${isHeaderVisible ? '' : ''} bg-black rounded-box z-1 mt-3 w-52 p-2 shadow`}
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a
                onClick={() => {
                  setIsAdminView(true);
                  setIsHeaderVisible(false);
                }}
              >
                Create Admin
              </a>
            </li>

            <li>
              <a onClick={() => logout()}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Administration</a>
      </div>
      <div className="navbar-end">
        <button onClick={() => logout()} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
