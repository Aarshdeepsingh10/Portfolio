import { useState } from 'react';

function Dashboard({ cards, addCard, deleteCard, goToWebsite }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    addCard({
      title: title,
      description: description,
      icon: '✦'
    });

    setTitle('');
    setDescription('');
  }

  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <a className="logo" href="#" onClick={(event) => event.preventDefault()}>taskflow<span>.</span></a>
        <p className="dashboard-label">MENU</p>
        <div className="dashboard-nav-item active">▦ &nbsp; Overview</div>
        <div className="dashboard-nav-item">▤ &nbsp; Feature cards</div>
        <button className="dashboard-back" onClick={goToWebsite}>← Back to website</button>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-heading">
          <div>
            <p className="eyebrow">CLIENT DASHBOARD</p>
            <h1>Manage your website</h1>
            <p>Add new feature cards or remove existing ones.</p>
          </div>
          <button className="button button-outline" onClick={goToWebsite}>View website ↗</button>
        </div>

        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <span>Total feature cards</span>
            <strong>{cards.length}</strong>
          </div>
          <div className="dashboard-stat">
            <span>Website status</span>
            <strong className="live">Live</strong>
          </div>
        </div>

        <div className="dashboard-columns">
          <form className="dashboard-panel" onSubmit={handleSubmit}>
            <h2>Add a feature card</h2>
            <p className="panel-description">The new card will appear on your homepage.</p>

            <label>
              Card title
              <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g. Save time" required />
            </label>

            <label>
              Description
              <textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe this feature..." rows="4" required />
            </label>

            <button className="button button-dark" type="submit">+ Add card</button>
          </form>

          <section className="dashboard-panel">
            <h2>Your feature cards</h2>
            <p className="panel-description">These cards are currently on your website.</p>

            {cards.map((card) => (
              <div className="managed-card" key={card.id}>
                <div className="managed-card-icon">{card.icon}</div>
                <div className="managed-card-text">
                  <strong>{card.title}</strong>
                  <span>{card.description}</span>
                </div>
                <button className="delete-button" onClick={() => deleteCard(card.id)}>Delete</button>
              </div>
            ))}

            {cards.length === 0 && <p className="empty-message">No cards yet. Add your first one.</p>}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;