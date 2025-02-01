import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import { Singlepost } from '../../Context/post-Context';
import { useContext } from 'react';

const ProfileCard = () => {
  const { post } = useContext(Singlepost);
  return (
    <Card className="max-w-96 max-h-[80vh] mb-10">
      <CardHeader floated={false} className="h-50">
        <img
          src={post.authorDetails ? post.authorDetails.image : ''}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Name :{post.authorDetails ? post.authorDetails.name : ''}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium text-black"
          textGradient
        >
          Age :{post.authorDetails ? post.authorDetails.age : ''}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        PhoneNumber:{post.authorDetails ? post.authorDetails.phonenumber : ''}
      </CardFooter>
    </Card>
  );
};
export default ProfileCard;
