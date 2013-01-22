Ext.define('bba.view.grid.TeamStatGridPanel', {
    extend: 'Ext.grid.Panel',
	alias: 'widget.teamstatgridpanel',
	store: 'TeamStats',
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
			xtype: 'numbercolumn',
			dataIndex: 'Salary',
			text: 'Salary'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'GamesPlayed',
			text: 'GP'
		},
		{
			xtype: 'gridcolumn',
			dataIndex: 'PointsPerGame',
			text: 'FP/G'
		}
	]
});
