function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Reel Index home">
          <span className="wordmark-mark" aria-hidden="true">R</span>
          <span>REEL INDEX</span>
        </a>
        <span className="topbar-note">YOUR PERSONAL FILM ARCHIVE</span>
      </header>

      <section className="welcome" aria-labelledby="welcome-title">
        <p className="eyebrow">THE COLLECTION STARTS HERE</p>
        <h1 id="welcome-title">Every film<br />has a place.</h1>
        <p className="welcome-copy">
          Your movie database is ready to take shape.
        </p>
      </section>

      <footer className="statusbar">
        <span>COLLECTION 001</span>
        <span>BUILT FOR THE LOVE OF FILM</span>
      </footer>
    </main>
  )
}

export default App