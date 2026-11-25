function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">A SIMPLE WAY TO GET THINGS DONE</p>
        <h1>Make your work<br /><span>flow better.</span></h1>
        <p className="hero-text">
          Plan your projects, organise your tasks, and make progress every day.
          Everything you need, all in one place.
        </p>
        <div className="hero-buttons">
          <a className="button button-dark" href="#contact">Get started</a>
          <a className="text-link" href="#features">Explore features →</a>
        </div>
      </div>

      <div className="hero-preview">
        <div className="preview-top">
          <div><span className="status-dot"></span> Your workspace</div>
          <span>•••</span>
        </div>
        <h3>Good morning, Alex 👋</h3>
        <p>Here is your progress this week.</p>
        <div className="preview-progress">
          <div><span>Website redesign</span><b>75%</b></div>
          <div className="progress-track"><span style={{ width: '75%' }}></span></div>
        </div>
        <div className="preview-progress">
          <div><span>Mobile app</span><b>45%</b></div>
          <div className="progress-track"><span style={{ width: '45%' }}></span></div>
        </div>
        <div className="preview-note">✓ You completed 4 tasks today</div>
      </div>
    </section>
  );
}

export default Hero;