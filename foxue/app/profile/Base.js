Ext.define('fo.profile.Base', {
    extend: 'Ext.app.Profile',

    launch: function() {
    },

    onAnimationEnd: function(animator, animation, element) {
        var delay = (Date.now() - animation.startTime) - animation.getDuration(),
                benchmark = this.benchmark,
                item;

        item = benchmark.add({
            html: element.id + ' <b>' + delay + '</b>'
        });

        setTimeout(function() {
            item.destroy();
        }, 5000);
    }
});
