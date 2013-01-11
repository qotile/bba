Ext.define('bba.model.Score', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'currGame'
        }
    ],
	hasMany: {
		model: 'Game',
		name: 'game'
	}
});

Ext.define('bba.model.Game', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'gameNumber'
        }
    ],
	belongsTo: 'Score',
	hasMany: {
		model: 'Matchup',
		name: 'matchup'
	}
});

Ext.define('bba.model.Matchup', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'homeTeam',
        },
        {
            name: 'homeWins',
        },
        {
            name: 'homeLosses',
        },
        {
            name: 'homePlayersDone',
        },
        {
            name: 'awayTeam',
        },
        {
            name: 'awayWins',
        },
        {
            name: 'awayLosses',
        },
        {
            name: 'awayPlayersDone',
        }
    ],
	belongsTo: 'Game'
});

