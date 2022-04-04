import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import ReviewPage from "./Components/Review/ReviewPage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashoard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
