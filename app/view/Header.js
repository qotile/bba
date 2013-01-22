Ext.define('bba.view.Header', {
    extend: 'Ext.Component',
    alias: 'widget.bbaheader',

    baseCls: 'app-header',
	layout: 'auto',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});