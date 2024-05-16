import AlbaItem from "./AlbaItem";
import styled from "styled-components";

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
  row-gap: 30px;
  column-gap: 40px;
`;
export default function PopularAlba() {
  return (
    <Section>
      <Title>인기 당근알바</Title>
      <GridContainer>
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
        <AlbaItem />
      </GridContainer>
    </Section>
  );
}
