import styled from "styled-components";
import icons from "../assets/banner-icon.png";

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;
const Container = styled.div`
  margin: 44px 0 64px;
  padding: 28px 24px;
  display: flex;
  background-color: rgb(247, 241, 235);
  border-radius: 0.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  width: 440px;
  height: 72px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div`
  color: rgb(33, 33, 36);
  display: flex;
  font-size: 20px;
  font-weight: 630;
  line-height: 26px;
  align-items: center;
`;
const Right = styled.div`
  width: 170.2px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const FreeBtn = styled.button`
  cursor: pointer;
  background-color: #ff6f0f;
  color: white;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
`;
const InquiryBtn = styled.button`
  cursor: pointer;
  background-color: rgba(255, 111, 15, 0.14);
  color: rgb(255, 111, 15);
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 650;
  line-height: 19.6px;
`;
export default function SmallBanner() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <img src={icons} width={72} height={72} />
          <Text>
            대규모 채용이 필요하다면
            <br />
            당근알바 기업용 서비스에 대해 알아보세요!
          </Text>
        </Left>
        <Right>
          <FreeBtn>7일 무료 체험</FreeBtn>
          <InquiryBtn>1:1 문의</InquiryBtn>
        </Right>
      </Container>
    </Wrapper>
  );
}
