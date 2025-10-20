import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";
import "./components/BotSpecs.css";
import "./components/SortBar.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
  const sameClass = army.find((b) => b.bot_class === bot.bot_class);
  const alreadyEnlisted = army.find((b) => b.id === bot.id);

  if (!alreadyEnlisted && !sameClass) {
    setArmy([...army, bot]);
  }
};


  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy bots={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );

  const [selectedBot, setSelectedBot] = useState(null); // New state
const [sortBy, setSortBy] = useState(null);           // Sorting
const [filterClasses, setFilterClasses] = useState([]); // Filtering

// Filtering and sorting bots
const filteredBots = bots
  .filter(bot => filterClasses.length === 0 || filterClasses.includes(bot.bot_class))
  .sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

return (
  <div className="App">
    <h1>🤖 Bot Battlr</h1>
    <YourBotArmy
      bots={army}
      onRelease={releaseBot}
      onDischarge={dischargeBot}
    />

    {/* Show Specs or Bot List */}
    {selectedBot ? (
      <BotSpecs
        bot={selectedBot}
        onBack={() => setSelectedBot(null)}
        onEnlist={(bot) => {
          enlistBot(bot);
          setSelectedBot(null);
        }}
      />
    ) : (
      <>
        <SortBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterClasses={filterClasses}
          setFilterClasses={setFilterClasses}
        />
        <BotCollection
          bots={filteredBots}
          onSelectBot={(bot) => setSelectedBot(bot)}
        />
      </>
    )}
  </div>
);

}

export default App;
