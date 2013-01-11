Ext.define('bba.view.grid.StandingsGridPanel', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.standingsgridpanel',
	store: 'StandingsDataStore',
	viewConfig: {

	},
	layout: {
		type: 'vbox'
	},
	title: 'Standings',
	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'Team',
			text: 'Team'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'Wins',
			text: 'W'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'Losses',
			text: 'L'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'pointspergame', renderer:function(value,metadata,record) {
				//TODO: make this not so ugly, like with an overloaded round method
				return Math.round((parseInt(record.get('Wins'))/
					(parseInt(record.get('Wins'))+parseInt(record.get('Losses'))))*1000)/1000;
			},
			text: 'Pct'
		},
		{
			xtype: 'gridcolumn',
			//TODO
			text: 'GB'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'pointspergame', renderer:function(value,metadata,record) {
				return Math.round((parseInt(record.get('FantasyPoints'))/
					(parseInt(record.get('Wins'))+parseInt(record.get('Losses'))))*100)/100;
			},
			text: 'FP/G'
		}
	]
});
