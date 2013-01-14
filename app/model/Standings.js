Ext.define('bba.model.Standings', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Team'
        },
        {
            name: 'Wins'
        },
        {
            name: 'Losses'
        },
        {
            name: 'FantasyPoints'
        }
    ]
});