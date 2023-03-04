import Search from "./components/Search/Search";
import TopCarousel from "./components/topCarousel/TopCarousel";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SampleDesign from "./components/SampleDesign/SampleDesign";
import Collections from "./components/Collections/Collections";
import UserList from "./components/UserList/UserList";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LoginPage2 from "./components/LoginPage2/LoginPage2";
import SingleUserPage from "./components/UserList/SingleUserpage/SingleUserPage";
import Test from "./components/Test/Test";
import Products from "./components/Products/Products";
import UserProfile from "./components/UserProfilePage/UserProfile";

const App = () => {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<SampleDesign />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/carousel" element={<TopCarousel />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-list/:userId" element={<SingleUserPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login-page" element={<LoginPage2 />} />
        <Route path="/profile" element />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
