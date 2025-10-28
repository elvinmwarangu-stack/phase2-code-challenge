import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onSelectBot }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => onSelectBot(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
