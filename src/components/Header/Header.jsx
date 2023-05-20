import {Link} from 'react-router-dom';
import logo from '../../assets/Logo/Childhood.png'

const Header = () => {
    const navItems =
        <>
            <li className='text-white'><Link to="/">Home</Link></li>
            <li className='text-white'><Link>All Toys</Link></li>
            <li className='text-white'><Link>My Toys</Link></li>
            <li className='text-white'><Link>Add A Toy</Link></li>
            <li className='text-white'><Link to="/blogs">Blogs</Link></li>
        </>
    return (
        <>
            <div className='bg-pink-700'>
                <div className="navbar container px-12 mx-auto flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-500 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <Link><img className='w-32 p-2 bg-white rounded-xl' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;