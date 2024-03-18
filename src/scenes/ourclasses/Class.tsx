type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `absolute z-10 h-[380px] w-[450px]
  items-center justify-center flex flex-col bg-primary-300 whitespace-normal
  text-center text-white transition duration-500 opacity-0 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
