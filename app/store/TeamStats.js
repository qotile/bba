Ext.define('bba.store.TeamStats', {
    extend: 'Ext.data.Store',

    requires: [
        'bba.model.TeamStat'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'TeamStats',
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
		me.sort('PointsPerGame','DESC');
    }
});