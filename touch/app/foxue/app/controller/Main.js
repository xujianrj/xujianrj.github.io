Ext.define('fo.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        /**
         * @private
         */
        viewCache: [],

        refs: {
            nav: '#mainNestedList',
            main: 'mainview',
            toolbar: '#mainNavigationBar',
            sourceButton: 'button[action=viewSource]',
            themeToggleButton: 'button[action=toggleTheme]',


            sourceOverlay: {
                selector: 'sourceoverlay',
                xtype: 'sourceoverlay',
                autoCreate: true
            }
        },

        control: {
            sourceButton: {
                tap: 'onSourceTap'
            },
            themeToggleButton: {
                tap: 'onThemeToggleTap'
            },
            nav: {
                itemtap: 'onNavTap'
            }
        },

        routes: {
            'demo/:id': 'showViewById',
            'menu/:id': 'showMenuById',
            '': 'showMenuById'
        },

        /**
         * @cfg {Ext.data.Model} currentDemo The Demo that is currently loaded. This is set whenever showViewById
         * is called and used by functions like onSourceTap to fetch the source code for the current demo.
         */
        currentDemo: undefined
    },

    /**
     * Finds a given view by ID and shows it. End-point of the "demo/:id" route
     */
    showViewById: function (id) {
        id="Buttons";
        var nav = this.getNav();
            view = nav.getStore().getNodeById(id);

        this.showView(view);
        this.setCurrentDemo(view);
        this.hideSheets();
    },

    createView: function (item) {
        var name = this.getViewName(item),
            cache = this.getViewCache(),
            ln = cache.length,
            limit = item.get('limit') || 20,
            view, i = 0, j, oldView;

        for (; i < ln; i++) {
            if (cache[i].viewName === name) {
                return cache[i];
            }
        }

        if (ln >= limit) {
            for (i = 0, j = 0; i < ln; i++) {
                oldView = cache[i];
                if (!oldView.isPainted()) {
                    oldView.destroy();
                } else {
                    cache[j++] = oldView;
                }
            }
            cache.length = j;
        }

        view = Ext.create(name);
        view.viewName = name;
        cache.push(view);
        this.setViewCache(cache);

        return view;
    },

    getViewName: function (item) {
        var name = item.get('view') || item.get('text'),
            ns = 'fo.view.';

        if (name == 'TouchEvents') {
            if (this.getApplication().getCurrentProfile().getName() === 'Tablet') {
                return ns + 'tablet.' + name;
            } else {
                return ns + 'phone.' + name;
            }
        } else {
            return ns + name;
        }
    },

    /**
     * we iterate over all of the floating sheet components and make sure they're hidden when we
     * navigate to a new view. This stops things like Picker overlays staying visible when you hit
     * the browser's back button
     */
    hideSheets: function () {
        Ext.each(Ext.ComponentQuery.query('sheet, #editorPanel'), function (sheet) {
            if(sheet instanceof Ext.Menu) {
                Ext.Viewport.hideMenu(sheet);
            }else {
                sheet.setHidden(true);
            }
        });
    }
});
