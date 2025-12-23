(window.webpackJsonp = window.webpackJsonp || []).push([[55], {
    112: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        })), n.d(t, "b", (function () {
            return f
        }));
        n(249);
        var r = n(72), o = (n(31), n(92));

        function c(e, t) {
            var n = e.$i18n.locale, r = t.replace("/".concat(n), ""), c = e.$store.state.klook.supportLanguages,
                l = window.process.env.BASE_LINK,
                f = [{hid: "canonical", rel: "canonical", href: "".concat(l, "/").concat(n).concat(r)}];
            return c.forEach((function (t) {
                var n = o.f[t] || t, c = "".concat(l, "/").concat(t).concat(r);
                t === e.$i18n.fallbackLocale && (n = "x-default", c = "".concat(l).concat(r)), f.push({
                    hid: "ah-".concat(n),
                    rel: "alternate",
                    href: c,
                    hreflang: n
                }), "zh-TW" === t && f.push({hid: "ah-zh-Hant", rel: "alternate", href: c, hreflang: "zh-Hant"})
            })), f
        }

        var l = {
            desktop: function (e) {
                return {
                    meta: [e.$setMeta({
                        name: "X-UA-Compatible",
                        content: "IE=edge,chrome=1"
                    }), e.$setMeta({name: "renderer", content: "webkit"}), e.$setMeta({
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })], link: [], script: []
                }
            }, mobile: function (e) {
                return {
                    meta: [e.$setMeta({
                        name: "viewport",
                        content: "initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
                    }), e.$setMeta({
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }), e.$setMeta({
                        name: "apple-touch-fullscreen",
                        content: "yes"
                    }), e.$setMeta({name: "format-detection", content: "telephone=no,email=no"})], link: [], script: []
                }
            }
        };

        function f(e) {
            var t = e.$i18n.locale, n = e.$store.state.klook.platform, c = l[n](e), f = [];
            if (e.$store.state.klook.platformMp) {
                f.push({src: "https://cdn.klook.com/s/dist_web/klook-mp/dist/sdk/klook-mp-sdk.1.1.3.js"})
            }
            return {
                htmlAttrs: {lang: o.f[t] || t},
                bodyAttrs: {class: e.$route.meta.bodyClass},
                meta: [{charset: "utf-8"}].concat(Object(r.a)(c.meta)),
                link: [{rel: "dns-prefetch", href: "https://res.klook.com"}, {
                    rel: "dns-prefetch",
                    href: "https://cdn.klook.com"
                }].concat(Object(r.a)(c.link)),
                script: [{
                    src: window.process.env.GALILEO_URL,
                    type: "text/javascript"
                }].concat(Object(r.a)(c.script), f),
                __dangerouslyDisableSanitizers: ["script", "noscript"]
            }
        }
    }, 129: function (e, t, n) {
    }, 130: function (e, t, n) {
    }, 131: function (e, t, n) {
    }, 132: function (e, t, n) {
    }, 133: function (e, t, n) {
    }, 134: function (e, t, n) {
    }, 139: function (e, t, n) {
        "use strict";
        n(9), n(64), n(32), n(15), n(37), n(42);
        var r = n(1), o = window.requestIdleCallback || function (e) {
            var t = Date.now();
            return setTimeout((function () {
                e({
                    didTimeout: !1, timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }), 1)
        }, c = window.cancelIdleCallback || function (e) {
            clearTimeout(e)
        }, l = window.IntersectionObserver && new window.IntersectionObserver((function (e) {
            e.forEach((function (e) {
                var t = e.intersectionRatio, link = e.target;
                t <= 0 || link.__prefetch()
            }))
        }));
        t.a = {
            name: "NuxtLink",
            extends: r.default.component("RouterLink"),
            props: {prefetch: {type: Boolean, default: !0}, noPrefetch: {type: Boolean, default: !1}},
            mounted: function () {
                this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {timeout: 2e3}))
            },
            beforeDestroy: function () {
                c(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function () {
                    l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
                }, shouldPrefetch: function () {
                    return this.getPrefetchComponents().length > 0
                }, canPrefetch: function () {
                    var e = navigator.connection;
                    return !(this.$klook.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                }, getPrefetchComponents: function () {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (e) {
                        return e.components.default
                    })).filter((function (e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                }, prefetchLink: function () {
                    if (this.canPrefetch()) {
                        l.unobserve(this.$el);
                        var e = this.getPrefetchComponents(), t = !0, n = !1, r = void 0;
                        try {
                            for (var o, c = e[Symbol.iterator](); !(t = (o = c.next()).done); t = !0) {
                                var f = o.value, d = f();
                                d instanceof Promise && d.catch((function () {
                                })), f.__prefetched = !0
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                t || null == c.return || c.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }
            }
        }
    }, 163: function (e, t, n) {
        "use strict";
        var r = {};
        r.voucherDeeplinkRedirect = n(323), r.voucherDeeplinkRedirect = r.voucherDeeplinkRedirect.default || r.voucherDeeplinkRedirect, t.a = r
    }, 167: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return c
        })), n.d(t, "b", (function () {
            return l
        })), n.d(t, "a", (function () {
            return f
        }));
        n(37), n(42), n(31);
        var r = "https://res.klook.com/image/upload/fl_lossy.progressive,", o = {
            activity_card: "".concat(r, "q_65/c_fill,w_800,h_448/activities/"),
            hot_destination: "".concat(r, "q_65/c_fill,w_480,h_384/cities/"),
            city_top_banner: "".concat(r, "q_65/c_fill,w_1920,h_450/cities/"),
            theme_act_pic: "".concat(r, "q_65/c_fill,w_499,h_398/activities/"),
            m_activity_card_xs: "".concat(r, "q_65/c_fill,w_640,h_368/activities/"),
            m_activity_card_xs_160: "".concat(r, "q_65/c_fill,w_160,h_160/activities/"),
            m_activity_card_xs_288: "".concat(r, "q_65/c_fill,w_288,h_288/activities/"),
            m_country_destination: "".concat(r, "q_95/c_fill,w_336,h_188/cities/"),
            my_reviews: "".concat(r, "q_95/c_fill,w_240,h_160/activities/"),
            m_hot_destination: "".concat(r, "q_95/c_fill,w_400,h_533/cities/"),
            fnb_mvp_activites: "".concat(r, "q_65/c_fill,w_372,h_372/activities/")
        };

        function c(e, t, n, r) {
            if (/^https?:\/\//.test(e)) return e;
            var c = o[t] || "", l = "".concat(c).concat(e);
            return n && l.indexOf("res.klook.com") > 0 && (l = l.replace(/.(jpg|png|jpeg|gif)$/, ".webp")), "activity_card" === t && (l = l.replace("w_800,h_448", "w_750,h_420"), r || (l = l.replace("w_750,h_420", "w_375,h_210"))), "m_activity_card_xs_288" === t && (r || (l = l.replace("w_288,h_288", "w_144,h_144"))), l
        }

        var l = function (e, t) {
            var n = e;
            return t && e.includes("res.klook.com") && (n = e.replace(/.(jpg|png|jpeg|gif)$/, ".webp")), n
        };

        function f(e) {
            var t = "https://cdn.klook.com/upload/img200X200/", n = window.process.env.APP_ENV;
            return e && e !== t && "avatar.png" !== e ? /^https?:\/\//.test(e) ? e : "production" === n ? "".concat(t).concat(e) : e : "".concat(t, "avatar.png")
        }
    }, 308: function (e, t, n) {
        e.exports = n(309)
    }, 309: function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            n(63), n(64), n(32);
            var t = n(2), r = (n(54), n(65), n(13)),
                o = (n(37), n(42), n(15), n(9), n(24), n(36), n(151), n(316), n(320), n(322), n(1)), c = n(215),
                l = n(163), f = n(5), d = n(90), h = n(139);
            o.default.component(h.a.name, h.a), o.default.component("NLink", h.a), e.fetch || (e.fetch = c.a);
            var v, m, y = [], _ = window.__KLOOK__ || {};
            Object.assign(o.default.config, {
                warnHandler: function (e, t, n) {
                    if ("production" === window.process.env.APP_ENV) {
                        var r = window.__KLOOK__.state.klook;
                        t.$logquery && t.$logquery.service({
                            timestamp: Date.now(),
                            level: "W",
                            tag: "client",
                            uid: "",
                            message: JSON.stringify({
                                errorMessage: e,
                                errorStack: n,
                                more: {ip: r.ip, ipCountry: r.ipCountry, isLoggedIn: !1}
                            })
                        }, {headers: {"X-Platform": r.platform}})
                    } else {
                        (t && t.$logger || window.console).warn("".concat(e, "\n").concat(n))
                    }
                }, errorHandler: function (e, t, n) {
                    if ("production" !== window.process.env.APP_ENV) return (t && t.$logger || window.console).error(e.stack), !0;
                    var r = window.__KLOOK__.state.klook;
                    return t.$logquery && t.$logquery.service({
                        timestamp: Date.now(),
                        level: "E",
                        tag: "client",
                        uid: "",
                        message: JSON.stringify({
                            errorMessage: "".concat(e.message, " (").concat(n, ")"),
                            errorStack: e.stack,
                            more: {ip: r.ip, ipCountry: r.ipCountry, isLoggedIn: !1}
                        })
                    }, {headers: {"X-Platform": r.platform}}), !0
                }, silent: !0, performance: !1
            });
            var w = o.default.config.errorHandler || console.error;

            function k(e, t, n) {
                var r = function (component) {
                    var e = function (component, e) {
                        if (!component || !component.options || !component.options[e]) return {};
                        var option = component.options[e];
                        if ("function" == typeof option) {
                            for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), r = 2; r < t; r++) n[r - 2] = arguments[r];
                            return option.apply(void 0, n)
                        }
                        return option
                    }(component, "transition", t, n) || {};
                    return "string" == typeof e ? {name: e} : e
                };
                return e.map((function (e) {
                    var t = Object.assign({}, r(e));
                    if (n && n.matched.length && n.matched[0].components.default) {
                        var o = r(n.matched[0].components.default);
                        Object.keys(o).filter((function (e) {
                            return o[e] && e.toLowerCase().includes("leave")
                        })).forEach((function (e) {
                            t[e] = o[e]
                        }))
                    }
                    return t
                }))
            }

            function O(e, t, n) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                    var o, c, l, d, h = this;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (this._pathChanged = Boolean(v.nuxt.err) || n.path !== t.path, this._queryChanged = JSON.stringify(t.query) !== JSON.stringify(n.query), this._diffQuery = this._queryChanged ? Object(f.g)(t.query, n.query) : [], this._pathChanged && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 4, this._pathChanged || !this._queryChanged) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 8, Object(f.m)(t, (function (e, t) {
                                    return {Component: e, instance: t}
                                }));
                            case 8:
                                o = e.sent, o.some((function (e) {
                                    var r = e.Component, o = e.instance, c = r.options.watchQuery;
                                    return !0 === c || (Array.isArray(c) ? c.some((function (e) {
                                        return h._diffQuery[e]
                                    })) : "function" == typeof c && c.apply(o, [t.query, n.query]))
                                })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 11:
                                r(), e.next = 25;
                                break;
                            case 14:
                                if (e.prev = 14, e.t0 = e.catch(4), c = e.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                                    e.next = 22;
                                    break
                                }
                                return window.location.reload(!0), e.abrupt("return");
                            case 22:
                                this.error({
                                    statusCode: l,
                                    message: d
                                }), this.$klook.$emit("routeChanged", t, n, c), r();
                            case 25:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[4, 14]])
                })))).apply(this, arguments)
            }

            function j(e, t) {
                return _.serverRendered && t && Object(f.a)(e, t), e._Ctor = e, e
            }

            function C(e) {
                var path = Object(f.d)(e.options.base, e.options.mode);
                return Object(f.c)(e.match(path), function () {
                    var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r, o, c) {
                        var l;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if ("function" != typeof t || t.options) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3, t();
                                case 3:
                                    t = e.sent;
                                case 4:
                                    return l = j(Object(f.n)(t), _.data ? _.data[c] : null), r.components[o] = l, e.abrupt("return", l);
                                case 7:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t, n, r, o, c) {
                        return e.apply(this, arguments)
                    }
                }())
            }

            function S(e, t, n) {
                var r = this, o = [], c = !1;
                if (void 0 !== n && (o = [], (n = Object(f.n)(n)).options.middleware && (o = o.concat(n.options.middleware)), e.forEach((function (e) {
                    e.options.middleware && (o = o.concat(e.options.middleware))
                }))), o = o.map((function (e) {
                    return "function" == typeof e ? e : ("function" != typeof l.a[e] && (c = !0, r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e
                    })), l.a[e])
                })), !c) return Object(f.j)(o, t)
            }

            function $(e, t, n) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = Object(r.a)(regeneratorRuntime.mark((function e(t, n, r) {
                    var o, c, l, h, m, _, w, O, x, j, C, $, P, E, R, T, A, D = this;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 2:
                                return t === n ? y = [] : (o = [], y = Object(f.e)(n, o).map((function (e, i) {
                                    return Object(f.b)(n.matched[o[i]].path)(n.params)
                                }))), c = !1, l = function (path) {
                                    n.path === path.path && D.$loading.finish && D.$loading.finish(), n.path !== path.path && D.$loading.pause && D.$loading.pause(), c || (c = !0, r(path))
                                }, e.next = 7, Object(f.o)(v, {route: t, from: n, next: l.bind(this)});
                            case 7:
                                if (this._dateLastError = v.nuxt.dateErr, this._hadError = Boolean(v.nuxt.err), h = [], (m = Object(f.e)(t, h)).length) {
                                    e.next = 25;
                                    break
                                }
                                return e.next = 14, S.call(this, m, v.context);
                            case 14:
                                if (!c) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return");
                            case 16:
                                return e.next = 18, this.loadLayout("function" == typeof d.a.layout ? d.a.layout(v.context) : d.a.layout);
                            case 18:
                                return _ = e.sent, e.next = 21, S.call(this, m, v.context, _);
                            case 21:
                                if (!c) {
                                    e.next = 23;
                                    break
                                }
                                return e.abrupt("return");
                            case 23:
                                return v.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }), e.abrupt("return", r());
                            case 25:
                                return m.forEach((function (e) {
                                    e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                })), this.setTransitions(k(m, t, n)), e.prev = 27, e.next = 30, S.call(this, m, v.context);
                            case 30:
                                if (!c) {
                                    e.next = 32;
                                    break
                                }
                                return e.abrupt("return");
                            case 32:
                                if (!v.context._errored) {
                                    e.next = 34;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 34:
                                return "function" == typeof (w = m[0].options.layout) && (w = w(v.context)), e.next = 38, this.loadLayout(w);
                            case 38:
                                return w = e.sent, e.next = 41, S.call(this, m, v.context, w);
                            case 41:
                                if (!c) {
                                    e.next = 43;
                                    break
                                }
                                return e.abrupt("return");
                            case 43:
                                if (!v.context._errored) {
                                    e.next = 45;
                                    break
                                }
                                return e.abrupt("return", r());
                            case 45:
                                O = !0, e.prev = 46, x = !0, j = !1, C = void 0, e.prev = 50, $ = m[Symbol.iterator]();
                            case 52:
                                if (x = (P = $.next()).done) {
                                    e.next = 64;
                                    break
                                }
                                if ("function" == typeof (E = P.value).options.validate) {
                                    e.next = 56;
                                    break
                                }
                                return e.abrupt("continue", 61);
                            case 56:
                                return e.next = 58, E.options.validate(v.context);
                            case 58:
                                if (O = e.sent) {
                                    e.next = 61;
                                    break
                                }
                                return e.abrupt("break", 64);
                            case 61:
                                x = !0, e.next = 52;
                                break;
                            case 64:
                                e.next = 70;
                                break;
                            case 66:
                                e.prev = 66, e.t0 = e.catch(50), j = !0, C = e.t0;
                            case 70:
                                e.prev = 70, e.prev = 71, x || null == $.return || $.return();
                            case 73:
                                if (e.prev = 73, !j) {
                                    e.next = 76;
                                    break
                                }
                                throw C;
                            case 76:
                                return e.finish(73);
                            case 77:
                                return e.finish(70);
                            case 78:
                                e.next = 84;
                                break;
                            case 80:
                                return e.prev = 80, e.t1 = e.catch(46), this.error({
                                    statusCode: e.t1.statusCode || "500",
                                    message: e.t1.message
                                }), e.abrupt("return", r());
                            case 84:
                                if (O) {
                                    e.next = 87;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }), e.abrupt("return", r());
                            case 87:
                                return e.next = 89, Promise.all(m.map((function (e, i) {
                                    if (e._path = Object(f.b)(t.matched[h[i]].path)(t.params), e._dataRefresh = !1, D._pathChanged && D._queryChanged || e._path !== y[i]) e._dataRefresh = !0; else if (!D._pathChanged && D._queryChanged) {
                                        var r = e.options.watchQuery;
                                        !0 === r ? e._dataRefresh = !0 : Array.isArray(r) ? e._dataRefresh = r.some((function (e) {
                                            return D._diffQuery[e]
                                        })) : "function" == typeof r && (R || (R = Object(f.f)(t)), e._dataRefresh = r.apply(R[i], [t.query, n.query]))
                                    }
                                    if (D._hadError || !D._isMounted || e._dataRefresh) {
                                        var o = [], c = e.options.asyncData && "function" == typeof e.options.asyncData,
                                            l = Boolean(e.options.fetch), d = c && l ? 30 : 45;
                                        if (c) {
                                            var m = Object(f.l)(e.options.asyncData, v.context).then((function (t) {
                                                Object(f.a)(e, t), D.$loading.increase && D.$loading.increase(d)
                                            }));
                                            o.push(m)
                                        }
                                        if (D.$loading.manual = !1 === e.options.loading, l) {
                                            var p = e.options.fetch(v.context);
                                            p && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (e) {
                                                D.$loading.increase && D.$loading.increase(d)
                                            })), o.push(p)
                                        }
                                        return Promise.all(o)
                                    }
                                })));
                            case 89:
                                c || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r()), e.next = 106;
                                break;
                            case 92:
                                if (e.prev = 92, e.t2 = e.catch(27), "ERR_REDIRECT" !== (T = e.t2 || {}).message) {
                                    e.next = 97;
                                    break
                                }
                                return e.abrupt("return", this.$klook.$emit("routeChanged", t, n, T));
                            case 97:
                                return y = [], Object(f.i)(T), "function" == typeof (A = d.a.layout) && (A = A(v.context)), e.next = 103, this.loadLayout(A);
                            case 103:
                                this.error(T), this.$klook.$emit("routeChanged", t, n, T), r();
                            case 106:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]])
                })))).apply(this, arguments)
            }

            function E(e, n) {
                Object(f.c)(e, (function (e, n, r, c) {
                    return "object" !== Object(t.a)(e) || e.options || ((e = o.default.extend(e))._Ctor = e, r.components[c] = e), e
                }))
            }

            function R(e) {
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                var t = this.$options.nuxt.err ? d.a.layout : e.matched[0].components.default.options.layout;
                "function" == typeof t && (t = t(v.context)), this.setLayout(t)
            }

            function T(e, t) {
                var n = this;
                if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                    var r = Object(f.f)(e), c = Object(f.e)(e);
                    o.default.nextTick((function () {
                        r.forEach((function (e, i) {
                            if (e && !e._isDestroyed && e.constructor._dataRefresh && c[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                var t = e.constructor.options.data.call(e);
                                for (var n in t) o.default.set(e.$data, n, t[n]);
                                window.$klook.$nextTick((function () {
                                    window.$klook.$emit("triggerScroll")
                                }))
                            }
                        })), R.call(n, e)
                    }))
                }
            }

            function A(e) {
                window.onKlookReadyCbs.forEach((function (t) {
                    "function" == typeof t && t(e)
                })), "function" == typeof window._onKlookLoaded && window._onKlookLoaded(e), m.afterEach((function (t, n) {
                    o.default.nextTick((function () {
                        return e.$klook.$emit("routeChanged", t, n)
                    }))
                }))
            }

            function D() {
                return (D = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, c, l, d;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return v = t.app, m = t.router, t.store, n = new o.default(v), r = _.layout || "default", e.next = 7, n.loadLayout(r);
                            case 7:
                                return n.setLayout(r), c = function () {
                                    n.$mount("#__klook"), m.afterEach(E), m.afterEach(T.bind(n)), o.default.nextTick((function () {
                                        A(n)
                                    }))
                                }, e.next = 11, Promise.all(C(m));
                            case 11:
                                if (l = e.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), l.length && (n.setTransitions(k(l, m.currentRoute)), y = m.currentRoute.matched.map((function (e) {
                                    return Object(f.b)(e.path)(m.currentRoute.params)
                                }))), n.$loading = {}, _.error && n.error(_.error), m.beforeEach(O.bind(n)), m.beforeEach($.bind(n)), !_.serverRendered) {
                                    e.next = 21;
                                    break
                                }
                                return c(), e.abrupt("return");
                            case 21:
                                d = function () {
                                    E(m.currentRoute, m.currentRoute), R.call(n, m.currentRoute), c()
                                }, $.call(n, m.currentRoute, m.currentRoute, (function (path) {
                                    if (path) {
                                        var e = m.afterEach((function (t, n) {
                                            e(), d()
                                        }));
                                        m.push(path, void 0, (function (e) {
                                            e && w(e)
                                        }))
                                    } else d()
                                }));
                            case 23:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            Object(d.b)().then((function (e) {
                return D.apply(this, arguments)
            })).catch(w)
        }.call(this, n(49))
    }, 323: function (e, t, n) {
        "use strict";
        n.r(t);
        n(37), n(42), n(54);
        var r = n(13), o = n(47), c = function () {
            var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                var r, c, l, f, d, h, v, m, y, _;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (f = t.req, d = t.route, "get" === (null === (r = f.method) || void 0 === r ? void 0 : r.toLocaleLowerCase())) {
                                e.next = 5;
                                break
                            }
                            return n(), e.abrupt("return");
                        case 5:
                            if (h = (null == f ? void 0 : f.headers["x-klook-host"]) || (null === (c = null == f ? void 0 : f.headers) || void 0 === c ? void 0 : c.host) || "", v = h.includes("klook.cn"), m = h + d.fullPath, "development" === window.process.env.APP_ENV && h.includes("localhost") || (m = "https://" + m), !v) {
                                e.next = 21;
                                break
                            }
                            return e.prev = 10, y = {
                                origin_url: m,
                                voucher_token: d.params.voucher_token
                            }, e.next = 14, t.app.$axios.$get(o.a.getVoucherDeeplinkRedirect, {params: y});
                        case 14:
                            (null == (_ = e.sent) ? void 0 : _.success) && (null === (l = null == _ ? void 0 : _.result) || void 0 === l ? void 0 : l.redirect) && t.redirect(_.result.redirect), e.next = 21;
                            break;
                        case 18:
                            e.prev = 18, e.t0 = e.catch(10), console.log("Fetch Error: ".concat(o.a.getVoucherDeeplinkRedirect), e.t0);
                        case 21:
                            n();
                        case 22:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[10, 18]])
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }();
        t.default = c
    }, 335: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "createRouter", (function () {
            return r
        }));
        var r = function (e, t) {
            var n = "en", r = "mobile";
            return n = window.__KLOOK__.state.klook.language, r = window.__KLOOK__.state.klook.platform, t.routes && (t.routes = function e(t, n, r) {
                var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], c = t.map((function (t) {
                    return o && "en" !== n && (t.path = "/".concat(n).concat(t.path)), t.components && (t.component = t.components[r], delete t.components), t.children && (t.children = e(t.children, n, r, !1)), t
                }));
                return c
            }(t.routes, n, r)), t
        }
    }, 336: function (e, t, n) {
        "use strict";
        var r = n(129);
        n.n(r).a
    }, 337: function (e, t, n) {
        "use strict";
        var r = n(130);
        n.n(r).a
    }, 339: function (e, t, n) {
    }, 341: function (e, t, n) {
        "use strict";
        var r = n(131);
        n.n(r).a
    }, 342: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function () {
            return l
        })), n.d(t, "getters", (function () {
            return f
        })), n.d(t, "mutations", (function () {
            return d
        })), n.d(t, "actions", (function () {
            return h
        }));
        n(75), n(32), n(15), n(9), n(24);
        var r = n(11), o = n(92);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        var l = function () {
            return {
                klook: {
                    language: "en",
                    backendLanguage: "en_BS",
                    supportLanguages: o.g,
                    currency: "USD",
                    currencySymbol: "US$",
                    ip: "",
                    ipCountry: "",
                    platform: "mobile",
                    isOpenHarmony: !1,
                    isIOS: !1,
                    isKlookApp: !1,
                    webp: 0,
                    retina: 0,
                    utilConfig: {},
                    platformMp: "",
                    platformHarmony: "",
                    websiteConfig: null,
                    marketId: 1,
                    market: "global"
                }
            }
        }, f = {
            language: function (e) {
                return e.klook.language
            }
        }, d = {
            SET_INITIAL_DATA: function (e, t) {
                t.language && (t.backendLanguage = Object(o.a)(t.language) || ""), e.klook = function (e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function (t) {
                            Object(r.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, e.klook, {}, t)
            }, SET_LANGUAGE: function (e, t) {
                e.klook.language = t
            }, SET_CURRENCY: function (e, t) {
                e.klook.currency = t
            }
        }, h = {
            nuxtServerInit: function (e, t) {
                var n, r, o = e.commit, c = t.req;
                if (!c.isStaticOrApi) {
                    var l = c.utilConfig || {}, f = "cmcc" === l.util_name;
                    o("SET_INITIAL_DATA", {
                        language: f ? "zh-CN" : c.language,
                        currency: f ? "CNY" : c.currency,
                        currencySymbol: c.currencySymbol,
                        ip: c.ip,
                        ipCountry: c.country,
                        platform: c.platform,
                        isOpenHarmony: c.isOpenHarmony,
                        isIOS: c.isIOS,
                        isKlookApp: c.isKlookApp,
                        webp: c.webp,
                        retina: c.retina,
                        utilConfig: l,
                        platformMp: c.platformMp,
                        platformHarmony: c.platformHarmony,
                        websiteConfig: c.websiteConfig,
                        marketId: (null === (n = c.websiteConfig) || void 0 === n ? void 0 : n.market_id) || 1,
                        market: (null === (r = c.websiteConfig) || void 0 === r ? void 0 : r.market) || "global"
                    })
                }
            }, syncLanguage: function (e, t) {
                (0, e.commit)("SET_LANGUAGE", t)
            }
        }
    }, 343: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "state", (function () {
            return v
        })), n.d(t, "mutations", (function () {
            return m
        })), n.d(t, "actions", (function () {
            return y
        }));
        n(36), n(9);
        var r, o = n(11), c = n(173), l = n.n(c), f = n(47), d = new l.a.Converter({tables: !0}), h = function (e) {
            return e.children_category_list && e.children_category_list.length > 0 ? e.children_category_list[0].category_id : e.category_id
        }, v = function () {
            return {
                popularFaqs: [],
                categories: [],
                faq: null,
                recommendFaqs: [],
                relatedFaqs: [],
                searchResults: [],
                searchResultCount: 0,
                categoryFaqs: [],
                categoryFaqTotal: 0
            }
        }, m = (r = {}, Object(o.a)(r, "SET_POPULAR_FAQS", (function (e, data) {
            e.popularFaqs = data.popularFaqs
        })), Object(o.a)(r, "SET_FAQ", (function (e, data) {
            e.faq = data.faq, e.recommendFaqs = data.recommendFaqs, e.relatedFaqs = data.relatedFaqs
        })), Object(o.a)(r, "SET_SEARCH_RESULTS", (function (e, data) {
            e.searchResultCount = data.count, e.searchResults = data.searchResults
        })), Object(o.a)(r, "SET_CATEGORY", (function (e, data) {
            e.categories = data.categories
        })), Object(o.a)(r, "SET_CATEGORY_FAQS", (function (e, data) {
            e.categoryFaqs = data.categoryFaqs, e.categoryFaqTotal = data.categoryFaqTotal
        })), r), y = {
            getPopularFaqs: function (e) {
                var t = e.commit;
                return this.$axios.$get(f.a.categoryFaqs, {
                    params: {
                        category_id: 14,
                        limit: 8,
                        page: 1
                    }
                }).then((function (e) {
                    if (e.success && e.result && e.result.faq_info_list.length > 0) {
                        var data = e.result;
                        t("SET_POPULAR_FAQS", {
                            popularFaqs: data.faq_info_list.map((function (e) {
                                return {
                                    faqId: e.faq_id,
                                    question: e.question,
                                    categoryId: e.sub_category_id || e.category_id
                                }
                            }))
                        })
                    }
                }))
            }, getFaqById: function (e, t) {
                var n = e.commit, r = t.faqId, o = {faq: null, recommendFaqs: [], relatedFaqs: []};
                return this.$axios.$get(f.a.faqDetail, {params: {faq_id: r}}).then((function (e) {
                    if (e.success && e.result) {
                        var data = e.result, t = data.recommend_faq_list || [], r = data.same_category_faq_list || [],
                            c = {
                                faq: {
                                    faqId: data.faq_id,
                                    question: data.question,
                                    answer: d.makeHtml(data.answer),
                                    voteStatus: data.helpful_status,
                                    categoryId: data.sub_category_id || data.category_id,
                                    categoryName: data.sub_category_name || data.category_name
                                }, recommendFaqs: t.map((function (e) {
                                    return {
                                        faqId: e.faq_id,
                                        question: e.question,
                                        categoryId: e.sub_category_id || e.category_id
                                    }
                                })), relatedFaqs: r.map((function (e) {
                                    return {
                                        faqId: e.faq_id,
                                        question: e.question,
                                        categoryId: data.sub_category_id || data.category_id
                                    }
                                }))
                            };
                        return n("SET_FAQ", c), c
                    }
                    return n("SET_FAQ", o), o
                })).catch((function () {
                    return n("SET_FAQ", o), o
                }))
            }, search: function (e, t) {
                var n = e.commit, r = t.keyword, o = t.limit, c = void 0 === o ? 10 : o,
                    l = {count: 0, searchResults: []};
                return r ? this.$axios.$get(f.a.faqSearchSuggest, {params: {keyword: r, limit: c}}).then((function (e) {
                    if (e.success && e.result) {
                        var data = e.result.faq_category_list || [], t = {
                            count: e.result.count || 0, searchResults: data.map((function (e) {
                                return {
                                    categoryId: e.category_id,
                                    categoryName: e.category_name,
                                    subCategoryId: e.sub_category_id,
                                    subCategoryName: e.sub_category_name,
                                    faqs: (e.faq_list || []).map((function (t) {
                                        return {
                                            faqId: t.faq_id,
                                            question: t.question,
                                            categoryId: e.sub_category_id || e.category_id
                                        }
                                    }))
                                }
                            }))
                        };
                        return n("SET_SEARCH_RESULTS", t), t
                    }
                    return n("SET_SEARCH_RESULTS", l), l
                })).catch((function () {
                    return n("SET_SEARCH_RESULTS", l), l
                })) : (n("SET_SEARCH_RESULTS", l), Promise.resolve(l))
            }, getCategories: function (e) {
                var t = e.commit, n = e.rootState, r = {categories: []};
                return this.$axios.$get(f.a.faqCategory).then((function (e) {
                    if (e.success && e.result && e.result.length > 0) {
                        var o = e.result;
                        t("SET_CATEGORY", {
                            categories: o.map((function (e) {
                                return {
                                    categoryId: h(e),
                                    level: e.category_level,
                                    type: e.category_type,
                                    name: e.name,
                                    desc: e.desc,
                                    iconUrl: e.icon_url,
                                    opened: "desktop" === n.klook.platform,
                                    children: (e.children_category_list || []).map((function (e) {
                                        return {
                                            categoryId: e.category_id,
                                            level: e.category_level,
                                            type: e.category_type,
                                            name: e.name,
                                            desc: e.desc,
                                            iconUrl: e.icon_url
                                        }
                                    }))
                                }
                            }))
                        })
                    } else t("SET_CATEGORY", r)
                })).catch((function () {
                    t("SET_CATEGORY", r)
                }))
            }, getCategoryFaqs: function (e, t) {
                var n = e.commit, r = t.categoryId, o = t.limit, c = t.page,
                    l = {categoryFaqTotal: 0, categoryFaqs: []};
                return this.$axios.$get(f.a.categoryFaqs, {
                    params: {
                        category_id: r,
                        limit: o,
                        page: c
                    }
                }).then((function (e) {
                    if (e.success && e.result && e.result.faq_info_list.length > 0) {
                        var data = e.result;
                        n("SET_CATEGORY_FAQS", {
                            categoryFaqTotal: data.count,
                            categoryFaqs: data.faq_info_list.map((function (e) {
                                return {
                                    faqId: e.faq_id,
                                    question: e.question,
                                    categoryId: e.sub_category_id || e.category_id
                                }
                            }))
                        })
                    } else n("SET_CATEGORY_FAQS", l)
                })).catch((function () {
                    n("SET_CATEGORY_FAQS", l)
                }))
            }
        }
    }, 360: function (e, t, n) {
        var map = {
            "./ar-SA": [256, 1],
            "./ar-SA.json": [256, 1],
            "./de": [257, 2],
            "./de.json": [257, 2],
            "./en": [268, 3],
            "./en-AU": [258, 4],
            "./en-AU.json": [258, 4],
            "./en-CA": [259, 5],
            "./en-CA.json": [259, 5],
            "./en-GB": [260, 6],
            "./en-GB.json": [260, 6],
            "./en-HK": [261, 7],
            "./en-HK.json": [261, 7],
            "./en-IN": [262, 8],
            "./en-IN.json": [262, 8],
            "./en-MY": [263, 9],
            "./en-MY.json": [263, 9],
            "./en-NZ": [264, 10],
            "./en-NZ.json": [264, 10],
            "./en-PH": [265, 11],
            "./en-PH.json": [265, 11],
            "./en-SG": [266, 12],
            "./en-SG.json": [266, 12],
            "./en-US": [267, 13],
            "./en-US.json": [267, 13],
            "./en.json": [268, 3],
            "./es": [269, 14],
            "./es.json": [269, 14],
            "./fr": [270, 15],
            "./fr.json": [270, 15],
            "./id": [271, 16],
            "./id.json": [271, 16],
            "./it": [272, 17],
            "./it.json": [272, 17],
            "./ja": [273, 18],
            "./ja.json": [273, 18],
            "./ko": [274, 19],
            "./ko.json": [274, 19],
            "./ms-MY": [275, 20],
            "./ms-MY.json": [275, 20],
            "./ru": [276, 21],
            "./ru.json": [276, 21],
            "./th": [277, 22],
            "./th.json": [277, 22],
            "./vi": [278, 23],
            "./vi.json": [278, 23],
            "./zh-CN": [279, 24],
            "./zh-CN.json": [279, 24],
            "./zh-HK": [280, 25],
            "./zh-HK.json": [280, 25],
            "./zh-TW": [281, 26],
            "./zh-TW.json": [281, 26]
        };

        function r(e) {
            if (!n.o(map, e)) return Promise.resolve().then((function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = map[e], r = t[0];
            return n.e(t[1]).then((function () {
                return n.t(r, 3)
            }))
        }

        r.keys = function () {
            return Object.keys(map)
        }, r.id = 360, e.exports = r
    }, 363: function (e, t, n) {
        var map = {"./common.svg": 364, "./desktop-common.svg": 365, "./mobile-common.svg": 366};

        function r(e) {
            var t = o(e);
            return n(t)
        }

        function o(e) {
            if (!n.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return map[e]
        }

        r.keys = function () {
            return Object.keys(map)
        }, r.resolve = o, e.exports = r, r.id = 363
    }, 364: function (e, t, n) {
        e.exports = n.p + "img/common-f647d4.svg"
    }, 365: function (e, t, n) {
        e.exports = n.p + "img/desktop-common-a02d14.svg"
    }, 366: function (e, t, n) {
        e.exports = n.p + "img/mobile-common-b08925.svg"
    }, 367: function (e, t, n) {
        "use strict";
        var r = n(132);
        n.n(r).a
    }, 368: function (e, t, n) {
        "use strict";
        var r = n(133);
        n.n(r).a
    }, 371: function (e, t, n) {
        "use strict";
        var r = n(134);
        n.n(r).a
    }, 372: function (e, t, n) {
        var map = {
            "./ar-SA": [282, 27],
            "./ar-SA.json": [282, 27],
            "./de": [283, 28],
            "./de.json": [283, 28],
            "./en": [294, 29],
            "./en-AU": [284, 30],
            "./en-AU.json": [284, 30],
            "./en-CA": [285, 31],
            "./en-CA.json": [285, 31],
            "./en-GB": [286, 32],
            "./en-GB.json": [286, 32],
            "./en-HK": [287, 33],
            "./en-HK.json": [287, 33],
            "./en-IN": [288, 34],
            "./en-IN.json": [288, 34],
            "./en-MY": [289, 35],
            "./en-MY.json": [289, 35],
            "./en-NZ": [290, 36],
            "./en-NZ.json": [290, 36],
            "./en-PH": [291, 37],
            "./en-PH.json": [291, 37],
            "./en-SG": [292, 38],
            "./en-SG.json": [292, 38],
            "./en-US": [293, 39],
            "./en-US.json": [293, 39],
            "./en.json": [294, 29],
            "./es": [295, 40],
            "./es.json": [295, 40],
            "./fr": [296, 41],
            "./fr.json": [296, 41],
            "./id": [297, 42],
            "./id.json": [297, 42],
            "./it": [298, 43],
            "./it.json": [298, 43],
            "./ja": [299, 44],
            "./ja.json": [299, 44],
            "./ko": [300, 45],
            "./ko.json": [300, 45],
            "./ms-MY": [301, 46],
            "./ms-MY.json": [301, 46],
            "./ru": [302, 47],
            "./ru.json": [302, 47],
            "./th": [303, 48],
            "./th.json": [303, 48],
            "./vi": [304, 49],
            "./vi.json": [304, 49],
            "./zh-CN": [305, 50],
            "./zh-CN.json": [305, 50],
            "./zh-HK": [306, 51],
            "./zh-HK.json": [306, 51],
            "./zh-TW": [307, 52],
            "./zh-TW.json": [307, 52]
        };

        function r(e) {
            if (!n.o(map, e)) return Promise.resolve().then((function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = map[e], r = t[0];
            return n.e(t[1]).then((function () {
                return n.t(r, 3)
            }))
        }

        r.keys = function () {
            return Object.keys(map)
        }, r.id = 372, e.exports = r
    }, 47: function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return o
        }));
        var r = {
            getVoucherDeeplinkRedirect: "/v1/usrcsrv/cnmigrate/voucher/deeplink/redirect",
            verify: "/v3/userserv/user/profile_service/get_simple_profile_by_token",
            profile: "/v3/userserv/user/profile_service/get_my_profile_by_token",
            menus: "/v2/platformbffsrv/vertical/menu?source=3",
            regions: "/v1/websrv/ranges",
            hotDestinations: "/v1/usrcsrv/generic/types/102",
            search: "/v1/usrcsrv/search/suggest",
            changeLanguage: "/v3/userserv/user/profile_service/change_language",
            changeCurrency: "/v3/userserv/user/profile_service/change_currency",
            commonCoupon: "/v1/usrcsrv/refer/amount",
            inviteCoupon: "/v1/usrcsrv/refer/friends",
            recentlyView: "/v1/usrcsrv/recently/viewed",
            shoppingCartCount: "/v3/order/shoppingcart/count",
            shoppingCartList: "/v3/order/shoppingcart",
            conditions: "/v1/usrcsrv/generic/types/:type",
            emailCreateSubscribe: "/v1/websrv/subscribe/:email/create",
            emailSendSubscribe: "/v1/websrv/subscribe/:email/send",
            logout: "/v1/userserv/public/user/logout_v3",
            downloadApk: "https://www.klook.com/web2/download.action",
            faqDetail: "/v1/usrcsrv/faq/detail",
            faqCategory: "/v1/usrcsrv/faq/category/get",
            faqSearchSuggest: "/v1/usrcsrv/faq/suggest",
            categoryFaqs: "/v1/usrcsrv/faq/get/by/category",
            faqFeedback: "/v1/usrcsrv/faq/comment/add",
            faqHelpful: "/v1/usrcsrv/faq/helpful/info/add",
            getChinaRail: "/v1/reappserv/railchina/train/info"
        }, o = [r.profile, "/v1/usrcsrv/voucher", "/v1/experiencesrv/dock/supplier_service/voucher_activate"];
        t.a = r
    }, 5: function (e, t, n) {
        "use strict";
        n.d(t, "i", (function () {
            return v
        })), n.d(t, "a", (function () {
            return m
        })), n.d(t, "n", (function () {
            return y
        })), n.d(t, "e", (function () {
            return _
        })), n.d(t, "f", (function () {
            return w
        })), n.d(t, "c", (function () {
            return k
        })), n.d(t, "m", (function () {
            return O
        })), n.d(t, "h", (function () {
            return x
        })), n.d(t, "o", (function () {
            return C
        })), n.d(t, "j", (function () {
            return $
        })), n.d(t, "l", (function () {
            return P
        })), n.d(t, "d", (function () {
            return E
        })), n.d(t, "b", (function () {
            return R
        })), n.d(t, "g", (function () {
            return T
        })), n.d(t, "k", (function () {
            return A
        }));
        n(75), n(32);
        var r = n(77), o = (n(46), n(171), n(155), n(2)), c = (n(55), n(56), n(91), n(141), n(31), n(54), n(13)),
            l = (n(63), n(15), n(9), n(24), n(36), n(11)), f = n(1);

        function d(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function (t) {
                    Object(l.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        function v(e) {
            f.default.config.errorHandler && f.default.config.errorHandler(e)
        }

        function m(e, t) {
            if (t || !e.options.__hasNuxtData) {
                var n = e.options._originDataFn || e.options.data || function () {
                    return {}
                };
                e.options._originDataFn = n, e.options.data = function () {
                    var data = n.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), h({}, data, {}, t)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function y(e) {
            return e.options && e._Ctor === e ? e : (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = f.default.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file), e)
        }

        function _(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function (e, r) {
                return Object.keys(e[n]).map((function (o) {
                    return t && t.push(r), e[n][o]
                }))
            })))
        }

        function w(e) {
            return _(e, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }

        function k(e, t) {
            return Array.prototype.concat.apply([], e.matched.map((function (e, n) {
                return Object.keys(e.components).reduce((function (r, o) {
                    return e.components[o] ? r.push(t(e.components[o], e.instances[o], e, o, n)) : delete e.components[o], r
                }), [])
            })))
        }

        function O(e, t) {
            return Promise.all(k(e, function () {
                var e = Object(c.a)(regeneratorRuntime.mark((function e(n, r, o, c) {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, n();
                            case 3:
                                n = e.sent;
                            case 4:
                                return o.components[c] = n = y(n), e.abrupt("return", "function" == typeof t ? t(n, r, o, c) : n);
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n, r, o) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function x(e) {
            return j.apply(this, arguments)
        }

        function j() {
            return (j = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, O(t);
                        case 4:
                            return e.abrupt("return", h({}, t, {
                                meta: _(t).map((function (e, n) {
                                    return h({}, e.options.meta, {}, (t.matched[n] || {}).meta)
                                }))
                            }));
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function C(e, t) {
            return S.apply(this, arguments)
        }

        function S() {
            return (S = Object(c.a)(regeneratorRuntime.mark((function e(t, n) {
                var c, l, f, d;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: n.payload,
                                error: n.error,
                                base: "/",
                                env: {}
                            }, n.req && (t.context.req = n.req), n.res && (t.context.res = n.res), n.ssrContext && (t.context.ssrContext = n.ssrContext), t.context.redirect = function (e, path, n) {
                                var r = +new Date, c = void 0 !== arguments ? arguments : null, l = function (e) {
                                    if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                        var t = +new Date - r;
                                        e = __in_house.get_spm_info(e, {duration: t, args: c})
                                    } catch (e) {
                                        console.warn("Get spm info error", e)
                                    }
                                    return e
                                };
                                if (e) {
                                    t.context._redirected = !0;
                                    var f = Object(o.a)(path);
                                    if ("number" == typeof e || "undefined" !== f && "object" !== f || (n = path || {}, path = e, f = Object(o.a)(path), e = 302), "object" === f && (path = t.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = M(path, n), window.location.replace(l(l(path))), new Error("ERR_REDIRECT");
                                    t.context.next({path: path, query: n, status: e})
                                }
                            }, t.context.nuxtState = window.__KLOOK__), e.next = 3, Promise.all([x(n.route), x(n.from)]);
                        case 3:
                            c = e.sent, l = Object(r.a)(c, 2), f = l[0], d = l[1], n.route && (t.context.route = f), n.from && (t.context.from = d), t.context.next = n.next, t.context._redirected = !1, t.context._errored = !1, t.context.isHMR = !1, t.context.params = t.context.route.params || {}, t.context.query = t.context.route.query || {};
                        case 15:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function $(e, t) {
            return !e.length || t._redirected || t._errored ? Promise.resolve() : P(e[0], t).then((function () {
                return $(e.slice(1), t)
            }))
        }

        function P(e, t) {
            var n;
            return (n = 2 === e.length ? new Promise((function (n) {
                e(t, (function (e, data) {
                    e && t.error(e), n(data = data || {})
                }))
            })) : e(t)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }

        function E(base, e) {
            var path = decodeURI(window.location.pathname);
            return "hash" === e ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
        }

        function R(e, t) {
            return function (e) {
                for (var t = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(o.a)(e[i]) && (t[i] = new RegExp("^(?:" + e[i].pattern + ")$"));
                return function (n, r) {
                    for (var path = "", data = n || {}, o = (r || {}).pretty ? N : encodeURIComponent, c = 0; c < e.length; c++) {
                        var l = e[c];
                        if ("string" != typeof l) {
                            var f = data[l.name || "pathMatch"], d = void 0;
                            if (null == f) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(f)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                if (0 === f.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < f.length; h++) {
                                    if (d = o(f[h]), !t[c].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + d
                                }
                            } else {
                                if (d = l.asterisk ? N(f, !0) : o(f), !t[c].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                path += l.prefix + d
                            }
                        } else path += l
                    }
                    return path
                }
            }(function (e, t) {
                var n, r = [], o = 0, c = 0, path = "", l = t && t.delimiter || "/";
                for (; null != (n = D.exec(e));) {
                    var f = n[0], d = n[1], h = n.index;
                    if (path += e.slice(c, h), c = h + f.length, d) path += d[1]; else {
                        var v = e[c], m = n[2], y = n[3], _ = n[4], w = n[5], k = n[6], O = n[7];
                        path && (r.push(path), path = "");
                        var x = null != m && null != v && v !== m, j = "+" === k || "*" === k,
                            C = "?" === k || "*" === k, S = n[2] || l, pattern = _ || w;
                        r.push({
                            name: y || o++,
                            prefix: m || "",
                            delimiter: S,
                            optional: C,
                            repeat: j,
                            partial: x,
                            asterisk: Boolean(O),
                            pattern: pattern ? L(pattern) : O ? ".*" : "[^" + I(S) + "]+?"
                        })
                    }
                }
                c < e.length && (path += e.substr(c));
                path && r.push(path);
                return r
            }(e, t))
        }

        function T(e, t) {
            var n = {}, r = h({}, e, {}, t);
            for (var o in r) String(e[o]) !== String(t[o]) && (n[o] = !0);
            return n
        }

        function A(e) {
            var t;
            if (e.message || "string" == typeof e) t = e.message || e; else try {
                t = JSON.stringify(e, null, 2)
            } catch (n) {
                t = "[".concat(e.constructor.name, "]")
            }
            return h({}, e, {
                message: t,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }

        window.onKlookReadyCbs = [], window.onKlookReady = function (e) {
            window.onKlookReadyCbs.push(e)
        };
        var D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function N(e, t) {
            var n = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(n, (function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function I(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function L(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function M(e, t) {
            var n, o = e.indexOf("://");
            -1 !== o ? (n = e.substring(0, o), e = e.substring(o + 3)) : e.startsWith("//") && (e = e.substring(2));
            var c, l = e.split("/"), f = (n ? n + "://" : "//") + l.shift(), path = l.filter(Boolean).join("/");
            if (2 === (l = path.split("#")).length) {
                var d = l, h = Object(r.a)(d, 2);
                path = h[0], c = h[1]
            }
            return f += path ? "/" + path : "", t && "{}" !== JSON.stringify(t) && (f += (2 === e.split("?").length ? "&" : "?") + function (e) {
                return Object.keys(e).sort().map((function (t) {
                    var n = e[t];
                    return null == n ? "" : Array.isArray(n) ? n.slice().map((function (e) {
                        return [t, "=", e].join("")
                    })).join("&") : t + "=" + n
                })).filter(Boolean).join("&")
            }(t)), f += c ? "#" + c : ""
        }
    }, 76: function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return c
        })), n.d(t, "d", (function () {
            return l
        })), n.d(t, "f", (function () {
            return f
        })), n.d(t, "j", (function () {
            return d
        })), n.d(t, "b", (function () {
            return h
        })), n.d(t, "e", (function () {
            return v
        })), n.d(t, "i", (function () {
            return m
        })), n.d(t, "a", (function () {
            return y
        })), n.d(t, "h", (function () {
            return _
        })), n.d(t, "c", (function () {
            return w
        }));
        n(65), n(91), n(46), n(55), n(56), n(9), n(31), n(36), n(101), n(37), n(42);
        var r = n(218), o = n.n(r), c = function (e) {
            var t = e.method.toLocaleLowerCase();
            if (["get", "post"].includes(t)) {
                var n = e[{get: "params", post: "data"}[t]];
                "mobile" === (null == n ? void 0 : n.platform) && (n.platform = "openharmony-shell")
            }
        };

        function l(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.process.env.BASE_LINK || "",
                r = "";
            return t && "en" !== t && (r = "/".concat(t)), n + r + e
        }

        function f() {
            return o()().slice(0, 8)
        }

        function d(e, t) {
            return e.replace(/:([a-z]+)/gi, (function (n, r) {
                if (!t[r]) throw new Error("url parameter not find: ".concat(e));
                return t[r]
            }))
        }

        function h(e) {
            var t = (e || "0").toString(), n = "";
            if (t.includes(".")) {
                var r = t.split(".");
                n = "".concat(r[0].toString().replace(/(?=(?!(\b))(\d{3})+$)/g, ","), ".").concat(r[1])
            } else n = t.replace(/(?=(?!(\b))(\d{3})+$)/g, ",");
            return n
        }

        function v() {
            window && "fixed" !== document.body.style.position && (window.fixScrollY = window.pageYOffset, document.body.style.position = "fixed", document.body.style.top = -window.fixScrollY + "px")
        }

        function m() {
            window && (document.body.style.position = "static", document.body.scrollTop = window.fixScrollY, document.documentElement.scrollTop = window.fixScrollY)
        }

        var y = function (e) {
            return new Promise((function (t) {
                var n = document.createElement("textarea");
                n.value = e, n.style.position = "absolute", n.style.left = "-9999px", n.readOnly = !0, n.contentEditable = "true", document.body.appendChild(n), function (e, t, n) {
                    if (navigator.userAgent.match(/ipad|iPod|iphone/i)) {
                        var r = document.createRange();
                        r.selectNodeContents(e);
                        var o = window.getSelection();
                        o.removeAllRanges(), o.addRange(r), e.setSelectionRange(t, n)
                    } else e.select()
                }(n, 0, e.length), document.execCommand("copy") ? (document.body.removeChild(n), t(!0)) : t(!1)
            }))
        }, _ = function (data) {
            var e, t,
                n = ((null === (t = null === (e = null == data ? void 0 : data.containers) || void 0 === e ? void 0 : e[0]) || void 0 === t ? void 0 : t.components) || []).find((function (e) {
                    return "voucher_title" === e.type
                }));
            return (null == n ? void 0 : n.data) || null
        }, w = function (e) {
            return e && "040001" === e.code ? "not login" : e && "040002" === e.code ? "account not match" : "404"
        }
    }, 90: function (e, t, n) {
        "use strict";
        n(54), n(75), n(32), n(15), n(9), n(24);
        var r = n(13), o = n(11), c = (n(36), n(1)), l = n(216), f = n(164), d = n.n(f), h = n(100), v = n.n(h),
            m = n(165), y = n(5);
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function () {
            window.history.scrollRestoration = "auto"
        })), window.addEventListener("load", (function () {
            window.history.scrollRestoration = "manual"
        })));
        var _ = function (e, t, n) {
            var r = !1, o = Object(y.e)(e);
            o.length < 2 && o.every((function (e) {
                return !1 !== e.options.scrollToTop
            })) ? r = {x: 0, y: 0} : o.some((function (e) {
                return e.options.scrollToTop
            })) && (r = {x: 0, y: 0}), n && (r = n);
            var c = window.$klook;
            return e.path === t.path && e.hash !== t.hash && c.$nextTick((function () {
                return c.$emit("triggerScroll")
            })), new Promise((function (t) {
                c.$once("triggerScroll", (function () {
                    if (e.hash) {
                        var n = e.hash;
                        void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                        try {
                            document.querySelector(n) && (r = {selector: n})
                        } catch (e) {
                            console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                        }
                    }
                    t(r)
                }))
            }))
        };
        c.default.use(m.a);
        var w = function (e) {
            return e.then((function (e) {
                return e.default || e
            }))
        }, k = function () {
            return w(n.e(64).then(n.bind(null, 1141)))
        }, O = function () {
            return w(n.e(63).then(n.bind(null, 1142)))
        }, x = function () {
            return w(Promise.all([n.e(0), n.e(53), n.e(76), n.e(68)]).then(n.bind(null, 1117)))
        }, j = function () {
            return w(n.e(70).then(n.bind(null, 1143)))
        }, C = function () {
            return w(Promise.all([n.e(75), n.e(66)]).then(n.bind(null, 1126)))
        }, S = function () {
            return w(Promise.all([n.e(0), n.e(53), n.e(67)]).then(n.bind(null, 1144)))
        }, $ = function () {
            return w(Promise.all([n.e(0), n.e(65)]).then(n.bind(null, 1122)))
        }, P = function () {
            return w(Promise.all([n.e(77), n.e(69)]).then(n.bind(null, 1120)))
        }, E = function () {
            return w(n.e(61).then(n.bind(null, 1112)))
        }, R = function () {
            return w(n.e(62).then(n.bind(null, 1113)))
        };

        function T(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var r, o, c;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = {
                                mode: "history",
                                base: "/",
                                fallback: !1,
                                linkActiveClass: "nuxt-link-active",
                                linkExactActiveClass: "nuxt-link-exact-active",
                                scrollBehavior: _,
                                routes: [{
                                    path: "/",
                                    name: "Home",
                                    components: {mobile: k, desktop: O},
                                    pathToRegexpOptions: {},
                                    meta: {
                                        bodyClass: "page-home-wrapper",
                                        gaPageName: "HomePage",
                                        excludeHreflangLinks: !0
                                    }
                                }, {
                                    path: "/voucher-new/:voucher_token/",
                                    name: "VoucherDetail",
                                    component: x,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/voucher-new-app-only/:voucher_token/",
                                    name: "VoucherDetailAppOnly",
                                    component: x,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/web3/voucher-for-pdf",
                                    name: "VoucherDetailForPdf",
                                    component: x,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/voucher/:voucher_token/test/",
                                    name: "VoucherTest",
                                    component: x,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/voucher/edit/",
                                    name: "VoucherTestEdit",
                                    component: j,
                                    pathToRegexpOptions: {}
                                }, {
                                    path: "/voucher-customized/:voucher_token/",
                                    name: "VoucherCustomizedDetail",
                                    component: C,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/voucher-event/pdf/",
                                    name: "EventVoucherDetailForPdf",
                                    component: S,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/web3/hotel_voucher/",
                                    name: "HotelVoucherForPdf",
                                    component: $,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/voucherwebnode/voucher_view_pdf/",
                                    name: "VoucherViewPDF",
                                    component: P,
                                    pathToRegexpOptions: {},
                                    meta: {bodyClass: "voucher_body"}
                                }, {
                                    path: "/404/",
                                    name: "Error404",
                                    component: E,
                                    pathToRegexpOptions: {}
                                }, {path: "/500/", name: "Error500", component: R, pathToRegexpOptions: {}}]
                            }, e.prev = 1, o = n(335), c = o.createRouter, e.next = 5, c(t, r);
                        case 5:
                            r = e.sent, e.next = 10;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(1);
                        case 10:
                            return e.abrupt("return", new m.a(r));
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 8]])
            })))).apply(this, arguments)
        }

        var D = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {type: String, default: ""},
                    keepAlive: Boolean,
                    keepAliveProps: {type: Object, default: void 0}
                },
                render: function (e, t) {
                    var n = t.parent, data = t.data, r = t.props;
                    data.nuxtChild = !0;
                    for (var o = n, c = n.$klook.nuxt.transitions, l = n.$klook.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                    data.nuxtChildDepth = f;
                    var d = c[f] || l, h = {};
                    N.forEach((function (e) {
                        void 0 !== d[e] && (h[e] = d[e])
                    }));
                    var v = {};
                    I.forEach((function (e) {
                        "function" == typeof d[e] && (v[e] = d[e].bind(o))
                    }));
                    var m = v.beforeEnter;
                    if (v.beforeEnter = function (e) {
                        if (window.$klook.$nextTick((function () {
                            window.$klook.$emit("triggerScroll")
                        })), m) return m.call(o, e)
                    }, !1 === d.css) {
                        var y = v.leave;
                        (!y || y.length < 2) && (v.leave = function (e, t) {
                            y && y.call(o, e), o.$nextTick(t)
                        })
                    }
                    var _ = e("routerView", data);
                    return r.keepAlive && (_ = e("keep-alive", {props: r.keepAliveProps}, [_])), e("transition", {
                        props: h,
                        on: v
                    }, [_])
                }
            },
            N = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            I = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            L = (n(62), {
                name: "Error",
                layout: "errors",
                props: {error: {type: Object, default: null}},
                computed: {
                    statusCode: function () {
                        return this.error && this.error.statusCode || 500
                    }, message: function () {
                        return this.error.message || ""
                    }
                },
                mounted: function () {
                    this.redirect()
                },
                beforeDestroy: function () {
                    clearInterval(this.timerId)
                },
                methods: {
                    redirect: function () {
                        var e = this, t = document.querySelector(".count");
                        if (t) {
                            var n = Number(t.textContent);
                            this.timerId = setInterval((function () {
                                var r = +new Date, o = "undefined" != typeof _args9 ? _args9 : null;
                                n -= 1, t.textContent = n, n < 1 && (clearInterval(e.timerId), window.location.href = function (e) {
                                    if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                        var t = +new Date - r;
                                        e = __in_house.get_spm_info(e, {duration: t, args: o})
                                    } catch (e) {
                                        console.warn("Get spm info error", e)
                                    }
                                    return e
                                }(e.$href("/")))
                            }), 1e3)
                        }
                    }
                }
            }), M = (n(336), n(23)), K = Object(M.a)(L, (function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "page-error"}, [n("div", {staticClass: "page-error_content"}, [404 === e.statusCode ? [n("h1", {staticClass: "page-error_title"}, [e._v(e._s(e.$t("page_404_message")))]), e._v(" "), n("p", {
                    staticClass: "page-error_message",
                    domProps: {innerHTML: e._s(e.$t("page_404_tips"))}
                }), e._v(" "), n("img", {
                    attrs: {
                        src: "https://res.klook.com/image/upload/q_80/v1578304257/klook-nuxt-web/404.png",
                        alt: "404 Not Found!"
                    }
                })] : [n("h1", {staticClass: "page-error_title"}, [e._v(e._s(e.$t("page_500_message")))]), e._v(" "), n("p", {
                    staticClass: "page-error_message",
                    domProps: {innerHTML: e._s(e.$t("page_500_tips"))}
                }), e._v(" "), n("img", {
                    attrs: {
                        src: "https://res.klook.com/image/upload/q_80/v1578304257/klook-nuxt-web/500.png",
                        alt: "500 Internal Server Error!"
                    }
                })]], 2)])
            }), [], !1, null, null, null).exports, H = (n(55), n(56), n(31), n(77)), U = {
                name: "Nuxt",
                components: {NuxtChild: D, NuxtError: K},
                props: {
                    nuxtChildKey: {type: String, default: void 0},
                    keepAlive: Boolean,
                    keepAliveProps: {type: Object, default: void 0},
                    name: {type: String, default: "default"}
                },
                errorCaptured: function (e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function () {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(y.b)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(H.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var t = e.components.default;
                        if (t && t.options) {
                            var n = t.options;
                            if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function () {
                    c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function (e) {
                    var t = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
                        return t.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occured while showing the error page"), e("p", "Unfortunately an error occured and while showing the error page another error occured"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {props: {to: "/"}}, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
                        return t.displayingNuxtError = !1
                    })), e(K, {props: {error: this.nuxt.err}})) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }, V = (n(63), {
                name: "NuxtLoading", data: function () {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                }, computed: {
                    left: function () {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                }, beforeDestroy: function () {
                    this.clear()
                }, methods: {
                    clear: function () {
                        clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                    }, start: function () {
                        var e = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
                            return e.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    }, set: function (e) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(e))), this
                    }, get: function () {
                        return this.percent
                    }, increase: function (e) {
                        return this.percent = Math.min(100, Math.floor(this.percent + e)), this
                    }, decrease: function (e) {
                        return this.percent = Math.max(0, Math.floor(this.percent - e)), this
                    }, pause: function () {
                        return clearInterval(this._timer), this
                    }, resume: function () {
                        return this.startTimer(), this
                    }, finish: function () {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    }, hide: function () {
                        var e = this;
                        return this.clear(), setTimeout((function () {
                            e.show = !1, e.$nextTick((function () {
                                e.percent = 0, e.reversed = !1
                            }))
                        }), 500), this
                    }, fail: function () {
                        return this.canSucceed = !1, this
                    }, startTimer: function () {
                        var e = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
                            e.skipTimerCount > 0 ? e.skipTimerCount-- : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut), e.continuous && (e.percent >= 100 ? (e.skipTimerCount = 1, e.reversed = !e.reversed) : e.percent <= 0 && (e.skipTimerCount = 1, e.reversed = !e.reversed)))
                        }), 100)
                    }
                }, render: function (e) {
                    var t = e(!1);
                    return this.show && (t = e("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0,
                            "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {width: this.percent + "%", left: this.left}
                    })), t
                }
            }), F = (n(337), Object(M.a)(V, void 0, void 0, !1, null, null, null).exports),
            z = (n(338), n(339), n(340), n(20)), G = n(45), Y = n(21), B = n(29), J = n(30), W = n(2), Q = n(10),
            Z = n(112), X = function (e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            }, ee = function (e) {
                function t() {
                    return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
                }

                return Object(J.a)(t, e), Object(G.a)(t, [{
                    key: "head", value: function () {
                        return Object(Z.b)(this)
                    }
                }]), t
            }(Q.Vue), te = ee = X([Q.Component], ee), ne = (n(341), Object(M.a)(te, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "layout-app-mobile"}, [t("header", {staticClass: "layout-app-mobile_header"}, [t("a", {attrs: {href: "klook://app/goback"}}, [t("SvgIcon", {attrs: {name: "mobile-common#icon-goback"}})], 1), this._v(" "), t("span", [this._v(this._s(this.$t("profile.mobile.home.help_center")))])]), this._v(" "), t("Nuxt")], 1)
            }), [], !1, null, null, null).exports), re = function (e, t, n, desc) {
                var r, o = arguments.length,
                    c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
                return o > 3 && c && Object.defineProperty(t, n, c), c
            }, oe = function (e) {
                function t() {
                    return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
                }

                return Object(J.a)(t, e), t
            }(Q.Vue);
        re([Q.State], oe.prototype, "klook", void 0);
        var ae = oe = re([Object(Q.Component)({
            components: {
                desktop: function () {
                    return n.e(57).then(n.bind(null, 1118))
                }, mobile: function () {
                    return n.e(58).then(n.bind(null, 1127))
                }
            }
        })], oe), ie = Object(M.a)(ae, (function () {
            var e = this.$createElement;
            return (this._self._c || e)(this.klook.platform, {tag: "Component"})
        }), [], !1, null, null, null).exports, se = function (e, t, n, desc) {
            var r, o = arguments.length,
                c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
            return o > 3 && c && Object.defineProperty(t, n, c), c
        }, ce = function (e) {
            function t() {
                return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
            }

            return Object(J.a)(t, e), t
        }(Q.Vue);
        se([Q.State], ce.prototype, "klook", void 0);
        var ue = ce = se([Object(Q.Component)({
            components: {
                desktop: function () {
                    return n.e(59).then(n.bind(null, 1119))
                }, mobile: function () {
                    return n.e(60).then(n.bind(null, 1128))
                }
            }
        })], ce), le = Object(M.a)(ue, (function () {
            var e = this.$createElement;
            return (this._self._c || e)(this.klook.platform, {tag: "Component"})
        }), [], !1, null, null, null).exports, fe = function (e, t, n, desc) {
            var r, o = arguments.length,
                c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
            return o > 3 && c && Object.defineProperty(t, n, c), c
        }, pe = function (e) {
            function t() {
                return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
            }

            return Object(J.a)(t, e), t
        }(Q.Vue);
        fe([Q.State], pe.prototype, "klook", void 0);
        var de, he = pe = fe([Object(Q.Component)({
            components: {
                desktop: function () {
                    return n.e(57).then(n.bind(null, 1118))
                }, mobile: function () {
                    return n.e(58).then(n.bind(null, 1127))
                }
            }
        })], pe), ve = {
            "_app-faq": ne, _default: ie, _errors: le, "_voucher-default": Object(M.a)(he, (function () {
                var e = this.$createElement;
                return (this._self._c || e)(this.klook.platform, {
                    tag: "Component",
                    attrs: {"header-visible": !1, "footer-visible": !1}
                })
            }), [], !1, null, null, null).exports
        }, me = {
            head: {meta: [], link: [], style: [], script: []}, render: function (e, t) {
                var n = e("NuxtLoading", {ref: "loading"});
                this.nuxt.err && K.layout && this.setLayout("function" == typeof K.layout ? K.layout(this.context) : K.layout);
                var r = e(this.layout || "nuxt"), o = e("div", {domProps: {id: "__layout"}, key: this.layoutName}, [r]),
                    c = e("transition", {
                        props: {name: "layout", mode: "out-in"}, on: {
                            beforeEnter: function (e) {
                                window.$klook.$nextTick((function () {
                                    window.$klook.$emit("triggerScroll")
                                }))
                            }
                        }
                    }, [o]);
                return e("div", {domProps: {id: "__klook"}}, [n, c])
            }, data: function () {
                return {isOnline: !0, layout: null, layoutName: ""}
            }, beforeCreate: function () {
                c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
            }, created: function () {
                c.default.prototype.$klook = this, window.$klook = window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
            }, mounted: function () {
                this.$loading = this.$refs.loading
            }, watch: {"nuxt.err": "errorChanged"}, computed: {
                isOffline: function () {
                    return !this.isOnline
                }
            }, methods: {
                refreshOnlineStatus: function () {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                }, refresh: (de = Object(r.a)(regeneratorRuntime.mark((function e() {
                    var t, n, r = this;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ((t = Object(y.f)(this.$route)).length) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return this.$loading.start(), n = t.map((function (e) {
                                    var p = [];
                                    return e.$options.fetch && p.push(Object(y.l)(e.$options.fetch, r.context)), e.$options.asyncData && p.push(Object(y.l)(e.$options.asyncData, r.context).then((function (t) {
                                        for (var n in t) c.default.set(e.$data, n, t[n])
                                    }))), Promise.all(p)
                                })), e.prev = 5, e.next = 8, Promise.all(n);
                            case 8:
                                e.next = 15;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(5), this.$loading.fail(), Object(y.i)(e.t0), this.error(e.t0);
                            case 15:
                                this.$loading.finish();
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[5, 10]])
                }))), function () {
                    return de.apply(this, arguments)
                }), errorChanged: function () {
                    this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(), this.$loading.finish && this.$loading.finish())
                }, setLayout: function (e) {
                    return e && ve["_" + e] || (e = "default"), this.layoutName = e, this.layout = ve["_" + e], this.layout
                }, loadLayout: function (e) {
                    return e && ve["_" + e] || (e = "default"), Promise.resolve(ve["_" + e])
                }
            }, components: {NuxtLoading: F}
        }, ge = (n(64), n(37), n(46), n(74));
        c.default.use(ge.a);
        var ye = ["state", "getters", "actions", "mutations"], be = {};
        (be = function (e, t) {
            if ((e = e.default || e).commit) throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof e && (e = Object.assign({}, e)), we(e, t)
        }(n(342), "store/index.ts")).modules = be.modules || {}, function (e, t) {
            e = e.default || e;
            var n = t.replace(/\.(js|mjs|ts)$/, "").split("/"), r = n[n.length - 1], o = "store/".concat(t);
            if (e = "state" === r ? function (e, t) {
                if ("function" != typeof e) {
                    console.warn("".concat(t, " should export a method that returns an object"));
                    var n = Object.assign({}, e);
                    return function () {
                        return n
                    }
                }
                return we(e, t)
            }(e, o) : we(e, o), ye.includes(r)) {
                var c = r;
                Oe(ke(be, n, {isProperty: !0}), e, c)
            } else {
                "index" === r && (n.pop(), r = n[n.length - 1]);
                var l = ke(be, n), f = !0, d = !1, h = void 0;
                try {
                    for (var v, m = ye[Symbol.iterator](); !(f = (v = m.next()).done); f = !0) {
                        var y = v.value;
                        Oe(l, e[y], y)
                    }
                } catch (e) {
                    d = !0, h = e
                } finally {
                    try {
                        f || null == m.return || m.return()
                    } finally {
                        if (d) throw h
                    }
                }
                !1 === e.namespaced && delete l.namespaced
            }
        }(n(343), "traveller/faq.ts");
        var _e = be instanceof Function ? be : function () {
            return new ge.a.Store(Object.assign({strict: !1}, be))
        };

        function we(e, t) {
            if (e.state && "function" != typeof e.state) {
                console.warn("'state' should be a method that returns an object in ".concat(t));
                var n = Object.assign({}, e.state);
                e = Object.assign({}, e, {
                    state: function () {
                        return n
                    }
                })
            }
            return e
        }

        function ke(e, t) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                r = void 0 !== n && n;
            if (!t.length || r && 1 === t.length) return e;
            var o = t.shift();
            return e.modules[o] = e.modules[o] || {}, e.modules[o].namespaced = !0, e.modules[o].modules = e.modules[o].modules || {}, ke(e.modules[o], t, {isProperty: r})
        }

        function Oe(e, t, n) {
            t && ("state" === n ? e.state = t || e.state : e[n] = Object.assign({}, e[n], t))
        }

        for (var xe = n(217), je = n.n(xe), Ce = function (e, t) {
            var n = e.req, r = e.res, o = !0;
            t("cookies", je()(n, r, o))
        }, Se = n(99), $e = n.n(Se), Pe = {
            setBaseURL: function (e) {
                this.defaults.baseURL = e
            }, setHeader: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common", r = !0, o = !1,
                    c = void 0;
                try {
                    for (var l, f = (Array.isArray(n) ? n : [n])[Symbol.iterator](); !(r = (l = f.next()).done); r = !0) {
                        var d = l.value;
                        if (!t) return void delete this.defaults.headers[d][e];
                        this.defaults.headers[d][e] = t
                    }
                } catch (e) {
                    o = !0, c = e
                } finally {
                    try {
                        r || null == f.return || f.return()
                    } finally {
                        if (o) throw c
                    }
                }
            }, setToken: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                    r = e ? (t ? t + " " : "") + e : null;
                this.setHeader("Authorization", r, n)
            }, onRequest: function (e) {
                this.interceptors.request.use((function (t) {
                    return e(t) || t
                }))
            }, onResponse: function (e) {
                this.interceptors.response.use((function (t) {
                    return e(t) || t
                }))
            }, onRequestError: function (e) {
                this.interceptors.request.use(void 0, (function (t) {
                    return e(t) || Promise.reject(t)
                }))
            }, onResponseError: function (e) {
                this.interceptors.response.use(void 0, (function (t) {
                    return e(t) || Promise.reject(t)
                }))
            }, onError: function (e) {
                this.onRequestError(e), this.onResponseError(e)
            }
        }, Ee = function () {
            var e = Te[Re];
            Pe["$" + e] = function () {
                return this[e].apply(this, arguments).then((function (e) {
                    return e && e.data
                }))
            }
        }, Re = 0, Te = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Re < Te.length; Re++) Ee();
        var Ae = function (e, t) {
            var n = {
                baseURL: "/",
                headers: {
                    common: {Accept: "application/json, text/plain, */*"},
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            };
            n.headers.common = e.req && e.req.headers ? Object.assign({}, e.req.headers) : {}, delete n.headers.common.accept, delete n.headers.common.host, delete n.headers.common["cf-ray"], delete n.headers.common["cf-connecting-ip"], delete n.headers.common["content-length"], delete n.headers.common["content-md5"], delete n.headers.common["content-type"];
            var r = $e.a.create(n);
            r.CancelToken = $e.a.CancelToken, r.isCancel = $e.a.isCancel, function (e) {
                for (var t in Pe) e[t] = Pe[t].bind(e)
            }(r), e.$axios = r, t("axios", r)
        }, qe = n(166);

        function De(e, t) {
            return Ne.apply(this, arguments)
        }

        function Ne() {
            return (Ne = Object(r.a)(regeneratorRuntime.mark((function e(t, r) {
                var o, c, l;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return o = "".concat(r, ".json"), e.prev = 1, e.next = 4, n(360)("./".concat(o));
                        case 4:
                            c = e.sent, l = c.default || c, t.setLocaleMessage(r, l), e.next = 12;
                            break;
                        case 9:
                            e.prev = 9, e.t0 = e.catch(1), console.error("Load locale error:", e.t0);
                        case 12:
                            return e.abrupt("return", Promise.resolve());
                        case 13:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[1, 9]])
            })))).apply(this, arguments)
        }

        c.default.use(qe.a);
        var Ie = function () {
            var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, r, o, c;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.app, r = t.store, "en", o = "en", o = r.state.klook.language || "en", c = new qe.a({
                                locale: o,
                                fallbackLocale: "en"
                            }), e.next = 8, De(c, o);
                        case 8:
                            n.i18n = c, n.$i18n = c;
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }(), Le = (n(42), n(76)), Me = n(47);
        n(101);
        var Ke = function (e) {
            var t = e.app, n = e.$axios, r = e.store;
            e.req;
            n.setHeader("Version", "5.4"), n.setHeader("X-Requested-With", "XMLHttpRequest"), n.onRequest((function (e) {
                var n = e.headers, o = r.state.klook, c = o.utilConfig.is_guest_checkout;
                n["Accept-Language"] = o.backendLanguage, n.Currency = o.currency || "", n.Token = t.$cookies.get("_pt") || "", n._pt = t.$cookies.get("device_id_new") || "", o.isOpenHarmony ? (n["X-Platform"] = "openharmony-shell", Object(Le.g)(e)) : n["X-Platform"] = o.platform || "", c && Me.b.includes(e.url || "") && (e.baseURL = "/xos_gc/")
            })), n.onResponse((function (e) {
                var data = e.data;
                e.config, e.status;
                "object" !== Object(W.a)(data) || data.success || (data.error = data.error || {
                    code: null,
                    message: t.$i18n.t("client_server_failure")
                })
            })), n.onError((function (e) {
                if (e.response) {
                    var n = e.response, data = n.data, r = n.status;
                    data.error ? (e.code = String(r), e.message = data.error.message) : (e.code = String(r), e.message = t.$i18n.t("client_server_failure"))
                } else e.request && (e.code = "990001", e.message = t.$i18n.t("client_network_failure"));
                var o = e.config || {};
                Date.now(), o.startTime
            }))
        }, He = n(203), Ue = n(72);

        function Ve(e) {
            var t, n = (new Date).toISOString(), r = e.level.toUpperCase();
            (t = console)[e.level].apply(t, ["[".concat(n, "] ").concat(r)].concat(Object(Ue.a)(e.args)))
        }

        function Fe(e) {
            return function () {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return Ve({level: e, args: n})
            }
        }

        var ze = {
            trace: Fe("trace"),
            debug: Fe("debug"),
            info: Fe("info"),
            warn: Fe("warn"),
            error: Fe("error"),
            fatal: Fe("error")
        }, Ge = function (e, t) {
            var n = {interval: 5e3, size: 15};
            t("logquery", new He.a({
                url: window.process.env.LOGQUERY_URL,
                headers: {"X-Platform": "ssrwebvoucher"},
                queue: n
            })), t("logger", ze), t("href", (function (e, t, n) {
                return t || this.$i18n && (t = this.$i18n.locale), Object(Le.d)(e, t, n)
            }))
        }, Ye = (n(157), n(73)), Be = function (e, t, n, desc) {
            var r, o = arguments.length,
                c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
            return o > 3 && c && Object.defineProperty(t, n, c), c
        }, Je = function (e) {
            function t() {
                return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
            }

            return Object(J.a)(t, e), Object(G.a)(t, [{
                key: "mounted", value: function () {
                    var e = "";
                    try {
                        e = n(363)("./".concat(this.spriteName, ".svg"))
                    } catch (e) {
                        return
                    }
                    this.$root._svgSprites || (this.$root._svgSprites = new Set), this.$root._svgSprites.has(e) || (this.$root._svgSprites.add(e), $e.a.get(e).then((function (e) {
                        var t = document.createElement("div");
                        t.innerHTML = e.data, document.body.insertBefore(t.firstChild, document.body.childNodes[0])
                    })))
                }
            }, {
                key: "spriteName", get: function () {
                    return this.name.includes("#") ? this.name.split("#")[0] : "default"
                }
            }, {
                key: "iconName", get: function () {
                    return this.name.includes("#") ? this.scoped ? "#".concat(this.name.replace("#", "-")) : "#".concat(this.name.split("#")[1]) : "#".concat(this.name)
                }
            }, {
                key: "styles", get: function () {
                    var style = {};
                    return this.size && (style["font-size"] = "".concat(this.size, "px")), this.color && (style.color = this.color), style
                }
            }]), t
        }(Ye.Vue);
        Be([Object(Ye.Prop)()], Je.prototype, "name", void 0), Be([Object(Ye.Prop)({default: !0})], Je.prototype, "scoped", void 0), Be([Object(Ye.Prop)({type: [Number, String]})], Je.prototype, "size", void 0), Be([Object(Ye.Prop)({type: String})], Je.prototype, "color", void 0);
        var We = Je = Be([Ye.Component], Je), Qe = (n(367), Object(M.a)(We, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("svg", {staticClass: "svg-icon", style: this.styles}, [t("use", {
                attrs: {
                    href: this.iconName,
                    "xlink:href": this.iconName
                }
            })])
        }), [], !1, null, null, null).exports), Ze = function (e, t, n, desc) {
            var r, o = arguments.length,
                c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
            return o > 3 && c && Object.defineProperty(t, n, c), c
        }, Xe = function (e) {
            function t() {
                return Object(z.a)(this, t), Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))
            }

            return Object(J.a)(t, e), Object(G.a)(t, [{
                key: "handleBtnYesClick", value: function () {
                    this.confirmCallback(!0), this.close()
                }
            }, {
                key: "handleBtnNoClick", value: function () {
                    this.confirmCallback(!1), this.close()
                }
            }]), t
        }(Q.Vue), et = Xe = Ze([Q.Component], Xe), tt = (n(368), Object(M.a)(et, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {
                directives: [{name: "show", rawName: "v-show", value: e.visible, expression: "visible"}],
                staticClass: "klk-message"
            }, [n("div", {staticClass: "klk-message_masker"}), e._v(" "), n("div", {staticClass: "klk-message_box"}, [e.title ? n("div", {staticClass: "klk-message_header"}) : e._e(), e._v(" "), n("div", {staticClass: "klk-message_body"}, [e._v("\n      " + e._s(e.content) + "\n    ")]), e._v(" "), n("div", {staticClass: "klk-message_footer"}, [n("a", {
                staticClass: "klk-message_btn-no",
                attrs: {href: "javascript:;"},
                on: {click: e.handleBtnNoClick}
            }, [e._v(e._s(e.btnNo))]), e._v(" "), n("a", {
                staticClass: "klk-message_btn-yes",
                attrs: {href: "javascript:;"},
                on: {click: e.handleBtnYesClick}
            }, [e._v(e._s(e.btnYes))])])])])
        }), [], !1, null, null, null).exports);

        function nt(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function ot(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? nt(Object(source), !0).forEach((function (t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : nt(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        var at = {
            install: function (e) {
                if (!e.prototype.$message) {
                    var t = function () {
                        }, n = {visible: !1, title: "", content: "", btnYes: "Ok", btnNo: "Cancel", confirmCallback: t},
                        r = e.extend(tt);
                    r.prototype.close = function () {
                        this.visible = !1, this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.$destroy()
                    };
                    var o = function (t) {
                        if (e.prototype.$isServer) return null;
                        var o = ot({}, n, {}, t), c = new r({el: document.createElement("div"), data: o});
                        return document.body.appendChild(c.$el), e.nextTick((function () {
                            c.visible = !0
                        })), c
                    };
                    Object.defineProperty(e.prototype, "$message", {
                        get: function () {
                            return {alert: c.bind(this), confirm: l.bind(this), prompt: f.bind(this)}
                        }
                    })
                }

                function c() {
                }

                function l(e) {
                    var n = ot({confirmCallback: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t}, e);
                    return o(n)
                }

                function f() {
                }
            }
        }, it = n(214), st = (n(254), function (e, t, n, desc) {
            var r, o = arguments.length,
                c = o < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, n) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(W.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, desc); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (c = (o < 3 ? r(c) : o > 3 ? r(t, n, c) : r(t, n)) || c);
            return o > 3 && c && Object.defineProperty(t, n, c), c
        }), ct = "klk_c_image_viewer", ut = function (e) {
            function t() {
                var e;
                return Object(z.a)(this, t), (e = Object(Y.a)(this, Object(B.a)(t).apply(this, arguments))).prefixCls = ct, e.currentIndex = 0, e.virtualData = {slides: []}, e.imageViewerSwiper = null, e
            }

            return Object(J.a)(t, e), Object(G.a)(t, [{
                key: "onImagesChanged", value: function (e) {
                    this.imageViewerSwiper ? (this.imageViewerSwiper.virtual.removeAllSlides(), this.imageViewerSwiper.virtual.slides = e, this.imageViewerSwiper.virtual.update()) : this.initSwiper()
                }
            }, {
                key: "onVisibleChange", value: function (e) {
                    var t = this;
                    e && (this.currentIndex = this.initialIndex, this.$nextTick((function () {
                        t.imageViewerSwiper ? t.imageViewerSwiper.slideTo(t.initialIndex, 0, !1) : t.initSwiper()
                    })))
                }
            }, {
                key: "initSwiper", value: function () {
                    var e = this;
                    e.imageViewerSwiper = new it.a(".j-image_viewer_main", {
                        virtual: {
                            slides: e.images,
                            renderExternal: function (data) {
                                e.virtualData = data
                            }
                        },
                        spaceBetween: 16,
                        zoom: {maxRatio: 2, minRatio: 1},
                        observer: !0,
                        initialSlide: e.initialIndex,
                        pagination: {el: ".".concat(this.prefixCls, "__pagination"), type: "fraction"},
                        on: {
                            slideChange: function () {
                                e.currentIndex = this.activeIndex
                            }
                        }
                    })
                }
            }, {
                key: "hideImageViewer", value: function () {
                    this.$emit("on-close")
                }
            }, {
                key: "imageViewerClasses", get: function () {
                    return ["".concat(ct)]
                }
            }, {
                key: "currentSlide", get: function () {
                    return this.images[this.currentIndex]
                }
            }]), t
        }(Q.Vue);
        st([Object(Q.Prop)({
            type: Boolean,
            default: !1
        })], ut.prototype, "visible", void 0), st([Object(Q.Prop)({
            type: Array, default: function () {
                return []
            }
        })], ut.prototype, "images", void 0), st([Object(Q.Prop)({
            type: Number,
            default: 0
        })], ut.prototype, "initialIndex", void 0), st([Object(Q.Watch)("images")], ut.prototype, "onImagesChanged", null), st([Object(Q.Watch)("visible")], ut.prototype, "onVisibleChange", null);
        var lt = ut = st([Q.Component], ut), ft = (n(371), Object(M.a)(lt, (function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("transition", {attrs: {name: "fade"}}, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }], class: e.imageViewerClasses
            }, [n("div", {staticClass: "swiper-container j-image_viewer_main"}, [n("div", {staticClass: "swiper-wrapper"}, e._l(e.virtualData.slides, (function (t) {
                return n("div", {
                    key: t.id,
                    class: ["swiper-slide", e.prefixCls + "__slide", e.images.length <= 2 ? e.prefixCls + "__slide--margin" : ""],
                    style: {left: e.virtualData.offset + "px"}
                }, [n("div", {staticClass: "swiper-zoom-container"}, [n("img", {
                    class: e.prefixCls + "__slide_image",
                    attrs: {src: t.image_url}
                })])])
            })), 0), e._v(" "), n("div", {class: e.prefixCls + "__bottom"}, [e._v(e._s(e.currentSlide && e.currentSlide.desc))])]), e._v(" "), n("div", {class: e.prefixCls + "__header"}, [n("svg-icon", {
                class: e.prefixCls + "__close",
                attrs: {name: "common#klk-icon-close", color: "#fff", size: "24"},
                nativeOn: {
                    click: function (t) {
                        return e.hideImageViewer(t)
                    }
                }
            }), e._v(" "), n("div", {class: e.prefixCls + "__pagination"})], 1)])])
        }), [], !1, null, null, null).exports), pt = n(167), ht = null, vt = {
            install: function (e) {
                e.prototype.showImageViewer || (e.prototype.showImageViewer = function (t) {
                    if (e.prototype.$isServer) return null;
                    var n = t.initialIndex, r = t.images;
                    if (!ht) {
                        var o = e.extend(ft), c = document.createElement("div");
                        document.body.appendChild(c), ht = (new o).$mount(c)
                    }
                    e.nextTick((function () {
                        ht.$off("on-close"), ht.$on("on-close", (function () {
                            ht.visible = !1, Object(Le.i)()
                        }));
                        var e = window.__KLOOK__ && window.__KLOOK__.state && window.__KLOOK__.state.klook && window.__KLOOK__.state.klook.webp || 0;
                        r.forEach((function (t, n) {
                            t.image_url = Object(pt.b)(t.image_url, e), t.id = "index:".concat(n)
                        })), ht.initialIndex = n, ht.images = r, ht.visible = !0, Object(Le.e)()
                    }))
                })
            }
        }, mt = function () {
            c.default.component("SvgIcon", Qe), c.default.use(at), c.default.use(vt)
        };
        c.default.prototype.$setMeta = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], meta = {};
            return e.name && (meta.hid = e.name, meta.name = e.name), e.property && (meta.hid = e.property, meta.property = e.property), e.content && (meta.content = t ? this.$t(e.content) : e.content), meta
        }, c.default.prototype.$title = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.$t(e) : e;
            return e ? "ja" === this.$i18n.locale ? t : "".concat(t).concat(this.$t("global.seo.titlesite")) : this.$t("global.seo.title")
        }, c.default.prototype.$keywords = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this.$setMeta({name: "keywords", content: e}, t)
        }, c.default.prototype.$description = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this.$setMeta({name: "description", content: e}, t)
        }, c.default.prototype.$robots = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this.$setMeta({name: "robots", content: e}, t)
        }, c.default.prototype.$canonical = function (path) {
            return Object(Z.a)(this, path || this.$route.fullPath)
        }, c.default.prototype.$ldjson = function (e) {
            return {type: "application/ld+json", json: e}
        };
        var gt = n(162), yt = n.n(gt), bt = n(248), _t = n.n(bt), wt = n(247), kt = n.n(wt), Ot = n(246), xt = n.n(Ot),
            jt = n(245), Ct = n.n(jt), St = n(244), $t = n.n(St), Pt = n(243), Et = n.n(Pt), Rt = n(242), Tt = n.n(Rt),
            At = n(241), qt = n.n(At), Dt = n(240), Nt = n.n(Dt), It = n(239), Lt = n.n(It), Mt = n(238), Kt = n.n(Mt),
            Ht = n(237), Ut = n.n(Ht), Vt = n(236), Ft = n.n(Vt), zt = n(235), Gt = n.n(zt), Yt = n(234), Bt = n.n(Yt),
            Jt = n(233), Wt = n.n(Jt), Qt = n(206), Zt = n.n(Qt), Xt = n(78), en = n.n(Xt), tn = n(232), nn = n.n(tn),
            rn = n(128), on = n.n(rn), an = n(160), sn = n.n(an), progress = n(231), cn = n.n(progress), un = n(230),
            ln = n.n(un), fn = n(229), pn = n.n(fn), dn = n(228), hn = n.n(dn), vn = n(227), mn = n.n(vn), gn = n(226),
            yn = n.n(gn), bn = n(127), _n = n.n(bn), wn = n(225), kn = n.n(wn), On = n(135), xn = n.n(On), jn = n(224),
            Cn = n.n(jn), input = n(89), Sn = n.n(input), $n = n(223), Pn = n.n($n), En = n(87), Rn = n.n(En),
            Tn = n(126), An = n.n(Tn), qn = n(222), Dn = n.n(qn), Nn = n(161), In = n.n(Nn), Ln = n(84), Mn = n.n(Ln),
            Kn = n(221), Hn = n.n(Kn), Un = n(7), Vn = n.n(Un), label = n(220), Fn = n.n(label), zn = n(219),
            Gn = n.n(zn), Yn = function (e) {
                return Bn.apply(this, arguments)
            };

        function Bn() {
            return (Bn = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var r, o;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.store.state.klook.language, e.next = 3, n(372)("./".concat(r));
                        case 3:
                            o = e.sent, Gn.a.use(o), c.default.use(Fn.a), c.default.use(Vn.a), c.default.use(Hn.a), c.default.use(Mn.a), c.default.use(In.a), c.default.use(Dn.a), c.default.use(An.a), c.default.use(Rn.a), c.default.use(Pn.a), c.default.use(Sn.a), c.default.use(Cn.a), c.default.use(xn.a), c.default.use(kn.a), c.default.use(_n.a), c.default.use(yn.a), c.default.use(mn.a), c.default.use(hn.a), c.default.use(pn.a), c.default.use(ln.a), c.default.use(cn.a), c.default.use(sn.a), c.default.use(on.a), c.default.use(nn.a), c.default.use(en.a), c.default.use(Zt.a), c.default.use(Wt.a), c.default.use(Bt.a), c.default.use(Gt.a), c.default.use(Ft.a), c.default.use(Ut.a), c.default.use(Kt.a), c.default.use(Sn.a), c.default.use(Lt.a), c.default.use(Nt.a), c.default.use(qt.a), c.default.use(Tt.a), c.default.use(In.a), c.default.use(Et.a), c.default.use($t.a), c.default.use(Ct.a), c.default.use(xt.a), c.default.use(kt.a), c.default.use(_t.a), c.default.use(yt.a);
                        case 49:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var Jn = n(209);

        function Wn(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function Qn(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Wn(Object(source), !0).forEach((function (t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Wn(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        c.default.use(Jn.a);
        var Zn = function () {
            var e = Object(r.a)(regeneratorRuntime.mark((function e(t, n) {
                var r, o, c, l, f, d, h;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (o = window._galileo) {
                                e.next = 4;
                                break
                            }
                            return console.error("_galileo is not defined"), e.abrupt("return");
                        case 4:
                            return c = t.app, l = t.store, f = l.state.klook, d = c.$cookies.get("kepler_id") || (null === (r = window.BaseData) || void 0 === r ? void 0 : r.keplerId), h = function (e) {
                                var t, n, r = e.auth;
                                return {
                                    global_id: null === (t = null == r ? void 0 : r.user) || void 0 === t ? void 0 : t.globalId,
                                    user_residence: null === (n = null == r ? void 0 : r.user) || void 0 === n ? void 0 : n.user_residence
                                }
                            }, e.next = 10, o.init({
                                url: window.process.env.GALILEO_API,
                                user: Qn({}, h(l.state)),
                                device_id: d || "",
                                site_name: "global" === f.market ? "klook-global" : "klook-cn",
                                language: f.language,
                                currency: f.currency,
                                platform: f.platform
                            });
                        case 10:
                            l.subscribe((function (e, t) {
                                var n;
                                null === (n = o.login) || void 0 === n || n.call(o, h(t || l.state))
                            }));
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }(), Xn = n(210), er = n.n(Xn);
        c.default.use(er.a);
        var nr = n(111);

        function rr(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function or(e) {
            var t = null == e ? void 0 : e.user_id, n = null == e ? void 0 : e.origin_kepler_id;
            return function (e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? rr(Object(source), !0).forEach((function (t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : rr(Object(source)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }({}, t ? {userId: t} : {}, {}, n ? {originKeplerId: n} : {})
        }

        var ar = function (e) {
            var t, n = e.app, r = e.store.state.klook;
            c.default.prototype.$inhouse = nr.a, nr.a.setConfig({
                url: window.process.env.LOGQUERY_URL,
                beacon: {url: window.process.env.LOGQUERY_URL_V3},
                eventCommon: or((null === (t = window.BaseData) || void 0 === t ? void 0 : t.expExtra) || {}),
                data: function () {
                    return {}
                }
            }), n.router.afterEach((function (e, t) {
                var o, c;
                setTimeout((function () {
                    var e, t,
                        o = n.$cookies.get("kepler_id") || (null === (e = window.BaseData) || void 0 === e ? void 0 : e.keplerId);
                    nr.a.init({
                        url: window.process.env.LOGQUERY_URL,
                        isDebugMode: "production" !== window.process.env.APP_ENV,
                        autoPageView: !1,
                        eventCommon: or({}),
                        serverTime: null === (t = window.BaseData) || void 0 === t ? void 0 : t.serverTime,
                        props: {
                            userId: "",
                            pageId: "",
                            distinctId: o,
                            deviceId: o || "",
                            keplerId: o || "",
                            experiments: [],
                            siteName: window.location.host,
                            siteLanguage: r.language,
                            siteCurrency: r.currency,
                            platform: r.platform,
                            marketing: {}
                        }
                    })
                }), 0), "none" !== (null === (o = e.query) || void 0 === o ? void 0 : o.pv) && "none" !== (null === (c = t.query) || void 0 === c ? void 0 : c.pv) && setTimeout((function () {
                    nr.a.track("pageview", "all")
                }), 500)
            }))
        }, ir = function (e, t) {
            t("miniApp", {
                sharePage: function (e) {
                    (e.productId || e.image && e.title) && (null === window || void 0 === window ? void 0 : window.MP_JS_SDK) && window.MP_JS_SDK.onReady((function () {
                        window.MP_JS_SDK.postMessage({
                            type: "share",
                            data: {
                                image: e.image || "",
                                title: e.title || "",
                                url: e.url || window.location.href,
                                curUrl: window.location.href
                            }
                        })
                    }))
                }, setTracking: function (e, t) {
                    (null === window || void 0 === window ? void 0 : window.MP_JS_SDK) && window.MP_JS_SDK.onReady((function () {
                        window.MP_JS_SDK.postMessage({
                            type: "tracking",
                            data: {previousPageName: e, previousModuleName: t || ""}
                        })
                    }))
                }, pay: function (e) {
                    (null === window || void 0 === window ? void 0 : window.MP_JS_SDK) && window.MP_JS_SDK.onReady((function () {
                        window.MP_JS_SDK.toMiniAppPay({
                            orderGuid: e.orderGuid,
                            bookingNo: e.bookingNo,
                            cancelUrl: encodeURIComponent(e.cancelUrl),
                            isPaySuccessfully: e.isPaySuccessfully
                        })
                    }))
                }, chat: function (e) {
                    (null === window || void 0 === window ? void 0 : window.MP_JS_SDK) && window.MP_JS_SDK.onReady().then((function () {
                        window.MP_JS_SDK.toMiniAppCustomerService({type: e})
                    }))
                }, goMiniAppHome: function () {
                    (null === window || void 0 === window ? void 0 : window.MP_JS_SDK) && window.MP_JS_SDK.onReady().then((function () {
                        window.MP_JS_SDK.toMiniAppHomePage()
                    }))
                }, $interceptClick: function (e, t) {
                    var n = t || e.$el, r = window.MP_JS_SDK.addListenerClick(n);
                    e.$once("hook:beforeDestroy", (function () {
                        r && r(n)
                    }))
                }
            })
        };

        function sr(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        function cr(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? sr(Object(source), !0).forEach((function (t) {
                    Object(o.a)(e, t, source[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : sr(Object(source)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }))
            }
            return e
        }

        n.d(t, "b", (function () {
            return lr
        })), n.d(t, "a", (function () {
            return K
        })), c.default.component(d.a.name, d.a), c.default.component(v.a.name, cr({}, v.a, {
            render: function (e, t) {
                return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(e, t)
            }
        })), c.default.component(D.name, D), c.default.component("NChild", D), c.default.component(U.name, U), c.default.use(l.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var ur = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };

        function lr(e) {
            return fr.apply(this, arguments)
        }

        function fr() {
            return (fr = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                var n, r, o, l, f, d, path, h;
                return regeneratorRuntime.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, T(t);
                        case 2:
                            return n = e.sent, (r = _e(t)).$router = n, o = r.registerModule, r.registerModule = function (path, e, t) {
                                return o.call(r, path, e, Object.assign({preserveState: !0}, t))
                            }, l = cr({
                                store: r,
                                router: n,
                                nuxt: {
                                    defaultTransition: ur, transitions: [ur], setTransitions: function (e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function (e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, ur, {name: e}) : Object.assign({}, ur, e) : ur
                                        })), this.$options.nuxt.transitions = e, e
                                    }, err: null, dateErr: null, error: function (e) {
                                        e = e || null, l.context._errored = Boolean(e), e = e ? Object(y.k)(e) : null;
                                        var n = this.nuxt || this.$options.nuxt;
                                        return n.dateErr = Date.now(), n.err = e, t && (t.nuxt.error = e), e
                                    }
                                }
                            }, me), r.app = l, f = t ? t.next : function (e) {
                                return l.router.push(e)
                            }, t ? d = n.resolve(t.url).route : (path = Object(y.d)(n.options.base), d = n.resolve(path).route), e.next = 13, Object(y.o)(l, {
                                store: r,
                                route: d,
                                next: f,
                                error: l.nuxt.error.bind(l),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 13:
                            h = function (e, t) {
                                if (!e) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t) throw new Error("inject(key, value) has no value provided");
                                l[e = "$" + e] = t, r[e] = l[e];
                                var n = "__klook_" + e + "_installed__";
                                c.default[n] || (c.default[n] = !0, c.default.use((function () {
                                    c.default.prototype.hasOwnProperty(e) || Object.defineProperty(c.default.prototype, e, {
                                        get: function () {
                                            return this.$root.$options[e]
                                        }
                                    })
                                })))
                            }, window.__KLOOK__ && window.__KLOOK__.state && r.replaceState(window.__KLOOK__.state), e.next = 18;
                            break;
                        case 18:
                            if ("function" != typeof Ce) {
                                e.next = 21;
                                break
                            }
                            return e.next = 21, Ce(l.context, h);
                        case 21:
                            if ("function" != typeof Ae) {
                                e.next = 24;
                                break
                            }
                            return e.next = 24, Ae(l.context, h);
                        case 24:
                            if ("function" != typeof Ie) {
                                e.next = 27;
                                break
                            }
                            return e.next = 27, Ie(l.context, h);
                        case 27:
                            if ("function" != typeof Ke) {
                                e.next = 30;
                                break
                            }
                            return e.next = 30, Ke(l.context, h);
                        case 30:
                            if ("function" != typeof Ge) {
                                e.next = 33;
                                break
                            }
                            return e.next = 33, Ge(l.context, h);
                        case 33:
                            if ("function" != typeof mt) {
                                e.next = 36;
                                break
                            }
                            return e.next = 36, mt(l.context, h);
                        case 36:
                            e.next = 39;
                            break;
                        case 39:
                            if ("function" != typeof Yn) {
                                e.next = 42;
                                break
                            }
                            return e.next = 42, Yn(l.context, h);
                        case 42:
                            if ("function" != typeof Zn) {
                                e.next = 45;
                                break
                            }
                            return e.next = 45, Zn(l.context, h);
                        case 45:
                            e.next = 48;
                            break;
                        case 48:
                            if ("function" != typeof ar) {
                                e.next = 51;
                                break
                            }
                            return e.next = 51, ar(l.context, h);
                        case 51:
                            if ("function" != typeof ir) {
                                e.next = 54;
                                break
                            }
                            return e.next = 54, ir(l.context, h);
                        case 54:
                            e.next = 57;
                            break;
                        case 57:
                            return e.abrupt("return", {store: r, app: l, router: n});
                        case 58:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, 92: function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return f
        })), n.d(t, "e", (function () {
            return d
        })), n.d(t, "c", (function () {
            return v
        })), n.d(t, "d", (function () {
            return y
        })), n.d(t, "a", (function () {
            return k
        })), n.d(t, "b", (function () {
            return O
        })), n.d(t, "f", (function () {
            return x
        }));
        n(75), n(32), n(24);
        var r = n(11), o = n(77);
        n(15), n(9), n(250), n(42), n(37);

        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), t.push.apply(t, n)
            }
            return t
        }

        var l = [{title: "English (Australia)", value: "en-AU"}, {
                title: "English (Canada)",
                value: "en-CA"
            }, {title: "English (Hong Kong, SAR)", value: "en-HK"}, {
                title: "English (India)",
                value: "en-IN"
            }, {title: "English (Malaysia)", value: "en-MY"}, {
                title: "English (New Zealand)",
                value: "en-NZ"
            }, {title: "English (Philippines)", value: "en-PH"}, {
                title: "English (Singapore)",
                value: "en-SG"
            }, {title: "English (US)", value: "en-US"}, {
                title: "English (UK)",
                value: "en-GB"
            }, {title: "English (International)", value: "en"}, {title: "简体中文", value: "zh-CN"}, {
                title: "繁體中文",
                children: [{title: "香港繁體", value: "zh-HK"}, {title: "台灣繁體", value: "zh-TW"}]
            }, {title: "日本語", value: "ja"}, {title: "한국어", value: "ko"}, {
                title: "ไทย",
                value: "th"
            }, {title: "Tiếng Việt", value: "vi"}, {title: "Bahasa Indonesia", value: "id"}, {
                title: "Français",
                value: "fr"
            }, {title: "Español", value: "es"}, {title: "Deutsch", value: "de"}, {
                title: "Italiano",
                value: "it"
            }, {title: "Русский", value: "ru"}],
            f = ["de", "en", "en-AU", "en-CA", "en-GB", "en-HK", "en-IN", "en-MY", "ms-MY", "en-NZ", "en-PH", "en-SG", "en-US", "es", "ar-SA", "fr", "id", "it", "ja", "ko", "ru", "th", "vi", "zh-CN", "zh-HK", "zh-TW"];

        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
            return l.filter((function (t) {
                return Array.isArray(t.children) ? t.children.some((function (t) {
                    return !!t.value && e.includes(t.value)
                })) : !!t.value && e.includes(t.value)
            }))
        }

        var h = {
            en: "/blog/",
            "en-AU": "/en-AU/blog/",
            "en-GB": "/en-GB/blog/",
            "en-IN": "/blog/en-in/home-2/",
            "en-MY": "/blog/en-my/my-home/",
            "en-NZ": "/en-NZ/blog/",
            "en-PH": "/blog/en-ph/discover-and-find-the-things-to-do/",
            "en-SG": "/en-SG/blog/",
            ko: "http://blog.naver.com/klooktravel",
            th: "/th/blog/",
            vi: "/vi/blog/",
            "zh-CN": "/zh-TW/blog/",
            "zh-HK": "/zh-HK/blog/",
            "zh-TW": "/zh-TW/blog/"
        };

        function v(e) {
            return h[e] || h.en
        }

        var m = {
            de: ["unionpay", "newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay"],
            en: ["newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay", "alipay"],
            es: ["unionpay", "newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay"],
            fr: ["unionpay", "newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay"],
            id: ["alipay", "newMaster", "newPaypal", "newAE", "newVisa"],
            it: ["unionpay", "newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay"],
            ja: ["alipay", "newMaster", "newPaypal", "newAE", "newVisa"],
            ko: ["newVisa", "newMaster", "newAE", "newPaypal", "applepay", "googlepay", "alipay"],
            ru: ["unionpay", "newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay"],
            th: ["alipay", "newMaster", "newPaypal", "newAE", "newVisa"],
            vi: ["alipay", "newMaster", "newPaypal", "newAE", "newVisa"],
            "zh-CN": ["alipay", "newMaster", "wechatpay", "newAE", "newVisa"],
            "zh-HK": ["newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay", "alipay"],
            "zh-TW": ["newVisa", "newMaster", "newPaypal", "newAE", "applepay", "googlepay", "alipay"]
        };

        function y(e) {
            return m[e] || m.en
        }

        var _ = {
            de: "de_DE",
            en: "en_BS",
            "en-AU": "en_AU",
            "en-CA": "en_CA",
            "en-GB": "en_GB",
            "en-HK": "en_HK",
            "en-IN": "en_IN",
            "en-MY": "en_MY",
            "ms-MY": "ms_MY",
            "en-NZ": "en_NZ",
            "en-PH": "en_PH",
            "en-SG": "en_SG",
            "en-US": "en_US",
            es: "es_ES",
            "ar-SA": "ar_SA",
            fr: "fr_FR",
            id: "id_ID",
            it: "it_IT",
            ja: "ja_JP",
            ko: "ko_KR",
            ru: "ru_RU",
            th: "th_TH",
            vi: "vi_VN",
            "zh-CN": "zh_CN",
            "zh-HK": "zh_HK",
            "zh-TW": "zh_TW"
        }, w = Object.entries(_).reduce((function (pre, e) {
            var t = Object(o.a)(e, 2), n = t[0], l = t[1];
            return function (e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function (t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }({}, pre, Object(r.a)({}, l, n))
        }), {}), k = function (e) {
            return _[e]
        }, O = function (e) {
            return w[e]
        }, x = {
            de: "de",
            en: "en",
            "en-AU": "en-AU",
            "en-CA": "en-CA",
            "en-GB": "en-GB",
            "en-HK": "en-HK",
            "en-IN": "en-IN",
            "en-MY": "en-MY",
            "ms-MY": "ms-MY",
            "en-NZ": "en-NZ",
            "en-PH": "en-PH",
            "en-SG": "en-SG",
            "en-US": "en-US",
            es: "es",
            "ar-SA": "ar_SA",
            fr: "fr",
            id: "id",
            it: "it",
            ja: "ja",
            ko: "ko",
            ru: "ru",
            th: "th",
            vi: "vi",
            "zh-CN": "zh-Hans-CN",
            "zh-HK": "zh-Hant-HK",
            "zh-TW": "zh-Hant-TW"
        }
    }
}, [[308, 71, 56, 74]]]);