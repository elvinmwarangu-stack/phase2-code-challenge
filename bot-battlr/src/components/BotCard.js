import React from "react";

const BotCard = ({ bot, onClick, onDischarge, showDischarge }) => {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <div className="bot-stats">
        <span>❤️ {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>
      {showDischarge && (
        <button className="discharge-btn" onClick={(e) => {
          e.stopPropagation();
          onDischarge(bot);
        }}>
          ❌ Discharge
        </button>
      )}
    </div>
  );
};

export default BotCard;

