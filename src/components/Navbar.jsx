const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-64 h-full bg-[#29a1ff] text-white p-4 flex flex-col">
      <div className="logo font-bold text-xl mb-3">
        <h1>Dry Dock</h1>
      </div>
      <ul className="menu flex flex-col gap-2 text-[#d2ebff]">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Specification Groups</a>
        </li>
        <li>
          <a href="#">Work Order Master</a>
        </li>
        <li>
          <a href="#">Checklist</a>
        </li>
        <li>
          <a href="#">Dry Docks</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
