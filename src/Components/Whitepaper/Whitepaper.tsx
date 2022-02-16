import React from "react";
import { Table } from "react-bootstrap";
import "./Whitepaper.css";

const Whitepaper: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="table-title pb-2">WHITE PAPER </h1>
        <h1 className="table-title2 pb-4">Minting</h1>
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover className="first-table">
            <thead className="table-head">
              <tr>
                <th>Token ID</th>
                <th>Minting Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sold">0 - 2520 (MetaHouse)</td>
                <td className="sold">SOLD OUT</td>
              </tr>
              <tr>
                <td>0-5040 (Pixel MetaHouse)</td>
                <td>0.02 ETH</td>
              </tr>
              <tr>
                <td>0-5000 (furniture)</td>
                <td>40,000 $MH</td>
              </tr>
              <tr>
                <td>0-2520 (Real estate agents)</td>
                <td>60,000 $MH</td>
              </tr>
              <tr>
                <td>0-2520 (Upgraded MetaHouse)</td>
                <td colSpan={2}>80,000 $MH</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <p className="d-flex justify-content-center mt-5 middle-text">
        These will be our mintable collections Inner houses - free mint. Leave the city (Unstake)
        Entrepreneurs that leave the city and all $MH is collected. Can only be done if the Rent has
        accumulated 2 days worth of $MH.
      </p>
      <div>
        <h1 className="table-title3 pb-4">Game Theory</h1>
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover className="fisherman">
            <thead className="table-head">
              <tr>
                <th className="action">Action</th>
                <th>Notes</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stake hotel will provide 100,000 $MH coins every day.</td>
                <td>
                  Meta House staking game Game Theory: $MH The maximum $MH supply is 5,000,000,000
                  $MH:
                </td>
                <td>
                  When supply reaches 2,400,000,000 $MH earned for staking, the staking “faucet”
                  turns off.
                </td>
              </tr>
              <tr>
                <td>
                  Minting our future collections with $MH will still go on opensea , or can be used
                  in our future game.
                </td>
                <td>
                  $MH which was done to create a strong coin that has potential beyond the scope of
                  MetaHouse, MetaHouse Dao, and the ecosystem. This coin has a 20% unstake tax
                  applied to it that contributes directly to the liquidity pool. This Unstake tax
                  was a community suggestion, was voted on by the community, and has been a proven
                  way of increasing stability with the coin.
                </td>
                <td>
                  To stabilize $MH, the goal of the team is to add meaningful utility to $MH instead
                  of aimlessly adding funds to the liquidity pool. This promotes the longevity of
                  the token, increasing community involvement, and leads to further growth within
                  the DAO and ecosystem. More details follow below.
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h1 className="table-title2 p-5">The DAO</h1>
          <div className="whitepaper-text ">
            <p>
              The DAO was established to allow the community to drive the conversation, development,
              and funding behind meaningful updates to power the longevity and utility of $MH. Their
              decisions will be backed by the development team and any other exterior help they wish
              to add to our team.
            </p>
            <p>
              . MetaHouse(first generation) NFTs are the voting power in the DAO. Holders of
              MetaHouse NFTs can vote on the official Snapshot voting platform for MetaHouse game
              and there decisions can be made that the community deems important for the future of
              the Game and DAO.
            </p>
            <p>
              . The DAO will be funded by 80% of the Pixel and Metahouse royalties, and an initial
              seed funding of ETH the development team.
            </p>
          </div>
        </div>
        <div>
          <h1 className="table-title2 p-5">The Ecosystem</h1>
          <div className="whitepaper-text ">
            <p>
              The ecosystem has been established to give further value to $MH. This ecosystem
              includes giveaways, updates to the existing game, sister projects, and any other ideas
              created and pushed by the DAO.
            </p>
            <p>
              Sister games will offer benefits to trophy bucket holders and some benefits from the
              mints will be directly contributed to the DAO. These exact percentages will be decided
              on a project-by-project basis.
            </p>
            <p>
              The benefit that MetaHouseDao offers fellow creators is an already established
              community, partial funding by the DAO (if decided by our community), and connections
              to experts in each aspect of the development journey.
            </p>
            <p>
              Projects will be able to pitch their ideas directly to the DAO and the community will
              be able to decide which projects to support and how that support is granted.
            </p>
            <p>
              This isn't a financial advice , this white paper explains about future plans and not
              on existing utilities. Metahouse will not garrunte any thing until it happens
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <Table striped bordered hover className="bears-table ">
          <thead className="table-head">
            <tr>
              <th>Action</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stake Bear</td>
              <td>Earn your share of the 20% of all $TROUT generated around the river.</td>
            </tr>
            <tr>
              <td>Claim $TROUT</td>
              <td>Receive all $TROUT taxes accrued for the staked Bear</td>
            </tr>
            <tr>
              <td>Unstake Bea</td>
              <td>Receive all $TROUT taxes accrued for the staked Bear.</td>
            </tr>
          </tbody>
        </Table>
      </div> */}
      {/* <div className="middle-text">
        <p className="mt-5">
          Only staked Bears are able to steal new fishermen or earn the $TROUT tax.
        </p>
        <h1 className="middle-title m-5">Bear Game Theory: $TROUT</h1>
        <p>The maximum $TROUT supply is 5,000,000,000 $TROUT:</p>
        <p>
          When supply reaches 2,400,000,000 $TROUT earned for staking, the staking “faucet” turns
          off.
        </p>
        <p>
          The developers will receive 600,000,000 $TROUT. Community Rewards will be allocated
          2,000,000,000 $TROUT.
        </p>
      </div> */}
      {/* <div>
        <Table striped bordered hover className="fisherman">
          <thead className="table-head">
            <tr>
              <th className="action">Action</th>
              <th>Notes</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <br />
                Mint a new Fishermen using $TROUT{" "}
              </td>
              <td>
                {" "}
                <br />
                There is a 10% chance that the NFT is actually a Bear!
              </td>
              <td>
                <br /> 10% chance of the new Fishermen or a Bear being stolen by a staked Bear. Each
                Bear’s chance of success is proportional to their ranking.
              </td>
            </tr>
          </tbody>
        </Table>
      </div> */}
      <div className="bottom-text mt-5">
        <p className="pb-5">
          2nd part of white paper as of this date(15th of February 2022)we aren't launching our coin
          yet on uni swap and not adding liquidity in order to publish it more and prepare for the
          launch for at least 3-6 weeks, in the meantime we will release furniture, agents avatars ,
          upgraded MetaHouses collections that our coin holder will be able to mint with our $MH
          coin
        </p>
        {/* <h1>The Token</h1>
        <p>
          The DAO was established to allow the community to drive the conversation, development, and
          funding behind meaningful updates to power the longevity and utility of $TROUT. Their
          decisions will be backed by the development team and any other exterior help they wish to
          add to our team
        </p>{" "}
        <br />
        <p>
          GenX NFTs are the voting power in the DAO. Holders of GenX NFTs can vote on the official
          Snapshot voting platform for Bear Game, and there decisions can be made that the community
          deems important for the future of the Game and DAO.
        </p>
        <p>
          A multi-sig wallet has been established and the holders were voted on by the community via
          the Snapshot voting platform. The proposal and results remain live on the platform for all
          to see. The multi-sig wallet holders can be seen in the Discord by their light green names
          and "DAO Leaders" role.
        </p>
        <p>
          The DAO will be funded by 80% of the GenX/GenY royalties, 100% of the BearDAO OpenSea
          royalties, and an initial seed funding of 50 ETH from the development team.
        </p>
        <h1>The Ecosystem</h1>
        <p>
          The ecosystem has been established to give further value to $TROUT. This ecosystem
          includes giveaways, updates to the existing game, sister projects, and any other ideas
          created and pushed by the DAO.
        </p>
        <p>
          These ecosystem related projects will be available on the BearDAO OpenSea if they're
          tokens created by the DAO and team. Other sister projects will have their own OpenSea
          pages with royalties from the purchases being partially pushed directly to the BearDAO.
        </p>
        <p>
          Sister games will offer benefits to trophy bucket holders and some benefits from the mints
          will be directly contributed to the DAO. These exact percentages will be decided on a
          project-by-project basis.
        </p>
        <p>
          The benefit that BearDAO offers fellow creators is an already established community,
          partial funding by the DAO (if decided by our community), and connections to experts in
          each aspect of the development journey.
        </p>
        <p>
          Projects will be able to pitch their ideas directly to the DAO and the community will be
          able to decide which projects to support and how that support is granted.
        </p> */}
      </div>
    </div>
  );
};

export default Whitepaper;
