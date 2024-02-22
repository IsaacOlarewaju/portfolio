// This file contains the first video

export const PortfolioVid1 = ({ vid }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <div className="portfolio-vid-container">
        <video controls autoplay muted loop className="project-image">
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
