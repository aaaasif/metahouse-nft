import React from "react";
import { Table } from "react-bootstrap";
import "./Whitepaper.css";

const Whitepaper: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="table-title">Minting</h1>
        <Table striped bordered hover className="first-table">
          <thead className="table-head">
            <tr>
              <th>Token ID</th>
              <th>Minting Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0 - 10,498 (Gen X)</td>
              <td className="sold">SOLD OUT</td>
            </tr>
            <tr>
              <td>10,499 - 17,000 (Gen Y)</td>
              <td>20,000 $TROUT</td>
            </tr>
            <tr>
              <td>17,001 - 27,000 (Gen Y)</td>
              <td>40,000 $TROUT</td>
            </tr>
            <tr>
              <td>27,001 - 37,000 (Gen Y)</td>
              <td>60,000 $TROUT</td>
            </tr>
            <tr>
              <td>37,001 - 50,000 (Gen Y)</td>
              <td colSpan={2}>80,000 $TROUT</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <p className="d-flex justify-content-center mt-5">
        The total cost to mint/spawn all of the Fishermen and Bears in existence will be
        2,170,020,000 $TROUT.
      </p>
      <div>
        <h1 className="table-title">Fisherman</h1>
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
              <td>Enter River (Stake)</td>
              <td>Accumulate 10,000 $TROUT / day (Gen X) Accumulate 6,000 $TROUT / day (Gen Y)</td>
              <td>No risk.</td>
            </tr>
            <tr>
              <td>Collect $TROUT (Claim)</td>
              <td>Receive 80% of the $TROUT you fished.</td>
              <td>
                Bears take a guaranteed 20% tax on your $TROUT to keep them from attacking you. $
                TROUT given is split among all the BEARS currently staked around the
                river,proportional to their ranking.
              </td>
            </tr>
            <tr>
              <td>Leave River (Unstake)</td>
              <td>
                Fishermen leave the river and all $TROUT is collected. Can only be done if the
                Fishermen has accumulated 2 days worth of $TROUT
              </td>
              <td>
                50% chance of ALL of your accumulated $TROUT being stolen by Bears. Stolen $TROUT is
                split among all the Bears currently staked around the river, proportional to their
                ranking.
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h1 className="table-title">Bears</h1>
          <div className="whitepaper-text ">
            <p>
              You have a 10% chance of minting a Bear, each with unique traits, including a Ranking
              value from Highest: Gold, Silver, Bronze, with Wild being lowest. The higher the
              ranking
            </p>
            <p>. The higher the portion of $TROUT that the Bear earns from taxes.</p>
            <p>. The higher chance of stealing a newly minted Fishermen or Bear.</p>
          </div>
        </div>
      </div>
      <div>
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
      </div>
      <div className="middle-text">
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
      </div>
      <div>
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
      </div>
      <div className="bottom-text">
        <h1 className="title m-4">The Token</h1>
        <p>
          Our $TROUT contract is designed following the nature of SafeMoon, which was done to create
          a strong token that has potential beyond the scope of Bear Game, Bear DAO,and the
          ecosystem. This token has a 25% sale tax applied to it that contributes directly to the
          liquidity pool. This sale tax was a community suggestion, was voted on by the community,
          and has been a proven way of increasing stability with the token. <br />
          <br />
          To stabilize $TROUT, the goal of the team is to add meaningful utility to $TROUT instead
          of aimlessly adding funds to the liquidity pool.This promotes the longevity of the token,
          increasing community involvement, and leads to further growth within the DAO and
          ecosystem. More details follow below.
        </p>
        <h1>The Token</h1>
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
        </p>
      </div>
    </div>
  );
};

export default Whitepaper;
