import Image from "next/image";
import Container from "../Container";
import Video from "../Video";

export default function Hero() {
  return (
    <section className="">
      <div className="">
        <div className="">
          <Image
            fill
            src="/images/cursor_julius.png"
            className="object-contain"
            sizes="(max-width: 768px) 100vw"
            alt=""
          />
        </div>
      </div>

      <div className="">
        <div className="">
          <Image
            fill
            src="/images/cursor_mayli.png"
            className="object-contain"
            sizes="(max-width: 768px) 100vw"
            alt=""
          />
        </div>
      </div>

      <Container className="">
        <h1 className="">
          Your space,
          <span className="">Your call</span>
        </h1>

        <p className="">
          Create a virtual space to meet, chat, and play with your favorite
          people.
        </p>

        <Video
          autoPlay
          src="/videos/hero_yellow.mp4"
          className="aspect-video"
        />
      </Container>
    </section>
  );
}
