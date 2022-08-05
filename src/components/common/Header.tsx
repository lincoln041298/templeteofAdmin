import Logo from "public/Logo/logo.svg";

export interface HeaderProps {
  name?: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <div className="top-bar-boxed bg-colorprimary h-[70px] md:h-[65px] mt-12 md:mt-0 sm:-mx-8 md:-mx-0 lg:mx-3 px-3 elative md:fixed md:inset-x-0 rounded-xl ">
      <div className="h-full flex items-center">
        <a href="#" className="logo -intro-x md:flex xl:w-[180px] block">
          <img src={Logo} className="logo__image w-6" alt="Logo demo" />
          <span className="logo__text text-white text-lg ml-3"> Enigma </span>
        </a>
        <nav aria-label="breadcrumb" className="-intro-x mr-auto">
          <ol className="breadcrumb breadcrumb-light text-white font-light items-center flex">
            <li className="breadcrumb-item">
              <a href="#">Application</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
