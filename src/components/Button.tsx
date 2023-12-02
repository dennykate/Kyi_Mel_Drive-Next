interface PropsType {
  children: React.ReactNode;
}

const Button = ({ children }: PropsType) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-600 to-indigo-800 px-10 py-3 text-xl text-white rounded-full 
     overflow-hidden hover:from-indigo-800 hover:to-indigo-800 active:translate-y-1"
    >
      {children}
    </button>
  );
};

export default Button;
