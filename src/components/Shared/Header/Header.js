import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const {user,logOut}=useContext(AuthContext)
    const navigate=useNavigate()
    console.log(user)

    const handleLogOut=()=>{
      logOut()
      .then(()=> navigate("/login"))
      .catch(er=>console.error(er))
    }

    return (
      <nav className='w-full fixed z-10 shadow-lg bg-white ' >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              <Link to="">
                <div className='flex items-center'>
                  <img src="{logo}" className="w-12 rounded-full" alt="" />
                  <h2 className='text-2xl ml-2 font-bold text-red-800 hover:text-rose-400'>Foodies !</h2>
                </div>
              </Link>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-900"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1  justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                <li className="text-red-400 font-semibold text-xl   hover:text-rose-600 lg:hover:underline">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-red-400 font-semibold text-xl   hover:text-rose-600 lg:hover:underline">
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-red-400 font-semibold text-xl   hover:text-rose-600 lg:hover:underline">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-red-400 font-semibold text-xl   hover:text-rose-600 lg:hover:underline">
                  <Link to="courses">Courses</Link>
                </li>
                {user?.uid ?
  
                  <>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link onClick={handleLogOut} >Log Out</Link>
                    </li>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link  >My Reviews</Link>
                    </li>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link  >Add Services</Link>
                    </li>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link >
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName ? user?.displayName : "User"}>
                          <button ><img className='rounded-full w-10' src={user?.photoURL} alt="" /></button>
                        </div>
                      </Link>
                    </li>
                  </>
                  :
                  <>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link to="/login">Log In</Link>
                    </li>
                    <li className="text-red-400 font-semibold text-xl hover:text-rose-400">
                      <Link to="/register">Sign Up</Link>
                    </li>
                  </>
  
                }
               
               
              </ul>
  
  
            </div>
          </div>
  
        </div>
      </nav>
    );
};

export default Header;