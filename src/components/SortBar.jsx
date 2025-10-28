import React from "react";

const SortBar = ({ sortBy, setSortBy, filterClasses, setFilterClasses }) => {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const toggleFilter = (cls) => {
    if (filterClasses.includes(cls)) {
      setFilterClasses(filterClasses.filter((c) => c !== cls));
    } else {
      setFilterClasses([...filterClasses, cls]);
    }
  };

  return (
    <div
      className="w-full bg-white/5 border border-cyan-400/30 rounded-2xl
                 p-6 mb-8 backdrop-blur-md shadow-[0_0_20px_#00e0ff40]
                 flex flex-col md:flex-row md:items-center md:justify-between
                 gap-6 transition-all duration-300 hover:shadow-[0_0_25px_#00e0ff80]"
    >
      {/* Sorting Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <h3 className="text-lg font-['Orbitron'] text-cyan-300 tracking-wider">
          Sort by:
        </h3>
        <select
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy || ""}
          className="bg-black/50 border border-cyan-400/50 text-cyan-200 rounded-xl px-4 py-2
                     font-['Orbitron'] focus:outline-none focus:ring-2 focus:ring-cyan-400
                     hover:bg-cyan-500/10 transition-all duration-200"
        >
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>

      {/* Filter Section */}
      <div>
        <h3 className="text-lg font-['Orbitron'] text-cyan-300 tracking-wider mb-2">
          Filter by Class:
        </h3>
        <div className="flex flex-wrap gap-3">
          {classes.map((cls) => (
            <label
              key={cls}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
                border transition-all duration-200
                ${
                  filterClasses.includes(cls)
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_10px_#00e0ff]"
                    : "bg-black/40 border-cyan-400/30 text-gray-300 hover:border-cyan-400/60"
                }`}
            >
              <input
                type="checkbox"
                value={cls}
                checked={filterClasses.includes(cls)}
                onChange={() => toggleFilter(cls)}
                className="accent-cyan-400 cursor-pointer"
              />
              <span className="font-['Orbitron'] text-sm">{cls}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortBar;
