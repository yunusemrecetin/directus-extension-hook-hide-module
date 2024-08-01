module.exports = function registerHook({ filter }) {

  filter('settings.read', async (items, meta, context) => {
    if (context.accountability && !context.accountability.admin) {
      // Only display the content module for non-admin roles
      var settings = items[0];
      settings.module_bar = [{"type":"module","id":"content","enabled":false}];
    }
    return items;
  });

};