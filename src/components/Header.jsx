import Image from "next/image";
import Logo from "../assets/images/logo.svg";

import Styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className="layout">
        <div className={Styles["header"]}>
          <div className="logo">
            <Image src={Logo} alt="Fylo logo" priority />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
