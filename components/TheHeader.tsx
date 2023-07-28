import { Navigation } from "./Navigation";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

function TheHeader() {
  return (
    <header>
      <Navigation navLinks={navItem} />
    </header>
  );
}

export { TheHeader };
