import React from "react";
import "./StoryLine.css";

const StoryLine: React.FC = () => {
  return (
    <div className="storyline-text">
      <h1 className="storyline-header">Story Line</h1>
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <p className="d-flex justify-content-start">
        1. Somewhere in a busy city in the world of entrepreneurs. <br />
        2. The high abundance of $MH in the city attracts investors to the city. <br />
        3. the investors need a house to rent , there weren't many houses in the market that time,
        very low supply of houses ! <br />
        4. so the early investors in the city wanted to take advantage on that and rented out their
        houses for 10,000 $MH coin a day ! <br />
        5. The new entrepreneurs of the city couldn't find any houses cheaper to rent and that's how
        MetaHouse Realestate became an empire. <br />
      </p>
      <br />
      {/* <h1 className="storyline-header">TLDR</h1>
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <img
        className="border-img"
        src="https://i.ibb.co/zHyDtS3/floral-design-border-with-curls-1.png"
        alt=""
      />
      <p>
        . There will only ever be 10,498 Gen X, minted for 0.069420 ETH each. The 39,502 Gen Y are
        minted by farming $TROUT. <br />
        . Fishermen can be staked on the river to earn $TROUT and pay a tax anytime they claim their
        $TROUT. <br />
        . If a Fishermen is unstaked from the river, the Bears try to steal all of its accumulated
        $TROUT. <br />. When a new Fisherman is born, the Bears attempt to steal it. If they’re
        successful, it’s given to a randomly selected bear instead of the owner who minted it.
      </p> */}
    </div>
  );
};

export default StoryLine;
