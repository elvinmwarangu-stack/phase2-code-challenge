import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./App.css";
import "./components/BotSpecs.css";
import "./components/SortBar.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [filterClasses, setFilterClasses] = useState([]);

  useEffect(() => {
    fetch("https://phase2-code-challenge-iydy.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Failed to load bots:", err));
  }, []);

  const enlistBot = (bot) => {
    const sameClass = army.find((b) => b.bot_class === bot.bot_class);
    const alreadyEnlisted = army.find((b) => b.id === bot.id);

    if (!alreadyEnlisted && !sameClass) {
      setArmy((prev) => [...prev, bot]);
    }
  };

  const releaseBot = (botOrId) => {
    const id = typeof botOrId === "object" ? botOrId.id : botOrId;
    setArmy((prev) => prev.filter((b) => b.id !== id));
  };

  const dischargeBot = (botOrId) => {
    const id = typeof botOrId === "object" ? botOrId.id : botOrId;
    fetch(`https://phase2-code-challenge-iydy.vercel.app/bots/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        setArmy((prev) => prev.filter((b) => b.id !== id));
        setBots((prev) => prev.filter((b) => b.id !== id));
        if (selectedBot && selectedBot.id === id) setSelectedBot(null);
      })
      .catch((err) => console.error("Failed to discharge bot:", err));
  };

  const filteredBots = bots
    .filter((bot) => filterClasses.length === 0 || filterClasses.includes(bot.bot_class))
    .sort((a, b) => {
      if (!sortBy) return 0;
      return b[sortBy] - a[sortBy];
    });

  return (
    <div className="App">
      <h1>Bot Battlr</h1>

      <YourBotArmy
        bots={army}
        onRelease={releaseBot}
        onDischarge={dischargeBot}
      />

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
            onEnlist={enlistBot}
            onDischarge={dischargeBot}
            onSelectBot={(bot) => setSelectedBot(bot)}
          />
        </>
      )}
    </div>
  );
}

export default App;
