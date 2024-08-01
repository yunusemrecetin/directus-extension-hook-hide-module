export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  filter("settings.read", async (items, meta, context) => {
    var settings = items[0];
    settings.module_bar = [
      { type: "module", id: "content", enabled: false },
      { type: "module", id: "files", enabled: false },
    ];
    return items;
  });
};
