import Blog from '../../Components/BlogCard/blog';
import Navbar from '../../Components/Navbar/navbar';
import Pagination from '../../Components/Pagination/pagination';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import Footer from '../../Components/Footer/footer';

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  console.log('len', blog.length);
  useEffect(() => {
    getBlog();
  }, [skip]);
  const getBlog = async () => {
    const blog = await axios.get(`/post/all/${skip}`);
    setBlog(blog.data);
  };
  console.log(skip);
  return (
    <>
      <Navbar />

      <div className="flex flex-col max-w-[500px] mx-auto text-center mt-10 jost gap-2 mb-5  ">
        <div className="w-full flex gap-2 justify-center">
          <input
            type="text "
            placeholder="Enter profile name "
            className="border-2 pl-5 border-purple-700 rounded-4xl sm:w-80 h-10"
          ></input>
          <button className="hover:bg-green-600 bg-purple-500 h-10 w-20 sm:w-28 rounded-2xl border-purple-700 text-white">
            Search
          </button>
        </div>
        <h2 className="text-3xl font-semibold">Blog App...</h2>
        <p className="text-lg ">
          245 inspirational designs, illustrations, and graphic elements from
          the world’s best designers. Want more inspiration?
        </p>
      </div>
      <div className="w-11/12 min-h-[80vh] mx-auto mb-4 grid xl:grid-cols-3 lg:grid-cols-2 justify-items-center gap-y-8">
        {blog.map(items => {
          return (
            <Blog
              title={items.title}
              img={items.image}
              content={items.content}
            />
          );
        })}
      </div>
      <div className="flex justify-center mb-2">
        <Pagination
          onAddBtn={() => {
            if (blog.length > 3) {
              setSkip(skip + 4);
              setPage(page + 1);
            }
          }}
          onSubBtn={() => {
            if (page != 1) {
              setSkip(skip - 4);
              setPage(page - 1);
            }
          }}
          page={page}
        />
      </div>
      <Footer />
    </>
  );
};
export default Home;
