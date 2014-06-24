Package.describe({
  summary: "This component of Meteor GapIt is a smart package that ensures your app can perform hot-reloads without losing access to the PhoneGap API."
});

Package.on_use(function (api){
  api.add_files('lib/gapit-reload.js', 'client');
});
