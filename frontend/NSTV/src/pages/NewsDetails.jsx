import { useParams } from "react-router-dom";
import newsData from "../data/newsData";

function NewsDetails() {
  const { id } = useParams(); // get ID from URL

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  if (!news) {
    return <h2 style={{ padding: "20px" }}>News not found</h2>;
  }

  return (
    <div className="container">
      <h1>{news.title}</h1>

      <img
        src={news.image}
        alt={news.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />

      <p style={{ marginTop: "15px" }}>{news.description}</p>

      <h3 style={{ marginTop: "30px" }}>🎥 Watch Related News</h3>

      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${news.youtubeId}`}
        title={news.title}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NewsDetails;
