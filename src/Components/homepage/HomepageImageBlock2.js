// Project One image block on the homepage

export function HomepageImageBlock2() {
  return (
    <a href="">
      <img
        // className="project-imagee"
        // id="project-homepagee"
        src="/images/iPhone-photo.webp"
        alt="Preview of my latest project"
        srcSet="
                        /images/canvas.png  500w,
                        /images/canvas.png  900w,
                        /images/canvas.png 1200w
                    "
      />
    </a>
  );
}
