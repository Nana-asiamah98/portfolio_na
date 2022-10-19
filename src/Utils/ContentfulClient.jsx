// import ContentfulData from "ContentfulData";
import configData from "../config.json";
export const contentfulClient = async (query) => {
  const spaceID = process.env.REACT_APP_SPACEID || configData.SPACEID;
  const cdAPI = process.env.REACT_APP_CD_API || configData.CD_API;
  const results = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cdAPI}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );
  const { data } = await results.json();

  return data;
};
