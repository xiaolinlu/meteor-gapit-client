if (Meteor.isClient) {
  Meteor.startup(function () {
    if (typeof GapIt === 'object' &&
    typeof GapIt.activated === 'function' &&
    GapIt.activated() === true) {
      if (typeof Reload === 'object' &&
      typeof Reload._onMigrate === 'function') {
        Reload._onMigrate('gapit-reload', function () {
          GapIt.hijack(location.href);
          return [false];
        });
      }
    }
  });
}
