import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-slate-100 reveal active">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6">
        
        {/* LEFT — BRAND */}
        <Link href="/" className="flex items-center">
          <div className="relative w-28 h-10 sm:w-32 sm:h-12">
            <Image
              src="/logo_new.jpeg"
              alt="AnkVidya Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* RIGHT — INFO */}
        <div className="text-sm text-slate-500 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center">
          <p className="text-center sm:text-right">
            For collaboration or feedback write to:{" "}
            <a
              href="mailto:support@ankvidya.in"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              support@ankvidya.in
            </a>
          </p>
          <span className="hidden sm:block text-gray-300">|</span>
          <p className="">
            © 2025 AnkVidya.in
          </p>
        </div>

      </div>
    </footer>
  );
}
