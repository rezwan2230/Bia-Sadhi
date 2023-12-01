import { Link, NavLink } from "react-router-dom";
import img from '../../../assets/logo.png'
import useAuth from "../../../hooks/useAuth";
import '../NavBar/NavBar.css'
const NavBar = () => {


    const { user, logOut} = useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => { console.log(error.message); })
    }


    return (
        <div className="max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black md:w-full">
            <header className="text-gray-600 body-font">
                <div className="lg:container md:w-full mx-auto flex p-5 flex-col md:flex-row md-px-0 items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl"><img className="lg:h-10 md:h-7 text-white" src={img} alt="" /></span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap lg:gap-5 md:gap-2  items-center text-base justify-center ">
                        <NavLink to='/' className='px-2 rounded md:text-lg text-xl text-white hover:bg-slate-700'>Home</NavLink>
                        <NavLink to='/bioData' className=' px-2 md:text-lg rounded text-xl text-white hover:bg-slate-700'>Bio Data</NavLink>
                        <NavLink to='aboutUs' className=' px-2  md:text-lg rounded text-xl text-white hover:bg-slate-700'>About Us</NavLink>
                        <NavLink to='contactUs' className=' px-2 md:text-lg rounded text-xl text-white hover:bg-slate-700'>Contact Us</NavLink>
                        <NavLink to='contactUs' className=' px-2 md:text-lg rounded text-xl text-white hover:bg-slate-700'>Dashboard</NavLink>

                    </nav>
                    <div className="flex items-center">
                        <div className="navbar-end flex text-white">
                            {
                                user?.email ? <>
                                    <div className="flex justify-center items-center gap-4 md:gap-0"><div className="lg:font-semibold md:font-normal lg:text-lg md:mr-1 lg:mr-3 hidden md:block">{user?.displayName}</div> <div><img className="w-10 h-10 md:h-9 md:w-9 lg:w-10 lg:h-10 rounded-full  md:mr-1 lg:mr-5 hidden md:block"src={user.photoURL} alt="" /></div></div>
                                    <button onClick={handleLogout} className="button">Logout </button>     {/* onClick={handleLogout} */}
                                </>
                                    :
                                    <><Link className=" button" to='/login'>Login</Link></>
                            }
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;

