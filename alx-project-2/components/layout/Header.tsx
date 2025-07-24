import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Posts" },
    { href: "/users", label: "users" },
  ];

  return (
    <header className="bg-blue-600 text-white px-8 py-4">
      <nav className="flex space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={`cursor-pointer hover:underline ${
                router.pathname === link.href ? "font-bold underline" : ""
              }`}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
