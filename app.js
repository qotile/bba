Ext.Loader.setConfig({
    enabled: true,
	disableCaching: false
});

Ext.application({
    name: 'bba',
    models: [
        'TeamStat',
		'Standings',
		'Score'
    ],
    stores: [
        'TeamStats',
		'CurrentStandings',
		'AllScores'
    ],
	controllers: [
        'BBAController'
    ],
    autoCreateViewport: true
});
