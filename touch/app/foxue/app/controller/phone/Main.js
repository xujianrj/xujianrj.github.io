Ext.define('fo.controller.phone.Main', {
    extend: 'fo.controller.Main',

    config: {
        refs: {
            touchEvents: 'touchevents',
            consoleButton: 'button[action=showConsole]'
        },

        control: {
            nav: {
                back: 'onBackTap'
            },
            consoleButton: {
                tap: 'showTouchEventConsole'
            }
        }
    },

    /**
     * This is called whenever the user taps on an item in the main navigation NestedList
     */
    onNavTap: function(nestedList, list, index) {
        var record = list.getStore().getAt(index);

        if (record.isLeaf()) {
            this.redirectTo(record);
        } else {
            this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
                url: 'menu/' + record.get('id')
            }));
        }
    },

    /**
     * In the Phone Profile only we support routing through to a menu page (urls like "menu/ui"). This function
     * just sets everything up to show that menu
     */
    showMenuById: function(id) {
        var nav  = this.getNav(),
            store = nav.getStore(),
            item = (!id || id == 'root') ? store.getRoot() : store.getNodeById(id);

        if (item) {
            nav.goToNode(item);
            this.getToolbar().setTitle(item.get('text'));
            this.getSourceButton().setHidden(true);
            this.getSourceOverlay().setHidden(true);
            this.hideSheets();
        }
    },

    showView: function(item) {
        var nav    = this.getNav(),
            title  = item.get('text'),
            view   = this.createView(item),
            layout = nav.getLayout(),
            anim   = item.get('animation'),
            initialAnim = layout.getAnimation(),
            newAnim;

        if (anim) {
            layout.setAnimation(anim);
            newAnim = layout.getAnimation();
        }

        nav.setDetailCard(view);
        nav.goToNode(item.parentNode);
        nav.goToLeaf(item);

        if (newAnim) {
            newAnim.on('animationend', function() {
                layout.setAnimation(initialAnim);
            }, this, { single: true });
        }

        this.getToolbar().setTitle(title);
        this.getSourceButton().setHidden(false);
    },

    /**
     * This is called whenever the user hits the Back button on the main navigation NestedList. It hides the
     * "View Source" button as we do no want to see that when we are in the NestedList itself
     */
    onBackTap: function(nestedList, node) {
        //this means we just hit back out of a detail card
        if (node.isLeaf()) {
            this.getSourceButton().setHidden(true);
        }

        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'menu/' + node.parentNode.get('id')
        }), true);
    },

    /**
     * This is called whenever the user hits the 'Console' button on the TouchEvents view. It just makes sure
     * that the view is showing the console card.
     */
    showTouchEventConsole: function(button) {
        this.getTouchEvents().showConsole();
    }
});