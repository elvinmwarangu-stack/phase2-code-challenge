import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={() => onDischarge(bot)}
            showDischarge
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;