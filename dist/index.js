export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  filter("settings.read", async (items, meta, context) => {
    const rolesService = new RolesService({
      schema: context.schema,
      accountability: context.accountability,
    });
    const moderatorRole = await rolesService.getKeysByQuery({
      filter: { name: { _eq: "Satış Noktası yöneticisi" } },
    });

    if (
      context.accountability &&
      !context.accountability.admin &&
      moderatorRole.includes(context.accountability.role)
    ) {
      // Only display the defined modules for non-admin & non-moderator roles
      console.dir(items);
      var settings = items[0];
      console.dir(settings);
      settings.custom_css =
        "#navigation > div.resize-wrapper.transition > div.module-nav.alt-colors > div.module-nav-content > div > ul > li:nth-child(1) { display: none !important;}";
      console.dir(items[0]);
    }
    return items;
  });
};
