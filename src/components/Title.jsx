'use client';
    import Link from 'next/link';

export default function Title() {
  return (
    <Link href="/" className="Link">
              <style jsx>{`
      h1 {
        text-decoration: none;
        color: black;
        text-align:center;
      }
    `}</style>
      <h1 className="Title">App de Deliver</h1>


    </Link>
  );
}