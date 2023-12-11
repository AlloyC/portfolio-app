import footerImage from "../images/footer-bg@3x.png";
import mail from "../images/icons8-gmail-96.png";
import telegram from "../images/icons8-telegram-logo-96.png";
import phone from "../images/icons8-phone-96.png";
import twitter from "../images/icons8-twitter-96.png";
import instagram from "../images/icons8-instagram-96.png";
import github from "../images/icons8-github-96.png";

const Footer = () => {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative translate-x-[-50%] left-1/2 grid grid-row-4 md:grid-row-3 grid-cols-1 md:grid-cols-2 max-w-5xl p-5">
        <h2 className="text-blue-500 text-3xl font-semibold italic p-1 mb-5 pl-5">
          Contact Me
        </h2>
        <form
          action="https://formspree.io/f/mgejgnbd"
          method="POST"
          className="mb-8 min-w-[80%] md:row-start-1 md:row-end-4 flex flex-col rounded-lg border-2 border-gray-200 px-4 py-5 text-gray-200"
        >
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            required
            type="text"
            className="bg-gray-600 border-gray-500 border-2 rounded p-2 mb-2"
          />
          <label htmlFor="email">Email address: </label>
          <input
            name="email"
            required
            type="email"
            className="bg-gray-600 border-gray-500 border-2 rounded p-2 mb-2"
          />
          <label htmlFor="name">Message: </label>
          <textarea
            name="message"
            required
            className="bg-gray-600 border-gray-500 border-2 rounded p-2 mb-2"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-blue-400 rounded-md border-2 border-gray-200 px-4 m-5 text-gray-100 font-bold py-1 md:w-fit mx-0 "
          />
        </form>
        <div className="flex flex-col justify-start items-start w-fit md:row-start-2 md:row-end-3 col-start-1 col-end-2 md:px-9">
          <div className="flex justify-center items-center gap-2">
            <img src={mail} className="h-5" alt="mail icon" />
            <p className="text-gray-300 md:text-lg font-semibold">
              Email: jonnyscience08@gmail.com
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={phone} className="h-5" alt="mail icon" />
            <p className="text-gray-300 md:text-lg font-semibold">
              Phone: +2349053778947
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={telegram} className="h-5" alt="mail icon" />
            <p className="text-gray-300 md:text-lg font-semibold">
              Telegram: t.me/jonnyAlloy
            </p>
          </div>
          <div className="flex justify-center items-center w-full pt-4">
            <a
              href="https://twitter.com/JonnyAlloy"
              rel="noreferrer"
              target="_blank"
            >
              <img src={twitter} className="h-8" alt="twitter icon" />
            </a>
            <a
              href="https://instagram.com/jonny__science"
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagram} className="h-8" alt="instagram icon" />
            </a>
            <a
              href="https://github.com/AlloyC"
              rel="noreferrer"
              target="_blank"
            >
              <img src={github} className="h-8" alt="github icon" />
            </a>
          </div>
        </div>
        <p className="text-gray-200 md:text-xl text-center align-middle font-semibold">
          jonnyAlloy &copy; copyright 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
