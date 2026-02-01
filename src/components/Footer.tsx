import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-20 flex items-center justify-between p-5 md:px-10 gap-10 border-t">
      <div className="max-w-6xl mx-auto">
        <p>
          Created by Geraldine. All Animal Crossing content are trademarks of
          Nintendo. Check out the <Link href="/devlog">devlog</Link> to see the
          progress of this project.
        </p>
      </div>
    </footer>
  );
}
