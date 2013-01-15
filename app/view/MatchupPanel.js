Ext.define('bba.view.MatchupPanel', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.matchuppanel',
	game: '',
	matchup:'',
	
	initComponent: function() {
        var me = this;

		Ext.each(Ext.getStore('ScoreDataStore').first().getAssociatedData().game, function(gameRecord, index, gamesItSelf) {
			if (gameRecord.gameNumber == me.game) {
				Ext.each(gameRecord.matchup, function(matchupRecord, index, matchupItSelf) {
					if (matchupRecord.homeTeam == me.matchup) {
						Ext.applyIf(me, {
							html: '<p>' + matchupRecord.awayTeam + 
								' (' + matchupRecord.awayWins + '-' + matchupRecord.awayLosses + ') ' + 
								matchupRecord.awayScore + ' (' + matchupRecord.awayPlayersDone + ')</p><p>' +
								matchupRecord.homeTeam + 
								' (' + matchupRecord.homeWins + '-' + matchupRecord.homeLosses + ') ' + 
								matchupRecord.homeScore + ' (' + matchupRecord.homePlayersDone + ')</p>'
						});
					}
				});
			}
		});
		
        me.callParent(arguments);
    }

});