import { Helmet } from "react-helmet";
import { Link, BrowserRouter as Router } from "react-router-dom";
import TestRouter from "./helmet-snap-study/TestRouter";
import Font from "./media-query/Font";
import Tomato from "./media-query/Tomato";
import Slider from "./slide-study/Slider";

function App() {
  return (
    <div>
      <Tomato />
      <Font />
    </div>
  );
}

export default App;
