export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  filter("settings.read", async (items, meta, context) => {
    const rolesService = new RolesService({
      schema: context.schema,
      accountability: context.accountability,
    });

    var checkPermission =
      context.accountability && context.accountability.admin;

    console.dir(`check permission : ${checkPermission}`);

    await delay(1000);

    var settings = items[0];

    console.dir("you are here");

    settings.custom_css = ".nav > li:nth-child(1) { display: none !important;}";

    if (checkPermission == true) {
      settings.custom_css = "";
      // Only display the defined modules for non-admin & non-moderator roles
    }

    console.dir(items);

    return items;
  });
};
