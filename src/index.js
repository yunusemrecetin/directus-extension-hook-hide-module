export default ({ filter, action }, { services }) => {
  const { RolesService } = services;

  filter("settings.read", async (items, meta, context) => {
    const rolesService = new RolesService({
      schema: context.schema,
      accountability: context.accountability,
    });

    var checkPermission =
      context.accountability && context.accountability.admin;

    console.dir(`check permission : ${checkPermission}`);

    var settings = items[0];

    console.dir("you are here");

    if (checkPermission == false) {
      settings.custom_css =
        'a[href="/admin/content/CampaignEntries/+"] { display: none !important; } #sidebar > div > div.v-item-group.sidebar-detail-group > div:nth-child(5) > div > div > div.fields > div:nth-child(1) { display: none !important; }';
    }

    console.dir(items);

    return items;
  });
};
