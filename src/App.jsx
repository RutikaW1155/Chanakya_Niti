import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./context/Context";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import SuccessStories from "./pages/SuccessStories";
import Feedback from "./pages/Feedback";
import ChanakyaAudio from "./pages/resources/ChanakyaAudio";
import ChanakyaBook from "./pages/resources/ChanakyaBook";
import ChanakyaNews from "./pages/resources/ChanakyaNews";
import ChanakyaQuiz from "./pages/resources/ChanakyaQuiz";
import ChanakyaVideo from "./pages/resources/ChanakyaVideo";
import Contributors from "./pages/contributor/Contributors";
import ContributorDetail from "./pages/contributor/ContributorDetail";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ChanakyaGpt from "./pages/resources/ChanakyaGpt";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { FaAngleDoubleUp } from "react-icons/fa";
import { ScrollToTop } from "react-simple-scroll-up";

// OAuth handling
import { GoogleOAuthProvider } from "@react-oauth/google";
const google_client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function App() {
  const { isDarkMode } = useContext(Context); // Get dark mode state from context
  const [showScroll, setShowScroll] = useState(false);

  // Scroll-to-top logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const GoogleLoginWrapper = () => (
    <GoogleOAuthProvider clientId={google_client_id}>
      <Login />
    </GoogleOAuthProvider>
  );

  const GoogleSignUpWrapper = () => (
    <GoogleOAuthProvider clientId={google_client_id}>
      <SignUp />
    </GoogleOAuthProvider>
  );

  return (
    <div className={`d-flex flex-column ${isDarkMode ? "dark" : ""}`}>
      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color="111, 158, 111"
        outerAlpha={0.8}
        innerScale={1.0}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Router>
        <Navbar />
        <main className="container flex-grow-1 mt-4">
          <Routes>
            {/* Redirect to Login page initially */}
            <Route path="/" element={<Navigate to="/auth/Login" />} />

            {/* Authentication Pages */}
            <Route path="/auth/SignUp" element={<SignUp />} />
            <Route path="/auth/Login" element={<Login />} />

            {/* Protected route for Home */}
            <Route
  path="/home"
  element={
    localStorage.getItem("userToken") ? <Home /> : <Navigate to="/auth/Login" />
  }
/>



            {/* Other routes */}
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help" element={<Help />} />
            <Route path="/resources/audio" element={<ChanakyaAudio />} />
            <Route path="/resources/book" element={<ChanakyaBook />} />
            <Route path="/resources/news" element={<ChanakyaNews />} />
            <Route path="/resources/quiz" element={<ChanakyaQuiz />} />
            <Route path="/resources/video" element={<ChanakyaVideo />} />
            <Route path="/resources/chanakyagpt" element={<ChanakyaGpt />} />
            <Route path="/successstories" element={<SuccessStories />} />
            <Route path="/contributor" element={<Contributors />} />
            <Route path="/contributor/details" element={<ContributorDetail />} />
          </Routes>
        </main>
        <Footer />
      </Router>

      <ScrollToTop
        className="scroll-to-top"
        symbol={<FaAngleDoubleUp />}
        size={90}
        bgColor={isDarkMode ? "#2C2A2A" : "#dfdfb0"}
        strokeWidth={6}
        strokeFillColor={isDarkMode ? "#fff" : "rgb(0, 0, 0)"}
        strokeEmptyColor="#505050"
        symbolColor={isDarkMode ? "#F5FBFA" : "#333"}
      />
    </div>
  );
}

export default App;
