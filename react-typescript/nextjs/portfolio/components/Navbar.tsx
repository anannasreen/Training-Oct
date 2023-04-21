import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <p>
        <span className="hover:text-green" onClick={() => setActiveItem(name)}>
          {name}
        </span>
      </p>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-green border-green">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />

        {/* {activeItem !== "About" && (
          <Link href="/">
            <p>
              <span onClick={() => setActiveItem("About")}>About</span>
            </p>
          </Link>
        )}

        {activeItem !== "Projects" && (
          <Link href="/projects">
            <p>
              <span onClick={() => setActiveItem("Projects")}>Projects</span>
            </p>
          </Link>
        )}

        {activeItem !== "Resume" && (
          <Link href="/resume">
            <p>
              <span onClick={() => setActiveItem("Resume")}>Resume</span>
            </p>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
