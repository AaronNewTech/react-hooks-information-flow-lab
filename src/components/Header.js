// this includes the variable that is needed for state changes and the function that changes that variable
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
