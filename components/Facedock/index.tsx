import Container from "../Container";
import Video from "../Video";

import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

export default function Facedock() {
  return (
    <section className="">
      <Container className="">
        <div className="">
          <Video autoPlay src="/videos/facedock.mov" />
        </div>

        <div className="">
          <h2 className="">
            Pull up a <span className="">chair</span> Facedock
          </h2>

          <p className="">
            Facedocks are flexible, resizable, rearrangeable frames. Feeling
            shy? Just shrink your Facedock.
          </p>

          <Button asChild variant="outline" size={"lg"}>
            <Link href="/">Try it with your face</Link>
          </Button>

          <p className="">
            This will request access for your webcam. It will only be used to
            demo this feature. No photos will be taken or stored.
          </p>
        </div>
      </Container>
    </section>
  );
}
