function Button({ children, type = "primary", to }) {
  if (to) {
    return (
      <a
        href={to}
        className={
          "ml-3.5 block h-[48px] w-[242px] rounded-[36px] bg-primary px-8 pb-2 pt-2.5 text-xl font-medium leading-150 text-white transition-all duration-300 hover:shadow-btn hover:shadow-primary md:ml-2"
        }
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${
        type === "primary"
          ? "bg-gradient-to-r from-primary to-secondary font-medium text-white"
          : "border-2 border-primary bg-transparent text-primary"
      } h-[38px] w-[115px] rounded-[33px] px-3 py-1.5 text-base leading-[25px] transition-shadow duration-300 hover:shadow-btn hover:shadow-primary`}
    >
      {children}
    </button>
  );
}

export default Button;
