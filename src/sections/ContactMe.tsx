import React, { useState } from "react";
import { object, z, ZodError } from "zod";

// Components
import PrimaryButton from "../components/PrimaryButton";

// Assets
import linesDonut_PNG from "../assets/graphics/lines-donut.png";
import Typography from "../components/Typography";
import FormField from "../components/FormField";

// Form data schema
const formSchema = z.object({
  name: z.string().min(3).max(254),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

// Infer form data types from zod schema
type FormDataTypes = z.infer<typeof formSchema>;

const ContactMe: React.FC = () => {
  // Form data
  const [formData, setFormData] = useState<FormDataTypes>({
    name: "",
    email: "",
    message: "",
  });

  // Form errors
  const [formErrors, setFormErrors] = useState<FormDataTypes>({
    name: "",
    email: "",
    message: "",
  });

  //
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      formSchema.parse(formData);

      console.log(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(() => {
          const tempVarForErrors: FormDataTypes = {
            name: "",
            email: "",
            message: "",
          };

          Object.entries(error.formErrors.fieldErrors).forEach(
            ([key, value]) => {
              if (value)
                tempVarForErrors[key as keyof typeof formData] = value[0];
            },
          );

          return tempVarForErrors;
        });

        //
      }
    }
  };

  // Render the section
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
          onSubmit={handleSubmit}
          method="POST"
          className="mt-[50px] basis-[445px] md:mt-[48px] xl:mt-0"
        >
          {/*  */}

          <div className="space-y-8">
            <FormField
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              handleChange={handleChange}
            />

            <FormField
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              handleChange={handleChange}
              customClasses="mt-[50px]"
            />

            <FormField
              tagname="textarea"
              name="message"
              placeholder="message"
              value={formData.message}
              handleChange={handleChange}
              customClasses="mt-[50px] !h-[107px]"
            />

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
