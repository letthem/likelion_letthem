import carrot from "./../assets/carrot.png";
import styled from "styled-components";

const Nav = styled.nav`
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
`;

const CarrotBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: white;
  display: flex;
  margin-right: 30px;
`;

const ElUl = styled.ul`
  display: flex;
  justify-content: center;
  padding-right: 210px;
  @media screen and (max-width: 738px) {
    display: none;
  }
  /* @media screen and (min-width: 738px) {
    display: flex;
  } */
`;

const ElLi = styled.li`
  cursor: pointer;
  margin-right: 30px;
  text-align: center;
  color: #4d5159;
  font-weight: 600;
  line-height: 1.32;
  font-size: 1.125rem;
  padding: 10px 0px;
`;

const Searchbox = styled.input`
  width: 288px;
  height: 40px;
  background-color: #f2f3f6;
  color: #212124;
  border: none;
  border-radius: 5px;
  padding: 9px 12px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 200;
`;

const ChatBtn = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #212124;
  border: 0.3px solid #cacaca;
  border-radius: 5px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  width: 90px;
  height: 40px;
`;

export default function NavBar() {
  return (
    <Nav>
      <CarrotBtn>
        <img src={carrot} width={65} />
      </CarrotBtn>
      <ElUl>
        <ElLi>중고거래</ElLi>
        <ElLi>동네업체</ElLi>
        <ElLi style={{ color: "#ff6f0f" }}>알바</ElLi>
        <ElLi>부동산</ElLi>
        <ElLi>중고차 직거래</ElLi>
      </ElUl>
      <span style={{ width: "300px", height: "40px" }}>
        <Searchbox placeholder="물품이나 동네를 검색해보세요"></Searchbox>
      </span>
      <ChatBtn>채팅하기</ChatBtn>
    </Nav>
  );
}
