import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from '@material-tailwind/react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { LiaCommentSolid } from 'react-icons/lia';
import { FcDislike } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { useState } from 'react';

const MyBlogCard = () => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  return (
    <Card className="max-w-[35rem] overflow-hidden border-t-2 border-gray-200 mb-10">
      <div className="flex justify-end p-2 gap-3 ">
        <FaEdit className="text-2xl text-blue-500" />
        <MdDelete className="text-2xl text-red-500" />
      </div>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            UI/UX Review Check
          </Typography>
          <div>
            <h3>January 10</h3>
            <div>private public</div>
          </div>
        </div>

        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others. Because it&apos;s about
          motivating the doers. Because I&apos;m here to follow my dreams and
          inspire others. Because it&apos;s about motivating the doers. Because
          I&apos;m here to follow my dreams and inspire others. Because
          it&apos;s about motivating the doers. Because I&apos;m here to follow
          my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-around bg-gray-400   text-white h-10 cursor-pointer">
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => {
            setLike(!like);
          }}
        >
          {!like ? (
            <FcDislike className="text-2xl" />
          ) : (
            <FcLike className="text-2xl" />
          )}
          <p className="text-xs text-center font-semibold text-black">23</p>
        </div>
        <div
          className="flex items-center gap-3 text-black font-semibold bg-white p-2 rounded-xl px-5 "
          onClick={() => {
            setComment(!comment);
          }}
        >
          <LiaCommentSolid className=" text-2xl" />
          Comments
        </div>
      </CardFooter>
      {comment ? (
        <div className=" w-full h-35 grid justify-items-center overflow-scroll bg-gray-300">
          <div className="w-4/6 border-2 h-15 mt-2 rounded-3xl ">
            <div className=" pl-3 pt-1 flex gap-2">
              <Avatar
                className="w-8 h-8 "
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <div className="flex gap-5">
                  <h2>surname</h2>
                  <h2>date</h2>
                </div>
                <h2 className="font-semibold">hellow this a good post</h2>
              </div>
            </div>
          </div>
          <div className="w-4/6 border-2 h-15 mt-2 rounded-3xl">
            <div className=" pl-3 pt-1 flex gap-2">
              <Avatar
                className="w-8 h-8 "
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
              <div>
                <p>surname</p>
                <h2 className="  font-semibold">hellow this a good post</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="flex mb-10 mt-2 gap-2 px-2">
        <input
          className="h-10 border-2 focus:border-purple-700 w-full rounded-2xl pl-5"
          placeholder="Add Your Comments"
        ></input>
        <button className="h-10 bg-green-600 w-2/6 rounded-2xl text-white">
          Submit
        </button>
      </div>
    </Card>
  );
};
export default MyBlogCard;
