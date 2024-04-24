import React from "react";
import linesDonut_PNG from "../assets/graphics/lines-donut.png";

const ContactMe: React.FC = () => {
  return (
    <section className="relative mt-20 bg-hard-gray">
      {/* background graphic */}
      {/* the lines donut graphic */}
      <div aria-hidden className="absolute -left-[343px] top-[436px]">
        <picture>
          <img
            src={linesDonut_PNG}
            alt="A donut shaped graphic, but the shape is built only using four circled lines each one on the top of the other as a stack"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[343px] border-b border-white pb-[87px] pt-[60px]">
        {/* Section's head */}
        <div className="">
          <h2 className="text-center text-[40px] font-bold leading-none -tracking-[1.14px]">
            Contact
          </h2>
          <p className="mt-5 text-center text-base font-medium leading-[26px]">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact form */}
        <form action="#" method="POST">
          <div className="space-y-8">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="mt-[50px] block h-[43px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 font-medium placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="email"
              className="mt-[50px] block h-[43px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 font-medium placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:outline-none"
            />

            <textarea
              name="message"
              className="mt-[50px] block h-[107px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 text-base font-medium leading-[26px] placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:outline-none"
              placeholder="message"
            ></textarea>

            <div className="mt-6 flex justify-end md:mt-[34px] xl:mt-[66px]">
              <a
                className="relative inline-block h-[38px] font-bold leading-7 tracking-[2.29px] md:leading-[26px]"
                href="#contactme"
              >
                SEND MESSAGE
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-green" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
