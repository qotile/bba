Ext.define('bba.view.ScoreBox', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.scorebox',
	game: '',
	
	requires : [
		'bba.view.MatchupPanel'
	],

    height: 220,
    width: 880,
    layout: 'hbox',
	
	initComponent: function() {
        var me = this;

		Ext.each(Ext.getStore('ScoreDataStore').first().getAssociatedData().game, function(gameRecord, index, gamesItSelf) {
			if (gameRecord.gameNumber == me.game) {
				var flx = 0;
				var matchups = [];
				Ext.each(gameRecord.matchup, function(matchupRecord, index, matchupItSelf) {
					matchups[flx] = {xtype: 'matchuppanel',
						game: gameRecord.gameNumber,
						matchup: matchupRecord.homeTeam,
						flex: flx+1};
					flx=flx+1;
				});
				
				Ext.applyIf(me, {
					items: matchups
				});
			}
		});
		
        me.callParent(arguments);
    }

});