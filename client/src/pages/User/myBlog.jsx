import Footer from '../../Components/Footer/footer';
import MyBlogCard from '../../Components/MyBlogCard/myBlogCard';
import Navbar from '../../Components/Navbar/navbar';
import image from '../../assets/images/depositphotos_84219350-stock-photo-word-blog-suspended-by-ropes.jpg';
const MyBlog = () => {
  return (
    <>
      <Navbar />
      <div className="jost mt-5 sm:w-11/12 w-full px-5  sm:mx-auto min-h-[86vh] xl:flex sm:justify-evenly grid sm:justify-items-center   gap-4">
        <div className="bg-gray-200 rounded-3xl xl:w-[400px] sm:w-[550px] w-full  h-[80vh] mt-10">
          <div className="grid justify-center m-y-5 gap-5 mt-10">
            <img src={image} className="w-62 h-60 border-2 rounded-full" />
            <div className="text-xl font-semibold">
              <h2>Name:Raisal Rasheed</h2>
            </div>
            <div className="text-lg font-semibold">
              <h3>address:</h3>
            </div>
            <div className="text-lg font-semibold">
              <h3>contact:</h3>
            </div>

            <h2 className="text-lg font-semibold"> mobile:885757666869</h2>
          </div>
        </div>
        <div className="md:min-w-[800px] sm:w-full bg-gray-200 mt-10 rounded-2xl">
          <div className="w-11/12 h-13 flex mx-auto items-center mt-5 pl-10 rounded-2xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <h3 className="text-xl font-semibold ">My Blogs</h3>
          </div>
          <div className="grid justify-items-center mt-10 px-5">
            <MyBlogCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyBlog;
