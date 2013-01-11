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
	store: 'ScoreDataStore',
	title: 'Game ' + record.get('CurrGame'),

    height: 220,
    width: 900,
    layout: 'card',
	
	lbar: [
		{ 
            id: 'move-prev',
			xtype: 'button', 
			icon: '../../resources/images/shared/left-btn.gif',
            handler: function(btn) {
                navigate(btn.up("panel"), "prev");
            }
		}
	],
	
	rbar: [
		{ 
            id: 'move-next',
			xtype: 'button', 
			icon: '../../resources/images/shared/right-btn.gif',
            handler: function(btn) {
                navigate(btn.up("panel"), "next");
            }
		}
	],
	
    items: [{
		xtype: 'scorebox',
		game: record.get('CurrGame'),
		flex: 1
	}]
});