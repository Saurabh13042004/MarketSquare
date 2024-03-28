import React from "react";
import { FaUser, FaCog, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {logout} from '../slices/authSlice';

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try{
      await logoutApiCall();
      dispatch(logout());
      navigate('/login');
    }
    catch(err){
      console.error(err);
    }
  }


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          ShopLoom
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <Link
            to="/cart"
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <FaShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="badge badge-sm indicator-item">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          {userInfo ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    <FaUser />
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <FaCog />
                    Settings
                  </Link>
                </li>
                <li>
                  <Link  onClick={
                    logoutHandler
                  
                  }>
                    <FaSignOutAlt />
                    Logout
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <li>
              <Link to="/login">
                <FaUser />
                Sign In
              </Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
