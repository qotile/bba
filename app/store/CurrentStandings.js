Ext.define('bba.store.CurrentStandings', {
    extend: 'Ext.data.Store',

    requires: [
        'bba.model.Standings'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'CurrentStandings',
            model: 'bba.model.Standings',
            proxy: {
                type: 'ajax',
                url: 'data/standings.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
		me.sort('WinningPercentage','DESC');
    }
});