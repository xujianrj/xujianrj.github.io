    Ext.define('fo.model.User', {
        extend: 'Ext.data.Model',
        config: {
            fields: ['id', 'name','gongde'],
            proxy: {
                type:'sql',
                database:'foxue',
                model:'fo.model.User'
            }
        }
    });