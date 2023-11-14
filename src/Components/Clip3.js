export const Clip3 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        id="#text-qa-dashboard"
        className="project-image"
        src="/images/text-from-home.webp"
        alt="Image of Projectt"
        srcSet="
                      /images/text-from-home.webp  500w,
                      /images/text-from-home.webp  900w,
                      /images/text-from-home.webp 1200w
                  "
      />
      <div className="describing-picture-above">
        <p>
          <i>
            In response to live talks, public listeners are able to send in
            questions and other queries in the form of text messages (standard
            SMS). This is then processed and pushed onto a chat page, which is
            broadcasted publicly.
          </i>
        </p>
      </div>
    </div>
  );
};
