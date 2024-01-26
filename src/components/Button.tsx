interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, disabled, className, ...props }: PropsType) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`bg-gradient-to-r from-blue-600 to-indigo-800 w-[200px] h-[60px] text-xl text-white rounded-md 
     overflow-hidden ${className} flex justify-center items-center ${
        !disabled
          ? "hover:from-indigo-800 hover:to-indigo-800 active:translate-y-1 bg-opacity-100"
          : "bg-opacity-70"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
