import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import HText from '../../shared/HText';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '../../assets/ContactUsPageGraphic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    'mt-5 w-full rounded-lg bg-primary-200 px-5 py-3 placeholder-white';
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto pt-24 w-5/6 pb-32">
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPage.ContactUs)
        }
      >
        <div className="md:w-3/5 items-center justify-center ">
          <HText>
            <span className="text-primary-300">JOIN NOW</span>
            {` `} TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in
            feugiat nisl sapien vel rhoncus. Placerat at in enim
            pellentesque. nulla adipiscing leo agestas nisi elit risus
            sit. Nunc cursus saguttis
          </p>
        </div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div className="mt-10 basis-3/5 md:mt-0">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/congthangitplus@gmail.com"
              method="POST"
            >
              {/* NAME */}
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type == 'required' &&
                    'This field is required'}
                  {errors.name.type == 'maxLength' &&
                    'Max length is 100 char'}
                </p>
              )}
              {/* EMAIL */}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type == 'required' &&
                    'This field is required'}
                  {errors.email.type == 'pattern' &&
                    'Max length is 100 char'}
                </p>
              )}
              {/* MESSAGE */}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type == 'required' &&
                    'This field is required'}
                  {errors.message.type == 'maxLength' &&
                    'Max length is 2000 char'}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-primary-500 px-10 py-2"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="relative mt-16 basis-2/5 md:mt-0">
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-10]">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
