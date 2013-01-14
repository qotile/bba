Ext.define('bba.view.ScoreBox', {
    override: 'Ext.panel.Panel',
	alias: 'widget.scorebox',
	game: '',
	
	requires : [
		'bba.view.MatchupPanel'
	],

    height: 220,
    width: 880,
    layout: 'hbox',
	
    constructor: function(config) {
        var me = this;

        config = config || {};
        if (config.initialConfig) {

            // Being initialized from an Ext.Action instance...
            if (config.isAction) {
                me.baseAction = config;
            }
            config = config.initialConfig;
            // component cloning / action set up
        }
        else if (config.tagName || config.dom || Ext.isString(config)) {
            // element object
            config = {
                applyTo: config,
                id: config.id || config
            };
        }

        me.callParent([config]);
    },
	
	initComponent: function() {
        var me = this;

		Ext.each(Ext.getStore('ScoreDataStore').first().getAssociatedData(), function(gameRecord, index, gamesItSelf) {
			if (gameRecord.gameNumber == me.game) {
				var flx = 1;
				Ext.each(gameRecord.matchup, function(matchupRecord, index, matchupItSelf) {
					add({xtype: matchuppanel, 
						game: gameRecord.gameNumber, 
						matchup: matchupRecord.homeTeam, 
						flex: flx});
					flx++;
				});
			}
		});
		
        me.callParent(arguments);
    }

});