var navigate = function(panel, direction){
    // This routine could contain business logic required to manage the navigation steps.
    // It would call setActiveItem as needed, manage navigation button state, handle any
    // branching logic that might be required, handle alternate actions like cancellation
    // or finalization, etc.  A complete wizard implementation could get pretty
    // sophisticated depending on the complexity required, and should probably be
    // done as a subclass of CardLayout in a real-world implementation.
    var layout = panel.getLayout();
    layout[direction]();
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
};

Ext.define('bba.view.ScorePanel', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.scorepanel',
	
	requires: [
		'bba.view.ScoreBox'
	],

    height: 220,
    width: 900,
    layout: 'card',
	
	lbar: [
		{ 
            id: 'move-prev',
			xtype: 'button', 
			icon: 'resources/images/shared/left-btn.gif',
            handler: function(btn) {
                navigate(btn.up("panel"), "prev");
            }
		}
	],
	
	rbar: [
		{ 
            id: 'move-next',
			xtype: 'button', 
			icon: 'resources/images/shared/right-btn.gif',
            handler: function(btn) {
                navigate(btn.up("panel"), "next");
            }
		}
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			title: 'Game ' + Ext.getStore('ScoreDataStore').first().get('currGame'),
            items: [
                {
					xtype: 'scorebox',
					game: Ext.getStore('ScoreDataStore').first().get('currGame'),
					flex: 1
				}
            ]
        });

        me.callParent(arguments);
    }
});