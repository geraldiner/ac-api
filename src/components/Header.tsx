import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-5 md:px-10 gap-10 border-b">
      <div className="w-1/2">
        <Link href="/">Animal Crossing API</Link>
      </div>
      <nav className="justify-end">
        <ul className="list-style-none flex gap-5">
          <li className="inline-block">
            <Link href="/about">About</Link>
          </li>
          <li className="inline-block">
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
