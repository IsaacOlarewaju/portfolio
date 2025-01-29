// Project One image block on the homepage

export function HomepageImageBlock1() {
  return (
    <a href="">
      <img
        className="project-image"
        // id="project-homepage"
        src="/images/textqa-homep.webp"
        alt="Preview of my latest project"
        srcSet="
                      /images/textqa-homep.webp  500w,
                      /images/textqa-homep.webp  900w,
                      /images/textqa-homep.webp 1200w
                  "
      />
    </a>
  );
}
