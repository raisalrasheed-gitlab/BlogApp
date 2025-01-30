import { CgProfile } from 'react-icons/cg';
import NavButton from '../NavButton/navbutton';
import { FaBlog } from 'react-icons/fa6';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white h-20  flex  justify-between items-center lg:px-16 px-8  md:border-b-2 border-gray-300 z-1 top-0 sticky">
        <div className="flex gap-10 items-center">
          <div className="flex gap-2">
            <FaBlog className="text-4xl text-fuchsia-700" />
            <h1 className="text-3xl font-semibold">BlogApp</h1>
          </div>
          <div
            className={`absolute top-20  left-0 md:py-0 py-10 px-16 md:px-0 md:bg-none w-full md:static bg-white ${
              check ? 'left-[-100%]' : 'left-0'
            }`}
          >
            <ul className=" flex flex-col md:flex-row md:gap-12 gap-16  text-base font-semibold leading-4 text-gray-700  cursor-pointer ">
              <li className="flex items-center hover:text-gray-900 border-r-2 pr-2 ">
                <NavLink to="/user/home">Home</NavLink>
              </li>
              <li className="flex gap-2 items-center hover:text-gray-900 border-r-2 pr-2">
                <NavLink to="/user/myblog">My Blogs</NavLink>
              </li>
              <li className="flex gap-2 items-center hover:text-gray-900 border-r-2 pr-2">
                About
              </li>
              <li className="flex items-center hover:text-gray-900 border-r-2 pr-2">
                Help Center
              </li>
              <li className="sm:hidden">
                <h2>Profile</h2>
              </li>
              <li className="sm:hidden">
                <button className="border-2 p-2"> Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 items-center  ">
          <a href="" className="hidden sm:block">
            <CgProfile className="text-4xl" />
          </a>
          <Button
            className="bg-red-500  hidden sm:block normal-case  "
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Logout
          </Button>
          <span onClick={() => setCheck(!check)}>
            <NavButton />
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
