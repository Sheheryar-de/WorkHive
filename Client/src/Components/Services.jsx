function Services({ logo, title }) {
  return (
    <div className="w-[123px] h-[135px] flex flex-col items-center justify-start cursor-pointer transform transition-transform duration-300 hover:scale-110">
      <img src={logo} alt="Logo" />
      <h2 className="text-center text-[rgba(55,20,0,1)] font-sans font-semibold text-[18px]">
        {title}
      </h2>
    </div>
  );
}

export default Services;
