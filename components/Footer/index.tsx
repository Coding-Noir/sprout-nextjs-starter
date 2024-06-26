import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { dummyMenu, dummyMenu2 } from "@/constants";

export default function Footer() {
  return (
    <footer id="footer" className="">
      <Container className="">
        <div className="">
          <Link href="#">
            <Image
              src={"/images/sprout-logo.svg"}
              alt="Sprout"
              width={50}
              height={53}
            />
          </Link>
        </div>

        <div className="">
          <ul className="">
            {dummyMenu2.map((item) => (
              <li key={item.label}>
                <Link href={item.url} className="">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="">
            {dummyMenu.map((item) => (
              <li key={item.label}>
                <Link href={item.url} className="">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="">
            &copy; <span>Sprout</span>
            <span className=""></span>
            {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
