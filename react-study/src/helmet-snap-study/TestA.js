import { Helmet } from "react-helmet";

function TestA() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A 페이지</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      테스트 페이지 A
    </>
  );
}

export default TestA;
