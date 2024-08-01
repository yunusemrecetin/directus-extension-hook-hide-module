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
      !moderatorRole.includes(context.accountability.role)
    ) {
      // Only display the defined modules for non-admin & non-moderator roles
      var settings = items[0];
      settings.module_bar = [
        { type: "module", id: "content", enabled: false },
        { type: "module", id: "files", enabled: false },
      ];
    }
    return items;
  });
};
