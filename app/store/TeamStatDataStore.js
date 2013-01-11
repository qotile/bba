Ext.define('bba.store.TeamStatDataStore', {
    extend: 'Ext.data.Store',

    requires: [
        'bba.model.TeamStat'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'TeamStatStore',
            model: 'bba.model.TeamStat',
            proxy: {
                type: 'ajax',
                url: 'data/teamstats.json',
                reader: {
                    type: 'json',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});