import carrot from "./../assets/carrot.png";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 12px 15px;
  display: flex;
`;
const CarrotBtn = styled.button`
  border: none;
  background-color: white;
  display: flex;
  margin-right: 30px;
`;
const ElUl = styled.ul`
  display: flex;
  justify-content: center;
  padding-right: 200px;
`;
const ElLi = styled.li`
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
const UlSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
