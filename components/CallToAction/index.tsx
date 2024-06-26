import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Container from "../Container";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="">
      <Container className="">
        <div className="">
          <Image
            src={"/images/sparkles.svg"}
            width={1038}
            height={312}
            className=""
            alt="hero"
          />
        </div>

        <div className="">
          <h2 className="">
            Ready to make <span className="">yourself a space?</span>
          </h2>

          <p className="">Free. Instant space. No sign-up required.</p>

          <div className="">
            <Button asChild variant={"secondary"} className="">
              <Link href="#create">Create a new space</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
