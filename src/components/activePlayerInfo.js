import React from "react";

const activePlayerInfo = ({ activePlayer }) => {
  console.log("active player", activePlayer);

  return (
    <div className="activePlayerInfo">
      <p>Active Player {activePlayer && activePlayer.id}</p>
      <p>{activePlayer && activePlayer.points}</p>
      {activePlayer && <div className="activePlayer"></div>}
    </div>
  );
};

export default activePlayerInfo;
