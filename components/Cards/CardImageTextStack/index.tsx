import Image from "next/image";

export default function CardImageTextStack({
  image,
  imageAlt,
  title,
  description,
}: {
  image?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="">
      <div className="">
        <Image
          src={image || "/images/placeholder.svg"}
          alt={imageAlt || "Placeholder"}
          width={460}
          height={200}
          className=""
        />
      </div>

      <div className="">
        <h3 className="">{title || "Title"}</h3>
        <p className="">{description || "Description goes here"}</p>
      </div>
    </div>
  );
}
