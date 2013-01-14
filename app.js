Ext.Loader.setConfig({
    enabled: true,
	disableCaching: false
});

Ext.application({
    models: [
        'TeamStat',
		'Standings',
		'Score'
    ],
    stores: [
        'TeamStatDataStore',
		'StandingsDataStore',
		'ScoreDataStore'
    ],
    views: [
		'Header',
        'TeamTabPanel',
		'ScorePanel'
    ],
    autoCreateViewport: true,
    name: 'bba'
});
