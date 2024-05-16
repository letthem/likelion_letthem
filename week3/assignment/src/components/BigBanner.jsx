import styled from "styled-components";
import headerImage from "./../assets/header-image.png";
const BG = styled.div`
  background-color: #ffe2d2;
  width: 100%;
  height: 315px;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  height: 96px;
  color: #212124;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  margin: auto;
`;
const Small = styled.p`
  width: 84px;
  height: 34px;
  background-color: #ff6f0f;
  color: white;
  border-radius: 5px;
  text-align: center;
  padding: 10px 8px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  margin-top: 25px;
`;
const Span = styled.span`
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 260px;
  top: 120px;
`;
const Img = styled.img`
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 603px;
  object-fit: cover;
`;
export default function BigBanner() {
  return (
    <>
      <BG>
        <div
          style={{ width: "769px", height: "217px", padding: "48px 16px 0px" }}
        >
          <Title>
            우리 동네에서 찾는 <br />
            당근알바
          </Title>
          <p
            style={{
              marginTop: "16px ",
              fontSize: "18px",
              lineHeight: "23.76px",
            }}
          >
            걸어서 10분 거리의 <br />
            동네 알바들 여기 다 있어요.
          </p>
          <Small>공고 올리기</Small>
        </div>
        <div>
          <Span>
            <Img src={headerImage} />
          </Span>
        </div>
      </BG>
    </>
  );
}
