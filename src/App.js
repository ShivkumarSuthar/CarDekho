import logo from "./logo.svg";
import "./App.css";
import "./dist/assets/style.css";

import Home from "./dist/assets/componets/home";
import Steps from "./dist/assets/componets/steps";
import Cars from "./dist/assets/componets/cars";
import About from "./dist/assets/componets/about";
import Testimonial from "./dist/assets/componets/testimonial";
import Blog from "./dist/assets/componets/blog";
import Experience from "./dist/assets/componets/experience";
import Footer from "./dist/assets/componets/footer";
import Navigation from "./dist/assets/componets/Navigation";

function App() {
  return (
    <>
      
<Home/> 
<Steps/>
<Cars/>
<About/>
<Experience/>
<Testimonial/>
<Blog/>
<Footer/>
    </>
  );
}

export default App;
