﻿!function (e) { function t(n) { if (r[n]) return r[n].exports; var o = r[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var n = window.webpackJsonp; window.webpackJsonp = function (r, a, i) { for (var u, c, l, f = 0, s = []; f < r.length; f++)c = r[f], o[c] && s.push(o[c][0]), o[c] = 0; for (u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]); for (n && n(r, a, i); s.length;)s.shift()(); if (i) for (f = 0; f < i.length; f++)l = t(t.s = i[f]); return l }; var r = {}, o = { 59: 0 }; return t.e = function (e) { function n() { a.onerror = a.onload = null, clearTimeout(i); var t = o[e]; 0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0) } if (0 === o[e]) return Promise.resolve(); if (o[e]) return o[e][2]; var r = document.getElementsByTagName("head")[0], a = document.createElement("script"); a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, t.nc && a.setAttribute("nonce", t.nc), a.src = t.p + "" + e + "." + { 0: "9cb2206", 1: "27a48c2", 2: "13f5dc8", 3: "6bd2e21", 4: "43dc66c", 5: "026d950", 6: "005c29b", 7: "e31d556", 8: "dc00c78", 9: "0db98f7", 10: "aced1d7", 11: "a566240", 12: "7ccb858", 13: "677ae86", 14: "9fa3933", 15: "4ca16fa", 16: "77a02cc", 17: "ddcabef", 18: "93895c8", 19: "ed6cc18", 20: "15b01d9", 21: "c5ffd8e", 22: "9653ba9", 23: "0f7fd3b", 24: "0e1ea3c", 25: "4e1094c", 26: "a7e6985", 27: "270912a", 28: "88a1375", 29: "d864a69", 30: "0cc79d0", 31: "6149b57", 32: "f430bad", 33: "b1c07d1", 34: "92550db", 35: "003a2ca", 36: "e4b2134", 37: "2dabaaf", 38: "0956979", 39: "fc56f15", 40: "eae15b7", 41: "9ec1090", 42: "b71dee6", 43: "175ee00", 44: "fab02cd", 45: "311fc9f", 46: "7c68a43", 47: "d24ab0f", 48: "a6228b4", 49: "34d284b", 50: "cf331ef", 51: "f4d32eb", 52: "25b94c5", 53: "0582b17", 54: "0bd1022", 55: "c5eb5c4", 56: "dd342fc", 57: "d174a38", 58: "0d7a802" }[e] + ".js"; var i = setTimeout(n, 12e4); a.onerror = a.onload = n; var u = new Promise(function (t, n) { o[e] = [t, n] }); return o[e][2] = u, r.appendChild(a), u }, t.m = e, t.c = r, t.i = function (e) { return e }, t.d = function (e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function (e) { var n = e && e.__esModule ? function () { return e.default } : function () { return e }; return t.d(n, "a", n), n }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "//static11.elemecdn.com/eleme/fe.h5/dist/", t.oe = function (e) { throw console.error(e), e }, t(t.s = 1800) }({ 1127: function (e, t, n) { void function (t) { return "object" == typeof e && e.exports ? t(function (t, n, r) { void 0 === r && (r = n, n = []); var o; o = [], e.exports = r.apply(e.exports, o) || e.exports }) : "function" === String("function") && n(58) ? t(n(57)) : void t(function (e, t, n) { void 0 === n && (n = t, t = []); try { "object" == typeof execScript && execScript("var " + e) } catch (e) { } window[e] = {}; for (var r = [], o = 0; o < t.length; o++)r[o] = window[t[o]]; window[e] = n.apply(window[e], r) || window[e] }) }(function (e) { "use strict"; e("UParams", function () { var e = RegExp.prototype.test.bind(/^(?:toString|valueOf)$/), t = function (n) { if (!(this instanceof t)) return new t(n); n || (n = location.search + location.hash); var r = this; switch (typeof n) { case "object": for (var o in n) e(o) || (r[o] = n[o] + ""); break; case "string": n.replace(/([^=?#&]*)=([^?#&]*)/g, function (t, n, o) { e(n) || (r[decodeURIComponent(n)] = decodeURIComponent(o)) }) } }; return Object.defineProperty(t.prototype, "toString", { enumerable: !1, configurable: !0, writable: !0, value: function () { var e = this; return Object.keys(e).map(function (t) { return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]) }).join("&") } }), t }) }) }, 1800: function (e, t, n) { e.exports = n(232) }, 232: function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.geohash = void 0, n(292), n(295), n(297); var r = n(49), o = babelHelpers.interopRequireDefault(r), a = n(1127), i = babelHelpers.interopRequireDefault(a), u = n(997), c = babelHelpers.interopRequireDefault(u); n(5), n(293), n(296), window.Geohash = o.default, window.UParams = i.default, window.Utils = c.default, window.hybridAPI && (window.hybridAPI = window.hybridAPI.default), t.geohash = o.default }, 292: function (module, exports, __webpack_require__) { "use strict"; (function (global) { var babelHelpers = {}; Array.from || (Array.from = function () { var e = Object.prototype.toString, t = function (t) { return "function" == typeof t || "[object Function]" === e.call(t) }, n = function (e) { var t = Number(e); return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t }, r = Math.pow(2, 53) - 1, o = function (e) { var t = n(e); return Math.min(Math.max(t, 0), r) }; return function (e) { var n = this, r = Object(e); if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined"); var a, i = arguments.length > 1 ? arguments[1] : void 0; if ("undefined" != typeof i) { if (!t(i)) throw new TypeError("Array.from: when provided, the second argument must be a function"); arguments.length > 2 && (a = arguments[2]) } for (var u, c = o(r.length), l = t(n) ? Object(new n(c)) : new Array(c), f = 0; f < c;)u = r[f], i ? l[f] = "undefined" == typeof a ? i(u, f) : i.call(a, u, f) : l[f] = u, f += 1; return l.length = c, l } }()), babelHelpers.typeof = "function" === eval("typeof Symbol") && "symbol" === eval("typeof Symbol.iterator") ? function (obj) { return eval("typeof obj") } : function (obj) { return obj && "function" === eval("typeof Symbol") && obj.constructor === Symbol ? "symbol" : eval("typeof obj") }, babelHelpers.jsx = function () { var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103; return function (t, n, r, o) { var a = t && t.defaultProps, i = arguments.length - 3; if (n || 0 === i || (n = {}), n && a) for (var u in a) void 0 === n[u] && (n[u] = a[u]); else n || (n = a || {}); if (1 === i) n.children = o; else if (i > 1) { for (var c = Array(i), l = 0; l < i; l++)c[l] = arguments[l + 3]; n.children = c } return { $$typeof: e, type: t, key: void 0 === r ? null : "" + r, ref: null, props: n, _owner: null } } }(), babelHelpers.asyncToGenerator = function (e) { return function () { var t = e.apply(this, arguments); return new Promise(function (e, n) { function r(o, a) { try { var i = t[o](a), u = i.value } catch (e) { return void n(e) } return i.done ? void e(u) : Promise.resolve(u).then(function (e) { return r("next", e) }, function (e) { return r("throw", e) }) } return r("next") }) } }, babelHelpers.classCallCheck = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, babelHelpers.createClass = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), babelHelpers.defineEnumerableProperties = function (e, t) { for (var n in t) { var r = t[n]; r.configurable = r.enumerable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n, r) } return e }, babelHelpers.defaults = function (e, t) { for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) { var o = n[r], a = Object.getOwnPropertyDescriptor(t, o); a && a.configurable && void 0 === e[o] && Object.defineProperty(e, o, a) } return e }, babelHelpers.defineProperty = function (e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }, babelHelpers.extends = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, babelHelpers.get = function e(t, n, r) { null === t && (t = Function.prototype); var o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in o) return o.value; var i = o.get; if (void 0 !== i) return i.call(r) }, babelHelpers.inherits = function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t))); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }, babelHelpers.instanceof = function (e, t) { return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](e) : e instanceof t }, babelHelpers.interopRequireDefault = function (e) { return e && e.__esModule ? e : { default: e } }, babelHelpers.interopRequireWildcard = function (e) { if (e && e.__esModule) return e; var t = {}; if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }, babelHelpers.newArrowCheck = function (e, t) { if (e !== t) throw new TypeError("Cannot instantiate an arrow function") }, babelHelpers.objectDestructuringEmpty = function (e) { if (null == e) throw new TypeError("Cannot destructure undefined") }, babelHelpers.objectWithoutProperties = function (e, t) { var n = {}; for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]); return n }, babelHelpers.possibleConstructorReturn = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== ("undefined" == typeof t ? "undefined" : babelHelpers.typeof(t)) && "function" != typeof t ? e : t }, babelHelpers.selfGlobal = "undefined" == typeof global ? self : global, babelHelpers.set = function e(t, n, r, o) { var a = Object.getOwnPropertyDescriptor(t, n); if (void 0 === a) { var i = Object.getPrototypeOf(t); null !== i && e(i, n, r, o) } else if ("value" in a && a.writable) a.value = r; else { var u = a.set; void 0 !== u && u.call(o, r) } return r }, babelHelpers.slicedToArray = function () { function e(e, t) { var n = [], r = !0, o = !1, a = void 0; try { for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0); } catch (e) { o = !0, a = e } finally { try { !r && u.return && u.return() } finally { if (o) throw a } } return n } return function (t, n) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(), babelHelpers.slicedToArrayLoose = function (e, t) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) { for (var n, r = [], o = e[Symbol.iterator](); !(n = o.next()).done && (r.push(n.value), !t || r.length !== t);); return r } throw new TypeError("Invalid attempt to destructure non-iterable instance") }, babelHelpers.taggedTemplateLiteral = function (e, t) { return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }, babelHelpers.taggedTemplateLiteralLoose = function (e, t) { return e.raw = t, e }, babelHelpers.temporalRef = function (e, t, n) { if (e === n) throw new ReferenceError(t + " is not defined - temporal dead zone"); return e }, babelHelpers.temporalUndefined = {}, babelHelpers.toArray = function (e) { return Array.isArray(e) ? e : Array.from(e) }, babelHelpers.toConsumableArray = function (e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t]; return n } return Array.from(e) }, Object.assign || (Object.assign = babelHelpers.extends), "undefined" == typeof window ? global.babelHelpers = babelHelpers : window.babelHelpers = babelHelpers }).call(exports, __webpack_require__(32)) }, 293: function (e, t, n) { "use strict"; var r = n(5), o = babelHelpers.interopRequireDefault(r), a = window.fetch; window.fetch = function (e, t) { var n = function (e) { return !/\.elemecdn\.com/.test(e) }, r = function (r) { var o = r.latitude, a = r.longitude; if (o && a) if ("[object Request]" === e.toString()) n(e.url) && e.headers.append("X-Shard", "loc=" + o + "," + a); else if (n(e)) { t = t || {}, t.headers = Object.assign({}, t.headers); var i = t.headers["X-Shard"]; i ? t.headers["X-Shard"] = i + ";loc=" + a + "," + o : t.headers["X-Shard"] = "loc=" + a + "," + o } }, i = o.default.get("location"); return i && r(i), a(e, t) } }, 294: function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = +localStorage.getItem("GRAYSCALE"); r || (r = Math.random(), localStorage.setItem("GRAYSCALE", r)); var o = function (e, t) { return fetch("//crayfish.elemecdn.com/h5.ele.me@json/" + e).then(function (e) { return e.json() }).then(function (e) { return e && r < e[t] ? Promise.resolve() : Promise.reject() }) }; t.default = o }, 295: function (e, t, n) { "use strict"; var r = JSON.parse; JSON.parse = function (e) { return "" === e ? null : r.apply(JSON, arguments) } }, 296: function (e, t, n) { "use strict"; var r = n(294), o = babelHelpers.interopRequireDefault(r), a = /debug/.test(location.href), i = /Eleme/i.test(navigator.userAgent), u = +(navigator.userAgent.match(/UCBrowser\/(\d+)\./i) || [])[1] || 0, c = +(navigator.userAgent.match(/Chrome\/(\d+)\./i) || [])[1] || 0, l = (navigator.userAgent.match(/Chrome\/([\d|\.]+)/i) || [])[1] || "", f = !!l.match(/^44\.0\.2403/), s = +(navigator.userAgent.match(/TBS\/(\d+)/i) || [])[1] || 0, d = function () { navigator.serviceWorker && navigator.serviceWorker.getRegistrations && navigator.serviceWorker.getRegistrations().then(function (e) { e.forEach(function (e) { e.unregister() }) }) }, p = function () { var e = function (e) { return UBT.send("EVENT", { id: 3930, params: { type: e } }) }; window.addEventListener("beforeinstallprompt", function (t) { e(0), t.userChoice.then(function (t) { e("accepted" === t.outcome ? 1 : 2) }) }); var t = "/sw.js?debug=" + a + "&UC=" + !!u; navigator.serviceWorker.register(t) }, b = function () { return !!a || !f && (i || u >= 11 || window.chrome && c >= 49 || s >= 43124 && c >= 53) }, h = function () { if ("serviceWorker" in navigator) return a ? p() : b() ? void fetch("//crayfish.elemecdn.com/h5.ele.me@json/service-worker").then(function (e) { return e.json() }).then(function (e) { return e.downgrade && !a ? d() : i ? void (0, o.default)("service-worker", "grayscale").then(p).catch(d) : p() }).catch(function () { }) : d() }; h() }, 297: function (e, t, n) { "use strict"; try { "object" !== ("undefined" == typeof localStorage ? "undefined" : babelHelpers.typeof(localStorage)) && (localStorage = {}) } catch (e) { setTimeout(function () { throw e }) } void function () { for (var e = ""; e.length < 32;)e += Math.floor(Math.pow(36, 10) * Math.random()).toString(36); try { localStorage.setItem(e, e), e === localStorage.getItem(e) && localStorage.removeItem(e) } catch (r) { if (!localStorage) return setTimeout(function () { throw new Error("The fucking localStorage is a hard null.") }); var t = {}, n = e; localStorage.setItem = function (e, r) { t[n + e] = r + "" }, localStorage.getItem = function (e) { return n + e in t ? t[n + e] : null }, localStorage.removeItem = function (e) { delete t[n + e] }, localStorage.clear = function () { t = {} } } }(), void function () { for (var e = ""; e.length < 32;)e += Math.floor(Math.pow(36, 10) * Math.random()).toString(36); try { sessionStorage.setItem(e, e), e === sessionStorage.getItem(e) && sessionStorage.removeItem(e) } catch (r) { if (!sessionStorage) return setTimeout(function () { throw new Error("The fucking sessionStorage is a hard null.") }); var t = {}, n = e; sessionStorage.setItem = function (e, r) { t[n + e] = r + "" }, sessionStorage.getItem = function (e) { return n + e in t ? t[n + e] : null }, sessionStorage.removeItem = function (e) { delete t[n + e] }, sessionStorage.clear = function () { t = {} } } }(), void function () { var e = Date.parse; Date.parse = function (t) { var n = String(t).match(/^(\d+)-(\d+)-(\d+)T(\d+):(\d+)(?::(\d+)(?:\.(\d\d\d))?)?(z|[+-]\d\d:?\d\d)$/i); if (n) { var r = n[8].match(/\d\d/g) || []; return r[0] = 0 | r[0], r[1] = 0 | r[1], "-" === n[8].charAt(0) && (r[0] = -r[0], r[1] = -r[1]), Date.UTC(n[1], n[2] - 1, n[3], n[4] - r[0], n[5] - r[1], 0 | n[6], 0 | n[7]) } return e.apply(this, arguments) } }() }, 32: function (e, t) { var n; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) } e.exports = n }, 49: function (e, t, n) { var r = new function () { var e = Math.round, t = Math.max, n = Math.pow, r = Math.log, o = "0123456789bcdefghjkmnpqrstuvwxyz", a = new RegExp("^[" + o + "]+$"), i = function () { }; i.prototype = { minlat: -90, maxlat: 90, minlng: -180, maxlng: 180, halfLat: function () { return (this.minlat + this.maxlat) / 2 }, halfLng: function () { return (this.minlng + this.maxlng) / 2 } }, this.encode = function (e, r) { if (e instanceof Array && null == r && (r = e[1], e = e[0]), e *= 1, r *= 1, e !== e) throw new Error("Geohash.encode: lat must be a Number"); if (r !== r) throw new Error("Geohash.encode: lng must be a Number"); for (var a, u, c = e.toString().length - e.toFixed().length - 2, l = r.toString().length - e.toFixed().length - 2, f = n(10, -t(c, l, 0)) / 2, s = new i, d = [], p = 180, b = !0, h = 0, v = 4; p >= f;)if (b ? (a = s.halfLng(), r > a ? (h |= 1 << v, s.minlng = a) : s.maxlng = a) : (a = s.halfLat(), e > a ? (h |= 1 << v, s.minlat = a) : s.maxlat = a), b = !b, v) v--; else { if (u = p, p = t(s.maxlng - s.minlng, s.maxlat - s.minlat), u === p) break; d.push(o[h]), v = 4, h = 0 } return d.join("") }, this.decode = function (u) { if (!a.test(u)) throw new Error("Geohash.decode: hash must be a geohash string"); for (var c = new i, l = 90, f = 180, s = function (e, t, n) { var r = 1 << e; !(1 & e) ^ !(1 & n) ? r & t ? c.minlat = c.halfLat() : c.maxlat = c.halfLat() : r & t ? c.minlng = c.halfLng() : c.maxlng = c.halfLng() }, d = 0, p = u.length; d < p; d++) { for (var b = o.indexOf(u[d]), h = 1 & d, v = 4; v >= 0; v--)s(v, b, h); h ? (l /= 8, f /= 4) : (l /= 4, f /= 8) } var m = n(10, t(1, -e(r(l) / r(10))) - 1), y = n(10, t(1, -e(r(f) / r(10))) - 1); return [e(c.halfLat() * m) / m, e(c.halfLng() * y) / y] } }; e.exports = r }, 5: function (e, t, n) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(49), o = babelHelpers.interopRequireDefault(r), a = "STORE", i = function () { var e = void 0; try { e = JSON.parse(localStorage.getItem(a)) || {} } catch (t) { e = {} } return e }, u = { get: function (e) { var t = i(); return e ? t[e] : t }, set: function (e, t) { var n = i(); n[e] = t; try { localStorage.setItem(a, JSON.stringify(n)) } catch (e) { console.error(e) } return n }, setLocation: function (e) { var t = o.default.decode(e), n = babelHelpers.slicedToArray(t, 2), r = n[0], a = n[1]; return this.set("location", { geohash: e, latitude: r, longitude: a }) }, setUser: function (e) { return this.set("user", e) }, get user() { return this.get("user") }, get location() { return this.get("location") } }; t.default = Object.freeze(u) }, 57: function (e, t) { e.exports = function () { throw new Error("define cannot be used indirect") } }, 58: function (e, t) { (function (t) { e.exports = t }).call(t, {}) }, 997: function (e, t, n) { !function (t, n) { e.exports = n() }(this, function () { return function (e) { function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }([function (e, t, n) { "use strict"; function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(1), a = r(o), i = n(3), u = r(i), c = n(4), l = r(c), f = n(2), s = r(f), d = n(5), p = r(d), b = n(6), h = r(b), v = n(7), m = r(v); t.default = { getGeohash: a.default, compareVersion: u.default, paramToString: l.default, resolveFetch: s.default, checkoutByApp: p.default, getUrl: h.default, expiredLocalStorage: m.default } }, function (e, t, n) { "use strict"; function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(2), a = r(o), i = "" + location.origin.replace(/\:\/\/(h|h5)\./, "://mainsite-restapi."), u = i + "/v1/cities?type=guess", c = function (e) { return window.fetch(e).then(a.default) }, l = function (e) { return new Promise(function (t) { setTimeout(t, e) }) }, f = function () { return window.UParams ? window.UParams().geohash || "" : "" }, s = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = function () { return new Promise(function (e, t) { window.hybridAPI.getGlobalGeohash(function (n) { return n ? void e(n) : t() }) }) }; return new Promise(function (r, o) { var a = "", i = -1, u = function () { clearInterval(i) }, c = function () { return a ? u() : void n().then(function (e) { a || (a = e, u(), r(e)) }) }; i = setInterval(c, t), c(), l(e).then(u) }) }, d = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3; return navigator.geolocation ? new Promise(function (t, n) { navigator.geolocation.getCurrentPosition(function (e) { t(window.Geohash.encode(e.coords.latitude, e.coords.longitude)) }, n, { timeout: e, maximumAge: 1e4 }) }) : Promise.reject() }, p = function () { return c(u).then(function (e) { return window.Geohash.encode(e.latitude, e.longitude) }) }, b = function (e) { return new Promise(function (t, n) { d(e).then(t).catch(function () { return p() }).then(t).catch(n), setTimeout(n, e) }) }, h = function (e) { return new Promise(function (t) { s(2 * e / 3).then(function (e) { t(e) }).catch(function () { return b(1 * e / 3) }) }) }, v = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4, t = f(); return t ? Promise.resolve(t) : /Eleme/.test(navigator.userAgent) ? h(e) : b(e) }; v.getParamHash = f, v.useApp = s, v.useGeoAPI = d, v.useRestAPI = p, t.default = v }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e) { var t = e.json(); return e.status >= 200 && e.status < 300 ? t : t.then(Promise.reject.bind(Promise)) }; t.default = n }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = function (e, t) { if (!t && (t = (window.navigator.userAgent.match(/Eleme\/([\d|\.]+)/i) || [])[1], !t)) return !1; e = e.split("."), t = t.split("."); var n = void 0; return e.forEach(function (e, r) { var o = t[r]; if ("undefined" == typeof o && (o = 0), "undefined" == typeof n) { var a = Number(e) - Number(o); 0 !== a && (n = a > 0) } }), !!n }; t.default = n }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, r = function (e) { if ("Object" !== Object.prototype.toString.call(e).slice(8, -1)) throw "param 必须是一个 object 对象"; var t = [], r = function (r) { var o = e[r]; Array.isArray(o) ? t = t.concat(o.map(function (e) { return encodeURIComponent(r) + "[]=" + encodeURIComponent(e) })) : "object" === ("undefined" == typeof o ? "undefined" : n(o)) && o ? (o = JSON.stringify(o), t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o))) : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o)) }; for (var o in e) r(o); return t.join("&") }; t.default = r }, function (e, t, n) { "use strict"; function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(3), a = r(o); t.default = function (e) { var t = e.id, n = e.entities, r = (e.callback, { clear_cart: !0 }); (0, a.default)("7.2") ? r.add_foods = n.map(function (e) { var t = e.id, n = e.quantity, r = e.specs; return { id: t, quantity: n, specs: r.map(function (e) { return e.value }) } }) : r.add_foods = n.map(function (e) { var t = e.id, n = e.sku_id, r = e.quantity, o = e.specs, a = e.attrs; return { id: t, sku_id: n || "", quantity: r, specs: o, attrs: a } }), location.href = "eleme://checkout?restaurant_id=" + t + "&cart_operations=" + JSON.stringify(r) } }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, r = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hash", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, a = ""; if ("{}" !== JSON.stringify(t)) { a = "hash" === r ? "#" : "?"; for (var i in t) { var u = t[i]; a += "object" === ("undefined" == typeof u ? "undefined" : n(u)) && u ? encodeURIComponent(i) + "=" + encodeURIComponent(JSON.stringify(u)) + "&" : encodeURIComponent(i) + "=" + encodeURIComponent(u) + "&" } } return a = "" + e + a.replace(/&$/, ""), /Eleme/.test(navigator.userAgent) && (a = "eleme://web?url=" + encodeURIComponent(a) + "&animation_type=" + o), a }; t.default = r }, function (e, t) { "use strict"; Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { set: function (e) { var t = e.key, n = e.value, r = e.expiredDate, o = e.expiredDay, a = { value: n, expired: "" }; return r && (a.expired = r), o && (a.expired = Date.now() + 60 * o * 60 * 1e3), localStorage.setItem(t, JSON.stringify(a)), { key: t, value: JSON.stringify(a) } }, get: function (e) { var t = void 0; try { t = JSON.parse(localStorage.getItem(e)) } catch (e) { throw e } if (!t) throw "The key: " + e + " you want are not found in localStorage"; var n = Date.now() > new Date(t.expired).getTime(); return { value: t.value, expired: n } } } }]) }) } });