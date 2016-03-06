var App = {
    _isWithTooltips: !1,
    init: function() {
        App._tableSorters(), App._tooltips(), App._navDoc(), $(window).on("resize", App._tooltips), $(document).on("shown.bs.tab", function() {
            $(document).trigger("redraw.bs.charts")
        }), $(".docs-top").length && (App._backToTopButton(), $(window).on("scroll", App._backToTopButton))
    },
    _navDoc: function() {
        function o() {
            e.width() > 768 ? i() : t()
        }

        function t() {
            e.off("resize.theme.nav"), e.off("scroll.theme.nav"), n.css({
                position: "",
                left: "",
                top: ""
            })
        }

        function i() {
            function o() {
                i.containerTop = $(".docs-content").offset().top - 40, i.containerRight = $(".docs-content").offset().left + $(".docs-content").width() + 45, t()
            }

            function t() {
                var o = e.scrollTop(),
                    t = Math.max(o - i.containerTop, 0);
                return t ? void n.css({
                    position: "fixed",
                    left: i.containerRight,
                    top: 40
                }) : ($(n.find("li")[1]).addClass("active"), n.css({
                    position: "",
                    left: "",
                    top: ""
                }))
            }
            var i = {};
            o(), $(window).on("resize.theme.nav", o).on("scroll.theme.nav", t), $("body").scrollspy({
                target: "#markdown-toc",
                selector: "li > a"
            }), setTimeout(function() {
                $("body").scrollspy("refresh")
            }, 1e3)
        }
        var n = $("#markdown-toc"),
            e = $(window);
        n[0] && (o(), e.on("resize", o))
    },
    _backToTopButton: function() {
        $(window).scrollTop() > $(window).height() ? $(".docs-top").fadeIn() : $(".docs-top").fadeOut()
    },
    _tooltips: function() {
        if ($(window).width() > 768) {
            if (App._isWithTooltips) return;
            App._isWithTooltips = !0, $('[data-toggle="tooltip"]').tooltip()
        } else {
            if (!App._isWithTooltips) return;
            App._isWithTooltips = !1, $('[data-toggle="tooltip"]').tooltip("destroy")
        }
    },
    _tableSorters: function() {
        $('[data-sort="table"]').tablesorter({
            sortList: [
                [1, 0]
            ]
        })
    }
};
App.init();