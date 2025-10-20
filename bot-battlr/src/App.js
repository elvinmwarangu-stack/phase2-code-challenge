import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import Army from './components/Army';

const API = 'http://localhost:8001/bots';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch bots from json-server
  useEffect(() => {
    setLoading(true);
    fetch(API)
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch bots');
        return r.json();
      })
      .then(data => setBots(data))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  // Enlist: add to army if not already present
  const enlist = (bot) => {
    if (army.find(b => b.id === bot.id)) return;
    setArmy(prev => [...prev, bot]);
  };

  // Release: remove from army (frontend only)
  const release = (botId) => {
    setArmy(prev => prev.filter(b => b.id !== botId));
  };

  // Discharge: DELETE from backend and remove from both lists
  const discharge = async (botId) => {
    if (!confirm('Are you sure you want to permanently discharge this bot?')) return;
    try {
      const res = await fetch(${API}/${botId}, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      setBots(prev => prev.filter(b => b.id !== botId));
      setArmy(prev => prev.filter(b => b.id !== botId));
    } catch (e) {
      alert('Could not delete bot: ' + e.message);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Bot Battlr</h1>
        <div className="small">Connected: {bots.length} bots</div>
      </div>

      <div className="grid">
        <div>
          {loading && <p>Loading bots...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <BotCollection bots={bots} onEnlist={enlist} onDischarge={discharge} />
        </div>

        <aside>
          <Army army={army} onRelease={release} />
          <div style={{ height: 18 }} />
          <div className="card">
            <h3>Instructions</h3>
            <p className="instructions">Click a bot card to enlist it in your army. Click the red × on a bot card to permanently discharge it (removes it from backend).</p>
            <div className="footer-note">Note: Release is frontend-only; Discharge removes the bot from the server (json-server updates db.json).</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;