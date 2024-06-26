import { ArrowRight, StarGroup, StarSingle } from "../icons";
import Container from "../Container";
import { Link } from "next-view-transitions";

export default function AnnouncementBar() {
  return (
    <div className="">
      <Container className="">
        <div className="">
          <StarSingle />
          <span>New</span>
          <StarGroup />
        </div>
        <p>
          We just launched a selfie sticker app on iOS, stamp your face in
          iMessage
        </p>
        <Link href="#" className="">
          <span className="">link to sale</span>
          <ArrowRight />
        </Link>
      </Container>
    </div>
  );
}
