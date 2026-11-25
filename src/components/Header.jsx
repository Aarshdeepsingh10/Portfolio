function Header({ goToDashboard }) {
  return (
    <header className="header">
      <a className="logo" href="#">taskflow<span>.</span></a>

      <nav className="navigation">
        <a href="#features">Features</a>
        <a href="#faq">FAQs</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="button button-outline" onClick={goToDashboard}>
        Open dashboard
      </button>
    </header>
  );
}

export default Header;