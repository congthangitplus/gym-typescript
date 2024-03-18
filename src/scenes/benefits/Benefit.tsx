import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-6 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rouded-full border-2 rounded-full border-red-300 bg-red-300 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-300 underline hover:text-primary-500"
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </div>
  );
};

export default Benefit;
