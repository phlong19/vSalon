function Button({ children, type = "primary" }) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-gradient-to-r from-primary to-secondary font-medium text-white"
          : "border-2 border-primary bg-transparent text-primary"
      } h-[38px] w-[115px] rounded-[33px] px-3 py-1.5 text-base leading-[25px] hover:shadow-btn hover:shadow-primary`}
    >
      {children}
    </button>
  );
}

export default Button;
