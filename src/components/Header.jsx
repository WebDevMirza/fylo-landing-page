import Image from "next/image";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <div className="layout">
        <div className="logo">
          <Image src={Logo} alt="Fylo logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
