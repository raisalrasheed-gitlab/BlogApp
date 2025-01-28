import UserLogin from './pages/User/login';
import UserHome from './pages/User/home';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/user/home" element={<UserHome />} />
      </Routes>
    </>
  );
};
export default App;
