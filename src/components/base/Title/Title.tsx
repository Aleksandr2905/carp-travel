interface ITitleProps {
  title1: string;
  title2: string;
  className?: string;
}

const Title = ({ title1, title2, className }: ITitleProps) => {
  return (
    <h2
      className={`text-[40px] font-thin leading-[1.4] tracking-[-1.6px] uppercase ${className}`}
    >
      {title1}&#32;<span className="font-medium">{title2}</span>
    </h2>
  );
};

export default Title;