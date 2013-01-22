Ext.define('bba.model.TeamStat', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Player'
        },
        {
            name: 'NBATeam'
        },
        {
            name: 'Position'
        },
        {
            name: 'Salary'
        },
        {
            name: 'GamesPlayed'
        },
        {
            name: 'FantasyPoints'
        },
		{
			name: 'PointsPerGame',
			//Have to do this here instead of in a renderer because sorting is done on the store. Booo!
			convert: function(value,record) {
				return Math.round((parseInt(record.get('FantasyPoints'))/
					parseInt(record.get('GamesPlayed')))*100)/100;
			}
		}
    ]
});