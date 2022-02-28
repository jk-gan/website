import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto mt-16 text-lg font-bold mb-4 w-11/12 2xl:w-8/12 xl:w-8/12 lg:w-10/12 md:w-10/12">
      <ul className="flex flex-wrap">
        <li className="inline mr-9 mb-2 sm:mb-0">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </li>
        <li className="inline mr-9 mb-2 sm:mb-0">
          <Link href="/">
            <a className="link">About</a>
          </Link>
        </li>
        <li className="inline mr-9 mb-2 sm-mb-0">
          <Link href="/blog">
            <a className="link">Writings</a>
          </Link>
        </li>
        <li className="inline mr-9 mb-2 sm:mb-0">
          <Link href="/tags">
            <a className="link">Tags</a>
          </Link>
        </li>
        <li className="inline mb-2 sm:mb-0">
          <Link href="/contact">
            <a className="link hover:text-cyan-400">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
