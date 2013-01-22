Ext.define('bba.view.grid.StandingsGridPanel', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.standingsgridpanel',
	store: 'CurrentStandings',
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
			dataIndex: 'WinningPercentage',
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
