// Project One image block on the homepage

export function HomepageImageBlock1() {
  return (
    <a href="">
      <img
        className="project-image"
        // id="project-homepage"
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
