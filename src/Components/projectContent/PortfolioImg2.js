// This file contains the second image of the first project

export const PortfolioImg2 = ({ pic }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <img
        className="project-image project-image-responsive"
        src={pic}
        alt="image of project"
      />
    </div>
  );
};
