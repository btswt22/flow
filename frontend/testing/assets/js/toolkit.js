+ function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            s = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var a = function() {
            i || t(s).trigger(t.support.transition.end)
        };
        return setTimeout(a, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.affix"),
                n = "object" == typeof e && e;
            a || s.data("bs.affix", a = new i(this, n)), "string" == typeof e && a[e]()
        })
    }
    var i = function(e, s) {
        this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, s) {
        var a = this.$target.scrollTop(),
            n = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > a ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? a + this.unpin <= n.top ? !1 : "bottom" : t - s >= a + o ? !1 : "bottom";
        var r = null == this.affixed,
            h = r ? a : n.top,
            l = r ? o : e;
        return null != i && i >= a ? "top" : null != s && h + l >= t - s ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                s = this.options.offset,
                a = s.top,
                n = s.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (n = a = s), "function" == typeof a && (a = s.top(this.$element)), "function" == typeof n && (n = s.bottom(this.$element));
            var r = this.getState(o, e, a, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var h = "affix" + (r ? "-" + r : ""),
                    l = t.Event(h + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: o - e - n
            })
        }
    };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                s = i.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.alert");
            a || i.data("bs.alert", a = new s(this)), "string" == typeof e && a[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        s = function(e) {
            t(e).on("click", i, this.close)
        };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 150, s.prototype.close = function(e) {
        function i() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var a = t(this),
            n = a.attr("data-target");
        n || (n = a.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(n);
        e && e.preventDefault(), o.length || (o = a.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i())
    };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = s, t.fn.alert.noConflict = function() {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", i, s.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.button"),
                n = "object" == typeof e && e;
            a || s.data("bs.button", a = new i(this, n)), "toggle" == e ? a.toggle() : e && a.setState(e)
        })
    }
    var i = function(e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            s = this.$element,
            a = s.is("input") ? "val" : "html",
            n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[a]()), setTimeout(t.proxy(function() {
            s[a](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var s = t(i.target);
        s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : n.slide;
            a || s.data("bs.carousel", a = new i(this, n)), "number" == typeof e ? a.to(e) : o ? a[o]() : n.interval && a.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (s && !this.options.wrap) return e;
        var a = "prev" == t ? -1 : 1,
            n = (i + a) % this.$items.length;
        return this.$items.eq(n)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, s) {
        var a = this.$element.find(".item.active"),
            n = s || this.getItemForDirection(e, a),
            o = this.interval,
            r = "next" == e ? "left" : "right",
            h = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var l = n[0],
            d = t.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: r
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, a.addClass(r), n.addClass(r), a.one("bsTransitionEnd", function() {
                n.removeClass([e, r].join(" ")).addClass("active"), a.removeClass(["active", r].join(" ")), h.sliding = !1, setTimeout(function() {
                    h.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (a.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this
    };
    var a = function(i) {
        var s, a = t(this),
            n = t(a.attr("data-target") || (s = a.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var o = t.extend({}, n.data(), a.data()),
                r = a.attr("data-slide-to");
            r && (o.interval = !1), e.call(n, o), r && n.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.collapse"),
                n = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !a && n.toggle && /show|hide/.test(e) && (n.toggle = !1), a || i.data("bs.collapse", a = new s(this, n)), "string" == typeof e && a[e]()
        })
    }
    var s = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
        toggle: !0
    }, s.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    a && a.length && (i.call(a, "hide"), e || a.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var h = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][h])
                }
            }
        }
    }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : a.call(this)
            }
        }
    }, s.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
            var a = t(s);
            this.addAriaAndCollapsedClass(e(a), a)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var a = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = a, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
        var a = t(this);
        a.attr("data-target") || s.preventDefault();
        var n = e(a),
            o = n.data("bs.collapse"),
            r = o ? "toggle" : a.data();
        i.call(n, r)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(a).remove(), t(n).each(function() {
            var s = t(this),
                a = e(s),
                n = {
                    relatedTarget: this
                };
            a.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(a[0], i.target) || (a.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))))
        }))
    }

    function s(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new o(this)), "string" == typeof e && s[e].call(i)
        })
    }
    var a = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.6", o.prototype.toggle = function(s) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var n = e(a),
                o = n.hasClass("open");
            if (i(), !o) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(s = t.Event("show.bs.dropdown", r)), s.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var a = e(s),
                    o = a.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && a.find(n).trigger("focus"), s.trigger("click");
                var r = " li:not(.disabled):visible a",
                    h = a.find(".dropdown-menu" + r);
                if (h.length) {
                    var l = h.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < h.length - 1 && l++, ~l || (l = 0), h.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = s, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, o.prototype.toggle).on("keydown.bs.dropdown.data-api", n, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, s) {
        return this.each(function() {
            var a = t(this),
                n = a.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e);
            n || a.data("bs.modal", n = new i(this, o)), "string" == typeof e ? n[e](s) : o.show && n.show(s)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var s = this,
            a = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            s.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var a = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), a && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            a ? s.$dialog.one("bsTransitionEnd", function() {
                s.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var s = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var s = t(this),
            a = s.attr("href"),
            n = t(s.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, n.data(), s.data());
        s.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(n, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.tooltip"),
                n = "object" == typeof e && e;
            (a || !/destroy|hide/.test(e)) && (a || s.data("bs.tooltip", a = new i(this, n)), "string" == typeof e && a[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), n = a.length; n--;) {
            var o = a[n];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var r = "hover" == o ? "mouseenter" : "focusin",
                    h = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(h + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) {
            i[t] != s && (e[t] = s)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !s) return;
            var a = this,
                n = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                h = /\s?auto?\s?/i,
                l = h.test(r);
            l && (r = r.replace(h, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                c = n[0].offsetWidth,
                p = n[0].offsetHeight;
            if (l) {
                var u = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + p > f.bottom ? "top" : "top" == r && d.top - p < f.top ? "bottom" : "right" == r && d.right + c > f.width ? "left" : "left" == r && d.left - c < f.left ? "right" : r, n.removeClass(u).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, c, p);
            this.applyPlacement(g, r);
            var v = function() {
                var t = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var s = this.tip(),
            a = s[0].offsetWidth,
            n = s[0].offsetHeight,
            o = parseInt(s.css("margin-top"), 10),
            r = parseInt(s.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(r) && (r = 0), e.top += o, e.left += r, t.offset.setOffset(s[0], t.extend({
            using: function(t) {
                s.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), s.addClass("in");
        var h = s[0].offsetWidth,
            l = s[0].offsetHeight;
        "top" == i && l != n && (e.top = e.top + n - l);
        var d = this.getViewportAdjustedDelta(i, e, h, l);
        d.left ? e.left += d.left : e.top += d.top;
        var c = /top|bottom/.test(i),
            p = c ? 2 * d.left - a + h : 2 * d.top - n + l,
            u = c ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(p, s[0][u], c)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function s() {
            "in" != a.hoverState && n.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e()
        }
        var a = this,
            n = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            s = "BODY" == i.tagName,
            a = i.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var n = s ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            r = s ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, a, o, r, n)
    }, i.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - s / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - s / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - o.scroll,
                h = e.top + n - o.scroll + s;
            r < o.top ? a.top = o.top - r : h > o.top + o.height && (a.top = o.top + o.height - h)
        } else {
            var l = e.left - n,
                d = e.left + n + i;
            l < o.left ? a.left = o.left - l : d > o.right && (a.left = o.left + o.width - d)
        }
        return a
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var s = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = s, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.popover"),
                n = "object" == typeof e && e;
            (a || !/destroy|hide/.test(e)) && (a || s.data("bs.popover", a = new i(this, n)), "string" == typeof e && a[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var s = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = s, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = this.options.selector || (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            a || s.data("bs.scrollspy", a = new e(this, n)), "string" == typeof i && a[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                a = e.data("target") || e.attr("href"),
                n = /^#./.test(a) && t(a);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + s, a]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(),
            a = this.offsets,
            n = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return o != (t = n[n.length - 1]) && this.activate(t);
        if (o && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) o != n[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.tab");
            a || s.data("bs.tab", a = new i(this)), "string" == typeof e && a[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(n), e.trigger(o), !o.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(s);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, s, a) {
        function n() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var o = s.find("> .active"),
            r = a && t.support.transition && (o.length && o.hasClass("fade") || !!s.find("> .fade").length);
        o.length && r ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), o.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this
    };
    var a = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery),
function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function s() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function a(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }

    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }

    function o(e, i) {
        function s(t, e) {
            return e.toLowerCase()
        }
        var a, n = t(e).data(),
            o = {},
            r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var h in n) i.test(h) && (a = h.replace(r, s), o[a] = n[h]);
        return o
    }

    function r(e) {
        var i = {};
        if (g[e] || (e = e.split("-")[0], g[e])) {
            var s = g[e];
            return t.each(f, function(t, e) {
                e in s && (i[e] = s[e])
            }), i
        }
    }
    var h = function() {
            var e = {
                get: function(t) {
                    return this.slice(t)[0]
                },
                contains: function(t) {
                    for (var e = t && t.valueOf(), i = 0, s = this.length; s > i; i++)
                        if (this[i].valueOf() === e) return i;
                    return -1
                },
                remove: function(t) {
                    this.splice(t, 1)
                },
                replace: function(e) {
                    e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                },
                clear: function() {
                    this.length = 0
                },
                copy: function() {
                    var t = new h;
                    return t.replace(this), t
                }
            };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), t.extend(i, e), i
            }
        }(),
        l = function(e, i) {
            this._process_options(i), this.dates = new h, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(v.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                return parseInt(e) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    l.prototype = {
        constructor: l,
        _process_options: function(a) {
            this._o = t.extend({}, this._o, a);
            var n = this.o = t.extend({}, this._o),
                o = n.language;
            switch (g[o] || (o = o.split("-")[0], g[o] || (o = u.language)), n.language = o, n.startView) {
                case 2:
                case "decade":
                    n.startView = 2;
                    break;
                case 1:
                case "year":
                    n.startView = 1;
                    break;
                default:
                    n.startView = 0
            }
            switch (n.minViewMode) {
                case 1:
                case "months":
                    n.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    n.minViewMode = 2;
                    break;
                default:
                    n.minViewMode = 0
            }
            n.startView = Math.max(n.startView, n.minViewMode), n.multidate !== !0 && (n.multidate = Number(n.multidate) || !1, n.multidate !== !1 && (n.multidate = Math.max(0, n.multidate))), n.multidateSeparator = String(n.multidateSeparator), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
            var r = v.parseFormat(n.format);
            if (n.startDate !== -(1 / 0) && (n.startDate = n.startDate ? n.startDate instanceof Date ? this._local_to_utc(this._zero_time(n.startDate)) : v.parseDate(n.startDate, r, n.language) : -(1 / 0)), n.endDate !== 1 / 0 && (n.endDate = n.endDate ? n.endDate instanceof Date ? this._local_to_utc(this._zero_time(n.endDate)) : v.parseDate(n.endDate, r, n.language) : 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
                    return parseInt(t, 10)
                }), n.datesDisabled = n.datesDisabled || [], !t.isArray(n.datesDisabled)) {
                var h = [];
                h.push(v.parseDate(n.datesDisabled, r, n.language)), n.datesDisabled = h
            }
            n.datesDisabled = t.map(n.datesDisabled, function(t) {
                return v.parseDate(t, r, n.language)
            });
            var l = String(n.orientation).toLowerCase().split(/\s+/g),
                d = n.orientation.toLowerCase();
            if (l = t.grep(l, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }), n.orientation = {
                    x: "auto",
                    y: "auto"
                }, d && "auto" !== d)
                if (1 === l.length) switch (l[0]) {
                    case "top":
                    case "bottom":
                        n.orientation.y = l[0];
                        break;
                    case "left":
                    case "right":
                        n.orientation.x = l[0]
                } else d = t.grep(l, function(t) {
                    return /^left|right$/.test(t)
                }), n.orientation.x = d[0] || "auto", d = t.grep(l, function(t) {
                    return /^top|bottom$/.test(t)
                }), n.orientation.y = d[0] || "auto";
                else;
            if (n.defaultViewDate) {
                var c = n.defaultViewDate.year || (new Date).getFullYear(),
                    p = n.defaultViewDate.month || 0,
                    f = n.defaultViewDate.day || 1;
                n.defaultViewDate = i(c, p, f)
            } else n.defaultViewDate = s();
            n.showOnFocus = n.showOnFocus !== e ? n.showOnFocus : !0
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, s, a, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.on(a, s)
        },
        _unapplyEvents: function(t) {
            for (var i, s, a, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.off(s, a)
        },
        _buildEvents: function() {
            var e = {
                keyup: t.proxy(function(e) {
                    -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                }, this),
                keydown: t.proxy(this.keydown, this)
            };
            this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, e]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), e],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: t.proxy(this.click, this)
                }],
                [t(window), {
                    resize: t.proxy(this.place, this)
                }],
                [t(document), {
                    "mousedown touchstart": t.proxy(function(t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function() {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var s = i || this.dates.get(-1),
                a = this._utc_to_local(s);
            this.element.trigger({
                type: e,
                date: a,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return v.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function() {
            return this.element.attr("readonly") ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this)
        },
        hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        },
        remove: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates, function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var t = this.dates.get(-1);
            return "undefined" != typeof t ? new Date(t) : null
        },
        clearDates: function() {
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        },
        setDate: n("setDates"),
        setUTCDate: n("setUTCDates"),
        setValue: function() {
            var t = this.getFormattedDate();
            return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(), this
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var s = this.o.language;
            return t.map(this.dates, function(t) {
                return v.formatDate(t, i, s)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function(t) {
            return this._process_options({
                startDate: t
            }), this.update(), this.updateNavArrows(), this
        },
        setEndDate: function(t) {
            return this._process_options({
                endDate: t
            }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function(t) {
            return this._process_options({
                daysOfWeekDisabled: t
            }), this.update(), this.updateNavArrows(), this
        },
        setDatesDisabled: function(t) {
            this._process_options({
                datesDisabled: t
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return this;
            var e = this.picker.outerWidth(),
                i = this.picker.outerHeight(),
                s = 10,
                a = t(this.o.container).width(),
                n = t(this.o.container).height(),
                o = t(this.o.container).scrollTop(),
                r = t(this.o.container).offset(),
                h = [];
            this.element.parents().each(function() {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== e && h.push(parseInt(e))
            });
            var l = Math.max.apply(Math, h) + 10,
                d = this.component ? this.component.parent().offset() : this.element.offset(),
                c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                p = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                u = d.left - r.left,
                f = d.top - r.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - p)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= d.left - s) : u + e > a ? (this.picker.addClass("datepicker-orient-right"), u = d.left + p - e) : this.picker.addClass("datepicker-orient-left");
            var g, v, m = this.o.orientation.y;
            if ("auto" === m && (g = -o + f - i, v = o + n - (f + c + i), m = Math.max(g, v) === v ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f += c : f -= i + parseInt(this.picker.css("padding-top")), this.o.rtl) {
                var y = a - (u + p);
                this.picker.css({
                    top: f,
                    right: y,
                    zIndex: l
                })
            } else this.picker.css({
                top: f,
                left: u,
                zIndex: l
            });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var e = this.dates.copy(),
                i = [],
                s = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
            }, this)), s = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                return v.parseDate(t, this.o.format, this.o.language)
            }, this)), i = t.grep(i, t.proxy(function(t) {
                return t < this.o.startDate || t > this.o.endDate || !t
            }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), s ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this
        },
        fillDow: function() {
            var t = this.o.weekStart,
                e = "<tr>";
            if (this.o.calendarWeeks) {
                this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                    return parseInt(e) + 1
                });
                var i = '<th class="cw">&#160;</th>';
                e += i
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + g[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + g[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e, function(t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function(e) {
            var i = [],
                s = this.viewDate.getUTCFullYear(),
                n = this.viewDate.getUTCMonth(),
                o = new Date;
            return e.getUTCFullYear() < s || e.getUTCFullYear() === s && e.getUTCMonth() < n ? i.push("old") : (e.getUTCFullYear() > s || e.getUTCFullYear() === s && e.getUTCMonth() > n) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                return a(e, t)
            }).length > 0 && i.push("disabled", "disabled-date"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i
        },
        fill: function() {
            var s, a = new Date(this.viewDate),
                n = a.getUTCFullYear(),
                o = a.getUTCMonth(),
                r = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                c = g[this.o.language].today || g.en.today || "",
                p = g[this.o.language].clear || g.en.clear || "";
            if (!isNaN(n) && !isNaN(o)) {
                this.picker.find(".datepicker-days thead .datepicker-switch").text(g[this.o.language].months[o] + " " + n), this.picker.find("tfoot .today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(p).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var u = i(n, o - 1, 28),
                    f = v.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());
                u.setUTCDate(f), u.setUTCDate(f - (u.getUTCDay() - this.o.weekStart + 7) % 7);
                var m = new Date(u);
                m.setUTCDate(m.getUTCDate() + 42), m = m.valueOf();
                for (var y, b = []; u.valueOf() < m;) {
                    if (u.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                        var w = new Date(+u + (this.o.weekStart - u.getUTCDay() - 7) % 7 * 864e5),
                            D = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                            C = new Date(Number(C = i(D.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
                            T = (D - C) / 864e5 / 7 + 1;
                        b.push('<td class="cw">' + T + "</td>")
                    }
                    if (y = this.getClassNames(u), y.push("day"), this.o.beforeShowDay !== t.noop) {
                        var k = this.o.beforeShowDay(this._utc_to_local(u));
                        k === e ? k = {} : "boolean" == typeof k ? k = {
                            enabled: k
                        } : "string" == typeof k && (k = {
                            classes: k
                        }), k.enabled === !1 && y.push("disabled"), k.classes && (y = y.concat(k.classes.split(/\s+/))), k.tooltip && (s = k.tooltip)
                    }
                    y = t.unique(y), b.push('<td class="' + y.join(" ") + '"' + (s ? ' title="' + s + '"' : "") + ">" + u.getUTCDate() + "</td>"), s = null, u.getUTCDay() === this.o.weekEnd && b.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
                var $ = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
                if (t.each(this.dates, function(t, e) {
                        e.getUTCFullYear() === n && $.eq(e.getUTCMonth()).addClass("active")
                    }), (r > n || n > l) && $.addClass("disabled"), n === r && $.slice(0, h).addClass("disabled"), n === l && $.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var x = this;
                    t.each($, function(e, i) {
                        if (!t(i).hasClass("disabled")) {
                            var s = new Date(n, e, 1),
                                a = x.o.beforeShowMonth(s);
                            a === !1 && t(i).addClass("disabled")
                        }
                    })
                }
                b = "", n = 10 * parseInt(n / 10, 10);
                var S = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
                n -= 1;
                for (var _, U = t.map(this.dates, function(t) {
                        return t.getUTCFullYear()
                    }), E = -1; 11 > E; E++) _ = ["year"], -1 === E ? _.push("old") : 10 === E && _.push("new"), -1 !== t.inArray(n, U) && _.push("active"), (r > n || n > l) && _.push("disabled"), b += '<span class="' + _.join(" ") + '">' + n + "</span>", n += 1;
                S.html(b)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.picker.find(".prev").css(this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        }), this.picker.find(".next").css(this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.picker.find(".prev").css(this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        }), this.picker.find(".next").css(this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? {
                            visibility: "hidden"
                        } : {
                            visibility: "visible"
                        })
                }
            }
        },
        click: function(e) {
            e.preventDefault();
            var s, a, n, o = t(e.target).closest("span, td, th");
            if (1 === o.length) switch (o[0].nodeName.toLowerCase()) {
                case "th":
                    switch (o[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var r = v.modes[this.viewMode].navStep * ("prev" === o[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, r), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, r), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var h = new Date;
                            h = i(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0), this.showMode(-2);
                            var l = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(h, l);
                            break;
                        case "clear":
                            this.clearDates()
                    }
                    break;
                case "span":
                    o.hasClass("disabled") || (this.viewDate.setUTCDate(1), o.hasClass("month") ? (n = 1, a = o.parent().find("span").index(o), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(s, a, n))) : (n = 1, a = 0, s = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(s), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(s, a, n))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    o.hasClass("day") && !o.hasClass("disabled") && (n = parseInt(o.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth(), o.hasClass("old") ? 0 === a ? (a = 11, s -= 1) : a -= 1 : o.hasClass("new") && (11 === a ? (a = 0, s += 1) : a += 1), this._setDate(i(s, a, n)))
            }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), -1 !== e ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveMonth: function(t, i) {
            if (!t) return e;
            if (!i) return t;
            var s, a, n = new Date(t.valueOf()),
                o = n.getUTCDate(),
                r = n.getUTCMonth(),
                h = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === h) a = -1 === i ? function() {
                return n.getUTCMonth() === r
            } : function() {
                return n.getUTCMonth() !== s
            }, s = r + i, n.setUTCMonth(s), (0 > s || s > 11) && (s = (s + 12) % 12);
            else {
                for (var l = 0; h > l; l++) n = this.moveMonth(n, i);
                s = n.getUTCMonth(), n.setUTCDate(o), a = function() {
                    return s !== n.getUTCMonth()
                }
            }
            for (; a();) n.setUTCDate(--o), n.setUTCMonth(s);
            return n
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (!this.picker.is(":visible")) return void(27 === t.keyCode && this.show());
            var e, i, a, n = !1,
                o = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(o, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(o, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()), i.setUTCDate(i.getUTCDate() + e), a = new Date(o), a.setUTCDate(o.getUTCDate() + e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(o, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(o, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()), i.setUTCDate(i.getUTCDate() + 7 * e), a = new Date(o), a.setUTCDate(o.getUTCDate() + 7 * e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    o = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(o), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (n) {
                this._trigger(this.dates.length ? "changeDate" : "clearDate");
                var r;
                this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change()
            }
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    var d = function(e, i) {
        this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
            return t.jquery ? t[0] : t
        }), delete i.inputs, p.call(t(this.inputs), i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    d.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers, function(t) {
                return t.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates, function(t) {
                return t.valueOf()
            });
            t.each(this.pickers, function(t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function(e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker"),
                    s = i.getUTCDate(),
                    a = t.inArray(e.target, this.inputs),
                    n = a - 1,
                    o = a + 1,
                    r = this.inputs.length;
                if (-1 !== a) {
                    if (t.each(this.pickers, function(t, e) {
                            e.getUTCDate() || e.setUTCDate(s)
                        }), s < this.dates[n])
                        for (; n >= 0 && s < this.dates[n];) this.pickers[n--].setUTCDate(s);
                    else if (s > this.dates[o])
                        for (; r > o && s > this.dates[o];) this.pickers[o++].setUTCDate(s);
                    this.updateDates(), delete this.updating
                }
            }
        },
        remove: function() {
            t.map(this.pickers, function(t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var c = t.fn.datepicker,
        p = function(i) {
            var s = Array.apply(null, arguments);
            s.shift();
            var a;
            return this.each(function() {
                var n = t(this),
                    h = n.data("datepicker"),
                    c = "object" == typeof i && i;
                if (!h) {
                    var p = o(this, "date"),
                        f = t.extend({}, u, p, c),
                        g = r(f.language),
                        v = t.extend({}, u, g, p, c);
                    if (n.hasClass("input-daterange") || v.inputs) {
                        var m = {
                            inputs: v.inputs || n.find("input").toArray()
                        };
                        n.data("datepicker", h = new d(this, t.extend(v, m)))
                    } else n.data("datepicker", h = new l(this, v))
                }
                return "string" == typeof i && "function" == typeof h[i] && (a = h[i].apply(h, s), a !== e) ? !1 : void 0
            }), a !== e ? a : this
        };
    t.fn.datepicker = p;
    var u = t.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: t.noop,
            beforeShowMonth: t.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            toggleActive: !1,
            daysOfWeekDisabled: [],
            datesDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -(1 / 0),
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0,
            disableTouchKeyboard: !1,
            container: "body"
        },
        f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = l;
    var g = t.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            }
        },
        v = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            },
            getDaysInMonth: function(t, e) {
                return [31, v.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function(t) {
                var e = t.replace(this.validParts, "\x00").split("\x00"),
                    i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: i
                }
            },
            parseDate: function(s, a, n) {
                function o() {
                    var t = this.slice(0, p[d].length),
                        e = p[d].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase()
                }
                if (!s) return e;
                if (s instanceof Date) return s;
                "string" == typeof a && (a = v.parseFormat(a));
                var r, h, d, c = /([\-+]\d+)([dmwy])/,
                    p = s.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)) {
                    for (s = new Date, d = 0; d < p.length; d++) switch (r = c.exec(p[d]), h = parseInt(r[1]), r[2]) {
                        case "d":
                            s.setUTCDate(s.getUTCDate() + h);
                            break;
                        case "m":
                            s = l.prototype.moveMonth.call(l.prototype, s, h);
                            break;
                        case "w":
                            s.setUTCDate(s.getUTCDate() + 7 * h);
                            break;
                        case "y":
                            s = l.prototype.moveYear.call(l.prototype, s, h)
                    }
                    return i(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), 0, 0, 0)
                }
                p = s && s.match(this.nonpunctuation) || [], s = new Date;
                var u, f, m = {},
                    y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    b = {
                        yyyy: function(t, e) {
                            return t.setUTCFullYear(e)
                        },
                        yy: function(t, e) {
                            return t.setUTCFullYear(2e3 + e)
                        },
                        m: function(t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; 0 > e;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t
                        },
                        d: function(t, e) {
                            return t.setUTCDate(e)
                        }
                    };
                b.M = b.MM = b.mm = b.m, b.dd = b.d, s = i(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
                var w = a.parts.slice();
                if (p.length !== w.length && (w = t(w).filter(function(e, i) {
                        return -1 !== t.inArray(i, y)
                    }).toArray()), p.length === w.length) {
                    var D;
                    for (d = 0, D = w.length; D > d; d++) {
                        if (u = parseInt(p[d], 10), r = w[d], isNaN(u)) switch (r) {
                            case "MM":
                                f = t(g[n].months).filter(o), u = t.inArray(f[0], g[n].months) + 1;
                                break;
                            case "M":
                                f = t(g[n].monthsShort).filter(o), u = t.inArray(f[0], g[n].monthsShort) + 1
                        }
                        m[r] = u
                    }
                    var C, T;
                    for (d = 0; d < y.length; d++) T = y[d], T in m && !isNaN(m[T]) && (C = new Date(s), b[T](C, m[T]), isNaN(C) || (s = C))
                }
                return s
            },
            formatDate: function(e, i, s) {
                if (!e) return "";
                "string" == typeof i && (i = v.parseFormat(i));
                var a = {
                    d: e.getUTCDate(),
                    D: g[s].daysShort[e.getUTCDay()],
                    DD: g[s].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: g[s].monthsShort[e.getUTCMonth()],
                    MM: g[s].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                a.dd = (a.d < 10 ? "0" : "") + a.d,
                    a.mm = (a.m < 10 ? "0" : "") + a.m, e = [];
                for (var n = t.extend([], i.separators), o = 0, r = i.parts.length; r >= o; o++) n.length && e.push(n.shift()), e.push(a[i.parts[o]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    v.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = c, this
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), p.call(i, "show"))
    }), t(function() {
        p.call(t('[data-provide="datepicker-inline"]'))
    })
}(window.jQuery), $(function() {
    var Charts = {
        _HYPHY_REGEX: /-([a-z])/g,
        _cleanAttr: function(t) {
            delete t.chart, delete t.value, delete t.labels
        },
        doughnut: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = eval(attrData.value);
            Charts._cleanAttr(attrData);
            var options = $.extend({
                responsive: !0,
                animation: !1,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 80
            }, attrData);
            new Chart(element.getContext("2d")).Doughnut(data, options)
        },
        bar: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = {
                    labels: eval(attrData.labels),
                    datasets: eval(attrData.value).map(function(t, e) {
                        return $.extend({
                            fillColor: e % 2 ? "#42a5f5" : "#1bc98e",
                            strokeColor: "transparent"
                        }, t)
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                responsive: !0,
                animation: !1,
                scaleShowVerticalLines: !1,
                scaleOverride: !0,
                scaleSteps: 4,
                scaleStepWidth: 25,
                scaleStartValue: 0,
                barValueSpacing: 10,
                scaleFontColor: "rgba(0,0,0,.4)",
                scaleFontSize: 14,
                scaleLineColor: "rgba(0,0,0,.05)",
                scaleGridLineColor: "rgba(0,0,0,.05)",
                barDatasetSpacing: 2
            }, attrData);
            new Chart(element.getContext("2d")).Bar(data, options)
        },
        line: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = {
                    labels: eval(attrData.labels),
                    datasets: eval(attrData.value).map(function(t) {
                        return $.extend({
                            fillColor: "rgba(66, 165, 245, .2)",
                            strokeColor: "#42a5f5",
                            pointStrokeColor: "#fff"
                        }, t)
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                animation: !1,
                responsive: !0,
                bezierCurve: !0,
                bezierCurveTension: .25,
                scaleShowVerticalLines: !1,
                pointDot: !1,
                tooltipTemplate: "<%= value %>",
                scaleOverride: !0,
                scaleSteps: 3,
                scaleStepWidth: 1e3,
                scaleStartValue: 2e3,
                scaleLineColor: "rgba(0,0,0,.05)",
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleFontColor: "rgba(0,0,0,.4)",
                scaleFontSize: 14,
                scaleLabel: function(t) {
                    return t.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                }
            }, attrData);
            new Chart(element.getContext("2d")).Line(data, options)
        },
        "spark-line": function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = {
                    labels: eval(attrData.labels),
                    datasets: eval(attrData.value).map(function(t) {
                        return $.extend({
                            fillColor: "rgba(255,255,255,.3)",
                            strokeColor: "#fff",
                            pointStrokeColor: "#fff"
                        }, t)
                    })
                };
            Charts._cleanAttr(attrData);
            var options = $.extend({
                animation: !1,
                responsive: !0,
                bezierCurve: !0,
                bezierCurveTension: .25,
                showScale: !1,
                pointDotRadius: 0,
                pointDotStrokeWidth: 0,
                pointDot: !1,
                showTooltips: !1
            }, attrData);
            new Chart(element.getContext("2d")).Line(data, options)
        }
    };
    $(document).on("redraw.bs.charts", function() {
        $("[data-chart]").each(function() {
            $(this).is(":visible") && Charts[$(this).attr("data-chart")](this)
        })
    }).trigger("redraw.bs.charts")
});