interface PropsType extends React.HTMLAttributes<HTMLDivElement> {}

const Banner = ({ className, ...props }: PropsType) => {
  return (
    <div {...props} className={`w-full h-[120px] border border-black ${className} flex justify-center
     items-center border-opacity-50`} >
      This is Banner Ads ( Size must be 728×90 px )
    </div>
  );
};

export default Banner;
 