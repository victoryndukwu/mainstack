function mainstackButton({ text, className, icon }) {
  return (
    <div className={`${className} flex justify-center items-center px-2 cursor-pointer`}>
      <button className="">{text}</button>
      <img className="ml-2" src={icon} alt="" />
    </div>
  );
}

export default mainstackButton;
