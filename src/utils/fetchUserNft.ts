import { nftaddress } from "./metahouse";

const BASEURL = "http://localhost:5000";

export const getUserNfts = async (address: string) => {
  try {
    const res = await fetch(
      `${BASEURL}/0x62562d3F2a512Dee20F13D7e43D0B4fC712CaA4A?nftAddress=${nftaddress}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
