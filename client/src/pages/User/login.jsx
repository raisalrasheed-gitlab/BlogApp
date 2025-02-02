import CustomInput from '../../Components/Input/input';
import { Button } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import MainNav from '../../Components/MainNavbar/main-nav';

const UserLogin = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const onChange = (e, value) => {
    setCheck(false);
    setUser({ ...user, [value]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const dbResponse = await axios.post('user/login', user);
      if (dbResponse && dbResponse.data && dbResponse.data.token) {
        localStorage.setItem('token', dbResponse.data.token);
        localStorage.setItem('id', dbResponse.data.id);
        navigate('/user/home');
      }
    } catch (error) {
      setCheck(true);
    }
  };

  return (
    <>
      <MainNav />
      <div className="user-login-main">
        <div className="bg-[url('assets/images/log.jpg')] h-[calc(100vh_-_60px)] bg-no-repeat bg-cover bg-center  w-full flex justify-center items-center">
          <div className="bg-transparent w-10/12  border-2  border-white  h-fit p-10 max-w-md backdrop-blur-[10px] rounded-2xl ">
            <form className="flex flex-col gap-4 text-white">
              <div className="text-center jost text-2xl font-bold text-orange-400 ">
                User Login
              </div>
              <CustomInput
                label="Email"
                classname="jost text-black"
                onChange={e => onChange(e, 'email')}
              ></CustomInput>
              <CustomInput
                label="Password"
                type="password"
                onChange={e => {
                  onChange(e, 'password');
                }}
              ></CustomInput>
              <div>
                <NavLink to="" className="">
                  Forgot Password?
                </NavLink>
              </div>
              {check ? (
                <p className=" text-center">
                  Email or Password is Incorrect !!
                </p>
              ) : (
                ''
              )}
              <Button
                className="h-12 tracking-widest"
                color="blue"
                onClick={onSubmit}
              >
                Login
              </Button>
              <div className="flex justify-center items-center gap-2">
                <div className="border-t-2 border-gray-500 w-40"></div>
                <div>OR</div>
                <div className="border-t-2 border-gray-500 w-40"></div>
              </div>
              <Button
                className=" bg-green-500  text-black tracking-widest"
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserLogin;
