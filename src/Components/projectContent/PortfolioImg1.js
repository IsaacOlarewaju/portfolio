// This file contains the first image

export const PortfolioImg1 = ({ pic }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <img className="project-image" src={pic} alt="image of project" />
    </div>
  );
};
