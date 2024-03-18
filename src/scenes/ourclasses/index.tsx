import { motion } from 'framer-motion';
import { SelectedPage, ClassType } from '../../shared/types';
import HText from '../../shared/HText';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import Class from './Class';

const classe: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    description:
      'Fingilla a sed at suspendisse ut enum volupat. Rhoncus vel est tellus quam porttior. Mauris velit euismod elementum arcu neque facllisl. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in rius nunc',
    image: image1,
  },
  {
    name: 'Training Classes',
    image: image2,
  },
  {
    name: 'Fitness Classes',
    description:
      'Fingilla a sed at suspendisse ut enum volupat. Rhoncus vel est tellus quam porttior. Mauris velit euismod elementum arcu neque facllisl. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in rius nunc',
    image: image3,
  },
  {
    name: 'Weight Classes',
    image: image4,
  },
  {
    name: 'Adventure Classes',
    description:
      'Fingilla a sed at suspendisse ut enum volupat. Rhoncus vel est tellus quam porttior. Mauris velit euismod elementum arcu neque facllisl. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in rius nunc',
    image: image5,
  },
  {
    name: 'Yoga Classes',
    description:
      'Fingilla a sed at suspendisse ut enum volupat. Rhoncus vel est tellus quam porttior. Mauris velit euismod elementum arcu neque facllisl. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in rius nunc',
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full py-40 bg-primary-200">
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPage.OurClasses)
        }
      >
        <div className="mx-auto w-5/6">
          {/* TITLE  DESCRIPT*/}
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fingilla a sed at suspendisse ut enum volupat. Rhoncus
              vel est tellus quam porttior. Mauris velit euismod
              elementum arcu neque facllisl. Amet semper tortor
              facilisis metus nibh. Rhoncus sit enim mattis odio in
              rius nunc
            </p>
          </div>
        </div>
        <div className="mt-10 h-[353px]  w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classe.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
