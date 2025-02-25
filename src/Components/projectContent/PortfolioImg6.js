// This file contains the first image

export const PortfolioImg6 = ({ pic, desc }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <img className="project-image" src={pic} alt="image of project" />
      <div className="describing-picture-above project-image-desktop">
        <p>
          <i>{desc}</i>
        </p>
      </div>
    </div>
  );
};
