Ext.define('bba.view.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'bba.view.Header',
        'bba.view.TeamTabPanel',
		'bba.view.ScorePanel'
    ],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'header',
					html: 'BBA',
					flex: 1,
					dock: 'top'
				},
				{
					xtype: 'scorepanel',
					flex: 1
				},
				{
					xtype: 'teamtabpanel',
					border: false,
					flex: 1
				}
            ]
        });

        me.callParent(arguments);
    }

});