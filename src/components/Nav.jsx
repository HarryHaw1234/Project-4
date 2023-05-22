export default function Nav(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <h2>Tenzies Game</h2>
      <div className="toggler">
      <p className="toggler--light">Light</p>
      <div className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
      </div>
      <p className="toggler--dark">Dark</p>
    </div>
    </nav>
  );
}
