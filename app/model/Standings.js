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
        },
		{
			name: 'WinningPercentage',
			//Have to do this here instead of in a renderer because sorting is done on the store. Booo!
			convert: function(value,record) {
				//TODO: make this not so ugly, like with an overloaded round method
				return Math.round((parseInt(record.get('Wins'))/
					(parseInt(record.get('Wins'))+parseInt(record.get('Losses'))))*1000)/1000;
			}
		}
    ]
});