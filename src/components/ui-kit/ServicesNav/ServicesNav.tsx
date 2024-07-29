interface IServicesNavProps {
  slides: { title: string }[];
  activeIndex: number;
  handleNavigationClick: (index: number) => void;
}

const ServicesNav = ({
  slides,
  handleNavigationClick,
  activeIndex,
}: IServicesNavProps) => {
  return (
    <ul className="flex flex-col gap-4 mt-6 mb-6 md:mt-0 xl:gap-6">
      {slides.map(({ title }, index) => (
        <li
          key={index}
          className={`flex items-center 
          ${activeIndex === index && 'services-active'}
        `}
        >
          <button
            type="button"
            onClick={() => handleNavigationClick(index)}
            aria-label={title}
            className={`flex text-xl text-left font-extralight leading-[17px] uppercase  w-[186px] md:text-[22px] xl:text-[28px] xl:w-[236px] xl:leading-6 hover:opacity-100 hover:ml-2 focus:opacity-100  focus:outline-white ${activeIndex === index ? 'flex font-medium opacity-100' : 'opacity-50'}`}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesNav;