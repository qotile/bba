Ext.define('bba.view.grid.TeamStatGridPanel', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.teamstatgridpanel',
	store: 'TeamStatDataStore',
	viewConfig: {

	},
	layout: {
		type: 'vbox'
	},
	title: 'Team Stats',
	columns: [
		{
			xtype: 'gridcolumn',
			dataIndex: 'Player',
			text: 'Player'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'NBATeam',
			text: 'NBA Team'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'Position',
			text: 'Position'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'Salary',
			text: 'Salary'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'GamesPlayed',
			text: 'GP'
		},
		{
			xtype: 'numbercolumn',
			dataIndex: 'pointspergame', renderer:function(value,metadata,record) {
				return Math.round((parseInt(record.get('FantasyPoints'))/
					parseInt(record.get('GamesPlayed')))*100)/100;
			},
			text: 'FP/G'
		}
	]
});
