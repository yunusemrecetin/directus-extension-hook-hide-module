import exampleFunction from "./example.js";

export default (router) => {
  router.get("/admin/content/CampaignEntries", (req, res) => {
    const result = exampleFunction();
    res.send(result);
  });
};
