(window.webpackJsonp = window.webpackJsonp || []).push([[81], {
    1121: function (e, t, o) {
        "use strict";
        o.r(t);
        o(62), o(54);
        var c = o(13), r = o(20), n = o(45), d = o(21), l = o(29), _ = o(30), v = o(2), h = o(10), m = o(399),
            f = o(76), y = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, C = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(d.a)(this, Object(l.a)(t).apply(this, arguments))
                }

                return Object(_.a)(t, e), Object(n.a)(t, [{
                    key: "maskHideBigCode", value: function (e) {
                        this.$refs.voucherBig.contains(e.target) || this.$emit("on-close")
                    }
                }, {
                    key: "hideBigCode", value: function () {
                        this.$emit("on-close")
                    }
                }]), t
            }(h.Vue);
        y([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], C.prototype, "visible", void 0), y([Object(h.Prop)({
            type: String,
            default: ""
        })], C.prototype, "voucherNumber", void 0), y([Object(h.Prop)({
            type: String,
            default: "qrcode"
        })], C.prototype, "codeType", void 0), y([Object(h.Prop)({
            type: String,
            default: ""
        })], C.prototype, "codeImageUrl", void 0);
        var k = C = y([Object(h.Component)({})], C), O = (o(992), o(23)), j = Object(O.a)(k, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("transition", {attrs: {name: "fade"}}, [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }], staticClass: "voucher_big_code", on: {
                    click: function (t) {
                        return e.maskHideBigCode(t)
                    }
                }
            }, [o("svg-icon", {
                staticClass: "voucher_big_code__close",
                class: {
                    "voucher_big_code__close--qrCode": "barcode" !== e.codeType,
                    "voucher_big_code__close--barcode": "barcode" === e.codeType
                },
                attrs: {name: "common#klk-icon-close", color: "rgba(0, 0, 0, 0.54)", size: "24"},
                nativeOn: {
                    click: function (t) {
                        return e.hideBigCode(t)
                    }
                }
            }), e._v(" "), o("div", {
                ref: "voucherBig",
                staticClass: "voucher_big_code__main",
                class: {
                    "voucher_big_code__main--qrcode": "barcode" !== e.codeType,
                    "voucher_big_code__main--barcode": "barcode" === e.codeType
                }
            }, [o("img", {
                class: ["voucher_big_code__img", {"voucher_big_code__img--barcode": "barcode" === e.codeType}],
                attrs: {src: e.codeImageUrl, alt: "code big image"}
            })])], 1)])
        }), [], !1, null, null, null).exports, w = function (e, t, o, desc) {
            var c, r = arguments.length,
                n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
            return r > 3 && n && Object.defineProperty(t, o, n), n
        }, S = function (e) {
            function t() {
                var e;
                return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).bigCodeVisible = !1, e
            }

            return Object(_.a)(t, e), Object(n.a)(t, [{
                key: "viewBigCode", value: function () {
                    "mobile" === this.klook.platform && (this.bigCodeVisible = !0, Object(f.e)())
                }
            }, {
                key: "closeBigCode", value: function () {
                    this.bigCodeVisible = !1, Object(f.i)()
                }
            }]), t
        }(h.Vue);
        w([Object(h.Prop)({type: String, default: ""})], S.prototype, "title", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "subTitle", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "voucherNumber", void 0), w([Object(h.Prop)({
            type: String,
            default: "qrcode"
        })], S.prototype, "codeType", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "codeImageUrl", void 0), w([Object(h.Prop)({
            type: Boolean,
            default: !0
        })], S.prototype, "redeemable", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "redeemDesc", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "redeemSubDesc", void 0), w([Object(h.Prop)({
            type: String,
            default: ""
        })], S.prototype, "disabledDesc", void 0), w([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], S.prototype, "isMobileSubCode", void 0), w([h.State], S.prototype, "klook", void 0);
        var P = S = w([Object(h.Component)({components: {VoucherBigCode: j}})], S),
            x = (o(993), Object(O.a)(P, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {
                    staticClass: "voucher_code_main",
                    class: {
                        "voucher_code_main--redeemed": !e.redeemable,
                        "voucher_code_main--nopadding": e.isMobileSubCode
                    }
                }, [e.title ? o("p", {
                    staticClass: "voucher_code_main__title",
                    class: {
                        "voucher_code_main__title--mobile_sub_code": e.isMobileSubCode,
                        "voucher_code_main__title--barcode": "barcode" === e.codeType
                    }
                }, [e._v("\n    " + e._s(e.title) + "\n  ")]) : e._e(), e._v(" "), e.subTitle ? o("p", {
                    staticClass: "voucher_code_main__title subtitle",
                    class: {"voucher_code_main__title--barcode": "barcode" === e.codeType}
                }, [e._v("\n    " + e._s(e.subTitle) + "\n  ")]) : e._e(), e._v(" "), e.redeemDesc || e.redeemSubDesc ? o("p", {staticClass: "voucher_code_main__desc"}, [o("span", [e._v(e._s(e.redeemDesc))]), e._v(" "), o("span", {staticClass: "code_sub_desc"}, [e._v(e._s(e.redeemSubDesc))])]) : e._e(), e._v(" "), o("div", {staticClass: "voucher_code_main__img_container"}, ["" === e.codeImageUrl ? o("klk-loading") : e._e(), e._v(" "), o("div", {
                    class: ["voucher_code_main__img", {"voucher_code_main__img--barcode": "barcode" === e.codeType}],
                    style: {backgroundImage: "url(" + e.codeImageUrl + ")"},
                    on: {click: e.viewBigCode}
                }), e._v(" "), o("span", {staticClass: "voucher_code_main__img_tip"}, [e._v(e._s(e.disabledDesc))])], 1), e._v(" "), "mobile" === e.klook.platform ? o("voucher-big-code", {
                    attrs: {
                        visible: e.bigCodeVisible,
                        "code-image-url": e.codeImageUrl,
                        "voucher-number": e.voucherNumber,
                        "code-type": e.codeType
                    }, on: {"on-close": e.closeBigCode}
                }) : e._e()], 1)
            }), [], !1, null, null, null).exports), R = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, T = function (e) {
                function t() {
                    var e;
                    return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).subCodes = e.codes.map((function (e, t) {
                        return e.visible = 0 === t, e
                    })), e
                }

                return Object(_.a)(t, e), Object(n.a)(t, [{
                    key: "onCodesChanged", value: function (e) {
                        this.subCodes = e.map((function (e, t) {
                            return e.visible = 0 === t, e
                        }))
                    }
                }, {
                    key: "switchCodeVisible", value: function (code) {
                        var e = this;
                        this.$set(code, "visible", !0), this.subCodes.forEach((function (t) {
                            t.voucher_number !== code.voucher_number && e.$set(t, "visible", !1)
                        }))
                    }
                }]), t
            }(h.Vue);
        R([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], T.prototype, "codes", void 0), R([Object(h.Watch)("codes")], T.prototype, "onCodesChanged", null);
        var D = T = R([Object(h.Component)({components: {VoucherSingleCode: x}})], T),
            V = (o(994), Object(O.a)(D, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {staticClass: "voucher_code__sub_codes"}, e._l(e.subCodes, (function (code, t) {
                    return o("div", {
                        key: t,
                        staticClass: "voucher_code__sub_code"
                    }, [o("div", {staticClass: "voucher_code__sub_code_box"}, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !code.visible,
                            expression: "!code.visible"
                        }],
                        staticClass: "voucher_code__sub_code_panel",
                        class: {"voucher_code__sub_code_panel--redeemed": !code.redeemable},
                        on: {
                            click: function (t) {
                                return e.switchCodeVisible(code)
                            }
                        }
                    }, [o("span", [e._v(e._s(code.title))]), e._v(" "), o("p", {staticClass: "voucher_code__sub_code_panel_content_right"}, [code.redeemable ? e._e() : o("span", {staticClass: "voucher_code__sub_code_panel_tip"}, [e._v(e._s(code.disable_desc))]), e._v(" "), o("svg-icon", {
                        staticClass: "voucher_code__sub_code_panel_icon",
                        class: {"voucher_code__sub_code_panel_icon--rotate": code.visible},
                        attrs: {name: "common#klk-icon-arrow-down", color: "rgba(0,0,0,0.38)", size: "24"}
                    })], 1)]), e._v(" "), o("voucher-single-code", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: code.visible,
                            expression: "code.visible"
                        }],
                        staticClass: "voucher_code__sub_code_main",
                        attrs: {
                            title: code.title,
                            "sub-title": code.sub_title,
                            "code-type": code.code_type,
                            "code-image-url": code.code_image_url,
                            redeemable: code.redeemable,
                            "redeem-desc": code.redeem_desc,
                            "redeem-sub-desc": code.redeem_sub_desc,
                            "voucher-number": code.voucher_number,
                            "disabled-desc": code.disable_desc,
                            "is-mobile-sub-code": !0
                        }
                    })], 1)])
                })), 0)
            }), [], !1, null, null, null).exports), M = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, $ = function (e) {
                function t() {
                    var e;
                    return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).redeemSubCodes = e.showSubCodeFirst, e.redeemSubCodesFixedVisible = !1, e.redeemMainCodes = !e.showSubCodeFirst, e.reqFlag = !1, e.interval = 3, e
                }

                var o, v;
                return Object(_.a)(t, e), Object(n.a)(t, [{
                    key: "mounted",
                    value: (v = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getQrcode();
                                case 2:
                                    this.pollingQrcode();
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return v.apply(this, arguments)
                    })
                }, {
                    key: "getQrcode", value: (o = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t, o = this;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.$axios.$get(this.dataApi);
                                case 2:
                                    (t = e.sent).success && t.result && t.result.codes && t.result.codes.length && (this.interval = t.result.interval, t.result.codes.forEach((function (e) {
                                        1 === e.status && o.codes.forEach((function (t) {
                                            e.voucher_number === t.voucher_number && ("base64" === e.code_body_type ? t.code_image_url = e.code_body : t.code_image_url = e.code_image_url, t.redeemable = e.redeemable, t.disable_desc = e.redeemable ? "" : o.$t("47806"))
                                        }))
                                    })));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "pollingQrcode", value: function () {
                        var e = this;
                        setInterval((function () {
                            e.getQrcode()
                        }), 1e3 * this.interval)
                    }
                }, {
                    key: "scrollToRedeemSubCodes", value: function () {
                        var e = document.querySelector(".j_redeem_main_codes");
                        e && e.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
                    }
                }, {
                    key: "resetSubCodeStyle", value: function () {
                        this.$refs.subCodes.codes.forEach((function (e, t) {
                            e.visible = 0 === t
                        }))
                    }
                }, {
                    key: "switchRedeemMainCodes", value: function () {
                        this.redeemMainCodes || (this.redeemMainCodes = !this.redeemMainCodes, this.redeemSubCodes = !1, this.resetSubCodeStyle())
                    }
                }, {
                    key: "switchRedeemSubCodes", value: function () {
                        this.redeemSubCodes || (this.redeemSubCodes = !this.redeemSubCodes, this.redeemMainCodes = !1)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }, {
                    key: "allCodesRedeemed", get: function () {
                        return !!this.codes.length && this.codes.every((function (code) {
                            return !code.redeemable
                        }))
                    }
                }]), t
            }(h.Vue);
        M([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], $.prototype, "bgColor", void 0), M([Object(h.Prop)({
            type: Number,
            default: 1
        })], $.prototype, "type", void 0), M([Object(h.Prop)({
            type: String,
            default: ""
        })], $.prototype, "dataApi", void 0), M([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], $.prototype, "showSubCodeFirst", void 0), M([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], $.prototype, "codes", void 0);
        var I = $ = M([Object(h.Component)({components: {VoucherSpacing: m.a, VoucherSubCodes: V}})], $),
            B = (o(995), Object(O.a)(I, (function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {
                    staticClass: "voucher_code",
                    style: this.styleObj,
                    attrs: {"data-anchor": "VoucherCode"}
                }, [t("div", {staticStyle: {height: "10px"}}), this._v(" "), t("voucher-sub-codes", {attrs: {codes: this.codes}})], 1)
            }), [], !1, null, null, null).exports);
        t.default = B
    }, 1124: function (e, t, o) {
        "use strict";
        o.r(t);
        o(62);
        var c = o(20), r = o(45), n = o(21), d = o(29), l = o(30), _ = o(2), v = o(10), h = o(399), m = o(457),
            f = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, y = function (e) {
                function t() {
                    var e;
                    return Object(c.a)(this, t), (e = Object(n.a)(this, Object(d.a)(t).apply(this, arguments))).subCodes = e.codes.map((function (e, t) {
                        return e.visible = 0 === t, e
                    })), e
                }

                return Object(l.a)(t, e), Object(r.a)(t, [{
                    key: "onCodesChanged", value: function (e) {
                        this.subCodes = e.map((function (e, t) {
                            return e.visible = 0 === t, e
                        }))
                    }
                }, {
                    key: "switchCodeVisible", value: function (code) {
                        var e = this;
                        this.$set(code, "visible", !0), this.subCodes.forEach((function (t) {
                            t.voucher_number !== code.voucher_number && e.$set(t, "visible", !1)
                        }))
                    }
                }]), t
            }(v.Vue);
        f([Object(v.Prop)({type: Number, default: 1})], y.prototype, "type", void 0), f([Object(v.Prop)({
            type: Array,
            default: function () {
                return []
            }
        })], y.prototype, "codes", void 0), f([Object(v.Prop)({
            type: String, default: function () {
                return ""
            }
        })], y.prototype, "voucherToken", void 0), f([Object(v.Watch)("codes")], y.prototype, "onCodesChanged", null);
        var C = y = f([Object(v.Component)({components: {VoucherSingleCode: m.a}})], y), k = (o(988), o(23)),
            O = Object(k.a)(C, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {staticClass: "voucher_code__sub_codes"}, e._l(e.subCodes, (function (code, t) {
                    return o("div", {
                        key: t,
                        staticClass: "voucher_code__sub_code"
                    }, [o("div", {staticClass: "voucher_code__sub_code_box"}, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !code.visible,
                            expression: "!code.visible"
                        }],
                        staticClass: "voucher_code__sub_code_panel",
                        class: {"voucher_code__sub_code_panel--redeemed": !code.redeemable},
                        on: {
                            click: function (t) {
                                return e.switchCodeVisible(code)
                            }
                        }
                    }, [o("span", [e._v(e._s(code.title))]), e._v(" "), o("p", {staticClass: "voucher_code__sub_code_panel_content_right"}, [code.redeemable ? e._e() : o("span", {staticClass: "voucher_code__sub_code_panel_tip"}, [e._v(e._s(code.disable_desc))]), e._v(" "), o("svg-icon", {
                        staticClass: "voucher_code__sub_code_panel_icon",
                        class: {"voucher_code__sub_code_panel_icon--rotate": code.visible},
                        attrs: {name: "common#klk-icon-arrow-down", color: "rgba(0,0,0,0.38)", size: "24"}
                    })], 1)]), e._v(" "), o("voucher-single-code", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: code.visible,
                            expression: "code.visible"
                        }],
                        staticClass: "voucher_code__sub_code_main",
                        attrs: {
                            type: e.type,
                            title: code.title,
                            "sub-title": code.sub_title,
                            "code-type": code.code_type,
                            "code-image-url": code.code_image_url,
                            redeemable: code.redeemable,
                            "redeem-desc": code.redeem_desc,
                            "redeem-sub-desc": code.redeem_sub_desc,
                            "voucher-number": code.voucher_number,
                            "disabled-desc": code.disable_desc,
                            "is-mobile-sub-code": !0,
                            "voucher-token": e.voucherToken
                        }
                    })], 1)])
                })), 0)
            }), [], !1, null, null, null).exports, j = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, w = function (e) {
                function t() {
                    var e;
                    return Object(c.a)(this, t), (e = Object(n.a)(this, Object(d.a)(t).apply(this, arguments))).redeemSubCodes = e.showSubCodeFirst, e.redeemSubCodesFixedVisible = !1, e.redeemMainCodes = !e.showSubCodeFirst, e
                }

                return Object(l.a)(t, e), Object(r.a)(t, [{
                    key: "scrollToRedeemSubCodes", value: function () {
                        var e = document.querySelector(".j_redeem_main_codes");
                        e && e.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
                    }
                }, {
                    key: "resetSubCodeStyle", value: function () {
                        this.$refs.subCodes.codes.forEach((function (e, t) {
                            e.visible = 0 === t
                        }))
                    }
                }, {
                    key: "switchRedeemMainCodes", value: function () {
                        this.redeemMainCodes || (this.redeemMainCodes = !this.redeemMainCodes, this.redeemSubCodes = !1, this.resetSubCodeStyle())
                    }
                }, {
                    key: "switchRedeemSubCodes", value: function () {
                        this.redeemSubCodes || (this.redeemSubCodes = !this.redeemSubCodes, this.redeemMainCodes = !1)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }, {
                    key: "allCodesRedeemed", get: function () {
                        return !!this.codes.length && this.codes.every((function (code) {
                            return !code.redeemable
                        }))
                    }
                }]), t
            }(v.Vue);
        j([Object(v.Prop)({
            type: String,
            default: "#fff"
        })], w.prototype, "bgColor", void 0), j([Object(v.Prop)({
            type: Number,
            default: 1
        })], w.prototype, "type", void 0), j([Object(v.Prop)({
            type: Boolean,
            default: !1
        })], w.prototype, "showSubCodeFirst", void 0), j([Object(v.Prop)({
            type: Object, default: function () {
                return {
                    title: "",
                    voucher_number: "123",
                    code_type: "",
                    code_image_url: "http://t218.test.klook.io/qrcode/2019/07/02/KLK_KLK5429101414_d0a389f599ec40bf5aa783d8dd95118e.png",
                    redeemable: !0,
                    redeem_desc: "输入二维码/输入凭证号验证"
                }
            }
        })], w.prototype, "mainCode", void 0), j([Object(v.Prop)({
            type: Array, default: function () {
                return []
            }
        })], w.prototype, "codes", void 0), j([Object(v.Prop)({
            type: String, default: function () {
                return ""
            }
        })], w.prototype, "voucherToken", void 0);
        var S = w = j([Object(v.Component)({
            components: {
                VoucherSpacing: h.a,
                VoucherSubCodes: O,
                VoucherSingleCode: m.a
            }
        })], w), P = (o(989), Object(k.a)(S, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {
                staticClass: "voucher_code",
                style: e.styleObj,
                attrs: {"data-anchor": "VoucherCode"}
            }, [o("div", {style: {height: e.mainCode ? "16px" : "10px"}}), e._v(" "), 1 !== e.type && 2 !== e.type || !e.mainCode ? e._e() : [o("div", {class: {has_main_and_sub_code: 2 === e.type}}, [2 === e.type ? o("div", [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.redeemSubCodesFixedVisible,
                    expression: "redeemSubCodesFixedVisible"
                }], staticClass: "voucher_code__redeem_sub_codes voucher_code__redeem_sub_codes--fixed"
            }, [o("klk-button", {
                attrs: {type: "primary", size: "small", block: !0},
                on: {click: e.scrollToRedeemSubCodes}
            }, [o("div", {staticClass: "voucher_code__redeem_sub_codes_inner"}, [o("p", {staticClass: "voucher_code__redeem_sub_codes_txt"}, [e._v("\n                " + e._s(e.$t("redeem_all_units")) + "\n              ")]), e._v(" "), o("svg-icon", {
                staticClass: "voucher_code__redeem_sub_codes_icon",
                class: {"voucher_code__redeem_sub_codes_icon--rotate": e.redeemMainCodes},
                attrs: {name: "common#klk-icon-arrow-down", size: "30"}
            })], 1)])], 1), e._v(" "), o("klk-button", {
                staticClass: "j_redeem_main_codes",
                class: {main_btn_close: !e.redeemMainCodes},
                attrs: {type: "primary", size: "small", block: !0},
                on: {click: e.switchRedeemMainCodes}
            }, [o("div", {staticClass: "voucher_code__redeem_sub_codes_inner"}, [o("p", {staticClass: "voucher_code__redeem_sub_codes_txt"}, [e._v("\n              " + e._s(e.$t("redeem_all_units")) + "\n            ")]), e._v(" "), o("svg-icon", {
                staticClass: "voucher_code__redeem_sub_codes_icon",
                class: {"voucher_code__redeem_sub_codes_icon--rotate": e.redeemMainCodes},
                attrs: {name: "common#klk-icon-arrow-down", size: "30"}
            })], 1)])], 1) : e._e(), e._v(" "), o("voucher-single-code", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.redeemSubCodes,
                    expression: "!redeemSubCodes"
                }],
                staticClass: "voucher_code__main_code",
                class: {"voucher_code__main_code--hidden": e.redeemSubCodes},
                attrs: {
                    type: e.type,
                    title: e.mainCode.title,
                    "sub-title": e.mainCode.sub_title,
                    "code-type": e.mainCode.code_type,
                    "code-image-url": e.mainCode.code_image_url,
                    redeemable: e.mainCode.redeemable,
                    "redeem-desc": e.mainCode.redeem_desc,
                    "redeem-sub-desc": e.mainCode.redeem_sub_desc,
                    "voucher-number": e.mainCode.voucher_number,
                    "disabled-desc": e.mainCode.disable_desc,
                    "voucher-token": e.voucherToken
                }
            })], 1)], e._v(" "), 2 === e.type ? [o("div", {staticClass: "has_main_and_sub_code"}, [o("div", {staticClass: "voucher_code__redeem_sub_codes"}, [o("klk-button", {
                class: {
                    "voucher_code__redeem_sub_codes--disabled": e.allCodesRedeemed,
                    main_btn_close: !e.redeemSubCodes
                }, attrs: {type: "primary", size: "small", block: !0}, on: {click: e.switchRedeemSubCodes}
            }, [o("div", {staticClass: "voucher_code__redeem_sub_codes_inner"}, [o("p", {staticClass: "voucher_code__redeem_sub_codes_txt"}, [e._v("\n              " + e._s(e.$t("redeen_individual_units")) + "\n            ")]), e._v(" "), o("svg-icon", {
                staticClass: "voucher_code__redeem_sub_codes_icon",
                class: {"voucher_code__redeem_sub_codes_icon--rotate": e.redeemSubCodes},
                attrs: {name: "common#klk-icon-arrow-down", size: "30"}
            })], 1)])], 1), e._v(" "), o("voucher-sub-codes", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.redeemSubCodes,
                    expression: "redeemSubCodes"
                }],
                ref: "subCodes",
                staticClass: "voucher_code__sub_codes_box",
                attrs: {type: e.type, codes: e.codes, "voucher-token": e.voucherToken}
            })], 1)] : e._e(), e._v(" "), 3 === e.type ? [o("voucher-sub-codes", {
                attrs: {
                    type: e.type,
                    codes: e.codes,
                    "voucher-token": e.voucherToken
                }
            })] : e._e()], 2)
        }), [], !1, null, null, null).exports);
        t.default = P
    }, 1130: function (e, t, o) {
        "use strict";
        o.r(t);
        o(54);
        var c = o(13), r = (o(31), o(20)), n = o(45), d = o(21), l = o(29), _ = o(30), v = o(2), h = o(10),
            m = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, f = function (e) {
                function t() {
                    var e;
                    return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).showConfirmModal = !1, e.loading = !1, e.collapseIndex = ["0"], e.countdown = 0, e.intervalId = null, e
                }

                var o;
                return Object(_.a)(t, e), Object(n.a)(t, [{
                    key: "replacePlaceholder", value: function (template, e) {
                        return template.replace(/{(\w+)}/g, (function (t, o) {
                            return o in e ? e[o] : t
                        }))
                    }
                }, {
                    key: "needHideBottomBorder", value: function (e, t) {
                        var o = Math.ceil(e.length / 3);
                        return Math.floor(t / 3) + 1 === o
                    }
                }, {
                    key: "padZero", value: function (e) {
                        return e < 10 ? "0" + e : e
                    }
                }, {
                    key: "beforeDestroy", value: function () {
                        clearInterval(this.intervalId)
                    }
                }, {
                    key: "updateCountdown", value: function () {
                        var e = new Date(this.deadline).getTime(), t = (new Date).getTime();
                        this.countdown = Math.max(e - t, 0), this.countdown <= 0 && (clearInterval(this.intervalId), this.countdown = 0, window.location.reload())
                    }
                }, {
                    key: "mounted", value: function () {
                        "activated" === this.currentStatus && (this.updateCountdown(), this.intervalId = setInterval(this.updateCountdown, 1e3))
                    }
                }, {
                    key: "handleAction", value: (o = Object(c.a)(regeneratorRuntime.mark((function e(data) {
                        var t;
                        return regeneratorRuntime.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!data.request_url) {
                                        e.next = 16;
                                        break
                                    }
                                    return this.loading = !0, e.prev = 2, e.next = 5, this.$axios.$get("/v1/experiencesrv/dock/supplier_service/voucher_activate", {
                                        params: {voucher_token: this.voucherToken},
                                        timeout: 3e4
                                    });
                                case 5:
                                    this.loading = !1, this.showConfirmModal = !1, window.location.reload(), e.next = 14;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(2), this.loading = !1, this.$toast(null === (t = this.data) || void 0 === t ? void 0 : t.activated_error_text);
                                case 14:
                                    e.next = 17;
                                    break;
                                case 16:
                                    this.showConfirmModal = !1;
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[2, 10]])
                    }))), function (e) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "handleActiveCode", value: function () {
                        this.showConfirmModal = !0
                    }
                }, {
                    key: "currentStatus", get: function () {
                        var e;
                        return null === (e = this.data) || void 0 === e ? void 0 : e.status
                    }
                }, {
                    key: "deadline", get: function () {
                        var e, t;
                        return null === (t = null === (e = this.currentStatusData) || void 0 === e ? void 0 : e.countdown) || void 0 === t ? void 0 : t.valid_end_time
                    }
                }, {
                    key: "currentStatusData", get: function () {
                        return (null == this ? void 0 : this.data[this.currentStatus]) || {}
                    }
                }, {
                    key: "formattedTime", get: function () {
                        var e;
                        if (this.countdown) {
                            var t = this.padZero(Math.floor(this.countdown % 864e5 / 36e5)),
                                o = this.padZero(Math.floor(this.countdown % 36e5 / 6e4)),
                                c = this.padZero(Math.floor(this.countdown % 6e4 / 1e3));
                            return this.replacePlaceholder((null === (e = this.data) || void 0 === e ? void 0 : e.countdown_time_text) || "", {
                                hh: "<div class='time'>".concat(t, "</div>"),
                                mm: '<div class="time">'.concat(o, "</div>"),
                                ss: '<div class="time">'.concat(c, "</div>")
                            })
                        }
                    }
                }, {
                    key: "popWindowData", get: function () {
                        var e, t, o, c,
                            data = null === (t = null === (e = this.currentStatusData) || void 0 === e ? void 0 : e.buttons) || void 0 === t ? void 0 : t.pop_window;
                        return {
                            title: null == data ? void 0 : data.title,
                            tips: null == data ? void 0 : data.tips,
                            buttons: ((null == data ? void 0 : data.buttons) || []).reverse(),
                            quantity: {
                                label: null === (o = null == data ? void 0 : data.quantity) || void 0 === o ? void 0 : o.label,
                                text: null === (c = null == data ? void 0 : data.quantity) || void 0 === c ? void 0 : c.text
                            }
                        }
                    }
                }, {
                    key: "activeContent", get: function () {
                        var e;
                        return this.replacePlaceholder((null === (e = this.data) || void 0 === e ? void 0 : e.activated_time_text) || "", {time: "<span class='content'>".concat(this.currentStatusData.activated_time, "</span>")})
                    }
                }]), t
            }(h.Vue);
        m([Object(h.Prop)({
            type: Object, default: function () {
                return {}
            }
        })], f.prototype, "data", void 0), m([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], f.prototype, "codes", void 0), m([Object(h.Prop)({
            type: String, default: function () {
                return ""
            }
        })], f.prototype, "voucherToken", void 0);
        var y = f = m([Object(h.Component)({components: {}})], f), C = (o(991), o(23)),
            k = Object(C.a)(y, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {
                    staticClass: "voucher_code",
                    attrs: {"data-anchor": "VoucherCode"}
                }, [o("voucher-spacing", {attrs: {height: 4}}), e._v(" "), "wait_activate" === e.currentStatus ? [o("div", {staticClass: "wait_activate"}, [o("klk-alert", {
                    attrs: {
                        type: "warning",
                        "show-icon": ""
                    }
                }, [o("span", {domProps: {innerHTML: e._s(e.currentStatusData.tips)}})]), e._v(" "), e.currentStatusData.buttons ? o("div", {staticClass: "active_content"}, [e.currentStatusData.buttons.code_image_url ? o("img", {attrs: {src: e.currentStatusData.buttons.code_image_url}}) : e._e(), e._v(" "), o("klk-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary",
                        size: "small",
                        "data-spm-module": "Activate",
                        "data-spm-virtual-item": "__virtual?typ=entry"
                    },
                    on: {click: e.handleActiveCode}
                }, [e._v("\n          " + e._s(e.currentStatusData.buttons.text) + "\n        ")]), e._v(" "), o("klk-modal", {
                    staticClass: "active_modal",
                    attrs: {
                        open: e.showConfirmModal,
                        "data-spm-module": "ActivationConfirm?typ=entry",
                        "data-spm-virtual-item": "__virtual?typ=entry",
                        "overlay-closable": !1
                    },
                    on: {
                        "update:open": function (t) {
                            e.showConfirmModal = t
                        }
                    }
                }, [e.loading ? o("klk-loading") : e._e(), e._v(" "), e.popWindowData ? o("div", [o("div", {staticClass: "title"}, [e._v("\n              " + e._s(e.popWindowData.title) + "\n            ")]), e._v(" "), o("div", {staticClass: "passenger_content"}, [o("div", {staticClass: "label"}, [e._v("\n                " + e._s(e.popWindowData.quantity.label) + "\n              ")]), e._v(" "), o("div", [e._v("\n                " + e._s(e.popWindowData.quantity.text) + "\n              ")])]), e._v(" "), o("div", {
                    staticClass: "tips",
                    domProps: {innerHTML: e._s(e.popWindowData.tips)}
                })]) : e._e(), e._v(" "), o("div", {
                    staticClass: "footer",
                    attrs: {slot: "footer"},
                    slot: "footer"
                }, e._l(e.popWindowData.buttons, (function (t, c) {
                    return o("klk-button", {
                        key: c,
                        attrs: {
                            type: t.request_url ? "primary" : "outlined",
                            size: "small",
                            "data-spm-item": t.request_url ? "ActivateNow" : "MaybeLater"
                        },
                        on: {
                            click: function (o) {
                                return e.handleAction(t)
                            }
                        }
                    }, [e._v("\n              " + e._s(t.text) + "\n            ")])
                })), 1)], 1)], 1) : e._e()], 1)] : "activated" === e.currentStatus ? [o("div", {staticClass: "activated"}, [e.currentStatusData.countdown && e.countdown ? o("div", {staticClass: "cutdown_time"}, [o("img", {
                    staticClass: "icon",
                    attrs: {src: "https://res.klook.com/image/upload/v1733121882/ued/Hotel/icon_time_time_fill_s.png"}
                }), e._v(" "), o("div", {
                    staticClass: "text",
                    domProps: {innerHTML: e._s(e.formattedTime)}
                })]) : e._e(), e._v(" "), o("div", {staticClass: "qrcode"}, [o("div", {class: ["content"]}, [o("klk-collapse", {
                    attrs: {
                        size: "small",
                        split: ""
                    }, model: {
                        value: e.collapseIndex, callback: function (t) {
                            e.collapseIndex = t
                        }, expression: "collapseIndex"
                    }
                }, e._l(e.currentStatusData.voucher_code_infos, (function (code, t) {
                    return o("klk-collapse-item", {
                        key: t,
                        class: ["item"],
                        attrs: {title: code.title, name: "" + t}
                    }, [o("img", {
                        staticClass: "code",
                        attrs: {src: code.code_image_url}
                    }), e._v(" "), o("div", {staticClass: "label"}, [e._v("\n                " + e._s(e.$t("global.customer.voucher")) + "\n              ")]), e._v(" "), o("div", {staticClass: "num"}, [e._v(e._s(code.voucher_number))])])
                })), 1)], 1)])])] : "expired" === e.currentStatus ? [o("div", {staticClass: "expired"}, [o("klk-alert", {
                    attrs: {
                        type: "error",
                        "show-icon": ""
                    }
                }, [e._v("\n        " + e._s(e.currentStatusData.tips) + "\n      ")]), e._v(" "), o("div", {staticClass: "qrcode"}, [o("div", {class: ["content"]}, [o("klk-collapse", {
                    attrs: {
                        size: "small",
                        split: ""
                    }
                }, e._l(e.currentStatusData.voucher_code_infos, (function (code, t) {
                    return o("klk-collapse-item", {
                        key: t,
                        class: ["item"],
                        attrs: {title: code.title}
                    }, [o("div", {
                        staticClass: "img",
                        style: "background-image: url(" + code.code_image_url + ");"
                    }, [o("div", {staticClass: "label"}, [e._v("\n                  " + e._s(code.code_expired_text) + "\n                ")])])])
                })), 1)], 1)]), e._v(" "), o("div", {
                    staticClass: "time",
                    domProps: {innerHTML: e._s(e.activeContent)}
                })], 1)] : e._e()], 2)
            }), [], !1, null, null, null).exports;
        t.default = k
    }, 409: function (e, t, o) {
    }, 410: function (e, t, o) {
    }, 411: function (e, t, o) {
    }, 457: function (e, t, o) {
        "use strict";
        o(62), o(37), o(42), o(54);
        var c = o(13), r = o(20), n = o(45), d = o(21), l = o(29), _ = o(30), v = o(2), h = o(10), m = o(76),
            f = function (e, t, o, desc) {
                var c, r = arguments.length,
                    n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
                return r > 3 && n && Object.defineProperty(t, o, n), n
            }, y = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(d.a)(this, Object(l.a)(t).apply(this, arguments))
                }

                return Object(_.a)(t, e), Object(n.a)(t, [{
                    key: "maskHideBigCode", value: function (e) {
                        this.$refs.voucherBig.contains(e.target) || this.$emit("on-close")
                    }
                }, {
                    key: "hideBigCode", value: function () {
                        this.$emit("on-close")
                    }
                }]), t
            }(h.Vue);
        f([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], y.prototype, "visible", void 0), f([Object(h.Prop)({
            type: String,
            default: ""
        })], y.prototype, "voucherNumber", void 0), f([Object(h.Prop)({
            type: String,
            default: "qrcode"
        })], y.prototype, "codeType", void 0), f([Object(h.Prop)({
            type: String,
            default: ""
        })], y.prototype, "codeImageUrl", void 0);
        var C = y = f([Object(h.Component)({})], y), k = (o(487), o(23)), O = Object(k.a)(C, (function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("transition", {attrs: {name: "fade"}}, [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.visible,
                    expression: "visible"
                }], staticClass: "voucher_big_code", on: {
                    click: function (t) {
                        return e.maskHideBigCode(t)
                    }
                }
            }, [o("svg-icon", {
                staticClass: "voucher_big_code__close",
                class: {
                    "voucher_big_code__close--qrCode": "barcode" !== e.codeType,
                    "voucher_big_code__close--barcode": "barcode" === e.codeType
                },
                attrs: {name: "common#klk-icon-close", color: "rgba(0, 0, 0, 0.54)", size: "24"},
                nativeOn: {
                    click: function (t) {
                        return e.hideBigCode(t)
                    }
                }
            }), e._v(" "), o("div", {
                ref: "voucherBig",
                staticClass: "voucher_big_code__main",
                class: {
                    "voucher_big_code__main--qrcode": "barcode" !== e.codeType,
                    "voucher_big_code__main--barcode": "barcode" === e.codeType
                }
            }, [o("img", {
                class: ["voucher_big_code__img", {"voucher_big_code__img--barcode": "barcode" === e.codeType}],
                attrs: {src: e.codeImageUrl, alt: "code big image"}
            }), e._v(" "), o("p", {staticClass: "voucher_big_code__number_label"}, [e._v(e._s(e.$t("global.customer.voucher")))]), e._v(" "), o("p", {staticClass: "voucher_big_code__number"}, [e._v(e._s(e.voucherNumber))])])], 1)])
        }), [], !1, null, null, null).exports, j = function (e, t, o, desc) {
            var c, r = arguments.length,
                n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
            return r > 3 && n && Object.defineProperty(t, o, n), n
        }, w = null, S = function (e) {
            function t() {
                var e;
                return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).walletMap = {
                    de: "de",
                    es: "es",
                    fr: "fr",
                    id: "id",
                    it: "it",
                    ja: "ja",
                    ko: "ko",
                    ru: "ru",
                    th: "th",
                    vi: "vi",
                    "zh-CN": "cn",
                    "ms-MY": "my",
                    "zh-HK": "tw",
                    "zh-TW": "tw"
                }, e
            }

            var v, h, m;
            return Object(_.a)(t, e), Object(n.a)(t, [{
                key: "mounted",
                value: (m = Object(c.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.initDsbridge();
                            case 2:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return m.apply(this, arguments)
                })
            }, {
                key: "handleClick", value: (h = Object(c.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.initDsbridge();
                            case 2:
                                this.callAppleWallet();
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return h.apply(this, arguments)
                })
            }, {
                key: "initDsbridge", value: (v = Object(c.a)(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!w || !w.call) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, o.e(93).then(o.t.bind(null, 1116, 7));
                            case 4:
                                t = e.sent, w = t && t.default;
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), function () {
                    return v.apply(this, arguments)
                })
            }, {
                key: "callAppleWallet", value: function () {
                    w && w.call && w.call("addToAppleWallet", {
                        type: this.type,
                        token: this.voucherToken,
                        number: this.voucherNumber
                    })
                }
            }, {
                key: "walletImgUrl", get: function () {
                    var e = this.klook.language || "en", t = this.walletMap[e] || "en";
                    return "common#apple_wallet_".concat(t)
                }
            }]), t
        }(h.Vue);
        j([Object(h.Prop)()], S.prototype, "type", void 0), j([Object(h.Prop)()], S.prototype, "voucherToken", void 0), j([Object(h.Prop)()], S.prototype, "voucherNumber", void 0), j([h.State], S.prototype, "klook", void 0);
        var P = S = j([h.Component], S), x = (o(488), Object(k.a)(P, (function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {
                staticClass: "voucher-app-wallet",
                on: {click: this.handleClick}
            }, [t("SvgIcon", {attrs: {name: this.walletImgUrl}})], 1)
        }), [], !1, null, "701613eb", null).exports), R = o(47), T = function (e, t, o, desc) {
            var c, r = arguments.length,
                n = r < 3 ? t : null === desc ? desc = Object.getOwnPropertyDescriptor(t, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(v.a)(Reflect)) && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, o, desc); else for (var i = e.length - 1; i >= 0; i--) (c = e[i]) && (n = (r < 3 ? c(n) : r > 3 ? c(t, o, n) : c(t, o)) || n);
            return r > 3 && n && Object.defineProperty(t, o, n), n
        }, D = function (e) {
            function t() {
                var e;
                return Object(r.a)(this, t), (e = Object(d.a)(this, Object(l.a)(t).apply(this, arguments))).bigCodeVisible = !1, e.isLimitedAccess = !0, e
            }

            var o;
            return Object(_.a)(t, e), Object(n.a)(t, [{
                key: "viewBigCode", value: function () {
                    "mobile" === this.klook.platform && (this.bigCodeVisible = !0, Object(m.e)())
                }
            }, {
                key: "closeBigCode", value: function () {
                    this.bigCodeVisible = !1, Object(m.i)()
                }
            }, {
                key: "copyVoucherNumber", value: (o = Object(c.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(m.a)(this.voucherNumber);
                            case 2:
                                e.sent && this.$toast(this.$t("74257"));
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))), function () {
                    return o.apply(this, arguments)
                })
            }, {
                key: "mounted", value: function () {
                    this.initData()
                }
            }, {
                key: "initData", value: function () {
                    var e = this;
                    this.calcIsIOS && this.$axios.$get(R.a.verify, {timeout: 8e3}).then((function (t) {
                        if (t.success && t.result) {
                            var o = t.result,
                                c = ((null == o ? void 0 : o.restrict_policies) || []).includes("deprecated");
                            e.isLimitedAccess = c
                        } else e.isLimitedAccess = !1
                    })).catch((function () {
                        e.isLimitedAccess = !1
                    }))
                }
            }, {
                key: "showAppleWallet", get: function () {
                    return this.calcIsIOS && !this.isLimitedAccess && !this.disableAppleWallet
                }
            }, {
                key: "calcIsIOS", get: function () {
                    var e = this.klook;
                    return e.isKlookApp && e.isIOS
                }
            }]), t
        }(h.Vue);
        T([Object(h.Prop)({type: Number, default: 1})], D.prototype, "type", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "title", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "subTitle", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "voucherNumber", void 0), T([Object(h.Prop)({
            type: String,
            default: "qrcode"
        })], D.prototype, "codeType", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "codeImageUrl", void 0), T([Object(h.Prop)({
            type: Boolean,
            default: !0
        })], D.prototype, "redeemable", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "redeemDesc", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "redeemSubDesc", void 0), T([Object(h.Prop)({
            type: String,
            default: ""
        })], D.prototype, "disabledDesc", void 0), T([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], D.prototype, "isMobileSubCode", void 0), T([Object(h.Prop)({
            type: String, default: function () {
                return ""
            }
        })], D.prototype, "voucherToken", void 0), T([Object(h.Inject)({
            from: "disableAppleWallet",
            default: !1
        })], D.prototype, "disableAppleWallet", void 0), T([h.State], D.prototype, "klook", void 0);
        var V = D = T([Object(h.Component)({components: {VoucherBigCode: O, VoucherAppWallet: x}})], D),
            M = (o(489), Object(k.a)(V, (function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {
                    staticClass: "voucher_code_main",
                    class: {
                        "voucher_code_main--redeemed": !e.redeemable,
                        "voucher_code_main--nopadding": e.isMobileSubCode
                    }
                }, [e.title ? o("p", {
                    staticClass: "voucher_code_main__title",
                    class: {
                        "voucher_code_main__title--mobile_sub_code": e.isMobileSubCode,
                        "voucher_code_main__title--barcode": "barcode" === e.codeType
                    }
                }, [e._v("\n    " + e._s(e.title) + "\n  ")]) : e._e(), e._v(" "), e.subTitle ? o("p", {
                    staticClass: "voucher_code_main__title subtitle",
                    class: {"voucher_code_main__title--barcode": "barcode" === e.codeType}
                }, [e._v("\n    " + e._s(e.subTitle) + "\n  ")]) : e._e(), e._v(" "), e.redeemDesc || e.redeemSubDesc ? o("p", {staticClass: "voucher_code_main__desc"}, [o("span", [e._v(e._s(e.redeemDesc))]), e._v(" "), o("span", {staticClass: "code_sub_desc"}, [e._v(e._s(e.redeemSubDesc))])]) : e._e(), e._v(" "), o("div", {class: ["voucher_code_main__img_container", {"voucher_code_main__img_container--barcode": "barcode" === e.codeType}]}, [o("div", {
                    class: ["voucher_code_main__img", {"voucher_code_main__img--qrcode": "barcode" !== e.codeType}, {"voucher_code_main__img--barcode  barcode-scoped": "barcode" === e.codeType}],
                    style: {backgroundImage: "url(" + e.codeImageUrl + ")"},
                    on: {click: e.viewBigCode}
                }), e._v(" "), "mobile" !== e.klook.platform || e.disabledDesc || "qrcode" !== e.codeType ? e._e() : o("div", {
                    staticClass: "voucher_code_main__img_tip_click",
                    on: {click: e.viewBigCode}
                }, [e._v("\n      " + e._s(e.$t("220934")) + "\n    ")]), e._v(" "), o("span", {staticClass: "voucher_code_main__img_tip"}, [e._v(e._s(e.disabledDesc))])]), e._v(" "), o("p", {
                    staticClass: "voucher_code_main__number_label",
                    class: {"voucher_code_main__number_label--barcode": "barcode" === e.codeType}
                }, [e._v("\n    " + e._s(e.$t("global.customer.voucher")) + "\n  ")]), e._v(" "), o("p", {
                    staticClass: "voucher_code_main__number",
                    on: {click: e.copyVoucherNumber}
                }, [o("span", [e._v(e._s(e.voucherNumber))]), e._v(" "), o("svg-icon", {
                    staticClass: "voucher_code_copy_icon",
                    attrs: {name: "common#icon-copy"}
                })], 1), e._v(" "), o("ClientOnly", [e.showAppleWallet ? o("voucher-app-wallet", {
                    attrs: {
                        type: e.type,
                        "voucher-token": e.voucherToken,
                        "voucher-number": e.voucherNumber
                    }
                }) : e._e()], 1), e._v(" "), "mobile" === e.klook.platform ? o("voucher-big-code", {
                    attrs: {
                        visible: e.bigCodeVisible,
                        "code-image-url": e.codeImageUrl,
                        "voucher-number": e.voucherNumber,
                        "code-type": e.codeType
                    }, on: {"on-close": e.closeBigCode}
                }) : e._e()], 1)
            }), [], !1, null, null, null));
        t.a = M.exports
    }, 487: function (e, t, o) {
        "use strict";
        var c = o(409);
        o.n(c).a
    }, 488: function (e, t, o) {
        "use strict";
        var c = o(410);
        o.n(c).a
    }, 489: function (e, t, o) {
        "use strict";
        var c = o(411);
        o.n(c).a
    }, 654: function (e, t, o) {
    }, 655: function (e, t, o) {
    }, 657: function (e, t, o) {
    }, 658: function (e, t, o) {
    }, 659: function (e, t, o) {
    }, 660: function (e, t, o) {
    }, 661: function (e, t, o) {
    }, 988: function (e, t, o) {
        "use strict";
        var c = o(654);
        o.n(c).a
    }, 989: function (e, t, o) {
        "use strict";
        var c = o(655);
        o.n(c).a
    }, 991: function (e, t, o) {
        "use strict";
        var c = o(657);
        o.n(c).a
    }, 992: function (e, t, o) {
        "use strict";
        var c = o(658);
        o.n(c).a
    }, 993: function (e, t, o) {
        "use strict";
        var c = o(659);
        o.n(c).a
    }, 994: function (e, t, o) {
        "use strict";
        var c = o(660);
        o.n(c).a
    }, 995: function (e, t, o) {
        "use strict";
        var c = o(661);
        o.n(c).a
    }
}]);