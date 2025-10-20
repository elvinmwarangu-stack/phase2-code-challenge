import React from "react";

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: "300px" }} />
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={onBack}>← Back</button>
        <button onClick={() => onEnlist(bot)} style={{ marginLeft: "1rem" }}>+ Enlist</button>
      </div>
    </div>
  );
};

export default BotSpecs;
