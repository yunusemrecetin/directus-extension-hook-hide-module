import myUtil from "./example.js";

export default (router) => {
  router.get("/admin/content/CampaignEntries", (req, res) => {
    const result = myUtil();
    res.send(result);
  });
};
