import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { GiSwipeCard } from "react-icons/gi";
import { MdOutlineRateReview } from "react-icons/md";
// import { PiCalendarCheckFill } from "react-icons/pi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaStreetView } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { FaUtensils } from "react-icons/fa6";
import { LuGitPullRequestClosed } from "react-icons/lu";
import { FaListUl } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
// import useCart from "../hooks/useCart";
import { FaUsers } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Dashboard = () => {
    const {user} = useAuth()

    // const [cart] = useCart()

    //TODO : get Admin value from the database.
    const isAdmin = false


    return (
        <div className="flex">

            {/*Dashboard  Side Bar */}

            {/* <div className="w-[300px] min-h-screen bg-orange-400 uppercase font-semibold"> */}
            <div className="h-[100vh] p-3 space-y-2 w-[300px] dark:bg-gray-900 dark:text-gray-100  shadow-lg pt-8">
                <ul className="menu p-5">
                    <div className="flex items-center p-2 space-x-4">
                        <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                            <span className="flex items-center space-x-1">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                            </span>
                        </div>
                    </div>

                    {
                        isAdmin ? <>
                            <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink  to='/dashboard/adminHome' className="flex items-center gap-2"><FaHome></FaHome>Admin Home</NavLink></li>

                            <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/addItems' className="flex items-center gap-2" ><FaUtensils className="text-lg"></FaUtensils>add Items</NavLink></li>

                            <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/manageItem' className="flex items-center gap-2"><FaListUl className="text-lg"></FaListUl>Manage Items</NavLink></li>

                            <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/manageBookings' className="flex items-center gap-2" ><FaBook className="text-lg"></FaBook>Manage Bookings</NavLink></li>

                            <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/allUsers' className="flex items-center gap-2"><FaUsers className="text-lg"></FaUsers>All Users</NavLink></li>

                        </>
                            :

                            <>
                                <li className="hover:bg-slate-400 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/viewBioData' className='flex items-center gap-2'><FaStreetView className="text-xl"></FaStreetView>View Biodata</NavLink></li>   

                                <li className="hover:bg-slate-500 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/editBioData' className='flex items-center gap-2'><MdModeEdit className="text-xl"></MdModeEdit>Edit Biodata</NavLink></li>

                                <li className="hover:bg-slate-500 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/contactRequest' className='flex items-center gap-2'><LuGitPullRequestClosed className="text-lg"></LuGitPullRequestClosed>My Contact Request</NavLink></li>  {/*  ({cart.length})*/}

                                <li className="hover:bg-slate-500 p-2 rounded my-3 font-semibold"><NavLink to='/dashboard/favourites' className='flex items-center gap-2'><GiSelfLove className="text-lg"></GiSelfLove>Favourite Biodata</NavLink></li>
                                
                            </>
                    }


                    {/*Shared NavLiks  */}
                    {/*Divider*/}
                    <div className="py-2"><hr /></div>

                    <li className="hover:bg-slate-500 p-2 rounded my-3 font-semibold"><NavLink to='/' className='flex items-center gap-2'><FaHome className="text-lg"></FaHome>Home</NavLink></li>
                    <li className="hover:bg-slate-500 p-2 rounded my-3 font-semibold"><NavLink className='flex items-center gap-2' to='/dashboard/logout'><RiLogoutCircleRFill className="text-xl"></RiLogoutCircleRFill><span>Logout</span></NavLink></li>



                </ul>
            </div>






            {/* Dashboard Content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>


    );
};

export default Dashboard;








