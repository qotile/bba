Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'TeamStatData',
		'StandingsData'
    ],
    stores: [
        'TeamStatDataStore',
		'StandingsDataStore'
    ],
    views: [
		'Header',
        'TeamTabPanel'
    ],
    autoCreateViewport: true,
    name: 'bba'
});
