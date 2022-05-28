import { Helmet } from "react-helmet";
import { Link, BrowserRouter as Router } from "react-router-dom";
import TestRouter from "./helmet-snap-study/TestRouter";
import Slider from "./slide-study/Slider";

function App() {
  return (
    <Router>
      <Helmet>
        <title>리액트 헬멧을 이용한 타이틀 변경</title>
      </Helmet>
      Test 헬멧
      <div>
        <Link to="/test-A">페이지 A</Link>
        <br />
        <Link to="/test-B">페이지 B</Link>
      </div>
      <hr />
      <TestRouter />
    </Router>
  );
}

export default App;
