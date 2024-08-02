export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  filter("settings.read", async (items, meta, context) => {
    const rolesService = new RolesService({
      schema: context.schema,
      accountability: context.accountability,
    });

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
