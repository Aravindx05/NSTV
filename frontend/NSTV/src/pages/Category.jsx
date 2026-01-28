import { useParams } from "react-router-dom";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

function Category() {
  const { name } = useParams(); // category name from URL

  const filteredNews = newsData.filter(
    (news) => news.category === name
  );

  return (
    <div className="container">
      <h1 style={{ textTransform: "capitalize" }}>
        {name} News
      </h1>

      {filteredNews.length === 0 ? (
        <p>No news available for this category.</p>
      ) : (
        <div className="news-grid">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
