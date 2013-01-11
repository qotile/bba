Ext.define('bba.view.ScoreBox', {
    extend: 'Ext.panel.Panel',
	alias: 'widget.scorebox',
	store: 'ScoreDataStore',
	title: 'Game ' + record.get('CurrGame'),

    height: 220,
    width: 880,
    layout: 'hbox',
	
    items: [{
		xtype: 'matchupPanel',
		matchup: record.getAssociatedData(),
		flex: 1
	}]
});