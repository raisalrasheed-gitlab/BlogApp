import UserSignup from './pages/User/signup';
import UserLogin from './pages/User/login';
import UserHome from './pages/User/home';
import UserMyBlog from './pages/User/myBlog';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/myblog" element={<UserMyBlog />} />
      </Routes>
    </>
  );
};
export default App;
