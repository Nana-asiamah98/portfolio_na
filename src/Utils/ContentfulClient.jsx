// import ContentfulData from "ContentfulData";
export const contentfulClient = async (query) => {
  const spaceID = process.env.REACT_APP_SPACEID;
  const cdAPI = process.env.REACT_APP_CD_API;
  const results = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cdAPI}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
        projectsCollection{
            items{
                projectName,
                description,
                projectImages{
                  url,
                  title
                }
            }
          }
 }`,
      }),
    }
  );
  const { data } = await results.json();

  return data;
};
