import React from 'react';

export default function BotCard({ bot, onEnlist, onDischarge, showDelete }) {
  return (
    <div className="bot-card" onClick={() => onEnlist(bot)}>
      {showDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation(); // prevent enlist when clicking delete
            onDischarge(bot.id);
          }}
          aria-label={`Discharge ${bot.name}`}
        >
          ×
        </button>
      )}
      <img src={bot.avatar_url} alt={bot.name} />
      <div className="bot-meta"><strong>{bot.name}</strong></div>
      <div className="bot-meta">{bot.bot_class}</div>
      <div className="bot-meta small">❤️ {bot.health} &nbsp; 🔥 {bot.damage} &nbsp; 🛡️ {bot.armor}</div>
    </div>
  );
}