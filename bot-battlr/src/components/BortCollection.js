import React from 'react';
import BotCard from './BotCard';

export default function BotCollection({ bots, onEnlist, onDischarge }) {
  return (
    <div className="card">
      <h2>Bot Collection</h2>
      <div className="bot-list" role="list">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} onDischarge={onDischarge} showDelete={true} />
        ))}
      </div>
      {bots.length === 0 && <p className="small">No bots available.</p>}
    </div>
  );
}