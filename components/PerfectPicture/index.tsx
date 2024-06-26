import Container from "../Container";
import Video from "../Video";

export default function PerfectPicture() {
  return (
    <section className="">
      <Container>
        <div className="">
          <h2 className="">
            Find the
            <span className="">perfect picture</span>
          </h2>

          <p className="">
            Search for images with a Search Block, right inside the space.
            Arrange as many as you want on the canvas.
          </p>
        </div>

        <Video
          autoPlay
          src="/videos/perfect_picture_campfire.mp4"
          className=""
        />
      </Container>
    </section>
  );
}
