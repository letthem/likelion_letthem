import styled from "styled-components";

const Span = styled.span`
  width: 108px;
  height: 108px;
`;
const Img = styled.img`
  width: 108px;
  height: 108px;
  object-fit: cover;
  border-radius: 8px;
`;
const JobName = styled.div`
  color: #212124;
  cursor: pointer;
  font-size: 18px;
  line-height: 27.76px;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
`;
const Address = styled.div`
  color: #868b94;
  cursor: pointer;
  font-size: 14px;
  line-height: 19.6px;
  margin-bottom: 4px;
`;
const Wage = styled.div`
  color: #212124;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 21.76px;
`;
export default function AlbaItem({ imgSrc, jobName, address, wage }) {
  return (
    <article style={{ display: "flex" }}>
      <Span>
        <Img src={imgSrc} />
      </Span>
      <div style={{ marginLeft: "16px" }}>
        <JobName>{jobName}</JobName>
        <Address>{address}</Address>
        <Wage>{wage}</Wage>
      </div>
    </article>
  );
}
