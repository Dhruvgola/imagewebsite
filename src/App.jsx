import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const Layout = ({ children }) => {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <div className="w-full overflow-hidden">
      {!isGalleryPage && <Header />}
      {children}
      {!isGalleryPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <About />
              <Projects />
              <Contact />
            </Layout>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
