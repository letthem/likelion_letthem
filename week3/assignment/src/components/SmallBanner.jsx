import styled from "styled-components";

export default function SmallBanner() {
  const Section = styled.section`
    max-width: 768px;
    margin: 0 auto;
  `;
  return (
    <Section>
      <div>SmallBanner</div>
    </Section>
  );
}
