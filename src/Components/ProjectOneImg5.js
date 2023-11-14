// This file contains the fifth image of the first project

export const ProjectOneImg5 = () => {
  return (
    <div className="whatnot1">
      <img
        id="text-qa-left-right"
        className="project-image project-image-desktop"
        src="/images/desktop-left-right-2.webp"
        alt="Image of Project"
        srcSet="
                    /images/desktop-left-right-2.webp  500w,
                    /images/desktop-left-right-2.webp  900w,
                    /images/desktop-left-right-2.webp 1200w
                "
      />
      <div className="describing-picture-above project-image-desktop">
        <p>
          <i>
            An example of the dashboard of the Text Q&amp;A app (left), and an
            example of its chatpage
          </i>
        </p>
      </div>
    </div>
  );
};
