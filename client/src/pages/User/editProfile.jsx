import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import { FaEdit } from 'react-icons/fa';

const editProfile = () => {
  return (
    <>
      <Navbar />
      <div className="jost lg:w-10/12 w-full mx-auto h-[82vh] mt-8 flex flex-col justify-center">
        <div className="p-5 xl:w-2/6 w-5/6 border-2 mx-auto h-[70vh] flex flex-col justify-evenly items-center rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <h2 className="text-3xl font-semibold">Profile</h2>
          <div className="grid justify-items-center relative">
            <img
              src="http://localhost:9001/assets/no-post.webp"
              alt="profile"
              className="h-40 border-2 w-40 rounded-xl"
            ></img>
          </div>
          <div className="grid gap-3">
            <h3 className="text-2xl font-semibold ">Name :Raisal Rasheed</h3>
            <h4 className="text-xl font-semibold ">Email :user@12</h4>
            <h4 className="text-xl font-semibold ">Age :21</h4>
            <h4 className="text-xl font-semibold">Password :</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default editProfile;
