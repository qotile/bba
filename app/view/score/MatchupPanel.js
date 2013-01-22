Ext.define('bba.view.score.MatchupPanel', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.matchuppanel',
	game: '',
	matchup:'',
    width: 157,
	cls: 'matchup',
	
	initComponent: function() {
        var me = this;

		Ext.each(Ext.getStore('AllScores').first().getAssociatedData().game, function(gameRecord, index, gamesItSelf) {
			if (gameRecord.gameNumber == me.game) {
				Ext.each(gameRecord.matchup, function(matchupRecord, index, matchupItSelf) {
					if (matchupRecord.homeTeam == me.matchup) {
						Ext.applyIf(me, {
							html: '<p>' + matchupRecord.awayTeam + 
								' (' + matchupRecord.awayWins + '-' + matchupRecord.awayLosses + ') ' + 
								matchupRecord.awayScore + ' (' + 
								(matchupRecord.awayPlayersDone == 12 ? 'F' : matchupRecord.awayPlayersDone) + 
								')</p><p>' + matchupRecord.homeTeam + 
								' (' + matchupRecord.homeWins + '-' + matchupRecord.homeLosses + ') ' + 
								matchupRecord.homeScore + ' (' + 
								(matchupRecord.homePlayersDone == 12 ? 'F' : matchupRecord.homePlayersDone) + ')</p>'
						});
					}
				});
			}
		});
		
        me.callParent(arguments);
    }

});