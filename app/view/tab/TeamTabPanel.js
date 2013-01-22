Ext.define('bba.view.tab.TeamTabPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.teamtabpanel',

    requires: [
        'bba.view.grid.TeamStatGridPanel',
        'bba.view.grid.StandingsGridPanel'
    ],

	cls: 'team-tab-panel',
    height: 440,
    width: 618,
	border: false,
	plain: true,
	items: [
		{
			xtype: 'standingsgridpanel',
			flex: 1
		},
		{
			xtype: 'teamstatgridpanel',
			flex: 1
		}
	]
});