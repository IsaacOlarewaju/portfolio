// Project One image block on the homepage

export function HomepageImageBlock2() {
  return (
    <a href="">
      <img
        // className="project-imagee"
        // id="project-homepagee"
        src="/images/canvas-homep.webp"
        alt="Preview of my latest project"
        srcSet="
                        /images/canvas-homep.webp  500w,
                        /images/canvas-homep.webp  900w,
                        /images/canvas-homep.webp 1200w
                    "
      />
    </a>
  );
}
