import { Raleway } from "@next/font/google";
const raleway = Raleway({ weight: ["400", "700"], subsets: ["latin"] });

const Forms = () => {
  return (
    <>
      <form className={raleway.className}>
        <div className="email">
          <input type="email" name="email" id="email" placeholder="Enter your email..." />
        </div>
        <div className="submit">
          <button className="btn" type="submit">
            Get Started
          </button>
        </div>
      </form>
    </>
  );
};

export default Forms;
