import logo from "../assets/images/logo.png";
import phone from "../assets/images/phone.png";
import star from "../assets/images/starrating.png";

const TopSection = () => {
  return (
    <div className="top-section bg-mainBG h-80	h-80">
      <nav className="basis-1/4 justify-between font-sans flex flex-row text-center sm:flex-row sm:text-left py-4 px-6 bg-mainBG shadow sm:items-baseline w-full">
        <img src={logo} className="md:ml-20" width="80" alt="logo"></img>
        <img src={phone} className="md:mr-20" width="40" alt="logo"></img>
      </nav>
      <div className="typography mt-6">
        <h1 className="font-sansBold font-bold md:text-5xl text-3xl text-white text-left md:text-center m-3">
          {" "}
          Almost there.
        </h1>
        <h1 className="font-merri font-medium md:text-5xl text-3xl text-white text-left md:text-center m-3">
          {" "}
          Let's get you covered.
        </h1>
      </div>
      <div className="rating flex flex-row justify-center relative">
        <img
          src={star}
          className="bg-green"
          style={{ height: "50px" }}
          alt="rating"
        ></img>
        <div className="round w-32 h-32 p-8 rounded-full md:right-24 right-8 md:top-8 top-16 bg-pink absolute">
          <p className="font-merri font-bold text-blue-800 rotate-6	"> Cancel at any time</p>

        </div>
      </div>
    </div>
  );
};
export default TopSection;
