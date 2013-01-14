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
        }
    ]
});