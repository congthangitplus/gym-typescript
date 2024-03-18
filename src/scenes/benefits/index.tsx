import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { SelectedPage, BenefitsType } from '../../shared/types';
import { motion } from 'framer-motion';
import HText from '../../shared/HText';
import Benefit from './Benefit';
import ActionButton from '../../shared/ActionButton';
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'Sate of the Art Facilities',
    description:
      'Neque adipiscing ame ame enim. Feugiat dolor enum fementum in a in letus pellentqoque',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100s of Diverse Classes',
    description:
      'Neque adipiscing ame ame enim. Feugiat dolor enum fementum in a in letus pellentqoque',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Neque adipiscing ame ame enim. Feugiat dolor enum fementum in a in letus pellentqoque',
  },
];

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equiment, trainers and
            classes to get you to your ultimate fitness goals with
            ease. We provide true care into each and every member.
          </p>
        </div>

        {/* BEBEFITS */}
        <div className="items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitsType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-center gap-20 md:flex md:mt-18">
          {/* GRAPHICS */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="befor:absolute before:-top-20 before:-left-30 before:z-[1] before:content-abstractwaves before:-ml-10">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                    <span className="text-primary-300">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            {/* DESCRIPT */}
            <div className="">
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis
                pontenti amet egestas ultries consetetur adipiscing
                ultries enim. Pulvinar fames vitae vitae quis. Quis
                amet vulputate tincidunt at in bulla nec. Consequat
                sed facillisis dui sit egestas ultrices tellus.
                Ullamporper arcu id pertium saien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fingllia ased at suspendisse ut enim volupat. Rhocus
                vel est tellus quam oirttitor. Mauris velit euismod
                elementum arcu neque facllisi. Amet semper tortor
                facllisis metus nibh. Rhoncus sit enim mattis odio in
                risus nunc
              </p>
            </div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
