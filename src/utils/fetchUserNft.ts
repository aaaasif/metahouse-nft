import { getIsStakedTokenId, nftaddress } from "./metahouse";

const BASEURL = "http://localhost:5000";

const token_uri =
  "https://gateway.pinata.cloud/ipfs/QmVJF9F5BHrfCH35xwxQVVCbMZ5to4gkuhEWGBYtNMAMBt";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(`${BASEURL}/${address}?nftAddress=${nftaddress}`);
    const data = await res.json();
    console.log(data);
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(`${token_uri}/${Number(d.token_id) + 1}.json`);
        const res = await res_token_uri.json();
        const isStaked = await getIsStakedTokenId(d.token_id);
        return {
          token_id: d.token_id,
          image: res.image,
          isStaked,
        };
      })
    );

    return nftImages;
  } catch (error) {
    console.log(error);
  }
};
