import React from "react";

const BotCard = ({ bot, onClick, onDischarge, showDischarge }) => {
  return (
    <div
      className="relative bg-white/5 border border-cyan-400/30 rounded-2xl p-5
                 hover:shadow-[0_0_20px_#00e0ff,0_0_40px_#ff00e6]
                 transition-all duration-300 cursor-pointer backdrop-blur-lg 
                 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-pink-500
                   shadow-[0_0_15px_#ff00e6] mb-3"
      />
      
      <h3 className="text-xl font-semibold text-cyan-300 font-['Orbitron']">{bot.name}</h3>
      <p className="text-sm text-gray-400 italic">{bot.catchphrase}</p>
      <p className="text-sm text-pink-400 mt-1">Class: {bot.bot_class}</p>
      
      <div className="flex justify-between text-sm text-gray-300 mt-3 border-t border-cyan-400/30 pt-2">
        <span>❤️ {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>

      {showDischarge && (
        <button
          className="absolute top-2 right-2 bg-gradient-to-r from-red-600 to-orange-500 text-white
                     px-3 py-1 rounded-lg text-xs hover:scale-110 active:scale-95 
                     transition-transform shadow-[0_0_10px_#ff0000]"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
};

export default BotCard;
