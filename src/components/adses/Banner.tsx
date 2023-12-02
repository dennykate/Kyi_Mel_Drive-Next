interface PropsType extends React.HTMLAttributes<HTMLDivElement> {}

const Banner = ({ className, ...props }: PropsType) => {
  return (
    <div {...props} className={`w-full h-[200px] bg-red-300 ${className}`} />
  );
};

export default Banner;
