import { SignOutButton, SignedIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function AdminHeader() {
  return (
    <header className="w-full p-5 md:px-10 gap-10 border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between ">
        <div className="w-1/2">
          <Link href="/admin">Animal Crossing API</Link>
        </div>
        <nav className="justify-end">
          <ul className="list-style-none flex gap-5">
            <li className="inline-block">
              <Link href="/about">About</Link>
            </li>
            <li className="inline-block">
              <Link href="/docs">Docs</Link>
            </li>
            <li className="inline-block">
              <Link href="/admin/upload">Upload</Link>
            </li>
            <li className="inline-block">
              <Link href="/admin/register">Register</Link>
            </li>
            <SignedIn>
              <li>
                <SignOutButton>
                  <button className="cursor-pointer">Sign Out</button>
                </SignOutButton>
              </li>
            </SignedIn>
          </ul>
        </nav>
      </div>
    </header>
  );
}
