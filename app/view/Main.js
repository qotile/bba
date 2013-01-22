Ext.define('bba.view.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'bba.view.Header',
        'bba.view.tab.TeamTabPanel',
		'bba.view.score.ScorePanel'
    ],
	layout: 'auto',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'bbaheader',
					html: 'BBA',
					flex: 1,
					dock: 'top'
				},
				{
					xtype: 'scorepanel',
					flex: 1,
					dock: 'top'
				},
				{
					xtype: 'teamtabpanel',
					flex: 1
				}
            ]
        });

        me.callParent(arguments);
    }

});