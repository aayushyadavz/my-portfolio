const Contact = () => {
  return (
    <footer
      id="contact"
      className="text-colorText mt-[120px] bg-colorSecondary flex flex-col md:flex-row justify-evenly w-screen py-14 px-[5%] sm:px-[10%] gap-8 md:gap-3"
    >
      <div className="md:flex md:flex-col md:items-start">
        <h2 className="text-5xl sm:text-7xl font-bold tracking-custom2">
          Contact
        </h2>
        <p className="text-2xl sm:text-4xl font-normal tracking-custom3">
          Feel free to reach out!
        </p>
      </div>
      <ul className="flex flex-col items-start gap-3 md:gap-6">
        <li className="flex items-center gap-2 sm:gap-6">
          <img
            src="/assets/email-icon.png"
            alt="Email Icon"
            className="footer-icon"
          />
          <a
            href="mailto:ayushyadav24nov1234@gmail.com"
            target="_blank"
            className="text-colorText text-base sm:text-2xl font-light tracking-custom4 underline"
          >
            ayushyadav24nov1234@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2 sm:gap-6">
          <img
            src="/assets/linkedin-icon.png"
            alt="Linkedin Icon"
            className="footer-icon"
          />
          <a
            href="https://www.linkedin.com/in/aayushyadavz/"
            target="_blank"
            className="text-colorText text-base sm:text-2xl font-light tracking-custom4 underline"
          >
            linkedin.com/aayushyadavz
          </a>
        </li>
        <li className="flex items-center gap-2 sm:gap-6">
          <img
            src="/assets/github-icon.png"
            alt="Github Icon"
            className="footer-icon"
          />
          <a
            href="https://github.com/aayushyadavz"
            target="_blank"
            className="text-colorText text-base sm:text-2xl font-light tracking-custom4 underline"
          >
            github.com/aayushyadavz
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
