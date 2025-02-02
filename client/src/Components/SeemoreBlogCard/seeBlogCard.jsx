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
import { Singlepost } from '../../Context/post-Context';
import axios from '../../utils/axios';
import moment from 'moment';

const MyBlogCard = ({ modify = true }) => {
  const [like, setLike] = useState(false);
  const [commentsec, setCommentsec] = useState(false);
  const [comment, setComment] = useState([]);
  const [addComment, setAddComment] = useState({ comment: '' });
  const { post } = useContext(Singlepost);
  const pId = post._id;

  const getComment = async () => {
    const comment = await axios.get(`/comment/${pId}`);
    setComment(comment.data);
  };
  const onSubmit = async () => {
    const dbResponse = await axios.post(
      `/comment/${post._id}/${localStorage.getItem('id')}`,
      addComment
    );
    console.log(dbResponse);
    getComment();
  };

  return (
    <Card className="max-w-[35rem] overflow-hidden border-t-2 border-gray-200 mb-10">
      {modify ? (
        <div className="flex justify-end p-2 gap-3 ">
          <FaEdit className="text-2xl text-blue-500" />
          <MdDelete className="text-2xl text-red-500" />
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
        <img src={post.image} alt="ui/ux review check" />
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

        <Typography variant="lead" color="gray" className="mt-3 font-normal ">
          {post.content}
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
            setCommentsec(!commentsec);
            getComment(post._id);
          }}
        >
          <LiaCommentSolid className=" text-2xl" />
          Comments
        </div>
      </CardFooter>
      {commentsec ? (
        <div className=" w-full h-35 grid justify-items-center overflow-scroll bg-gray-300">
          {comment.map(item => {
            return (
              <div className="w-4/6 border-2 h-15 mt-2 pb-1 rounded-3xl ">
                <div className=" pl-3 pt-1 flex gap-2">
                  <Avatar
                    className="w-8 h-8 border-2 border-green-400"
                    src={item.authorDetails.image}
                    alt="avatar"
                  />
                  <div>
                    <div className="flex gap-5">
                      <h2>{item.authorDetails.name}</h2>
                      <h2>
                        {moment(
                          item.createdAt,
                          moment.HTML5_FMT.DATETIME_LOCAL_MS
                        ).format('DD-MM-YY')}
                      </h2>
                    </div>
                    <h2 className="font-semibold">{item.comment}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
      <div className="flex mb-10 mt-2 gap-2 px-2">
        <input
          className="h-10 border-2 focus:border-purple-700 w-full rounded-2xl pl-5"
          placeholder="Add Your Comments"
          maxLength="30"
          onChange={e => {
            setAddComment({ ...addComment, comment: e.target.value });
          }}
        ></input>
        <button
          className="h-10 bg-green-600 w-2/6 rounded-2xl text-white"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </Card>
  );
};
export default MyBlogCard;
