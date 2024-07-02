import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description).map((item, index) => {
        return (
          <p className="tile" key={index}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
