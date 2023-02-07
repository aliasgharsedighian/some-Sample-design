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

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<SampleDesign />} />
        <Route path="/search" element={<Search />} />
        <Route path="/carousel" element={<TopCarousel />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login-page" element={<LoginPage2 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
