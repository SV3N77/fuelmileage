import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-300 p-5">
      <nav className="container mx-auto flex flex-col gap-4 text-lg text-white md:flex-row">
        <Link href="/">
          <h1 className="grow text-3xl font-semibold">Random Stuff</h1>
        </Link>
      </nav>
    </header>
  );
}
