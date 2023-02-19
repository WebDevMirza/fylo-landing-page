import { Raleway } from "@next/font/google";
import { useEffect, useRef, useState } from "react";
const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

const Forms = ({ changeText }) => {
  const [error, setError] = useState(false);
  const [emailId, setEmailID] = useState("");
  const getText = useRef();
  const [submitionTime, setSubmitionTime] = useState(0);

  let regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  useEffect(() => {
    if (submitionTime == 1) {
      regex.test(getText.current.value) ? setError(false) : setError(true);
    }
    console.log(submitionTime);
  }, [emailId]);

  const formSubmition = (e) => {
    e.preventDefault();
    setSubmitionTime(1);

    const success = () => {
      setError(false);
      alert("We've sent an email! I'm joking don't worry.");
    };

    !regex.test(getText.current.value) ? setError(true) : success();
  };

  return (
    <>
      <form className={raleway.className} onSubmit={formSubmition} noValidate>
        <div className="email">
          <input
            className={error ? "error-input" : "success-input"}
            ref={getText}
            type="email"
            name="email"
            id="email"
            value={emailId}
            autoComplete="off"
            onChange={(e) => {
              setEmailID(e.target.value);
            }}
            placeholder="Enter your email..."
          />
          <p className={error ? "error-text" : "success-text"}>Please check your email</p>
        </div>
        <div className="submit">
          <button ref={changeText} className="btn" type="submit">
            Get Started
          </button>
        </div>
      </form>
    </>
  );
};

export default Forms;
