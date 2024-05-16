import AlbaItem from "./AlbaItem";
import styled from "styled-components";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";

const Section = styled.section`
  max-width: 768px;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 40px;
  color: #212124;
  font-size: 26px;
  font-weight: 600;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 369px 369px;
  grid-template-rows: 108px 108px 108px 108px 108px;
  row-gap: 40px;
  column-gap: 30px;
`;
export default function PopularAlba() {
  return (
    <Section>
      <Title>인기 당근알바</Title>
      <GridContainer>
        <AlbaItem
          imgSrc={img1}
          jobName={"아이등하교시키는일"}
          address={"광주광역시 광산구 월계동"}
          wage={"시급 1,000,000"}
        />
        <AlbaItem
          imgSrc={img2}
          jobName={"단기 새별알바구해요 (야간) 5월"}
          address={"런치크라운_스튜디오 ・ 경기도 수원시 영통구 이의동"}
          wage={"시급 10,000"}
        />
        <AlbaItem
          imgSrc={img3}
          jobName={"당근 고객센터 신고팀 모집(전환 시 100만원 지급)"}
          address={"주식회사 당근서비스 ・ 서울특별시 구로구 구로동"}
          wage={"월급 2,600,000"}
        />
        <AlbaItem
          imgSrc={img4}
          jobName={"레고랜드 호텔 편의점 근무자"}
          address={"강원특별자치도 춘천시 중도동"}
          wage={"시급 12,000"}
        />
        <AlbaItem
          imgSrc={img5}
          jobName={"재택알바 집에서 십자간지 접으실 분"}
          address={"복호두 강남역점 ・ 서울특별시 서초구 서초동"}
          wage={"건당 40,000"}
        />
        <AlbaItem
          imgSrc={img6}
          jobName={"비닐하우스 농약해주실분"}
          address={"제주특별자치도 서귀포시 월평동"}
          wage={"시급 30,000"}
        />
        <AlbaItem
          imgSrc={img7}
          jobName={"구미어린이안전관리사모집(교육) 자격증"}
          address={"국민재난안전총연합회 ・ 경상북도 구미시 송정동"}
          wage={"시급 9,860"}
        />
        <AlbaItem
          imgSrc={img8}
          jobName={"가정집에서 하는 장부정리"}
          address={"정일수산 ・ 전라남도 순천시 풍덕동"}
          wage={"월급 1,000,000"}
        />
        <AlbaItem
          imgSrc={img9}
          jobName={"파티룸 청소"}
          address={"머묾 ・ 부산광역시 사하구 하단동"}
          wage={"시급 10,000"}
        />
        <AlbaItem
          imgSrc={img10}
          jobName={"쇼핑몰 상품 포장 아르바이트 에어컨 가동 (시간협의)"}
          address={"(주)슬립스파 ・ 경기도 부천시 도당동"}
          wage={"시급 10,000"}
        />
      </GridContainer>
    </Section>
  );
}
