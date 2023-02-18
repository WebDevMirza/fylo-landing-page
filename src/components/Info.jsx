import Styles from "../styles/Info.module.css";
import Image from "next/image";
import InfoImg from "../assets/images/illustration-2.svg";
import ProfileImg from "../assets/images/avatar-testimonial.jpg";

const Info = () => {
  return (
    <>
      <div className={Styles["bg-info"]}>
        <div className={Styles["bg-extra"]}>
          <div className="layout">
            <div className={Styles["info"]}>
              <div className={Styles["info-img"]}>
                <Image src={InfoImg} alt="Three people indicating production fantasy" priority />
              </div>
              <div className={Styles["info-body"]}>
                <h1 className="h2">Stay productive, wherever you are</h1>
                <p>
                  Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                  storage needs.
                </p>
                <p>
                  Securely share files and folders with friends, family and colleagues for live collaboration. No email
                  attachments required!
                </p>
                <a href="#">See how Fylo works</a>
                <div className={Styles["review-card"]}>
                  <div className={Styles["review-body"]}>
                    <p>
                      Fylo has improved our team productivity by an order of magnitude. Since making the switch our team
                      has become a well-oiled collaboration machine.
                    </p>
                  </div>
                  <div className={Styles["review-profile"]}>
                    <div className={Styles["profile-photo"]}>
                      <Image src={ProfileImg} />
                    </div>
                    <div className={Styles["profile-body"]}>
                      <p className={Styles["name"]}>Kyle Burton</p>
                      <p>Founder & CEO, Huddle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
