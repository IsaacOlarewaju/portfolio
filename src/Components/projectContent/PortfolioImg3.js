// This file contains the third image of the first project

export const PortfolioImg3 = ({ pic }) => {
  return (
    <div>
      <div
        className="image-filler project-image-responsive"
        id="text-qa-dashboard"
      ></div>
      <img
        className="project-image project-image-responsive"
        src={pic}
        alt="image of project"
      />
    </div>
  );
};
