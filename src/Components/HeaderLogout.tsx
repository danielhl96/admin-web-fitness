// This is the header component used in the login view. It contains the title of the application and a logout button. The header is responsive and adapts to different screen sizes.

function Header({}: {}) {
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
