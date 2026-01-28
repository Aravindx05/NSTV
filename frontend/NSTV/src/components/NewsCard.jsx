import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <div className="card">
      <img src={news.image} alt={news.title} />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <Link to={`/news/${news.id}`}>Read More</Link>
    </div>
  );
}

export default NewsCard;
