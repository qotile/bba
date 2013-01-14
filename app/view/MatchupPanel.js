Ext.define('bba.view.MatchupPanel', {
    override: 'Ext.panel.Panel',
	alias: 'widget.matchuppanel',
	game: '',
	matchup:'',
    layout: 'hbox',
	
	initComponent: function() {
        var me = this;

		Ext.each(Ext.getStore('ScoreDataStore').first().getAssociatedData(), function(gameRecord, index, gamesItSelf) {
			if (gameRecord.gameNumber == me.game) {
				Ext.each(gameRecord.matchup, function(matchupRecord, index, matchupItSelf) {
					if (matchupRecord.homeTeam == me.matchup) {
						add({html: '<p>' + matchupRecord.homeTeam + 
							' (' + matchupRecord.homeWins + '-' + matchupRecord.homeLosses + ') ' + 
							matchupRecord.homeScore + ' (' + matchupRecord.homePlayersDone + ')</p><p>' +
							matchupRecord.homeTeam + 
							' (' + matchupRecord.homeWins + '-' + matchupRecord.homeLosses + ') ' + 
							matchupRecord.homeScore + ' (' + matchupRecord.homePlayersDone + ')</p>'});
					}
				});
			}
		});
		
        me.callParent(arguments);
    }

});