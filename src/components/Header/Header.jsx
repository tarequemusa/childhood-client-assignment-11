import {Link} from 'react-router-dom';
import logo from '../../assets/Logo/Childhood.png'

const Header = () => {
    const navItems =
        <>
            <li><Link>Home</Link></li>
            <li><Link>All Toys</Link></li>
            <li><Link>My Toys</Link></li>
            <li><Link>Add A Toy</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
        </>
    return (
        <>
            <div className='bg-slate-200'>
                <div className="navbar container px-12 mx-auto flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                                <div className="navbar">
                                    <div className="flex-none">
                                        <ul className="menu menu-horizontal px-1">
                                            <li tabIndex={0}>
                                                <a>
                                                    My Account
                                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                                </a>
                                                <ul className="p-2 bg-base-100">
                                                    <li><Link to='login'>Login</Link></li>
                                                    <li><Link to='register'>Register</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <Link><img className='w-32' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                                <li tabIndex={0}>
                                    <a>
                                        My Account
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-base-100">
                                        <li><Link to='login'>Login</Link></li>
                                        <li><Link to='register'>Register</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered" />
                        </div>
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