import Image from "next/image";

const slides = [
  {
    image: "/images/join_gallery_1.png",
    alt: "image 1",
  },
  {
    image: "/images/join_gallery_2.png",
    alt: "image 2",
  },
  {
    image: "/images/join_gallery_3.png",
    alt: " image 3",
  },
  {
    image: "/images/join_gallery_4.jpeg",
    alt: " image 4",
  },
  {
    image: "/images/join_gallery_5.png",
    alt: " image 5",
  },
  {
    image: "/images/join_gallery_6.png",
    alt: " image 6",
  },
  {
    image: "/images/join_gallery_7.png",
    alt: " image 7",
  },
  {
    image: "/images/join_gallery_8.png",
    alt: " image 8",
  },
];
export default function ImageMarquee() {
  const doubledSlides = slides.concat(slides);
  return (
    <div className="">
      <div className="">
        {doubledSlides.map((item, index) => (
          <div className="" key={`${item.alt}-${index}`}>
            <Image
              alt={item.alt}
              fill
              className=""
              src={item.image || ""}
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
