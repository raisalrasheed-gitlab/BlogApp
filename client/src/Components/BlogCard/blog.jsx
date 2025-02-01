import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Textarea, IconButton, Avatar } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { FcDislike } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { useState } from 'react';
import { Publicposts } from '../../Context/post-Context';
import { useContext } from 'react';

const Blog = () => {
  const [like, setLike] = useState(false);
  const { items } = useContext(Publicposts);
  const navigate = useNavigate();
  return (
    <>
      <Card className="w-full lg:max-w-md flex-row h-68 pr-2 cursor-pointer">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={items.image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h6"
            color="gray"
            className="mb-2 uppercase border-b-2 w-fit"
          >
            {items.title}
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-base overflow-hidden h-25 w-55"
          >
            {items.content}
          </Typography>
          <div className="flex gap-4">
            <div className="inline-block">
              <Button
                variant="text"
                className="flex items-center sm:gap-2 bg-blue-400 h-10 "
                onClick={() => {
                  navigate(`/user/seemore/${items._id}`);
                }}
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
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

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Avatar
                  src={items.authorDetails ? items.authorDetails.image : ''}
                  className="h-8 w-full"
                />
                <div></div>
              </div>
            </div>
          </div>
          <div className="sm:flex items-center mt-2 hidden">
            <div className="flex w-full h-10 flex-row items-center rounded-[99px] border border-gray-900/10 bg-gray-900/5 ">
              <Textarea
                rows={1}
                resize={true}
                placeholder="Your Comments"
                className="min-h-full !border-0 focus:border-transparent px-6 "
                containerProps={{
                  className: 'grid h-full ',
                }}
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
              />
              <div>
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default Blog;
