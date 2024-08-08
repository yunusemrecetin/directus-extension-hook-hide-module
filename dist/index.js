export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  filter("settings.read", async (items, meta, context) => {
    const rolesService = new RolesService({
      schema: context.schema,
      accountability: context.accountability,
    });

    if (context.accountability && !context.accountability.admin) {
      var settings = items[0];
      settings.module_bar = [
        { type: "module", id: "content", enabled: true },
        { type: "module", id: "users", enabled: false },
        { type: "module", id: "files", enabled: false },
        { type: "module", id: "insights", enabled: false },
        { type: "module", id: "settings", enabled: false },
      ];
    }
    return items;
  });
};
