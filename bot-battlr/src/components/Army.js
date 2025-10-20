import React from 'react';

export default function Army({ army, onRelease }) {
  return (
    <div className="card">
      <h2>Your Bot Army</h2>
      <div className="army-list" role="list">
        {army.length === 0 && <p className="small">No bots enlisted yet. Click a bot to enlist it.</p>}
        {army.map(bot => (
          <div key={bot.id} className="army-item" role="listitem">
            <img src={bot.avatar_url} alt={bot.name} style={{ width: 64, height: 64, borderRadius: 6 }} />
            <div style={{ flex: 1 }}>
              <div><strong>{bot.name}</strong> <span className="small">({bot.bot_class})</span></div>
              <div className="small">{bot.catchphrase}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button className="btn release" onClick={() => onRelease(bot.id)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}