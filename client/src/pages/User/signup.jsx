import CustomInput from '../../components/Input/custom-input';
import { Button } from '@material-tailwind/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import MainNav from '../../Components/MainNavbar/main-nav';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    image: '',
  });
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const onChange = (e, value) => {
    setCheck(false);
    setUser({ ...user, [value]: e.target.value });
  };
  const onImage = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const dbResponse = await axios.post('/image/upload', formData);
    setUser({ ...user, image: dbResponse.data.url });
  };
  console.log(user);
  const onSubmit = async () => {
    try {
      const dbResponse = await axios.post('user/signup', user);
      console.log(dbResponse);
      navigate('/');
    } catch (error) {
      setCheck(true);
    }
  };
  return (
    <>
      <div className="user-login-main ">
        <div className="bg-[url('assets/images/log.jpg')] min-h-[100vh] bg-no-repeat bg-cover bg-center  w-full flex justify-center items-center">
          <div className="bg-transparent w-10/12  border-2  border-white  h-fit p-10 max-w-md backdrop-blur-[10px] rounded-2xl ">
            <form className="flex flex-col gap-4 text-white">
              <div className="text-center jost text-2xl font-bold text-orange-400 ">
                User Signup
              </div>
              <CustomInput
                label="Name *"
                classname="jost text-black"
                onChange={e => onChange(e, 'name')}
              ></CustomInput>
              <CustomInput
                label="Age"
                classname="jost text-black"
                onChange={e => onChange(e, 'age')}
              ></CustomInput>
              <CustomInput
                label="Phone Number"
                classname="jost text-black"
                onChange={e => onChange(e, 'phoneNumber')}
              ></CustomInput>
              <CustomInput
                label="Email *"
                classname="jost text-black"
                onChange={e => onChange(e, 'email')}
              ></CustomInput>
              <CustomInput
                label="Password *"
                type="password"
                onChange={e => {
                  onChange(e, 'password');
                }}
              ></CustomInput>
              <CustomInput
                label="Image"
                type="file"
                onChange={e => onImage(e)}
              />
              {check ? (
                <p className=" text-center">
                  Please Check Email or Password !!
                </p>
              ) : (
                ''
              )}

              <Button
                className=" bg-green-500  text-black tracking-widest"
                onClick={onSubmit}
              >
                Sign Up
              </Button>
              <div className="flex justify-center items-center gap-2">
                <div className="border-t-2 border-gray-500 w-40"></div>
                <div>OR</div>
                <div className="border-t-2 border-gray-500 w-40"></div>
              </div>
              <Button
                className="h-12 tracking-widest"
                color="blue"
                onClick={() => {
                  navigate('/');
                }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
