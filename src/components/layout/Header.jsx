const Header = () => {
  const MENU_LIST_ITEMS = ["Home", "Services", "About", "Log In"];
  return (
    <div className="pt-6 px-2">
      <div className="flex justify-between items-center bg-white shadow-md rounded-[50px] px-4 py-3 max-w-7xl mx-auto">
        <button className="bg-[#004E68] transition-colors duration-300 hover:bg-[#002e3d] text-white py-2.5 px-7.5 rounded-[50px] text-sm cursor-pointer">
          Download App
        </button>
        <nav className="flex items-center gap-12.5">
          {MENU_LIST_ITEMS.map((item) => (
            <a
              className="text-gray-600 font-bold transition-colors duration-300 ease-out
   hover:text-red-500 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>
        <img
          className="cursor-pointer"
          href="#"
          src="../../../public/images/logo.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
