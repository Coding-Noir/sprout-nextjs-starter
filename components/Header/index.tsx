"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import AnnouncementBar from "../AnnouncementBar";
import Container from "../Container";
import { BrandLogo, HamburgerIcon } from "../icons";
import Link from "next/link";
import { dummyMenu } from "@/constants";
import Image from "next/image";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleMenuOpen() {
    setOpen(true);
  }
  return (
    <header className="">
      <AnnouncementBar />
      <div className="">
        <Container className="">
          {/* Logo  */}
          <Link href="#" className="">
            <Image
              src="/images/logo-text.svg"
              alt="Sprout"
              width={110}
              height={29}
              priority
              sizes="(max-width: 768px) 100vw"
            />
            {/* <BrandLogo />
            <span className="sr-only">Sprout</span> */}
          </Link>

          {/* Menu */}
          <div className="">
            <NavigationMenu>
              <NavigationMenuList className="">
                {dummyMenu.map((item) => (
                  <li key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link prefetch={false} href={item.url} className="">
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA  */}
          <Button asChild className="">
            <Link href={"#"}>Get Sprout for free</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="">
            <Button onClick={handleMenuOpen} size="icon">
              <HamburgerIcon />
            </Button>
          </div>
        </Container>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
