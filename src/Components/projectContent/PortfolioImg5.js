// This file contains the fifth image of the first project

export const PortfolioImg5 = ({ pic, desc }) => {
  return (
    <div className="hidden-on-mobile">
      <img
        id="text-qa-left-right"
        className="project-image project-image-desktop"
        src={pic}
        alt="Image of Project"
      />
      <div className="describing-picture-above project-image-desktop">
        <p>
          <i>{desc}</i>
        </p>
      </div>
      <div className="image-filler"></div>
    </div>
  );
};
