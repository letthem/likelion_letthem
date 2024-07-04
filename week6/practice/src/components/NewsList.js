import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { axiosInstance } from "../api";

// dummy data
// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlToImage:
//     "https://imgnews.pstatic.net/image/437/2024/06/26/0000398911_001_20240626171311920.jpg?type=w647",
// };

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // async를 사용하는 함수 따로 선언
  const fetchData = async () => {
    setLoading(true);
    try {
      // 카테고리 지정 시 추가
      const query = category === "all" ? "" : `${category}`;

      // axios instance를 사용했기 때문에 다음과 같이 get 요청을 작성합니다.
      const response = await axiosInstance.get("/top-headlines", {
        params: {
          country: "kr",
          category: query,
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  // 대기 중일 때 (아직 데이터를 받아오지 못한 경우)
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export default NewsList;
