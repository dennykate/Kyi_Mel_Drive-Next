interface PropsType extends React.HTMLAttributes<HTMLDivElement> {}

const SideBanner = ({ className, ...props }: PropsType) => {
  return <div className={`min-w-[250px] h-[600px] border border-black ${className} flex justify-center
  items-center border-opacity-50`}>
    Side Banner Ads
  </div>;
};

export default SideBanner;
