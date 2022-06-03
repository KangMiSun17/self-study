import "./Font.css";

function Font() {
  return (
    <div>
      <div class="text1">넓은 화면에서 크기가 커집니다.</div>
      <ul>
        <li class="desktop">저는 넓은 화면에서만 보입니다.</li>
        <li>저는 항상 보입니다.</li>
        <li class="mobile">저는 좁은 화면에서만 보입니다.</li>
      </ul>
    </div>
  );
}

export default Font;
