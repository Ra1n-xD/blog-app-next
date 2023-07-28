import Image from "next/image";
import nextPng from "../public/next.png";

export default function Home() {
  return (
    <div>
      <h1>Welcome to NextJS world</h1>
      <Image
        src={nextPng}
        width={900}
        height={488}
        alt="Picture of the author"
      />
    </div>
  );
}
