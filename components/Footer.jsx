import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-accent py-32 px-4 md:px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-5">
          <h1 className="text-3xl ">Get to Know Elmer Panotes Alberto</h1>
          <nav className="flex flex-col gap-2 text-black">
            <Link href="/">
              <p className="font-extrabold">Home</p>
            </Link>
            <Link href="/#about">
              <p className="font-extrabold">About</p>
            </Link>
            <Link href="/">
              <p className="font-extrabold">Career</p>
            </Link>
            <Link href="/">
              <p className="font-extrabold">Get Involved</p>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
