import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Roadmaps from "./pages/Roadmaps";
import Aptitude from "./pages/Aptitude";
import DSA from "./pages/DSA";
import MockTest from "./pages/MockTest";
import Companies from "./pages/Companies";
// import InterviewExp from "./pages/InterviewExp";
import Resume from "./pages/Resume";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/companies" element={<Companies />} />
        {/* <Route path="/interview-experiences" element={<InterviewExp />} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
