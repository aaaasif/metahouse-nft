import express from "express";
import cors from "cors";
import Moralis from "moralis/node.js";

const app = express();
const PORT = process.env.PORT || 5000;

const serverUrl = "https://acnuawjyxtyp.usemoralis.com:2053/server";
const appId = "SSPePMlz2XQLX4mon3soXPHPZ2gN2NryJrWhF6rs";
Moralis.start({ serverUrl, appId });

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("WELCOME TO METAHOUSE API");
});

app.get("/:address", async (req, res) => {
  const data = await Moralis.Web3.getNFTs({
    address: req.params.address,
    chain: "0x4",
  });

  const filteredData = data.filter(
    (f) => f.token_address === req.query.nftAddress.toLocaleLowerCase()
  );

  res.send(filteredData);
});

app.listen(5000, () => {
  console.log(`server running on PORT ${PORT}`);
});
