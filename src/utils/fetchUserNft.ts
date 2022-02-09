import { nftaddress } from "./metahouse";

const BASEURL = "http://localhost:5000";

const token_uri =
  "https://gateway.pinata.cloud/ipfs/QmVJF9F5BHrfCH35xwxQVVCbMZ5to4gkuhEWGBYtNMAMBt";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(`${BASEURL}/${address}?nftAddress=${nftaddress}`);
    const data = await res.json();
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(`${token_uri}/${Number(d.token_id) + 1}.json`);
        const res = await res_token_uri.json();
        return {
          token_id: d.token_id,
          image: res.image,
        };
      })
    );

    return nftImages;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserStakedNfts = async (data: any[]) => {
  try {
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(`${token_uri}/${d}.json`);
        const res = await res_token_uri.json();
        return {
          token_id: d,
          image: res.image,
        };
      })
    );

    return nftImages;
  } catch (error) {
    console.log(error);
  }
};
