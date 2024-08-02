export default ({ filter, action }, { services }) => {
  filter("settings.read", async (items, meta, context) => {
    console.log(`user status : ${!context.accountability.admin}`);
    if (context.accountability && !context.accountability.admin) {
      // Only display the defined modules for non-admin & non-moderator roles
      console.dir(items);
      var settings = items[0];
      console.dir(settings);
      settings.custom_css =
        ".content-navigation > li:nth-child(1) { display: none !important;}";
      console.dir(items[0]);

      console.dir(items.length);
    }
    return items;
  });
};
