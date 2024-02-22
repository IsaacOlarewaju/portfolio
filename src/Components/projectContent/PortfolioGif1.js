// This file contains a gif file

export const PortfolioGif1 = ({ pic }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <div className="video">
        <img
          className="portfolio-vid-container"
          src={pic}
          alt="image of project"
        />
      </div>
    </div>
  );
};
