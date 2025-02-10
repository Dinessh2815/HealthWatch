"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="text-2xl font-bold mb-8 text-center">HealthWatch</div>
      <div className="space-y-2">
        <Link href="/">
          <div
            className={`p-3 rounded-lg transition-colors ${
              pathname === "/"
                ? "bg-[#E3FFFB] text-teal-600"
                : "hover:bg-gray-100"
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/message">
          <div
            className={`p-3 rounded-lg transition-colors ${
              pathname === "/message"
                ? "bg-[#E3FFFB] text-teal-600"
                : "hover:bg-gray-100"
            }`}
          >
            Message
          </div>
        </Link>
      </div>
    </nav>
  );
}
