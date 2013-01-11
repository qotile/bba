Ext.define('bba.view.TeamTabPanel', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.teamtabpanel',

    requires: [
        'bba.view.grid.TeamStatGridPanel',
        'bba.view.grid.StandingsGridPanel'
    ],

	cls: 'team-tab-panel',
    height: 440,
    width: 618,
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