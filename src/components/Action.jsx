import Forms from "@/utility/Forms";
import { useEffect, useRef } from "react";
import Styles from "../styles/Action.module.css";

const Action = () => {
  const changeText = useRef();

  useEffect(() => {
    changeText.current.textContent = "Get Started for Free";
  }, []);

  return (
    <>
      <div className={Styles["bg-action"]}>
        <div className="layout">
          <div className={Styles["action"]}>
            <div className={Styles["action-body"]}>
              <h1 className="h2">Get early access today</h1>
              <p>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
              </p>
            </div>

            <div className={Styles["action-form"]}>
              <Forms changeText={changeText} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
