(window.webpackJsonp = window.webpackJsonp || []).push([[68], {
    1117: function (t, e, o) {
        "use strict";
        o.r(e);
        var n = o(209), r = (o(75), o(32), o(15), o(24), o(55), o(56), o(9), o(249), o(46), o(65), o(54), o(13)),
            c = o(20), l = o(45), d = o(21), f = o(29), h = o(30), v = (o(783), o(101), o(36), o(11)),
            _ = (o(37), o(42), o(2)), m = o(10), y = o(1110), O = o(536), k = o(72),
            j = ["global_message", "voucher_header", "voucher_title", "spacing", "divider", "group", "title_text", "notch_divider", "exp_translation", "ubr_dynamic_voucher", "pass_voucher_emot", "pass_voucher_fuji", "voucher_redeem_1", "voucher_redeem_2", "countdown_voucher", "service_staff", "supplier_info", "markdown", "image", "map", "contact_us", "time_1", "time_2", "location_1", "highlight_hint", "image_show", "location_2", "passenger", "itinerary_1", "itinerary_2", "exp_itinerary", "pick_up_meet_up", "pick_up_meet_up_v2", "dynamic_voucher_code", "event_dynamic_voucher_v1"],
            C = ["divider", "notch_divider"],
            w = ["title_text", "time_1", "location_1", "passenger", "service_staff", "supplier_info"],
            P = ["title_text", "time_1"], x = /(.+)(\.jpg|\.jpeg|\.png|\.webp)$/i, R = {
                initialState: "checkLang", run: function (t, e, o) {
                    var n = this[o || this.initialState](t);
                    if (n.success) {
                        var r = n.nextAction;
                        "end" !== r ? this.run(t, e, r) : e(n)
                    } else console.log("check error", n), e(n)
                }, checkLang: function (t) {
                    return {
                        success: !!t.language,
                        level: "E",
                        action: "check language",
                        message: "language not exist",
                        nextAction: "checkContainersLength"
                    }
                }, checkContainersLength: function (t) {
                    var e = t.containers;
                    return {
                        success: e && Array.isArray(e) && e.length >= 2,
                        level: "E",
                        action: "check containers length",
                        message: "containers length < 2 is invalid",
                        nextAction: "checkContainersParams"
                    }
                }, checkContainersParams: function (t) {
                    return {
                        success: !t.containers.some((function (t) {
                            return !t.style
                        })),
                        level: "E",
                        action: "check containers necessary params",
                        message: "some containers necessary params not exist",
                        nextAction: "checkContainersComponentsLength"
                    }
                }, checkContainersComponentsLength: function (t) {
                    return {
                        success: t.containers.every((function (t) {
                            return Array.isArray(t.components) && t.components.length >= 1
                        })),
                        level: "E",
                        action: "check containers components length",
                        message: "some container components length < 1 or some  container components not array type",
                        nextAction: "checkComponentsType"
                    }
                }, checkComponentsType: function (t) {
                    var e = "";
                    return {
                        success: !t.containers.some((function (t) {
                            return t.components.some((function (component) {
                                return e = component.type, !j.includes(component.type)
                            }))
                        })),
                        level: "E",
                        action: "check components type",
                        message: "components invalid type found: ".concat(e),
                        nextAction: "checkComponentsData"
                    }
                }, checkComponentsData: function (t) {
                    return {
                        success: !t.containers.some((function (t) {
                            return t.components.some((function (component) {
                                return !component.data && !C.includes(component.type)
                            }))
                        })),
                        level: "E",
                        action: "check components data",
                        message: "components data not exist found",
                        nextAction: "checkAlert"
                    }
                }, checkAlert: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "global_message" === t.type
                        }))))
                    })), {
                        success: 0 === o.length || 1 === o.length && "global_message" === (e[0].components[0] || {}).type,
                        level: "E",
                        action: "check component alert",
                        message: "component alert length > 1 or position is invalid: ".concat(JSON.stringify(o)),
                        nextAction: "checkAlertData"
                    }
                }, checkAlertData: function (t) {
                    var e = t.containers[0].components[0] || {};
                    return {
                        success: "global_message" !== e.type || "global_message" === e.type && !!e.data.message,
                        level: "E",
                        action: "check component alert data",
                        message: "data message not exist",
                        nextAction: "checkVoucherHeader"
                    }
                }, checkVoucherHeader: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_header" === t.type
                        }))))
                    })), {
                        success: 1 === o.length,
                        level: "E",
                        action: "check component voucherHeader",
                        message: "component voucherHeader length !== 1",
                        nextAction: "checkVoucherHeaderData"
                    }
                }, checkVoucherHeaderData: function (t) {
                    var e = t.containers, o = [];
                    e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_header" === t.type
                        }))))
                    }));
                    var n = o[0];
                    return {
                        success: !(!n.data.logo || !x.test(n.data.logo)),
                        level: "E",
                        action: "check component VoucherHeader data",
                        message: "data logo not exist",
                        nextAction: "checkVoucherTitle"
                    }
                }, checkVoucherTitle: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_title" === t.type
                        }))))
                    })), {
                        success: o.length <= 1,
                        level: "E",
                        action: "check component voucherTitle",
                        message: "component voucherTitle length > 1",
                        nextAction: "checkVoucherTitleData"
                    }
                }, checkVoucherTitleData: function (t) {
                    var e = t.containers, o = [];
                    e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_title" === t.type
                        }))))
                    }));
                    var n = o[0], r = "";
                    if (n) if (n.data.activity_name) {
                        if (n.data.have_view_details) {
                            var c = n.data.package_details, l = c && c.sale_attributes, d = c && c.other_info;
                            l && Array.isArray(l) && l.length && (!d || d && Array.isArray(d.general_other_infos) && Array.isArray(d.individual_other_infos)) || (r = "data package details is invalid")
                        }
                    } else r = "data necessary param not exist";
                    return {
                        success: !r,
                        level: "E",
                        action: "check component voucherTitle data",
                        message: r,
                        nextAction: "checkVoucherGroupData"
                    }
                }, checkVoucherGroupData: function (t) {
                    var e = t.containers, o = [];
                    e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "group" === t.type
                        }))))
                    }));
                    var n = "";
                    return o.length && (o.some((function (t) {
                        return t.data.num_each_row < 1
                    })) ? n = "data num_each_row < 1" : o.some((function (t) {
                        return !t.data.components.length || t.data.components.some((function (t) {
                            return !w.includes(t.type)
                        }))
                    })) && (n = "data components is invalid")), {
                        success: !n,
                        level: "E",
                        action: "check component voucherGroup data",
                        message: n,
                        nextAction: "checkVoucherTitleTextData"
                    }
                }, checkVoucherTitleTextData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "title_text" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return e = (component = t).data.content_list, !((title = component.data.title) || !title && e && Array.isArray(e) && e.length && e.every((function (t) {
                                return t.content
                            })));
                            var component, e, title
                        })),
                        level: "E",
                        action: "check component voucherTitleText data",
                        message: "data content_list is invalid",
                        nextAction: "checkVoucherTimeOneData"
                    }
                }, checkVoucherTimeOneData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "time_1" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return title = (component = t).data.title, e = component.data.date_time_list, o = ["day", "range", "time_range"], !(title && e && Array.isArray(e) && e.length && e.every((function (t) {
                                return o.includes(t.type) && ("day" === t.type && t.start_date || "range" === t.type && t.start_date && t.end_date || "time_range" === t.type && t.start_date && t.start_time && t.end_time)
                            })));
                            var component, title, e, o
                        })),
                        level: "E",
                        action: "check component voucherTimeOne data",
                        message: "data is invalid",
                        nextAction: "checkVoucherTimeTwoData"
                    }
                }, checkVoucherTimeTwoData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "time_2" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return title = (component = t).data.title, e = ["title", "date", "start_time", "end_time"], o = component.data.start_date_time, n = component.data.end_date_time, !(title && o && Object.keys(o).every((function (t) {
                                return e.includes(t)
                            })) && n && Object.keys(n).every((function (t) {
                                return e.includes(t)
                            })));
                            var component, title, e, o, n
                        })),
                        level: "E",
                        action: "check component voucherTimeTwo data",
                        message: "data is invalid",
                        nextAction: "checkVoucherLocationOneData"
                    }
                }, checkVoucherLocationOneData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "location_1" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return title = (component = t).data.title, e = component.data.location, !(title && e);
                            var component, title, e
                        })),
                        level: "E",
                        action: "check component voucherLocationOne data",
                        message: "data is invalid",
                        nextAction: "checkVoucherLocationTwoData"
                    }
                }, checkVoucherLocationTwoData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "location_2" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !((e = t.data.locations) && Array.isArray(e) && e.length && e.every((function (t) {
                                return t.title && t.info_list && Array.isArray(t.info_list) && t.info_list.length && t.info_list.every((function (t) {
                                    return t.title && t.content
                                }))
                            })));
                            var e
                        })),
                        level: "E",
                        action: "check component voucherLocationTwo data",
                        message: "data is invalid",
                        nextAction: "checkVoucherItineraryOneData"
                    }
                }, checkVoucherItineraryOneData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "itinerary_1" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !((e = t.data.itineraries) && Array.isArray(e) && e.length && e.every((function (t) {
                                return t.from_station && t.to_station && t.departure_date_time && t.arrival_date_time && t.train_number && t.seat_class && t.duration_minutes && t.fare_info && Array.isArray(t.fare_info) && !!t.fare_info.length && t.fare_info.every((function (t) {
                                    return t.from_station && t.to_station && t.departure_date_time && t.arrival_date_time && t.train_number && t.duration_minutes && t.train_logo
                                }))
                            })));
                            var e
                        })),
                        level: "E",
                        action: "check component voucherItineraryOne data",
                        message: "data is invalid",
                        nextAction: "checkVoucherItineraryTwoData"
                    }
                }, checkVoucherItineraryTwoData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "itinerary_2" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data;
                                return t.from_station && t.to_station && t.departure_date_time && t.arrival_date_time && t.train_number && t.seat_class && t.duration_minutes && t.timetable_args && t.timetable_args.from_station_code && t.timetable_args.to_station_code && t.timetable_args.train_code && t.timetable_args.train_no && t.timetable_args.train_date
                            }(t)
                        })),
                        level: "E",
                        action: "check component voucherItineraryTwo data",
                        message: "data is invalid",
                        nextAction: "checkVoucherExpItineraryData"
                    }
                }, checkVoucherExpItineraryData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "exp_itinerary" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !((e = t.data.itinerary) && Array.isArray(e.days) && e.days.length && e.days.every((function (t) {
                                return t.day_name && (t.groups || []).every((function (t) {
                                    return t.group_id && t.left_icon && t.time && t.group_name
                                }))
                            })));
                            var e
                        })),
                        level: "E",
                        action: "check component voucherExpItinerary data",
                        message: "data is invalid",
                        nextAction: "checkVoucherPassengerData"
                    }
                }, checkVoucherPassengerData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "passenger" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data;
                                return t.title && t.passengers && Array.isArray(t.passengers) && !!t.passengers.length && t.passengers.every((function (t) {
                                    return t.name && t.seat && t.type && t.info_list && Array.isArray(t.info_list) && t.info_list.length
                                }))
                            }(t)
                        })),
                        level: "E",
                        action: "check component voucherPassenger data",
                        message: "data is invalid",
                        nextAction: "checkVoucherServiceStaffData"
                    }
                }, checkVoucherServiceStaffData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "service_staff" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data;
                                return t.title && t.people && Array.isArray(t.people) && !!t.people.length && t.people.every((function (t) {
                                    return t.name && t.info_list && Array.isArray(t.info_list) && t.info_list.length
                                }))
                            }(t)
                        })),
                        level: "E",
                        action: "check component VoucherServiceStaff data",
                        message: "data is invalid",
                        nextAction: "checkVoucherSupplierInfoData"
                    }
                }, checkVoucherSupplierInfoData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "supplier_info" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data;
                                return t.title && t.image_url && x.test(t.image_url) && t.content
                            }(t)
                        })),
                        level: "E",
                        action: "check component VoucherSupplierInfo data",
                        message: "data is invalid",
                        nextAction: "checkVoucherCodeData"
                    }
                }, checkVoucherCodeData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_redeem_1" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data, e = t.main_code, o = t.voucher_code_infos;
                                return [1, 2].includes(t.type) && e && e.voucher_number && e.code_type && e.code_image_url && x.test(e.code_image_url) && o && Array.isArray(o) && (!!o.length && o.every((function (t) {
                                    return t.voucher_number && t.code_type && t.code_image_url && x.test(t.code_image_url)
                                })) || 0 === o.length) || 3 === t.type && o && Array.isArray(o) && !!o.length && o.every((function (t) {
                                    return t.voucher_number && t.code_type && t.code_image_url && x.test(t.code_image_url)
                                }))
                            }(t)
                        })),
                        level: "F",
                        action: "check component VoucherCode data",
                        message: "data is invalid",
                        nextAction: "checkVoucherTicketCodeData"
                    }
                }, checkVoucherTicketCodeData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "voucher_redeem_2" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data, e = t.groups;
                                return t.title && t.redeem_desc && e && Array.isArray(e) && e.length > 0 && e.every((function (t) {
                                    return t.voucher_code_infos && Array.isArray(t.voucher_code_infos) && t.voucher_code_infos.length && t.voucher_code_infos.every((function (t) {
                                        return t.voucher_number && Array.isArray(t.voucher_number) && t.voucher_number.length > 0
                                    }))
                                }))
                            }(t)
                        })),
                        level: "F",
                        action: "check component VoucherTicketCode data",
                        message: "data is invalid",
                        nextAction: "checkVoucherContactUsData"
                    }
                }, checkVoucherContactUsData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "contact_us" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return e = (component = t).data.klook, o = component.data.merchant, n = ["email", "phone", "other"], r = e || o, c = !0, l = !0, e && (c = e.title && e.ask_klook_desc && e.service_time_desc && e.contact_list && Array.isArray(e.contact_list) && e.contact_list.length && e.contact_list.every((function (t) {
                                return t.contact && Array.isArray(t.contact) && t.contact.length && t.contact.every((function (t) {
                                    return n.includes(t.type) && t.value
                                }))
                            }))), o && (l = o.contact_list && Array.isArray(o.contact_list) && o.contact_list.length && o.contact_list.every((function (t) {
                                return t.contact && Array.isArray(t.contact) && t.contact.length && t.contact.every((function (t) {
                                    return n.includes(t.type) && t.value
                                }))
                            }))), !(r && c && l);
                            var component, e, o, n, r, c, l
                        })),
                        level: "F",
                        action: "check component VoucherContactUs data",
                        message: "data is invalid: ".concat(JSON.stringify(o)),
                        nextAction: "checkVoucherMapData"
                    }
                }, checkVoucherMapData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "map" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !function (component) {
                                var t = component.data;
                                return t.map_box_image_url || t.location && t.location.longitude && t.location.latitude
                            }(t)
                        })),
                        level: "E",
                        action: "check component VoucherMap data",
                        message: "data is invalid",
                        nextAction: "checkVoucherImagesData"
                    }
                }, checkVoucherImagesData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "image" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !((e = t.data.images) && Array.isArray(e) && e.length > 0 && e.every((function (t) {
                                return t.image_url && x.test(t.image_url)
                            })));
                            var e
                        })),
                        level: "E",
                        action: "check component VoucherImages data",
                        message: "data is invalid",
                        nextAction: "checkVoucherMarkDownData"
                    }
                }, checkVoucherMarkDownData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "markdown" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !((e = t.data.render_obj) && Array.isArray(e) && e.length > 0);
                            var e
                        })),
                        level: "E",
                        action: "check component VoucherMarkDown data",
                        message: "data is invalid",
                        nextAction: "checkVoucherSpacingData"
                    }
                }, checkVoucherSpacingData: function (t) {
                    var e = t.containers, o = [];
                    return e.forEach((function (t) {
                        o.push.apply(o, Object(k.a)(t.components.filter((function (t) {
                            return "spacing" === t.type
                        }))))
                    })), {
                        success: !o.some((function (t) {
                            return !t.data.height
                        })),
                        level: "E",
                        action: "check component VoucherSpacing data",
                        message: "data is invalid",
                        nextAction: "end"
                    }
                }
            }, T = (o(62), function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }), S = "klk_c_alert", D = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "close", value: function () {
                        this.$emit("close")
                    }
                }, {
                    key: "alertClasses", get: function () {
                        var t;
                        return ["".concat(S), "".concat(S, "--").concat(this.type), "".concat(S, "--").concat(this.theme), (t = {}, Object(v.a)(t, "".concat(S, "--center"), this.center), Object(v.a)(t, "".concat(S, "--is_closable"), this.closable), Object(v.a)(t, "".concat(S, "--with_desc"), this.desc), t)]
                    }
                }, {
                    key: "messageClasses", get: function () {
                        return "".concat(S, "__message")
                    }
                }, {
                    key: "iconClasses", get: function () {
                        return "".concat(S, "__message_icon")
                    }
                }, {
                    key: "closeClasses", get: function () {
                        return "".concat(S, "__icon_close")
                    }
                }, {
                    key: "descClasses", get: function () {
                        return "".concat(S, "__desc")
                    }
                }]), e
            }(m.Vue);
        T([Object(m.Prop)({
            type: String, default: "info", validator: function (t) {
                return ["error", "info", "success", "warning"].includes(t)
            }
        })], D.prototype, "type", void 0), T([Object(m.Prop)({
            type: String, validator: function (t) {
                return ["dark", "light"].includes(t)
            }, default: "dark"
        })], D.prototype, "theme", void 0), T([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], D.prototype, "center", void 0), T([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], D.prototype, "visible", void 0), T([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], D.prototype, "closable", void 0), T([Object(m.Prop)({
            type: [Number, String],
            default: ""
        })], D.prototype, "desc", void 0), T([Object(m.Prop)({
            type: [Number, String],
            default: ""
        })], D.prototype, "message", void 0), T([Object(m.Prop)({
            type: [Number, String],
            default: ""
        })], D.prototype, "iconUrl", void 0);
        var E = D = T([m.Component], D), A = (o(799), o(23)), V = Object(A.a)(E, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.visible ? o("div", {class: t.alertClasses}, [o("div", {class: t.messageClasses}, [t.iconUrl ? o("img", {
                class: t.iconClasses,
                attrs: {src: t.iconUrl}
            }) : t._e(), t._v(" "), t._t("message", [t._v(t._s(t.message))])], 2), t._v(" "), t.closable ? o("svg-icon", {
                class: t.closeClasses,
                attrs: {name: "common#klk-icon-close"},
                nativeOn: {
                    click: function (e) {
                        return t.close(e)
                    }
                }
            }) : t._e(), t._v(" "), t.desc ? o("div", {class: t.descClasses}, [t._t("desc", [t._v(t._s(t.desc))])], 2) : t._e()], 1) : t._e()
        }), [], !1, null, null, null).exports, I = o(413), $ = o(697);

        function L(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        var M = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, N = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "handleClick", value: function () {
                    var t = +new Date, e = void 0 !== arguments ? arguments : null, o = function (o) {
                            if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                var n = +new Date - t;
                                o = __in_house.get_spm_info(o, {duration: n, args: e})
                            } catch (t) {
                                console.warn("Get spm info error", t)
                            }
                            return o
                        },
                        n = this.klook.isKlookApp ? "/experiences/voucher-new-app-only/redeem/" : "/experiences/voucher/redeem/";
                    window.location.replace(o(this.$href(`${n}?voucher_no=${this.voucherToken}&level=${this.level}&data=${encodeURIComponent(JSON.stringify(this.transformedData))}`)))
                }
            }, {
                key: "transformedData", get: function () {
                    return (this.data || []).map((function (t) {
                        var e = (t.redeem_hist || []).reduce((function (t, e) {
                            return t + (e.redeem_count || 0)
                        }), 0);
                        return function (t) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? L(Object(source), !0).forEach((function (e) {
                                    Object(v.a)(t, e, source[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : L(Object(source)).forEach((function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                                }))
                            }
                            return t
                        }({}, t, {count: (t.count || 0) - e})
                    })).filter((function (t) {
                        return t.count > 0
                    })).map((function (t) {
                        return {sku_id: t.sku_id, name: t.price_name || t.price_local_name, count: t.count}
                    }))
                }
            }, {
                key: "isVisible", get: function () {
                    return this.transformedData && this.transformedData.length > 0
                }
            }]), e
        }(m.Vue);
        M([m.State], N.prototype, "klook", void 0), M([Object(m.Prop)({
            type: Array,
            default: null
        })], N.prototype, "data", void 0), M([Object(m.Prop)({default: 0})], N.prototype, "level", void 0), M([Object(m.Prop)({default: ""})], N.prototype, "voucherToken", void 0);
        var B = N = M([m.Component], N), F = (o(820), Object(A.a)(B, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return this.isVisible ? e("div", {
                staticClass: "offline-header",
                on: {click: this.handleClick}
            }, [e("svg-icon", {
                staticClass: "offline-header-icon",
                attrs: {name: "common#icon-nav-bookings", size: "24"}
            })], 1) : this._e()
        }), [], !1, null, null, null).exports), H = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, U = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), e
        }(m.Vue);
        H([m.State], U.prototype, "klook", void 0), H([Object(m.Prop)({default: ""})], U.prototype, "translationTips", void 0);
        var z = U = H([m.Component], U), Y = (o(821), Object(A.a)(z, (function () {
                var t = this.$createElement;
                return (this._self._c || t)("div", {class: ["translation-text", this.klook.platform]}, [this._v("\n  " + this._s(this.translationTips) + "\n")])
            }), [], !1, null, "fa28b91e", null).exports), Q = o(500), G = o(698), K = o(499), W = o(695),
            J = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, X = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), e
            }(m.Vue);
        J([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], X.prototype, "bgColor", void 0), J([Object(m.Prop)({
            type: Object, default: function () {
                return {}
            }
        })], X.prototype, "diyStyle", void 0), J([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], X.prototype, "showSubCodeFirst", void 0), J([Object(m.Prop)({
            type: Number,
            default: 1
        })], X.prototype, "type", void 0), J([Object(m.Prop)({
            type: Object, default: function () {
                return null
            }
        })], X.prototype, "mainCode", void 0), J([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], X.prototype, "codes", void 0), J([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], X.prototype, "codesForCard", void 0), J([Object(m.Prop)({
            type: String, default: function () {
                return ""
            }
        })], X.prototype, "voucherToken", void 0), J([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], X.prototype, "isShowMaskContent", void 0), J([m.State], X.prototype, "klook", void 0);
        var Z = X = J([Object(m.Component)({
            components: {
                desktop: function () {
                    return o.e(80).then(o.bind(null, 1123))
                }, mobile: function () {
                    return o.e(81).then(o.bind(null, 1124))
                }
            }
        })], X), tt = Object(A.a)(Z, (function () {
            var t = this, e = t.$createElement;
            return (t._self._c || e)(t.klook.platform, {
                tag: "Component",
                attrs: {
                    "bg-color": t.bgColor,
                    type: t.type,
                    "main-code": t.mainCode,
                    "diy-style": t.diyStyle,
                    "show-sub-code-first": t.showSubCodeFirst,
                    codes: t.codes,
                    "voucher-token": t.voucherToken,
                    "codes-for-card": t.codesForCard,
                    "is-show-mask-content": t.isShowMaskContent
                }
            })
        }), [], !1, null, null, null).exports, et = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, ot = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "head", value: function () {
                    var t = {bodyAttrs: {"data-spm-page": "Voucher?oid=PageStatus_".concat(this.currentStatusForSpm)}};
                    return t.meta = [this.$robots("noindex,nofollow")], t.link = [{
                        rel: "icon",
                        type: "image/png",
                        href: "https://res.klook.com/image/upload/v1640249902/r0cllybxt5t5eh6yhnu7.png"
                    }], t.title = this.$t("global.seo.title"), t
                }
            }, {
                key: "currentStatusForSpm", get: function () {
                    var t, e, data = "BeforeActivation";
                    return "activated" === (null === (t = this.data) || void 0 === t ? void 0 : t.status) ? data = "AfterActivation" : "expired" === (null === (e = this.data) || void 0 === e ? void 0 : e.status) && (data = "VoucherExpired"), data
                }
            }]), e
        }(m.Vue);
        et([Object(m.Prop)({
            type: Object, default: function () {
                return {}
            }
        })], ot.prototype, "data", void 0), et([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], ot.prototype, "codes", void 0), et([Object(m.Prop)({
            type: String, default: function () {
                return ""
            }
        })], ot.prototype, "voucherToken", void 0), et([m.State], ot.prototype, "klook", void 0);
        var nt = ot = et([Object(m.Component)({
            components: {
                desktop: function () {
                    return o.e(80).then(o.bind(null, 1129))
                }, mobile: function () {
                    return o.e(81).then(o.bind(null, 1130))
                }
            }
        })], ot), at = Object(A.a)(nt, (function () {
            var t = this.$createElement;
            return (this._self._c || t)(this.klook.platform, {
                tag: "Component",
                attrs: {status: this.status, data: this.data, "voucher-token": this.voucherToken}
            })
        }), [], !1, null, null, null).exports, it = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, ct = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).platform = "mobile", t
            }

            return Object(h.a)(e, t), e
        }(m.Vue);
        it([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], ct.prototype, "bgColor", void 0), it([Object(m.Prop)({
            type: String,
            default: ""
        })], ct.prototype, "dataApi", void 0), it([Object(m.Prop)({
            type: Object, default: function () {
                return {}
            }
        })], ct.prototype, "diyStyle", void 0), it([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], ct.prototype, "showSubCodeFirst", void 0), it([Object(m.Prop)({
            type: Number,
            default: 1
        })], ct.prototype, "type", void 0), it([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], ct.prototype, "codes", void 0), it([m.State], ct.prototype, "klook", void 0);
        var st = ct = it([Object(m.Component)({
            components: {
                mobile: function () {
                    return o.e(81).then(o.bind(null, 1121))
                }
            }
        })], ct), lt = Object(A.a)(st, (function () {
            var t = this.$createElement;
            return (this._self._c || t)(this.platform, {
                tag: "Component",
                attrs: {
                    "bg-color": this.bgColor,
                    "data-api": this.dataApi,
                    type: this.type,
                    "diy-style": this.diyStyle,
                    "show-sub-code-first": this.showSubCodeFirst,
                    codes: this.codes
                }
            })
        }), [], !1, null, null, null).exports, ut = o(399), pt = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, ft = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(m.Vue);
        pt([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], ft.prototype, "bgColor", void 0), pt([Object(m.Prop)({
            type: String,
            default: ""
        })], ft.prototype, "title", void 0), pt([Object(m.Prop)({
            type: String,
            default: ""
        })], ft.prototype, "titleEn", void 0), pt([Object(m.Prop)({
            type: String,
            default: ""
        })], ft.prototype, "desc", void 0), pt([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], ft.prototype, "codeGroups", void 0);
        var ht = ft = pt([Object(m.Component)({components: {VoucherSpacing: ut.a}})], ft),
            vt = (o(822), Object(A.a)(ht, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_ticket_code",
                    style: t.styleObj,
                    attrs: {"data-anchor": "VoucherCode"}
                }, [o("voucher-spacing", {attrs: {height: 5}}), t._v(" "), o("p", {staticClass: "voucher_ticket_code__title"}, [t._v(t._s(t.title))]), t._v(" "), o("p", {staticClass: "voucher_ticket_code__desc"}, [t._v(t._s(t.desc))]), t._v(" "), t._l(t.codeGroups, (function (e, n) {
                    return o("div", {
                        key: n,
                        staticClass: "voucher_ticket_code__main"
                    }, [e.header ? o("p", {staticClass: "voucher_ticket_code__main_header"}, [t._v(t._s(e.header))]) : t._e(), t._v(" "), t._l(e.voucher_code_infos, (function (e, n) {
                        return o("div", {
                            key: n,
                            staticClass: "voucher_ticket_code__item"
                        }, [e.desc ? o("p", {staticClass: "voucher_ticket_code__item_desc"}, [t._v(t._s(e.desc))]) : t._e(), t._v(" "), t._l(e.voucher_number, (function (e) {
                            return o("p", {
                                key: e,
                                staticClass: "voucher_ticket_code__item_number"
                            }, [t._v("\n        " + t._s(e) + "\n      ")])
                        }))], 2)
                    }))], 2)
                }))], 2)
            }), [], !1, null, null, null).exports), _t = o(562), mt = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, yt = function (t) {
                function e() {
                    var t;
                    return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).visible = !t.collapsed, t
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "togglePanelMain", value: function () {
                        "mobile" === this.platform && this.collapsable && (this.visible = !this.visible)
                    }
                }, {
                    key: "handleOpen", value: function () {
                        this.visible = !0
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }, {
                    key: "arrowIconClasses", get: function () {
                        return ["voucher_panel_header__icon", {"voucher_panel_header__icon--collapsed": !this.visible}]
                    }
                }]), e
            }(m.Vue);
        mt([Object(m.State)((function (t) {
            return t.klook.platform
        }))], yt.prototype, "platform", void 0), mt([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], yt.prototype, "bgColor", void 0), mt([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], yt.prototype, "collapsable", void 0), mt([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], yt.prototype, "collapsed", void 0), mt([Object(m.Prop)({
            type: String,
            default: ""
        })], yt.prototype, "title", void 0), mt([Object(m.Prop)({
            type: String,
            default: ""
        })], yt.prototype, "titleEn", void 0);
        var bt = yt = mt([Object(m.Component)({components: {CollapseTransition: _t.a}})], yt),
            gt = (o(823), Object(A.a)(bt, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_panel",
                    class: {"voucher_panel--collapsed": !t.visible},
                    style: t.styleObj
                }, [o("div", {
                    staticClass: "voucher_panel_header",
                    on: {click: t.togglePanelMain}
                }, [o("div", {staticClass: "voucher_panel_header__titles"}, [o("p", {staticClass: "voucher_panel_header__title"}, [t._v(t._s(t.title))]), t._v(" "), t.title !== t.titleEn ? o("p", {staticClass: "voucher_panel_header__title_en"}, [t._v(t._s(t.titleEn))]) : t._e()]), t._v(" "), t.collapsable && "mobile" === t.platform ? o("svg-icon", {
                    class: t.arrowIconClasses,
                    attrs: {size: "24", name: "common#klk-icon-arrow-up"}
                }) : t._e()], 1), t._v(" "), o("collapse-transition", [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.visible,
                        expression: "visible"
                    }], staticClass: "voucher_panel_header__main"
                }, [o("div", {staticClass: "voucher_panel_header__main_border"}), t._v(" "), t._t("content")], 2)])], 1)
            }), [], !1, null, null, null).exports), Ot = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, kt = function (t) {
                function e() {
                    var t;
                    return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).isMobile = "mobile" === t.$store.state.klook.platform, t
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "getHref", value: function (t, e) {
                        var o = {email: "mailto:", phone: "tel:"}, n = "javascript:;";
                        return (this.isMobile && o[t] || "email" === t) && (n = "".concat(o[t]).concat(e)), n
                    }
                }, {
                    key: "handleChatClick", value: function (t) {
                        var e = +new Date, o = void 0 !== arguments ? arguments : null, n = function (t) {
                            if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                var n = +new Date - e;
                                t = __in_house.get_spm_info(t, {duration: n, args: o})
                            } catch (t) {
                                console.warn("Get spm info error", t)
                            }
                            return t
                        };
                        window.location.href = n(t)
                    }
                }, {
                    key: "handleClick", value: function () {
                        var t = +new Date, e = void 0 !== arguments ? arguments : null, o = function (o) {
                            if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                var n = +new Date - t;
                                o = __in_house.get_spm_info(o, {duration: n, args: e})
                            } catch (t) {
                                console.warn("Get spm info error", t)
                            }
                            return o
                        }, n = this.$href("/ask_klook/?ref_source=Voucher");
                        this.isMobile && (n = this.$href("/ask_klook/query?booking_reference_id=" + this.askKlookArgs.bookingReferenceNo + "&order=" + this.askKlookArgs.orderNo + "&type=check_booking_status&ref_source=Voucher")), window.location.href = o(n)
                    }
                }, {
                    key: "onlyMerchant", get: function () {
                        var t = this.isPrint, e = this.klook, o = e.ask_klook_btn, n = e.service_time_desc,
                            r = e.contact_list, c = e.chat_btn, l = e.ask_klook_desc;
                        return !!(this.klook && (!!r || !t)) && (!!o || (!(!r || !r.length) || (!(t || !(o || c || l)) || !!n)))
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(m.Vue);
        Ot([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], kt.prototype, "bgColor", void 0), Ot([Object(m.Prop)({
            type: Object, default: function () {
                return {title: "", ask_klook_desc: "", ask_klook_btn: "", contact_list: [], service_time_desc: ""}
            }
        })], kt.prototype, "klook", void 0), Ot([Object(m.Prop)({
            type: Object, default: function () {
                return {title: "", contact_list: []}
            }
        })], kt.prototype, "merchant", void 0), Ot([Object(m.Prop)({
            type: Object, default: function () {
                return {orderNo: "", bookingReferenceNo: ""}
            }
        })], kt.prototype, "askKlookArgs", void 0), Ot([Object(m.Prop)({
            type: Boolean, default: function () {
                return !1
            }
        })], kt.prototype, "isPrint", void 0);
        var jt = kt = Ot([Object(m.Component)({components: {VoucherSpacing: ut.a}})], kt),
            Ct = (o(824), Object(A.a)(jt, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_contact_us",
                    style: t.styleObj
                }, [t.onlyMerchant ? o("voucher-spacing", {attrs: {height: 4}}) : t._e(), t._v(" "), !t.klook || !t.klook.contact_list && t.isPrint ? t._e() : o("div", {staticClass: "voucher_contact_us__klook"}, [t.klook.ask_klook_btn ? o("p", {staticClass: "voucher_contact_us__brand_name"}, [t._v(t._s(t.klook.title))]) : t._e(), t._v(" "), t.isPrint ? t._e() : [o("p", {staticClass: "voucher_contact_us__brand_tip"}, [t._v(t._s(t.klook.ask_klook_desc))]), t._v(" "), t.klook.ask_klook_btn ? o("klk-button", {
                    staticClass: "voucher_contact_us__ask_klook",
                    attrs: {type: "secondary", size: "small", block: t.isMobile},
                    on: {click: t.handleClick}
                }, [o("div", {staticClass: "voucher_contact_us__btn_wrapper"}, [o("svg-icon", {
                    attrs: {
                        size: "24",
                        name: "common#klk-icon-askklook"
                    }
                }), t._v("\n          " + t._s(t.klook.ask_klook_btn) + "\n        ")], 1)]) : t._e(), t._v(" "), t.klook.chat_btn ? o("klk-button", {
                    staticClass: "voucher_contact_us__ask_klook",
                    attrs: {type: "secondary", size: "small", block: t.isMobile},
                    on: {
                        click: function (e) {
                            return t.handleChatClick(t.klook.chat_btn_url)
                        }
                    }
                }, [o("div", {staticClass: "voucher_contact_us__btn_wrapper"}, [o("svg-icon", {
                    attrs: {
                        size: "24",
                        name: "common#customer-service"
                    }
                }), t._v("\n          " + t._s(t.klook.chat_btn) + "\n        ")], 1)]) : t._e()], t._v(" "), o("div", {staticClass: "voucher_contact_us__contact_methods"}, t._l(t.klook.contact_list || [], (function (e, n) {
                    return o("div", {
                        key: n,
                        staticClass: "voucher_contact_us__contact_methods_list"
                    }, [e.title ? o("p", {staticClass: "voucher_contact_us__contact_methods_list_title"}, [t._v(" " + t._s(e.title))]) : t._e(), t._v(" "), t._l(e.contact || [], (function (e, n) {
                        return o("p", {
                            key: n,
                            staticClass: "voucher_contact_us__contact_method_wrapper"
                        }, [o("a", {
                            staticClass: "voucher_contact_us__contact_method",
                            attrs: {href: t.getHref(e.type, e.value)}
                        }, [t._v(t._s(e.value) + " "), e.desc ? [t._v("（" + t._s(e.desc) + "）")] : t._e()], 2)])
                    }))], 2)
                })), 0), t._v(" "), o("p", {staticClass: "voucher_contact_us__extra_tip"}, [t._v(t._s(t.klook.service_time_desc))])], 2), t._v(" "), t.merchant ? o("div", {class: {voucher_contact_us__merchant: t.onlyMerchant}}, [o("p", {staticClass: "voucher_contact_us__brand_name"}, [t._v(t._s(t.merchant.title))]), t._v(" "), o("div", {staticClass: "voucher_contact_us__contact_methods"}, t._l(t.merchant.contact_list || [], (function (e, n) {
                    return o("div", {
                        key: n,
                        staticClass: "voucher_contact_us__contact_methods_list"
                    }, [e.title ? o("p", {staticClass: "voucher_contact_us__contact_methods_list_title"}, [t._v("\n          " + t._s(e.title) + "\n        ")]) : t._e(), t._v(" "), t._l(e.contact || [], (function (e, n) {
                        return o("p", {
                            key: n,
                            staticClass: "voucher_contact_us__contact_method_wrapper"
                        }, [o("a", {
                            staticClass: "voucher_contact_us__contact_method",
                            attrs: {href: t.getHref(e.type, e.value)}
                        }, [t._v(t._s(e.value))])])
                    }))], 2)
                })), 0)]) : t._e()], 1)
            }), [], !1, null, null, null).exports), wt = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, Pt = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(m.Vue);
        wt([Object(m.Prop)({
            type: String,
            default: "transparent"
        })], Pt.prototype, "bgColor", void 0), wt([Object(m.Prop)({
            type: String,
            default: ""
        })], Pt.prototype, "tnc", void 0);
        var xt = Pt = wt([Object(m.Component)({})], Pt), Rt = (o(825), Object(A.a)(xt, (function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "voucher_tnc markdown-content",
                style: this.styleObj,
                domProps: {innerHTML: this._s(this.tnc)}
            })
        }), [], !1, null, null, null).exports), Tt = o(532), St = o(533), Dt = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Et = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "styleObj", get: function () {
                    return {
                        "background-color": this.bgColor,
                        color: this.fontColor,
                        "border-radius": this.borderRadius ? "4px" : "none",
                        "text-align": this.textAlign
                    }
                }
            }]), e
        }(m.Vue);
        Dt([Object(m.Prop)({
            type: String,
            default: ""
        })], Et.prototype, "title", void 0), Dt([Object(m.Prop)({
            type: String,
            default: ""
        })], Et.prototype, "bgColor", void 0), Dt([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], Et.prototype, "content", void 0), Dt([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Et.prototype, "fontColor", void 0), Dt([Object(m.Prop)({
            type: String,
            default: "center"
        })], Et.prototype, "textAlign", void 0), Dt([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], Et.prototype, "borderRadius", void 0);
        var At = Et = Dt([m.Component], Et), Vt = (o(826), Object(A.a)(At, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {staticClass: "voucher-highlight-hint"}, [o("div", {
                staticClass: "highlight-hint-box",
                style: t.styleObj
            }, [o("h6", [t._v(t._s(t.title))]), t._v(" "), t.content && t.content.length > 0 ? t._l(t.content, (function (e, n) {
                return o("p", {key: n}, [t._v(t._s(e))])
            })) : t._e()], 2)])
        }), [], !1, null, null, null).exports), It = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, $t = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), e
        }(m.Vue);
        It([Object(m.Prop)({
            type: String,
            default: ""
        })], $t.prototype, "imageUrl", void 0), It([Object(m.Prop)({
            type: String,
            default: "left"
        })], $t.prototype, "imageAlign", void 0);
        var Lt = $t = It([m.Component], $t), Mt = (o(827), Object(A.a)(Lt, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "voucher-image-show",
                class: this.imageAlign
            }, [e("img", {attrs: {src: this.imageUrl}})])
        }), [], !1, null, null, null).exports), qt = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Nt = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(m.Vue);
        qt([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], Nt.prototype, "locationList", void 0), qt([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Nt.prototype, "bgColor", void 0);
        var Bt = Nt = qt([Object(m.Component)({components: {Markdown: I.a}})], Nt),
            Ft = (o(828), Object(A.a)(Bt, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher-location-two",
                    style: t.styleObj
                }, t._l(t.locationList, (function (e, n) {
                    return o("div", {
                        key: e.title + n,
                        staticClass: "voucher-location-two_location"
                    }, [o("h5", [t._v(t._s(e.title))]), t._v(" "), o("div", {staticClass: "voucher-location-two_content"}, t._l(e.infoList, (function (e, n) {
                        return o("div", {
                            key: e.title + n,
                            staticClass: "voucher-location-two_content--item"
                        }, [o("h6", [t._v(t._s(e.title))]), t._v(" "), o("Markdown", {attrs: {content: e.content}})], 1)
                    })), 0)])
                })), 0)
            }), [], !1, null, null, null).exports), Ht = o(501), Ut = o(405), zt = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, Yt = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "formatDate", value: function (t) {
                        var e = this.klook.language;
                        return Object(Ut.b)(t, this.$t.bind(this), e, 1)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(m.Vue);
        zt([Object(m.Prop)({
            type: String,
            default: ""
        })], Yt.prototype, "title", void 0), zt([Object(m.Prop)({
            type: Object, default: function () {
            }
        })], Yt.prototype, "startDateTime", void 0), zt([Object(m.Prop)({
            type: Object, default: function () {
            }
        })], Yt.prototype, "endDateTime", void 0), zt([Object(m.Prop)({
            type: String,
            default: ""
        })], Yt.prototype, "duration", void 0), zt([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Yt.prototype, "bgColor", void 0), zt([m.State], Yt.prototype, "klook", void 0);
        var Qt = Yt = zt([m.Component], Yt), Gt = (o(829), Object(A.a)(Qt, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher-time-two",
                style: t.styleObj
            }, [o("h5", [t._v(t._s(t.title))]), t._v(" "), o("div", {staticClass: "voucher-time-two_content"}, [o("div", {staticClass: "voucher-time-two_content--left"}, [o("p", {staticClass: "voucher-time-two_content--desc voucher-time-two_content--title"}, [t._v("\n        " + t._s(t.startDateTime.title) + "\n      ")]), t._v(" "), o("p", {staticClass: "voucher-time-two_content--strong"}, [t._v(t._s(t.formatDate(t.startDateTime.date)))]), t._v(" "), t.startDateTime.startTime && t.startDateTime.endTime ? o("p", {staticClass: "voucher-time-two_content--desc"}, [t._v("\n        " + t._s(t.startDateTime.startTime) + " - " + t._s(t.startDateTime.endTime) + "\n      ")]) : t._e()]), t._v(" "), o("div", {staticClass: "voucher-time-two_content--duration"}, [t.duration ? o("p", {staticClass: "voucher-time-two_content--duration-time"}, [t._v(t._s(t.duration))]) : t._e(), t._v(" "), o("div", {staticClass: "voucher-time-two_content--line"})]), t._v(" "), o("div", {staticClass: "voucher-time-two_content--right"}, [o("p", {staticClass: "voucher-time-two_content--desc voucher-time-two_content--title"}, [t._v(t._s(t.endDateTime.title))]), t._v(" "), o("p", {staticClass: "voucher-time-two_content--strong"}, [t._v(t._s(t.formatDate(t.endDateTime.date)))]), t._v(" "), t.endDateTime.startTime && t.endDateTime.endTime ? o("p", {staticClass: "voucher-time-two_content--desc"}, [t._v("\n        " + t._s(t.endDateTime.startTime) + "-" + t._s(t.endDateTime.endTime) + "\n      ")]) : t._e()])])])
        }), [], !1, null, null, null).exports), Kt = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Wt = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "handelClick", value: function () {
                    var t = document.querySelectorAll("div[data-anchor='VoucherCode']");
                    this.$nextTick((function () {
                        t && t[0].scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
                    }))
                }
            }]), e
        }(m.Vue), Jt = Wt = Kt([m.Component], Wt), Xt = (o(830), Object(A.a)(Jt, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                ref: "menu",
                staticClass: "qr-code-nav",
                on: {click: this.handelClick}
            }, [e("SvgIcon", {attrs: {name: "mobile-common#icon-qrcode", width: "24", height: "24"}})], 1)
        }), [], !1, null, null, null).exports), Zt = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, te = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).showAction = t.value, t.fixScrollY = 0, t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "close", value: function () {
                    this.showAction = !1
                }
            }, {
                key: "valueChange", value: function (t) {
                    this.showAction = t
                }
            }, {
                key: "showActionChange", value: function (t) {
                    this.$emit("input", t), !0 === t ? (this.fixScrollY = window.pageYOffset, document.body.style.position = "fixed", document.body.style.top = -this.fixScrollY + "px") : (document.body.style.position = "static", document.body.scrollTop = this.fixScrollY, document.documentElement.scrollTop = this.fixScrollY)
                }
            }]), e
        }(m.Vue);
        Zt([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], te.prototype, "value", void 0), Zt([Object(m.Watch)("value")], te.prototype, "valueChange", null), Zt([Object(m.Watch)("showAction")], te.prototype, "showActionChange", null);
        var ee = te = Zt([m.Component], te), oe = (o(831), Object(A.a)(ee, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("transition", {attrs: {name: "fade"}}, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.showAction,
                    expression: "showAction"
                }], staticClass: "action-sheet_wrapper"
            }, [e("div", {staticClass: "action-sheet_content"}, [this._t("default")], 2)])]), this._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.showAction,
                    expression: "showAction"
                }], staticClass: "action-sheet_mask", on: {
                    touchmove: function (t) {
                        t.preventDefault()
                    }, click: this.close
                }
            })], 1)
        }), [], !1, null, null, null).exports), ne = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, re = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).menuFlag = !1, t.activeName = "", t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "showMenu", value: function () {
                    this.menuFlag = !0
                }
            }, {
                key: "menuClick", value: function (menu) {
                    var t = this;
                    this.activeName = menu.titleEn, this.menuFlag = !1, this.$emit("menuChange", menu.titleEn), setTimeout((function () {
                        t.activeName = ""
                    }), 100)
                }
            }]), e
        }(m.Vue);
        ne([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], re.prototype, "menuList", void 0);
        var ae = re = ne([Object(m.Component)({components: {ActionSheet: oe}})], re),
            ie = (o(832), Object(A.a)(ae, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {staticClass: "voucher-menu-nav"}, [o("div", {
                    staticClass: "voucher-menu-nav_icon",
                    on: {click: t.showMenu}
                }, [o("SvgIcon", {attrs: {name: "mobile-common#icon-menu-orange"}})], 1), t._v(" "), o("ActionSheet", {
                    model: {
                        value: t.menuFlag,
                        callback: function (e) {
                            t.menuFlag = e
                        },
                        expression: "menuFlag"
                    }
                }, [o("div", {staticClass: "voucher-menu-nav_menuWrapper"}, [o("ul", [o("li", t._l(t.menuList, (function (menu, e) {
                    return o("p", {
                        key: menu.titleEn + e,
                        staticClass: "voucher-menu-nav_item",
                        class: {active: menu.titleEn === t.activeName},
                        on: {
                            click: function (e) {
                                return t.menuClick(menu)
                            }
                        }
                    }, [t._v("\n            " + t._s(menu.title) + "\n          ")])
                })), 0)])])])], 1)
            }), [], !1, null, null, null).exports), ce = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, se = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), e
            }(m.Vue);
        ce([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], se.prototype, "bgColor", void 0), ce([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], se.prototype, "images", void 0), ce([m.State], se.prototype, "klook", void 0);
        var le = se = ce([Object(m.Component)({
            components: {
                desktop: function () {
                    return o.e(82).then(o.bind(null, 1133))
                }, mobile: function () {
                    return o.e(83).then(o.bind(null, 1134))
                }
            }
        })], se), ue = Object(A.a)(le, (function () {
            var t = this.$createElement;
            return (this._self._c || t)(this.klook.platform, {
                tag: "Component",
                attrs: {"bg-color": this.bgColor, images: this.images}
            })
        }), [], !1, null, null, null).exports, pe = o(699), de = o(700), fe = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, he = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), e
        }(m.Vue);
        fe([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], he.prototype, "itineraries", void 0), fe([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], he.prototype, "bgColor", void 0), fe([m.State], he.prototype, "klook", void 0);
        var ve = he = fe([Object(m.Component)({
                components: {
                    desktop: function () {
                        return o.e(89).then(o.bind(null, 1137))
                    }, mobile: function () {
                        return o.e(90).then(o.bind(null, 1138))
                    }
                }
            })], he), _e = Object(A.a)(ve, (function () {
                var t = this.$createElement;
                return (this._self._c || t)(this.klook.platform, {
                    tag: "Component",
                    attrs: {itineraries: this.itineraries, "bg-color": this.bgColor}
                })
            }), [], !1, null, null, null).exports, me = o(393), ye = o.n(me), be = o(703), ge = o(47),
            Oe = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, ke = function (t) {
                function e() {
                    var t;
                    return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).stations = [], t.showBox = !1, t.loading = !1, t.hasResult = !1, t.isFirst = !0, t
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "getDurationDay", value: function (t, e) {
                        var o = Math.floor(ye()(e, "YYYY-MM-DD HH:mm").diff(ye()(t, "YYYY-MM-DD HH:mm")) / 864e5);
                        return o > 0 ? "+".concat(o) : ""
                    }
                }, {
                    key: "formatMinutes", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (t) {
                            var e = Math.floor(t / 60), o = t - 60 * e;
                            return e > 0 ? this.$t("er.duration_h", [e, o]) : this.$t("er.duration_m", [o])
                        }
                    }
                }, {
                    key: "formatDate", value: function (t) {
                        var e = this.klook.language;
                        return Object(Ut.b)(t, this.$t.bind(this), e, 1)
                    }
                }, {
                    key: "handelEnter", value: function () {
                        var t = this;
                        if (this.showBox = !0, !this.isFirst) return this.hasResult = !0, !1;
                        this.loading = !0, this.$axios.$get(ge.a.getChinaRail, {
                            params: {
                                from_station_code: this.timetableArgs.fromStationCode,
                                to_station_code: this.timetableArgs.toStationCode,
                                train_code: this.timetableArgs.trainCode,
                                train_no: this.timetableArgs.trainNo,
                                train_date: this.timetableArgs.trainDate,
                                _: (new Date).getTime()
                            }
                        }).then((function (e) {
                            var o, n;
                            e.success && (null === (n = null === (o = e.result) || void 0 === o ? void 0 : o.station) || void 0 === n ? void 0 : n.length) > 0 && (t.stations = e.result.station.map((function (t) {
                                return {
                                    stationNo: t.station_no,
                                    stationName: t.station_name,
                                    arriveTime: t.arrive_time,
                                    startTime: t.start_time,
                                    stopoverTime: t.stopover_time,
                                    type: t.type
                                }
                            })), t.isFirst = !1, t.loading = !1, t.hasResult = !0)
                        }))
                    }
                }, {
                    key: "handelLeave", value: function () {
                        this.showBox = !1
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }, {
                    key: "isFirstCss", get: function () {
                        return (this.stations || []).some((function (t, e) {
                            return 0 === e && "1" === t.type
                        }))
                    }
                }]), e
            }(m.Vue);
        Oe([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], ke.prototype, "bgColor", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "fromStation", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "toStation", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "departureDateTime", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "arrivalDateTime", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "trainNumber", void 0), Oe([Object(m.Prop)({
            type: String,
            default: ""
        })], ke.prototype, "seatClass", void 0), Oe([Object(m.Prop)({
            type: Number,
            default: ""
        })], ke.prototype, "durationMinutes", void 0), Oe([Object(m.Prop)({
            type: Object, default: function () {
            }
        })], ke.prototype, "timetableArgs", void 0), Oe([m.State], ke.prototype, "klook", void 0);
        var je = ke = Oe([Object(m.Component)({
            filters: {
                arriveTime: function (t, e) {
                    return e > 0 ? t : "----"
                }, startTime: function (t, e, o) {
                    return e < o - 1 ? t : "----"
                }, stopoverTime: function (t, e, o) {
                    return e < o - 1 && e > 0 ? t + "min" : t
                }, formatDateFive: function (t) {
                    return t.slice(-5)
                }
            }, components: {CollapseTransition: _t.a, Loading: be.a}
        })], ke), Ce = (o(833), Object(A.a)(je, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "trains-travel-two",
                style: t.styleObj
            }, [o("div", {staticClass: "trains-travel-two_wrapper"}, [o("div", {staticClass: "trains-travel-two_title"}, [o("div", {staticClass: "icon-info"}, [o("p", [t._v(t._s(t.formatDate(t.departureDateTime)))])]), t._v(" "), o("div", {staticClass: "other_info"}, [o("p", [o("SvgIcon", {
                attrs: {
                    name: "desktop-common#icon-time",
                    width: "16",
                    height: "16"
                }
            }), t._v(" "), o("span", {staticClass: "duration"}, [t._v(t._s(t.formatMinutes(t.durationMinutes)))])], 1), t._v(" "), o("p", [o("SvgIcon", {
                attrs: {
                    name: "desktop-common#seat",
                    width: "16",
                    height: "16"
                }
            }), t._v(" "), o("span", {staticClass: "duration"}, [t._v(t._s(t.seatClass))])], 1)])]), t._v(" "), o("div", {staticClass: "trains-travel-two_detail"}, [o("p", {staticClass: "trains-travel-two_No"}, [t._v(t._s(t.trainNumber))]), t._v(" "), o("div", {staticClass: "trains-travel-two_train-departure"}, [o("div", {staticClass: "travel-station"}, [o("p", {staticClass: "time"}, [t._v(t._s(t._f("formatDateFive")(t.departureDateTime)))]), t._v(" "), o("p", {staticClass: "station"}, [t._v(t._s(t.fromStation))])]), t._v(" "), o("div", {
                staticClass: "travel-timetable",
                on: {mouseenter: t.handelEnter, mouseleave: t.handelLeave}
            }, [t._v("\n          " + t._s(t.$t("cr.timetable")) + "\n          "), o("CollapseTransition", [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showBox,
                    expression: "showBox"
                }], staticClass: "travel-timetable_box"
            }, [o("div", {staticClass: "travel-timetable_content"}, [o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasResult,
                    expression: "hasResult"
                }], staticClass: "travel-timetable_content-head"
            }, [o("p", [t._v(t._s(t.$t("cr.station")))]), t._v(" "), o("p", [t._v(t._s(t.$t("cr.arr")))]), t._v(" "), o("p", [t._v(t._s(t.$t("cr.dep")))]), t._v(" "), o("p", [t._v(t._s(t.$t("cr.stop")))])]), t._v(" "), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasResult,
                    expression: "hasResult"
                }], staticClass: "travel-timetable_content-body", class: {isFirstCss: t.isFirstCss}
            }, t._l(t.stations, (function (e, n) {
                return o("div", {
                    key: n,
                    staticClass: "travel-timetable_content-item",
                    class: {start_station: "1" === e.type, arrive_station: "2" === e.type}
                }, [o("p", {staticClass: "timetable_station"}, [t._v(t._s(e.stationName))]), t._v(" "), o("p", {staticClass: "timetable_arr"}, [t._v(t._s(t._f("arriveTime")(e.arriveTime, n)))]), t._v(" "), o("p", {staticClass: "timetable_dep"}, [t._v(t._s(t._f("startTime")(e.startTime, n, t.stations.length)))]), t._v(" "), o("p", {staticClass: "timetable_stay"}, [t._v(t._s(t._f("stopoverTime")(e.stopoverTime, n, t.stations.length)))])])
            })), 0), t._v(" "), o("Loading", {attrs: {visible: t.loading}})], 1)])])], 1), t._v(" "), o("div", {staticClass: "travel-station lastOne"}, [o("p", {staticClass: "time"}, [t._v("\n            " + t._s(t._f("formatDateFive")(t.arrivalDateTime)) + "\n            "), o("span", [t._v(t._s(t.getDurationDay(t.departureDateTime, t.arrivalDateTime)))])]), t._v(" "), o("p", {staticClass: "station"}, [t._v(t._s(t.toStation))])]), t._v(" "), o("div", {staticClass: "top_dot"}), t._v(" "), o("div", {staticClass: "bottom_dot"})])])])])
        }), [], !1, null, null, null).exports), we = o(535), Pe = o(534), xe = o(460), Re = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Te = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).sanitizeHtml = xe.a, t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "mounted", value: function () {
                    this.klook.platformMp && this.$miniApp.$interceptClick(this)
                }
            }, {
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(m.Vue);
        Re([m.State], Te.prototype, "klook", void 0), Re([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Te.prototype, "bgColor", void 0), Re([Object(m.Prop)({
            type: String,
            default: ""
        })], Te.prototype, "content", void 0);
        var Se = Te = Re([m.Component], Te), De = (o(834), Object(A.a)(Se, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "voucher_markdown",
                style: this.styleObj
            }, [e("div", {
                staticClass: "markdown-content",
                domProps: {innerHTML: this._s(this.sanitizeHtml(this.content))}
            })])
        }), [], !1, null, null, null).exports), Ee = (o(31), function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }), Ae = function (t, e, o, n) {
            var r = t || "";
            return e && t && (r = r.replace(e, e + "fl_lossy.progressive,q_85/"), e += "fl_lossy.progressive,q_85/", r = r.replace(e, e + "c_fill,w_" + o + (n > 0 ? ",h_" + n + "/" : "/"))), r
        }, Ve = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }, {
                key: "formattedMapUrl", get: function () {
                    if (this.mapUrl) return "mobile" === this.klook.platform ? Ae(this.mapUrl, "image/upload/", 622, 270) : Ae(this.mapUrl, "image/upload/", 752, 135);
                    if (this.location) {
                        var t = this.location.longitude, e = this.location.latitude, o = "622x270";
                        return "mobile" === this.klook.platform && (o = "752x135"), "http://api.tiles.mapbox.com/v4/mapbox.streets/pin-m-circle+f44(".concat(t, ",").concat(e, ",15,15)/") + "".concat(t, ",").concat(e, ",13,15/").concat(o, ".png?access_token=pk.eyJ1Ijoia2xvb2siLCJhIjoiaHhkLWhDNCJ9.X7p8qoxepZhRnXq6HVH5ZA")
                    }
                    return ""
                }
            }]), e
        }(m.Vue);
        Ee([Object(m.State)((function (t) {
            return t.klook.platform
        }))], Ve.prototype, "platform", void 0), Ee([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Ve.prototype, "bgColor", void 0), Ee([Object(m.Prop)({
            type: String,
            default: ""
        })], Ve.prototype, "mapUrl", void 0), Ee([Object(m.Prop)({
            type: Object, default: function () {
                return {longitude: "", latitude: ""}
            }
        })], Ve.prototype, "location", void 0), Ee([m.State], Ve.prototype, "klook", void 0);
        var Ie = Ve = Ee([Object(m.Component)({
            components: {
                VoucherSpacing: ut.a, desktop: function () {
                    return o.e(84).then(o.bind(null, 1139))
                }, mobile: function () {
                    return o.e(85).then(o.bind(null, 1140))
                }
            }
        })], Ve), $e = (o(835), Object(A.a)(Ie, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "voucher_map",
                style: this.styleObj
            }, [e("voucher-spacing", {attrs: {height: 4}}), this._v(" "), e(this.platform, {
                tag: "Component",
                attrs: {"formatted-map-url": this.formattedMapUrl}
            })], 1)
        }), [], !1, null, null, null).exports), Le = o(502), Me = o(1111), qe = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Ne = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "getAxiosFunc", value: function () {
                    return this.$axios
                }
            }, {
                key: "getTranslateFunc", value: function () {
                    return this.$t.bind(this)
                }
            }, {
                key: "grounpTitleClick", value: function (data) {
                    this.$emit("grounpTitleClick", data)
                }
            }, {
                key: "useImageSwiper", get: function () {
                    return "desktop" === this.klook.platform
                }
            }, {
                key: "useItineraryMap", get: function () {
                    var t, e, o,
                        n = null !== (o = null === (e = null === (t = this.itineraries) || void 0 === t ? void 0 : t.pois) || void 0 === e ? void 0 : e.poi_data) && void 0 !== o ? o : [];
                    return "mobile" === this.klook.platform && Array.isArray(n) && n.length > 0
                }
            }, {
                key: "mapType", get: function () {
                    var t;
                    return "cn" === (null === (t = this.klook) || void 0 === t ? void 0 : t.market) ? "amap" : "google"
                }
            }, {
                key: "mapTracker", get: function () {
                    var t, e, o;
                    return {
                        url: window.process.env.LOGQUERY_URL_V3,
                        pageSpm: (null === (e = null === (t = this.$route) || void 0 === t ? void 0 : t.meta) || void 0 === e ? void 0 : e.trackedPageName) || (null === (o = this.$route) || void 0 === o ? void 0 : o.name) || "",
                        mapType: this.mapType,
                        platform: this.klook.platform
                    }
                }
            }]), e
        }(m.Vue);
        qe([Object(m.Prop)({
            type: Object, default: function () {
            }
        })], Ne.prototype, "itineraries", void 0), qe([m.State], Ne.prototype, "klook", void 0), qe([Object(m.Prop)({
            type: String,
            default: ""
        })], Ne.prototype, "componentType", void 0), qe([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], Ne.prototype, "isPrint", void 0), qe([Object(m.Prop)({
            type: Object,
            default: null
        })], Ne.prototype, "pickupInfos", void 0);
        var Be = Ne = qe([Object(m.Component)({components: {KlkExperienceItinerary: Me.a}})], Ne),
            Fe = (o(916), Object(A.a)(Be, (function () {
                var t = this, e = t.$createElement;
                return (t._self._c || e)("KlkExperienceItinerary", {
                    attrs: {
                        language: t.klook.language,
                        "itinerary-data": t.itineraries,
                        platform: t.klook.platform,
                        "disable-lazyload": !0,
                        "hack-close-btn": !0,
                        "get-translate-func": t.getTranslateFunc,
                        "component-type": t.componentType,
                        "use-itinerary-map": t.useItineraryMap,
                        "grounp-title-click": t.grounpTitleClick,
                        "map-type": t.mapType,
                        "is-print": t.isPrint,
                        "use-image-swiper": t.useImageSwiper,
                        "card-swiper-item-width": 226,
                        "image-group-style": "desktop" === t.klook.platform ? "cardswiper" : "carousel",
                        "get-axios-func": t.getAxiosFunc,
                        "pickup-infos": t.pickupInfos,
                        "map-tracker": t.mapTracker
                    }
                })
            }), [], !1, null, null, null).exports), He = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, Ue = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "grounpTitleClick", value: function (data) {
                        this.$emit("grounpTitleClick", data)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(m.Vue);
        He([Object(m.Prop)({
            type: Object, default: function () {
            }
        })], Ue.prototype, "itineraries", void 0), He([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Ue.prototype, "bgColor", void 0), He([m.State], Ue.prototype, "klook", void 0), He([Object(m.Prop)({
            type: String,
            default: ""
        })], Ue.prototype, "componentType", void 0), He([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], Ue.prototype, "isPrint", void 0), He([Object(m.Prop)({
            type: Object,
            default: null
        })], Ue.prototype, "pickupInfos", void 0);
        var ze = Ue = He([Object(m.Component)({components: {ExpItinerary: Fe}})], Ue),
            Ye = (o(917), Object(A.a)(ze, (function () {
                var t = this.$createElement;
                return (this._self._c || t)("ExpItinerary", {
                    staticClass: "voucher_exp_itinerary",
                    style: this.styleObj,
                    attrs: {
                        itineraries: this.itineraries,
                        "component-type": this.componentType,
                        "is-print": this.isPrint,
                        "pickup-infos": this.pickupInfos
                    },
                    on: {grounpTitleClick: this.grounpTitleClick}
                })
            }), [], !1, null, null, null).exports), Qe = function (t) {
                return new Promise((function (e) {
                    var o = document.createElement("textarea");
                    o.value = t, o.style.position = "absolute", o.style.left = "-9999px", o.readOnly = !0, o.contentEditable = "true", document.body.appendChild(o), function (t, e, o) {
                        if (navigator.userAgent.match(/ipad|iPod|iphone/i)) {
                            var n = document.createRange();
                            n.selectNodeContents(t);
                            var r = window.getSelection();
                            r.removeAllRanges(), r.addRange(n), t.setSelectionRange(e, o)
                        } else t.select()
                    }(o, 0, t.length), document.execCommand("copy") ? (document.body.removeChild(o), e(!0)) : e(!1)
                }))
            }, Ge = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, Ke = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                var o;
                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "handleCopyUrl",
                    value: (o = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                        return regeneratorRuntime.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Qe(e);
                                case 2:
                                    t.sent && this.$toast(this.$t("12834"));
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "handleOpenUrl", value: function (t) {
                        var e = +new Date, o = void 0 !== arguments ? arguments : null, n = function (t) {
                            if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                                var n = +new Date - e;
                                t = __in_house.get_spm_info(t, {duration: n, args: o})
                            } catch (t) {
                                console.warn("Get spm info error", t)
                            }
                            return t
                        };
                        "mobile" === this.platform ? window.location.href = n(t) : window.open(n(t))
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(m.Vue);
        Ge([Object(m.State)((function (t) {
            return t.klook.platform
        }))], Ke.prototype, "platform", void 0), Ge([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Ke.prototype, "bgColor", void 0), Ge([Object(m.Prop)({
            type: String,
            default: ""
        })], Ke.prototype, "title", void 0), Ge([Object(m.Prop)({
            type: String,
            default: ""
        })], Ke.prototype, "subtitle", void 0), Ge([Object(m.Prop)({
            type: Array, default: function () {
                return []
            }
        })], Ke.prototype, "unitList", void 0);
        var We = Ke = Ge([m.Component], Ke), Je = (o(918), Object(A.a)(We, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher-pass-emot",
                style: t.styleObj
            }, [o("div", {staticClass: "voucher-pass-emot-header"}, [o("p", {staticClass: "voucher-pass-emot-header-title"}, [t._v(t._s(t.title))]), t._v(" "), o("p", {staticClass: "voucher-pass-emot-header-subtitle"}, [t._v(t._s(t.subtitle))])]), t._v(" "), o("div", {staticClass: "voucher-pass-emot-main"}, [o("div", {staticClass: "voucher-pass-emot-main-border"}), t._v(" "), o("div", {staticClass: "voucher-pass-emot-main-content"}, [t.unitList.length ? o("table", {
                staticClass: "voucher-pass-emot-main-table",
                attrs: {cellspacing: "0", cellpadding: "0"}
            }, t._l(t.unitList, (function (e, n) {
                return o("tr", {key: n}, [o("td", {
                    staticClass: "no-shrink",
                    attrs: {valign: "top"}
                }, [o("div", {staticClass: "table-name"}, [t._v("\n              " + t._s(e.name) + "\n            ")])]), t._v(" "), o("td", {attrs: {valign: "top"}}, [o("div", {staticClass: "table-button-wrap"}, [e.copy_url ? o("klk-button", {
                    staticClass: "table-button",
                    attrs: {type: "secondary", size: "mini"},
                    on: {
                        click: function (o) {
                            return t.handleCopyUrl(e.copy_url)
                        }
                    }
                }, [o("span", {staticClass: "one-line"}, [t._v(t._s(t.$t("197743")))])]) : t._e(), t._v(" "), e.open_url ? o("klk-button", {
                    staticClass: "table-button",
                    attrs: {type: "outlined", size: "mini"},
                    on: {
                        click: function (o) {
                            return t.handleOpenUrl(e.open_url)
                        }
                    }
                }, [o("span", {staticClass: "one-line"}, [t._v(t._s(t.$t("197742")))])]) : t._e()], 1)])])
            })), 0) : t._e()])])])
        }), [], !1, null, "229d57e4", null).exports), Xe = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Ze = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(m.Vue);
        Xe([m.State], Ze.prototype, "klook", void 0), Xe([Object(m.State)((function (t) {
            return t.klook.platform
        }))], Ze.prototype, "platform", void 0), Xe([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], Ze.prototype, "bgColor", void 0);
        var to = Ze = Xe([Object(m.Component)({
                components: {
                    desktop: function () {
                        return o.e(86).then(o.bind(null, 1145))
                    }, mobile: function () {
                        return o.e(87).then(o.bind(null, 1125))
                    }
                }
            })], Ze), eo = (o(919), Object(A.a)(to, (function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "voucher-pass-fuji",
                    style: this.styleObj
                }, [e(this.platform, this._b({tag: "Component"}, "Component", this.$attrs, !1))], 1)
            }), [], !1, null, "1d591b21", null).exports), oo = {CODE: "code", IMAGE: "image", BASE64: "base64"},
            no = {EXPIRED: 0, VALID: 1}, ro = o(433), ao = o.n(ro), io = o(432), co = o.n(io),
            so = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            };
        ye.a.extend(ao.a), ye.a.extend(co.a);
        var lo = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).timer = null, t.currentTime = "", t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "updateTime", value: function () {
                    var time = ye()()[this.timeZone.includes("/") ? "tz" : "utcOffset"](this.timeZone).format(this.timeFormat);
                    return this.currentTime = time, time
                }
            }, {
                key: "mounted", value: function () {
                    var t = this;
                    this.updateTime(), this.timer = window.setInterval((function () {
                        t.updateTime()
                    }), 1e3)
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }
            }, {
                key: "formattedTime", get: function () {
                    return this.currentTime || this.updateTime()
                }
            }]), e
        }(m.Vue);
        so([Object(m.Prop)({type: String})], lo.prototype, "platform", void 0), so([Object(m.Prop)({type: String})], lo.prototype, "logoUrl", void 0), so([Object(m.Prop)({
            type: String,
            default: "#fff"
        })], lo.prototype, "backgroundColor", void 0), so([Object(m.Prop)({
            type: String,
            required: !0
        })], lo.prototype, "timeZone", void 0), so([Object(m.Prop)({
            type: String,
            required: !0
        })], lo.prototype, "timeFormat", void 0);
        var uo = lo = so([m.Component], lo), po = (o(920), Object(A.a)(uo, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "time-alert",
                class: "time-alert--" + t.platform,
                style: {backgroundColor: t.backgroundColor}
            }, [t.logoUrl ? o("img", {
                staticClass: "time-alert__logo",
                attrs: {src: t.logoUrl, alt: "logo"}
            }) : t._e(), t._v(" "), o("div", {staticClass: "time-alert__time"}, [t._v(t._s(t.formattedTime))])])
        }), [], !1, null, "09f5a2a2", null).exports);

        function fo(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function ho(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? fo(Object(source), !0).forEach((function (e) {
                    Object(v.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : fo(Object(source)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        var vo, _o = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        };
        ye.a.extend(co.a), ye.a.extend(ao.a), function (t) {
            t.NORMAL = "normal", t.LOADING = "loading", t.REFRESHED = "refreshed"
        }(vo || (vo = {}));
        var mo = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).QRCodeType = oo, t.QRCodeStatus = no, t.RefreshState = vo, t.refreshState = vo.NORMAL, t.autoRefreshTimer = null, t
            }

            var n, v;
            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "onQrcodeChange", value: function () {
                    this.genQrcode(), this.setupAutoRefresh()
                }
            }, {
                key: "mounted", value: function () {
                    this.genQrcode(), this.setupAutoRefresh()
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.clearAutoRefreshTimer()
                }
            }, {
                key: "setupAutoRefresh", value: function () {
                    var t = this;
                    if (this.clearAutoRefreshTimer(), this.qrcode && this.qrcode.expire_time && this.qrcode.status === no.VALID) {
                        var e = ye()(this.qrcode.expire_time).valueOf() - ye()().valueOf();
                        if (e <= 1e3) return;
                        var o = e - 1e3;
                        this.autoRefreshTimer = setTimeout((function () {
                            t.refreshState === vo.NORMAL && t.qrcode.status === no.VALID && t.handleRefresh()
                        }), o)
                    }
                }
            }, {
                key: "clearAutoRefreshTimer", value: function () {
                    null !== this.autoRefreshTimer && (clearTimeout(this.autoRefreshTimer), this.autoRefreshTimer = null)
                }
            }, {
                key: "handleRefresh", value: (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, o, n, r, c, l, d, f, h, v, _, m = this, y = arguments;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (e = y.length > 0 && void 0 !== y[0] ? y[0] : {}, o = e.forceRefresh, n = void 0 !== o && o, this.refreshState === vo.NORMAL) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return this.refreshState = vo.LOADING, this.clearAutoRefreshTimer(), r = ho({}, this.refreshParams, {force_refresh: n}), t.prev = 6, t.next = 9, this.$axios.get(this.refreshUrl, {params: r}).then((function (t) {
                                    return t.data
                                }));
                            case 9:
                                if (c = t.sent, d = (l = c || {}).result, f = void 0 === d ? {} : d, h = l.success, v = l.error, _ = void 0 === v ? {} : v, h) {
                                    t.next = 16;
                                    break
                                }
                                return this.$toast({
                                    type: "error",
                                    message: _.message || this.$t("203914")
                                }), this.refreshState = vo.NORMAL, this.setupAutoRefresh(), t.abrupt("return");
                            case 16:
                                this.$emit("refresh", f), this.refreshState = vo.REFRESHED, setTimeout((function () {
                                    m.refreshState = vo.NORMAL, m.setupAutoRefresh()
                                }), 1e3), t.next = 26;
                                break;
                            case 21:
                                t.prev = 21, t.t0 = t.catch(6), this.$toast({
                                    type: "error",
                                    message: this.$t("203914")
                                }), this.refreshState = vo.NORMAL, this.setupAutoRefresh();
                            case 26:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[6, 21]])
                }))), function () {
                    return v.apply(this, arguments)
                })
            }, {
                key: "genQrcode", value: (n = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, canvas, n;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if ((canvas = null === (e = this.$refs) || void 0 === e ? void 0 : e.qrcodeCanvas) && this.qrcode.content) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.prev = 3, t.next = 6, o.e(54).then(o.t.bind(null, 1115, 7));
                            case 6:
                                return n = t.sent, t.next = 9, n.toCanvas(canvas, this.qrcode.content, {
                                    width: this.size,
                                    margin: 0,
                                    version: 10,
                                    errorCorrectionLevel: "M",
                                    color: {dark: this.foreground, light: this.background}
                                });
                            case 9:
                                t.next = 14;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(3), console.error("生成二维码失败:", t.t0);
                            case 14:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[3, 11]])
                }))), function () {
                    return n.apply(this, arguments)
                })
            }, {
                key: "size", get: function () {
                    return "desktop" === this.platform ? 160 : 144
                }
            }, {
                key: "refreshButtonText", get: function () {
                    switch (this.refreshState) {
                        case vo.LOADING:
                            return this.$t("203912");
                        case vo.REFRESHED:
                            return this.$t("203913");
                        default:
                            return this.$t("203911")
                    }
                }
            }, {
                key: "hasMerchantDesc", get: function () {
                    return Boolean(this.expireDescEn && this.expireDescEn !== this.expireDesc)
                }
            }]), e
        }(m.Vue);
        _o([Object(m.Prop)({
            type: Object,
            required: !0
        })], mo.prototype, "qrcode", void 0), _o([Object(m.Prop)({
            type: String,
            default: ""
        })], mo.prototype, "refreshDesc", void 0), _o([Object(m.Prop)({
            type: String,
            default: ""
        })], mo.prototype, "refreshUrl", void 0), _o([Object(m.Prop)({
            type: String,
            default: ""
        })], mo.prototype, "expireDesc", void 0), _o([Object(m.Prop)({
            type: String,
            default: ""
        })], mo.prototype, "expireDescEn", void 0), _o([Object(m.Prop)({
            type: String,
            default: "#FFFFFF"
        })], mo.prototype, "background", void 0), _o([Object(m.Prop)({
            type: String,
            default: "#000000"
        })], mo.prototype, "foreground", void 0), _o([Object(m.Prop)({
            type: String,
            default: "desktop"
        })], mo.prototype, "platform", void 0), _o([Object(m.Prop)({
            type: Object, default: function () {
                return {booking_ref_no: "", force_refresh: !1}
            }
        })], mo.prototype, "refreshParams", void 0), _o([Object(m.Watch)("qrcode", {
            immediate: !0,
            deep: !0
        })], mo.prototype, "onQrcodeChange", null);
        var yo = mo = _o([m.Component], mo), bo = (o(921), Object(A.a)(yo, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "dynamic-qrcode",
                class: "dynamic-qrcode--" + t.platform
            }, [o("div", {staticClass: "dynamic-qrcode__container"}, [t.qrcode.type === t.QRCodeType.CODE ? [o("canvas", {
                ref: "qrcodeCanvas",
                attrs: {width: t.size, height: t.size}
            })] : t.qrcode.type === t.QRCodeType.IMAGE ? [o("img", {
                attrs: {
                    src: t.qrcode.content,
                    width: t.size,
                    height: t.size,
                    alt: "QR Code"
                }
            })] : t.qrcode.type === t.QRCodeType.BASE64 ? [o("img", {
                attrs: {
                    src: t.qrcode.content,
                    width: t.size,
                    height: t.size,
                    alt: "QR Code"
                }
            })] : t._e(), t._v(" "), t.qrcode.status === t.QRCodeStatus.EXPIRED ? o("div", {staticClass: "dynamic-qrcode__expired-overlay"}, [o("div", {staticClass: "dynamic-qrcode__expired-text"}, [t._v(t._s(t.expireDesc))]), t._v(" "), t.hasMerchantDesc ? o("div", {staticClass: "dynamic-qrcode__expired-text dynamic-qrcode__expired-text--en"}, [t._v("\n        " + t._s(t.expireDescEn) + "\n      ")]) : t._e()]) : t._e()], 2), t._v(" "), t.qrcode.status === t.QRCodeStatus.VALID ? o("klk-button", {
                staticClass: "dynamic-qrcode__refresh-btn",
                attrs: {
                    size: "mini",
                    type: t.refreshState === t.RefreshState.REFRESHED ? "success" : "primary",
                    loading: t.refreshState === t.RefreshState.LOADING,
                    icon: t.refreshState === t.RefreshState.NORMAL ? "icon_edit_update" : t.refreshState === t.RefreshState.REFRESHED ? "icon_other_check_xs" : ""
                },
                on: {
                    click: function (e) {
                        return t.handleRefresh({forceRefresh: !0})
                    }
                }
            }, [t._v("\n    " + t._s(t.refreshButtonText) + "\n  ")]) : t._e(), t._v(" "), t.refreshDesc && t.qrcode.status === t.QRCodeStatus.VALID ? o("div", {staticClass: "dynamic-qrcode__refresh-tip"}, [t._v("\n    " + t._s(t.refreshDesc) + "\n  ")]) : t._e()], 1)
        }), [], !1, null, "05fc37e1", null).exports), go = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Oo = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "handleQrcodeRefresh", value: function (t) {
                    this.$emit("refresh", t)
                }
            }]), e
        }(m.Vue);
        go([Object(m.Prop)({
            type: Array,
            required: !0
        })], Oo.prototype, "textList", void 0), go([Object(m.Prop)({
            type: Object,
            required: !0
        })], Oo.prototype, "voucherCodeInfo", void 0), go([Object(m.Prop)({
            type: String,
            default: "desktop"
        })], Oo.prototype, "platform", void 0);
        var ko = Oo = go([Object(m.Component)({components: {DynamicQrcode: bo}})], Oo),
            jo = (o(922), Object(A.a)(ko, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher-content",
                    class: "voucher-content--" + t.platform
                }, [o("div", {staticClass: "voucher-content__text"}, t._l(t.textList, (function (e, n) {
                    return o("span", {
                        key: n,
                        staticClass: "voucher-content__text-item",
                        style: {color: e.color}
                    }, [t._v(t._s(e.content))])
                })), 0), t._v(" "), o("dynamic-qrcode", {
                    staticClass: "voucher-content__qrcode",
                    attrs: {
                        qrcode: t.voucherCodeInfo.dynamic_qrcode,
                        "refresh-url": t.voucherCodeInfo.refresh_url,
                        "refresh-params": t.voucherCodeInfo.refresh_params,
                        "refresh-desc": t.voucherCodeInfo.refresh_desc,
                        "expire-desc": t.voucherCodeInfo.expire_desc,
                        "expire-desc-en": t.voucherCodeInfo.expire_desc_en,
                        platform: t.platform
                    },
                    on: {refresh: t.handleQrcodeRefresh}
                })], 1)
            }), [], !1, null, "665e5640", null).exports);

        function Co(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function wo(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Co(Object(source), !0).forEach((function (e) {
                    Object(v.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Co(Object(source)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        var Po = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, xo = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).localVoucherCodeInfo = {}, t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "onVoucherCodeInfoChange", value: function (t) {
                    var e;
                    (null === (e = Object.keys(t)) || void 0 === e ? void 0 : e.length) > 0 && (this.localVoucherCodeInfo = wo({}, t))
                }
            }, {
                key: "handleRefresh", value: function (data) {
                    data && data.content && (this.localVoucherCodeInfo = wo({}, this.localVoucherCodeInfo, {dynamic_qrcode: data}))
                }
            }, {
                key: "isVoucherValid", get: function () {
                    var t, e;
                    return (null === (e = null === (t = this.localVoucherCodeInfo) || void 0 === t ? void 0 : t.dynamic_qrcode) || void 0 === e ? void 0 : e.status) === no.VALID
                }
            }]), e
        }(m.Vue);
        Po([Object(m.State)((function (t) {
            return t.klook.platform
        }))], xo.prototype, "platform", void 0), Po([Object(m.Prop)({
            type: Object,
            required: !0
        })], xo.prototype, "timeBannerConfig", void 0), Po([Object(m.Prop)({
            type: Array,
            required: !0
        })], xo.prototype, "textList", void 0), Po([Object(m.Prop)({
            type: Object,
            required: !0
        })], xo.prototype, "voucherCodeInfo", void 0), Po([Object(m.Watch)("voucherCodeInfo", {
            immediate: !0,
            deep: !0
        })], xo.prototype, "onVoucherCodeInfoChange", null);
        var Ro = xo = Po([Object(m.Component)({components: {TimeAlert: po, VoucherContent: jo}})], xo),
            To = (o(923), Object(A.a)(Ro, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "dynamic-voucher-code",
                    class: "dynamic-voucher-code--" + t.platform
                }, [t.timeBannerConfig.show && t.isVoucherValid ? o("time-alert", {
                    staticClass: "dynamic-voucher-code__time-alert",
                    attrs: {
                        platform: t.platform,
                        "logo-url": t.timeBannerConfig.logo_url,
                        "background-color": t.timeBannerConfig.background_color,
                        "time-zone": t.timeBannerConfig.time_display.time_zone,
                        "time-format": t.timeBannerConfig.time_display.time_format
                    }
                }) : t._e(), t._v(" "), o("div", {staticClass: "dynamic-voucher-code__container"}, [o("voucher-content", {
                    attrs: {
                        "text-list": t.textList,
                        "voucher-code-info": t.localVoucherCodeInfo,
                        platform: t.platform
                    }, on: {refresh: t.handleRefresh}
                })], 1)], 1)
            }), [], !1, null, null, null).exports), So = (o(63), o(255), o(171), function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }), Do = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "highlightedHtml", get: function () {
                        var t = ["margin: 0 4px", "padding: 4px", "border-radius: 4px"];
                        this.highlightBackgroundColor && t.push("background-color: ".concat(this.highlightBackgroundColor));
                        var style = t.join("; "), e = this.$t("226834", {num: this.remainingSeconds}),
                            o = '<span class="event-time-alert__time-num" style="'.concat(style, '">').concat(e, "</span>");
                        return String(this.$t("219820", {time: o}))
                    }
                }]), e
            }(m.Vue);
        So([Object(m.Prop)({
            type: String,
            default: "desktop"
        })], Do.prototype, "platform", void 0), So([Object(m.Prop)({type: String})], Do.prototype, "logoUrl", void 0), So([Object(m.Prop)({
            type: String,
            default: "#E6F7F2"
        })], Do.prototype, "backgroundColor", void 0), So([Object(m.Prop)({
            type: Number,
            required: !0
        })], Do.prototype, "remainingSeconds", void 0), So([Object(m.Prop)({
            type: String,
            default: ""
        })], Do.prototype, "highlightBackgroundColor", void 0);
        var Eo = Do = So([m.Component], Do), Ao = (o(924), Object(A.a)(Eo, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "event-time-alert",
                class: "event-time-alert--" + this.platform,
                style: {backgroundColor: this.backgroundColor}
            }, [e("svg-icon", {
                staticClass: "event-time-alert__logo",
                attrs: {name: "common#icon_time_time_fill_s"}
            }), this._v(" "), e("div", {
                staticClass: "event-time-alert__time",
                domProps: {innerHTML: this._s(this.highlightedHtml)}
            })], 1)
        }), [], !1, null, "7accc856", null).exports), Vo = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Io = function (t) {
            function e() {
                return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
            }

            var n;
            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "onItemChange", value: function () {
                    var t = this;
                    this.$nextTick((function () {
                        t.generateQRCode()
                    }))
                }
            }, {
                key: "mounted", value: function () {
                    this.generateQRCode()
                }
            }, {
                key: "generateQRCode", value: (n = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, canvas, n;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if ((canvas = this.$refs["qrcode-".concat(this.index)]) && (null === (e = this.item) || void 0 === e ? void 0 : e.voucher_code_text)) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.prev = 3, t.next = 6, o.e(54).then(o.t.bind(null, 1115, 7));
                            case 6:
                                return n = t.sent, t.next = 9, n.toCanvas(canvas, this.item.voucher_code_text, {
                                    width: this.qrCodeSize,
                                    margin: 0,
                                    errorCorrectionLevel: "M",
                                    color: {dark: "#000000", light: "#FFFFFF"}
                                });
                            case 9:
                                t.next = 14;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(3), console.error("生成二维码失败:", t.t0);
                            case 14:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[3, 11]])
                }))), function () {
                    return n.apply(this, arguments)
                })
            }, {
                key: "formatExpireTime", value: function (t) {
                    return ye()(t).format("YYYY-MM-DD HH:mm:ss")
                }
            }, {
                key: "handleTransferClick", value: function (t) {
                    var e = +new Date, o = void 0 !== arguments ? arguments : null, n = function (t) {
                        if ("undefined" != typeof __in_house && __in_house.get_spm_info) try {
                            var n = +new Date - e;
                            t = __in_house.get_spm_info(t, {duration: n, args: o})
                        } catch (t) {
                            console.warn("Get spm info error", t)
                        }
                        return t
                    };
                    t && window.open(n(t), "_blank")
                }
            }, {
                key: "handleRefresh", value: function () {
                    "normal" === this.refreshState && this.$emit("refresh-all-vouchers")
                }
            }, {
                key: "onQRCodeChange", value: function () {
                    var t = this;
                    this.$nextTick((function () {
                        t.generateQRCode()
                    }))
                }
            }, {
                key: "qrCodeSize", get: function () {
                    return this.platform, 120
                }
            }, {
                key: "shouldShowOverlay", get: function () {
                    return !!this.showRefreshButton || "active" !== this.item.status
                }
            }, {
                key: "overlayText", get: function () {
                    return this.showRefreshButton ? this.refreshFailedText || "Failed to connect the internet, please try again." : this.item.status_text || ""
                }
            }, {
                key: "statusColor", get: function () {
                    if (this.showRefreshButton) return "#F44622";
                    var t = this.item.status_color || "#666666";
                    return t && !t.startsWith("#") ? "#".concat(t) : t
                }
            }, {
                key: "normalizedRedemptionColor", get: function () {
                    var t,
                        e = (null === (t = this.item.redemption_status) || void 0 === t ? void 0 : t.color) || "#666666";
                    return e && !e.startsWith("#") ? "#".concat(e) : e
                }
            }, {
                key: "refreshButtonText", get: function () {
                    switch (this.refreshState) {
                        case"loading":
                            return this.$t("203912");
                        case"success":
                            return this.$t("203913");
                        default:
                            return this.$t("203911")
                    }
                }
            }]), e
        }(m.Vue);
        Vo([Object(m.Prop)({
            type: Object,
            required: !0
        })], Io.prototype, "item", void 0), Vo([Object(m.Prop)({
            type: Number,
            required: !0
        })], Io.prototype, "index", void 0), Vo([Object(m.Prop)({
            type: String,
            default: "desktop"
        })], Io.prototype, "platform", void 0), Vo([Object(m.Prop)({
            type: String,
            default: ""
        })], Io.prototype, "refreshFailedText", void 0), Vo([Object(m.Prop)({
            type: String,
            default: "normal"
        })], Io.prototype, "refreshState", void 0), Vo([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], Io.prototype, "showRefreshButton", void 0), Vo([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], Io.prototype, "showErrorText", void 0), Vo([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], Io.prototype, "showErrorAction", void 0), Vo([Object(m.Watch)("item", {
            immediate: !0,
            deep: !0
        })], Io.prototype, "onItemChange", null), Vo([Object(m.Watch)("item.voucher_code_text")], Io.prototype, "onQRCodeChange", null);
        var $o = Io = Vo([m.Component], Io), Lo = (o(925), Object(A.a)($o, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher-code-item",
                class: "voucher-code-item--" + t.platform
            }, [t.item.title || t.item.sub_title ? o("div", {staticClass: "voucher-code-item__ticket-header"}, [t.item.title ? o("div", {staticClass: "voucher-code-item__ticket-title"}, [t._v("\n      " + t._s(t.item.title) + "\n    ")]) : t._e(), t._v(" "), t.item.sub_title ? o("div", {staticClass: "voucher-code-item__ticket-sub-title"}, [t._v("\n      " + t._s(t.item.sub_title) + "\n    ")]) : t._e()]) : t._e(), t._v(" "), o("div", {staticClass: "voucher-code-item__qr-container"}, [o("div", {staticClass: "voucher-code-item__qr-code"}, [o("canvas", {
                ref: "qrcode-" + t.index,
                attrs: {width: t.qrCodeSize, height: t.qrCodeSize}
            })]), t._v(" "), t.shouldShowOverlay ? o("div", {staticClass: "voucher-code-item__status-overlay"}, [!t.showRefreshButton || t.showErrorText ? o("div", {
                staticClass: "voucher-code-item__status-text",
                style: {color: t.statusColor}
            }, [t._v("\n        " + t._s(t.overlayText) + "\n      ")]) : t._e(), t._v(" "), !t.showRefreshButton && t.item.status_link ? o("div", {staticClass: "voucher-code-item__transfer-link"}, [o("span", {
                staticClass: "voucher-code-item__transfer-text",
                on: {
                    click: function (e) {
                        return t.handleTransferClick(t.item.status_link.link)
                    }
                }
            }, [t._v("\n          " + t._s(t.item.status_link.text) + "\n          "), o("klk-icon", {attrs: {type: "icon_navigation_chevron_right_xs"}})], 1)]) : t._e(), t._v(" "), t.showRefreshButton && t.showErrorAction ? o("klk-button", {
                directives: [{
                    name: "galileo-click-tracker",
                    rawName: "v-galileo-click-tracker",
                    value: {spm: "RefreshBtn"},
                    expression: "{spm: 'RefreshBtn'}"
                }],
                staticClass: "voucher-code-item__refresh-btn",
                class: "voucher-code-item__refresh-btn__" + t.refreshState,
                staticStyle: {"margin-top": "12px"},
                attrs: {
                    size: "desktop" === t.platform ? "small" : "mini",
                    "data-spm-module": "RefreshBtn",
                    "data-spm-virtual-item": "__virtual",
                    type: "secondary",
                    loading: "loading" === t.refreshState,
                    icon: "loading" === t.refreshState ? "" : "success" === t.refreshState ? "icon_other_check_xs" : "icon_edit_update"
                },
                on: {click: t.handleRefresh}
            }, [t._v("\n        " + t._s(t.refreshButtonText) + "\n      ")]) : t._e()], 1) : t._e()]), t._v(" "), o("div", {staticClass: "voucher-code-item__code"}, [o("div", {staticClass: "voucher-code-item__code-label"}, [t._v("\n      " + t._s(t.$t("219819")) + "\n    ")]), t._v(" "), o("div", {staticClass: "voucher-code-item__code-value"}, [t._v("\n      " + t._s(t.item.voucher_code_id) + "\n    ")])]), t._v(" "), t.item.redemption_status ? o("div", {
                staticClass: "voucher-code-item__redeem",
                style: {color: t.normalizedRedemptionColor}
            }, [t._v("\n    " + t._s(t.item.redemption_status.text) + "\n  ")]) : t._e()])
        }), [], !1, null, "06b43118", null).exports), Mo = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, qo = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).collapseIndex = [], t
            }

            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "mounted", value: function () {
                    this.setDefaultCollapseIndex()
                }
            }, {
                key: "onVoucherCodeListChange", value: function (t) {
                    (null == t ? void 0 : t.length) && this.setDefaultCollapseIndex()
                }
            }, {
                key: "setDefaultCollapseIndex", value: function () {
                    var t = this;
                    "mobile" === this.platform && this.voucherCodeList.length > 0 && this.$nextTick((function () {
                        t.$set(t, "collapseIndex", ["0"])
                    }))
                }
            }, {
                key: "handleRefreshAllVouchers", value: function () {
                    this.$emit("refresh-all-vouchers")
                }
            }]), e
        }(m.Vue);
        Mo([Object(m.Prop)({
            type: Array,
            required: !0
        })], qo.prototype, "voucherCodeList", void 0), Mo([Object(m.Prop)({
            type: String,
            default: "desktop"
        })], qo.prototype, "platform", void 0), Mo([Object(m.Prop)({
            type: String,
            default: ""
        })], qo.prototype, "refreshFailedText", void 0), Mo([Object(m.Prop)({
            type: String,
            default: "normal"
        })], qo.prototype, "refreshState", void 0), Mo([Object(m.Prop)({
            type: Boolean,
            default: !1
        })], qo.prototype, "showRefreshButton", void 0), Mo([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], qo.prototype, "showErrorText", void 0), Mo([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], qo.prototype, "showErrorAction", void 0), Mo([Object(m.Watch)("voucherCodeList", {immediate: !0})], qo.prototype, "onVoucherCodeListChange", null);
        var No = qo = Mo([Object(m.Component)({components: {VoucherCodeItem: Lo}})], qo),
            Bo = (o(926), Object(A.a)(No, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher-code-list",
                    class: "voucher-code-list--" + t.platform
                }, ["desktop" === t.platform ? t._l(t.voucherCodeList, (function (e, n) {
                    return o("div", {
                        key: "voucher-" + n,
                        staticClass: "voucher-code-list__cell"
                    }, [o("voucher-code-item", {
                        staticClass: "voucher-code-list__item",
                        attrs: {
                            item: e,
                            index: n,
                            platform: t.platform,
                            "refresh-failed-text": t.refreshFailedText,
                            "refresh-state": t.refreshState,
                            "show-refresh-button": t.showRefreshButton,
                            "show-error-text": t.showErrorText,
                            "show-error-action": t.showErrorAction
                        },
                        on: {"refresh-all-vouchers": t.handleRefreshAllVouchers}
                    })], 1)
                })) : [o("klk-collapse", {
                    attrs: {size: "small"},
                    model: {
                        value: t.collapseIndex, callback: function (e) {
                            t.collapseIndex = e
                        }, expression: "collapseIndex"
                    }
                }, t._l(t.voucherCodeList, (function (e, n) {
                    return o("klk-collapse-item", {
                        key: "voucher-" + n,
                        staticClass: "voucher-code-list__collapse-item",
                        attrs: {title: e.title || t.$t("voucher.ticket") + " " + (n + 1), name: "" + n}
                    }, [o("voucher-code-item", {
                        staticClass: "voucher-code-list__collapse-content",
                        attrs: {
                            item: e,
                            index: n,
                            platform: t.platform,
                            "refresh-failed-text": t.refreshFailedText,
                            "refresh-state": t.refreshState,
                            "show-refresh-button": t.showRefreshButton,
                            "show-error-text": t.showErrorText,
                            "show-error-action": t.showErrorAction
                        },
                        on: {"refresh-all-vouchers": t.handleRefreshAllVouchers}
                    })], 1)
                })), 1)]], 2)
            }), [], !1, null, "010e553e", null).exports);

        function Fo(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        var Ho = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, Uo = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).currentRefreshUrl = "", t.currentTimeBannerConfig = null, t.currentVoucherCodeList = [], t.currentExpireTime = "", t.remainingSeconds = 0, t.countdownTimer = null, t.refreshState = "normal", t.showRefreshButton = !1, t
            }

            var o, n, _;
            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "mounted", value: function () {
                    this.initLocalData(), this.needAutoRefresh && this.initCountdown()
                }
            }, {
                key: "initLocalData", value: function () {
                    this.currentRefreshUrl = this.refreshUrl;
                    var t = this.timeBannerConfig ? function (t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Fo(Object(source), !0).forEach((function (e) {
                                Object(v.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Fo(Object(source)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, this.timeBannerConfig) : null;
                    t && t.background_color && (t.background_color = t.background_color.startsWith("#") ? t.background_color : "#".concat(t.background_color)), this.currentTimeBannerConfig = t, this.currentVoucherCodeList = Object(k.a)(this.voucherCodeList), this.currentExpireTime = this.expireTime
                }
            }, {
                key: "beforeDestroy", value: function () {
                    this.clearCountdownTimer()
                }
            }, {
                key: "initCountdown", value: function () {
                    if (this.needAutoRefresh) {
                        if (!this.currentExpireTime) return this.remainingSeconds = 0, void this.clearCountdownTimer();
                        this.updateRemainingSeconds(), this.startCountdownTimer()
                    }
                }
            }, {
                key: "updateRemainingSeconds", value: function () {
                    if (this.currentExpireTime) try {
                        var t = ye()(), e = ye()(this.currentExpireTime).diff(t, "second");
                        this.remainingSeconds = Math.max(0, e)
                    } catch (t) {
                        console.error("计算剩余时间失败:", t), this.remainingSeconds = 0
                    } else this.remainingSeconds = 0
                }
            }, {
                key: "startCountdownTimer", value: function () {
                    var t = this;
                    this.clearCountdownTimer(), this.countdownTimer = window.setInterval((function () {
                        t.remainingSeconds > 0 ? t.remainingSeconds-- : (t.handleCountdownExpired(), t.clearCountdownTimer())
                    }), 1e3)
                }
            }, {
                key: "clearCountdownTimer", value: function () {
                    this.countdownTimer && (clearInterval(this.countdownTimer), this.countdownTimer = null)
                }
            }, {
                key: "handleCountdownExpired", value: function () {
                    this.needAutoRefresh && this.autoRefresh()
                }
            }, {
                key: "refresh", value: (_ = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var o, n, r, c, l, d, f, h, v, _, m, y, O, k, j = this, C = arguments;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return o = C.length > 1 && void 0 !== C[1] && C[1], t.prev = 1, t.next = 4, this.$axios.get(e, {timeout: 3e3}).then((function (t) {
                                    return t.data
                                }));
                            case 4:
                                if (r = t.sent, l = (c = r || {}).result, d = void 0 === l ? {} : l, f = c.success, h = c.error, v = void 0 === h ? {} : h, f) {
                                    t.next = 10;
                                    break
                                }
                                throw _ = new Error(v.message || (o ? "Manual refresh failed" : "Auto refresh failed")), this.showRefreshButton = !0, _;
                            case 10:
                                this.showRefreshButton = !1, m = d, Array.isArray(null == m ? void 0 : m.dynamic_codes) && Array.isArray(this.currentVoucherCodeList) && (y = new Map(m.dynamic_codes.map((function (t) {
                                    return [t.code_num, t.qr_code]
                                }))), this.currentVoucherCodeList.forEach((function (t, e) {
                                    var o = (null == t ? void 0 : t.voucher_code_id) || "", n = y.get(o);
                                    n && n !== t.voucher_code_text && j.$set(j.currentVoucherCodeList[e], "voucher_code_text", n)
                                }))), O = null === (n = null == m ? void 0 : m.dynamic_codes) || void 0 === n ? void 0 : n.find((function (t) {
                                    return "active" === (null == t ? void 0 : t.status)
                                })), k = (null == O ? void 0 : O.expire_time) || "", this.currentExpireTime = k, this.needAutoRefresh && this.initCountdown(), t.next = 23;
                                break;
                            case 19:
                                throw t.prev = 19, t.t0 = t.catch(1), this.showRefreshButton = !0, t.t0;
                            case 23:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[1, 19]])
                }))), function (t) {
                    return _.apply(this, arguments)
                })
            }, {
                key: "autoRefresh", value: (n = Object(r.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, t.next = 3, this.refresh(this.currentRefreshUrl, !1);
                            case 3:
                                t.next = 8;
                                break;
                            case 5:
                                t.prev = 5, t.t0 = t.catch(0), console.warn("autoRefresh", t.t0);
                            case 8:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[0, 5]])
                }))), function () {
                    return n.apply(this, arguments)
                })
            }, {
                key: "handleRefresh", value: (o = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e = this;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return this.refreshState = "loading", t.prev = 1, t.next = 4, this.refresh(this.currentRefreshUrl, !0);
                            case 4:
                                this.refreshState = "success", setTimeout((function () {
                                    e.refreshState = "normal"
                                }), 1e3), t.next = 11;
                                break;
                            case 8:
                                t.prev = 8, t.t0 = t.catch(1), this.refreshState = "normal";
                            case 11:
                            case"end":
                                return t.stop()
                        }
                    }), t, this, [[1, 8]])
                }))), function () {
                    return o.apply(this, arguments)
                })
            }, {
                key: "platform", get: function () {
                    return this.klook.platform
                }
            }, {
                key: "refreshButtonText", get: function () {
                    switch (this.refreshState) {
                        case"loading":
                            return this.$t("203912");
                        case"success":
                            return this.$t("203913");
                        default:
                            return this.$t("219829")
                    }
                }
            }]), e
        }(m.Vue);
        Ho([Object(m.Prop)({
            type: Object,
            required: !0
        })], Uo.prototype, "timeBannerConfig", void 0), Ho([Object(m.Prop)({
            type: String,
            required: !0
        })], Uo.prototype, "refreshUrl", void 0), Ho([Object(m.Prop)({
            type: String,
            default: ""
        })], Uo.prototype, "refreshFailedText", void 0), Ho([Object(m.Prop)({
            type: String,
            required: !0
        })], Uo.prototype, "expireTime", void 0), Ho([Object(m.Prop)({
            type: Array,
            required: !0
        })], Uo.prototype, "voucherCodeList", void 0), Ho([Object(m.Prop)({
            type: Boolean,
            default: !0
        })], Uo.prototype, "needAutoRefresh", void 0), Ho([m.State], Uo.prototype, "klook", void 0);
        var zo = Uo = Ho([Object(m.Component)({components: {TimeAlert: Ao, VoucherCodeList: Bo}})], Uo),
            Yo = (o(927), Object(A.a)(zo, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "event-dynamic-voucher",
                    class: "event-dynamic-voucher--" + t.platform
                }, [t.needAutoRefresh && t.currentTimeBannerConfig && t.currentTimeBannerConfig.show ? o("time-alert", {
                    staticClass: "event-dynamic-voucher__time-alert",
                    attrs: {
                        platform: t.platform,
                        "logo-url": t.currentTimeBannerConfig.logo_url,
                        "background-color": t.currentTimeBannerConfig.background_color || "#E6F7F2",
                        "highlight-background-color": t.currentTimeBannerConfig.highlight_background_color || "#FFFFFF33",
                        "remaining-seconds": t.remainingSeconds
                    }
                }) : t._e(), t._v(" "), "desktop" === t.platform && t.showRefreshButton ? o("klk-alert", {
                    staticClass: "event-dynamic-voucher__error-banner",
                    attrs: {type: "error", "show-icon": ""}
                }, [o("div", {staticClass: "event-dynamic-voucher__error-banner-container"}, [o("span", [t._v(t._s(t.refreshFailedText || t.$t("219828-network error")))]), t._v(" "), o("klk-button", {
                    directives: [{
                        name: "galileo-click-tracker",
                        rawName: "v-galileo-click-tracker",
                        value: {spm: "RefreshBtn"},
                        expression: "{spm: 'RefreshBtn'}"
                    }],
                    staticClass: "event-dynamic-voucher__refresh-button",
                    attrs: {
                        "data-spm-module": "RefreshBtn",
                        "data-spm-virtual-item": "__virtual",
                        size: "mini",
                        type: "secondary",
                        loading: "loading" === t.refreshState,
                        icon: "loading" === t.refreshState ? "" : "success" === t.refreshState ? "icon_other_check_xs" : "icon_edit_update"
                    },
                    on: {click: t.handleRefresh}
                }, [t._v("\n        " + t._s(t.refreshButtonText) + "\n      ")])], 1)]) : t._e(), t._v(" "), o("voucher-code-list", {
                    ref: "voucherCodeList",
                    staticClass: "event-dynamic-voucher__list",
                    attrs: {
                        "voucher-code-list": t.currentVoucherCodeList,
                        "refresh-failed-text": t.refreshFailedText,
                        "refresh-state": t.refreshState,
                        "show-refresh-button": t.showRefreshButton,
                        "show-error-text": "desktop" !== t.platform,
                        "show-error-action": "desktop" !== t.platform,
                        platform: t.platform
                    },
                    on: {"refresh-all-vouchers": t.handleRefresh}
                })], 1)
            }), [], !1, null, "3b059564", null).exports), Qo = o(928), Go = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, Ko = function (t) {
                function e() {
                    return Object(c.a)(this, e), Object(d.a)(this, Object(f.a)(e).apply(this, arguments))
                }

                return Object(h.a)(e, t), Object(l.a)(e, [{
                    key: "handleEntranceAppeared", value: function () {
                        this.$emit("chat-entrance-show")
                    }
                }, {
                    key: "previousPageName", get: function () {
                        var t;
                        return (null === (t = this.chatEntranceConfig) || void 0 === t ? void 0 : t.previous_page_name) || ""
                    }
                }, {
                    key: "extraInfo", get: function () {
                        var t;
                        return (null === (t = this.chatEntranceConfig) || void 0 === t ? void 0 : t.extra_info) || {}
                    }
                }, {
                    key: "objectId", get: function () {
                        return this.voucherToken
                    }
                }]), e
            }(m.Vue);
        Go([m.State], Ko.prototype, "klook", void 0), Go([Object(m.Prop)({
            type: Object,
            default: null
        })], Ko.prototype, "chatEntranceConfig", void 0), Go([Object(m.Prop)({
            type: String,
            default: ""
        })], Ko.prototype, "voucherToken", void 0);
        var Wo = Ko = Go([Object(m.Component)({components: {ChatEntrance: Qo.a}})], Ko),
            Jo = (o(929), o(930), Object(A.a)(Wo, (function () {
                var t = this, e = t.$createElement;
                return (t._self._c || e)("chat-entrance", {
                    ref: "chatEntrance",
                    class: ["voucher-chat-entrance", t.klook.platform],
                    attrs: {
                        klook: t.klook,
                        lang: t.klook.language,
                        platform: t.klook.platform,
                        axios: t.$axios,
                        route: t.$route,
                        href: t.$href,
                        "object-id": t.objectId,
                        "extra-info": t.extraInfo,
                        "is-from-app": t.klook.isKlookApp,
                        "previous-page-name": t.previousPageName,
                        "spm-name": "VoucherDetail"
                    },
                    on: {"chat-entrance-show": t.handleEntranceAppeared}
                })
            }), [], !1, null, "5715b9b0", null).exports), Xo = o(76), Zo = o(92);

        function tn(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(object);
                t && (o = o.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, o)
            }
            return e
        }

        function en(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? tn(Object(source), !0).forEach((function (e) {
                    Object(v.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : tn(Object(source)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        var on = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(_.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, nn = Object(Xo.f)(), rn = function (t, e, o) {
            return t.forEach((function (t) {
                t.header && (t.header.titleEn = t.header.title_en), t.header && t.header.title && (t.type = "panel");
                var n = t.components;
                n.forEach((function (r, c) {
                    r.style || (r.style = {background_color: ""}), "panel" !== t.type && (0 === c && (r.style.topRoundCorner = !0), c === n.length - 1 && (r.style.bottomRoundCorner = !0, r.style.bottomPadding = !0)), function t(e, o) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        e.style || (e.style = {background_color: ""});
                        var r = e.style.background_color || "#fff", c = {bgColor: r}, l = e.type;
                        switch (l) {
                            case"global_message":
                                e.type = "KlkAlert", e.componentData = Object.assign(c, {
                                    componentsSlot: !0,
                                    message: e.data.message,
                                    icon_url: e.data.icon_url
                                });
                                break;
                            case"voucher_header":
                                e.type = "VoucherHeader";
                                var data = e.data;
                                data.background_color_left === data.background_color_right ? e.componentData = Object.assign(c, {
                                    bgColor: data.background_color_left,
                                    logoUrl: data.logo,
                                    bgImage: data.background_image_url
                                }) : e.componentData = Object.assign(c, {
                                    logoUrl: data.logo,
                                    bgImage: "linear-gradient(".concat(data.background_color_left, ", ").concat(data.background_color_right, ")")
                                });
                                break;
                            case"voucher_title":
                                e.type = "VoucherTitle";
                                var d = e.data;
                                e.componentData = Object.assign(c, {
                                    activityName: d.activity_name,
                                    activityNameEn: d.activity_name_en,
                                    packageTitle: d.package_title,
                                    packageTitleEn: d.package_title_en,
                                    packageName: d.package_name,
                                    packageNameEn: d.package_name_en,
                                    haveViewDetails: d.have_view_details,
                                    packageDetails: d.package_details,
                                    transactionTags: d.transaction_tags
                                });
                                break;
                            case"spacing":
                                e.type = "VoucherSpacing";
                                var f = e.data;
                                e.componentData = Object.assign(c, {height: f.height || 0});
                                break;
                            case"divider":
                                e.type = "VoucherDivider", e.componentData = Object.assign(c, {});
                                break;
                            case"group":
                                e.type = "VoucherGroup";
                                var h = e.data;
                                e.componentData = Object.assign(c, {
                                    columnNumber: h.num_each_row,
                                    components: h.components.filter((function (component) {
                                        return w.includes(component.type)
                                    })).map((function (component) {
                                        return t(component, o)
                                    }))
                                });
                                break;
                            case"title_text":
                                e.type = "VoucherTitleTextComposed";
                                var v = e.data;
                                e.componentData = Object.assign(c, {
                                    title: v.title,
                                    titleEn: v.title_en,
                                    contentList: v.content_list
                                });
                                break;
                            case"notch_divider":
                                e.type = "VoucherNotchDivider";
                                break;
                            case"exp_translation":
                                e.type = "TranslationTips";
                                var _ = e.data;
                                e.componentData = Object.assign(c, {translationTips: _.translation_tips});
                                break;
                            case"ubr_dynamic_voucher":
                                e.type = "ubrVoucherCodePlatform";
                                var m = e.data;
                                e.componentData = Object.assign(c, {
                                    type: m.type,
                                    mainCode: !1,
                                    dataApi: m.url,
                                    codes: m.codes,
                                    showSubCodeFirst: !0
                                });
                                break;
                            case"pass_voucher_emot":
                                e.type = "voucherPassEmot";
                                var y = e.data;
                                e.componentData = Object.assign(c, {
                                    title: y.title || "",
                                    subtitle: y.sub_title || "",
                                    unitList: y.unit_list || []
                                });
                                break;
                            case"pass_voucher_fuji":
                                e.type = "voucherPassFuji";
                                var k = e.data;
                                e.componentData = Object.assign(c, {list: k.list || []});
                                break;
                            case"countdown_voucher":
                                e.type = "CountdownVoucher";
                                var j = e.data;
                                e.componentData = Object.assign(c, {
                                    type: j.type,
                                    data: j,
                                    style: {bottomRoundCorner: !0},
                                    status: j.status
                                });
                                break;
                            case"voucher_redeem_1":
                                e.type = "VoucherCodePlatform";
                                var C = e.data;
                                e.componentData = Object.assign(c, {
                                    type: C.type,
                                    mainCode: C.main_code,
                                    codes: C.voucher_code_infos,
                                    showSubCodeFirst: C.show_sub_code_first,
                                    diyStyle: C.style,
                                    codesForCard: ((null == C ? void 0 : C.voucher_sub_codes) || []).map((function (e) {
                                        return en({}, e.code || {}, {
                                            packageName: e.package_name || "",
                                            packageNameEn: e.package_name_en || "",
                                            components: (e.components || []).filter((function (component) {
                                                return P.includes(component.type)
                                            })).map((function (component) {
                                                return t(component, o)
                                            }))
                                        })
                                    }))
                                });
                                break;
                            case"voucher_redeem_2":
                                e.type = "VoucherTicketCode";
                                var x = e.data;
                                e.componentData = Object.assign(c, {
                                    title: x.title,
                                    titleEn: x.title_en,
                                    desc: x.redeem_desc,
                                    codeGroups: x.groups
                                });
                                break;
                            case"service_staff":
                                e.type = "VoucherAttendantInfoPlatform";
                                var R = e.data;
                                e.componentData = Object.assign(c, {title: R.title, persons: R.people});
                                break;
                            case"supplier_info":
                                e.type = "VoucherSupplierInfo";
                                var T = e.data;
                                e.componentData = Object.assign(c, {
                                    title: T.title,
                                    imgUrl: T.image_url,
                                    content: T.content
                                });
                                break;
                            case"markdown":
                                e.type = "VoucherMarkdown";
                                var S = e.data;
                                e.componentData = Object.assign(c, {content: Object(O.a)(S.render_obj)});
                                break;
                            case"image":
                                e.type = "VoucherImageContainerPlatform";
                                var D = e.data;
                                e.componentData = Object.assign(c, {images: D.images});
                                break;
                            case"map":
                                e.type = "VoucherMapPlatform";
                                var E = e.data;
                                e.componentData = Object.assign(c, {mapUrl: E.map_box_image_url, location: E.location});
                                break;
                            case"contact_us":
                                e.type = "VoucherContactUs";
                                var A = e.data;
                                e.componentData = Object.assign(c, {
                                    klook: A.klook,
                                    merchant: A.merchant,
                                    askKlookArgs: {
                                        orderNo: A.klook && A.klook.ask_klook_args ? A.klook.ask_klook_args.order_no : "",
                                        bookingReferenceNo: A.klook && A.klook.ask_klook_args ? A.klook.ask_klook_args.booking_reference_no : ""
                                    },
                                    isPrint: o
                                });
                                break;
                            case"time_1":
                                e.type = "TimeOne";
                                var V = e.data;
                                e.componentData = Object.assign(c, {
                                    title: V.title,
                                    titleEn: V.title_en,
                                    timeList: V.date_time_list.map((function (time) {
                                        return {
                                            type: time.type,
                                            name: time.name,
                                            startDate: time.start_date,
                                            startTime: time.start_time,
                                            endDate: time.end_date,
                                            endTime: time.end_time
                                        }
                                    })),
                                    descList: V.desc_list
                                });
                                break;
                            case"time_2":
                                e.type = "TimeTwo";
                                var I = e.data;
                                e.componentData = Object.assign(c, {
                                    title: I.title,
                                    startDateTime: {
                                        title: I.start_date_time.title,
                                        date: I.start_date_time.date,
                                        startTime: I.start_date_time.start_time,
                                        endTime: I.start_date_time.end_time
                                    },
                                    endDateTime: {
                                        title: I.end_date_time.title,
                                        date: I.end_date_time.date,
                                        startTime: I.end_date_time.start_time,
                                        endTime: I.end_date_time.end_time
                                    },
                                    duration: I.duration
                                });
                                break;
                            case"location_1":
                                e.type = "LocationOne";
                                var $ = e.data;
                                e.componentData = Object.assign(c, {
                                    title: $.title,
                                    titleEn: $.titleEn,
                                    location: $.location,
                                    descList: $.desc_list
                                });
                                break;
                            case"highlight_hint":
                                e.type = "HighlightHint";
                                var L = e.data;
                                e.componentData = Object.assign(c, {
                                    title: L.title,
                                    content: L.content,
                                    bgColor: L.style.background_color,
                                    textAlign: L.style.text_align,
                                    borderRadius: L.style.border_radius,
                                    fontColor: L.style.font_color
                                });
                                break;
                            case"image_show":
                                e.type = "ImageShow";
                                var M = e.data;
                                e.componentData = Object.assign(c, {imageUrl: M.image, imageAlign: M.style.align_x});
                                break;
                            case"location_2":
                                e.type = "LocationTwo";
                                var N = e.data;
                                e.componentData = Object.assign(c, {
                                    locationList: N.locations.map((function (t) {
                                        return {
                                            title: t.title, infoList: t.info_list.map((function (t) {
                                                return {title: t.title, content: t.content}
                                            }))
                                        }
                                    }))
                                });
                                break;
                            case"passenger":
                                e.type = "TravelerInfoPlatform";
                                var B = e.data;
                                e.componentData = Object.assign(c, {
                                    title: B.title,
                                    passengers: B.passengers.map((function (t) {
                                        return {name: t.name, seat: t.seat, type: t.type, infoList: t.info_list}
                                    }))
                                });
                                break;
                            case"itinerary_1":
                                e.type = "VoucherTrainsTravelPlatform";
                                var F = e.data;
                                e.componentData = Object.assign(c, {
                                    itineraries: F.itineraries.map((function (t) {
                                        return {
                                            itineraryTitle: t.itinerary_title,
                                            fromStation: t.from_station,
                                            toStation: t.to_station,
                                            departureDateTime: t.departure_date_time,
                                            arrivalDateTime: t.arrival_date_time,
                                            trainNumber: t.train_number,
                                            seatClass: t.seat_class,
                                            durationMinutes: t.duration_minutes,
                                            fareInfo: t.fare_info.map((function (t) {
                                                return {
                                                    fromStation: t.from_station,
                                                    toStation: t.to_station,
                                                    departureDateTime: t.departure_date_time,
                                                    arrivalDateTime: t.arrival_date_time,
                                                    trainNumber: t.train_number,
                                                    durationMinutes: t.duration_minutes,
                                                    trainLogo: t.train_logo
                                                }
                                            }))
                                        }
                                    }))
                                });
                                break;
                            case"itinerary_2":
                                e.type = "TrainsTravelTwoDesktop";
                                var H = e.data;
                                e.componentData = Object.assign(c, {
                                    fromStation: H.from_station,
                                    toStation: H.to_station,
                                    departureDateTime: H.departure_date_time,
                                    arrivalDateTime: H.arrival_date_time,
                                    trainNumber: H.train_number,
                                    seatClass: H.seat_class,
                                    durationMinutes: H.duration_minutes,
                                    timetableArgs: {
                                        fromStationCode: H.timetable_args.from_station_code,
                                        toStationCode: H.timetable_args.to_station_code,
                                        trainCode: H.timetable_args.train_code,
                                        trainNo: H.timetable_args.train_no,
                                        trainDate: H.timetable_args.train_date
                                    }
                                });
                                break;
                            case"exp_itinerary":
                                e.type = "VoucherExpItinerary";
                                var U = e.data;
                                e.componentData = Object.assign(c, {
                                    itineraries: U.itinerary,
                                    isPrint: o,
                                    pickupInfos: n
                                });
                                break;
                            case"pick_up_meet_up":
                                e.type = "VoucherExpItinerary";
                                var z = e.data, Y = z.pick_up_meet_up, Q = Y.departure_return,
                                    G = void 0 === Q ? [] : Q, K = Y.pois, W = void 0 === K ? [] : K, J = Y.package_id,
                                    X = void 0 === J ? 0 : J, Z = Y.departure_more, tt = void 0 === Z ? "" : Z;
                                e.componentData = Object.assign(c, {
                                    componentType: "pick_up_meet_up",
                                    isPrint: o,
                                    itineraries: {package_id: X, days: G, departure_more: tt, pois: {poi_data: W}},
                                    pickupInfos: n
                                });
                                break;
                            case"pick_up_meet_up_v2":
                                e.type = "VoucherExpItinerary";
                                var et = e.data, ot = et.pick_up_meet_up, nt = ot.departure_return,
                                    at = void 0 === nt ? [] : nt, it = ot.pois, ct = void 0 === it ? [] : it,
                                    st = ot.package_id, lt = void 0 === st ? 0 : st, ut = ot.departure_more,
                                    pt = void 0 === ut ? "" : ut;
                                e.componentData = Object.assign(c, {
                                    componentType: "pick_up_meet_up_v2",
                                    isPrint: o,
                                    itineraries: {package_id: lt, days: at, departure_more: pt, pois: {poi_data: ct}},
                                    pickupInfos: n
                                });
                                break;
                            case"dynamic_voucher_code":
                                e.type = "DynamicVoucherCode";
                                var ft = e.data;
                                e.componentData = Object.assign(c, {
                                    timeBannerConfig: ft.time_banner_config,
                                    textList: ft.text_list,
                                    voucherCodeInfo: ft.voucher_code_info
                                });
                                break;
                            case"event_dynamic_voucher_v1":
                                e.type = "EventDynamicVoucher";
                                var ht = e.data || {}, vt = ht.display_config || {}, _t = vt.auto_refresh_config || {};
                                e.componentData = Object.assign(c, {
                                    timeBannerConfig: vt.time_banner_config,
                                    needAutoRefresh: _t.need_auto_refresh,
                                    refreshUrl: _t.auto_refresh_url,
                                    refreshFailedText: _t.auto_refresh_failed_text,
                                    expireTime: vt.expire_time,
                                    voucherCodeList: ht.voucher_codes || []
                                })
                        }
                        return e
                    }(r, e, o)
                }))
            })), t
        }, an = function (t) {
            var e = [], o = !1;
            t.containers.forEach((function (t) {
                if (t.anchor && "" !== t.anchor.title) {
                    var n = {title: t.anchor.title, titleEn: t.anchor.title_en};
                    e.push(n)
                }
                t.components.forEach((function (component) {
                    "voucher_redeem_1" !== component.type && "ubr_dynamic_voucher" !== component.type && "countdown_voucher" !== component.type || (o = !0)
                }))
            }));
            var n = t.voucher_level || 0, r = t.redeem_type || 0, c = t.redeem_item_list || [], l = t.isPrint || !1,
                d = t.voucherToken || "", f = t.custom || {}, h = t.not_show_download || !1, v = function () {
                    for (var t, e, o, n, r, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], l = c || [], d = null, f = 0; f < l.length; f++) {
                        var element = l[f],
                            h = null !== (t = null == element ? void 0 : element.components) && void 0 !== t ? t : [],
                            data = h.find((function (t) {
                                var e, o;
                                return !!(null !== (o = null === (e = t.data) || void 0 === e ? void 0 : e.pick_up_meet_up) && void 0 !== o ? o : null)
                            }));
                        if (data) {
                            var v = null !== (n = null === (o = null === (e = data.data) || void 0 === e ? void 0 : e.pick_up_meet_up) || void 0 === o ? void 0 : o.departure_return) && void 0 !== n ? n : [],
                                _ = v.find((function (t) {
                                    return !!t.pick_up_info
                                }));
                            d = null !== (r = null == _ ? void 0 : _.pick_up_info) && void 0 !== r ? r : null;
                            break
                        }
                    }
                    return d
                }(t.containers), _ = t.disable_add_apple_wallet || !1, m = t.chat_entrance_config || null,
                y = t.page_tracker || {};
            return {
                tncTip: t.tou_tips,
                voucherContainers: rn(t.containers, l, v),
                showQrCodeNav: o,
                anchorList: e,
                isPrint: l,
                voucherToken: d,
                customMeta: f,
                redeemType: r,
                voucherLevel: n,
                redeemItemList: c,
                notShowDownload: h,
                disableAddAppleWallet: _,
                chatEntranceConfig: m,
                pageTracker: y
            }
        }, cn = function (t, e, o) {
            R.run(o, (function (o) {
                var n, r;
                if (!o.success) {
                    var c = null === (n = null == t ? void 0 : t.req) || void 0 === n ? void 0 : n.logquery;
                    c && c.service({
                        timestamp: Date.now(),
                        level: o.level,
                        message: JSON.stringify(en({}, e, {
                            platform: null === (r = null == t ? void 0 : t.req) || void 0 === r ? void 0 : r.platform,
                            action: o.action,
                            message: o.message,
                            postData: {}
                        })),
                        tag: "voucher web",
                        requestId: e.requestId
                    }, {headers: {"X-Platform": "ssrwebvoucher"}})
                }
            }))
        }, sn = function (t) {
            function e() {
                var t;
                return Object(c.a)(this, e), (t = Object(d.a)(this, Object(f.a)(e).apply(this, arguments))).voucherContainers = [], t.tncTip = "", t.anchorList = [], t.showQrCodeNav = !1, t.isOfflineHeaderVisible = !1, t.isPrint = !1, t.notShowDownload = !1, t.voucherToken = "", t.mpView = !1, t.customMeta = {}, t.isShowMaskContent = !1, t.disableAddAppleWallet = !1, t.chatEntranceConfig = null, t.redeemType = 0, t.voucherLevel = 0, t.redeemItemList = [], t.pageTracker = {}, t.isErrorTip = !1, t.errorMsg = {}, t
            }

            var o;
            return Object(h.a)(e, t), Object(l.a)(e, [{
                key: "handleToggleEvent", value: function (t) {
                    this.isShowMaskContent = t
                }
            }, {
                key: "handleEntranceAppeared", value: function () {
                }
            }, {
                key: "grounpTitleClick", value: function (t) {
                    var e, o, n = t.group_id, r = void 0 === n ? 0 : n,
                        data = this.voucherContainers.find((function (t) {
                            return t.components.some((function (t) {
                                var e, o,
                                    n = null !== (o = null === (e = t.componentData) || void 0 === e ? void 0 : e.componentType) && void 0 !== o ? o : "";
                                return "pick_up_meet_up" === n || "pick_up_meet_up_v2" === n
                            }))
                        }));
                    if (r) {
                        var c = "#group_".concat(r);
                        this.menuChange(null !== (o = null === (e = null == data ? void 0 : data.header) || void 0 === e ? void 0 : e.title_en) && void 0 !== o ? o : "", c)
                    }
                }
            }, {
                key: "asyncData", value: (o = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var o, n, r, c, l, d, f, h, v, _, m, y, O, k, j, C, w, P, x, R, T, S, D, E, A, V, I, $, L, M, N, B,
                        F, H, U, z, Y, Q, G, K, W, J, X, Z, tt, et, ot, nt, at, it, ct, st, lt, ut;
                    return regeneratorRuntime.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                if (!(H = null === (o = null == e ? void 0 : e.req) || void 0 === o ? void 0 : o.requestBody)) {
                                    t.next = 7;
                                    break
                                }
                                return cn(e, {
                                    page: "".concat(e.req.headers && e.req.headers.host, " + ").concat(e.req.url),
                                    api: "/web3/voucher-for-pdf",
                                    requestId: H.requestId,
                                    type: "pdf",
                                    templateName: null == H ? void 0 : H.template_name,
                                    voucherToken: (null === (n = null == e ? void 0 : e.params) || void 0 === n ? void 0 : n.voucher_token) || "",
                                    voucherTitle: Object(Xo.h)(H)
                                }, H), H.isPrint = !0, t.abrupt("return", an(H));
                            case 7:
                                return t.next = 9, e.$axios.$get("/v1/usrcsrv/voucher", {params: {voucher_token: e.params.voucher_token}}, {headers: {"X-Klook-Request-Id": nn}});
                            case 9:
                                if (!(U = t.sent).success) {
                                    t.next = 17;
                                    break
                                }
                                return z = U.result, cn(e, {
                                    page: "".concat((null === (r = null == e ? void 0 : e.req) || void 0 === r ? void 0 : r.headers) && (null === (l = null === (c = null == e ? void 0 : e.req) || void 0 === c ? void 0 : c.headers) || void 0 === l ? void 0 : l.host), " + ").concat(null === (d = null == e ? void 0 : e.req) || void 0 === d ? void 0 : d.url),
                                    api: "/v1/usrcsrv/voucher",
                                    requestId: nn,
                                    type: "web",
                                    templateName: null == H ? void 0 : H.template_name,
                                    voucherToken: (null === (f = null == e ? void 0 : e.params) || void 0 === f ? void 0 : f.voucher_token) || "",
                                    voucherTitle: Object(Xo.h)(z)
                                }, z), z.voucherToken = (null === (h = null == e ? void 0 : e.params) || void 0 === h ? void 0 : h.voucher_token) || "", t.abrupt("return", an(z));
                            case 17:
                                if (Y = null === (v = null == e ? void 0 : e.req) || void 0 === v ? void 0 : v.logquery, Q = (null === (m = null === (_ = null == e ? void 0 : e.req) || void 0 === _ ? void 0 : _.headers) || void 0 === m ? void 0 : m.cookie) || "", G = Q.match(/_pt=([^;]+)/g), K = {
                                    count: G ? G.length : 0,
                                    matches: G ? G.map((function (t) {
                                        return t.split("=")[1].slice(-8)
                                    })) : []
                                }, Y && Y.service({
                                    timestamp: Date.now(),
                                    level: "F",
                                    message: JSON.stringify({
                                        platform: null === (y = null == e ? void 0 : e.req) || void 0 === y ? void 0 : y.platform,
                                        page: "".concat((null === (O = null == e ? void 0 : e.req) || void 0 === O ? void 0 : O.headers) && (null === (j = null === (k = null == e ? void 0 : e.req) || void 0 === k ? void 0 : k.headers) || void 0 === j ? void 0 : j.host)).concat(null === (C = null == e ? void 0 : e.req) || void 0 === C ? void 0 : C.url),
                                        api: "/voucher",
                                        action: "async data get request",
                                        message: "async data get request failed",
                                        voucherToken: null === (w = null == e ? void 0 : e.params) || void 0 === w ? void 0 : w.voucher_token,
                                        requestId: nn,
                                        isKlookApp: null === (P = null == e ? void 0 : e.req) || void 0 === P ? void 0 : P.isKlookApp,
                                        deviceId: (null === (x = null == e ? void 0 : e.app) || void 0 === x ? void 0 : x.$cookies.get("kepler_id")) || null,
                                        userAgent: (null === (T = null === (R = null == e ? void 0 : e.req) || void 0 === R ? void 0 : R.headers) || void 0 === T ? void 0 : T["user-agent"]) || null,
                                        ptCount: K.count,
                                        ptString: K.matches.join(", "),
                                        errorCode: (null === (S = null == U ? void 0 : U.error) || void 0 === S ? void 0 : S.code) || null,
                                        errorReason: Object(Xo.c)(null == U ? void 0 : U.error)
                                    }),
                                    tag: "voucher web",
                                    requestId: nn
                                }, {headers: {"X-Platform": "ssrwebvoucher"}}), W = U.error, J = U.result, !W || "040001" !== W.code) {
                                    t.next = 40;
                                    break
                                }
                                if (X = J.domain, Z = J.order_channel, tt = J.is_guest_checkout, et = J.language, ot = Object(Zo.b)(et), nt = encodeURIComponent(e.req.url), at = tt ? e.app.$href("/guest_booking?signin_jump=".concat(nt).concat("guest.klook.com" === X && 11 === Z ? "&f_source_type=express_check_out" : ""), ot, X) : e.app.$href("/signin/?signin_jump=".concat(nt), ot, X), !(K.count > 1 && "app_webview" !== (null === (D = null == e ? void 0 : e.query) || void 0 === D ? void 0 : D.redirect_flag))) {
                                    t.next = 37;
                                    break
                                }
                                return it = e.req.url, ct = e.req.url.includes("?") ? it + "&redirect_flag=app_webview" : it + "?redirect_flag=app_webview", st = encodeURIComponent(ct), lt = "/v1/webbffapi/web-utils/clear-rootdomain-cookies?redirect=".concat(st), Y && Y.service({
                                    timestamp: Date.now(),
                                    level: "F",
                                    message: JSON.stringify({
                                        platform: null === (E = null == e ? void 0 : e.req) || void 0 === E ? void 0 : E.platform,
                                        page: "".concat((null === (A = null == e ? void 0 : e.req) || void 0 === A ? void 0 : A.headers) && (null === (I = null === (V = null == e ? void 0 : e.req) || void 0 === V ? void 0 : V.headers) || void 0 === I ? void 0 : I.host)).concat(null === ($ = null == e ? void 0 : e.req) || void 0 === $ ? void 0 : $.url),
                                        action: "clear rootdomain token",
                                        message: "redirect for removing rootdomain _pt",
                                        voucherToken: null === (L = null == e ? void 0 : e.params) || void 0 === L ? void 0 : L.voucher_token,
                                        requestId: nn,
                                        isKlookApp: null === (M = null == e ? void 0 : e.req) || void 0 === M ? void 0 : M.isKlookApp,
                                        deviceId: (null === (N = null == e ? void 0 : e.app) || void 0 === N ? void 0 : N.$cookies.get("kepler_id")) || null,
                                        userAgent: (null === (F = null === (B = null == e ? void 0 : e.req) || void 0 === B ? void 0 : B.headers) || void 0 === F ? void 0 : F["user-agent"]) || null,
                                        jumpUrl: ct
                                    }),
                                    tag: "voucher web",
                                    requestId: nn
                                }, {headers: {"X-Platform": "ssrwebvoucher"}}), e.status = 302, e.redirect(lt), t.abrupt("return");
                            case 37:
                                return e.status = 302, e.redirect(at), t.abrupt("return");
                            case 40:
                                if (!W || "P50228" !== W.code) {
                                    t.next = 45;
                                    break
                                }
                                return e.status = 302, e.redirect("/en-SG/guest_booking"), t.abrupt("return");
                            case 45:
                                if (ut = ["040002", "1000001"], !W || !ut.includes(W.code)) {
                                    t.next = 48;
                                    break
                                }
                                return t.abrupt("return", {isErrorTip: !0, errorMsg: {msg: W.message}});
                            case 48:
                                e.error({statusCode: 404});
                            case 49:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                }))), function (t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "mounted", value: function () {
                    var t, e;
                    this.$trackGalileoPageLoad({
                        page_data: y.a.fromObject({
                            voucher_id: this.voucherToken,
                            viewer_role: (null === (e = null === (t = this.pageTracker) || void 0 === t ? void 0 : t.ext) || void 0 === e ? void 0 : e.viewer_role) || ""
                        })
                    })
                }
            }, {
                key: "disableLinkMP", value: function (t) {
                    this.chkMpView() && (t.onclick = function () {
                        return !1
                    })
                }
            }, {
                key: "head", value: function () {
                    var t, e, o, n,
                        r = (null === (e = null === (t = this.pageTracker) || void 0 === t ? void 0 : t.ext) || void 0 === e ? void 0 : e.viewer_role) || "",
                        c = {bodyAttrs: {"data-spm-page": "Voucher_Detail?oid=voucher_".concat(this.voucherToken, "&ext=").concat(encodeURIComponent(JSON.stringify({viewer_role: r})))}};
                    return c.meta = [this.$robots("noindex,nofollow")], c.link = [{
                        rel: "icon",
                        type: "image/png",
                        href: (null === (o = this.customMeta) || void 0 === o ? void 0 : o.custom_favicon) || "https://res.klook.com/image/upload/v1640249902/r0cllybxt5t5eh6yhnu7.png"
                    }], c.title = (null === (n = this.customMeta) || void 0 === n ? void 0 : n.custom_browser_tab_title) || this.$t("global.seo.title"), c
                }
            }, {
                key: "chkMpView", value: function () {
                    var t = navigator.userAgent, e = "";
                    return /miniProgram/i.test(t) && /micromessenger/i.test(t) ? e = "weixin" : /swan/i.test(t) ? e = "baidu" : /toutiaomicroapp/i.test(t) ? e = "toutiao" : t.includes("xhsminiapp") && (e = "xiaohongshu"), e
                }
            }, {
                key: "menuChange", value: function (menu) {
                    var t = this, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        o = document.querySelector('div[data-anchor="'.concat(menu.toString(), '"]')),
                        n = this.$refs[menu];
                    n && n[0].handleOpen(), setTimeout((function () {
                        t.$nextTick((function () {
                            var t, n = 0;
                            if (e) {
                                var r = null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.parentNode;
                                n = ((null == r ? void 0 : r.offsetTop) || 0) + 80
                            }
                            var c = (null == o ? void 0 : o.offsetTop) || 0, l = c > 40 ? c - 40 : c;
                            window.scrollTo({top: l + n, left: 0, behavior: "smooth"})
                        }))
                    }), 200)
                }
            }, {
                key: "getAnchor", value: function (t) {
                    return t.anchor && t.anchor.title_en ? t.anchor.title_en.toString() : ""
                }
            }, {
                key: "getVoucherComponentBind", value: function (component) {
                    var t = (null == component ? void 0 : component.componentData) || {};
                    return ["VoucherCodePlatform", "ubrVoucherCodePlatform"].includes(null == component ? void 0 : component.type) && (t.voucherToken = this.voucherToken), t
                }
            }, {
                key: "disableAppleWallet", get: function () {
                    return this.disableAddAppleWallet
                }
            }]), e
        }(m.Vue);
        on([Object(m.State)((function (t) {
            return t.klook.platform
        }))], sn.prototype, "platform", void 0), on([Object(m.Provide)("disableAppleWallet")], sn.prototype, "disableAppleWallet", null);
        var ln = sn = on([Object(m.Component)({
            layout: "voucher-default",
            components: {
                AccountsNotMatch: $.a,
                KlkLocalAlert: V,
                Markdown: I.a,
                VoucherMainSection: Q.a,
                VoucherNotchDivider: G.a,
                VoucherHeader: K.a,
                VoucherTitle: W.a,
                ubrVoucherCodePlatform: lt,
                VoucherCodePlatform: tt,
                CountdownVoucher: at,
                VoucherTicketCode: vt,
                VoucherPanel: gt,
                VoucherContactUs: Ct,
                VoucherTnc: Rt,
                TravelerInfoPlatform: Tt.a,
                HighlightHint: Vt,
                ImageShow: Mt,
                LocationOne: St.a,
                LocationTwo: Ft,
                TimeOne: Ht.a,
                TimeTwo: Gt,
                QrCodeNav: Xt,
                VoucherMenuNav: ie,
                VoucherTrainsTravelPlatform: _e,
                TrainsTravelTwoDesktop: Ce,
                VoucherImageContainerPlatform: ue,
                VoucherGroup: pe.a,
                VoucherDivider: de.a,
                VoucherSupplierInfo: we.a,
                VoucherAttendantInfoPlatform: Pe.a,
                VoucherMarkdown: De,
                VoucherMapPlatform: $e,
                VoucherTitleTextComposed: Le.a,
                VoucherSpacing: ut.a,
                VoucherExpItinerary: Ye,
                OfflineHeader: F,
                TranslationTips: Y,
                VoucherPassEmot: Je,
                VoucherPassFuji: eo,
                DynamicVoucherCode: To,
                EventDynamicVoucher: Yo,
                VoucherChatEntrance: Jo
            },
            middleware: ["voucherDeeplinkRedirect"]
        })], sn), un = (o(931), Object(A.a)(ln, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.isErrorTip ? o("AccountsNotMatch", {attrs: {"error-msg": t.errorMsg}}) : o("div", {
                staticClass: "voucher_detail new-klook-ui",
                class: {mp_style: t.mpView}
            }, ["mobile" === t.platform && !t.isPrint && t.redeemType ? o("OfflineHeader", {
                staticClass: "voucher_detail__offline-header",
                attrs: {"voucher-token": t.voucherToken, level: t.voucherLevel, data: t.redeemItemList}
            }) : t._e(), t._v(" "), t._l(t.voucherContainers, (function (e, n) {
                return o("voucher-main-section", {
                    key: n,
                    attrs: {
                        "with-shadow": e.style.have_shadow,
                        "page-break": !!e.style.pagination,
                        anchor: t.getAnchor(e)
                    }
                }, [e.header && e.header.title ? [o("voucher-panel", {
                    ref: t.getAnchor(e),
                    refInFor: !0,
                    class: ["voucher_detail__component--bottom_padding", "voucher_detail__component--top_radius", "voucher_detail__component--bottom_radius"],
                    attrs: {
                        collapsable: e.style.collapsable,
                        collapsed: e.style.collapsed,
                        title: e.header.title,
                        "title-en": e.header.titleEn
                    },
                    scopedSlots: t._u([{
                        key: "content", fn: function () {
                            return t._l(e.components, (function (e, n) {
                                return o(e.type, t._b({
                                    key: n,
                                    tag: "Component",
                                    staticClass: "voucher_panel__component",
                                    on: {grounpTitleClick: t.grounpTitleClick, toggleEncryptMask: t.handleToggleEvent}
                                }, "Component", Object.assign({}, t.getVoucherComponentBind(e), {isShowMaskContent: t.isShowMaskContent}), !1))
                            }))
                        }, proxy: !0
                    }], null, !0)
                })] : [t._l(e.components, (function (e, n) {
                    return [e.componentData && e.componentData.componentsSlot ? ["KlkAlert" === e.type ? o("klk-local-alert", {
                        key: n,
                        attrs: {"icon-url": e.componentData.icon_url, theme: "light", type: "warning"},
                        scopedSlots: t._u([{
                            key: "message", fn: function () {
                                return [o("Markdown", {attrs: {content: e.componentData.message}})]
                            }, proxy: !0
                        }], null, !0)
                    }) : t._e()] : "TranslationTips" === e.type ? [t.isPrint ? t._e() : o("TranslationTips", t._b({key: n}, "TranslationTips", e.componentData, !1))] : [o(e.type, t._b({
                        key: n,
                        tag: "Component",
                        class: [{"voucher_detail__component--bottom_padding": e.style.bottomPadding}, {"voucher_detail__component--top_radius": e.style.topRoundCorner}, {"voucher_detail__component--bottom_radius": e.style.bottomRoundCorner}],
                        attrs: {"voucher-token": t.voucherToken},
                        on: {toggleEncryptMask: t.handleToggleEvent}
                    }, "Component", Object.assign({}, e.componentData, {isShowMaskContent: t.isShowMaskContent}), !1))]]
                }))]], 2)
            })), t._v(" "), t.tncTip ? o("voucher-main-section", [o("voucher-tnc", {attrs: {tnc: t.tncTip}})], 1) : t._e(), t._v(" "), "mobile" === t.platform && t.anchorList.length > 0 ? o("VoucherMenuNav", {
                attrs: {"menu-list": t.anchorList},
                on: {menuChange: t.menuChange}
            }) : t._e(), t._v(" "), "mobile" === t.platform && !0 === t.showQrCodeNav ? o("QrCodeNav") : t._e(), t._v(" "), t.chatEntranceConfig && t.chatEntranceConfig.show_chat_entrance ? o("VoucherChatEntrance", {
                attrs: {
                    "chat-entrance-config": t.chatEntranceConfig,
                    platform: t.platform,
                    "voucher-token": t.voucherToken
                }, on: {"chat-entrance-show": t.handleEntranceAppeared}
            }) : t._e(), t._v(" "), "desktop" !== t.platform || t.isPrint || t.notShowDownload ? t._e() : o("a", {
                staticClass: "voucher_detail__download",
                attrs: {href: "/v1/order/voucher/file?voucher_token=" + t.voucherToken, download: "Klook voucher.pdf"}
            }, [o("svg-icon", {
                staticClass: "voucher_detail__download_icon",
                attrs: {name: "common#klk-icon-download", size: "24", color: "#ff5722"}
            }), t._v("\n    " + t._s(t.$t("web_voucher.download")) + "\n  ")], 1)], 2)
        }), [], !1, null, null, null).exports), pn = Object(n.b)(un, {spm: "Voucher_Detail"});
        e.default = pn
    }, 399: function (t, e, o) {
        "use strict";
        o(62);
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, _ = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
            }

            return Object(d.a)(e, t), Object(r.a)(e, [{
                key: "styleObj", get: function () {
                    return {width: "100%", "background-color": this.bgColor, height: "".concat(4 * this.height, "px")}
                }
            }]), e
        }(h.Vue);
        v([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], _.prototype, "bgColor", void 0), v([Object(h.Prop)({
            type: Number,
            default: 0
        })], _.prototype, "height", void 0);
        var m = _ = v([Object(h.Component)({})], _), y = o(23), component = Object(y.a)(m, (function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {staticClass: "voucher_spacing", style: this.styleObj})
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 405: function (t, e, o) {
        "use strict";
        o.d(e, "b", (function () {
            return O
        })), o.d(e, "c", (function () {
            return k
        })), o.d(e, "a", (function () {
            return j
        }));
        var n = o(77), r = (o(46), o(31), o(37), o(42), o(15), o(9), o(24), o(393)), c = o.n(r), l = o(432), d = o.n(l),
            f = o(433), h = o.n(f);
        o(473), o(474), o(475), o(476), o(477), o(478), o(479), o(480), o(481), o(482), o(483), o(484), o(485), o(486);
        c.a.extend(d.a), c.a.extend(h.a);
        var v = {
            "en-AU": "en",
            "en-CA": "en",
            "en-GB": "en",
            "en-HK": "en",
            "en-IN": "en",
            "en-MY": "en",
            "en-NZ": "en",
            "en-PH": "en",
            "en-SG": "en",
            "en-US": "en",
            "ms-MY": "en",
            "ar-SA": "ar",
            "zh-CN": "zh-cn",
            "zh-HK": "zh-cn",
            "zh-TW": "zh-cn"
        }, _ = {
            1: {
                today: "book.same.day",
                tomorrow: "book.tomorrow",
                soldOut: "book.time.soldout",
                date: "book.time.text"
            },
            2: {
                today: "activity.v2.label.today_available",
                tomorrow: "book.tomorrow",
                soldOut: "activity.v2.label.activity_unavaiable",
                date: ""
            },
            3: {today: "jr.book.same.day", tomorrow: "jr.book.tomorrow", soldOut: "jr.book.sold.out", date: ""}
        }, m = {
            "h:mma": ["en", "en-AU", "en-CA", "en-GB", "en-HK", "en-IN", "en-MY", "ms-MY", "ar-SA", "en-NZ", "en-PH", "en-SG", "en-US"],
            "h:mm A": ["zh-CN", "zh-TW", "zh-HK"],
            "A h:mm": ["ko"],
            "HH:mm": ["th", "vi", "id", "ja"]
        };

        function y(t) {
            for (var e = Object.keys(m), o = 0; o < e.length; o += 1) {
                var n = e[o];
                if (m[n].includes(t)) return n
            }
            return ""
        }

        function O(t, e, o) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, r = t;
            c.a.locale(function (t) {
                return v[t] || t
            }(o)), "string" == typeof r && (r = new Date(r.replace(/-/g, "/")));
            var l = e("1339");
            return 2 === n && (r.getHours() > 0 || r.getMinutes() > 0) && (l += " HH:mm"), 3 === n && (l = e("1340")), 4 === n && (l = y(o)), 5 === n && (l += " ".concat(y(o))), c()(r).format(l)
        }

        function k(t, e, o) {
            var r = t.split(" "), c = r[0], l = r[1] || "";
            if (!c) return "";
            if (c === l) return O(c, e, o);
            if (l.includes("||")) {
                var d = l.split("||"), f = Object(n.a)(d, 2), h = f[0], v = f[1], _ = "".concat(c, " ").concat(h),
                    m = "".concat(c, " ").concat(v);
                return "".concat(O(_, e, o, 5), " - ").concat(O(m, e, o, 4))
            }
            return O(c, e, o, 5)
        }

        function j(t, e, o) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (!t) return {format: e(_[n].soldOut), isRecently: !1};
            var r = t;
            "string" == typeof t && (r = new Date(t.replace(/-/g, "/")));
            var l = c()(r).format("YYYY-MM-DD"), d = c()();
            return l === d.format("YYYY-MM-DD") ? {
                format: e(_[n].today),
                isRecently: !0
            } : l === d.add(1, "day").format("YYYY-MM-DD") ? {
                format: e(_[n].tomorrow),
                isRecently: !0
            } : _[n].date ? {format: e(_[n].date, [O(r, e, o)]), isRecently: !1} : {format: O(t, e, o), isRecently: !1}
        }
    }, 406: function (t, e, o) {
    }, 407: function (t, e, o) {
    }, 408: function (t, e, o) {
    }, 413: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = (o(464), o(10)), v = o(460),
            _ = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, m = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "render", value: function () {
                        var t = arguments[0], content = this.content;
                        if (!content) return null;
                        var e = Object(v.a)(content);
                        return t("div", {class: "markdown-content", domProps: {innerHTML: e}})
                    }
                }, {
                    key: "mounted", value: function () {
                        this.klook.platformMp && this.$miniApp.$interceptClick(this)
                    }
                }]), e
            }(h.Vue);
        _([h.State], m.prototype, "klook", void 0), _([Object(h.Prop)(String)], m.prototype, "content", void 0);
        var y = m = _([h.Component], m);
        o.d(e, "a", (function () {
            return y
        }))
    }, 426: function (t, e, o) {
    }, 427: function (t, e, o) {
    }, 428: function (t, e, o) {
        "use strict";
        var n = new (o(1).default)({});
        e.a = n
    }, 429: function (t, e, o) {
    }, 430: function (t, e, o) {
    }, 431: function (t, e, o) {
    }, 434: function (t, e, o) {
    }, 435: function (t, e, o) {
    }, 436: function (t, e, o) {
    }, 437: function (t, e, o) {
    }, 438: function (t, e, o) {
    }, 439: function (t, e, o) {
    }, 460: function (t, e, o) {
        "use strict";
        var n = o(541), r = o.n(n);
        e.a = function (t) {
            return r()(t, {allowedTags: r.a.defaults.allowedTags.concat(["img"])})
        }
    }, 464: function (t, e, o) {
    }, 467: function (t, e) {
    }, 468: function (t, e) {
    }, 470: function (t, e, o) {
        "use strict";
        var n = o(406);
        o.n(n).a
    }, 471: function (t, e, o) {
        "use strict";
        var n = o(407);
        o.n(n).a
    }, 472: function (t, e, o) {
        "use strict";
        var n = o(408);
        o.n(n).a
    }, 499: function (t, e, o) {
        "use strict";
        o(37), o(42);
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(428),
            _ = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, m = function (t) {
                function e() {
                    var t;
                    return Object(n.a)(this, e), (t = Object(c.a)(this, Object(l.a)(e).apply(this, arguments))).show = !1, t
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "toggle", value: function () {
                        this.show = !this.show, this.$emit("toggle", this.show)
                    }
                }]), e
            }(h.Vue), y = m = _([h.Component], m), O = (o(471), o(23)), k = Object(O.a)(y, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "encrypt-mask-box", on: {
                        click: function (e) {
                            return e.stopPropagation(), t.toggle(e)
                        }
                    }
                }, [o("svg-icon", {
                    attrs: {
                        name: t.show ? "common#icon-eye-open" : "common#icon-eye-close",
                        size: "20"
                    }
                })], 1)
            }), [], !1, null, "ee32d248", null).exports, j = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, C = function (t) {
                function e() {
                    var t;
                    return Object(n.a)(this, e), (t = Object(c.a)(this, Object(l.a)(e).apply(this, arguments))).show = !1, t
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "showEncryptMask", value: function (t) {
                        !this.show && t && (this.show = t)
                    }
                }, {
                    key: "mounted", value: function () {
                        v.a.$on("showEncryptMask", this.showEncryptMask)
                    }
                }, {
                    key: "beforeDestroy", value: function () {
                        v.a.$off("showEncryptMask")
                    }
                }, {
                    key: "styleObj", get: function () {
                        var t = {"background-color": this.bgColor};
                        return this.bgImage && (t["background-image"] = "url(".concat(this.bgImage, ")"), t["background-size"] = "contain", t["background-position"] = "right 8px center", t["background-repeat"] = "no-repeat", this.bgImage.includes("linear-gradient") && (t["background-image"] = this.bgImage, t["background-color"] = "")), t
                    }
                }]), e
            }(h.Vue);
        j([Object(h.Prop)({
            type: String,
            default: "#FF5722"
        })], C.prototype, "bgColor", void 0), j([Object(h.Prop)({
            type: String,
            default: ""
        })], C.prototype, "bgImage", void 0), j([Object(h.Prop)({
            type: String,
            default: ""
        })], C.prototype, "logoUrl", void 0);
        var w = C = j([Object(h.Component)({components: {EncryptMask: k}})], C),
            P = (o(472), Object(O.a)(w, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_header",
                    style: t.styleObj
                }, [t.logoUrl ? o("img", {
                    staticClass: "voucher_header__logo",
                    attrs: {alt: "voucher logo", src: t.logoUrl}
                }) : t._e(), t._v(" "), t.show ? o("EncryptMask", {
                    on: {
                        toggle: function (e) {
                            return t.$emit("toggleEncryptMask", e)
                        }
                    }
                }) : t._e()], 1)
            }), [], !1, null, null, null));
        e.a = P.exports
    }, 500: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(21), c = o(29), l = o(30), d = o(2), f = o(10), h = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, v = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            }

            return Object(l.a)(e, t), e
        }(f.Vue);
        h([Object(f.Prop)({
            type: String,
            default: ""
        })], v.prototype, "anchor", void 0), h([Object(f.Prop)({
            type: Boolean,
            default: !1
        })], v.prototype, "withShadow", void 0), h([Object(f.Prop)({
            type: Boolean,
            default: !1
        })], v.prototype, "pageBreak", void 0);
        var _ = v = h([f.Component], v), m = (o(470), o(23)), component = Object(m.a)(_, (function () {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "voucher_section",
                class: {"voucher_section--with_shadow": this.withShadow, "voucher_section--page_break": this.pageBreak},
                attrs: {"data-anchor": this.anchor}
            }, [this._t("default")], 2)
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 501: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(405),
            _ = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, m = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "formatDate", value: function (t) {
                        var e = this.klook.language;
                        return Object(v.b)(t, this.$t.bind(this), e, 1)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(h.Vue);
        _([Object(h.Prop)({type: String, default: ""})], m.prototype, "title", void 0), _([Object(h.Prop)({
            type: String,
            default: ""
        })], m.prototype, "titleEn", void 0), _([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], m.prototype, "timeList", void 0), _([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], m.prototype, "descList", void 0), _([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], m.prototype, "bgColor", void 0), _([h.State], m.prototype, "klook", void 0);
        var y = m = _([h.Component], m), O = (o(570), o(23)), component = Object(O.a)(y, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher-time-one",
                style: t.styleObj
            }, [t.title ? o("h5", [t._v(t._s(t.title)), t.titleEn !== t.title ? o("span", [t._v(t._s(t.titleEn))]) : t._e()]) : t._e(), t._v(" "), t._l(t.timeList, (function (time, e) {
                return ["day" === time.type ? o("div", {key: time.type + e}, [o("p", ["" !== time.name ? o("span", [t._v(t._s(time.name) + ":")]) : t._e(), t._v(t._s(t.formatDate(time.startDate)) + " " + t._s(time.startTime))])]) : "range" === time.type ? o("div", {key: e}, [o("p", ["" !== time.name ? o("span", [t._v(t._s(time.name) + ":")]) : t._e(), t._v(t._s(t.formatDate(time.startDate)) + " " + t._s(time.startTime) + " - " + t._s(t.formatDate(time.endDate)) + " " + t._s(time.endTime))])]) : "time_range" === time.type ? o("div", {key: e}, [o("p", ["" !== time.name ? o("span", [t._v(t._s(time.name) + ":")]) : t._e(), t._v(t._s(t.formatDate(time.startDate)) + " " + t._s(time.startTime) + " - " + t._s(time.endTime))])]) : t._e()]
            })), t._v(" "), t.descList && t.descList.length > 0 ? t._l(t.descList, (function (desc, e) {
                return o("div", {key: desc + e}, [o("p", [t._v(t._s(desc))])])
            })) : t._e()], 2)
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 502: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(413), _ = o(428),
            m = o(399), y = o(167), O = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, k = function (t) {
                function e() {
                    var t;
                    return Object(n.a)(this, e), (t = Object(c.a)(this, Object(l.a)(e).apply(this, arguments))).show = !1, t
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "onIsShowMaskContent", value: function (t) {
                        this.hasSensitiveInfo && (this.show = t)
                    }
                }, {
                    key: "formatPicExtension", value: function (t) {
                        var e = this.klook.webp;
                        return Object(y.b)(t, e)
                    }
                }, {
                    key: "formatContent", value: function (t) {
                        var e = t.is_sensitive, o = void 0 !== e && e, n = t.content_masked, r = void 0 === n ? "" : n,
                            c = t.content, content = void 0 === c ? "" : c;
                        return o ? this.show ? content : r : content
                    }
                }, {
                    key: "check", value: function () {
                        this.hasSensitiveInfo && _.a.$emit("showEncryptMask", !0)
                    }
                }, {
                    key: "mounted", value: function () {
                        this.check()
                    }
                }, {
                    key: "hasSensitiveInfo", get: function () {
                        return (this.contentList || []).some((function (t) {
                            return t.is_sensitive
                        }))
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(h.Vue);
        O([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], k.prototype, "bgColor", void 0), O([Object(h.Prop)({
            type: String,
            default: ""
        })], k.prototype, "title", void 0), O([Object(h.Prop)({
            type: String,
            default: ""
        })], k.prototype, "titleEn", void 0), O([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], k.prototype, "contentList", void 0), O([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], k.prototype, "isShowMaskContent", void 0), O([h.State], k.prototype, "klook", void 0), O([Object(h.Watch)("isShowMaskContent")], k.prototype, "onIsShowMaskContent", null);
        var j = k = O([Object(h.Component)({components: {Markdown: v.a, VoucherSpacing: m.a}})], k),
            C = (o(575), o(23)), component = Object(C.a)(j, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_title_text",
                    style: t.styleObj
                }, [t.title ? o("p", {staticClass: "voucher_title_text__title"}, [t._v("\n    " + t._s(t.title) + "\n    "), t.titleEn !== t.title ? o("span", [t._v(t._s(t.titleEn))]) : t._e()]) : t._e(), t._v(" "), t._l(t.contentList, (function (content, e) {
                    return o("div", {
                        key: e,
                        staticClass: "voucher_title_text__content"
                    }, [content.pre_icon_url ? o("div", {
                        staticClass: "voucher_title_text__icon",
                        style: {backgroundImage: "url(" + t.formatPicExtension(content.pre_icon_url) + ")"}
                    }) : t._e(), t._v(" "), o("Markdown", {attrs: {content: t.formatContent(content)}})], 1)
                }))], 2)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, 503: function (t, e) {
    }, 507: function (t, e) {
    }, 532: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(21), c = o(29), l = o(30), d = o(2), f = o(10), h = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, v = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            }

            return Object(l.a)(e, t), e
        }(f.Vue);
        h([Object(f.Prop)({type: String, default: ""})], v.prototype, "title", void 0), h([Object(f.Prop)({
            type: Array,
            default: function () {
                return []
            }
        })], v.prototype, "passengers", void 0), h([Object(f.Prop)({
            type: String,
            default: "#fff"
        })], v.prototype, "bgColor", void 0), h([f.State], v.prototype, "klook", void 0);
        var _ = v = h([Object(f.Component)({
            components: {
                desktop: function () {
                    return o.e(72).then(o.bind(null, 1131))
                }, mobile: function () {
                    return o.e(73).then(o.bind(null, 1132))
                }
            }
        })], v), m = o(23), component = Object(m.a)(_, (function () {
            var t = this.$createElement;
            return (this._self._c || t)(this.klook.platform, {
                tag: "Component",
                attrs: {title: this.title, passengers: this.passengers, "bg-color": this.bgColor}
            })
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 533: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, _ = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
            }

            return Object(d.a)(e, t), Object(r.a)(e, [{
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(h.Vue);
        v([Object(h.Prop)({type: String, default: ""})], _.prototype, "title", void 0), v([Object(h.Prop)({
            type: String,
            default: ""
        })], _.prototype, "titleEn", void 0), v([Object(h.Prop)({
            type: String,
            default: ""
        })], _.prototype, "location", void 0), v([Object(h.Prop)({
            type: Array, default: function () {
                return []
            }
        })], _.prototype, "descList", void 0), v([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], _.prototype, "bgColor", void 0);
        var m = _ = v([h.Component], _), y = (o(566), o(23)), component = Object(y.a)(m, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher-location-one",
                style: t.styleObj
            }, [t.title ? o("h6", [t._v(t._s(t.title)), t.titleEn !== t.title ? o("span", [t._v(t._s(t.titleEn))]) : t._e()]) : t._e(), t._v(" "), o("h5", [t._v(t._s(t.location))]), t._v(" "), t.descList && t.descList.length > 0 ? t._l(t.descList, (function (desc, e) {
                return o("p", {key: desc + e}, [t._v(t._s(desc))])
            })) : t._e()], 2)
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 534: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(21), c = o(29), l = o(30), d = o(2), f = o(10), h = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, v = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            }

            return Object(l.a)(e, t), e
        }(f.Vue);
        h([Object(f.Prop)({
            type: String,
            default: "#fff"
        })], v.prototype, "bgColor", void 0), h([Object(f.Prop)({
            type: String,
            default: ""
        })], v.prototype, "title", void 0), h([Object(f.Prop)({
            type: Array, default: function () {
                return []
            }
        })], v.prototype, "persons", void 0), h([f.State], v.prototype, "klook", void 0);
        var _ = v = h([Object(f.Component)({
            components: {
                desktop: function () {
                    return o.e(78).then(o.bind(null, 1135))
                }, mobile: function () {
                    return o.e(79).then(o.bind(null, 1136))
                }
            }
        })], v), m = o(23), component = Object(m.a)(_, (function () {
            var t = this.$createElement;
            return (this._self._c || t)(this.klook.platform, {
                tag: "Component",
                attrs: {"bg-color": this.bgColor, title: this.title, persons: this.persons}
            })
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 535: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(413), _ = o(399),
            m = o(167), y = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, O = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "formatPicExtension", value: function (t) {
                        var e = this.klook.webp;
                        return Object(m.b)(t, e)
                    }
                }, {
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(h.Vue);
        y([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], O.prototype, "bgColor", void 0), y([Object(h.Prop)({
            type: String,
            default: ""
        })], O.prototype, "title", void 0), y([Object(h.Prop)({
            type: String,
            default: ""
        })], O.prototype, "imgUrl", void 0), y([Object(h.Prop)({
            type: String,
            default: ""
        })], O.prototype, "content", void 0), y([h.State], O.prototype, "klook", void 0);
        var k = O = y([Object(h.Component)({components: {Markdown: v.a, VoucherSpacing: _.a}})], O),
            j = (o(576), o(23)), component = Object(j.a)(k, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_supplier_info",
                    style: t.styleObj
                }, [o("voucher-spacing", {attrs: {height: 4}}), t._v(" "), o("p", {staticClass: "voucher_supplier_info__title"}, [t._v(t._s(t.title))]), t._v(" "), o("div", {staticClass: "voucher_supplier_info__main"}, [t.imgUrl ? o("div", {
                    staticClass: "voucher_supplier_info__img",
                    style: {backgroundImage: "url(" + t.formatPicExtension(t.imgUrl) + ")"}
                }) : t._e(), t._v(" "), o("Markdown", {
                    staticClass: "voucher_supplier_info__content",
                    attrs: {content: t.content}
                })], 1)], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, 536: function (t, e, o) {
        "use strict";
        o(31);
        var n = o(173), r = o.n(n);
        o(704), o(249), o(55), o(56), o(9), o(46), o(91);

        function c() {
        }

        c.prototype.render = function (t) {
            var e, o, n = t.walker();
            for (this.buffer = "", this.lastOut = "\n"; e = n.next();) this[o = e.node.type] && this[o](e.node, e.entering);
            return console.log(this.allItems), this.buffer
        }, c.prototype.renderAst = function (t) {
            var e, o, n = t.walker();
            for (this.buffer = "", this.lastOut = "\n", this.allItems = []; e = n.next();) this[o = e.node.type] && this[o](e.node, e.entering);
            return function (t) {
                t && t.length > 0 && "title" != t[0].type && "section_title" != t[0].type && (t[0].props.margin_top = (t[0].props.margin_top || 0) + 16);
                return t
            }(this.allItems)
        }, c.prototype.out = function (t) {
            this.lit(t)
        }, c.prototype.lit = function (t) {
            this.buffer += t, this.lastOut = t
        }, c.prototype.cr = function () {
            "\n" !== this.lastOut && this.lit("\n")
        };
        var l = function (s) {
            switch (s) {
                case"&":
                    return "&amp;";
                case"<":
                    return "&lt;";
                case">":
                    return "&gt;";
                case'"':
                    return "&quot;";
                default:
                    return s
            }
        };
        var d = function (s, t) {
            var e = new RegExp('[&<>"]', "g"),
                o = new RegExp('&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});|[&<>"]', "gi");
            return e.test(s) ? t ? s.replace(o, l) : s.replace(e, l) : s
        }, f = /^javascript:|vbscript:|file:|data:/i, h = /^data:image\/(?:png|gif|jpeg|webp)/i, v = function (t) {
            return f.test(t) && !h.test(t)
        };

        function _(t) {
            (t = t || {}).softbreak = t.softbreak || "\n", this.disableTags = 0, this.lastOut = "\n", this.options = t, this.allItems = [], this._tag = void 0, this._props = {}, this._content = "", this._inImage = !1, this._order = 0
        }

        _.prototype = Object.create(c.prototype), _.prototype.text = function (t) {
            this.out(t.literal), this._inImage ? this._props.alt = t.literal : this._content += d(t.literal, !1)
        }, _.prototype.html_inline = function (t) {
            this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal)
        }, _.prototype.html_block = function (t) {
            this.cr(), this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal), this.cr()
        }, _.prototype.softbreak = function () {
            this.lit(this.options.softbreak), "paragraph" == this._tag || "item" == this._tag || this._tag, this._content += " "
        }, _.prototype.linebreak = function () {
            this.tag("br", [], !0), this.cr(), "paragraph" != this._tag && "item" != this._tag && "order_item" != this._tag || (this._content += "\n")
        }, _.prototype.link = function (t, e) {
            var o = this.attrs(t);
            e ? (this.options.safe && v(t.destination) || o.push(["href", d(t.destination, !0)]), t.title && o.push(["title", d(t.title, !0)]), this.tag("a", o)) : this.tag("/a");
            var n = this.attrs(t);
            e ? (this.options.safe && v(t.destination) || n.push(["href", d(t.destination, !0)]), t.title && n.push(["title", d(t.title, !0)]), this._content += this.getTagContent("a", n)) : this._content += this.getTagContent("/a")
        }, _.prototype.image = function (t, e) {
            e ? (0 === this.disableTags && (this.options.safe && v(t.destination) ? this.lit('<img src="" alt="') : this.lit('<img src="' + d(t.destination, !0) + '" alt="')), 0 === this.disableTags && ("paragraph" == this._tag && (this._inParagraph = !0, this.closeLastItem()), this._tag = "image", this._props.src = t.destination, this._inImage = !0), this.disableTags += 1) : (this.disableTags -= 1, 0 === this.disableTags && (t.title && this.lit('" title="' + d(t.title, !0)), this.lit('" />')), 0 === this.disableTags && (t.title && (this._props.title = t.title), this.closeLastItem(), this._inImage = !1, this._tag = "paragraph"))
        }, _.prototype.emph = function (t, e) {
            e ? (this.tag(e ? "em" : "/em"), 0 === this.disableTags && (this._content += this.getTagContent("em"))) : (this.tag(e ? "em" : "/em"), 0 === this.disableTags && (this._content += this.getTagContent("/em")))
        }, _.prototype.strong = function (t, e) {
            e ? (this.tag(e ? "strong" : "/strong"), 0 === this.disableTags && (this._content += this.getTagContent("strong"))) : (this.tag(e ? "strong" : "/strong"), 0 === this.disableTags && (this._content += this.getTagContent("/strong")))
        }, _.prototype.paragraph = function (t, e) {
            var o = t.parent.parent, n = this.attrs(t);
            null !== o && "list" === o.type || (e ? (this.cr(), this.tag("p", n)) : (this.tag("/p"), this.cr()), e ? this._tag = "paragraph" : this.closeLastItem())
        }, _.prototype.heading = function (t, e) {
            var o = "h" + t.level, n = this.attrs(t);
            e ? (this.cr(), this.tag(o, n)) : (this.tag("/" + o), this.cr()), e ? 6 == t.level ? this._tag = "section_title" : 1 == t.level ? this._tag = "title" : this._tag = "sub_title" : this.closeLastItem()
        }, _.prototype.code = function (t) {
            this.tag("code"), this.out(t.literal), this.tag("/code")
        }, _.prototype.code_block = function (t) {
            var e = t.info ? t.info.split(/\s+/) : [], o = this.attrs(t);
            e.length > 0 && e[0].length > 0 && o.push(["class", "language-" + d(e[0], !0)]), this.cr(), this.tag("pre"), this.tag("code", o), this.out(t.literal), this.tag("/code"), this.tag("/pre"), this.cr()
        }, _.prototype.thematic_break = function (t) {
            var e = this.attrs(t);
            this.cr(), this.tag("hr", e, !0), this.cr()
        }, _.prototype.block_quote = function (t, e) {
            var o = this.attrs(t);
            e ? (this.cr(), this.tag("blockquote", o), this.cr()) : (this.cr(), this.tag("/blockquote"), this.cr())
        }, _.prototype.list = function (t, e) {
            var o = "bullet" === t.listType ? "ul" : "ol", n = this.attrs(t);
            if (e) {
                var r = t.listStart;
                null !== r && 1 !== r && n.push(["start", r.toString()]), this.cr(), this.tag(o, n), this.cr()
            } else this.cr(), this.tag("/" + o), this.cr();
            if (e) this._list_type = o, this._open_list = !0; else if (this._list_type = void 0, this.allItems.length > 0) {
                var c = this.allItems[this.allItems.length - 1];
                "item" != c.type && "order_item" != c.type || (c.props.is_last = !0)
            }
        }, _.prototype.item = function (t, e) {
            var o = this.attrs(t);
            e ? this.tag("li", o) : (this.tag("/li"), this.cr()), e ? "ul" == this._list_type ? this._tag = "item" : this._tag = "order_item" : this.closeLastItem()
        }, _.prototype.custom_inline = function (t, e) {
            e && t.onEnter ? this.lit(t.onEnter) : !e && t.onExit && this.lit(t.onExit)
        }, _.prototype.custom_block = function (t, e) {
            this.cr(), e && t.onEnter ? this.lit(t.onEnter) : !e && t.onExit && this.lit(t.onExit), this.cr()
        }, _.prototype.out = function (s) {
            this.lit(d(s, !1))
        }, _.prototype.tag = function (t, e, o) {
            if (!(this.disableTags > 0)) {
                if (this.buffer += "<" + t, e && e.length > 0) for (var n, i = 0; void 0 !== (n = e[i]);) this.buffer += " " + n[0] + '="' + n[1] + '"', i++;
                o && (this.buffer += " /"), this.buffer += ">", this.lastOut = ">"
            }
        }, _.prototype.getTagContent = function (t, e, o) {
            if (this.disableTags > 0) return "";
            var n = "";
            if (n += "<" + t, e && e.length > 0) for (var r, i = 0; void 0 !== (r = e[i]);) n += " " + r[0] + '="' + r[1] + '"', i++;
            return o && (n += " /"), n += ">"
        }, _.prototype.closeLastItem = function () {
            if (this._tag) {
                if ("paragraph" != this._tag || "" != this._content.replace(/^\s|\s$/, "")) {
                    var t = {type: this._tag, content: this._content, props: this._props};
                    "order_item" == this._tag ? (this._order += 1, t.props.order = this._order) : this._order = 0, !this._open_list || "item" != this._tag && "order_item" != this._tag || (this._props.is_first = !0, this._open_list = !1), this.allItems.push(t)
                }
                this._tag = null, this._content = "", this._props = {}
            }
        }, _.prototype.attrs = function (t) {
            var e = [];
            if (this.options.sourcepos) {
                var o = t.sourcepos;
                o && e.push(["data-sourcepos", String(o[0][0]) + ":" + String(o[0][1]) + "-" + String(o[1][0]) + ":" + String(o[1][1])])
            }
            return e
        };
        o.d(e, "a", (function () {
            return k
        }));
        var m = new r.a.Converter;

        function y(t) {
            if ("paragraph" === t.type) {
                var e = /^<strong>(.+)<\/strong>$/.exec(t.content), o = /^<em>(.+)<\/em>$/.exec(t.content);
                if (e) return {type: "title", content: e[1].replace(/<\/?strong>/g, "")};
                if (o) return {type: "sub_title", content: o[1].replace(/<\/?em>/g, "")}
            }
            return t
        }

        function O(t, content, e) {
            return e ? "<".concat(t, ' class="').concat(e, '">').concat(content, "</").concat(t, ">") : "<".concat(t, ">").concat(content, "</").concat(t, ">")
        }

        function k(t, header) {
            if (!Array.isArray(t) || 0 === t.length) return "";
            var e = t[0];
            return header && ("paragraph" === e.type && e.content === "<strong>" + header + "</strong>" || "title" === e.type && e.content === header) && (t = t.slice(1)), function (t) {
                for (var e = [], i = 0, o = t.length; i < o; i++) {
                    var n = t[i];
                    "title" === n.type ? n.props && n.props.has_style ? e.push(O("h3", n.content, "has_style")) : e.push(O("h3", n.content)) : "sub_title" === n.type ? e.push(O("h4", n.content)) : "section_title" === n.type ? e.push(O("h4", n.content)) : "item" === n.type ? (n.props.is_first && e.push("<ul>"), e.push(O("li", n.content)), n.props.is_last && e.push("</ul>")) : "order_item" === n.type ? (n.props.is_first && e.push("<ol>"), e.push(O("li", n.content)), n.props.is_last && e.push("</ol>")) : "paragraph" === n.type ? t[i + 1] && "paragraph" === y(t[i + 1]).type ? e.push(O("p", n.content, "p_followed")) : e.push(O("p", n.content)) : "image" === n.type && (e.push('<img src="'.concat(n.props.src, '"')), n.props.alt && e.push(' alt="'.concat(n.props.alt, '" ')), n.props.title && e.push(' title="'.concat(n.props.title, '" ')), e.push(">"))
                }
                return e.join("")
            }(t)
        }

        m.setOption("tables", !0)
    }, 540: function (t, e, o) {
    }, 549: function (t, e) {
    }, 555: function (t, e, o) {
        "use strict";
        var n = o(426);
        o.n(n).a
    }, 556: function (t, e, o) {
    }, 557: function (t, e, o) {
    }, 558: function (t, e, o) {
        "use strict";
        var n = o(427);
        o.n(n).a
    }, 559: function (t, e, o) {
        "use strict";
        var n = o(429);
        o.n(n).a
    }, 560: function (t, e, o) {
        "use strict";
        var n = o(430);
        o.n(n).a
    }, 561: function (t, e, o) {
    }, 562: function (t, e, o) {
        "use strict";
        o(46), o(37), o(42), o(31);

        function n(t, e) {
            if (!t || !e) return !1;
            if (e.includes(" ")) throw new Error("className should not contain space.");
            return t.classList ? t.classList.contains(e) : (" " + t.className + " ").includes(" " + e + " ")
        }

        function r(t, e) {
            if (t) {
                for (var o = t.className, r = (e || "").split(" "), i = 0, c = r.length; i < c; i++) {
                    var l = r[i];
                    l && (t.classList ? t.classList.add(l) : n(t, l) || (o += " " + l))
                }
                t.classList || (t.className = o)
            }
        }

        function c(t, e) {
            if (t && e) {
                for (var o = e.split(" "), r = " " + t.className + " ", i = 0, c = o.length; i < c; i++) {
                    var l = o[i];
                    l && (t.classList ? t.classList.remove(l) : n(t, l) && (r = r.replace(" " + l + " ", " ")))
                }
                t.classList || (t.className = (r || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, ""))
            }
        }

        var l = {
            beforeEnter: function (t) {
                r(t, "collapse-transition"), t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.style.height = "0", t.style.paddingTop = 0, t.style.paddingBottom = 0
            }, enter: function (t) {
                t.dataset.oldOverflow = t.style.overflow, 0 !== t.scrollHeight ? (t.style.height = t.scrollHeight + "px", t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom) : (t.style.height = "", t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom), t.style.overflow = "hidden"
            }, afterEnter: function (t) {
                c(t, "collapse-transition"), t.style.height = "", t.style.overflow = t.dataset.oldOverflow
            }, beforeLeave: function (t) {
                t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.dataset.oldOverflow = t.style.overflow, t.style.height = t.scrollHeight + "px", t.style.overflow = "hidden"
            }, leave: function (t) {
                0 !== t.scrollHeight && (r(t, "collapse-transition"), t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0)
            }, afterLeave: function (t) {
                c(t, "collapse-transition"), t.style.height = "", t.style.overflow = t.dataset.oldOverflow, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom
            }
        };
        e.a = {
            name: "CollapseTransition", functional: !0, props: {appear: Boolean}, render: function (t, e) {
                var o = e.children, n = e.props;
                return t("transition", {on: l, props: {appear: n.appear}}, o)
            }
        }
    }, 563: function (t, e, o) {
    }, 564: function (t, e, o) {
    }, 565: function (t, e, o) {
    }, 566: function (t, e, o) {
        "use strict";
        var n = o(431);
        o.n(n).a
    }, 567: function (t, e, o) {
    }, 568: function (t, e, o) {
    }, 569: function (t, e, o) {
    }, 570: function (t, e, o) {
        "use strict";
        var n = o(434);
        o.n(n).a
    }, 571: function (t, e, o) {
    }, 572: function (t, e, o) {
    }, 573: function (t, e, o) {
    }, 574: function (t, e, o) {
    }, 575: function (t, e, o) {
        "use strict";
        var n = o(435);
        o.n(n).a
    }, 576: function (t, e, o) {
        "use strict";
        var n = o(436);
        o.n(n).a
    }, 577: function (t, e, o) {
        "use strict";
        var n = o(437);
        o.n(n).a
    }, 578: function (t, e, o) {
        "use strict";
        var n = o(438);
        o.n(n).a
    }, 579: function (t, e, o) {
        "use strict";
        var n = o(439);
        o.n(n).a
    }, 580: function (t, e, o) {
    }, 581: function (t, e, o) {
    }, 582: function (t, e, o) {
    }, 597: function (t, e, o) {
    }, 598: function (t, e, o) {
    }, 599: function (t, e, o) {
    }, 600: function (t, e, o) {
    }, 601: function (t, e, o) {
    }, 602: function (t, e, o) {
    }, 603: function (t, e, o) {
    }, 604: function (t, e, o) {
    }, 605: function (t, e, o) {
    }, 606: function (t, e, o) {
    }, 607: function (t, e, o) {
    }, 608: function (t, e, o) {
    }, 609: function (t, e, o) {
    }, 610: function (t, e, o) {
    }, 611: function (t, e, o) {
    }, 695: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(413), _ = o(536),
            m = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, y = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "style", value: function (t) {
                        var e = t.background_color_left, o = t.background_color_right, n = t.text_color,
                            style = "\n                      background: ".concat(e, ";\n                      background: -moz-linear-gradient(left,  ").concat(e, " 0%, ").concat(o, " 100%);\n                      background: -webkit-linear-gradient(left,  ").concat(e, " 0%,").concat(o, " 100%);\n                      background: linear-gradient(to right,  ").concat(e, " 0%,").concat(o, " 100%);\n                      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='").concat(e, "', endColorstr='").concat(o, "',GradientType=1 );\n                      color: ").concat(n, "\n                    ");
                        return style
                    }
                }, {
                    key: "tagVisible", get: function () {
                        var t;
                        return (null === (t = this.tags) || void 0 === t ? void 0 : t.length) > 0
                    }
                }]), e
            }(h.Vue);
        m([Object(h.Prop)()], y.prototype, "tags", void 0);
        var O = y = m([h.Component], y), k = (o(559), o(23)), j = Object(k.a)(O, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return t.tagVisible ? o("div", {staticClass: "transaction-tags"}, [t._l(t.tags, (function (e, n) {
                return [o("div", {
                    key: n,
                    staticClass: "tag",
                    style: t.style(e.tag_icon)
                }, [t._v("\n      " + t._s(e.tag_icon.text) + "\n    ")])]
            }))], 2) : t._e()
        }), [], !1, null, "03de284e", null).exports, C = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, w = function (t) {
            function e() {
                var t;
                return Object(n.a)(this, e), (t = Object(c.a)(this, Object(l.a)(e).apply(this, arguments))).isMobile = "mobile" === t.$store.state.klook.platform, t.pageDetailShow = !1, t.renderMarkdownObj = _.a, t
            }

            return Object(d.a)(e, t), Object(r.a)(e, [{
                key: "getInfoList", value: function (t, e) {
                    if (!t) return [];
                    var o = ["general_other_infos", "individual_other_infos"][e];
                    return t[o] && t[o].length > 0 ? t[o].filter((function (t) {
                        return 1 === t.position
                    })) : []
                }
            }, {
                key: "togglePageDetail", value: function (t) {
                    this.pageDetailShow = t
                }
            }, {
                key: "styleObj", get: function () {
                    return {"background-color": this.bgColor}
                }
            }]), e
        }(h.Vue);
        C([Object(h.Prop)({
            type: String,
            default: "#fff"
        })], w.prototype, "bgColor", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "activityName", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "activityNameEn", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "packageTitle", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "packageTitleEn", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "packageName", void 0), C([Object(h.Prop)({
            type: String,
            default: ""
        })], w.prototype, "packageNameEn", void 0), C([Object(h.Prop)({
            type: Boolean,
            default: !1
        })], w.prototype, "haveViewDetails", void 0), C([Object(h.Prop)()], w.prototype, "transactionTags", void 0), C([Object(h.Prop)({
            type: Object,
            default: function () {
                return {
                    sale_attributes: [{
                        id: 34,
                        spec_name: "套餐名称",
                        spec_name_en: "Package Name",
                        attr_name: "免费预订",
                        attr_name_en: "Free Reservation",
                        tips: "",
                        tips_render_obj: null
                    }], other_info: {general_other_infos: [], individual_other_infos: []}
                }
            }
        })], w.prototype, "packageDetails", void 0);
        var P = w = C([Object(h.Component)({components: {Markdown: v.a, TransactionTags: j}})], w),
            x = (o(560), Object(k.a)(P, (function () {
                var t = this, e = t.$createElement, o = t._self._c || e;
                return o("div", {
                    staticClass: "voucher_title",
                    style: t.styleObj
                }, [o("p", {staticClass: "voucher_title__act_name"}, [t._v(t._s(t.activityName))]), t._v(" "), t.activityNameEn !== t.activityName ? o("p", {staticClass: "voucher_title__act_name_en"}, [t._v(t._s(t.activityNameEn))]) : t._e(), t._v(" "), t.transactionTags && t.transactionTags.length ? o("div", {staticClass: "zhen-xing-voucher-tags"}, [o("TransactionTags", {attrs: {tags: t.transactionTags}})], 1) : t._e(), t._v(" "), t.packageName ? [o("div", {staticClass: "voucher_title__border"}), t._v(" "), o("p", {staticClass: "voucher_title__pkg_title"}, [t._v(t._s(t.$t("voucher.lead.package")))]), t._v(" "), o("p", {staticClass: "voucher_title__pkg_name"}, [t._v(t._s(t.packageName))]), t._v(" "), t.packageNameEn !== t.packageName ? o("p", {staticClass: "voucher_title__pkg_name_en"}, [t._v(t._s(t.packageNameEn))]) : t._e(), t._v(" "), t.isMobile && t.haveViewDetails && t.packageDetails ? o("div", {
                    staticClass: "voucher_title__pkg_detail",
                    on: {
                        click: function (e) {
                            return t.togglePageDetail(!0)
                        }
                    }
                }, [o("a", {attrs: {href: "javascript:;"}}, [t._v(t._s(t.$t("15406")))])]) : t._e(), t._v(" "), t.isMobile && t.packageDetails && t.haveViewDetails ? [o("klk-modal", {
                    attrs: {
                        open: t.pageDetailShow,
                        width: "calc(100vw - 80px)",
                        "max-width": "calc(100vw - 80px)"
                    }, scopedSlots: t._u([{
                        key: "header", fn: function () {
                            return [o("p", {staticClass: "voucher_title__modal_title"}, [t._v(t._s(t.$t("activity.v2.label.pkg_info")))])]
                        }, proxy: !0
                    }, {
                        key: "footer", fn: function () {
                            return [o("p", {
                                staticClass: "voucher_title__modal_footer", on: {
                                    click: function (e) {
                                        return t.togglePageDetail(!1)
                                    }
                                }
                            }, [t._v(t._s(t.$t("global.close")))])]
                        }, proxy: !0
                    }], null, !1, 2455593127)
                }, [t._v(" "), o("div", {staticClass: "voucher_title__modal_body"}, [t._l(t.packageDetails.sale_attributes, (function (e) {
                    return o("div", {
                        key: e.id,
                        staticClass: "voucher_title__modal_items"
                    }, [o("p", {staticClass: "voucher_title__modal_item"}, [t._v(t._s(e.spec_name) + " " + t._s(e.spec_name_en !== e.spec_name ? e.spec_name_en : ""))]), t._v(" "), o("p", {staticClass: "voucher_title__modal_item_attr"}, [t._v(t._s(e.attr_name) + " " + t._s(e.attr_name !== e.attr_name_en ? e.attr_name_en : ""))]), t._v(" "), e.tips_render_obj ? o("Markdown", {attrs: {content: t.renderMarkdownObj(e.tips_render_obj)}}) : t._e()], 1)
                })), t._v(" "), t.packageDetails.other_info && t.getInfoList(t.packageDetails.other_info, 0).length > 0 ? t._l(t.getInfoList(t.packageDetails.other_info, 0), (function (e, n) {
                    return o("div", {
                        key: n + e.type_name,
                        staticClass: "voucher_title__modal_items"
                    }, [o("p", {staticClass: "voucher_title__modal_item"}, [t._v(t._s(e.type_name))]), t._v(" "), o("p", {staticClass: "voucher_title__modal_item_attr"}, [t._v(t._s(e.content))])])
                })) : t._e(), t._v(" "), t.packageDetails.other_info && t.getInfoList(t.packageDetails.other_info, 1).length > 0 ? t._l(t.getInfoList(t.packageDetails.other_info, 1), (function (e, n) {
                    return o("div", {
                        key: n + e.type_name,
                        staticClass: "voucher_title__modal_items"
                    }, [o("p", {staticClass: "voucher_title__modal_item"}, [t._v(t._s(e.type_name))]), t._v(" "), o("p", {staticClass: "voucher_title__modal_item_attr"}, [t._v(t._s(e.content))])])
                })) : t._e()], 2)])] : t._e()] : t._e()], 2)
            }), [], !1, null, null, null));
        e.a = x.exports
    }, 697: function (t, e, o) {
        "use strict";
        var n = {
            name: "AccountsNotMatch", props: {
                errorMsg: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }
        }, r = (o(555), o(23)), component = Object(r.a)(n, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "voucher-not-match"}, [e("klk-alert", {attrs: {type: "error"}}, [this._v("\n    " + this._s(this.errorMsg.msg) + "\n  ")])], 1)
        }), [], !1, null, "468d5937", null);
        e.a = component.exports
    }, 698: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(21), c = o(29), l = o(30), d = o(2), f = o(10), h = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, v = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
                }

                return Object(l.a)(e, t), e
            }(f.Vue), _ = v = h([Object(f.Component)({})], v), m = (o(558), o(23)),
            component = Object(m.a)(_, (function () {
                var t = this.$createElement;
                this._self._c;
                return this._m(0)
            }), [function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {staticClass: "voucher_notch_divider"}, [e("div", {staticClass: "voucher_notch_divider__border"})])
            }], !1, null, null, null);
        e.a = component.exports
    }, 699: function (t, e, o) {
        "use strict";
        o(62);
        var n = o(11), r = o(20), c = o(45), l = o(21), d = o(29), f = o(30), h = o(2), v = o(10), _ = o(502),
            m = o(501), y = o(533), O = o(532), k = o(534), j = o(535), C = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(h.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, w = function (t) {
                function e() {
                    return Object(r.a)(this, e), Object(l.a)(this, Object(d.a)(e).apply(this, arguments))
                }

                return Object(f.a)(e, t), Object(c.a)(e, [{
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }, {
                    key: "groupItemClasses", get: function () {
                        return ["voucher_group__item", Object(n.a)({}, "voucher_group__item--column_".concat(this.columnNumber), "desktop" === this.platform)]
                    }
                }]), e
            }(v.Vue);
        C([Object(v.State)((function (t) {
            return t.klook.platform
        }))], w.prototype, "platform", void 0), C([Object(v.Prop)({
            type: Boolean,
            default: !1
        })], w.prototype, "isShowMaskContent", void 0), C([Object(v.Prop)({
            type: String,
            default: "#fff"
        })], w.prototype, "bgColor", void 0), C([Object(v.Prop)({
            type: Number,
            default: 1
        })], w.prototype, "columnNumber", void 0), C([Object(v.Prop)({
            type: Array, default: function () {
                return []
            }
        })], w.prototype, "components", void 0);
        var P = w = C([Object(v.Component)({
            components: {
                VoucherTitleTextComposed: _.a,
                TimeOne: m.a,
                LocationOne: y.a,
                TravelerInfoPlatform: O.a,
                VoucherAttendantInfoPlatform: k.a,
                VoucherSupplierInfo: j.a
            }
        })], w), x = (o(577), o(23)), component = Object(x.a)(P, (function () {
            var t = this, e = t.$createElement, o = t._self._c || e;
            return o("div", {
                staticClass: "voucher_group",
                style: t.styleObj
            }, t._l(t.components, (function (component, e) {
                return o("div", {key: e, class: t.groupItemClasses}, [o(component.type, t._b({
                    tag: "component",
                    staticClass: "voucher_group__component"
                }, "component", Object.assign({}, component.componentData, {isShowMaskContent: t.isShowMaskContent}), !1))], 1)
            })), 0)
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 700: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(45), c = o(21), l = o(29), d = o(30), f = o(2), h = o(10), v = o(399),
            _ = function (t, e, o, desc) {
                var n, r = arguments.length,
                    c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(f.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            }, m = function (t) {
                function e() {
                    return Object(n.a)(this, e), Object(c.a)(this, Object(l.a)(e).apply(this, arguments))
                }

                return Object(d.a)(e, t), Object(r.a)(e, [{
                    key: "styleObj", get: function () {
                        return {"background-color": this.bgColor}
                    }
                }]), e
            }(h.Vue);
        _([Object(h.Prop)({type: String, default: "#fff"})], m.prototype, "bgColor", void 0);
        var y = m = _([Object(h.Component)({components: {VoucherSpacing: v.a}})], m), O = (o(578), o(23)),
            component = Object(O.a)(y, (function () {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "voucher_divider",
                    style: this.styleObj
                }, [e("voucher-spacing", {attrs: {height: 4}}), this._v(" "), e("div", {staticClass: "voucher_divider__main"})], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, 703: function (t, e, o) {
        "use strict";
        var n = o(20), r = o(21), c = o(29), l = o(30), d = o(2), f = o(10), h = function (t, e, o, desc) {
            var n, r = arguments.length,
                c = r < 3 ? e : null === desc ? desc = Object.getOwnPropertyDescriptor(e, o) : desc;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : Object(d.a)(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, desc); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
            return r > 3 && c && Object.defineProperty(e, o, c), c
        }, v = function (t) {
            function e() {
                return Object(n.a)(this, e), Object(r.a)(this, Object(c.a)(e).apply(this, arguments))
            }

            return Object(l.a)(e, t), e
        }(f.Vue);
        h([Object(f.Prop)({default: !1})], v.prototype, "visible", void 0);
        var _ = v = h([f.Component], v), m = (o(579), o(23)), component = Object(m.a)(_, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.visible,
                    expression: "visible"
                }], staticClass: "search-box-loading"
            }, [e("div", {staticClass: "search-box-loading_spin"})])
        }), [], !1, null, null, null);
        e.a = component.exports
    }, 799: function (t, e, o) {
        "use strict";
        var n = o(540);
        o.n(n).a
    }, 820: function (t, e, o) {
        "use strict";
        var n = o(556);
        o.n(n).a
    }, 821: function (t, e, o) {
        "use strict";
        var n = o(557);
        o.n(n).a
    }, 822: function (t, e, o) {
        "use strict";
        var n = o(561);
        o.n(n).a
    }, 823: function (t, e, o) {
        "use strict";
        var n = o(563);
        o.n(n).a
    }, 824: function (t, e, o) {
        "use strict";
        var n = o(564);
        o.n(n).a
    }, 825: function (t, e, o) {
        "use strict";
        var n = o(565);
        o.n(n).a
    }, 826: function (t, e, o) {
        "use strict";
        var n = o(567);
        o.n(n).a
    }, 827: function (t, e, o) {
        "use strict";
        var n = o(568);
        o.n(n).a
    }, 828: function (t, e, o) {
        "use strict";
        var n = o(569);
        o.n(n).a
    }, 829: function (t, e, o) {
        "use strict";
        var n = o(571);
        o.n(n).a
    }, 830: function (t, e, o) {
        "use strict";
        var n = o(572);
        o.n(n).a
    }, 831: function (t, e, o) {
        "use strict";
        var n = o(573);
        o.n(n).a
    }, 832: function (t, e, o) {
        "use strict";
        var n = o(574);
        o.n(n).a
    }, 833: function (t, e, o) {
        "use strict";
        var n = o(580);
        o.n(n).a
    }, 834: function (t, e, o) {
        "use strict";
        var n = o(581);
        o.n(n).a
    }, 835: function (t, e, o) {
        "use strict";
        var n = o(582);
        o.n(n).a
    }, 916: function (t, e, o) {
        "use strict";
        var n = o(597);
        o.n(n).a
    }, 917: function (t, e, o) {
        "use strict";
        var n = o(598);
        o.n(n).a
    }, 918: function (t, e, o) {
        "use strict";
        var n = o(599);
        o.n(n).a
    }, 919: function (t, e, o) {
        "use strict";
        var n = o(600);
        o.n(n).a
    }, 920: function (t, e, o) {
        "use strict";
        var n = o(601);
        o.n(n).a
    }, 921: function (t, e, o) {
        "use strict";
        var n = o(602);
        o.n(n).a
    }, 922: function (t, e, o) {
        "use strict";
        var n = o(603);
        o.n(n).a
    }, 923: function (t, e, o) {
        "use strict";
        var n = o(604);
        o.n(n).a
    }, 924: function (t, e, o) {
        "use strict";
        var n = o(605);
        o.n(n).a
    }, 925: function (t, e, o) {
        "use strict";
        var n = o(606);
        o.n(n).a
    }, 926: function (t, e, o) {
        "use strict";
        var n = o(607);
        o.n(n).a
    }, 927: function (t, e, o) {
        "use strict";
        var n = o(608);
        o.n(n).a
    }, 929: function (t, e, o) {
        "use strict";
        var n = o(609);
        o.n(n).a
    }, 930: function (t, e, o) {
        "use strict";
        var n = o(610);
        o.n(n).a
    }, 931: function (t, e, o) {
        "use strict";
        var n = o(611);
        o.n(n).a
    }
}]);