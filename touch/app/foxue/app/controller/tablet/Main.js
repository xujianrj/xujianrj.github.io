Ext.define('fo.controller.tablet.Main', {
    extend: 'fo.controller.Main',

    /**
     * This is called whenever the user taps on an item in the main navigation NestedList
     */
    onNavTap: function(nestedList, list, index) {
        var record = list.getStore().getAt(index);

        if (record.isLeaf()) {
            this.redirectTo(record);
        }
    },

    showView: function(item) {
        var nav  = this.getNav(),
            view = this.createView(item),
            main = this.getMain(),
            anim = item.get('animation'),
            layout  = main.getLayout(),
            initialAnim = layout.getAnimation(),
            newAnim;

        if (anim) {
            layout.setAnimation(anim);
            newAnim = layout.getAnimation();
        }

        nav.setDetailContainer(main);
        nav.setDetailCard(view);
        nav.goToNode(item.parentNode);
        nav.goToLeaf(item);
        nav.getActiveItem().select(item);

        if (newAnim) {
            newAnim.on('animationend', function() {
                layout.setAnimation(initialAnim);
            }, this, { single: true });
        }

        this.getToolbar().setTitle(item.get('text'));
        this.getSourceButton().setHidden(false);
    },

    showMenuById: function() {
        this.hideSheets();
    }
});