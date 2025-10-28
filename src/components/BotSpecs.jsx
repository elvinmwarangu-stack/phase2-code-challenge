import React from "react";

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center text-gray-200">
      <div
        className="bg-white/5 border border-cyan-400/30 rounded-3xl p-10 max-w-md w-full
                   shadow-[0_0_25px_#00e0ff80,0_0_50px_#ff00e680]
                   backdrop-blur-lg transition-all duration-300 hover:scale-[1.02]"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-cyan-300 font-['Orbitron'] mb-4 drop-shadow-[0_0_10px_#00e0ff]">
          {bot.name}
        </h2>

        {/* Image */}
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="w-60 h-60 object-cover mx-auto rounded-full border-2 border-pink-500 
                     shadow-[0_0_25px_#ff00e6] mb-6"
        />

        {/* Info */}
        <div className="space-y-2 text-left text-gray-300">
          <p><span className="text-cyan-400 font-semibold">Class:</span> {bot.bot_class}</p>
          <p><span className="text-cyan-400 font-semibold">Catchphrase:</span> “{bot.catchphrase}”</p>
          <p><span className="text-cyan-400 font-semibold">Health:</span> ❤️ {bot.health}</p>
          <p><span className="text-cyan-400 font-semibold">Damage:</span> ⚔️ {bot.damage}</p>
          <p><span className="text-cyan-400 font-semibold">Armor:</span> 🛡️ {bot.armor}</p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={onBack}
            className="px-5 py-2 rounded-xl text-sm font-['Orbitron'] text-gray-200 border border-cyan-400/40
                       hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-200"
          >
            ← Back
          </button>

          <button
            onClick={() => onEnlist(bot)}
            className="px-5 py-2 rounded-xl text-sm font-['Orbitron'] text-white 
                       bg-gradient-to-r from-pink-600 via-cyan-500 to-blue-600 
                       hover:scale-105 transition-all duration-300 
                       shadow-[0_0_15px_#00e0ff,0_0_30px_#ff00e6]"
          >
            + Enlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
