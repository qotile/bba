var navigate = function(panel, direction){
    var layout = panel.getLayout();
    layout[direction]();
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
};

Ext.define('bba.view.score.ScorePanel', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.scorepanel',
	
	requires: [
		'bba.view.score.ScoreBox'
	],
	
    height: 78,
    width: 1020,
    layout: 'card',
	cls: 'scorepanel',
	
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

		var games = [];
		var cnt = 0;
		var scoreStore = Ext.getStore('AllScores').first();
		Ext.each(scoreStore.getAssociatedData().game, function(gameRecord, index, gamesItSelf) {
			games[cnt] = {xtype: 'scorebox',
				itemId: 'game' + gameRecord.gameNumber,
				game: gameRecord.gameNumber}
			cnt=cnt+1;
		});
        
		Ext.applyIf(me, {
			items: games,
			activeItem: 'game' + scoreStore.get('currGame')
		});

        me.callParent(arguments);
    }
});