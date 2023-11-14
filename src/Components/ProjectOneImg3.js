// This file contains the third image of the first project

export const ProjectOneImg3 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2 project-image-responsive"></div>
      <img
        id="text-qa-chatpage"
        className="project-image project-image-responsive"
        src="/images/NEW-chat-page1.webp"
        alt="Image of Project"
        srcSet="
                      /images/NEW-chat-page1.webp  500w,
                      /images/NEW-chat-page1.webp  900w,
                      /images/NEW-chat-page1.webp 1200w
                  "
      />
    </div>
  );
};
