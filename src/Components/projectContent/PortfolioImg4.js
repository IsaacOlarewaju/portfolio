// This file contains the fourth image of the first project

export const PortfolioImg4 = ({ pic }) => {
  return (
    <div>
      <div className="image-filler"></div>
      <img className="project-image" src={pic} alt="image of project" />
      {/* <div className="describing-picture-above">
        <p>
          <i>
            In response to live talks, public listeners are able to send in
            questions and other queries in the form of text messages (standard
            SMS). This is then processed and pushed onto a chat page, which is
            broadcasted publicly.
          </i>
        </p>
      </div> */}
    </div>
  );
};
