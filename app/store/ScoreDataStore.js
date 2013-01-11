Ext.define('bba.store.ScoreDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'bba.model.Score'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'ScoreStore',
            model: 'bba.model.Score',
            proxy: {
                type: 'ajax',
                url: 'data/scores.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});