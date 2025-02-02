import UserSignup from './pages/User/signup';
import UserLogin from './pages/User/login';
import UserHome from './pages/User/home';
import UserMyBlog from './pages/User/myBlog';
import UserAddNewBlog from './pages/User/addNewBlog';
import UserSeeMore from './pages/User/seeMore';
import UserEdit from './pages/User/editProfile';
import PrivateRoute from './Components/PrivateRoute/private';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/myblog" element={<UserMyBlog />} />
          <Route path="/user/newblog" element={<UserAddNewBlog />} />
          <Route path="/user/edit/:Pid" element={<UserAddNewBlog />} />
          <Route path="/user/seemore/:id" element={<UserSeeMore />} />
          <Route path="/user/edit/" element={<UserEdit />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
