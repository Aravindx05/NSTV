import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div className="home">
      <section className="latest-news">
        <h2 className="section-title">Latest News</h2>

        <div className="news-grid">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>

      <section className="video-news">
        <h2 className="section-title">Video News</h2>

        <div className="news-grid">
          {newsData.map((news) => (
            <VideoCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
