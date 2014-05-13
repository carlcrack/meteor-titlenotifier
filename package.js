Package.describe({
    summary: "TitleNotifier.js"
});

Package.on_use(function (api) {
		api.use('jquery','client');
    api.add_files([
        'public/title_notifier.js'
    ], 'client');
});
