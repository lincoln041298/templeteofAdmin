import Logo from "public/Logo/logo.svg";
import search from "public/svg/search.svg";
import bell from "public/svg/bell.svg";
import { Avatar } from "./Avatar";

export interface HeaderProps {
  name?: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <div className="top-bar-boxed bg-colorprimary h-[70px] md:h-[65px] mt-12 md:mt-0 sm:-mx-8 md:mx-3 px-3 elative md:fixed md:inset-x-0 rounded-xl ">
      <div className="h-full flex justify-between">
        <div className="flex items-center">
          <a href="#" className="logo -intro-x md:flex xl:w-[180px] block">
            <img src={Logo} className="logo__image w-6" alt="Logo demo" />
            <span className="logo__text text-white text-lg ml-3"> Enigma </span>
          </a>
          <nav aria-label="breadcrumb" className="-intro-x mr-auto">
            <ol className="breadcrumb breadcrumb-light text-white font-light items-center flex">
              <li className="breadcrumb-item">
                <a href="#">Application</a>
              </li>
              <li className="breadcrumb-item active ml-5" aria-current="page">
                Dashboard
              </li>
            </ol>
          </nav>
        </div>
        <div className="right-side mr-3 sm:mr-6 flex items-center">
          <form className="relative">
            <input
              type="text"
              className="rounded-full px-2 py-1 text-lessxs w-56 focus:w-72 transition-width duration-300 ease-in-out placeholder:text-lessxs placeholder:opacity-50 focus-visible:outline-none"
              placeholder="search..."
            />
            <p className="absolute right-1.5 top-2 w-[0.9rem] opacity-50">
              <img src={search} alt="search bar" />
            </p>
          </form>
          <p className="dot-red">
            <img className="mx-5 pt-1 w-3" src={bell} alt="notification" />
          </p>
         <Avatar/>
        </div>
      </div>
    </div>
  );
}
