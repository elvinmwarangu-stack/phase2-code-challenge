import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, onSelectBot }) => {
  return (
    <div className="mt-10 text-center px-4">
      <h2 className="text-3xl font-bold text-cyan-300 font-['Orbitron'] tracking-widest mb-6 drop-shadow-[0_0_10px_#00e0ff]">
        Available Bots
      </h2>

      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                   bg-gradient-to-b from-[#0b0f19]/70 to-[#01030b]/90 
                   p-6 rounded-3xl border border-cyan-400/20
                   shadow-[0_0_25px_#00e0ff60] backdrop-blur-xl"
      >
        {bots.length > 0 ? (
          bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={() => onSelectBot(bot)}
            />
          ))
        ) : (
          <p className="col-span-full text-gray-400 italic">
            No bots available — please check your connection.
          </p>
        )}
      </div>
    </div>
  );
};

export default BotCollection;
