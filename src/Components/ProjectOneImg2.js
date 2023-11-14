// This file contains the second image of the first project

export const ProjectOneImg2 = () => {
  return (
    <div className="whatnot1">
      <div className="whatnot2"></div>
      <img
        id="text-qa-dashboard"
        className="project-image project-image-responsive"
        src="/images/NEW-dashboard.webp"
        alt="Image of Project"
        srcSet="
                    /images/NEW-dashboard.webp  500w,
                    /images/NEW-dashboard.webp  900w,
                    /images/NEW-dashboard.webp 1200w
                "
      />
    </div>
  );
};
