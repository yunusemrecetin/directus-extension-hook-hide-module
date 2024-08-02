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

    console.dir(context);

    var checkPermission =
      context.accountability &&
      moderatorRole.includes(context.accountability.role);

    console.dir(`check permission : ${checkPermission}`);

    if (checkPermission == true) {
      // Only display the defined modules for non-admin & non-moderator roles
      var settings = items[0];

      console.dir("you are here");

      settings.custom_css =
        ".nav > li:nth-child(1) { display: none !important;}";
    }

    console.dir(items);

    return items;
  });
};
