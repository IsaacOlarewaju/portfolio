export const Clip4 = () => {
  return (
    <div className="whatnot1">
      <img
        id="text-qa-left-right"
        className="project-image project-image-desktop"
        src="/images/desktop-left-right.webp"
        alt="Image of Projectt"
        srcSet="
                    /images/desktop-left-right.webp  500w,
                    /images/desktop-left-right.webp  900w,
                    /images/desktop-left-right.webp 1200w
                "
      />
      <div className="describing-picture-above project-image-desktop">
        <p>
          An example of the dashboard of the Text Q&amp;A app (left), and an
          example of its chatpage
        </p>
      </div>
    </div>
  );
};
