import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        src="/assets/pika.gif"
        width={300}
        height={300}
        alt="Logo"
      />
      <p className="text-white uppercase text-5xl ">Sexoooo</p>
    </div>
  );
}