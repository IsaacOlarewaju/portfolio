/* PROJECTS LINK-BLOCK */
export function ProjectImageLink() {
  return (
    <a href="">
      <img
        className="project-image"
        id="project-homepage"
        src="/images/chat-page-2.webp"
        alt="Preview of my latest project"
        srcSet="
                      /images/chat-page-2.webp  500w,
                      /images/chat-page-2.webp  900w,
                      /images/chat-page-2.webp 1200w
                  "
      />
    </a>
  );
}
