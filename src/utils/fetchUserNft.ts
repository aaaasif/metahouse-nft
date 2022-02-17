import { chain, nftaddress, pixeladdress } from "./metahouse";

const BASEURL = "https://metahouse-server.herokuapp.com";
// const BASEURL = "https://metahouse-backend.herokuapp.com";

const token_uri = "https://metahouseapi1.herokuapp.com/api/nft";

const pixelTokenUri = "https://pixelmetahouseapi2.herokuapp.com/api/nft";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(
      `${BASEURL}/${address}?chain=${chain}&nftAddress=${nftaddress}`
    );
    const data = await res.json();
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(`${token_uri}/${Number(d.token_id)}`);
        const res = await res_token_uri.json();
        const image = await res.image;
        const image2 = await image.replace("ipfs://", "ipfs/");
        return {
          token_id: d.token_id,
          image: `https://gateway.pinata.cloud/${image2}`,
        };
      })
    );
    console.log(res);
    return nftImages;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserStakedNfts = async (data: any[]) => {
  try {
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(`${token_uri}/${Number(d)}.json`);
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

export const getUserPixelNfts = async (address: string) => {
  try {
    const res = await fetch(
      `${BASEURL}/${address}?chain=${chain}&nftAddress=${pixeladdress}`
    );
    const data = await res.json();
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(
          `${pixelTokenUri}/${Number(d.token_id) + 1}.json`
        );
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

export const fetchUserStakedPixelNfts = async (data: any[]) => {
  try {
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(
          `${pixelTokenUri}/${Number(d) + 1}.json`
        );
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
