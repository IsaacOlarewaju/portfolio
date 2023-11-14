/* PROJECTS LINK-BLOCK */
export function ProjectImageLink() {
  return (
    <a href="">
      <img
        className="project-image"
        id="project-homepage"
        src="/images/textqa-homepage.webp"
        alt="Preview of my latest project"
        srcSet="
                      /images/textqa-homepage.webp  500w,
                      /images/textqa-homepage.webp  900w,
                      /images/textqa-homepage.webp 1200w
                  "
      />
    </a>
  );
}
