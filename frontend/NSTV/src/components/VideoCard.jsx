function VideoCard({ news }) {
  // extract video ID from full YouTube URL
  const getVideoId = (url) => {
    const params = new URL(url).searchParams;
    return params.get("v");
  };

  const videoId = getVideoId(news.youtubeUrl);

  return (
    <div className="card">
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={news.title}
        allowFullScreen
      ></iframe>

      <h4>{news.title}</h4>
    </div>
  );
}

export default VideoCard;
