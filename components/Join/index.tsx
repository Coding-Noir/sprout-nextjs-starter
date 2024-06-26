import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageMarquee from "../ImageMarquee/ImageMarquee";
import Container from "../Container";

export default function Join() {
  return (
    <section className="">
      <Container className="">
        <div className="">
          <div className="">
            <h2 className="">Join in the fun</h2>
            <p className="">
              People have already made some wonderful spaces. Start your own
              today.
            </p>
          </div>
        </div>
      </Container>

      <div className="">
        <ImageMarquee />
      </div>
    </section>
  );
}
