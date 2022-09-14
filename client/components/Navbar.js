import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Coder</h1>
      </div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/coder-listing">
          <a>Coder-Listing</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
