Package.describe({
    summary: "Highcharts with exporting."
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files('lib/highcharts.js', 'client');
    api.add_files('lib/exporting.src.js', 'client');
});
