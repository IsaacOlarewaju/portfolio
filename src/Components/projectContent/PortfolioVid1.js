// This file contains the first video

export const PortfolioVid1 = ({ vid }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <video muted autoPlay loop width="100%">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
