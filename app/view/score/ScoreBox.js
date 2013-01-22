Ext.define('bba.view.score.ScoreBox', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.scorebox',
	game: '',
	
	requires : [
		'bba.view.score.MatchupPanel'
	],

    height: 78,
    width: 1000,
    layout: 'column',
	
	initComponent: function() {
        var me = this;
		
		Ext.each(Ext.getStore('AllScores').first().getAssociatedData().game, function(gameRecord, index, gamesItSelf) {
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
					title: 'Game ' + me.game,
					items: matchups
				});
			}
		});
		
        me.callParent(arguments);
    }

});