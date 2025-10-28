import React from "react";

const SortBar = ({ sortBy, setSortBy, filterClasses, setFilterClasses }) => {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  const toggleFilter = (cls) => {
    if (filterClasses.includes(cls)) {
      setFilterClasses(filterClasses.filter(c => c !== cls));
    } else {
      setFilterClasses([...filterClasses, cls]);
    }
  };

  return (
    <div className="sort-bar">
      <h3>Sort by:</h3>
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy || ""}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

      <h3>Filter by Class:</h3>
      <div>
        {classes.map((cls) => (
          <label key={cls} style={{ marginRight: "1rem" }}>
            <input
              type="checkbox"
              value={cls}
              checked={filterClasses.includes(cls)}
              onChange={() => toggleFilter(cls)}
            />
            {cls}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortBar;
