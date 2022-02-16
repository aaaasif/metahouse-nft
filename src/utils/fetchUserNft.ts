import { chain, nftaddress, pixeladdress } from "./metahouse";

const BASEURL = "https://metahouse-server.herokuapp.com";
// const BASEURL = "https://metahouse-backend.herokuapp.com";

const token_uri =
  "https://gateway.pinata.cloud/ipfs/QmPWM7g6hhMYx2tWEekF44HXR45SkF6iarA88t5eHFL8pf";

const pixelTokenUri =
  "https://gateway.pinata.cloud/ipfs/QmVuG9TcDJPfjPqXqCn8pbcaPnU3v1wynX8pu7pzYRjGf7";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(
      `${BASEURL}/${address}?chain=${chain}&nftAddress=${nftaddress}`
    );
    const data = await res.json();
    const nftImages = await Promise.all(
      data.map(async (d) => {
        const res_token_uri = await fetch(
          `${token_uri}/${Number(d.token_id)}.json`
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
