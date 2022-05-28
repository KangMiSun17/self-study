import { Helmet } from "react-helmet";

function TestB() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>B 페이지</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      테스트 페이지 B
    </>
  );
}

export default TestB;
