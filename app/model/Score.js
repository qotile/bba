Ext.define('bba.model.Score', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'currGame'
        }
    ],
	hasMany: {
		model: 'bba.model.Game',
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
	idProperty: 'gameNumber',
	belongsTo: 'Score',
	hasMany: {
		model: 'bba.model.Matchup',
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
	idProperty: 'homeTeam',
	belongsTo: 'Game'
});

