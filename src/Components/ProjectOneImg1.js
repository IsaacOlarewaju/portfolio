// This file contains the first image of the first project

export const ProjectOneImg1 = () => {
  return (
    <div>
      <div className="image-filler"></div>
      <img
        className="project-image"
        src="/images/NEW-Opening.webp-image-2.webp"
        alt="Image of Projectt"
        srcSet="
                      /images/NEW-Opening.webp  500w,
                      /images/NEW-Opening.webp  900w,
                      /images/NEW-Opening.webp 1200w
                  "
      />
    </div>
  );
};
