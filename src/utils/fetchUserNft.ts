const BASEURL = "http://localhost:5000";

const token_uri =
  "https://gateway.pinata.cloud/ipfs/QmVJF9F5BHrfCH35xwxQVVCbMZ5to4gkuhEWGBYtNMAMBt";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(
      `${BASEURL}/${address}?nftAddress=0xd0494c40586f58b3a71c80da3380c00e74c64369`
    );
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
