import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        
        {/* LEFT — LOGO IMAGE ONLY */}
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-10 sm:w-32 sm:h-12">
            <Image
              src="/logo_new.jpeg"
              alt="AnkVidya Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* RIGHT — LOGIN */}
        <Link
          href="https://app.ankvidya.in"
          className="text-sm font-semibold text-gray-700 hover:text-gray-900"
        >
          Log in
        </Link>

      </div>
    </header>
  );
}
