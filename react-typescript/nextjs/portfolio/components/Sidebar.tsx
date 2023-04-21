import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <img
        src="/images/IMG_20220425_141722_823.jpg"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Anan </span>
        Nasreen
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* //social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* //address */}

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2 col">
          <GoLocation />
          <span>Kerala, India</span>
        </div>
        <p className="my-2">anannasreen@gmail.com</p>
        <p className="my-2">1234569870 / 9876543210</p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:anannasreen@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;

