import carrot from "../assets/carrot.png";
import styled from "styled-components";
import searchImg from "../assets/search.png";
import menu from "../assets/menu.png";

const Nav = styled.nav`
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
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
  padding-right: 40px;
  @media screen and (max-width: 767px) {
    display: none;
  }
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
  flex-shrink: 0;
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
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const SearchImg = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
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
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Menu = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <span style={{ display: "flex" }}>
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
      </span>

      <span style={{ display: "flex" }}>
        <Searchbox placeholder="물품이나 동네를 검색해보세요"></Searchbox>

        <span
          style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            marginRight: "15px",
          }}
        >
          <SearchImg src={searchImg} />
        </span>
        <ChatBtn>채팅하기</ChatBtn>
        <span
          style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu src={menu} />
        </span>
      </span>
    </Nav>
  );
}
