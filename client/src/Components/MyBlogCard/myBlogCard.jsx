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
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Userpost } from '../../Context/post-Context';
import moment from 'moment';

const MyBlogCard = ({ modify = true, onDelete }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const { post } = useContext(Userpost);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="2xl:w-[35rem] sm:w-[25rem] w-[15rem] overflow-hidden border-t-2 border-gray-200 mb-10">
      {modify ? (
        <div className="flex justify-end p-2 gap-3 items-center font-bold cursor-pointer ">
          Edit
          <FaEdit
            className="text-2xl text-blue-500"
            onClick={() => {
              navigate(`/user/edit/${post._id}`);
            }}
          />
          Delete
          <MdDelete
            className="text-2xl text-red-500"
            onClick={() => {
              setAlert(true);
            }}
          />
        </div>
      ) : (
        ''
      )}
      {alert ? (
        <div className="bg-gray-600 w-80 h-40 z-1 absolute text-white top-10 right-2 rounded-xl">
          <p className="text-white text-xl p-10 text-center">
            Do you want to delete ?
          </p>
          <div className="flex justify-center gap-5">
            <button
              className="bg-green-600 p-1 rounded-lg px-2"
              onClick={() => {
                setAlert(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-red-700 p-1 rounded-lg px-2"
              onClick={() => {
                onDelete(post._id);
                setAlert(false);
              }}
            >
              Conform
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={post.image}
          className="sm:min-h-60 sm:max-h-90 w-full"
          alt="Uplod no image"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between">
          <Typography variant="h4" color="blue-gray">
            {post.title}
          </Typography>
          <div>
            <h3>
              {moment(
                post.createdAt,
                moment.HTML5_FMT.DATETIME_LOCAL_MS
              ).format('DD-MM-YY')}
            </h3>
            {post.isPublic ? (
              <div className="text-green-700 font-semibold">Public</div>
            ) : (
              'Private'
            )}
          </div>
        </div>

        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {post.content}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-around bg-gray-200   text-white h-10 cursor-pointer">
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
