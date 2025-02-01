import Navbar from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import { Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const AddNewBlog = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    image: '',
    title: '',
    content: '',
    isPublic: true,
  });
  const id = localStorage.getItem('id');
  const onChange = (e, key) => {
    if ([key] == 'isPublic') {
      setBlog({ ...blog, [key]: e.target.checked });
    } else setBlog({ ...blog, [key]: e.target.value });
  };
  const onImage = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const dbResponse = await axios.post('/image/upload', formData);
    setBlog({ ...blog, image: dbResponse.data.url });
  };
  const onSubmit = async () => {
    const dbResponse = await axios.post(`/post/${id}`, blog);
    navigate('/user/myblog');
  };
  console.log(blog);
  return (
    <>
      <Navbar />
      <div className=" jost flex items-center justify-center min-h-[90vh]">
        <div className="xl:flex grid mb-5 gap-10 w-10/12 border-t-2 min-h-[70vh] px-10 py-10 rounded-2xl bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="sm:text-2xl font-bold text-center sm:border-r-3  xl:pr-4 border-gray-600 flex flex-col justify-center">
            <h2 className="text:xl underline"> Add New Blog Section</h2>
          </div>
          <div className=" grid gap-10 items-center">
            <div className="flex gap-5 md:flex-row flex-col">
              <div className="pr-5 text-base sm:text-xl font-medium ">
                Image :
              </div>
              <div class="md:w-full max-w-sm w-50 xl:min-w-[200px] flex flex-col gap-5">
                <input
                  type="file"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="here..."
                  onChange={e => {
                    onImage(e);
                  }}
                />
                <div>
                  <img src={blog.image} />
                </div>
              </div>
            </div>
            <div className="flex gap-5 md:flex-row flex-col">
              <div className="tracking-wider pr-7 text-base  sm:text-xl font-medium">
                Title :
              </div>
              <div class="md:w-full max-w-sm min-w-[200px]">
                <input
                  onChange={e => {
                    onChange(e, 'title');
                  }}
                  type="text"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Title here..."
                  maxLength="35"
                />
              </div>
            </div>
            <div className="flex gap-5  md:flex-row flex-col">
              <div className="sm:text-xl text-base font-medium ">Category:</div>
              <div className="flex gap-2 items-center">
                <h2 className="text-red-500 font-semibold">Private</h2>
                <div class="relative inline-block w-11 h-5">
                  <input
                    onChange={e => {
                      onChange(e, 'isPublic');
                    }}
                    defaultChecked="true"
                    id="switch-component"
                    type="checkbox"
                    class="peer appearance-none w-11 h-5 bg-green-700 rounded-full checked:bg-red-500 cursor-pointer transition-colors duration-300"
                  />
                  <label
                    for="switch-component"
                    class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                  ></label>
                </div>
                <h2 className="text-green-700 font-semibold">public</h2>
              </div>
            </div>
            <div className="flex gap-5  md:flex-row flex-col">
              <h2 className="pr-2 text-base sm:text-xl font-medium">Content</h2>
              <div className="xl:w-96">
                <Textarea
                  label="Blog Content"
                  maxLength="500"
                  onChange={e => {
                    onChange(e, 'content');
                  }}
                />
              </div>
            </div>
            <div className="text-center flex sm:flex-row flex-col gap-10 justify-center font-medium items-center cursor-pointer">
              <button
                onClick={() => {
                  navigate('/user/myblog');
                }}
                className="bg-red-600 text-white text-xl  p-2 rounded-xl px-4 sm:w-40 sm:h-12  hover:text-black"
              >
                Cancel
              </button>
              <button
                className="bg-green-600  hover:text-black text-white text-xl p-2 rounded-xl px-4 sm:w-40 sm:h-12"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddNewBlog;
