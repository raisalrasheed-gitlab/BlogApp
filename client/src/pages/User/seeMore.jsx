import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';
import ProfileCard from '../../Components/ProfileCard/profilecard';
import MyBlogCard from '../../Components/SeemoreBlogCard/seeBlogCard';
import Footer from '../../Components/Footer/footer';
import axios from '../../utils/axios';
import { useEffect, useState } from 'react';
import { Singlepost } from '../../Context/post-Context';

const seeMore = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const post = await axios.get(`/post/${id}`);
    setPost(post.data[0]);
  };
  console.log(post);

  return (
    <>
      <Navbar />
      <div className=" w-11/12 mx-auto min-h-[85vh] mt-5 md:flex grid justify-items-center justify-evenly">
        <Singlepost.Provider value={{ post: post }}>
          <ProfileCard />
          <MyBlogCard modify={false} />
        </Singlepost.Provider>
      </div>
      <Footer />
    </>
  );
};
export default seeMore;
