import { FaBars } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
const NavButton = () => {
  const check = true;
  return (
    <>
      {check ? (
        <FaBars className="md:hidden text-3xl text-gray-700" />
      ) : (
        <MdOutlineClose className="md:hidden text-3xl text-gray-700" />
      )}
    </>
  );
};
export default NavButton;
