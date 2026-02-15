function Header({
  setIsAdminView,
}: {
  setIsAdminView: (value: boolean) => void;
}) {
  return (
    <div className="navbar  bg-black shadow-sm">
      <div className="navbar-center w-full items-center justify-center">
        <a className="btn btn-ghost  text-xl">Administration</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

export default Header;
