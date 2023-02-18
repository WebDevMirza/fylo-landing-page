import Styles from "../styles/Hero.module.css";
import HeroImg from "../assets/images/illustration-1.svg";
import Image from "next/image";
import Forms from "@/utility/Forms";

const Hero = () => {
  return (
    <>
      <div className="layout">
        <div className={Styles["hero"]}>
          <div className={Styles["hero-img"]}>
            <Image src={HeroImg} alt="hero img" priority />
          </div>
          <div className={Styles["hero-body"]}>
            <h1 className="h1">All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores your most important files in one secure location. Access them wherever you need, share and
              collaborate with friends, family, and co-workers.
            </p>
            <Forms />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
