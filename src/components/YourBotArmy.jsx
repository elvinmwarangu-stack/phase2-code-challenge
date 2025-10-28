import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-army w-full bg-gradient-to-b from-cyan-900/20 via-black/60 to-black/90 
                    rounded-3xl p-8 border border-cyan-400/40 shadow-[0_0_25px_#00e0ff40] 
                    backdrop-blur-md mb-12 transition-all duration-300">
      <h2 className="text-2xl font-['Orbitron'] text-cyan-300 mb-6 tracking-widest text-center">
        ⚙️ Your Bot Army
      </h2>

      {bots.length === 0 ? (
        <p className="text-gray-400 text-center font-['Orbitron'] italic">
          No bots enlisted yet. Assemble your squad!
        </p>
      ) : (
        <div className="bot-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      )}
    </div>
  );
};

export default YourBotArmy;
