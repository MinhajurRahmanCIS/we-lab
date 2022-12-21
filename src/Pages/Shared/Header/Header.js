import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import img from '../../../assets/userIcon.png'
import noImg from '../../../assets/userIconNotActive.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    const menuItems = <>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/aboutus'>About</Link></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/aboutus'>About</Link></li>
                </>

        }


    </>

    const account = <>
        {
            user?.email ?
                <>
                    <button disabled className='text-left ml-4'>{user.email.slice(0, -10)}</button>
                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </>

        }
    </>


    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className=" normal-case text-xl w-20">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full tooltip" data-tip="hello">
                            {
                                user?.email ?
                                    <img src={img} alt="" />
                                    :
                                    <img src={noImg} alt="" />

                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {account}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;