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
import { useState } from "react";

const App = () => {
  const TASKS = [
    {
      task: "Clean bedroom",
      subtasks: ["Do laundry", "Organize desk", "Wipe floors"],
    },
    {
      task: "Study",
      subtasks: ["Review chemistry", "Do a React coding challenge"],
    },
    {
      task: "Build website",
      subtasks: ["Choose tech stack", "Design pages", "Develop", "Publish"],
    },
  ];
  const [tasks, setTasks] = useState(TASKS);
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
        <Route path="/user-list/:userId" element={<SingleUserPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login-page" element={<LoginPage2 />} />
        <Route
          path="/test"
          element={<Test taskArray={tasks} setTaskArray={setTasks} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
