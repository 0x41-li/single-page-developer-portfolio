import React from "react";

// Components
import PrimaryButton from "../components/PrimaryButton";

// Assets
import linesDonut_PNG from "../assets/graphics/lines-donut.png";
import Typography from "../components/Typography";

const ContactMe: React.FC = () => {
  return (
    <section
      id="contact-form"
      className="relative mt-20 bg-hard-gray pb-[87px] md:mt-[100px] md:pb-[92px] xl:mt-[139px]"
    >
      {/* background graphic */}
      {/* the lines donut graphic */}
      <div
        aria-hidden
        className="absolute -left-[343px] top-[436px] md:-left-[368px] md:top-[547px] xl:-left-[205px] xl:top-[327px]"
      >
        <picture>
          <img
            src={linesDonut_PNG}
            alt="A donut shaped graphic, but the shape is built only using four circled lines each one on the top of the other as a stack"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[343px] pt-[60px] md:max-w-[445px] xl:flex xl:max-w-[1110px] xl:justify-between xl:pt-[84px]">
        {/* Section's head */}
        <div className="basis-[445px]">
          <Typography
            tagName="h2"
            styles="xl"
            customClasses="text-center xl:text-left"
          >
            Contact
          </Typography>

          <Typography customClasses="mt-5 text-center xl:mt-[36px] xl:text-left">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </Typography>
        </div>

        {/* Contact form */}
        <form
          action="#"
          method="POST"
          className="mt-[50px] basis-[445px] md:mt-[48px] xl:mt-0"
        >
          {/*  */}

          <div className="space-y-8">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="block h-[43px] w-full border-b border-white bg-transparent bg-opacity-0 pb-4 pl-6 font-medium placeholder:text-base placeholder:uppercase placeholder:leading-[26px] placeholder:-tracking-[0.2px] focus:outline-none"
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
              <PrimaryButton>send message</PrimaryButton>
            </div>

            {/*  */}
          </div>

          {/*  */}
        </form>

        {/*  */}
      </div>
    </section>
  );
};

export default ContactMe;
