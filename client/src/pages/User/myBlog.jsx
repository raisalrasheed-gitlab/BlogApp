import Footer from '../../Components/Footer/footer';
import MyBlogCard from '../../Components/MyBlogCard/myBlogCard';
import Navbar from '../../Components/Navbar/navbar';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';
import { Userpost } from '../../Context/post-Context';
const MyBlog = () => {
  const id = localStorage.getItem('id');
  const [user, setUser] = useState({});
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
    getBlog();
  }, []);

  const getUser = async () => {
    const user = await axios.get(`/user/${id}`);
    setUser(user.data);
  };
  const getBlog = async () => {
    const blog = await axios.get(`/post/author/${id}`);
    setBlog(blog.data);
  };
  const onDelete = async id => {
    const dbResponse = await axios.delete(`/post/${id}`);
    getBlog();
  };

  return (
    <>
      <Navbar />
      <div className="jost sm:w-11/12 w-full px-5  sm:mx-auto min-h-[86vh] xl:flex sm:justify-evenly grid sm:justify-items-center gap-4">
        <div className="bg-gray-200 rounded-3xl xl:w-[400px] sm:w-[550px] w-full  h-[80vh] mt-10">
          <div className="grid justify-center m-y-5 gap-5 mt-10">
            <img src={user.image} className="w-62 h-60 border-2 rounded-full" />
            <div className="text-xl font-semibold">
              <h2>Name: {user.name}</h2>
            </div>
            <div className="text-lg font-semibold">
              <h3>Age: {user.age}</h3>
            </div>
            <div className="text-lg font-semibold">
              <h3>contact: {user.phonenumber}</h3>
            </div>

            <h2 className="text-lg font-semibold"> Email: {user.email}</h2>
          </div>
        </div>
        <div className="md:min-w-[800px] sm:w-full bg-gray-200 mt-10 rounded-2xl">
          <div className="w-11/12 h-13 flex justify-between px-10 mx-auto items-center mt-5  rounded-2xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <h3 className="text-xl font-semibold ">My Blogs</h3>
            <Button
              color="green"
              className="text-black max-h-10"
              onClick={() => {
                navigate('/user/newblog');
              }}
            >
              Create Blog
            </Button>
          </div>
          <div className="grid justify-items-center mt-10 px-5">
            {blog
              ? blog.map(post => {
                  return (
                    <Userpost.Provider value={{ post: post }}>
                      <MyBlogCard onDelete={id => onDelete(id)} />
                    </Userpost.Provider>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyBlog;
