!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "https://yastatic.net/pcode-bundles/0.1941/",
    n(n.s = 543)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5)
      , o = window.Object.assign;
    e.exports = r.checkNativeCode(o) ? o : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isObject = function(e) {
        var t = typeof e;
        return Boolean(e) && ("object" === t || "function" === t)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(27);
    t.isFunction = function(e) {
        return "function" == typeof e || "Function" === r.getInternalClass(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(20)
          , i = n(120)
          , a = n(11)
          , s = n(140);
        t.parseUrlUsingCache = i.memoize((function(e) {
            var t = c(e);
            return r({}, t)
        }
        ));
        var u = /^(android-app:|chrome-extension:)/;
        function c(e) {
            s.PARSE_LINK_ELEMENT.href = e;
            var t = s.PARSE_LINK_ELEMENT.pathname || "";
            "/" !== t.charAt(0) && (t = "/" + t);
            var n = (s.PARSE_LINK_ELEMENT.search || "") + (s.PARSE_LINK_ELEMENT.hash || "")
              , o = e.lastIndexOf(n)
              , i = -1 === o ? e : e.slice(0, o);
            if (u.test(e)) {
                var a = c(e.replace(u, "https:"));
                return s.PARSE_LINK_ELEMENT.href = e,
                r(r({}, a), {
                    originalPath: i,
                    protocol: e.slice(0, e.indexOf(":") + 1),
                    href: s.PARSE_LINK_ELEMENT.href
                })
            }
            var d = s.PARSE_LINK_ELEMENT.protocol && /^[a-z\-]+:/i.test(s.PARSE_LINK_ELEMENT.protocol) ? s.PARSE_LINK_ELEMENT.protocol : "";
            return {
                originalPath: i,
                href: s.PARSE_LINK_ELEMENT.href,
                protocol: d,
                host: s.PARSE_LINK_ELEMENT.host,
                hostname: s.PARSE_LINK_ELEMENT.hostname,
                port: s.PARSE_LINK_ELEMENT.port,
                pathname: t,
                search: s.PARSE_LINK_ELEMENT.search,
                hash: s.PARSE_LINK_ELEMENT.hash
            }
        }
        function d(e, t) {
            if (void 0 === t && (t = !1),
            t) {
                var n = e.originalPath
                  , r = "/" === e.pathname && "/" !== n[n.length - 1];
                return e.originalPath + (r ? "/" : "") + e.search + e.hash
            }
            var o = "443" === e.port || "80" === e.port ? e.hostname : e.host;
            return e.protocol + "//" + o + e.pathname + e.search + e.hash
        }
        t.parseUrl = c,
        t.urlFromUrlObject = d;
        var l = function(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        };
        function f(e) {
            for (var t = {}, n = e.replace(/^[?#]+/, "").replace(/#.*$/, "").split("&"), r = 0; r < n.length; r++) {
                var o = n[r].indexOf("=")
                  , i = void 0
                  , a = void 0;
                if (-1 === o ? (i = l(n[r]),
                a = "") : (i = l(n[r].slice(0, o)),
                a = n[r].slice(o + 1)),
                i) {
                    var s = Boolean(/(\[\])$/.exec(i));
                    i = i.replace(/\[\]$/, ""),
                    s ? void 0 === t[i] ? t[i] = [l(a)] : t[i] = [].concat(t[i], l(a)) : t[i] = l(a)
                }
            }
            return t
        }
        t.parseQueryString = f,
        t.getParamsFromUrl = function(e) {
            return f(c(e).search)
        }
        ;
        var p = function(e, t) {
            return t.map((function(t) {
                return e + "[]=" + encodeURIComponent(t)
            }
            )).join("&")
        };
        function h(e) {
            var t = [];
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    o.isArray(r) ? t.push(p(n, r)) : void 0 !== r && t.push(n + "=" + encodeURIComponent(r))
                }
            return "?" + t.join("&")
        }
        function v(e) {
            return c(e).pathname.split("/").pop() || ""
        }
        t.formatQueryString = h,
        t.addParamToUrl = function(e, t, n) {
            if (void 0 === n)
                return e;
            var o = c(e)
              , i = f(o.search);
            return i[t] = n,
            d(r(r({}, o), {
                search: h(i)
            }))
        }
        ,
        t.addParamsToUrl = function(e, t, n) {
            var o = void 0 === n ? {} : n
              , i = o.override
              , s = void 0 === i || i
              , u = o.saveOriginalPath
              , l = void 0 !== u && u
              , p = c(e)
              , v = f(p.search);
            a.forOwn(t, (function(e, t) {
                (void 0 === v[t] || s) && (v[t] = e)
            }
            ));
            var g = h(v);
            return d(r(r({}, p), {
                search: g
            }), l)
        }
        ,
        t.getPostProtocolIndex = function(e) {
            var t = e.indexOf("//");
            return -1 !== t ? t + 2 : 0
        }
        ,
        t.getFileName = v,
        t.getFileExt = function(e) {
            var t = v(e).split(".");
            return t.length > 1 ? t.pop() : ""
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.noop = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t]
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.checkNativeCode = function(e) {
        if (!e || !e.toString)
            return !1;
        var t = e.toString();
        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
    }
}
, function(e, t, n) {
    (function(t, n) {
        var r;
        r = function() {
            "use strict";
            function e(e) {
                return "function" == typeof e
            }
            var r = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
              , o = 0
              , i = void 0
              , a = void 0
              , s = function(e, t) {
                h[o] = e,
                h[o + 1] = t,
                2 === (o += 2) && (a ? a(v) : m())
            }
              , u = "undefined" != typeof window ? window : void 0
              , c = u || {}
              , d = c.MutationObserver || c.WebKitMutationObserver
              , l = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t)
              , f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function p() {
                var e = setTimeout;
                return function() {
                    return e(v, 1)
                }
            }
            var h = new Array(1e3);
            function v() {
                for (var e = 0; e < o; e += 2)
                    (0,
                    h[e])(h[e + 1]),
                    h[e] = void 0,
                    h[e + 1] = void 0;
                o = 0
            }
            var g, _, y, b, m = void 0;
            function w(e, t) {
                var n = this
                  , r = new this.constructor(E);
                void 0 === r[S] && L(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    s((function() {
                        return R(o, r, i, n._result)
                    }
                    ))
                } else
                    k(n, r, e, t);
                return r
            }
            function O(e) {
                if (e && "object" == typeof e && e.constructor === this)
                    return e;
                var t = new this(E);
                return M(t, e),
                t
            }
            l ? m = function() {
                return t.nextTick(v)
            }
            : d ? (_ = 0,
            y = new d(v),
            b = document.createTextNode(""),
            y.observe(b, {
                characterData: !0
            }),
            m = function() {
                b.data = _ = ++_ % 2
            }
            ) : f ? ((g = new MessageChannel).port1.onmessage = v,
            m = function() {
                return g.port2.postMessage(0)
            }
            ) : m = void 0 === u ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (i = e.runOnLoop || e.runOnContext) ? function() {
                        i(v)
                    }
                    : p()
                } catch (e) {
                    return p()
                }
            }() : p();
            var S = Math.random().toString(36).substring(2);
            function E() {}
            var P = {
                error: null
            };
            function x(e) {
                try {
                    return e.then
                } catch (e) {
                    return P.error = e,
                    P
                }
            }
            function C(t, n, r) {
                n.constructor === t.constructor && r === w && n.constructor.resolve === O ? function(e, t) {
                    1 === t._state ? I(e, t._result) : 2 === t._state ? T(e, t._result) : k(t, void 0, (function(t) {
                        return M(e, t)
                    }
                    ), (function(t) {
                        return T(e, t)
                    }
                    ))
                }(t, n) : r === P ? (T(t, P.error),
                P.error = null) : void 0 === r ? I(t, n) : e(r) ? function(e, t, n) {
                    s((function(e) {
                        var r = !1
                          , o = function(e, t, n, r) {
                            try {
                                e.call(t, n, r)
                            } catch (e) {
                                return e
                            }
                        }(n, t, (function(n) {
                            r || (r = !0,
                            t !== n ? M(e, n) : I(e, n))
                        }
                        ), (function(t) {
                            r || (r = !0,
                            T(e, t))
                        }
                        ), e._label);
                        !r && o && (r = !0,
                        T(e, o))
                    }
                    ), e)
                }(t, n, r) : I(t, n)
            }
            function M(e, t) {
                var n, r;
                e === t ? T(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof (n = t),
                null === n || "object" !== r && "function" !== r ? I(e, t) : C(e, t, x(t)))
            }
            function A(e) {
                e._onerror && e._onerror(e._result),
                j(e)
            }
            function I(e, t) {
                void 0 === e._state && (e._result = t,
                e._state = 1,
                0 !== e._subscribers.length && s(j, e))
            }
            function T(e, t) {
                void 0 === e._state && (e._state = 2,
                e._result = t,
                s(A, e))
            }
            function k(e, t, n, r) {
                var o = e._subscribers
                  , i = o.length;
                e._onerror = null,
                o[i] = t,
                o[i + 1] = n,
                o[i + 2] = r,
                0 === i && e._state && s(j, e)
            }
            function j(e) {
                var t = e._subscribers
                  , n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3)
                        r = t[a],
                        o = t[a + n],
                        r ? R(n, r, o, i) : o(i);
                    e._subscribers.length = 0
                }
            }
            function R(t, n, r, o) {
                var i = e(r)
                  , a = void 0
                  , s = void 0
                  , u = void 0
                  , c = void 0;
                if (i) {
                    if ((a = function(e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return P.error = e,
                            P
                        }
                    }(r, o)) === P ? (c = !0,
                    s = a.error,
                    a.error = null) : u = !0,
                    n === a)
                        return void T(n, new TypeError("A promises callback cannot return that same promise."))
                } else
                    a = o,
                    u = !0;
                void 0 !== n._state || (i && u ? M(n, a) : c ? T(n, s) : 1 === t ? I(n, a) : 2 === t && T(n, a))
            }
            var N = 0;
            function L(e) {
                e[S] = N++,
                e._state = void 0,
                e._result = void 0,
                e._subscribers = []
            }
            var B = function() {
                function e(e, t) {
                    this._instanceConstructor = e,
                    this.promise = new e(E),
                    this.promise[S] || L(this.promise),
                    r(t) ? (this.length = t.length,
                    this._remaining = t.length,
                    this._result = new Array(this.length),
                    0 === this.length ? I(this.promise, this._result) : (this.length = this.length || 0,
                    this._enumerate(t),
                    0 === this._remaining && I(this.promise, this._result))) : T(this.promise, new Error("Array Methods must be provided an Array"))
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; void 0 === this._state && t < e.length; t++)
                        this._eachEntry(e[t], t)
                }
                ,
                e.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor
                      , r = n.resolve;
                    if (r === O) {
                        var o = x(e);
                        if (o === w && void 0 !== e._state)
                            this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof o)
                            this._remaining--,
                            this._result[t] = e;
                        else if (n === D) {
                            var i = new n(E);
                            C(i, e, o),
                            this._willSettleAt(i, t)
                        } else
                            this._willSettleAt(new n((function(t) {
                                return t(e)
                            }
                            )), t)
                    } else
                        this._willSettleAt(r(e), t)
                }
                ,
                e.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    void 0 === r._state && (this._remaining--,
                    2 === e ? T(r, n) : this._result[t] = n),
                    0 === this._remaining && I(r, this._result)
                }
                ,
                e.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    k(e, void 0, (function(e) {
                        return n._settledAt(1, t, e)
                    }
                    ), (function(e) {
                        return n._settledAt(2, t, e)
                    }
                    ))
                }
                ,
                e
            }()
              , D = function() {
                function e(t) {
                    this[S] = N++,
                    this._result = this._state = void 0,
                    this._subscribers = [],
                    E !== t && ("function" != typeof t && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(),
                    this instanceof e ? function(e, t) {
                        try {
                            t((function(t) {
                                M(e, t)
                            }
                            ), (function(t) {
                                T(e, t)
                            }
                            ))
                        } catch (t) {
                            T(e, t)
                        }
                    }(this, t) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return e.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                e.prototype.finally = function(e) {
                    var t = this.constructor;
                    return this.then((function(n) {
                        return t.resolve(e()).then((function() {
                            return n
                        }
                        ))
                    }
                    ), (function(n) {
                        return t.resolve(e()).then((function() {
                            throw n
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }();
            return D.prototype.then = w,
            D.all = function(e) {
                return new B(this,e).promise
            }
            ,
            D.race = function(e) {
                var t = this;
                return r(e) ? new t((function(n, r) {
                    for (var o = e.length, i = 0; i < o; i++)
                        t.resolve(e[i]).then(n, r)
                }
                )) : new t((function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                }
                ))
            }
            ,
            D.resolve = O,
            D.reject = function(e) {
                var t = new this(E);
                return T(t, e),
                t
            }
            ,
            D._setScheduler = function(e) {
                a = e
            }
            ,
            D._setAsap = function(e) {
                s = e
            }
            ,
            D._asap = s,
            D.polyfill = function() {
                var e = void 0;
                if (void 0 !== n)
                    e = n;
                else if ("undefined" != typeof self)
                    e = self;
                else
                    try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast)
                        return
                }
                e.Promise = D
            }
            ,
            D.Promise = D,
            D
        }
        ,
        e.exports = r()
    }
    ).call(this, n(118), n(119))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(72);
    t.getObjectKeys = function(e) {
        if ("function" == typeof Object.keys)
            return Object.keys(e);
        var t = [];
        for (var n in e)
            r.hasOwnProperty(e, n) && t.push(n);
        return t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.forEach = function(e, t, n) {
        for (var r = 0; r < e.length; r++)
            t.call(n, e[r], r, e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(26), i = n(59), a = o.getInternetExplorerVersion() > 0, s = function() {
        return r || window.JSON
    }, u = function(e) {
        var t = Object.prototype;
        if (t.toJSON) {
            var n = t.toJSON;
            t.toJSON = null;
            var r = s().stringify(e);
            return t.toJSON = n,
            r
        }
        return s().stringify(e)
    }, c = {
        parse: function(e) {
            return d(),
            s().parse(e)
        },
        stringify: function(e) {
            return d(),
            u(e)
        }
    };
    function d() {
        if (!r && document.body && !a) {
            var e = i.extractJSONFromIframe(document.body)
              , t = e.JSON
              , n = e.clean;
            r = t,
            n(),
            c.stringify = u,
            c.parse = r.parse
        }
    }
    e.exports = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.map = function(e, t, n) {
        for (var r = new Array(e.length), o = 0; o < e.length; o++)
            r[o] = t.call(n, e[o], o, e);
        return r
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(72);
    t.forOwn = function(e, t, n) {
        for (var o in e)
            r.hasOwnProperty(e, o) && t.call(n, e[o], o, e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.filter = function(e, t, n) {
        for (var r = [], o = 0; o < e.length; o++) {
            var i = e[o];
            t.call(n, i, o, e) && r.push(i)
        }
        return r
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(126)
      , o = n(127);
    t.random = r.IS_BROKEN_MATH_RANDOM ? o.pseudoRandom : function() {
        return Math.random()
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isString = function(e) {
        return "string" == typeof e
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(123)
      , a = n(45)
      , s = n(124)
      , u = n(125);
    var c = function(e) {
        function t(n, r) {
            void 0 === r && (r = {});
            var o = this
              , c = "object" == typeof n ? n : {
                message: String(n || s.DEFAULT_ERROR.message)
            };
            o = e.call(this) || this,
            u(o, t.prototype),
            o.message = r.message || c.message || s.DEFAULT_ERROR.message,
            o.code = r.code || c.code || c.id || s.DEFAULT_ERROR.code,
            o.isFatal = Boolean(i.getFirstDefined([r.isFatal, c.isFatal, s.DEFAULT_ERROR.isFatal])),
            o.details = r.details || c.details || s.DEFAULT_ERROR.details;
            var d = r.stack || c.stack || function(e) {
                var t = e.url
                  , n = e.line
                  , r = e.col
                  , o = e.fileName
                  , i = e.columnNumber
                  , a = e.lineNumber;
                return (t || o || "?") + ":" + (n || a || "?") + ":" + (r || i || "?")
            }(c)
              , l = d === s.DEFAULT_ERROR.stack ? o.stack : d;
            if (l && l !== s.DEFAULT_ERROR.stack)
                o.stack = l;
            else if (!o.stack)
                try {
                    throw new Error(o.message)
                } catch (e) {
                    o.stack = l = e.stack || s.DEFAULT_ERROR.stack
                }
            return o.toString = function() {
                return a.jsonStringifyCircular(o.toJSON())
            }
            ,
            o.toJSON = function() {
                return {
                    message: o.message,
                    code: o.code,
                    isFatal: o.isFatal,
                    details: o.details,
                    stack: l
                }
            }
            ,
            o
        }
        return o(t, e),
        t
    }(Error);
    t.CustomError = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o, i = Math.random(), a = {
        loader: 1941,
        legacyBundle: 1941,
        bundles: [[1, 1940]],
        freezeBundles: [{
            bannerType: "media-banner_theme",
            bannerVersion: 1,
            packetVersion: 282,
            legacyPacketVersion: 282
        }]
    }, s = n(162), u = n(164), c = !s.hasAtoB() || !s.hasObjectCreate() || !u.hasObjectDefineProperty;
    function d(e, t) {
        void 0 === t && (t = i);
        for (var n = 0, r = [0], o = 0; o < e.length && (n += e[o][0],
        r = e[o],
        !(t <= n)); o++)
            ;
        return r[1]
    }
    t.choose = d,
    t.getPacketVersionAndBundleName = function(e, n) {
        void 0 === e && (e = ""),
        void 0 === n && (n = c);
        var r = a.freezeBundles || []
          , o = "object" == typeof e ? e.name + "_v_" + e.version : e
          , i = t.bundleVersion;
        return r.forEach((function(t) {
            var r = t.bannerType
              , a = void 0 === r ? "" : r
              , s = t.bannerVersion
              , u = t.packetVersion
              , c = t.legacyPacketVersion;
            o.indexOf(a) > -1 && "object" == typeof e && s === e.version && (i = n ? c : u)
        }
        )),
        {
            bundleName: o,
            packetVersion: i
        }
    }
    ,
    t.loaderVersion = a.loader,
    t.bundleVersion = (r = a.bundles,
    void 0 === o && (o = c),
    o ? a.legacyBundle : d(r, i))
}
, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(27)
      , o = n(73).getNativeMethod(Array, "isArray");
    t.isArray = Boolean(o) ? function(e) {
        return o.call(Array, e)
    }
    : function(e) {
        return "Array" === r.getInternalClass(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(50);
    t.videoEncode = r.getVideoEncode(window)
}
, , , function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.text = function(e, t) {
        void 0 === e && (e = {});
        "string" == typeof t && (e[r] = t);
        return e[r] || ""
    }
    ,
    t.elementByTag = o,
    t.getBaseURI = function(e) {
        var t = e.document
          , n = t.baseURI;
        if (void 0 === n) {
            var r = o(t, "base");
            n = r ? r.href : t.URL
        }
        return n
    }
    ,
    t.closestElementWithAttr = function(e, t) {
        var n, r = null;
        for (; e && 1 === e.nodeType; ) {
            if (n = e.getAttribute(t)) {
                r = e;
                break
            }
            e = e.parentNode
        }
        return {
            element: r,
            value: n
        }
    }
    ,
    t.getCurrentScript = function(e) {
        if (e.currentScript)
            return e.currentScript;
        var t = e.getElementsByTagName("script");
        return t[t.length - 1]
    }
    ,
    t.elementOffset = i,
    t.pageOffset = function(e) {
        var t = e.document
          , n = void 0 !== e.pageXOffset
          , r = "CSS1Compat" === (t.compatMode || "");
        return {
            left: n ? e.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            top: n ? e.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }
    ,
    t.removeChildren = function(e) {
        for (; e.firstChild; )
            e.removeChild(e.firstChild)
    }
    ,
    t.getCursorPositionOnElement = void 0;
    var r = n(46).IS_IE8 ? "innerText" : "textContent";
    function o(e, t) {
        return e.querySelector(t)
    }
    function i(e) {
        var t = e.getBoundingClientRect()
          , n = e.ownerDocument
          , r = n.documentElement
          , o = n.defaultView || n.parentWindow;
        return {
            top: t.top + (o.pageYOffset || r.scrollTop) - (r.clientTop || 0),
            left: t.left + (o.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
        }
    }
    t.getCursorPositionOnElement = function(e) {
        var t = void 0 === e ? {} : e
          , n = t.element
          , r = t.event
          , o = r.pageX
          , a = r.pageY
          , s = r.clientX
          , u = r.clientY
          , c = void 0 === o ? s : o
          , d = void 0 === a ? u : a
          , l = i(n)
          , f = {
            x: c - l.left,
            y: d - l.top
        }
          , p = f.x
          , h = f.y;
        return {
            width: n.clientWidth,
            height: n.clientHeight,
            x: p,
            y: h
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13);
    t.generateHexString = function(e) {
        for (var t = "", n = 0; n < e; n++)
            t += (16 * r.random() | 0).toString(16);
        return t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(63);
    t.getInternetExplorerVersion = function(e) {
        void 0 === e && (e = window);
        var t = r(e);
        return "boolean" == typeof t ? -1 : t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {}.toString
      , o = /\[object (\w+)\]/;
    t.getInternalClass = function(e) {
        var t = r.call(e);
        if (!t)
            return null;
        var n = t.match(o);
        if (!n)
            return null;
        var i = n[1];
        return i || null
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(29);
    t.getFriendlyWindowsChain = function(e) {
        for (var t = []; e; )
            try {
                if (r.getWindowLocation(e),
                t.push(e),
                e.parent === e)
                    break;
                e = e.parent
            } catch (e) {
                break
            }
        return t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getWindowLocation = function(e) {
        if (e && e.location) {
            var t = e.location;
            return "function" == typeof t.toString ? t.toString() : t.href || ""
        }
        return ""
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(1);
    t.get = function(e, t) {
        var n, i;
        try {
            for (var a = r(t.split(".")), s = a.next(); !s.done; s = a.next()) {
                var u = s.value;
                if (!o.isObject(e)) {
                    e = void 0;
                    break
                }
                e = e[u]
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (i = a["return"]) && i.call(a)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.once = function(e) {
        var t = function() {
            t = function() {
                return n
            }
            ;
            var n = e.apply(this, arguments);
            return n
        };
        return function() {
            return t.apply(this, arguments)
        }
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getUserAgent = function(e) {
        void 0 === e && (e = window);
        try {
            return (e.navigator || {}).userAgent || ""
        } catch (e) {
            return ""
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.prefixes = ["", "webkit", "moz", "o", "ms"],
    t.cssPrefixes = ["", "-webkit-", "-ms-", "-moz-", "-o-"]
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(74)
      , o = r.parentFriendlyIFrames.length;
    t.TOP_FRIENDLY_WINDOW = o > 0 ? r.parentFriendlyIFrames[o - 1].ownerDocument.defaultView : window
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.rethrowError = function(e) {
        setTimeout((function() {
            throw e
        }
        ), 0)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(100);
    t.getTopLocationData = function(e) {
        var t = ""
          , n = "";
        return e && r.getParentLocationsData(e).reverse().forEach((function(e) {
            var r = e.location
              , o = e.referrer;
            t = t || r,
            n = n || o
        }
        )),
        {
            location: t,
            referrer: n
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(152);
    t.isInSecureIFrame = r.isInSecureIFrame()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(7);
    t.getObjectEntries = function(e) {
        return "function" == typeof Object.entries ? Object.entries(e) : r.getObjectKeys(e).map((function(t) {
            return [t, e[t]]
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4);
    t.subscribeGlobalCallback = r.noop
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.removeNodeFromParent = function(e) {
        if (e) {
            var t = e.parentElement;
            t && t.removeChild(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getHasObjectDefineProperty = function(e) {
        void 0 === e && (e = window);
        var t = e.Object;
        try {
            var n = {};
            return t.defineProperty(n, "sentinel", {}),
            "sentinel"in n
        } catch (e) {
            return !1
        }
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(61)
      , o = n(2)
      , i = n(59)
      , a = n(1)
      , s = n(15);
    t.jsonStringifyCircular = function(e) {
        var t, n, u, c;
        return i.getNativeJSON().stringify(e, (t = [],
        u = "undefined" != typeof WeakMap ? new WeakMap : void 0,
        c = [],
        n = {
            set: function(e, t) {
                if (void 0 !== u)
                    try {
                        u.set(e, t)
                    } catch (n) {
                        c.push({
                            path: t,
                            value: e
                        })
                    }
                else
                    c.push({
                        path: t,
                        value: e
                    })
            },
            get: function(e) {
                var t = r.find(c, (function(t) {
                    return t.value === e
                }
                ));
                return void 0 !== u && void 0 === t ? u.get(e) : t ? t.path : void 0
            }
        },
        function(e, r) {
            if (o.isFunction(r))
                return s.isString(r.name) ? r.name : "[Function]";
            if (!a.isObject(r))
                return r;
            var i = n.get(r);
            if (i)
                return "[Circular " + i + "]";
            for (; t.length > 0 && t[t.length - 1].value[e] !== r; )
                t.pop();
            var u = (t.length > 0 ? t[t.length - 1].path : "") + (e ? "/" + e : "~");
            return t.push({
                path: u,
                value: r
            }),
            n.set(r, u),
            r
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.iOSVer = t.isWebkit = t.isSVGSupported = t.isPassiveEventsSupported = t.isCanvasSupported = t.isIEMobile = t.isIe = t.isFirefox = t.IS_IE8 = t.IS_DESKTOP = t.ieVer = t.isSafeframe = t.isAMP = t.isIOS = t.isTouch = void 0;
    var r = n(63)
      , o = (navigator || {}).userAgent || ""
      , i = (navigator || {}).platform || ""
      , a = void 0 !== window.ontouchstart;
    t.isTouch = a;
    var s = r()
      , u = /iP(hone|od|ad)/.test(i);
    t.isIOS = u;
    var c = Boolean(window.ampSeen);
    t.isAMP = c;
    var d = Boolean(window.$sf && window.$sf.ext);
    t.isSafeframe = d;
    var l = s;
    t.ieVer = l;
    var f = !a && screen.width >= 1024 && screen.height >= 728;
    t.IS_DESKTOP = f;
    var p = 8 === s;
    t.IS_IE8 = p;
    var h = /Firefox/gi.test(o);
    t.isFirefox = h;
    var v = Boolean(s);
    t.isIe = v;
    var g = /IEMobile|Nokia|Lumia/gi.test(o);
    t.isIEMobile = g;
    var _, y = (_ = document.createElement("canvas"),
    Boolean(_ && _.getContext && _.getContext("2d")));
    t.isCanvasSupported = y;
    var b = function() {
        var e = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    e = !0
                }
            });
            window.addEventListener("test", null, t)
        } catch (e) {}
        return e
    }();
    t.isPassiveEventsSupported = b;
    var m, w = ((m = document.createElement("div")).innerHTML = "<svg/>",
    "http://www.w3.org/2000/svg" === ("undefined" != typeof SVGRect && m.firstChild && m.firstChild.namespaceURI));
    t.isSVGSupported = w;
    var O = /WebKit/gi.test(o);
    t.isWebkit = O;
    var S, E = ((S = navigator.appVersion.match(/OS (\d+)_/)) && (S = parseInt(S[1], 10)),
    u && S || -1);
    t.iOSVer = E
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.listToArray = function(e) {
        if (!e)
            return [];
        for (var t = [], n = 0; n < e.length; n++)
            t.push(e[n]);
        return t
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getHead = function(e) {
        var t = e.document
          , n = t.getElementsByTagName("head")[0];
        return n || (n = t.createElement("head"),
        t.documentElement.appendChild(n)),
        n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(28)
      , o = n(2)
      , i = n(30)
      , a = n(95);
    t.getVideoEncode = function(e) {
        if (void 0 === e && (e = window),
        a.encodeUrl)
            return a.encodeUrl;
        for (var t = r.getFriendlyWindowsChain(e); t.length; ) {
            var n = t.pop();
            if (n) {
                var s = i.get(n, "ya.videoAd.encodeUrl");
                if (o.isFunction(s))
                    return s
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(96);
    t.getDocumentVisibility = function(e, t) {
        void 0 === t && (t = !0);
        var n = r.getDocumentHiddenProperty(e);
        return n ? !e[n] : t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(69);
    t.getParentFriendlyIFrames = function(e, t) {
        if (void 0 === t && (t = !0),
        r.isSafariBasedBrowser && t)
            return [];
        for (var n = [], o = e; ; )
            try {
                if (!(o = o.ownerDocument.defaultView.frameElement))
                    return n;
                n.push(o)
            } catch (e) {
                return n
            }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(151).getTopAncestor()
      , o = r.topAncestor
      , i = r.isTrusted;
    t.TOP_ANCESTOR = o,
    t.IS_TOP_ANCESTOR_TRUSTED = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13);
    t.RANDOM = r.random()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(157)
          , i = n(158)
          , a = n(40)
          , s = n(159)
          , u = n(160);
        t.globalCallbackFactory = function(e) {
            var t = e.win
              , n = e.propertyName;
            return {
                call: function(e) {
                    return o.callGlobalCallback(r({
                        win: t,
                        propertyName: n
                    }, e))
                },
                subscribe: function(e) {
                    return a.subscribeGlobalCallback(r({
                        win: t,
                        propertyName: n
                    }, e))
                },
                wait: function(e) {
                    return s.waitForGlobalFunctionCallback(r({
                        win: t,
                        propertyName: n
                    }, e))
                },
                waitUntil: function(e) {
                    return u.waitUntilGlobalCallback(r({
                        win: t,
                        propertyName: n
                    }, e))
                },
                clear: function(e) {
                    return i.clearGlobalCallbacks(r({
                        win: t,
                        propertyName: n
                    }, e))
                }
            }
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2);
    function o() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return e.join("")
    }
    t.callSafe = function(e) {
        try {
            return e()
        } catch (e) {
            return
        }
    }
    ,
    t.protect = function(e, n, o, i) {
        return function() {
            try {
                return n.apply(o || this, arguments)
            } catch (n) {
                if (r.isFunction(i) && i(n),
                !0 === n.preventProtect)
                    throw n;
                t.protect.log(n, e)
            }
        }
    }
    ,
    t.rethrowAsync = function(e, n) {
        setTimeout((function() {
            t.protect.log(e, n)
        }
        ))
    }
    ,
    t.protect.log = function(e, t) {
        console.log("LOG:" + t + ":" + e)
    }
    ,
    t.protect.setTimeout = function(e, n, r, o) {
        return window.setTimeout(t.protect("timeout", e, r, o), n)
    }
    ;
    var i = function() {
        function e() {}
        return e.YaContextCallbacks = o("Ya.C", "ontext._callbacks"),
        e.YaContextCallbacksCalls = o("Ya.C", "ontext._callbacks_call"),
        e.AdvManager = o("A", "dvManager"),
        e.AdvBlock = o("A", "dvBlock"),
        e.RTB = o("R", "TB"),
        e.Rtb = o("R", "tb"),
        e.MetrikaAdtune = o("metrika_a", "dtune"),
        e
    }();
    t.ProtectedNames = i
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(85), i = n(71), a = n(5);
    t.extractJSONFromIframe = function(e) {
        void 0 === e && (e = document.body);
        var t = o.createHiddenFriendlyIFrame(e);
        return {
            JSON: t.contentWindow.JSON,
            clean: function() {
                return i.removeIframe(t)
            }
        }
    }
    ,
    t.getNativeJSON = function(e) {
        return void 0 === e && (e = window),
        void 0 === r && (r = u(e) ? e.JSON : {
            stringify: s("stringify"),
            parse: s("parse")
        }),
        r
    }
    ;
    var s = function(e) {
        return function(n) {
            var r = t.extractJSONFromIframe()
              , o = r.JSON
              , i = r.clean;
            try {
                return o[e](n)
            } finally {
                i()
            }
        }
    };
    function u(e) {
        return void 0 === e && (e = window),
        e.JSON && a.checkNativeCode(e.JSON.stringify) && a.checkNativeCode(e.JSON.parse)
    }
    t.checkNativeJSON = u
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(135);
    t.getIsIOS = function(e) {
        void 0 === e && (e = window);
        var t = e.navigator.userAgent.toLowerCase();
        return /ipad|iphone|ipod/.test(t) && !e.MSStream && !r.isUCBrowser(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5)
      , o = [].find;
    t.find = r.checkNativeCode(o) ? function(e, t) {
        return o.call(e, t)
    }
    : function(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t(r, n, e))
                return r
        }
    }
}
, , function(e, t) {
    e.exports = function(e) {
        e || (e = window);
        var t = e.navigator.userAgent
          , n = t.indexOf("MSIE ");
        if (n > 0)
            return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
        if (t.indexOf("Trident/") > 0) {
            var r = t.indexOf("rv:");
            return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10)
        }
        var o = t.indexOf("Edge/");
        return o > 0 && parseInt(t.substring(o + 5, t.indexOf(".", o)), 10)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(93)
      , o = n(21);
    t.isAdblock = function() {
        var e = r.config && r.config.encode && r.config.encode.key;
        return Boolean(o.videoEncode) || -1 === ["", "__ADB_KEY__"].indexOf(e)
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(31)
          , i = n(4)
          , a = n(11);
        t.request = function e(t) {
            var n, s = t.method, u = t.url, c = t.async, d = void 0 === c || c, l = t.data, f = t.responseType, p = void 0 === f ? "text" : f, h = t.onBeforeSend, v = void 0 === h ? i.noop : h, g = t.onRetry, _ = void 0 === g ? i.noop : g, y = t.checkStatus, b = void 0 === y ? function(e) {
                return 200 === e
            }
            : y, m = t.headers, w = void 0 === m ? {} : m, O = t.xhrConstructor, S = void 0 === O ? XMLHttpRequest : O, E = t.retries, P = void 0 === E ? 0 : E, x = t.timeout, C = void 0 === x ? 0 : x, M = t.withCredentials, A = t.onAbort, I = t.onSetup, T = t.onSuccess ? o.once(t.onSuccess) : i.noop, k = t.onError ? o.once(t.onError) : i.noop, j = !1, R = 0, N = function(e) {
                j = !0,
                N = i.noop,
                n = e,
                L(new Error("Abort request")),
                "function" == typeof A && A(e)
            }, L = function(o) {
                if (B.onerror = null,
                B.onreadystatechange = null,
                R && clearTimeout(R),
                R && 4 !== B.readyState || j)
                    try {
                        B.abort()
                    } catch (o) {}
                if (!j)
                    if (P > 0) {
                        var a = _(o, B);
                        if ("boolean" != typeof a || Boolean(a) || N(),
                        j)
                            return;
                        e(r(r({}, t), {
                            onSetup: function(e) {
                                var t = e.abort;
                                N = function(e) {
                                    return t(e)
                                }
                                ,
                                j && t(n)
                            },
                            retries: P - 1
                        }))
                    } else
                        N = i.noop,
                        k(o, B)
            }, B = new S;
            try {
                B.open(s, u, d)
            } catch (e) {
                return void L(e)
            }
            if (B.responseType = p,
            B.withCredentials = Boolean(M),
            a.forOwn(w, (function(e, t) {
                try {
                    B.setRequestHeader(t, e)
                } catch (e) {}
            }
            )),
            C > 0 && isFinite(C) && (R = window.setTimeout((function() {
                L(new Error("Request timeout, " + u))
            }
            ), C)),
            B.onerror = L,
            B.onreadystatechange = function() {
                if (4 === B.readyState) {
                    var e = B.status;
                    b(e) ? (N = i.noop,
                    clearTimeout(R),
                    T(B)) : L(new Error("Invalid request status " + e + ", " + u))
                }
            }
            ,
            !("function" == typeof I && (I({
                abort: function(e) {
                    return N(e)
                }
            }),
            j) || (v(B, t),
            j)))
                try {
                    B.send(l)
                } catch (e) {
                    L(e)
                }
        }
    }
    ).call(this, n(0))
}
, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(133);
    t.isSafariBasedBrowser = r.getIsSafariBasedBrowser()
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(42);
    t.removeIframe = function(e) {
        e.src = "",
        r.removeNodeFromParent(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.hasOwnProperty = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.getNativeMethod = function(e, t) {
        var n = e[t];
        if (!r.checkNativeCode(n)) {
            var o = n;
            try {
                delete e[t];
                var i = e[t];
                "function" == typeof i && (n = i),
                e[t] = o
            } catch (e) {}
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(52);
    t.parentFriendlyIFrames = r.getParentFriendlyIFrames(document.documentElement)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2)
      , o = n(1);
    t.isMatchingMediaQuery = function(e, t) {
        if (!r.isFunction(e.matchMedia))
            return !1;
        var n = e.matchMedia(t);
        return o.isObject(n) && Boolean(n.matches)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(149)
      , o = n(47);
    t.getAncestorOrigins = function(e) {
        return r.isAncestorOriginsSupported ? o.listToArray(e.location.ancestorOrigins) : []
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(153).getCurrentScript();
    t.CURRENT_SCRIPT_SRC = r ? r.src : ""
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.entriesToObject = function(e) {
        var t = {};
        return e.forEach((function(e) {
            var n = r(e, 2)
              , o = n[0]
              , i = n[1];
            t[o] = i
        }
        )),
        t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13)
      , o = n(54);
    t.portion = function(e, t, n, i) {
        void 0 === i && (i = !1);
        var a = (i ? r.random() : o.RANDOM) < e
          , s = a ? t : n;
        return "function" == typeof s && s(),
        a
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(101).isNativeSendBeaconSupported(window);
    t.sendBeaconShim = function(e, t) {
        return !!r && window.navigator.sendBeacon(e, t)
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(20);
    t.callFunctions = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        i.isArray(e) && e.forEach((function(e) {
            "function" == typeof e && e.apply(void 0, o(t))
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(91)
          , i = n(17)
          , a = n(16)
          , s = n(136);
        t.createLogger = function(e) {
            var t = e.service
              , n = e.probability
              , u = new o.Stats({
                service: t,
                version: String(i.loaderVersion),
                createTagsFunction: function(e) {
                    return e.eventName === s.EVENT_RENDER_PERFOMANCE || e.eventName === s.EVENT_NETWORK_PERFOMANCE ? e.values : o.CREATE_TAGS_FOR_STATS_DEFAULT(e)
                }
            })
              , c = {
                bundleVersion: String(i.bundleVersion)
            };
            return {
                logEvent: function(e) {
                    if ("string" == typeof e)
                        u.event({
                            name: e,
                            probability: n
                        });
                    else {
                        var t = e.name
                          , o = e.labels
                          , i = e.data
                          , a = e.probability
                          , s = void 0 === a ? n : a;
                        u.event({
                            name: t,
                            labels: o,
                            data: r(r({}, i), c),
                            probability: s
                        })
                    }
                },
                logError: function(e) {
                    if ("string" == typeof e)
                        u.error({
                            error: new a.CustomError({
                                code: e
                            }),
                            probability: n
                        });
                    else {
                        var t = e.message
                          , r = e.labels
                          , o = e.data
                          , i = e.probability
                          , s = void 0 === i ? n : i;
                        u.error({
                            error: new a.CustomError({
                                code: t,
                                details: o
                            }),
                            labels: r,
                            probability: s
                        })
                    }
                },
                logValue: function(e) {
                    var t = e.name
                      , o = e.labels
                      , i = e.value
                      , a = e.data
                      , s = e.probability
                      , d = void 0 === s ? n : s;
                    u.value({
                        name: t,
                        labels: o,
                        value: i,
                        probability: d,
                        data: r(r({}, a), c)
                    })
                },
                logValues: function(e) {
                    var t = e.name
                      , o = e.values
                      , i = e.labels
                      , a = e.data
                      , s = e.probability
                      , d = void 0 === s ? n : s;
                    u.values({
                        name: t,
                        labels: i,
                        values: o,
                        data: r(r({}, a), c),
                        probability: d
                    })
                },
                errorToStats: function(e, t) {
                    u.errorToStats(e, t)
                }
            }
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(73);
    t.addEventListenerFunction = function(e, t, n) {
        e.attachEvent("on" + t, n)
    }
    ,
    t.removeEventListenerFunction = function(e, t, n) {
        e.detachEvent("on" + t, n)
    }
    ,
    r.getNativeMethod(document, "addEventListener") && r.getNativeMethod(document, "removeEventListener") && (t.addEventListenerFunction = function(e, t, n, o) {
        var i = e && r.getNativeMethod(e, "addEventListener");
        i && i.call(e, t, n, o)
    }
    ,
    t.removeEventListenerFunction = function(e, t, n, o) {
        var i = e && r.getNativeMethod(e, "removeEventListener");
        i && i.call(e, t, n, o)
    }
    )
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(86);
    t.createHiddenFriendlyIFrame = function(e) {
        var t = r.createFriendlyIFrame(e);
        return t.width = "0",
        t.height = "0",
        t.style.position = "absolute",
        t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.createFriendlyIFrame = function(e, t) {
        var n = void 0 === t ? {} : t
          , r = n.content
          , o = n.size
          , i = e.ownerDocument.createElement("iframe");
        i.scrolling = "no",
        i.setAttribute("allowfullscreen", ""),
        i.style.display = "block",
        o && (i.height = o.height,
        i.width = o.width),
        e.appendChild(i);
        var a = i.contentDocument;
        return a.open(),
        r && a.write(r),
        a.close(),
        a.body.style.margin = "0",
        i.style.borderWidth = "0",
        i
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.M = "__ADB_CONFIG__"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(93)
      , o = n(184);
    t.decode = function(e) {
        return o.serverEncodeEnabled(r.config.fn) ? r.config.fn.decodeUrl(e) : e
    }
    ,
    t.isEncoded = function(e) {
        return !!o.serverEncodeEnabled(r.config.fn) && r.config.fn.isEncodedUrl(e)
    }
    ,
    t.encode = function(e) {
        return o.serverEncodeEnabled(r.config.fn) ? r.config.fn.encodeUrl(e) : e
    }
}
, function(e, t, n) {
    var r = n(199);
    function o() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return o = function() {
            return e
        }
        ,
        e
    }
    e.exports = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" !== r(e) && "function" != typeof e)
            return {
                default: e
            };
        var t = o();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
                var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
            }
        return n["default"] = e,
        t && t.set(e, n),
        n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.some = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n], n, e))
                return !0;
        return !1
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , o = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }
          , i = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i["return"]) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(21)
          , s = n(51)
          , u = n(97)
          , c = n(16)
          , d = n(36)
          , l = n(98)
          , f = n(53)
          , p = n(77)
          , h = n(37)
          , v = n(29)
          , g = n(25)
          , _ = n(2)
          , y = n(38)
          , b = n(45)
          , m = n(65)
          , w = n(78)
          , O = n(11)
          , S = n(39)
          , E = n(1)
          , P = n(79)
          , x = n(54)
          , C = n(80)
          , M = n(3)
          , A = n(154)
          , I = n(102)
          , T = n(103)
          , k = n(155)
          , j = n(156);
        n(104);
        t.SEPARATE_SIGN = "_",
        t.CREATE_TAGS_FOR_STATS_DEFAULT = function(e) {
            var n, o = e.eventType, i = e.eventName, a = e.value, s = e.values, u = {};
            return O.forOwn(s, (function(e, n) {
                u["" + o + t.SEPARATE_SIGN + i + t.SEPARATE_SIGN + n] = e
            }
            )),
            r(((n = {})["" + o + t.SEPARATE_SIGN + i] = a,
            n), u)
        }
        ;
        var R = function(e) {
            return e.isFatal ? j.StatsEventType.fatal : j.StatsEventType.error
        }
          , N = /^\w(\-|_|:|\s|\.|\w){1,20}$/
          , L = /^\w(\-|_|:|\s|\.|\w){0,70}$/
          , B = /^\w(\-|_|:|\s|\.|\w){1,70}$/
          , D = function() {
            function e(t) {
                var n = this;
                this.rootFields = {},
                this.labels = {},
                this.event = function(e) {
                    var t = e.name
                      , r = e.data
                      , o = e.labels
                      , i = e.probability
                      , a = e.extraRootFields;
                    n.push({
                        eventType: j.StatsEventType.event,
                        eventName: t,
                        data: r,
                        additionalStatsLabels: o,
                        probability: i,
                        extraRootFields: a
                    })
                }
                ,
                this.error = function(e) {
                    var t = e.error
                      , r = e.labels
                      , o = e.probability
                      , i = e.extraRootFields
                      , a = new c.CustomError(t);
                    n.push({
                        eventName: String(a.code),
                        eventType: R(a),
                        data: a,
                        additionalStatsLabels: r,
                        probability: o,
                        extraRootFields: i
                    })
                }
                ,
                this.value = function(e) {
                    var t = e.name
                      , r = e.value
                      , o = e.data
                      , i = e.labels
                      , a = e.probability
                      , s = e.extraRootFields;
                    n.push({
                        eventName: t,
                        value: r,
                        eventType: j.StatsEventType.value,
                        data: o,
                        additionalStatsLabels: i,
                        probability: a,
                        extraRootFields: s
                    })
                }
                ,
                this.values = function(e) {
                    var t = e.name
                      , r = e.values
                      , o = e.data
                      , i = e.labels
                      , a = e.probability
                      , s = e.extraRootFields;
                    n.push({
                        eventName: t,
                        eventType: j.StatsEventType.values,
                        data: o,
                        additionalStatsLabels: i,
                        probability: a,
                        values: r,
                        extraRootFields: s
                    })
                }
                ,
                this.warning = function(e) {
                    var t = e.name
                      , r = e.message
                      , o = e.probability
                      , i = e.extraRootFields;
                    E.isObject(console) && _.isFunction(console.warn) && console.warn(r),
                    n.push({
                        eventName: t,
                        eventType: j.StatsEventType.warning,
                        data: {
                            message: r
                        },
                        probability: o,
                        extraRootFields: i
                    })
                }
                ,
                this.getParams = function() {
                    var e = n.params;
                    e.onLogError;
                    return o(e, ["onLogError"])
                }
                ,
                this.setRootFields = function(e) {
                    S.getObjectEntries(e).forEach((function(e) {
                        var t = i(e, 2)
                          , r = t[0]
                          , o = t[1];
                        void 0 === o ? delete n.rootFields[r] : n.rootFields[r] = o
                    }
                    ))
                }
                ,
                this.setLabels = function(e) {
                    S.getObjectEntries(e).forEach((function(e) {
                        var t = i(e, 2)
                          , r = t[0]
                          , o = t[1];
                        void 0 === o ? delete n.labels[r] : n.labels[r] = o
                    }
                    ))
                }
                ,
                this.eventToStats = function(e, t, r, o) {
                    n.push({
                        eventType: j.StatsEventType.event,
                        eventName: e,
                        data: t,
                        additionalStatsLabels: r,
                        extraRootFields: o
                    })
                }
                ,
                this.errorToStats = function(e, t, r) {
                    var o = new c.CustomError(e);
                    n.push({
                        eventName: String(o.code),
                        eventType: R(o),
                        data: o,
                        additionalStatsLabels: t,
                        extraRootFields: r
                    })
                }
                ,
                this.deprecated = function(e, t) {
                    E.isObject(console) && _.isFunction(console.warn) && console.warn(t),
                    n.push({
                        eventName: e,
                        eventType: j.StatsEventType.deprecated,
                        data: {
                            message: t
                        }
                    })
                }
                ,
                this.valueToStats = function(e, t, r, o) {
                    n.push({
                        eventName: e,
                        value: t,
                        eventType: j.StatsEventType.value,
                        data: r,
                        additionalStatsLabels: o
                    })
                }
                ;
                var a = t.onLogError;
                this.params = r(r({}, t), {
                    sid: t.sid || g.generateHexString(I.DEFAULT_SID_LENGTH),
                    onLogError: a ? function(e) {
                        try {
                            a(e)
                        } catch (e) {
                            d.rethrowError(e)
                        }
                    }
                    : d.rethrowError
                }),
                this.logUrl = e.getLogUrl(t),
                this.isStrmLogUrl = this.logUrl === T.STRM_LOGS_URL
            }
            return e.getLogUrl = function(e) {
                return e.logUrl ? e.logUrl : !0 === e.useAlias ? T.PCODE_LOGS_URL_ALIAS : T.PCODE_LOGS_URL
            }
            ,
            e.prototype.push = function(t) {
                var n, o = t.eventName, i = t.eventType, a = t.data, s = void 0 === a ? {} : a, u = t.additionalStatsLabels, d = t.value, l = void 0 === d ? 1 : d, f = t.probability, p = void 0 === f ? 1 : f, h = t.values, v = void 0 === h ? {} : h, g = t.extraRootFields, _ = void 0 === g ? {} : g;
                if (P.portion(p)) {
                    var y = this.params
                      , m = y.service
                      , w = y.version
                      , O = {
                        service: m,
                        version: w,
                        data: s,
                        eventName: o,
                        eventType: i,
                        additionalStatsLabels: u,
                        value: l,
                        values: v
                    };
                    if (e.isSendingData)
                        throw new c.CustomError({
                            message: "RecursiveStatsRequests",
                            details: {
                                service: m,
                                version: w,
                                eventType: i,
                                eventName: o
                            }
                        });
                    e.isSendingData = !0;
                    try {
                        var S = this.logUrl;
                        this.params.sendOnlyPrimaryParams || (S = M.addParamsToUrl(this.logUrl, r(((n = {})[m] = w,
                        n[i] = o,
                        n), u)));
                        var E = this.createFullStatsObject(O, _)
                          , x = _.routeToJSTracer
                          , C = void 0 === x || x;
                        this.isStrmLogUrl && C && (E.routeToJSTracer = !0),
                        this.sendData(S, b.jsonStringifyCircular(E))
                    } catch (t) {
                        e.isSendingData = !1,
                        this.params.onLogError(new c.CustomError(t,{
                            details: {
                                service: m,
                                version: w,
                                eventType: i,
                                eventName: o
                            }
                        }))
                    }
                    e.isSendingData = !1
                }
            }
            ,
            e.prototype.sendData = function(e, t) {
                if (this.params.useSendBeacon && C.sendBeaconShim(e, t))
                    return;
                m.request({
                    url: e,
                    data: t,
                    method: "POST",
                    onBeforeSend: this.params.onBeforeSend
                })
            }
            ,
            e.prototype.createFullStatsObject = function(e, n) {
                var o = e.service
                  , c = e.version
                  , d = e.eventName
                  , g = e.eventType
                  , b = e.data
                  , m = e.additionalStatsLabels
                  , O = e.value
                  , E = (this.params.createTagsFunction || t.CREATE_TAGS_FOR_STATS_DEFAULT)(e)
                  , P = r(r(r({}, this.labels), m), {
                    version: this.params.version
                })
                  , C = {
                    service: o,
                    tags: w.entriesToObject(S.getObjectEntries(E).map((function(e) {
                        var t = i(e, 2)
                          , n = t[0]
                          , r = t[1];
                        return B.test(n) ? [n, r] : [k.RECOVER_PARAMS.sensorName, r]
                    }
                    ))),
                    labels: w.entriesToObject(S.getObjectEntries(P).map((function(e) {
                        var t = i(e, 2)
                          , n = t[0]
                          , r = t[1];
                        return N.test(n) || (n = k.RECOVER_PARAMS.labelKey),
                        L.test(r) || (r = k.RECOVER_PARAMS.labelValue),
                        [n, r]
                    }
                    )))
                }
                  , M = h.getTopLocationData(document)
                  , A = M.location
                  , I = M.referrer;
                return r(r(r(r({}, n), this.rootFields), C), {
                    timestamp: Date.now(),
                    eventType: g,
                    eventName: d,
                    data: b,
                    sid: this.params.sid,
                    version: c,
                    location: v.getWindowLocation(window),
                    topLocation: A,
                    topAncestor: f.TOP_ANCESTOR,
                    isTopAncestorUndetermined: !f.IS_TOP_ANCESTOR_TRUSTED || void 0,
                    ancestorOrigins: l.ANCESTOR_ORIGINS,
                    documentIsVisible: s.getDocumentVisibility(document),
                    referrer: window.document.referrer,
                    topReferrer: I,
                    currentScriptSrc: p.CURRENT_SCRIPT_SRC,
                    secureIFrame: y.isInSecureIFrame,
                    isVideoADB: _.isFunction(a.videoEncode),
                    value: O,
                    rnd: x.RANDOM,
                    topDocumentFocus: u.getTopDocumentFocus()
                })
            }
            ,
            e.isSendingData = !1,
            e
        }();
        t.Stats = D,
        t.stats = new D({
            service: A.COMMON_LOCAL_STATS_SERVICE_NAME,
            version: "0",
            sid: g.generateHexString(I.DEFAULT_SID_LENGTH)
        })
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(49)
          , i = n(4)
          , a = n(42)
          , s = n(165)
          , u = n(168)
          , c = function(e) {
            return !0
        };
        t.loadScriptLite = function(e) {
            var t = e.dropCacheOnRetry
              , n = void 0 !== t && t
              , d = e.onBeforeLoad
              , l = void 0 === d ? i.noop : d
              , f = e.retries
              , p = void 0 === f ? 0 : f;
            if (!e.checkLoad || !e.checkLoad()) {
                var h = l
                  , v = 0;
                return n && p > 0 && (h = function(e) {
                    if (l(e),
                    v > 0) {
                        var t = -1 === e.src.indexOf("?") ? "?" : "&"
                          , n = s.getRandomString(4);
                        e.src += t + n
                    }
                    v++
                }
                ),
                function e(t) {
                    var n = t.src
                      , s = t.win
                      , d = void 0 === s ? window : s
                      , l = t.charset
                      , f = void 0 === l ? u.CHARSET_UTF_8 : l
                      , p = t.async
                      , h = void 0 === p || p
                      , v = t.retries
                      , g = void 0 === v ? 0 : v
                      , _ = t.onRetry
                      , y = void 0 === _ ? i.noop : _
                      , b = t.retryDelay
                      , m = void 0 === b ? 0 : b
                      , w = t.checkLoad
                      , O = void 0 === w ? c : w
                      , S = t.onBeforeLoad
                      , E = void 0 === S ? i.noop : S
                      , P = t.onLoad
                      , x = void 0 === P ? i.noop : P
                      , C = t.onError
                      , M = void 0 === C ? i.noop : C
                      , A = d.document.createElement("script")
                      , I = function(o) {
                        g > 0 ? (y(o),
                        e(r(r({}, t), {
                            src: n,
                            retries: g - 1
                        }))) : M(o),
                        a.removeNodeFromParent(A)
                    };
                    A.type = "text/javascript",
                    A.async = h,
                    A.onload = function() {
                        return O(A) ? x() : I(new Error("checkLoad for " + n + " failed"))
                    }
                    ,
                    A.onerror = function(e) {
                        try {
                            d.setTimeout((function() {
                                I(e)
                            }
                            ), m)
                        } catch (e) {}
                    }
                    ,
                    A.src = n,
                    A.charset = f,
                    E(A),
                    o.getHead(d).appendChild(A)
                }(r(r({}, e), {
                    onBeforeLoad: h
                }))
            }
            e.onLoad && e.onLoad()
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(183)
      , o = n(87).M
      , i = {
        pid: "",
        encode: {
            key: ""
        },
        replaceClasses: [],
        detect: {
            links: [],
            custom: [],
            iframes: []
        },
        cookieMatching: {
            publisherTag: "",
            publisherKey: "",
            types: [],
            type: r.AdblockCookieMatchingType.doNotMatch,
            redirectUrl: ["//an.yand", "ex.ru/map", "uid/"].join(""),
            imageUrl: "/static/img/logo.gif/",
            cryptedUidUrl: "https://http-check-headers.yandex.ru",
            cryptedUidCookie: "crookie",
            cryptedUidTTL: 336
        },
        additionalParams: {},
        cookieTTL: 336,
        extuidCookies: [],
        debug: !1,
        force: !1,
        disableShadow: !1,
        forcecry: {
            enabled: !1,
            expires: 0,
            percent: 0
        },
        treeProtection: {
            enabled: !1
        },
        countToXhr: !1
    };
    t.config = "string" == typeof o ? i : o
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2)
      , o = n(1)
      , i = n(87)
      , a = o.isObject(i.M) && i.M.fn && r.isFunction(i.M.fn.encodeUrl) ? i.M.fn.encodeUrl : void 0;
    t.encodeUrl = void 0 !== a ? function(e) {
        return a(e)
    }
    : void 0
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getDocumentHiddenProperty = function(e) {
        return "hidden"in e ? "hidden" : "webkitHidden"in e ? "webkitHidden" : void 0
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(35);
    t.getTopDocumentFocus = function() {
        if (r.TOP_FRIENDLY_WINDOW && r.TOP_FRIENDLY_WINDOW.document && "function" == typeof r.TOP_FRIENDLY_WINDOW.document.hasFocus)
            try {
                return r.TOP_FRIENDLY_WINDOW.document.hasFocus()
            } catch (e) {}
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(76);
    t.ANCESTOR_ORIGINS = r.getAncestorOrigins(window)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getWindowsChain = function(e) {
        for (var t = e, n = [e], r = e.top; t !== r; )
            t = t.parent,
            n.push(t);
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(29)
      , o = n(52);
    t.getParentLocationsData = function(e) {
        var t = o.getParentFriendlyIFrames(e.documentElement).map((function(e) {
            return e.ownerDocument
        }
        ));
        return t.unshift(e),
        t.map((function(e) {
            return {
                location: r.getWindowLocation(e.defaultView),
                referrer: e.referrer
            }
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.isNativeSendBeaconSupported = function(e) {
        return r.checkNativeCode(e.navigator.sendBeacon)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DEFAULT_SID_LENGTH = 64
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PCODE_LOGS_URL = "https://an.yandex.ru/jstracer",
    t.PCODE_LOGS_URL_ALIAS = "https://jstracer.yandex.ru/jstracer",
    t.STRM_LOGS_URL = "https://strm.yandex.ru/log"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(55)
      , o = n(161);
    t.statsGlobalCallbacks = r.globalCallbackFactory({
        propertyName: o.STATS_GLOBAL_CALLBACK_PROPERTY_NAME,
        win: window
    })
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , o = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = i["return"]) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(8)
          , a = n(10)
          , s = n(1)
          , u = n(244)
          , c = function() {
            function e(e) {
                void 0 === e && (e = {}),
                this.props = {},
                this.setProps(r(r({}, this.defaults()), e))
            }
            return e.sliceBits = function(e, t, n) {
                return u.sliceBits(e, t, n)
            }
            ,
            e.prototype.defaults = function() {
                return {}
            }
            ,
            e.prototype.toString = function() {
                return this.serialize().toString()
            }
            ,
            e.prototype.setProps = function(e) {
                var t = this;
                return s.isObject(e) && i.forEach(this.getTemplate(), (function(n) {
                    var r = o(n, 2)[1];
                    r && e.hasOwnProperty(r) && (t.props[r] = e[r])
                }
                ), this),
                this
            }
            ,
            e.prototype.getProps = function() {
                return r({}, this.props)
            }
            ,
            e.prototype.clone = function() {
                return new (0,
                this.constructor)(this.props)
            }
            ,
            e.prototype.serialize = function() {
                var e, t, n = (e = this.getTemplate(),
                t = this.props,
                a.map(e, (function(e) {
                    var n = o(e, 2)
                      , r = n[0]
                      , i = n[1];
                    return [r, i && t[i] || null]
                }
                )));
                return u.joinBits(n)
            }
            ,
            e.prototype.slice = function(t, n) {
                return e.sliceBits(this.serialize(), t, n)
            }
            ,
            e
        }();
        t.AbstractTesttag = c
    }
    ).call(this, n(0))
}
, , , , , , , , function(e, t, n) {
    "use strict";
    var r = function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(1);
    t.set = function(e, t, n) {
        var i, a;
        if (!o.isObject(e))
            return e;
        var s = e
          , u = t.split(".")
          , c = u.pop();
        try {
            for (var d = r(u), l = d.next(); !l.done; l = d.next()) {
                var f = l.value
                  , p = e[f];
                e = o.isObject(p) ? p : e[f] = {}
            }
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                l && !l.done && (a = d["return"]) && a.call(d)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return e[c] = n,
        s
    }
}
, , , , , function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, c = [], d = !1, l = -1;
    function f() {
        d && u && (d = !1,
        u.length ? c = u.concat(c) : l = -1,
        c.length && p())
    }
    function p() {
        if (!d) {
            var e = s(f);
            d = !0;
            for (var t = c.length; t; ) {
                for (u = c,
                c = []; ++l < t; )
                    u && u[l].run();
                l = -1,
                t = c.length
            }
            u = null,
            d = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        c.push(new h(e,t)),
        1 !== c.length || d || s(p)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = v,
    o.addListener = v,
    o.once = v,
    o.off = v,
    o.removeListener = v,
    o.removeAllListeners = v,
    o.emit = v,
    o.prependListener = v,
    o.prependOnceListener = v,
    o.listeners = function(e) {
        return []
    }
    ,
    o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.cache = e
        }
        return e.prototype.get = function(e) {
            return this.cache[e]
        }
        ,
        e.prototype.has = function(e) {
            return e in this.cache
        }
        ,
        e.prototype.set = function(e, t) {
            this.cache[e] = t
        }
        ,
        e
    }();
    t.ObjectCache = r,
    t.memoize = function(e, t, n) {
        return void 0 === t && (t = function(e) {
            return e
        }
        ),
        void 0 === n && (n = new r({})),
        function() {
            var r = t.apply(this, arguments);
            if (n.has(r))
                return n.get(r);
            var o = e.apply(this, arguments);
            return n.set(r, o),
            o
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(89);
    t.__esModule = !0,
    t.addEvent = i,
    t.removeEvent = a,
    t.on = function(e, t, n, r) {
        return i(e, t, n, r),
        function() {
            a(e, t, n)
        }
    }
    ,
    t.stop = function(e) {
        e.stopPropagation ? (e.stopPropagation(),
        e.preventDefault()) : (e.returnValue = !1,
        e.cancelBubble = !0)
    }
    ;
    var o = r(n(46));
    function i(e, t, n, r) {
        void 0 === r && (r = !1),
        e.addEventListener ? e.addEventListener(t, n, !!o.isPassiveEventsSupported && r) : e.attachEvent("on" + t, n)
    }
    function a(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(33);
    t.getIsSafari = function(e) {
        void 0 === e && (e = window);
        var t = r.getUserAgent(e).toLowerCase();
        if (t.indexOf("android") > -1)
            return !1;
        var n = t.replace(/\(.+?\)/gi, "").split(" ").map((function(e) {
            return e.trim().split("/")[0]
        }
        )).filter((function(e) {
            return e && "mobile" !== e
        }
        ));
        return 4 === n.length && "mozilla" === n[0] && "applewebkit" === n[1] && "version" === n[2] && "safari" === n[3]
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(12);
    t.getFirstDefined = function(e) {
        return r(o.filter(e, (function(e) {
            return void 0 !== e
        }
        )), 1)[0]
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DEFAULT_ERROR = {
        message: "DEFAULT_ERROR_MESSAGE",
        code: 0,
        details: "",
        stack: "?:?:?",
        isFatal: !0
    }
}
, function(e, t) {
    e.exports = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(e, t) {
        return e.__proto__ = t,
        e
    }
    : function(e, t) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n]);
        return e
    }
    )
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.IS_BROKEN_MATH_RANDOM = !r.checkNativeCode(Math.random) || Math.random() == Math.random()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(128)
      , o = Date.now() * r.performanceNow() % 2147483647;
    t.pseudoRandom = function() {
        return ((o = 16807 * o % 2147483647) - 1) / 2147483646
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(129)
      , o = n(2)
      , i = "undefined" == typeof window ? void 0 : window.performance;
    t.isPerformanceNowSupported = i && o.isFunction(i.now);
    var a = i && i.timing && i.timing.navigationStart ? i.timing.navigationStart : r.dateNow()
      , s = 0;
    t.performanceNowShim = function() {
        var e = r.dateNow() - a;
        return s = Math.max(e, s)
    }
    ,
    t.performanceNow = t.isPerformanceNowSupported ? function() {
        return i.now()
    }
    : function() {
        return t.performanceNowShim()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2)
      , o = Date && r.isFunction(Date.now);
    t.dateNow = o ? function() {
        return Date.now()
    }
    : function() {
        return (new Date).getTime()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(43)
      , o = n(4)
      , i = n(83);
    t.isSupportsOnceOption = !1,
    t.isSupportsPassiveOption = !1,
    t.isSupportsCaptureOption = !1;
    try {
        if (r.getHasObjectDefineProperty()) {
            var a = document.createElement("div")
              , s = {};
            Object.defineProperty(s, "once", {
                get: function() {
                    return t.isSupportsOnceOption = !0
                }
            }),
            Object.defineProperty(s, "passive", {
                get: function() {
                    return t.isSupportsPassiveOption = !0
                }
            }),
            Object.defineProperty(s, "capture", {
                get: function() {
                    return t.isSupportsCaptureOption = !0
                }
            }),
            i.addEventListenerFunction(a, "click", o.noop, s)
        }
    } catch (e) {}
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(142)
      , o = n(60)
      , i = n(122);
    t.getIsSafariBasedBrowser = function(e) {
        return void 0 === e && (e = window),
        i.getIsSafari(e) || o.getIsIOS(e) || r.getIsAppleTouchDevice(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(143)
      , o = n(144)
      , i = n(145)
      , a = n(147)
      , s = n(148);
    t.isTouchDevice = function(e) {
        return void 0 === e && (e = window),
        i.hasTouchPoints(e) || a.isMatchingAnyPointerCoarse(e) || s.isMatchingTouchEnabled(e) || r.hasDocumentTouch(e) || o.hasTouchEvents(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isUCBrowser = function(e) {
        return void 0 === e && (e = window),
        e.navigator.userAgent.indexOf("UCBrowser") > -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.EVENT_RENDER_PERFOMANCE = "block_render",
    t.EVENT_NETWORK_PERFOMANCE = "performance",
    t.EVENT_IMAGES_LOAD_PERFOMANCE = "images_performance",
    t.EVENT_SCRIPTS_LOAD_PERFOMANCE = "scripts_performance"
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.every = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (!t(e[n], n, e))
                return !1;
        return !0
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PARSE_LINK_ELEMENT = document.createElement("a")
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.loadScript = function(e, t, n, o) {
        void 0 === o && (o = {});
        var i = e.document
          , a = i.createElement("script")
          , s = (0,
        r.elementByTag)(i, "script") || i.body || i.documentElement;
        for (var u in a.src = t,
        o)
            o.hasOwnProperty(u) && a.setAttribute(u, o[u]);
        "function" == typeof n && (a.onload = a.onreadystatechange = function() {
            this.readyState && "complete" !== this.readyState && "loaded" !== this.readyState || (a.onload = a.onreadystatechange = null,
            n())
        }
        );
        if (s && s.parentNode)
            s.parentNode.insertBefore(a, s);
        else {
            if (!s || !s.appendChild)
                throw new Error("loadScript: there is no node to append script");
            s.appendChild(a)
        }
    }
    ,
    t.executeScript = function(e, t, n) {
        var o = e.document
          , i = o.createElement("script")
          , a = (0,
        r.elementByTag)(o, "script") || o.body;
        i.text = t,
        a.parentNode.insertBefore(i, a),
        "function" == typeof n && n()
    }
    ;
    var r = n(24)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(134);
    t.getIsAppleTouchDevice = function(e) {
        return void 0 === e && (e = window),
        /Apple/.test(e.navigator.vendor) && r.isTouchDevice(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.hasDocumentTouch = function(e) {
        var t = e.DocumentTouch;
        return Boolean(t) && e.document instanceof t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.hasTouchEvents = function(e) {
        return "ontouchstart"in e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(146);
    t.hasTouchPoints = function(e) {
        return function(e) {
            return Boolean(e.PointerEvent)
        }(e) && function(e) {
            var t = e.navigator || {}
              , n = t.msMaxTouchPoints
              , r = t.maxTouchPoints;
            return n || r || 0
        }(e) > 0 && !r.getIsEdge(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(26);
    t.getIsEdge = function(e) {
        return void 0 === e && (e = window),
        r.getInternetExplorerVersion(e) > 11
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10)
      , o = n(75)
      , i = n(34)
      , a = r.map(i.cssPrefixes, (function(e) {
        return "(" + e + "any-pointer:coarse)"
    }
    )).join(",");
    t.isMatchingAnyPointerCoarse = function(e) {
        return o.isMatchingMediaQuery(e, a)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10)
      , o = n(75)
      , i = n(34);
    t.TOUCH_ENABLED_QUERY = r.map(i.cssPrefixes, (function(e) {
        return "(" + e + "touch-enabled)"
    }
    )).join(","),
    t.isMatchingTouchEnabled = function(e) {
        return o.isMatchingMediaQuery(e, t.TOUCH_ENABLED_QUERY)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(150);
    t.isAncestorOriginsSupported = r.getIsAncestorOriginsSupported()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getIsAncestorOriginsSupported = function() {
        return Boolean(window.location.ancestorOrigins)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(35)
      , o = n(99)
      , i = n(37)
      , a = n(38)
      , s = n(3)
      , u = n(76);
    t.getTopAncestor = function(e) {
        void 0 === e && (e = window);
        var t = u.getAncestorOrigins(e);
        if (t.length > 0)
            return {
                topAncestor: t[t.length - 1],
                isTrusted: !0
            };
        var n = i.getTopLocationData(e.document)
          , c = n.location
          , d = n.referrer
          , l = a.isInSecureIFrame ? d : c
          , f = !a.isInSecureIFrame || o.getWindowsChain(r.TOP_FRIENDLY_WINDOW).length < 2
          , p = s.parseUrl(l)
          , h = p.protocol
          , v = p.hostname
          , g = p.host
          , _ = p.port;
        return {
            topAncestor: s.urlFromUrlObject({
                protocol: h,
                hostname: v,
                host: g,
                port: _,
                originalPath: "",
                href: "",
                pathname: "",
                search: "",
                hash: ""
            }),
            isTrusted: f
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(10)
      , o = n(74);
    t.isInSecureIFrame = function() {
        var e = r.map(o.parentFriendlyIFrames, (function(e) {
            return e.ownerDocument
        }
        ))
          , t = e.length
          , n = (t ? e[t - 1] : document).defaultView;
        return !!n && n.self !== n.parent
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getCurrentScript = function(e, t) {
        void 0 === e && (e = document);
        var n = e.currentScript;
        if (n)
            return n;
        for (var r = e.getElementsByTagName("script"), o = [], i = 0; i < r.length; i++)
            o.push(r[i]);
        if ("function" == typeof t) {
            var a = o.filter(t);
            return a[a.length - 1]
        }
        return o[o.length - 1]
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.COMMON_LOCAL_STATS_SERVICE_NAME = "CommonPcode"
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "_$".split("").reverse().join("")
      , o = function(e) {
        return "_$invalid_" + e + r
    };
    t.RECOVER_PARAMS = {
        sensorName: o("sensor_name"),
        labelKey: o("label_key"),
        labelValue: o("label_value")
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        e["event"] = "event",
        e["error"] = "error",
        e["fatal"] = "fatal",
        e["deprecated"] = "deprecated",
        e["warning"] = "warning",
        e["value"] = "value",
        e["values"] = "values"
    }(t.StatsEventType || (t.StatsEventType = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n(28),
    n(81);
    var r = n(4);
    t.callGlobalCallback = r.noop
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4);
    t.clearGlobalCallbacks = r.noop
}
, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof Promise ? n(6).Promise : Promise;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(40);
    t.waitForGlobalFunctionCallback = function(e) {
        var t = e.propertyName
          , n = e.win;
        return new r((function(e) {
            o.subscribeGlobalCallback({
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return e(t)
                },
                propertyName: t,
                win: n
            })
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof Promise ? n(6).Promise : Promise
      , o = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , i = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(40);
    t.waitUntilGlobalCallback = function(e) {
        var t = e.propertyName
          , n = e.win
          , o = e.comparator;
        return new r((function(e) {
            a.subscribeGlobalCallback({
                propertyName: t,
                win: n,
                callback: function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    o.apply(void 0, i(t)) && e()
                }
            })
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.STATS_GLOBAL_CALLBACK_PROPERTY_NAME = "YANDEX_STATS_GLOBAL_CALLBACK_PROPERTY_NAME"
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(163)
      , i = n(34)
      , a = n(43);
    t.hasObjectCreate = function(e) {
        void 0 === e && (e = window);
        var t = e.Object;
        return Boolean(t.create)
    }
    ,
    t.hasAtoB = function(e) {
        return void 0 === e && (e = window),
        Boolean(e.atob)
    }
    ,
    t.hasES5ArrayMethods = function(e) {
        void 0 === e && (e = window);
        var t = e.Array
          , n = t.prototype;
        return Boolean(n && n.every && n.filter && n.forEach && n.indexOf && n.lastIndexOf && n.map && n.some && n.reduce && n.reduceRight && t.isArray)
    }
    ,
    t.hasES5FunctionMethods = function(e) {
        void 0 === e && (e = window);
        var t = e.Function.prototype;
        return Boolean(t && t.bind)
    }
    ,
    t.hasES5ObjectMethods = function(e) {
        void 0 === e && (e = window);
        var t = e.Object;
        return Boolean(t.keys && t.create && t.getPrototypeOf && t.getOwnPropertyNames && t.isSealed && t.isFrozen && t.isExtensible && t.getOwnPropertyDescriptor && t.defineProperty && t.defineProperties && t.seal && t.freeze && t.preventExtensions)
    }
    ,
    t.hasES5StringMethods = function(e) {
        void 0 === e && (e = window);
        var t = e.String;
        return Boolean(t.prototype && t.prototype.trim)
    }
    ,
    t.isES5Supported = function(e) {
        return void 0 === e && (e = window),
        Boolean(a.getHasObjectDefineProperty(e) && t.hasObjectCreate(e) && t.hasAtoB(e) && t.hasES5ArrayMethods(e) && t.hasES5FunctionMethods(e) && t.hasES5ObjectMethods(e) && t.hasES5StringMethods(e))
    }
    ;
    var s = function(e, t) {
        var n, a;
        void 0 === t && (t = window);
        var s = o.getTestDiv(t);
        try {
            for (var u = r(i.cssPrefixes), c = u.next(); !c.done; c = u.next()) {
                var d = c.value;
                if (s.style.cssText = "display: " + d + e,
                s.style.length > 0)
                    return !0
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                c && !c.done && (a = u["return"]) && a.call(u)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return !1
    };
    t.isFlexboxCurrentSupported = function(e) {
        return void 0 === e && (e = window),
        s("flex", e)
    }
    ,
    t.isFlexbox2011Supported = function(e) {
        return void 0 === e && (e = window),
        s("flexbox", e)
    }
    ,
    t.isFlexbox2009Supported = function(e) {
        return void 0 === e && (e = window),
        s("box", e)
    }
}
, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getTestDiv = function(e) {
        return void 0 === e && (e = window),
        r || (r = e.document.createElement("div")),
        r
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(43);
    t.hasObjectDefineProperty = r.getHasObjectDefineProperty()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(166);
    t.getRandomString = function(e) {
        for (var t = [], n = 0; n < e; n++)
            t.push(r.getRandomChar());
        return t.join("")
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(167);
    t.getRandomChar = function(e, t) {
        void 0 === e && (e = "a"),
        void 0 === t && (t = "z");
        var n = r.getRandomInt(e.charCodeAt(0), t.charCodeAt(0));
        return String.fromCharCode(n)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13);
    t.getRandomInt = function(e, t) {
        var n = e + r.random() * (t + 1 - e);
        return n = Math.floor(n)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CHARSET_UTF_8 = "utf-8"
}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(264), i = n(267), a = n(269), s = n(271), u = n(272), c = n(273);
    t.getSessionId = function() {
        return r || (r = u.getSession(s.generateSessionId, i.getWindowStorage("common"), o.getCrossFrameStorage("common"), a.configureMetrika)),
        r
    }
    ,
    t.setSessionId = function(e) {
        r !== e && (c.setSession(e, i.getWindowStorage("common"), o.getCrossFrameStorage("common"), a.configureMetrika),
        r = e)
    }
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(27);
    t.isDate = function(e) {
        return e instanceof Date || "Date" === r.getInternalClass(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.indexOf = function(e, t, n, o) {
        void 0 === n && (n = 0),
        void 0 === o && (o = r);
        for (var i = n; i < e.length; i++)
            if (o(e[i], t))
                return i;
        return -1
    }
    ;
    var r = function(e, t) {
        return e === t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        e[e["doNotMatch"] = 0] = "doNotMatch",
        e[e["image"] = 1] = "image",
        e[e["refresh"] = 2] = "refresh",
        e[e["all"] = 3] = "all",
        e[e["scrumble"] = 4] = "scrumble"
    }(t.AdblockCookieMatchingType || (t.AdblockCookieMatchingType = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(2);
    t.serverEncodeEnabled = function(e) {
        return !!Boolean(e) && (r.isFunction(e.encodeCSS) && r.isFunction(e.encodeUrl) && r.isFunction(e.decodeUrl) && r.isFunction(e.isEncodedUrl))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getOrCreateItem = function(e, t, n) {
        var r = e.getItem(t);
        return r || (r = n(t),
        e.setItem(t, r)),
        r
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.obj = e
        }
        return e.prototype.getItem = function(e) {
            return this.obj[e]
        }
        ,
        e.prototype.setItem = function(e, t) {
            this.obj[e] = t
        }
        ,
        e
    }();
    t.ObjectStorage = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SESSION_KEY = "sessionId"
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.portion = function(e, t, n) {
        r <= e ? t() : n && n()
    }
    ;
    var r = Math.random()
}
, function(e, t, n) {
    "use strict";
    var r = n(141)
      , o = "yandex_metrika_callbacks"
      , i = ["addFileExtension", "extLink", "file", "hit", "notBounce", "params", "userParams", "setUserID", "getClientID", "reachGoal", "replacePhones"]
      , a = {};
    function s(e) {
        this._counterId = e,
        this._yaCounterNs = "yaCounter" + e,
        this._isInited = !1
    }
    window.Ya && window.Ya.Metrika || (0,
    r.loadScript)(window, "https://mc.yandex.ru/metrika/watch.js", (function() {
        var e;
        for (e in a)
            a.hasOwnProperty(e) && (a[e]._isInited || a[e]._initCounter())
    }
    )),
    s.prototype._initCounter = function() {
        return this._isInited || (window[this._yaCounterNs] = new window.Ya.Metrika({
            id: this._counterId,
            nck: !0,
            clickmap: !1,
            accurateTrackBounce: !1
        }),
        this._isInited = !0),
        window[this._yaCounterNs]
    }
    ,
    s.prototype._apply = function(e, t) {
        window[this._yaCounterNs][e].apply(window[this._yaCounterNs], t)
    }
    ,
    s.prototype._createAndApply = function(e, t) {
        this._initCounter(),
        this._apply(e, t)
    }
    ;
    for (var u = function(e) {
        var t = i[e];
        s.prototype[t] = function() {
            for (var e = this, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = arguments[i];
            window[this._yaCounterNs] ? this._apply(t, r) : window.Ya && window.Ya.Metrika ? this._createAndApply(t, r) : (window[o] = window[o] || [],
            window[o].push((function() {
                try {
                    e._createAndApply(t, r)
                } catch (e) {}
            }
            )))
        }
    }, c = 0; c < i.length; c++)
        u(c);
    e.exports = {
        McProxy: s,
        create: function(e) {
            return a[e] || (a[e] = new s(e)),
            a[e]
        }
    }
}
, , , function(e, t, n) {
    "use strict";
    var r = n(89);
    t.__esModule = !0,
    t.isDocumentReady = i,
    t.onDocumentReady = function(e, t) {
        var n = e.document;
        if (i(n))
            t();
        else {
            var r = !1
              , a = function i() {
                o.removeEvent(n, "DOMContentLoaded", i),
                o.removeEvent(e, "load", i),
                r || (r = !0,
                t())
            };
            o.addEvent(n, "DOMContentLoaded", a),
            o.addEvent(e, "load", a)
        }
    }
    ;
    var o = r(n(121));
    function i(e) {
        var t = e.readyState;
        return "complete" === t || "loading" !== t && "uninitialized" !== t && !e.documentElement.doScroll
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.reduce = function(e, t, n) {
        var r = 0;
        for (arguments.length < 3 && (r = 1,
        n = e[0]); r < e.length; r++)
            n = t(n, e[r], r, e);
        return n
    }
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        t.__esModule = !0,
        t.createErrorReport = function(t, n, o) {
            var a = {}
              , s = a[o.bundleName] = {}
              , u = n.message;
            s[u] = e(n, {
                params: o.adParams,
                userAgent: navigator.userAgent,
                viewport: [t.screen.width, t.screen.height].join("x"),
                date: String(new Date),
                href: location.href
            }),
            void 0 !== r && (s[u] = r.stringify(s[u]));
            return i(a)
        }
        ,
        t.createReport = i,
        t.processWindowError = function(e, t, n, r, o) {
            var i;
            if (e && "string" != typeof e) {
                if (e.type && e.target)
                    try {
                        t = e.target.src
                    } catch (e) {}
                var a;
                for (a in i = [],
                e)
                    i.push(a + ": " + e[a]);
                i = i.join(","),
                e = "Error object. Look at details"
            }
            return {
                message: e || "Unrecognized script error",
                file: t,
                line: n,
                column: r || "",
                stack: o && o.stack ? o.stack : o || "",
                details: i
            }
        }
        ,
        t.processErrorEvent = function(e) {
            var t = e.error;
            return {
                message: t && t.message || e.message || "Unrecognized script error",
                file: e.filename,
                line: e.lineno,
                column: e.colno,
                stack: t && t.stack || ""
            }
        }
        ;
        var o = n(17);
        function i(e) {
            var t = {};
            return (t[o.loaderVersion] = {})[o.bundleVersion] = e,
            t
        }
    }
    ).call(this, n(0), n(9))
}
, , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(49)
      , o = n(2);
    t.loadCustomScript = function(e) {
        var t = e.win.document.createElement("script");
        return t.async = !0,
        e.nonce && (t.nonce = e.nonce),
        o.isFunction(e.onLoad) && (t.onload = function() {
            t.onload = function() {}
            ,
            o.isFunction(e.onLoad) && e.onLoad()
        }
        ),
        e.hasCors = "boolean" != typeof e.hasCors || e.hasCors,
        e.hasCors && t.setAttribute("crossorigin", "anonymous"),
        t.src = e.src,
        e.container ? e.container.appendChild(t) : r.getHead(e.win).appendChild(t),
        t
    }
}
, function(e, t) {
    function n(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
            return typeof e
        }
        : e.exports = n = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(t)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.report = i,
    t.clearCache = function() {
        0
    }
    ,
    t.awReport = function(e, t) {
        "string" == typeof e && 0 !== e.indexOf("%AWAPS") && i(e, t)
    }
    ,
    t.randomSeed = a,
    t.reportRandom = function(e, t, n, r) {
        void 0 === n && (n = a());
        "string" == typeof e && "string" == typeof t && i(e.replace(t, n), r)
    }
    ;
    var r = n(201)
      , o = {};
    function i(e, t) {
        !e || "string" != typeof e || t && o[e] || (o[e] = !0,
        (0,
        r.sendPixel)(e))
    }
    function a() {
        return Math.round(65535 * Math.random())
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(246);
    t.sendPixel = function(e, t, n) {
        r.loadImage({
            src: e,
            onLoad: t,
            ctx: n
        })
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.getPublicPath = function(e, t) {
        var n = "https://yastatic.net/pcode-bundles/";
        (0,
        i.isAdblock)() && (0,
        r.isEncoded)(n) && (n = (0,
        r.decode)(n));
        -1 !== s.indexOf("betastatic.yastatic.net") ? n = n.replace("yastatic", "betastatic.yastatic") : t && (n = n.replace("yastatic.net", t)),
        n += "0." + e + "/";
        return n
    }
    ;
    var r = n(88)
      , o = n(24)
      , i = n(64)
      , a = (0,
    o.getCurrentScript)(document)
      , s = a && a.src || ""
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(64), i = n(92), a = n(4), s = n(8), u = n(12), c = {}, d = {}, l = [];
    !function(e) {
        e["PENDING"] = "PENDING",
        e["LOADED"] = "LOADED"
    }(r || (r = {}));
    var f, p = [], h = (f = function(e) {
        l.push(e)
    }
    ,
    function() {
        var e = document.documentElement;
        e.codeLoader = e.codeLoader || f
    }
    ), v = function(e, t) {
        !function(e, t) {
            s.forEach(p, (function(n) {
                n.fileName === e && (t ? n.callback(t) : n.onerror())
            }
            )),
            p = u.filter(p, (function(t) {
                return t.fileName !== e
            }
            ))
        }(e, t),
        t ? (d[e] = t,
        c[e] = r.LOADED) : delete c[e]
    }, g = function(e, t, n) {
        void 0 === n && (n = a.noop),
        p.push({
            fileName: e,
            callback: t,
            onerror: n
        })
    };
    t.moduleLoad = function(e) {
        if ("object" != typeof e)
            throw new Error('"namespace" should be an object type');
        if ("function" == typeof e.moduleLoad)
            return e.moduleLoad;
        var t = function(e, t, n) {
            switch (c[e]) {
            case r.LOADED:
                t(d[e]);
                break;
            case r.PENDING:
                g(e, t, n);
                break;
            default:
                h(),
                g(e, t, n),
                function(e) {
                    c[e] = r.PENDING,
                    i.loadScriptLite({
                        win: window,
                        src: e,
                        onBeforeLoad: function(e) {
                            o.isAdblock() || e.setAttribute("crossorigin", "anonymous")
                        },
                        onLoad: function() {
                            var t = l.shift();
                            t && v(e, t)
                        },
                        onError: function() {
                            v(e, void 0)
                        }
                    })
                }(e)
            }
        };
        return e.moduleLoad = t,
        e.setModule = v,
        t
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(182);
    t.includes = function(e, t) {
        return -1 !== r.indexOf(e, t)
    }
}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(239)
      , o = n(20)
      , i = n(181)
      , a = n(2)
      , s = n(11)
      , u = n(1);
    t.deepCopy = function(e, n) {
        void 0 === n && (n = {
            preserveConstructors: !0
        });
        var c = e;
        return o.isArray(e) ? e.map((function(e) {
            return t.deepCopy(e, n)
        }
        )) : i.isDate(e) ? new Date(e.getTime()) : (!a.isFunction(e) && u.isObject(e) && (c = n.preserveConstructors ? r.objectCreate(e) : {},
        s.forOwn(e, (function(e, r) {
            c[r] = t.deepCopy(e, n)
        }
        ))),
        c)
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1)
      , o = n(240);
    t.objectCreate = o.getNativeMethod(Object, "create") ? Object.create : function(e, t) {
        function n() {}
        if (n.prototype = e,
        r.isObject(t))
            for (var o in t)
                t.hasOwnProperty(o) && (n[o] = t[o]);
        return new n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.getNativeMethod = function(e, t) {
        var n = e[t];
        if (!r.checkNativeCode(n)) {
            var o = n;
            try {
                delete e[t],
                n = e[t],
                e[t] = o
            } catch (e) {}
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.addAdfoxNamespace = function(e) {
        return e.Ya || (e.Ya = {}),
        e.Ya.picture || (e.Ya.picture = {}),
        e.Ya.picture
    }
    ,
    t.ns = t.addAdfoxNamespace(window);
    t.getScriptStringForSettingGlobalVars = function(e) {
        var n = e.isXhr;
        return [";(function (w) {", "var ns = (" + t.addAdfoxNamespace.toString() + ")(w);", 'ns["isXhr"] = ' + n + ";", 'ns["xhrExperiment"] = {isXhr: ' + Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isXhr) + ", isControl: " + Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isControl) + "};", "})(window);"].join("")
    }
}
, function(e, t, n) {
    "use strict";
    var r, o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        e[e["UNKNOWN"] = 0] = "UNKNOWN",
        e[e["ETHERNET"] = 1] = "ETHERNET",
        e[e["WIFI"] = 2] = "WIFI",
        e[e["CELL_2G"] = 3] = "CELL_2G",
        e[e["CELL_3G"] = 4] = "CELL_3G"
    }(r || (r = {})),
    function(e) {
        e["BLUETOOTH"] = "bluetooth",
        e["CELLULAR"] = "cellular",
        e["ETHERNET"] = "ethernet",
        e["MIXED"] = "mixed",
        e["NONE"] = "none",
        e["OTHER"] = "other",
        e["UNKNOWN"] = "unknown",
        e["WIFI"] = "wifi",
        e["WIMAX"] = "wimax"
    }(o || (o = {})),
    t.getDownlink = function(e) {
        void 0 === e && (e = window);
        var t = e.navigator.connection
          , n = void 0 === t ? {} : t;
        if ("number" == typeof n.downlink)
            return n.downlink;
        if ("number" == typeof n.downlinkMax)
            return n.downlinkMax;
        if ("string" == typeof n.type || "number" == typeof n.type)
            switch (n.type) {
            case o.BLUETOOTH:
                return 3;
            case r.CELL_2G:
                return .384;
            case r.CELL_3G:
            case o.CELLULAR:
                return 2;
            case o.WIMAX:
                return 37;
            case o.NONE:
                return 0;
            case r.ETHERNET:
            case o.ETHERNET:
            case r.WIFI:
            case o.WIFI:
            case o.MIXED:
                return 10;
            case r.UNKNOWN:
            case o.UNKNOWN:
            case o.OTHER:
            }
        return -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(60);
    t.getIOSVersion = function(e) {
        if (void 0 === e && (e = window),
        r.getIsIOS(e) && e.navigator) {
            var t = e.navigator.platform;
            if (t && /iP(hone|od|ad)/.test(t)) {
                var n = e.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                if (n)
                    return parseInt(n[1], 10)
            }
        }
        return -1
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
      , o = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(245);
    function a(e, t) {
        return s(function(e, t) {
            return Number(e) & Math.pow(2, t) - 1
        }(e, t).toString(2), t)
    }
    function s(e, t) {
        return i.padLeft(e, t, "0")
    }
    t.joinBits = function(e) {
        var t, n, i = [];
        try {
            for (var s = r(e), u = s.next(); !u.done; u = s.next()) {
                var c = o(u.value, 2)
                  , d = c[0]
                  , l = a(c[1], d);
                i.push(l)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (n = s["return"]) && n.call(s)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return function(e) {
            if (e.length > 53)
                throw new Error("bitUtils.toDecimal: \u0431\u043e\u043b\u044c\u0448\u0435 53 \u0431\u0438\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u0437-\u0437\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438, \u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 \u0434\u043b\u0438\u043d\u043e\u0439 " + e.length + " \u0431\u0438\u0442.");
            return parseInt(e, 2)
        }(i.reverse().join(""))
    }
    ,
    t.sliceBits = function(e, t, n) {
        var r = t + n
          , o = s(e.toString(2), r).substr(-r, n);
        return parseInt(o, 2)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.padLeft = function(e, t, n) {
        void 0 === n && (n = " ");
        var r = t - e.length;
        if (r > 0) {
            for (var o = n; o.length < r; )
                o += o;
            return (o.length > r ? o.substr(0, r) : o) + e
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(247)
      , o = n(2);
    t.loadImage = function(e) {
        var t = new Image;
        o.isFunction(e.onLoad) && r.on(t, "load", e.onLoad, e.ctx),
        o.isFunction(e.onError) && r.on(t, "error", e.onError, e.ctx),
        t.src = e.src
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56)
      , o = n(248)
      , i = n(83)
      , a = n(130);
    function s(e) {
        e && e.un()
    }
    t.on = function(e, t, n, u, c) {
        if (!e || !n)
            return null;
        var d, l = r.protect("handler:" + t, n, u), f = o.fixEvent(l), p = {
            un: function() {
                i.removeEventListenerFunction(e, t, f)
            }
        };
        return c && c.once && !a.isSupportsOnceOption && (d = f,
        f = function(e) {
            d.call(this, e),
            s(p)
        }
        ),
        a.isSupportsPassiveOption ? i.addEventListenerFunction(e, t, f, c) : i.addEventListenerFunction(e, t, f, c && c.capture),
        p
    }
    ,
    t.un = s
}
, function(e, t, n) {
    "use strict";
    function r() {
        this.returnValue = !1
    }
    function o() {
        this.cancelBubble = !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.fixEvent = function(e) {
        return function(t) {
            var n = function(e) {
                return e.stopPropagation || (e.stopPropagation = o),
                e.preventDefault || (e.preventDefault = r),
                e.target || (e.target = e.srcElement),
                e
            }(t);
            e.call(this, n)
        }
    }
}
, , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getBoundingClientRect = function(e) {
        try {
            var t = e.getBoundingClientRect()
              , n = t.left
              , r = t.right
              , o = t.top
              , i = t.bottom;
            return {
                left: n,
                right: r,
                top: o,
                bottom: i,
                width: r - n,
                height: i - o
            }
        } catch (e) {
            return {
                left: 0,
                width: 0,
                top: 0,
                height: 0,
                right: 0,
                bottom: 0
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(261);
    t.getIfIsAndroid = function(e) {
        void 0 === e && (e = window);
        var t = e.navigator.userAgent
          , n = void 0 === t ? "" : t
          , o = /Android/.test(n)
          , i = r.isWindowsPhone(e)
          , a = /com\.yandex\.mobile\.metrica\.ads\.sdk.*?Android/.test(n);
        return o && !i || a
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isWindowsPhone = function(e) {
        return void 0 === e && (e = window),
        /Windows Phone/i.test(e.navigator.userAgent)
    }
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(31)
      , o = n(185)
      , i = n(265)
      , a = n(186)
      , s = r.once((function() {
        return i.getCrossFrameDataSource(self, "Ya.pcodeCrossFrameData", (function() {
            return new a.ObjectStorage({})
        }
        ))
    }
    ));
    t.getCrossFrameStorage = function(e) {
        return o.getOrCreateItem(s(), e, (function() {
            return new a.ObjectStorage({})
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(266)
      , o = n(47)
      , i = n(30)
      , a = n(113)
      , s = n(56);
    t.getCrossFrameDataSource = function(e, t, n) {
        var u;
        return r.traverseBreadth([e.top], (function(e) {
            if (!(u = s.callSafe((function() {
                return i.get(e, t)
            }
            ))))
                return s.callSafe((function() {
                    return o.listToArray(e.frames)
                }
                )) || []
        }
        )),
        u || (u = n()),
        a.set(e, t, u),
        u
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.traverseBreadth = function(e, t) {
        for (var n = e.slice(); n.length; ) {
            var r = t(n.shift());
            if (!r)
                return;
            n.push.apply(n, o(r))
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(31)
      , o = n(185)
      , i = n(186)
      , a = n(268)
      , s = r.once((function() {
        return a.getWindowDataSource(self, "Ya.pcodeWindowData", (function() {
            return new i.ObjectStorage({})
        }
        ))
    }
    ));
    t.getWindowStorage = function(e) {
        return o.getOrCreateItem(s(), e, (function() {
            return new i.ObjectStorage({})
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(30)
      , o = n(113);
    t.getWindowDataSource = function(e, t, n) {
        var i = r.get(e, t);
        return i || (i = n(),
        o.set(e, t, i)),
        i
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(56)
      , o = n(270);
    t.metrikaAdSessionLabel = "adSessionID",
    t.configureMetrika = r.protect("sessionId::configureMetrika", (function(e, n) {
        var r;
        o.pushMetrikaEvent(e, ((r = {})[t.metrikaAdSessionLabel] = n,
        r))
    }
    ))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(30)
          , i = n(113)
          , a = n(56);
        t.pushMetrikaEvent = a.protect("metrika::pushEvent", (function(e, t) {
            var n = o.get(e, "Ya._metrika.dataLayer") || [];
            i.set(e, "Ya._metrika.dataLayer", n),
            n.push({
                ymetrikaEvent: {
                    type: "params",
                    parent: 1,
                    data: {
                        __ym: r({}, t)
                    }
                }
            })
        }
        ))
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(13);
    t.generateSessionId = function() {
        return (1e6 * r.random()).toFixed(0) + (new Date).valueOf().toString()
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(187);
    t.getSession = function(e, t, n, o) {
        var i = t.getItem(r.SESSION_KEY);
        return i || (i = n.getItem(r.SESSION_KEY) || e(),
        o(window, i)),
        t.setItem(r.SESSION_KEY, i),
        n.setItem(r.SESSION_KEY, i),
        i
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(187);
    t.setSession = function(e, t, n, o) {
        o(window, e),
        t.setItem(r.SESSION_KEY, e),
        n.setItem(r.SESSION_KEY, e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isMobile = function(e) {
        return void 0 === e && (e = window),
        /Mobi|Android/i.test(e.navigator.userAgent)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(26);
    t.getIsIE = function(e) {
        return void 0 === e && (e = window),
        -1 !== r.getInternetExplorerVersion(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(82);
    !function(e) {
        e["sent"] = "sent",
        e["called"] = "called",
        e["rendered"] = "rendered"
    }(t.HeaderBiddingEvents || (t.HeaderBiddingEvents = {})),
    function(e) {
        e["http"] = "http",
        e["parse"] = "parse",
        e["timeout"] = "timeout",
        e["invalidRender"] = "invalidRender",
        e["notLoaded"] = "notLoaded"
    }(t.HeaderBiddingErrors || (t.HeaderBiddingErrors = {}));
    var o = r.createLogger({
        service: "headerBidding",
        probability: .1
    });
    t.logEvent = o.logEvent,
    t.logError = o.logError,
    t.errorToStats = o.errorToStats
}
, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.generatePr = function() {
        return Math.floor(4294967295 * Math.random()) + 1
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.consoleLog = function(e, t) {
        return void 0 === t && (t = ""),
        !1
    }
    ,
    t.consoleWarn = function(e, t) {
        return void 0 === t && (t = ""),
        !1
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(181);
        t.setCookie = function(e, t, n, r) {
            void 0 === r && (r = {}),
            o.isDate(r.expires) && (r.expires = r.expires.toUTCString()),
            void 0 === r.path && (r.path = "/");
            var i = "";
            for (var a in r)
                r[a] && (i += "; " + a,
                !0 !== r[a] && (i += "=" + r[a]));
            try {
                var s = encodeURIComponent(String(t)) + "=" + encodeURIComponent(String(n));
                return e.cookie = s + i
            } catch (e) {
                return
            }
        }
        ,
        t.getCookie = function(e, t) {
            var n = [];
            try {
                n = e.cookie ? e.cookie.split("; ") : []
            } catch (e) {}
            for (var r, o = /(%[0-9A-Z]{2})+/g, i = 0; i < n.length; i++) {
                var a = n[i].split("=")
                  , s = a.slice(1).join("=");
                try {
                    var u = a[0].replace(o, decodeURIComponent);
                    if (s.replace(o, decodeURIComponent),
                    t === u) {
                        r = decodeURIComponent(s);
                        break
                    }
                } catch (e) {
                    return
                }
            }
            return r
        }
        ,
        t.deleteCookie = function(e, n, o) {
            t.setCookie(e, n, "", r(r({}, o), {
                expires: new Date(0)
            }))
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
    function o(e) {
        for (var t = "", n = 0; n < e.length; ) {
            var o = e.charCodeAt(n++)
              , i = e.charCodeAt(n++)
              , a = e.charCodeAt(n++)
              , s = o >> 2
              , u = (3 & o) << 4 | i >> 4
              , c = (15 & i) << 2 | a >> 6
              , d = 63 & a;
            isNaN(i) ? c = d = 64 : isNaN(a) && (d = 64),
            t = t + r.charAt(s) + r.charAt(u) + r.charAt(c) + r.charAt(d)
        }
        return t
    }
    function i(e) {
        var t = []
          , n = 0;
        for (e = e.replace(/[^A-Za-z0-9\-_=]/g, ""); n < e.length; ) {
            var o = r.indexOf(e.charAt(n++))
              , i = r.indexOf(e.charAt(n++))
              , a = r.indexOf(e.charAt(n++))
              , s = r.indexOf(e.charAt(n++))
              , u = o << 2 | i >> 4
              , c = (15 & i) << 4 | a >> 2
              , d = (3 & a) << 6 | s;
            t.push(String.fromCharCode(u)),
            64 !== a && t.push(String.fromCharCode(c)),
            64 !== s && t.push(String.fromCharCode(d))
        }
        return t.join("")
    }
    function a(e) {
        for (var t = [], n = 0; n < e.length; ) {
            var r = e.charCodeAt(n);
            if (r < 128)
                t.push(String.fromCharCode(r)),
                n++;
            else if (r > 191 && r < 224) {
                var o = e.charCodeAt(n + 1);
                t.push(String.fromCharCode((31 & r) << 6 | 63 & o)),
                n += 2
            } else {
                o = e.charCodeAt(n + 1);
                var i = e.charCodeAt(n + 2);
                t.push(String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i)),
                n += 3
            }
        }
        return t.join("")
    }
    t.encode = function(e, t) {
        return void 0 === t && (t = 1e6),
        o(function(e, t) {
            e = e.replace(/\r\n/g, "\n");
            for (var n = "", r = 0; r < e.length; r++) {
                var o = e.charCodeAt(r)
                  , i = void 0;
                if (o < 128 ? i = String.fromCharCode(o) : o > 127 && o < 2048 ? (i = String.fromCharCode(o >> 6 | 192),
                i += String.fromCharCode(63 & o | 128)) : (i = String.fromCharCode(o >> 12 | 224),
                i += String.fromCharCode(o >> 6 & 63 | 128),
                i += String.fromCharCode(63 & o | 128)),
                n.length + i.length > t)
                    break;
                n += i
            }
            return n
        }(e, 3 * t / 4 | 0))
    }
    ,
    t.encodeUInt8String = o,
    t.decode = function(e) {
        return a(i(e))
    }
    ,
    t.decodeUInt8String = i,
    t.utf8Decode = a,
    t.cropEquals = function(e) {
        return e.replace(/=+$/, "")
    }
    ,
    t.addEquals = function(e) {
        for (; e.length % 4 != 0; )
            e += "=";
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, a = n(493), s = n(507), u = n(11), c = n(496);
    !function(e) {
        e["GET"] = "GET",
        e["POST"] = "POST",
        e["HEAD"] = "HEAD"
    }(i = t.Methods || (t.Methods = {}));
    var d = function() {
        function e(e, t) {
            this.isTimeouted = !1,
            this.url = e,
            this.params = t
        }
        return e.prototype.open = function() {
            this.xr.open(this.params.method, this.url),
            this.setSettings()
        }
        ,
        e.prototype.setSettings = function() {
            this.setCallbacks()
        }
        ,
        e.prototype.setTimeout = function() {
            var e = this
              , t = this.params.timeout;
            t && t > 0 && (this.timer = setTimeout((function() {
                e.onTimeout(),
                e.abort()
            }
            ), t))
        }
        ,
        e.prototype.clearTimeout = function() {
            this.timer && clearTimeout(this.timer)
        }
        ,
        e.prototype.setCallbacks = function() {
            var e = this
              , t = function(t) {
                return e.onError(t && t.message || "Error!")
            };
            this.xr.onerror = t,
            this.xr.ontimeout = t
        }
        ,
        e.prototype.onLoad = function(e) {
            this.clearTimeout(),
            this.params.onload && this.params.onload(e)
        }
        ,
        e.prototype.onTimeout = function() {
            this.isTimeouted = !0,
            this.params.ontimeout && this.params.ontimeout()
        }
        ,
        e.prototype.onError = function(e, t) {
            this.isTimeouted || (this.clearTimeout(),
            this.params.onerror && this.params.onerror({
                message: e,
                code: t,
                xr: this.xr
            }))
        }
        ,
        e.prototype.send = function() {
            this.setTimeout(),
            this.xr.send(this.params.data)
        }
        ,
        e.prototype.abort = function() {
            this.xr && this.xr.abort()
        }
        ,
        e
    }()
      , l = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this
              , o = s.getNativeXhr({
                onWindowCreation: function(e) {
                    return c.networkPerfomaceManager.registerWin(e)
                }
            });
            return r.xr = new o,
            r.open(),
            r
        }
        return o(t, e),
        t.prototype.setCallbacks = function() {
            var t = this;
            e.prototype.setCallbacks.call(this);
            var n = this.xr;
            n.onreadystatechange = function() {
                4 === n.readyState && (200 === n.status || 304 === n.status ? t.onLoad(n.response) : t.onError(n.statusText, n.status))
            }
        }
        ,
        t.prototype.setSettings = function() {
            e.prototype.setSettings.call(this),
            this.addHeaders(),
            this.xr.withCredentials = this.params.withCredentials
        }
        ,
        t.prototype.abort = function() {
            4 !== this.xr.readyState && e.prototype.abort.call(this)
        }
        ,
        t.prototype.addHeaders = function() {
            var e = this
              , t = this.params.headers;
            t && u.forOwn(t, (function(t, n) {
                return e.xr.setRequestHeader(n, t)
            }
            ))
        }
        ,
        t
    }(d)
      , f = function(e) {
        function t(t, n) {
            var r = e.call(this, a.replaceProtocolToHTTPS(t), n) || this;
            return r.xr = new window.XDomainRequest,
            r.open(),
            r
        }
        return o(t, e),
        t.prototype.setCallbacks = function() {
            var t = this;
            e.prototype.setCallbacks.call(this),
            this.xr.onload = function() {
                return t.onLoad(t.xr.responseText)
            }
        }
        ,
        t.prototype.send = function() {
            var t = this;
            setTimeout((function() {
                return e.prototype.send.call(t)
            }
            ), 0)
        }
        ,
        t
    }(d);
    t.request = function(e, t) {
        void 0 === t && (t = {});
        var n = {
            method: t.method || i.POST,
            withCredentials: void 0 === t.withCredentials || t.withCredentials,
            timeout: t.timeout,
            data: t.data,
            headers: t.headers,
            onerror: t.onerror,
            onload: t.onload,
            ontimeout: t.ontimeout
        }
          , r = window.XDomainRequest ? new f(e,n) : new l(e,n);
        return r.send(),
        function() {
            return r.abort()
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    function r(e) {
        return o(e / 100)
    }
    function o(e) {
        return Number(e.toFixed(2))
    }
    t.toFraction = r,
    t.fixPrecision = o,
    t.isPercent = function(e) {
        return Math.random() < r(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.win = window,
    t.ns = t.win.Ya || (t.win.Ya = {})
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(82);
    !function(e) {
        e["requested"] = "requested",
        e["requestSucceeded"] = "requestSucceeded",
        e["requestParsed"] = "requestParsed",
        e["bundleStarted"] = "bundleStarted",
        e["bundleLoaded"] = "bundleLoaded",
        e["bundleRendered"] = "bundleRendered",
        e["bundleReset"] = "bundleReset",
        e["bundleDestroyed"] = "bundleDestroyed"
    }(t.AdfoxEvents || (t.AdfoxEvents = {})),
    function(e) {
        e["unknown"] = "unknown",
        e["xhr"] = "xhr",
        e["jsonp"] = "jsonp"
    }(t.AdfoxErrors || (t.AdfoxErrors = {}));
    var o = r.createLogger({
        service: "adfox",
        probability: .01
    });
    t.logEvent = o.logEvent,
    t.logError = o.logError,
    t.logValue = o.logValue,
    t.logValues = o.logValues,
    t.errorToStats = o.errorToStats
}
, , function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(482);
    Object.keys(r).forEach((function(e) {
        "default" !== e && "__esModule" !== e && (t[e] = r[e])
    }
    ))
}
, , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(549);
    t.isAdfoxPageTurbo = function(e, t) {
        return void 0 === t && (t = o.isTurboPage(e)),
        void 0 === r ? r = t : r
    }
    ,
    t.resetIsTurboCached = function() {
        return r = void 0
    }
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.replaceProtocolToHTTPS = function(e) {
        return e.replace(/^http:/, "https:")
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(7);
    t.unique = function(e) {
        for (var t = {}, n = 0; n < e.length; n++)
            t[e[n]] = n;
        return r.getObjectKeys(t)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(11)
      , o = n(1)
      , i = new RegExp(["box-flex", "box-flex-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-height", "opacity", "order", "z-index", "zoom"].join("|"),"i");
    function a(e, t, n, r) {
        void 0 !== n && void 0 !== t && (n += !i.test(t) && n >>> 0 ? "px" : "",
        e.style.setProperty ? e.style.setProperty(t, n, r ? "important" : "") : e.style.cssText += ";" + t + ": " + n + (r ? "!important" : ""))
    }
    t.setStyle = function(e, t, n, i) {
        o.isObject(t) ? (i = Boolean(n),
        r.forOwn(t, (function(t, n) {
            a(e, n, t, i)
        }
        ))) : a(e, t, n, i)
    }
    ,
    t.styleToString = function(e, t) {
        void 0 === t && (t = !1);
        var n = t ? "!important" : ""
          , o = "";
        return r.forOwn(e, (function(e, t) {
            if (void 0 !== e && void 0 !== t) {
                var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                e += !i.test(r) && e >>> 0 ? "px" : "",
                o += r + ": " + e + n + ";"
            }
        }
        )),
        o
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(513);
    t.networkPerfomaceManager = new r.NetworkPerformanceManager([{
        prefix: "LOADER",
        re: /\/pcode\/adfox\/loader\.js$/i
    }, {
        prefix: "HB",
        re: /\/pcode\/adfox\/header-bidding\.js$/i
    }, {
        prefix: "BUNDLE",
        re: /\/pcode-bundles.*\/banner_.*\/banner_.*\.js$/i
    }, {
        prefix: "ADXSTUB",
        re: /\/pcode\/adfox\/adfox-adx-stub\.js$/i
    }, {
        prefix: "BULK",
        re: /(ads\.adfox\.ru)|(an\.yandex\.ru\/adfox)\/.*\/getBulk\/v2.*$/i
    }, {
        prefix: "PREP",
        re: /ads\.adfox\.ru\/.*\/prepareCode.*$/i
    }, {
        prefix: "CODETEST",
        re: /ads\.adfox\.ru\/.*\/getCodeTest.*$/i
    }])
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(198)
          , i = n(88)
          , a = n(4)
          , s = window;
        s.yaSafeFrameCallbacksStorage = s.yaSafeFrameCallbacksStorage || {};
        var u = i.isEncoded("https://yastatic.net/safeframe/1-1-0/");
        function c() {
            var e = u ? "host_adb.js" : "host.js"
              , t = "" + ["https://yastatic", ".net/safeframe-bundles/0.69/"].join("") + e;
            return u ? i.encode(t) : t
        }
        function d(e) {
            e.isLoadingSafeframeStarted || (e.isLoadingSafeframeStarted = !0,
            o.loadCustomScript({
                win: e,
                src: c(),
                hasCors: !u
            }))
        }
        function l(e) {
            var t = e["yaSafeFrameAsyncCallbacks"] || [];
            return e["yaSafeFrameAsyncCallbacks"] = t,
            t
        }
        function f(e, t) {
            delete e.yaSafeFrameCallbacksStorage[t]
        }
        function p(e) {
            return Boolean(e.$sf && e.$sf.ext)
        }
        t.getSafeframeLoaderURL = c,
        t.loadSafeframe = d,
        t.initSafeframe = function(e, t, n, o, i, s, c) {
            void 0 === o && (o = a.noop),
            void 0 === i && (i = a.noop),
            void 0 === s && (s = a.noop),
            void 0 === c && (c = "render.html"),
            d(e);
            var p = l(e)
              , h = n.id instanceof Element ? "" : n.id
              , v = function(e, t) {
                return t || e.id || "sf-" + (Math.floor(4294967295 * Math.random()) + 1)
            }(t, h);
            p.push((function() {
                e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {},
                e.yaSafeFrameCallbacksStorage[v] = {
                    onError: o,
                    onRender: i,
                    onAction: s
                },
                function(e, t) {
                    void 0 === t && (t = {}),
                    e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {};
                    var n = e.yaSafeFrameCallbacksStorage;
                    new e.$sf.host.Config(r({
                        auto: !1,
                        onFailure: function(e, t, r) {
                            n[e] && n[e].onError(e, r)
                        },
                        onEndPosRender: function(e, t, r) {
                            n[e] && n[e].onRender(e, r)
                        },
                        onPosMsg: function(t, r, o) {
                            n[t] && n[t].onAction(r, o),
                            "nuke" === r && f(e, t)
                        }
                    }, t))
                }(e, {
                    renderFile: c
                }),
                function(e, t, n, r) {
                    t.id = r;
                    var o = n.html
                      , i = n.width
                      , a = n.height
                      , s = n.basePath
                      , c = {
                        id: r,
                        html: o,
                        conf: {
                            nonce: n.nonce,
                            w: i,
                            h: a,
                            dest: u ? t : r,
                            protected: n["protected"],
                            sandbox: n.sandbox,
                            basePath: s
                        }
                    };
                    n.supports && (c.conf.supports = n.supports),
                    e.$sf.host.render(c)
                }(e, t, n, v)
            }
            ))
        }
        ,
        t.nukeSafeframe = function(e, t) {
            d(e),
            l(e).push((function() {
                f(e, t),
                e.$sf.host.nuke(t)
            }
            ))
        }
        ,
        t.isInSafeframe = p,
        t.updateSafeframeSize = function(e, t) {
            if (p(e)) {
                var n = e.$sf.ext.geom()
                  , r = n.self.w + n.exp.r
                  , o = n.self.h + n.exp.b
                  , i = r > t.width ? t.width - n.self.w : n.exp.r
                  , a = o > t.height ? t.height - n.self.h : n.exp.b;
                e.$sf.ext.expand({
                    t: 0,
                    l: 0,
                    r: i,
                    b: a
                })
            }
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o = function() {
            return (o = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(483)
          , a = n(91)
          , s = n(241)
          , u = n(25)
          , c = n(17)
          , d = n(499)
          , l = d.isAllCookies ? {
            method: i.Methods.POST,
            headers: {
                "Content-Type": "application/json"
            },
            data: r.stringify({
                cookie_names: ["yandexuid", "L", "sz", "yp", "ys", "user-bans", "yandex_gid", "my", "i", "icon"]
            })
        } : {
            method: i.Methods.GET
        }
          , f = new a.Stats({
            service: "adfox",
            version: String(c.bundleVersion),
            sid: u.generateHexString(64)
        })
          , p = function() {
            function e() {
                this.callbacks = [],
                this.requestState = "not-started",
                this.cookies = {}
            }
            return e.prototype.requestMatchIdCookie = function() {
                var e = this;
                if ("not-started" === this.requestState) {
                    var t = Number(new Date);
                    this.requestState = "started",
                    i.request("https://matchid.adfox.yandex.ru/getcookie", o(o({}, l), {
                        onerror: function() {
                            e.requestState = "ended",
                            e.performCallbacks()
                        },
                        onload: function(n) {
                            f.event({
                                name: "matchidCookieRequestDuration",
                                data: {
                                    requestDuration: Number(new Date) - t,
                                    isAllCookies: d.isAllCookies
                                },
                                probability: .01
                            });
                            var o, i = r.parse(n);
                            e.setMatchIdCookie((o = i,
                            d.isAllCookies ? {
                                "matchid-cookies": (o = o).cookies,
                                "matchid-cookies-sign": o.cookies_sign
                            } : {
                                yandexuid: (o = o).cryptouid,
                                sign: o.cryptouid_sign
                            })),
                            e.requestState = "ended",
                            e.performCallbacks()
                        },
                        withCredentials: !0
                    }))
                }
            }
            ,
            e.prototype.setMatchIdCookie = function(e) {
                this.cookies = e
            }
            ,
            e.prototype.getMatchIdCookie = function() {
                return this.cookies
            }
            ,
            e.prototype.performCallbacks = function() {
                for (; this.callbacks.length > 0; )
                    this.callbacks.shift()(this.cookies)
            }
            ,
            e.prototype.waitForMatchIdCookie = function(e, t) {
                var n = this;
                "ended" === this.requestState ? e(this.cookies) : (this.requestMatchIdCookie(),
                this.callbacks.push(e),
                setTimeout((function() {
                    n.callbacks.indexOf(e) > -1 && (n.callbacks = n.callbacks.filter((function(t) {
                        return t !== e
                    }
                    )),
                    e(n.cookies))
                }
                ), t))
            }
            ,
            e
        }();
        t.MatchIdCookieManager = p,
        t.getMatchidManager = function() {
            return s.ns.matchidManager || (s.ns.matchidManager = new p),
            s.ns.matchidManager
        }
    }
    ).call(this, n(0), n(9))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(484);
    t.isAllCookies = r.isPercent(25)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(241)
      , o = n(485);
    t.getPr = function(e) {
        return r.ns.pr || o.ns.headerBidding && o.ns.headerBidding.pr
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(120);
    t.getExtIdExp = r.memoize((function() {
        return -1 === location.host.indexOf("yandex.ru") || Math.random() < .8 ? 0 : Math.random() < .5 ? 1 : 2
    }
    )),
    t.ignoreExtid = 2 === t.getExtIdExp()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(530)
      , o = n(17)
      , i = r.parsedLocationQueryString.mcodever;
    t.getBundleVersion = function() {
        return i || o.bundleVersion
    }
}
, , , , , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(5), i = n(7), a = n(12), s = n(139), u = n(2), c = n(508), d = window;
    t.isXhrNative = function(e) {
        var t = e.prototype
          , n = a.filter(i.getObjectKeys(t), (function(e) {
            try {
                return "function" == typeof t[e]
            } catch (e) {
                return !1
            }
        }
        ));
        return s.every(n, (function(e) {
            return o.checkNativeCode(t[e])
        }
        ))
    }
    ,
    t.getNativeXhr = function(e) {
        var n = (void 0 === e ? {} : e).onWindowCreation
          , o = d.XMLHttpRequest && t.isXhrNative(d.XMLHttpRequest)
          , i = Boolean(document.body);
        return o || !i ? d.XMLHttpRequest : (r || (r = document.createElement("iframe"),
        c["default"].setStyle(r, {
            overflow: "hidden",
            display: "none",
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: "1px",
            height: "1px"
        })),
        r.contentWindow || (document.body.appendChild(r),
        u.isFunction(n) && r.contentWindow && n(r.contentWindow)),
        r.contentWindow.XMLHttpRequest)
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t["default"] = void 0;
    var r = n(509)
      , o = n(495)
      , i = n(512)
      , a = {
        hasClass: r.hasClass,
        addClass: r.addClass,
        clearClasses: r.clearClasses,
        removeClass: r.removeClass,
        toggleClass: r.toggleClass,
        setStyle: o.setStyle,
        innerHTML: i.innerHtml
    };
    t["default"] = a
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, a = n(12), s = n(182), u = n(494), c = n(510), d = n(5), l = n(15), f = n(511), p = "classList"in document.documentElement, h = c.memoizeSingle((function(e) {
        return e.classList && e.classList.add
    }
    ), d.checkNativeCode), v = c.memoizeSingle((function(e) {
        return e.classList && e.classList.remove
    }
    ), d.checkNativeCode), g = c.memoizeSingle((function(e) {
        return e.classList && e.classList.toggle
    }
    ), d.checkNativeCode), _ = (i = document.createElement("p"),
    !!p && (i.classList.add("c1", "c2"),
    !!i.classList.contains("c2") && (i.classList.toggle("c3", !1),
    !i.classList.contains("c3")))), y = function() {
        var e = document.createElement("p");
        return !!p && (e.classList.toggle("a", !1),
        !e.classList.contains("a"))
    }(), b = function(e) {
        return e.split(" ").filter((function(e) {
            return Boolean(e)
        }
        ))
    };
    function m(e) {
        return l.isString(e.className) ? e.className : e.namespaceURI === f.NS.svg && e.getAttribute("class") || ""
    }
    function w(e, t) {
        l.isString(e.className) ? e.className = t : e.namespaceURI === f.NS.svg && e.setAttributeNS("", "class", t)
    }
    function O(e, t) {
        for (var n = b(t), r = 0; r < n.length; r++)
            if (!e.classList.contains(n[r]))
                return !1;
        return !0
    }
    function S(e, t) {
        for (var n = " " + m(e) + " ", r = t.split(" "), o = 0; o < r.length; o++)
            if (r[o] && -1 === n.indexOf(" " + r[o] + " "))
                return !1;
        return !0
    }
    function E(e, t) {
        void 0 === t && (t = ""),
        0 !== e.className.length ? h(e) ? P(e, t) : function(e, t) {
            var n = m(e).split(" ").concat(t.split(" "));
            n = u.unique(a.filter(n, (function(e) {
                return "" !== e
            }
            ))),
            w(e, n.join(" "))
        }(e, t) : e.className = t
    }
    t.clearClasses = function(e) {
        l.isString(e.className) ? e.className = "" : e.namespaceURI === f.NS.svg && e.setAttributeNS("", "class", "")
    }
    ,
    t.hasClass = function(e, t) {
        return void 0 === t && (t = ""),
        e.classList ? O(e, t) : S(e, t)
    }
    ,
    t._hasClass = O,
    t._fallbackHasClass = S,
    t.addClass = E;
    var P = _ ? function(e, t) {
        var n, r = b(t);
        (n = e.classList).add.apply(n, o(r))
    }
    : function(e, t) {
        for (var n = b(t), r = 0; r < n.length; r++)
            e.classList.add(n[r])
    }
    ;
    t.removeClass = function(e, t) {
        return void 0 === t && (t = ""),
        v(e) ? x(e, t) : function(e, t) {
            for (var n = m(e).split(" "), r = t.split(" "), o = [], i = 0; i < n.length; i++)
                n[i] && -1 === s.indexOf(r, n[i]) && o.push(n[i]);
            w(e, o.join(" "))
        }(e, t)
    }
    ;
    var x = _ ? function(e, t) {
        var n, r = b(t);
        (n = e.classList).remove.apply(n, o(r))
    }
    : function(e, t) {
        for (var n = b(t), r = 0; r < n.length; r++)
            e.classList.remove(n[r])
    }
    ;
    var C = function(e, n, r) {
        void 0 === n && (n = ""),
        void 0 === r && (r = !t.hasClass(e, n)),
        r ? E(e, n) : t.removeClass(e, n)
    };
    t.toggleClass = y ? function(e, t, n) {
        if (void 0 === t && (t = ""),
        g(e))
            for (var r = b(t), o = 0; o < r.length; o++)
                void 0 === n ? e.classList.toggle(r[o]) : e.classList.toggle(r[o], n);
        else
            C(e, t, n)
    }
    : C
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , o = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
        return e
    };
    function i(e) {
        var t = o(e)
          , n = t.pop();
        if (!n || 0 === t.length)
            throw new Error("memoizeSingle need at least 2 functions as arg");
        return {
            preparers: t,
            resolver: n
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.memoizeSingle = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n, r = i(e), a = r.resolver, s = r.preparers, u = null, c = null;
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            if (u && u.every((function(t, n) {
                return e[n] === t
            }
            )))
                return n;
            var r = s.map((function(t) {
                return t.apply(void 0, o(e))
            }
            ));
            if (c && c.every((function(e, t) {
                return r[t] === e
            }
            )))
                return u = e,
                n;
            var i = a.apply(void 0, o(r));
            return u = e,
            c = r,
            n = i,
            i
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(11);
    t.NS = {
        xml: "http://www.w3.org/XML/1998/namespace",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        svg: "http://www.w3.org/2000/svg"
    },
    t.AttributeNames = {
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type"
    },
    t.AttributeNamespace = {},
    r.forOwn(t.AttributeNames, (function(e, n) {
        var r = e.split(":")
          , o = t.NS[r[0]];
        o && (t.AttributeNamespace[n] = o)
    }
    ))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.innerHtml = function(e, t) {
        e.innerHTML = t
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, i = n(12), a = n(8), s = n(182), u = n(90), c = n(1);
        !function(e) {
            e["Wait"] = "010",
            e["DNS"] = "020",
            e["TCP"] = "030",
            e["SSL"] = "040",
            e["TTFB"] = "050",
            e["Response"] = "060"
        }(o || (o = {}));
        var d = function(e, t) {
            return void 0 !== t && void 0 !== e ? Math.round(e - t) : void 0
        }
          , l = function() {
            function e(e, t) {
                void 0 === t && (t = window),
                this.prefixes = e,
                this.cache = [],
                this.windows = [],
                this.registerWin(t)
            }
            return e.prototype.registerWin = function(e) {
                this.windows.push(e)
            }
            ,
            e.prototype.getNewEntries = function() {
                var e = this
                  , t = this.getPerformanceEntries()
                  , n = {};
                return a.forEach(t, (function(t) {
                    if (t && -1 === s.indexOf(e.cache, t)) {
                        e.cache.push(t);
                        var o = e.getPrefix(t.name);
                        n = r(r({}, n), e.getNetworkObject(t, o))
                    }
                }
                )),
                Object.keys(n).length ? n : null
            }
            ,
            e.prototype.getPerformanceEntries = function() {
                var e = this
                  , t = [];
                return a.forEach(this.windows, (function(e) {
                    try {
                        t = t.concat(e.performance.getEntries())
                    } catch (e) {}
                }
                )),
                i.filter(t, (function(t) {
                    return c.isObject(t) && u.some(e.prefixes, (function(e) {
                        return e.re.test(t.name)
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.getPrefix = function(e) {
                var t = "";
                return a.forEach(this.prefixes, (function(n) {
                    n.re.test(e) && (t = n.prefix)
                }
                )),
                t
            }
            ,
            e.prototype.getNetworkObject = function(e, t) {
                var n, r = {
                    Wait: d(e.domainLookupStart, e.startTime),
                    DNS: d(e.domainLookupEnd, e.domainLookupStart),
                    TCP: d(e.connectEnd, e.connectStart),
                    SSL: 0 === e.secureConnectionStart ? 0 : d(e.connectEnd, e.secureConnectionStart),
                    TTFB: d(e.responseStart, e.requestStart),
                    Response: d(e.responseEnd, e.responseStart)
                }, i = {};
                for (n in r) {
                    var a = r[n];
                    void 0 !== a && (i[t + "_" + o[n]] = a)
                }
                return i
            }
            ,
            e
        }();
        t.NetworkPerformanceManager = l
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.tryStringify = function(t) {
            var n;
            try {
                n = e.stringify(t)
            } catch (e) {}
            return n
        }
    }
    ).call(this, n(9))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(516)
      , o = n(481)
      , i = n(302)
      , a = n(500)
      , s = n(46)
      , u = n(488)
      , c = n(501);
    t.getBaseRequestParams = function(e) {
        var t = e.win
          , n = e.date
          , d = void 0 === n ? new Date : n
          , l = e.pr1
          , f = void 0 === l ? i.generatePr() : l
          , p = s.isAMP ? t.context.sourceUrl : t.document.referrer
          , h = s.isAMP ? t.context.sourceUrl : t.location
          , v = {
            dl: String(h),
            date: r.toISOString(d),
            pd: d.getDate().toString(),
            pdh: t.screen.height.toString(),
            pdw: t.screen.width.toString(),
            pr1: f.toString(),
            pr: a.getPr(t).toString(),
            prr: p,
            pv: d.getHours().toString(),
            pw: d.getDay().toString()
        };
        return c.ignoreExtid || (v.extid_loader = u.encode(o.getCookie(t.document, "_ym_uid") || ""),
        v.extid_tag_loader = t.location.hostname),
        v
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t) {
        var n = e.toString();
        return "0000".substr(0, t - n.length) + n
    };
    t.toISOString = function(e) {
        return e.getFullYear() + "-" + r(e.getMonth() + 1, 2) + "-" + r(e.getDate(), 2) + "T" + r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3) + function(e) {
            var t = -e.getTimezoneOffset();
            return "" + (t >= 0 ? "+" : "-") + r(Math.floor(Math.abs(t) / 60), 2) + ":" + r(Math.abs(t) % 60, 2)
        }(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getWindowSize = function() {
        var e = window
          , t = e.innerWidth
          , n = e.innerHeight;
        if (!t) {
            var r = e.document.documentElement;
            t = r.clientWidth,
            n = r.clientHeight
        }
        return {
            width: t,
            height: n
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r, o, i, a, s = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u, c = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return s(t, e),
        t
    }(n(565).RenderPerformanceManager);
    !function(e) {
        e["AdChosen"] = "010",
        e["AdReload"] = "010",
        e["AdCreated"] = "020",
        e["AdStartedRender"] = "030",
        e["AdfoxXhrRequestPrepared"] = "040",
        e["AdfoxJsonpRequestPrepared"] = "040",
        e["AdfoxXhrRequestLoaded"] = "050",
        e["AdfoxJsonpRequestLoaded"] = "050",
        e["AdTypeChosen"] = "060",
        e["BundleLoaded"] = "070",
        e["BundleRendered"] = "080",
        e["OldRendered"] = "080",
        e["HBRendered"] = "080"
    }(u = t.BlockRenderSteps || (t.BlockRenderSteps = {})),
    t.renderPerfomanceManager = new c({
        initSteps: (o = {},
        o[u.AdChosen] = 1,
        o[u.AdReload] = 1,
        o[u.AdCreated] = 1,
        o[u.AdStartedRender] = 1,
        o[u.AdfoxXhrRequestPrepared] = 1,
        o[u.AdfoxJsonpRequestPrepared] = 1,
        o),
        dataSteps: (i = {},
        i[u.AdfoxXhrRequestLoaded] = 1,
        i[u.AdfoxJsonpRequestLoaded] = 1,
        i),
        renderSteps: (a = {},
        a[u.AdTypeChosen] = 1,
        a[u.BundleLoaded] = 1,
        a[u.BundleRendered] = 1,
        a[u.OldRendered] = 1,
        a[u.HBRendered] = 1,
        a)
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(484);
    t.isInitializationByViewportSlice = !1,
    t.isInitializationByViewportTarget = r.isPercent(50)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DEFAULT_TIMEOUT = 300
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, o = n(20), i = n(8), a = n(193);
    !function(e) {
        e["COMMON"] = "adfoxAsyncParams",
        e["SCROLL"] = "adfoxAsyncParamsScroll",
        e["ADAPTIVE"] = "adfoxAsyncParamsAdaptive"
    }(r = t.ASYNC_PARAMS || (t.ASYNC_PARAMS = {}));
    t.initAsyncAdfox = function(e, t) {
        var n = t.create
          , s = t.createScroll
          , u = t.createAdaptive
          , c = a.reduce([{
            key: r.COMMON,
            cb: n
        }, {
            key: r.SCROLL,
            cb: function(t) {
                return s.apply(e, t)
            }
        }, {
            key: r.ADAPTIVE,
            cb: function(t) {
                return u.apply(e, t)
            }
        }], (function(t, n) {
            var r = n.key
              , a = n.cb;
            return t.concat(function(e, t, n) {
                var r = e[t]
                  , a = [];
                return o.isArray(r) && i.forEach(r, (function(t) {
                    try {
                        n.call(e, t)
                    } catch (e) {
                        a.push(e)
                    }
                }
                )),
                e[t] = {
                    push: n
                },
                a
            }(e, r, a))
        }
        ), []);
        i.forEach(c, (function(e) {
            throw e
        }
        ))
    }
}
, , , , , , , function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, n) {
            this.isDestroyed = !1,
            this.isDestroyed = !1,
            this.destroyHandlers = [],
            this.win = e,
            this.doc = e.document,
            this.params = this.processParams(t),
            this.callbacks = n
        }
        return e.prototype.renderTo = function(e) {
            this.container = e,
            this.beforeRender(),
            this.render(),
            this.isDestroyed || this.afterRender()
        }
        ,
        e.prototype.destroy = function() {
            this.isDestroyed || (this.isDestroyed = !0,
            this.removeEvents())
        }
        ,
        e.prototype.beforeRender = function() {}
        ,
        e.prototype.render = function() {}
        ,
        e.prototype.afterRender = function() {}
        ,
        e.prototype.processParams = function(e) {
            return e
        }
        ,
        e.prototype.removeEvents = function() {
            for (var e = 0; e < this.destroyHandlers.length; e++)
                this.destroyHandlers[e]();
            this.destroyHandlers = []
        }
        ,
        e.prototype.triggerCallback = function(e, t) {
            !this.isDestroyed && this.callbacks && this.callbacks[e] && this.callbacks[e](t)
        }
        ,
        e
    }();
    t["default"] = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3)
      , o = r.parseUrlUsingCache(window.location.href)
      , i = o.hash.substr(1) || o.search;
    t.parsedLocationQueryString = r.parseQueryString(i)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(558);
    t.getPixelRatio = r.getPixelRatio
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(559);
    function o(e, t) {
        var n = e.getPropertyValue(t) || "0";
        return parseInt(n, 10)
    }
    t.getElementInnerSize = function(e) {
        var t = r.getStyle(e);
        if ("inline" === t.getPropertyValue("display"))
            return {
                width: 0,
                height: 0
            };
        var n = e.getBoundingClientRect()
          , i = n.width
          , a = n.height;
        Math.abs(i - e.offsetWidth) >= 1 && (i = e.offsetWidth),
        Math.abs(a - e.offsetHeight) >= 1 && (a = e.offsetHeight);
        var s = o(t, "padding-top") + o(t, "padding-bottom")
          , u = o(t, "padding-left") + o(t, "padding-right")
          , c = o(t, "border-top-width") + o(t, "border-bottom-width")
          , d = o(t, "border-left-width") + o(t, "border-right-width");
        return {
            width: Math.max(0, Math.round(i) - u - d),
            height: Math.max(0, Math.round(a) - s - c)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(26);
    t.getIsQuirks = function(e) {
        return void 0 === e && (e = window),
        "BackCompat" === e.document.compatMode
    }
    ,
    t.getIsIEQuirks = function(e) {
        void 0 === e && (e = window);
        var n = r.getInternetExplorerVersion(e);
        return n > 0 && (5 === e.document.documentMode || 10 !== n && t.getIsQuirks(e))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(33);
    t.getIsYaBrowser = function(e) {
        return void 0 === e && (e = window),
        /YaBrowser/.test(r.getUserAgent(e))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isOperaMini = function(e) {
        void 0 === e && (e = window);
        var t = e.navigator.userAgent;
        return -1 !== t.indexOf("Opera Mini") || (-1 !== t.indexOf("; wv)") && -1 !== t.indexOf(" OPR/") || -1 !== t.indexOf(" OPiOS/"))
    }
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(34);
    t.testProperty = function(e, t) {
        if (void 0 === t && (t = o.cssPrefixes),
        !e)
            return !1;
        var n = r(e.split(":"), 2)
          , i = n[0]
          , a = n[1];
        if (a || (a = "none"),
        window.CSS && window.CSS.supports) {
            for (var s = 0; s < t.length; s++)
                if (window.CSS.supports(t[s] + i, a))
                    return !0;
            return !1
        }
        var u = new Image;
        for (s = 0; s < t.length; s++)
            if (u.style.cssText = t[s] + i + ":" + a,
            u.style.length)
                return !0;
        return !1
    }
}
, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof Promise ? n(6).Promise : Promise;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, i = n(92), a = n(502), s = n(583), u = n(538), c = n(241), d = n(203), l = Number(a.getBundleVersion()), f = s.getScriptSrcFromBundleName("banners", l), p = !(1886 === l);
    function h() {
        return o || (o = new r((function(e, t) {
            c.ns.bannerCallbacks = c.ns.bannerCallbacks || [],
            c.ns.bannerCallbacks.push((function(t) {
                e(t)
            }
            )),
            u.preloadSupported && u.addLinkElement("preload", f, {
                as: "script",
                crossorigin: "anonymous"
            }),
            i.loadScriptLite({
                win: window,
                src: f,
                onBeforeLoad: function(e) {
                    e.setAttribute("crossorigin", "anonymous")
                },
                onError: t
            })
        }
        ))),
        o
    }
    t.loadBanner = function(e) {
        return p ? function(e) {
            return new r((function(t, n) {
                h().then((function(n) {
                    t(n(e))
                }
                ), n)
            }
            ))
        }(e) : function(e) {
            var t = s.getScriptSrcFromBundleName(e + "/" + e, l);
            return new r((function(e, n) {
                v(t, (function(t) {
                    e(t)
                }
                ), n)
            }
            ))
        }(e)
    }
    ,
    t.initDeps = function() {
        p ? h() : function() {
            if (u.preloadSupported) {
                var e = s.getScriptSrcFromBundleName("banner.direct/banner.direct", l);
                u.addLinkElement("preload", e, {
                    as: "script"
                })
            }
        }()
    }
    ;
    var v = d.moduleLoad(c.ns)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(49).getHead(window);
    t.addLinkElement = function(e, t, n) {
        void 0 === n && (n = {});
        var o = document.createElement("link");
        for (var i in o.setAttribute("rel", e),
        o.setAttribute("href", t),
        n)
            o.setAttribute(i, n[i]);
        r.appendChild(o)
    }
    ,
    t.preloadSupported = "as"in document.createElement("link")
}
, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        e["ON_DESTROY"] = "onDestroy"
    }(r = t.CallbackNames || (t.CallbackNames = {}));
    var o = function() {
        function e() {
            for (var e in this.cbManagers = {},
            r) {
                var t = r[e];
                this.cbManagers[t] = new i
            }
        }
        return e.prototype.addCallback = function(e, t) {
            var n = this.cbManagers[e];
            n && n.addCallback(t)
        }
        ,
        e.prototype.callCallbacksOnceByName = function(e) {
            var t = this.cbManagers[e];
            t && t.callCallbacksOnce()
        }
        ,
        e
    }();
    t.AdfoxProxyCallbacksManager = o;
    var i = function() {
        function e() {
            this.callbacks = []
        }
        return e.prototype.addCallback = function(e) {
            this.callbacks.push(e)
        }
        ,
        e.prototype.callCallbacksOnce = function() {
            for (; this.callbacks.length > 0; )
                this.callbacks.shift()()
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        t.__esModule = !0,
        t.adFoxLoaderParamsChecker = function(t, n, i) {
            var a = e({}, t);
            (function(e) {
                var t = null;
                e ? e.ownerId || e.data ? e.params || e.data ? e.element || e.containerId || (t = 'Banner options required "element" or "containerId"') : t = 'Banner options required "params" or "data"' : t = 'Banner option "ownerId" is required' : t = "Banner options is required";
                if (t)
                    throw new Error("adfox#checkBannerOptions: " + t)
            }
            )(t),
            function(e) {
                for (var t, n = ["onDestroy", "onError", "onLoad", "onRender", "onStub", "onOpen", "onClose", "onRewarded"], r = 0; r < n.length; r++)
                    if ("undefined" !== (t = typeof e[n[r]]) && "function" !== t)
                        throw new Error("adfox#checkBannerOptions: " + n[r] + " must be function")
            }(t),
            function(e, t) {
                e.element && e.element instanceof Element ? t.container = e.element : e.containerId && (t.container = window.document.getElementById(e.containerId))
            }(t, a),
            function(e, t) {
                if (!t.container) {
                    var n = e.element ? "Element not found or is not instance of Element" : "Element with id #" + e.containerId + " not found";
                    throw new Error("adfox#checkContainer: " + n)
                }
                if (!window.document.body.contains(t.container))
                    throw new Error("adfox#checkContainer: Element isn't inserted in dom")
            }(t, a),
            function(e, t) {
                var n = t.bid;
                if (n) {
                    if (!(0,
                    r.isArray)(n))
                        throw new Error("adfox#bid: Must be an Array");
                    t.bid = (0,
                    o.map)(n, (function(e) {
                        var t = e.campaign_id
                          , n = e.bid
                          , r = Number(t);
                        if (!isFinite(r))
                            throw new Error("adfox#bid.campaign_id: Can not be converted to number");
                        return {
                            campaign_id: r,
                            bid: n
                        }
                    }
                    ))
                }
            }(0, a),
            void 0 !== n && function(e) {
                if (!(0,
                r.isArray)(e))
                    throw new Error("adfox#checkAdaptiveStates: adaptiveStates option must be Array");
                if (e.length < 1)
                    throw new Error("adfox#checkAdaptiveStates: adaptiveStates option can not be empty")
            }(n);
            void 0 !== i && function(e) {
                if (e.tabletWidth && e.phoneWidth && e.tabletWidth < e.phoneWidth)
                    throw new Error("adfox#checkAdaptiveOptions: phoneWidth must be less than tabletWidth")
            }(i);
            return a
        }
        ;
        var r = n(20)
          , o = n(10)
    }
    ).call(this, n(0))
}
, , , function(e, t, n) {
    e.exports = n(544)
}
, function(e, t, n) {
    "use strict";
    var r = n(545)
      , o = n(539)
      , i = n(12)
      , a = n(8)
      , s = n(302)
      , u = n(498)
      , c = n(485)
      , d = n(521)
      , l = n(491)
      , f = n(15)
      , p = n(585)
      , h = n(241)
      , v = n(201)
      , g = n(587)
      , _ = n(519)
      , y = n(588)
      , b = n(192)
      , m = n(121)
      , w = n(46)
      , O = n(194)
      , S = n(589)
      , E = n(540)
      , P = n(188)
      , x = n(590)
      , C = n(591)
      , M = n(538)
      , A = n(537)
      , I = window
      , T = [];
    function k(e, t) {
        var n;
        t.isTurbo = (0,
        l.isAdfoxPageTurbo)(e, t.isTurbo),
        t.useXhr = (0,
        p.isXhr)(t),
        t.customDomain ? n = {
            placeName: void 0,
            useDomain: !1
        } : (n = (0,
        g.useYandexDomain)(t)).useDomain || (t.customDomain = "ads.adfox.ru");
        var o = new r.AdFoxProxy(e,t,n);
        return T.push(o),
        o
    }
    function j(e) {
        var t = k(I, e);
        return t.initialize(),
        t
    }
    function R(e, t, n) {
        var r = k(I, e);
        return (0,
        b.onDocumentReady)(I, (function() {
            var i = (0,
            E.adFoxLoaderParamsChecker)(e)
              , a = (0,
            C.initByScroll)(I, i.container, (function() {
                t ? D(r, t, n) : r.initialize()
            }
            ), !0);
            r.cbManager.addCallback(o.CallbackNames.ON_DESTROY, a)
        }
        )),
        r
    }
    function N(e, t, n) {
        var r = k(I, e);
        return D(r, t, n),
        r
    }
    function L(e) {
        try {
            e()
        } catch (e) {
            I.console && I.console.error(e)
        }
    }
    function B(e, t) {
        var n = function(e) {
            return (0,
            f.isString)(e) ? (0,
            i.filter)(T, (function(t) {
                return t.getContainerId() === e
            }
            )) : e ? (0,
            i.filter)(T, (function(t) {
                return t.getContainerElement() === e
            }
            )) : T
        }(e);
        return (0,
        a.forEach)(n, (function(e) {
            t(e)
        }
        ))
    }
    function D(e, t, n) {
        var r = (h.ns.ac || (h.ns.ac = new S.AdaptiveController(I))).addBanner(e, t, n);
        e.cbManager.addCallback(o.CallbackNames.ON_DESTROY, r)
    }
    (0,
    u.getMatchidManager)().requestMatchIdCookie(),
    "number" != typeof I.pr && (I.pr = c.ns.headerBidding && c.ns.headerBidding.pr || (0,
    s.generatePr)()),
    h.ns.pr || (c.ns.headerBidding && c.ns.headerBidding.managerForAdfox && c.ns.headerBidding.managerForAdfox.requestBids(),
    (0,
    P.portion)(.1, (function() {
        var e = n(189).create(39394400)
          , t = 0;
        h.ns.counter = e;
        var r = function(n) {
            if (t <= 10) {
                var r, o = -1 !== n.message.indexOf("adfox#"), i = /(\/(adfox|adfox\/loader)\.js$)|pcode-bundles/.test(n.file), a = /([_a-z]+).js$/.exec(n.file), s = a && a[1] ? a[1] : "loader";
                if (!o && i)
                    t++,
                    e.params({
                        mediaError: (r = {},
                        r["useXhr=" + (0,
                        p.isXhr)()] = (0,
                        O.createErrorReport)(I, n, {
                            bundleName: s
                        }),
                        r)
                    })
            }
        };
        if (w.isIe && w.ieVer <= 9) {
            var o = I.onerror;
            I.onerror = function() {
                var e = O.processWindowError.apply(void 0, arguments);
                if (r(e),
                "function" == typeof o)
                    return o()
            }
        } else
            (0,
            m.addEvent)(I, "error", (function(e) {
                return r((0,
                O.processErrorEvent)(e))
            }
            ))
    }
    )),
    h.ns.pr = c.ns.headerBidding && c.ns.headerBidding.pr || I.pr,
    h.ns.create = j,
    h.ns.createScroll = R,
    h.ns.createAdaptive = N,
    h.ns.reload = function(e, t) {
        var n = (0,
        f.isString)(e) ? t : void 0;
        B(e, (function(e) {
            L((function() {
                return e.reload(n)
            }
            ))
        }
        ))
    }
    ,
    h.ns.destroy = function(e) {
        B(e, (function(e) {
            L((function() {
                return e.destroy()
            }
            ))
        }
        ))
    }
    ,
    h.ns.initialize = function(e) {
        B(e, (function(e) {
            L((function() {
                return e.initialize()
            }
            ))
        }
        ))
    }
    ,
    h.ns.hide = function(e) {
        B(e, (function(e) {
            L((function() {
                return e.hide()
            }
            ))
        }
        ))
    }
    ,
    h.ns.show = function(e) {
        B(e, (function(e) {
            L((function() {
                return e.show()
            }
            ))
        }
        ))
    }
    ,
    h.ns.getErrorsLog = function(e) {
        var t = [];
        return B(e, (function(e) {
            var n = e.getErrorsLog();
            n.length > 0 && t.push({
                containerId: e.getContainerId(),
                errorsLog: n
            })
        }
        )),
        t
    }
    ,
    h.ns.clearSession = function() {
        h.ns.pr = I.pr = (0,
        s.generatePr)(),
        c.ns.headerBidding && (c.ns.headerBidding.pr = h.ns.pr)
    }
    ,
    h.ns.getPageRequestParams = y.getPageRequestParams,
    h.ns._ = T,
    _.isInitializationByViewportSlice && _.isInitializationByViewportTarget && (h.ns.create = R,
    h.ns.createAdaptive = R),
    "function" != typeof I.AdFox_getCodeScript && (I.AdFox_getCodeScript = function(e, t, n) {
        var r = (0,
        x.getOptionsFromQuery)(t, n);
        r && j(r)
    }
    ),
    (0,
    d.initAsyncAdfox)(I, {
        create: j,
        createScroll: R,
        createAdaptive: N
    }),
    (0,
    A.initDeps)()),
    (0,
    P.portion)(.02, (function() {
        (0,
        v.sendPixel)("https://ads.adfox.ru/5962/getCode?p1=ccarf&p2=frfe&pfc=bwedx&pfb=fwprf&puid1=&puid2=&puid3=&puid4=&pr=" + h.ns.pr + "&ptrc=b")
    }
    )),
    M.preloadSupported ? (0,
    M.addLinkElement)("preload", "https://an.yandex.ru/system/context.js", {
        as: "script"
    }) : (0,
    M.addLinkElement)("preconnect", "https://an.yandex.ru"),
    (0,
    M.addLinkElement)("preconnect", "https://ads.adfox.ru")
}
, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof Promise ? n(6).Promise : Promise
      , o = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
      , i = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(546)
      , s = n(539)
      , u = n(518)
      , c = n(276)
      , d = n(520)
      , l = n(241)
      , f = n(304)
      , p = n(25)
      , h = n(485)
      , v = n(15)
      , g = n(90)
      , _ = n(540)
      , y = n(519)
      , b = 1
      , m = function() {
        function e(e, t, n) {
            var o = this;
            this.win = e,
            this.bannerOptions = t,
            this.domainInfo = n,
            this.isInitalized = !1,
            this.isHidden = !1,
            this.isFirstRender = !0,
            this.isBidRequested = !1,
            this.ad = null,
            this.reloadCounter = 0,
            this.cbManager = new s.AdfoxProxyCallbacksManager,
            this.headerBidding = h.ns.headerBidding,
            this.useHB = Boolean(this.headerBidding),
            this.headerBiddingTimeoutId = null,
            this.bannerId = p.generateHexString(10),
            this.slotNumber = b++,
            r.resolve().then((function() {
                void 0 === o.deferredInitialize && (o.deferredInitialize = !0)
            }
            ))
        }
        return e.prototype.getContainerId = function() {
            var e = this.bannerOptions
              , t = e.containerId
              , n = e.element;
            return t || n && n.id
        }
        ,
        e.prototype.getContainerElement = function() {
            var e = this.bannerOptions
              , t = e.element
              , n = e.containerId;
            return t || n && window.document.getElementById(n)
        }
        ,
        e.prototype.initialize = function() {
            var e = this;
            void 0 === this.deferredInitialize && (this.deferredInitialize = !1),
            this.useHB = this.useHB || Boolean(this.isIdRegisteredInHB(this.bannerOptions.containerId));
            var t = this.useHB && !this.headerBidding;
            this.isInitalized || this.isBidRequested || t ? this.deferMethod((function() {
                e.headerBidding = h.ns.headerBidding,
                e.initialize()
            }
            )) : this.initAd()
        }
        ,
        e.prototype.destroyWithoutCallbackInvocation = function() {
            this.destroy(!1)
        }
        ,
        e.prototype.destroy = function(e) {
            var t = this;
            void 0 === e && (e = !0),
            e && this.cbManager.callCallbacksOnceByName(s.CallbackNames.ON_DESTROY),
            this.isInitalized ? this.destroyAd() : this.deferMethod((function() {
                return t.destroy(e)
            }
            ))
        }
        ,
        e.prototype.reload = function(e) {
            var t = this;
            this.isInitalized && !this.isHidden ? (this.reloadCounter++,
            u.renderPerfomanceManager.continueLoggingTime(this.bannerId),
            e && e.bid && (this.bannerOptions.bid = e.bid),
            this.destroyAd(),
            this.initAd()) : this.deferMethod((function() {
                return t.reload()
            }
            ))
        }
        ,
        e.prototype.hide = function() {
            var e = this;
            this.isInitalized ? (this.isHidden = !0,
            this.ad.hide()) : this.deferMethod((function() {
                return e.hide()
            }
            ))
        }
        ,
        e.prototype.show = function() {
            var e = this;
            this.isInitalized ? (this.isHidden = !1,
            this.ad.show()) : this.deferMethod((function() {
                return e.show()
            }
            ))
        }
        ,
        e.prototype.deferMethod = function(e) {
            var t = l.addAdfoxNamespace(this.win);
            t.hbCallbacks = t.hbCallbacks || [];
            var n = this.headerBidding && this.headerBidding.managerForAdfox && this.headerBidding.managerForAdfox.isReady();
            !this.useHB || !this.isBidRequested && n || t.hbCallbacks.push(e)
        }
        ,
        e.prototype.initAd = function() {
            u.renderPerfomanceManager.setBlockData(this.bannerId, {
                slotNumber: this.slotNumber,
                reloadCounter: this.reloadCounter,
                deferredInitialize: this.deferredInitialize,
                isInitializationByViewportSlice: y.isInitializationByViewportSlice,
                isInitializationByViewportTarget: y.isInitializationByViewportTarget
            }),
            u.renderPerfomanceManager.logRenderLabel(this.bannerId, u.BlockRenderSteps.AdChosen),
            this.headerBidding ? (u.renderPerfomanceManager.setBlockData(this.bannerId, {
                isHB: !0
            }),
            this.createBidAd()) : (u.renderPerfomanceManager.setBlockData(this.bannerId, {
                isHB: !1
            }),
            this.createAd())
        }
        ,
        e.prototype.createBidAd = function() {
            var e = this
              , t = !1;
            this.headerBiddingTimeoutId || (this.headerBiddingTimeoutId = setTimeout((function() {
                t = !0,
                e.handleHeaderBiddingTimeout()
            }
            ), this.getHeaderBiddingTimeout())),
            this.isBidRequested || (this.isFirstRender || (this.isBidRequested = !0,
            this.headerBidding.managerForAdfox.requestBidForContainer(this.bannerOptions.containerId)),
            this.getBids((function(n) {
                t || (e.isBidRequested = !1,
                e.clearHeaderBiddingTimeout(),
                e.createAd(n))
            }
            )))
        }
        ,
        e.prototype.createAd = function(e, t) {
            var n, r = this;
            void 0 === e && (e = []),
            void 0 === t && (t = !0),
            this.isFirstRender = !1,
            this.isInitalized = !0;
            var o = _.adFoxLoaderParamsChecker(this.bannerOptions);
            u.renderPerfomanceManager.setBlockData(this.bannerId, {
                ownerId: this.bannerOptions.ownerId,
                params: this.bannerOptions.params
            }),
            t ? (o.bid = o.bid || [],
            (n = o.bid).push.apply(n, i(e))) : o.bid = [];
            var s = o.onDestroy;
            o.onDestroy = function() {
                r.destroyWithoutCallbackInvocation(),
                s && s()
            }
            ,
            o.bannerId = this.bannerId,
            o.reloadCounter = this.reloadCounter,
            o.slotNumber = this.slotNumber,
            o.getTrustedOwners = function() {
                return r.headerBidding && r.headerBidding.getTrustedOwners ? r.headerBidding.getTrustedOwners() : []
            }
            ,
            this.ad = new a.AdfoxAd(this.win,o,this.domainInfo),
            this.ad.render()
        }
        ,
        e.prototype.destroyAd = function() {
            this.clearHeaderBiddingTimeout(),
            this.ad && (this.ad.show(),
            this.ad.destroy(),
            this.ad = null),
            this.isInitalized = !1,
            this.isHidden = !1
        }
        ,
        e.prototype.getBids = function(e) {
            this.headerBidding.managerForAdfox.getBidsForAdfoxByContainerId(this.bannerOptions.containerId, e)
        }
        ,
        e.prototype.isIdRegisteredInHB = function(e) {
            var t = this.win.YaHeaderBiddingSettings && this.win.YaHeaderBiddingSettings.adUnits || this.headerBidding && this.headerBidding.managerForAdfox && this.headerBidding.managerForAdfox.getAdunits();
            return Boolean(v.isString(e) && t && g.some(t, (function(t) {
                return t.code === e
            }
            )))
        }
        ,
        e.prototype.getHeaderBiddingTimeout = function() {
            var e;
            try {
                e = 2 * h.ns.headerBidding.managerForAdfox.getRequestTimeout()
            } catch (e) {}
            return e && isFinite(e) || (e = d.DEFAULT_TIMEOUT),
            2 * (e = Math.max(e, d.DEFAULT_TIMEOUT))
        }
        ,
        e.prototype.clearHeaderBiddingTimeout = function() {
            this.headerBiddingTimeoutId && (clearTimeout(this.headerBiddingTimeoutId),
            this.headerBiddingTimeoutId = null)
        }
        ,
        e.prototype.handleHeaderBiddingTimeout = function() {
            c.logError(c.HeaderBiddingErrors.notLoaded),
            f.consoleWarn("Adfox HeaderBidding failed"),
            this.isBidRequested = !1,
            this.createAd([], !1)
        }
        ,
        e.prototype.getErrorsLog = function() {
            return this.ad.getErrorsLog()
        }
        ,
        e
    }();
    t.AdFoxProxy = m
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o = n(18);
        t.__esModule = !0,
        t.AdfoxAd = void 0;
        var i = o(n(528))
          , a = n(481)
          , s = n(488)
          , u = n(483)
          , c = n(547)
          , d = n(88)
          , l = n(8)
          , f = n(90)
          , p = n(514)
          , h = n(497)
          , v = n(3)
          , g = n(491)
          , _ = o(n(550))
          , y = n(554)
          , b = o(n(555))
          , m = n(498)
          , w = n(302)
          , O = n(556)
          , S = n(485)
          , E = n(564)
          , P = n(518)
          , x = n(580)
          , C = n(502)
          , M = n(486)
          , A = n(582)
          , I = n(537)
          , T = n(241)
          , k = o(n(584))
          , j = n(204);
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    (0,
                    i["default"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        (0,
        m.getMatchidManager)().requestMatchIdCookie();
        var L = null
          , B = null
          , D = null
          , F = null
          , U = [/avito/]
          , V = ["slide", "visibleAfterInit", "insertAfter", "insertPosition", "stick", "stickTo", "stickyColorScheme", "replayMode", "preload"]
          , H = {
            avito_sale: 3
        }
          , W = [].concat(V)
          , q = function() {
            return (new Date).getTime()
        }
          , z = 1;
        function Y(e, t, n) {
            var r;
            this._isDestroyed = !1,
            this._isTurbo = (0,
            g.isAdfoxPageTurbo)(window),
            this._useXhr = t.useXhr,
            this._win = e,
            this._doc = e.document,
            this._loc = e.location,
            this._params = t.params || {},
            this._extParams = t.extParams,
            this._isMatchidDirect = !1,
            this._clickMacro = t.clickMacro,
            this._domain = t.customDomain || "an.yandex.ru/adfox",
            this._ownerId = t.ownerId,
            this._data = t.data,
            this._containerId = t.containerId,
            this._pr1 = (0,
            w.generatePr)(),
            this._dt = new Date,
            this._bid = t.bid,
            this._useProtectMode = !(0,
            h.isInSafeframe)(this._win) && (t.useProtectMode || this._isTurbo),
            this._container = t.container,
            this._cspNonce = t.cspNonce,
            this._bannerId = t.bannerId,
            this._lastBannerName,
            this._resetCount = 0,
            this._errorsLog = [],
            this._reloadCounter = t.reloadCounter || 0,
            this._slotNumber = t.slotNumber || -1,
            this._insertionCodeParams = t.insertionCodeParams || {},
            this._getTrustedOwners = t.getTrustedOwners || function() {
                return []
            }
            ;
            var o = Boolean(n && n.placeName)
              , i = n && H[n.placeName] || 0
              , a = this._useXhr && T.ns && T.ns.xhrExperiment && T.ns.xhrExperiment.isXhr
              , s = !this._useXhr && T.ns && T.ns.xhrExperiment && T.ns.xhrExperiment.isControl
              , u = s || a;
            this._xhrExperimentLabel = s ? "prepareCode" : a ? "xhr" : "default",
            this.testtag = new x.AdfoxTesttag(((r = {})[x.Bits.isXhr] = Number(a),
            r[x.Bits.isPrepareCode] = Number(!this._useXhr),
            r[x.Bits.isXhrExperiment] = Number(u),
            r[x.Bits.isMatchIdCookieGotten] = 0,
            r[x.Bits.adfoxDomain] = Number(n && n.useDomain),
            r[x.Bits.adfoxDomainExpPlace] = o ? 1 : 0,
            r[x.Bits.anYandexRuExp] = i,
            r)),
            this._callbacks = {
                onDestroy: t.onDestroy,
                onError: t.onError,
                onLoad: t.onLoad,
                onRender: t.onRender,
                onStub: t.onStub,
                onVideoEnd: t.onVideoEnd,
                onRewarded: t.onRewarded,
                onOpen: t.onOpen,
                onClose: t.onClose
            },
            P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdCreated)
        }
        Y.prototype = {
            constructor: Y,
            render: function() {
                if (P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdStartedRender),
                this._data)
                    P.renderPerfomanceManager.stopLoggingTime(this._bannerId),
                    this._processResponseData(this._data),
                    this._data = null;
                else {
                    if (!this._matchidCookie) {
                        var e, t = (0,
                        m.getMatchidManager)().getMatchIdCookie();
                        if (void 0 !== t.yandexuid || void 0 !== t["matchid-cookies"])
                            this._matchidCookie = t,
                            this.testtag.setProps(((e = {})[x.Bits.isMatchIdCookieGotten] = 1,
                            e)),
                            this._isMatchidDirect = !0
                    }
                    this._initRequest()
                }
            },
            destroy: function() {
                this._isDestroyed || (this._isDestroyed = !0,
                this._transport && this._transport.destroy(),
                this._destroyBundle(),
                this._clean(),
                this._triggerCallback("onDestroy"))
            },
            hide: function() {
                this._bundle && this._bundle.hide()
            },
            show: function() {
                this._bundle && this._bundle.show()
            },
            _initRequest: function(e) {
                var t = e && e.prepareCodeUrl || this._getPrepareUrl();
                if (!this._useXhr)
                    return P.renderPerfomanceManager.stopLoggingTime(this._bannerId),
                    void this._initOldBanner({
                        pr1: this._pr1,
                        prepareCodeUrl: t
                    });
                this._initXHRequest(t, {
                    method: u.Methods.GET,
                    headers: {}
                })
            },
            _initXHRequest: function(e, t) {
                var n = this
                  , r = q();
                this._transport = new b["default"](this._win,{},{
                    error: function(e) {
                        n._cleanAfterGoogle(),
                        n._logError({
                            name: M.AdfoxErrors.xhr,
                            labels: {
                                requestType: n._xhrExperimentLabel
                            }
                        }),
                        n._triggerCallback("onError", e)
                    },
                    success: function(e) {
                        P.renderPerfomanceManager.logRenderLabel(n._bannerId, P.BlockRenderSteps.AdfoxXhrRequestLoaded);
                        var t = q() - r;
                        n._logEvent({
                            name: M.AdfoxEvents.requestParsed,
                            labels: {
                                requestType: n._xhrExperimentLabel
                            }
                        }),
                        n._transport = null,
                        n._processResponseData(e, t)
                    }
                }),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdfoxXhrRequestPrepared),
                this._transport.sendRequestWithUrl(e, t),
                this._logEvent({
                    name: M.AdfoxEvents.requested,
                    labels: {
                        requestType: this._xhrExperimentLabel
                    }
                })
            },
            _initJSONPRequest: function(t) {
                var n = this
                  , r = L()
                  , o = this._win.Ya
                  , i = !1
                  , a = null
                  , s = function(e, t) {
                    void 0 === t && (t = null),
                    n._cleanAfterGoogle(),
                    o[r] && (o[r] = null),
                    n._logError(M.AdfoxErrors.jsonp, {
                        requestType: "jsonp"
                    }),
                    n._triggerCallback("onError", {
                        type: "JSONPRequest",
                        reason: e,
                        exception: t
                    })
                }
                  , u = setTimeout((function() {
                    return s("Script execution timeout")
                }
                ), 15e3);
                o[r] = function(t) {
                    if (i = !0,
                    n._win.clearTimeout(u),
                    "string" == typeof t)
                        try {
                            t = e.parse(t)
                        } catch (e) {
                            return void s("Parse error", e)
                        }
                    else if ("object" != typeof t)
                        return void s("Incorrect data type");
                    a && D(a),
                    n._logEvent({
                        name: M.AdfoxEvents.requestParsed,
                        labels: {
                            requestType: "jsonp"
                        }
                    }),
                    n._processResponseData(t)
                }
                ,
                (0,
                d.isEncoded)(t) && (t = (0,
                d.decode)(t)),
                t = (0,
                v.addParamToUrl)(t, "callback", "Ya[" + r + "]"),
                t = (0,
                d.encode)(t),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdfoxJsonpRequestPrepared),
                (a = document.createElement("script")).charset = "utf-8",
                a.src = t,
                a.onerror = function() {
                    return s("Script loading error")
                }
                ,
                a.onload = function() {
                    P.renderPerfomanceManager.logRenderLabel(n._bannerId, P.BlockRenderSteps.AdfoxJsonpRequestLoaded),
                    i || (n._win.clearTimeout(u),
                    u = setTimeout((function() {
                        return s("Script loading timeout")
                    }
                    ), 1e3))
                }
                ,
                B(this._win).appendChild(a),
                this._logEvent({
                    name: M.AdfoxEvents.requested,
                    labels: {
                        requestType: "jsonp"
                    }
                })
            },
            _initOldBanner: function(e, t) {
                var n = this;
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.BundleLoaded);
                var r = void 0 === e.prepareCodeUrl
                  , o = "banner.old." + (r ? "js" : "transport");
                e.cspNonce = this._cspNonce,
                this._cleanAfterGoogle(),
                this._bundleStartTime = q(),
                this._oldBundleStartTime = q(),
                this._bundle = new _["default"](this._win,e,{
                    onRender: function() {
                        r && (P.renderPerfomanceManager.setBlockData(n._bannerId, {
                            renderNumber: z++
                        }),
                        P.renderPerfomanceManager.logRenderLabel(n._bannerId, P.BlockRenderSteps.OldRendered),
                        (0,
                        E.sendRenderData)(n._bannerId, n.testtag.toString())),
                        t && t.onRender && t.onRender(),
                        n._logEvent({
                            name: M.AdfoxEvents.bundleRendered,
                            labels: {
                                bundleName: o,
                                requestType: n._xhrExperimentLabel
                            }
                        }),
                        n._triggerCallback("onRender"),
                        (0,
                        E.sendAssetsInfo)()
                    },
                    onError: function(e) {
                        n._logError({
                            name: M.AdfoxErrors.unknown,
                            labels: {
                                bundleName: o,
                                requestType: n._xhrExperimentLabel
                            }
                        }),
                        n._triggerCallback("onError", e)
                    },
                    onLoad: function() {
                        n._logEvent({
                            name: M.AdfoxEvents.bundleLoaded,
                            labels: {
                                bundleName: o,
                                requestType: n._xhrExperimentLabel
                            }
                        })
                    },
                    onLoadAnotherBundle: function(e) {
                        n._logEvent({
                            name: M.AdfoxEvents.requestSucceeded,
                            labels: {
                                bundleName: o,
                                requestType: n._xhrExperimentLabel
                            }
                        }),
                        n._destroyBundle(),
                        n._processResponseData(e)
                    }
                }),
                this._bundle.renderTo(this._container),
                this._logEvent({
                    name: M.AdfoxEvents.requested,
                    labels: {
                        requestType: this._xhrExperimentLabel
                    }
                })
            },
            _resetBanner: function(e, t) {
                var n = this;
                void 0 === t && (t = function() {
                    return n._initRequest(e)
                }
                ),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdReload),
                this._destroyBundle(),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdCreated),
                e.options && (this._pr1 = (0,
                w.generatePr)(),
                this._ownerId = e.options.ownerId || this._ownerId,
                this._params = e.options.params || this._params,
                this._domain = e.options.customDomain || "an.yandex.ru/adfox"),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdStartedRender),
                t()
            },
            _destroyBundle: function() {
                this._bundle && (this._bundle.destroy(),
                this._bundle = null)
            },
            _getAdContainer: function(e) {
                return this._adContainer || (this._adContainer = this._doc.createElement("div"),
                this._adContainer.id = "AdFox_banner_" + e),
                this._adContainer
            },
            _getDefaultParams: function() {
                var e = this
                  , t = (0,
                f.some)(U, (function(t) {
                    return t.test(e._win.location.hostname)
                }
                ));
                return (0,
                O.getLoaderRequestParams)({
                    win: this._win,
                    date: this._dt,
                    pr1: this._pr1,
                    testtag: this.testtag,
                    isTurbo: this._isTurbo,
                    addsSsSkipToken: t,
                    container: this._container,
                    cookies: this._matchidCookie
                })
            },
            _collectParams: function(e) {
                var t = r(this._getDefaultParams(), this._params, {
                    extParams: (0,
                    p.tryStringify)(this._extParams)
                }, {
                    slotNumber: this._slotNumber.toString()
                }, this._isMatchidDirect ? {
                    "matchid-direct": "1"
                } : {});
                if ((0,
                l.forEach)(W, (function(e) {
                    t[e] = void 0
                }
                )),
                t.pk)
                    try {
                        t.pk = decodeURIComponent(t.pk)
                    } catch (e) {}
                if (this._bid) {
                    this._bid.forEach((function(e) {
                        e.placement_id && (e.placement_id = String(e.placement_id))
                    }
                    )),
                    this._bid.toJSON && (this._bid.toJSON = void 0);
                    var n = (0,
                    p.tryStringify)(this._bid) || "";
                    t.bids = (0,
                    s.encode)(n)
                }
                t.grab = (0,
                c.grab)(2048 - e.length),
                t.utf8 = "\u2713";
                var o = (0,
                a.getCookie)(document, "_ym_uid");
                return o && (t.duid = (0,
                s.encode)(o)),
                this._reloadCounter && (t.adf_refresh = this._reloadCounter,
                t.refresh = "1"),
                t
            },
            _getRawUrl: function() {
                var e;
                e = this._useXhr ? "getBulk/v2" : "prepareCode";
                return "https://" + this._domain + "/" + this._ownerId + "/" + e
            },
            _getShrunkenUrl: function() {
                var e = this._getRawUrl()
                  , t = this._collectParams(e)
                  , n = F(t, e);
                return {
                    url: n.url,
                    headers: n.headers
                }
            },
            _getPrepareUrl: function() {
                var e = this._getRawUrl()
                  , t = this._collectParams(e);
                return (0,
                v.addParamsToUrl)(e, t)
            },
            _processResponseData: function(e, t) {
                (0,
                E.sendNetworkInfo)(this.testtag.toString()),
                e.data && e.data.length ? this._parseDataInResponse(e.data, t) : this._parseErrorsInResponse(e.errors)
            },
            _removeAdContainer: function() {
                this._adContainer.parentNode.removeChild(this._adContainer),
                this._adContainer = null
            },
            _parseDataInResponse: function(e, t) {
                for (var n = 0; n < e.length; n++)
                    this._loadBundle(e[n], t)
            },
            _parseErrorsInResponse: function(e) {
                e && e.length && (0,
                f.some)(e, (function(e) {
                    return "" + e.status == "204"
                }
                )) ? this._onStub() : (this._cleanAfterGoogle(),
                this._triggerCallback("onError", {
                    message: e,
                    type: "adfoxBackend"
                }))
            },
            _processBundleName: function(e, t) {
                return "banner.xml" === e && t.vastBase64 ? "banner.inpage" : e
            },
            _loadBundle: function(e, t, n) {
                var r = this
                  , o = e.attributes && e.attributes.blockId || "";
                -1 !== o.indexOf("106253-417") && t && this._logEvent({
                    name: "AVITO_LOAD_TIME",
                    data: {
                        time: t
                    },
                    probability: 1
                }),
                P.renderPerfomanceManager.setBlockData(this._bannerId, {
                    blockId: o
                });
                var i = this._processBundleName(e.type, e.attributes)
                  , a = this._processBundleParams(e.attributes, i)
                  , s = Number(e.id);
                if (this._isBundleGoogle(i) || this._cleanAfterGoogle(),
                "banner.reset" === i) {
                    var u = e.attributes && e.attributes.options && e.attributes.options.ownerId || this._ownerId;
                    (0,
                    j.includes)(this._getTrustedOwners(), u) || (this._bid = void 0)
                }
                var c = "banner.direct" === i;
                if (a.isTurbo = this._isTurbo,
                !this._isTurbo || (0,
                h.isInSafeframe)(this._win) || c || this._isSizeFitForTurbo(a) || this._logError({
                    name: "turbo_size-fail",
                    data: {
                        bundleName: i,
                        isInSafeframe: (0,
                        h.isInSafeframe)(this._win),
                        width: "" + a.width,
                        height: "" + a.height,
                        renderTime: q() - this._bundleStartTime,
                        ownerId: this._ownerId,
                        message: e && e.message || ""
                    }
                }),
                c || (0,
                O.incrementAdNumber)(),
                P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.AdTypeChosen),
                P.renderPerfomanceManager.setBlockData(this._bannerId, {
                    product: i
                }),
                this._lastBannerName = i,
                "banner.old" === i)
                    this._loadOldBanner(e, a, s, n);
                else {
                    var d = this._triggerCallback("onLoad", {
                        bundleName: i,
                        bundleParams: a
                    }, (function() {
                        return r._callOnRender()
                    }
                    ), (function() {
                        return r._callOnError()
                    }
                    ));
                    "bid" === i && !1 !== d ? this._renderHeaderBidding(a, n) : (c && (a.initTime = Number(new Date)),
                    !1 !== d && this._runBundle(i, a, n))
                }
            },
            _isSizeFitForTurbo: function(e) {
                var t = e.width
                  , n = e.height;
                return Number(t) <= y.TURBO_MAX_SIZE.width && Number(n) <= y.TURBO_MAX_SIZE.height
            },
            _renderHeaderBidding: function(e, t) {
                var n = this
                  , r = S.ns.headerBidding;
                r && r.managerForAdfox && r.managerForAdfox.render ? (P.renderPerfomanceManager.logRenderLabel(this._bannerId, P.BlockRenderSteps.BundleLoaded),
                r.managerForAdfox.render(this._win, this._container, this._containerId, e.campaignId, N(N({}, this._callbacks), {}, {
                    onRender: function() {
                        var e;
                        (P.renderPerfomanceManager.setBlockData(n._bannerId, {
                            renderNumber: z++
                        }),
                        P.renderPerfomanceManager.logRenderLabel(n._bannerId, P.BlockRenderSteps.HBRendered),
                        (0,
                        E.sendRenderData)(n._bannerId, n.testtag.toString()),
                        t && t.onRender && t.onRender(),
                        n._callbacks.onRender) && (e = n._callbacks).onRender.apply(e, arguments);
                        (0,
                        E.sendAssetsInfo)()
                    },
                    onAdfoxBid: function(e, t) {
                        n._loadBundle(e, void 0, t)
                    }
                }))) : this._triggerCallback("onError", {
                    message: "Yandex Wrapper not found",
                    type: "adfoxBackend"
                })
            },
            _decodeOldBannerContent: function(e) {
                var t = "";
                return e.jsEncoded ? t = decodeURIComponent(e.jsEncoded) : e.jsBase64 && (t = (0,
                s.decode)(e.jsBase64)),
                t = t.split("<\/script>").join("<\\/script>")
            },
            _loadOldBanner: function(e, t, n, r) {
                this._useProtectMode ? this._initSandboxLoader(e) : this._initOldBanner({
                    pr1: n || this._pr1,
                    prepareCodeData: this._decodeOldBannerContent(t)
                }, r)
            },
            _initSandboxLoader: function(e) {
                var t = this;
                this._safeContainer = new k["default"](this._win,N(N({}, e), {}, {
                    cspNonce: this._cspNonce,
                    isXhr: this._useXhr
                }),{
                    onError: function() {
                        return t._callOnError()
                    },
                    onRender: function() {
                        return t._callOnRender()
                    },
                    onDestroy: function() {
                        return t.destroy()
                    },
                    onStub: function() {
                        return t._onStub()
                    }
                }),
                this._safeContainer.renderTo(this._container)
            },
            _callOnRender: function() {
                this._bundle && this._bundle.callOnRender ? this._bundle.callOnRender() : this._triggerCallback("onRender")
            },
            _callOnError: function() {
                this._bundle && this._bundle.callOnError ? this._bundle.callOnError() : this._triggerCallback("onError", {
                    message: "Custom error",
                    type: "adfoxBackend"
                })
            },
            _runBundle: function(e, t, n) {
                var r = this
                  , o = t.blockId;
                o && "n" === o.charAt(0).toLowerCase() && "banner.native" !== e && (e = "banner.native"),
                this._logEvent({
                    name: M.AdfoxEvents.bundleStarted,
                    labels: {
                        bundleName: e
                    }
                }),
                (0,
                I.loadBanner)(e).then((function(o) {
                    P.renderPerfomanceManager.logRenderLabel(r._bannerId, P.BlockRenderSteps.BundleLoaded),
                    (0,
                    E.sendNetworkInfo)(r.testtag.toString()),
                    r._bundleStartTime = q(),
                    r._logEvent({
                        name: M.AdfoxEvents.bundleLoaded,
                        labels: {
                            bundleName: e
                        }
                    }),
                    r._bundle = new o(r._win,t,N(N({}, r._callbacks), {}, {
                        onRender: function() {
                            P.renderPerfomanceManager.setBlockData(r._bannerId, {
                                renderNumber: z++
                            }),
                            P.renderPerfomanceManager.logRenderLabel(r._bannerId, P.BlockRenderSteps.BundleRendered),
                            r._logEvent({
                                name: M.AdfoxEvents.bundleRendered,
                                labels: {
                                    bundleName: e
                                }
                            }),
                            (0,
                            E.sendRenderData)(r._bannerId, r.testtag.toString()),
                            n && n.onRender && n.onRender(),
                            r._triggerCallback("onRender"),
                            (0,
                            E.sendAssetsInfo)()
                        },
                        onError: function(t) {
                            r._logError({
                                name: M.AdfoxErrors.unknown,
                                labels: {
                                    bundleName: e
                                }
                            }),
                            r._logError({
                                data: t,
                                name: "moduleError",
                                labels: {
                                    bundleName: e,
                                    ownerId: r._ownerId
                                },
                                probability: .1
                            }),
                            r._triggerCallback("onError", t)
                        },
                        onReset: function(t) {
                            (0,
                            E.sendNetworkInfo)(r.testtag.toString()),
                            r._logEvent({
                                name: M.AdfoxEvents.bundleReset,
                                labels: {
                                    bundleName: e
                                }
                            }),
                            r._triggerCallback("onReset"),
                            r._resetBanner(t)
                        },
                        onDestroy: function() {
                            r._logEvent({
                                name: M.AdfoxEvents.bundleDestroyed,
                                labels: {
                                    bundleName: e
                                }
                            }),
                            r.destroy()
                        },
                        onLogEvent: function(t) {
                            var n = t.name
                              , o = t.labels
                              , i = void 0 === o ? {} : o
                              , a = t.data
                              , s = t.probability;
                            return r._logEvent({
                                name: n,
                                labels: N(N({}, i), {}, {
                                    bundleName: e
                                }),
                                data: a,
                                probability: s
                            })
                        },
                        onLogError: function(t) {
                            var n = t.name
                              , o = t.labels
                              , i = void 0 === o ? {} : o
                              , a = t.probability;
                            return r._logError({
                                name: n,
                                labels: N(N({}, i), {}, {
                                    bundleName: e
                                }),
                                probability: a
                            })
                        },
                        onVideoEnd: function() {
                            r._triggerCallback("onVideoEnd")
                        }
                    })),
                    r._bundle.renderTo(r._container)
                }
                ), (function(t) {
                    r._logError({
                        name: M.AdfoxErrors.unknown,
                        labels: {
                            bundleName: e
                        }
                    }),
                    r._logError({
                        e: t,
                        name: "moduleError",
                        labels: {
                            bundleName: e,
                            ownerId: r._ownerId
                        },
                        probability: .1
                    }),
                    r._triggerCallback("onError", t)
                }
                ))
            },
            _triggerCallback: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                if ("onError" === e && this._errorsLog.push({
                    time: new Date,
                    args: n
                }),
                this._callbacks[e])
                    return this._callbacks[e].apply(this._win, n)
            },
            _processBundleParams: function(e, t) {
                var n = this;
                return this._clickMacro && (e.clickMacro = this._clickMacro),
                this._useProtectMode && (e.useProtectMode = !0),
                this._cspNonce && (e.cspNonce = this._cspNonce),
                "banner.inpage" === t && (0,
                l.forEach)(V, (function(t) {
                    e[t] = n._params[t]
                }
                )),
                e.testtag = this.testtag,
                e.useXhr = this._useXhr,
                e.ownerId = this._ownerId,
                e.insertionCodeParams = this._insertionCodeParams,
                e
            },
            _logEvent: function(e) {
                var t = void 0 === e ? {} : e
                  , n = t.name
                  , r = t.labels
                  , o = t.value
                  , i = t.data
                  , a = void 0 === i ? {} : i
                  , s = t.probability;
                a = N({
                    ownerId: this._ownerId,
                    params: this._params
                }, a),
                r = this._prepareLabels(r),
                void 0 === o ? (0,
                M.logEvent)({
                    name: n,
                    labels: r,
                    data: a,
                    probability: s
                }) : (0,
                M.logValue)({
                    name: n,
                    labels: r,
                    data: a,
                    value: o,
                    probability: s
                })
            },
            _logError: function(e) {
                var t = e.name
                  , n = e.labels
                  , r = e.data
                  , o = e.probability;
                (0,
                M.logError)({
                    message: t,
                    data: r,
                    labels: this._prepareLabels(n),
                    probability: o
                })
            },
            getErrorsLog: function() {
                return this._errorsLog
            },
            _prepareLabels: function(e) {
                return void 0 === e && (e = {}),
                N(N({}, e), {}, {
                    bundleVersion: String((0,
                    C.getBundleVersion)())
                })
            },
            _clean: function() {
                this._container.innerHTML = ""
            },
            _isBundleGoogle: function(e) {
                return "banner.adx" === e || "banner.dfp" === e
            },
            _cleanAfterGoogle: function() {
                this._isBundleGoogle(this._lastBannerName) && this._clean()
            },
            _onStub: function() {
                this._cleanAfterGoogle(),
                this._triggerCallback("onStub")
            }
        };
        var X = (0,
        A.manageLastBanner)(Y);
        t.AdfoxAd = X
    }
    ).call(this, n(9), n(0))
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.grab = void 0;
    var r = n(548);
    t.grab = r.grab
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(482);
    function o(e, t) {
        var n = window
          , o = n.document;
        if (t) {
            var a = function(e) {
                return e.location.host
            }(o);
            if (" yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr zen.yandex.ru zen.yandex.com ".indexOf(" " + a + " ") > -1)
                return t
        }
        var s = i(e, o);
        if ("t\n" === s && n.top !== n.self)
            try {
                s = i(e, n.parent.document)
            } catch (e) {}
        return r.encode(s, e)
    }
    function i(e, t) {
        var n = []
          , r = 0;
        n.push("t" + (t.title || "")),
        r += n[0].length;
        for (var o = 1; o < 4 && r < e; o++)
            for (var i = t.getElementsByTagName("h" + o), s = i.length, u = 0; u < s; u++) {
                var c = a(i[u]);
                r += c.length,
                n.push("" + o + c)
            }
        return n.join("\n") + "\n"
    }
    function a(e) {
        var t = []
          , n = "";
        if (!e)
            return n;
        for (t.push(e); t.length > 0; ) {
            if (3 === (e = t.pop()).nodeType)
                n += e.nodeValue + " ";
            else if (e.childNodes && e.childNodes.length > 0)
                for (var r = e.childNodes, o = r.length - 1; o >= 0; o--)
                    t.push(r[o])
        }
        return n.replace(/\s+/g, " ")
    }
    t.grab = o,
    t.oldGrab = function(e, t) {
        var n = o(e, t);
        return r.decode(n)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isTurboPage = function(e) {
        return Boolean(e.YA_TURBO_PAGES)
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(529)
      , a = n(214)
      , s = n(551)
      , u = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e),
        t.prototype.hide = function() {
            this.container && (this.container.style.display = "none")
        }
        ,
        t.prototype.show = function() {
            this.container && (this.container.style.display = "")
        }
        ,
        t.prototype.destroy = function() {
            this.cancelObserver(),
            this.destroyAdContainer(),
            this.destroyTransport(),
            e.prototype.destroy.call(this)
        }
        ,
        t.prototype.render = function() {
            var e = this.params.pr1;
            this.createAdContainer(e),
            this.initObserver(),
            this.createTransport(e),
            this.params.prepareCodeData ? this.transport.emulateRequestWithData(this.params.prepareCodeData) : this.transport.sendRequestWithUrl(this.params.prepareCodeUrl)
        }
        ,
        t.prototype.createTransport = function(e) {
            var t = this;
            this.transport = new s.IFrameTransport(e,this.win,this.container,this.params.cspNonce),
            this.transport.setCallbacks({
                error: function(e) {
                    return t.triggerCallback("onError", e)
                },
                load: function() {
                    return t.handleTransportLoad()
                },
                loadAdFoxBundle: function(e) {
                    var n = a.deepCopy(e);
                    t.handleTransportSuccess(n)
                }
            })
        }
        ,
        t.prototype.destroyTransport = function() {
            this.transport && (this.transport.destroy(),
            this.transport = null)
        }
        ,
        t.prototype.handleTransportLoad = function() {
            this.onTransportLoad && this.onTransportLoad(),
            this.triggerCallback("onLoad")
        }
        ,
        t.prototype.handleTransportSuccess = function(e) {
            this.cancelObserver(),
            this.triggerCallback("onLoad"),
            this.triggerCallback("onLoadAnotherBundle", e)
        }
        ,
        t.prototype.initObserver = function() {
            var e = this
              , t = function() {
                e.triggerCallback("onRender")
            };
            this.cancelObserve = "undefined" != typeof MutationObserver ? this.createObserver(t) : this.createObserverForOldBrowsers(t)
        }
        ,
        t.prototype.cancelObserver = function() {
            this.cancelObserve && (this.cancelObserve(),
            this.cancelObserve = null)
        }
        ,
        t.prototype.createObserver = function(e) {
            function t() {
                n.disconnect()
            }
            var n = new MutationObserver((function() {
                t(),
                e()
            }
            ));
            return n.observe(this.adContainer, {
                childList: !0
            }),
            t
        }
        ,
        t.prototype.createObserverForOldBrowsers = function(e) {
            var t = this;
            return this.onTransportLoad = e,
            function() {
                return t.onTransportLoad = null
            }
        }
        ,
        t.prototype.createAdContainer = function(e) {
            this.adContainer = this.doc.createElement("div"),
            this.adContainer.id = "AdFox_banner_" + e,
            this.container && this.container.appendChild(this.adContainer)
        }
        ,
        t.prototype.destroyAdContainer = function() {
            this.adContainer && this.adContainer.parentNode && this.adContainer.parentNode.removeChild(this.adContainer)
        }
        ,
        t
    }(i["default"]);
    t["default"] = u
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.IFrameTransport = a;
    var r = n(121)
      , o = n(552)
      , i = n(553);
    function a(e, t, n, r) {
        this._cspNonce = r,
        this._win = t,
        this._doc = t.document,
        this._pr1 = e,
        this._container = n,
        this._callbacks = {},
        this._isDestroyed = !1
    }
    a.prototype = {
        constructor: a,
        sendRequestWithUrl: function(e) {
            this._prepareCodeUrl = e,
            this._init()
        },
        emulateRequestWithData: function(e) {
            this._prepareCodeData = e,
            this._init()
        },
        destroy: function() {
            this._movingChecker && (this._movingChecker(),
            this._movingChecker = null),
            this._isDestroyed = !0,
            this._beforeDestroy(),
            this._removeSandbox()
        },
        setCallbacks: function(e) {
            this._callbacks = e
        },
        _triggerCallback: function(e, t) {
            if (!this._isDestroyed) {
                if ("error" === e && (this._isCatchError = !0,
                this._isLoad || (this._closeSandboxDocument(),
                t.type = "adfoxBackend")),
                "load" === e && (this._isLoad = !0,
                this._isCatchError))
                    return;
                this._callbacks[e] && this._callbacks[e](t)
            }
        },
        _getSandbox: function() {
            return this._sandbox || (this._sandbox = this._doc.createElement("iframe"),
            this._sandbox.id = "AdFox_iframe_" + this._pr1,
            this._sandbox.name = "adfox_transport_" + this._pr1,
            this._sandbox.style.display = "none",
            this._container.appendChild(this._sandbox)),
            this._sandbox
        },
        _init: function() {
            var e = this;
            this._isDestroyed = !1;
            var t = this._getSandbox();
            this._movingChecker = (0,
            i.initMovementChecking)(this._sandbox, (function() {
                e._win.console && e._win.console.error && e._win.console.error(e._sandbox, "Adfox transport frame was moved")
            }
            )),
            (0,
            o.onSandboxReady)(t, (function() {
                return e._insertContent(t)
            }
            ))
        },
        _insertContent: function(e) {
            var t = this._getPrepareCode()
              , n = this._getReadyCode()
              , r = e.contentDocument;
            this._isSandboxOpen = !0,
            r.open(),
            this._addSandboxEventListener(),
            r.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />'),
            r.write(t),
            r.write(n)
        },
        _addSandboxEventListener: function() {
            var e = this
              , t = this._sandbox.contentWindow;
            this._errorListener = function(t) {
                e._triggerCallback("error", {
                    type: "userScriptError",
                    message: t.message || "Script error in frame"
                })
            }
            ,
            (0,
            r.addEvent)(t, "error", this._errorListener),
            t.onPrepareCodeError = function() {
                e._triggerCallback("error", {
                    type: "adfoxBackend",
                    message: "Can't load AdFox prepare code"
                })
            }
            ,
            t.onPrepareCodeLoad = function() {
                (0,
                r.removeEvent)(t, "error", e._errorListener),
                e._triggerCallback("load")
            }
            ,
            t.loadAdFoxBundle = function(t) {
                e._triggerCallback("loadAdFoxBundle", t)
            }
        },
        _getNonce: function() {
            return this._cspNonce ? ' nonce="' + this._cspNonce + '"' : ""
        },
        _getReadyCode: function() {
            return "<script" + this._getNonce() + ">if(window.onPrepareCodeLoad){window.onPrepareCodeLoad()}<\/script>"
        },
        _getPrepareCode: function() {
            var e = this._prepareCodeData ? "" : ' src="' + this._prepareCodeUrl + '"'
              , t = this._prepareCodeData || "";
            return "<script\n                    " + this._getNonce() + ' \n                    onerror="window.onPrepareCodeError()" \n                    charset="utf-8"' + e + ">" + t + "\n                <\/script>"
        },
        _beforeDestroy: function() {
            if (this._sandbox) {
                var e = this._sandbox.contentWindow;
                e && "function" == typeof e.adfoxRemoveBanner && e.adfoxRemoveBanner()
            }
        },
        _removeSandbox: function() {
            this._sandbox && (this._closeSandboxDocument(),
            this._sandbox.parentNode && this._sandbox.parentNode.removeChild(this._sandbox),
            this._sandbox = null)
        },
        _closeSandboxDocument: function() {
            this._isSandboxOpen && (this._sandbox.contentDocument && this._sandbox.contentDocument.close(),
            this._isSandboxOpen = !1)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(46)
      , o = n(192);
    t.onSandboxReady = function(e, t) {
        r.isFirefox ? o.onDocumentReady(e.contentWindow, t) : t()
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(89);
    t.__esModule = !0,
    t.createSandbox = function(e) {
        var t = e.createElement("iframe");
        t.scrolling = "no";
        return t.style.cssText = "min-height:100%;height:100%;min-width:100%;width:1px;",
        t.setAttribute("marginwidth", 0),
        t.setAttribute("marginheight", 0),
        t.setAttribute("frameborder", 0),
        t
    }
    ,
    t.write = function(e, t, n) {
        o.isIe && o.ieVer <= 9 ? function(e, t, n) {
            var r, a = [], s = [];
            var u = /<script(.*?)>((.|\n)*?)<\/script>/g
              , c = /src=("|')(.*)("|')/;
            for (; r = u.exec(n); ) {
                var d = {
                    text: r[2]
                }
                  , l = c.exec(r[1]);
                l && l[2] && (d.src = l[2]),
                a.push(d)
            }
            for (var f = function(t) {
                var n = a[t];
                if (n.src)
                    s.push((function(t) {
                        (0,
                        i.loadScript)(e, n.src, t)
                    }
                    ));
                else {
                    var r = e.document.createElement("script");
                    r.type = "text/javascript",
                    r.text = n.text,
                    s.push((function(t) {
                        e.document.body.appendChild(r),
                        t()
                    }
                    ))
                }
            }, p = 0; p < a.length; p++)
                f(p);
            if (-1 === (n = n.replace(/<script/g, '<script type="text/template"')).indexOf("<body")) {
                var h = o.ieVer <= 8 ? '<meta http-equiv="X-UA-Compatible" content="IE=edge" />' : "";
                n = "<html><head>" + h + "</head><body>" + n + "</body></html>"
            }
            t.write(n),
            t.close(),
            function e() {
                s.length && s.shift()(e)
            }()
        }(e, t, n) : function(e, t) {
            e.write(t),
            e.close()
        }(t, n)
    }
    ,
    t.initMovementChecking = function(e, t) {
        var n = e.contentWindow
          , r = function() {
            return clearInterval(o)
        }
          , o = setInterval((function() {
            n !== e.contentWindow && (r(),
            t())
        }
        ), 150);
        return r
    }
    ;
    var o = r(n(46))
      , i = n(141)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TURBO_MAX_SIZE = {
        width: 300,
        height: 300
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r, o = (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        );
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(529)
          , a = n(483)
          , s = function(t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }
            return o(n, t),
            n.prototype.destroy = function() {
                this.isDestroyed || this.abortXhr(),
                t.prototype.destroy.call(this)
            }
            ,
            n.prototype.sendRequestWithUrl = function(e, t) {
                var n = this
                  , r = {
                    method: t.method,
                    timeout: 3e4,
                    withCredentials: !0,
                    data: t.data,
                    headers: t.headers,
                    onerror: function(e) {
                        var t = e.message;
                        return n.triggerError(t)
                    },
                    onload: function(e) {
                        return n.processResponse(e)
                    },
                    ontimeout: function() {
                        return n.triggerError("Timeout")
                    }
                };
                this.abortXhr = a.request(e, r)
            }
            ,
            n.prototype.processResponse = function(e) {
                this.isDestroyed || this.parseResponseData(e)
            }
            ,
            n.prototype.parseResponseData = function(t) {
                try {
                    var n = e.parse(t);
                    this.triggerCallback("success", n)
                } catch (e) {
                    this.triggerError("Can't parse backend response")
                }
            }
            ,
            n.prototype.triggerError = function(e) {
                void 0 === e && (e = "Can't load AdFox prepare code"),
                this.triggerCallback("error", {
                    type: "adfoxBackend",
                    message: e
                })
            }
            ,
            n
        }(i["default"]);
        t["default"] = s
    }
    ).call(this, n(9))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(178)
          , i = n(491)
          , a = n(17)
          , s = n(302)
          , u = n(515)
          , c = n(502)
          , d = n(557)
          , l = n(562)
          , f = n(563)
          , p = 0
          , h = 0;
        t.incrementAdNumber = function() {
            return h++
        }
        ,
        t.resetAdNumber = function() {
            return h = 0
        }
        ,
        t.getAdNumber = function() {
            return h
        }
        ,
        t.getLoaderRequestParams = function(t) {
            var n, v = t.win, g = t.date, _ = void 0 === g ? new Date : g, y = t.pr1, b = void 0 === y ? s.generatePr() : y, m = t.testtag, w = t.isTurbo, O = void 0 === w ? i.isAdfoxPageTurbo(v) : w, S = t.addsSsSkipToken, E = void 0 !== S && S, P = t.container, x = t.cookies, C = new d.LayoutConfig(P);
            C.set("req_no", p++),
            C.set("ad_no", (n = l.getPcodeAdNumber(),
            h + n));
            var M = r(r({}, u.getBaseRequestParams({
                win: v,
                date: _,
                pr1: b
            })), {
                ylv: "0." + a.loaderVersion,
                ybv: "0." + c.getBundleVersion(),
                ytt: m.toString(),
                "is-turbo": Number(O).toString(),
                "skip-token": f.getSkipToken(),
                "ad-session-id": o.getSessionId(),
                "layout-config": String(C),
                "enable-flat-highlight": "1",
                "pcode-version": "0"
            });
            return E && (M["ss-skip-token-length"] = "20",
            M["allow-repeat-ads"] = "0"),
            x && e(M, x),
            M
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var o = function() {
            return (o = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(531)
          , a = n(532)
          , s = n(560)
          , u = n(533)
          , c = n(259)
          , d = n(561)
          , l = n(517)
          , f = n(242)
          , p = function(e) {
            return Math.max(0, Math.round(e))
        }
          , h = function(e) {
            return Math.round(e)
        }
          , v = function() {
            function e(e, t) {
                if (void 0 === t && (t = {}),
                this.MIN_VISIBLE_AREA = .5,
                e) {
                    this.config = {};
                    var n = l.getWindowSize();
                    this.set("win_width", p(n.width)),
                    this.set("win_height", p(n.height)),
                    this.set("pixel_ratio", i.getPixelRatio()),
                    this.set("bandwidth", f.getDownlink());
                    var r = u.getIsQuirks();
                    r && this.set("quirks", r);
                    var d = function(e) {
                        var t = s.calculateSizeInfo(e)
                          , n = o(o(o({}, t.max.rect), t.max.inner), {
                            isFixed: t.isFixed
                        });
                        n.height >= s.MAX_BLOCK_HEIGHT && (n.height = 0,
                        n.top = n.bottom = t.origin.rect.top);
                        return n
                    }(e);
                    this.set("w", d.width),
                    this.set("h", d.height);
                    var h = o(o({}, c.getBoundingClientRect(e)), a.getElementInnerSize(e));
                    this.setLayout(h),
                    this.setVisible(h, n),
                    this.element = e,
                    this.size = h,
                    this.winSize = n
                } else {
                    if (!t)
                        throw new Error("wrong LayoutConfig constructor params");
                    this.config = t
                }
            }
            return e.prototype.set = function(e, t) {
                this.config[e] = t
            }
            ,
            e.prototype.toString = function() {
                return r.stringify(this.config)
            }
            ,
            e.prototype.setLayout = function(e) {
                var t = d.getWindowScroll();
                this.set("width", p(e.width)),
                this.set("height", p(e.height)),
                this.set("left", h(e.left + t.left)),
                this.set("top", h(e.top + t.top))
            }
            ,
            e.prototype.setVisible = function(e, t) {
                var n = e.width
                  , r = e.height
                  , o = e.top
                  , i = e.left
                  , a = e.right
                  , s = e.bottom
                  , u = 1
                  , c = Math.max(Math.min(a, t.width) - Math.max(i, 0), 0)
                  , d = Math.max(Math.min(s, t.height) - Math.max(o, 0), 0);
                n ? u *= c / n : (i < 0 || a > t.width) && (u = 0),
                r ? u *= d / r : (o < 0 || s > t.height) && (u = 0),
                this.set("visible", u >= this.MIN_VISIBLE_AREA ? 1 : 0),
                this.isFirstScreen = 0 === n && 0 === r && 0 === o && 0 === i && 0 === a && 0 === s || this.config.top < t.height
            }
            ,
            e
        }();
        t.LayoutConfig = v
    }
    ).call(this, n(0), n(9))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getPixelRatio = function(e) {
        return void 0 === e && (e = window),
        e.devicePixelRatio || e.screen.deviceXDPI && e.screen.deviceXDPI / e.screen.logicalXDPI || 1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getStyle = function(e, t) {
        return void 0 === t && (t = window),
        ("function" == typeof t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle) || {}
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(259)
      , o = n(532)
      , i = n(495);
    t.MAX_BLOCK_HEIGHT = 1e4,
    t.calculateSizeInfo = function(e) {
        var n = function() {
            var e = document.createElement("div");
            i.setStyle(e, {
                display: "table",
                "table-layout": "fixed",
                width: "100%",
                height: t.MAX_BLOCK_HEIGHT + "px",
                visibility: "hidden"
            });
            var n = document.createElement("div");
            n.style.display = "table-row";
            var r = document.createElement("div");
            return r.style.display = "table-cell",
            n.appendChild(r),
            e.appendChild(n),
            e
        }()
          , a = {
            inner: o.getElementInnerSize(e),
            rect: r.getBoundingClientRect(e)
        };
        e.appendChild(n);
        var s = function(e) {
            var t = e.parentElement
              , n = {
                inner: o.getElementInnerSize(e),
                rect: r.getBoundingClientRect(e)
            };
            if (!t)
                return n;
            var i = o.getElementInnerSize(t);
            if (i.width < n.inner.width || i.height < n.inner.height)
                return {
                    inner: i,
                    rect: r.getBoundingClientRect(t)
                };
            return n
        }(e);
        e.removeChild(n);
        var u = !1;
        return a.inner.height === s.inner.height && a.inner.width === s.inner.width && (u = !0),
        {
            isFixed: u,
            origin: a,
            max: s
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getWindowScroll = function() {
        return {
            left: void 0 === window.pageXOffset ? document.documentElement.scrollLeft : window.pageXOffset,
            top: void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getPcodeAdNumber = function() {
        var e = window
          , t = 0;
        return e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getCapturedCount && (t = e.Ya.Context.AdvManager.getCapturedCount()),
        t
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.getSkipToken = function() {
        var e = window
          , t = "";
        r.isAMP && e.context.master.Ya && e.context.master.Ya.getSkipToken ? t = e.context.master.Ya.getSkipToken() : e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getSkipToken && (t = e.Ya.Context.AdvManager.getSkipToken());
        return t
    }
    ;
    var r = n(46)
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(496)
          , i = n(518)
          , a = n(486)
          , s = n(566)
          , u = n(136)
          , c = n(178)
          , d = n(3)
          , l = n(12)
          , f = n(8)
          , p = {
            browser: s.getBrowserName(),
            device: s.getDeviceName()
        };
        t.sendRenderData = function(e, t) {
            var n = i.renderPerfomanceManager.getInfo(e);
            n && a.logValues({
                name: u.EVENT_RENDER_PERFOMANCE,
                values: n.timing,
                data: r(r({}, n.data), {
                    testtag: t
                }),
                labels: p
            }),
            i.renderPerfomanceManager.stopLoggingTime(e)
        }
        ,
        t.sendNetworkInfo = function(e) {
            var t = o.networkPerfomaceManager.getNewEntries();
            t && a.logValues({
                name: u.EVENT_NETWORK_PERFOMANCE,
                values: t,
                data: {
                    testtag: e,
                    adSessionId: c.getSessionId()
                },
                labels: p
            })
        }
        ;
        var h = 0;
        t.sendAssetsInfo = function() {
            if (window.performance)
                try {
                    var e = {}
                      , t = {}
                      , n = 0
                      , r = 0
                      , o = l.filter(performance.getEntriesByType("resource"), (function(e) {
                        return e.name.indexOf("banners.adfox.ru") >= 0
                    }
                    ));
                    f.forEach(o.slice(h, o.length), (function(o) {
                        var i = d.parseUrl(o.name).pathname.toLowerCase();
                        /\.js$/.test(i) ? (t[o.name] = o.duration,
                        r++) : /\.(jpg|png|jpeg|webp|gif|ico)$/.test(i) && (e[o.name] = o.duration,
                        n++)
                    }
                    )),
                    h = o.length,
                    n && a.logValues({
                        name: u.EVENT_IMAGES_LOAD_PERFOMANCE,
                        values: e,
                        data: {
                            adSessionId: c.getSessionId(),
                            images: e
                        },
                        labels: p
                    }),
                    r && a.logValues({
                        name: u.EVENT_SCRIPTS_LOAD_PERFOMANCE,
                        values: t,
                        data: {
                            adSessionId: c.getSessionId(),
                            scripts: t
                        },
                        labels: p
                    })
                } catch (e) {}
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = function() {
            return (r = e || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(7)
          , i = function() {
            function e(e) {
                this.steps = e,
                this.storage = {}
            }
            return e.prototype.setBlockData = function(e, t) {
                this.storage[e] || (this.storage[e] = {
                    timing: {},
                    data: {},
                    canLog: !0
                }),
                this.storage[e].data = r(r({}, this.storage[e].data), t)
            }
            ,
            e.prototype.logRenderLabel = function(e, t, n) {
                void 0 === n && (n = (new Date).getTime()),
                this.storage[e] || (this.storage[e] = {
                    timing: {},
                    data: {},
                    canLog: !0
                }),
                this.storage[e].timing[t] = n
            }
            ,
            e.prototype.stopLoggingTime = function(e) {
                this.storage[e] && (this.storage[e].canLog = !1)
            }
            ,
            e.prototype.continueLoggingTime = function(e) {
                this.storage[e] && (this.storage[e].canLog = !0)
            }
            ,
            e.prototype.getInfo = function(e) {
                return this.canSendData(this.storage[e]) && e in this.storage ? {
                    timing: this.prepareTimings(this.storage[e]),
                    data: this.storage[e].data
                } : null
            }
            ,
            e.prototype.canSendData = function(e) {
                return e && e.canLog
            }
            ,
            e.prototype.prepareTimings = function(e) {
                for (var t, n = {
                    totalInit: 0,
                    totalData: 0,
                    totalRender: 0,
                    total: 0
                }, r = o.getObjectKeys(e.timing).sort((function(e, t) {
                    return e - t
                }
                )), i = 0; i < r.length; i++) {
                    var a = e.timing[r[i]] || 0;
                    if (t) {
                        var s = a - t;
                        t = a,
                        n[r[i]] = s,
                        r[i]in this.steps.initSteps ? n.totalInit += s : r[i]in this.steps.dataSteps ? n.totalData += s : r[i]in this.steps.renderSteps && (n.totalRender += s),
                        n.total += s
                    } else
                        t = a
                }
                return n
            }
            ,
            e
        }();
        t.RenderPerformanceManager = i
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(567)
      , o = n(26)
      , i = n(243)
      , a = n(260)
      , s = n(568)
      , u = n(569)
      , c = n(570)
      , d = n(60)
      , l = n(274)
      , f = n(571)
      , p = n(535)
      , h = n(572)
      , v = n(122)
      , g = n(133)
      , _ = n(134)
      , y = n(135)
      , b = n(261)
      , m = n(534)
      , w = n(574)
      , O = n(576)
      , S = n(577)
      , E = n(578)
      , P = n(533)
      , x = window;
    t.isQuirks = P.getIsQuirks(x),
    t.isOpera = f.isOpera(x),
    t.isOperaMini = p.isOperaMini(x),
    t.ieVersion = o.getInternetExplorerVersion(x),
    t.isIE10 = 10 === t.ieVersion,
    t.isIE11 = 11 === t.ieVersion,
    t.isIE = t.ieVersion > 0,
    t.isIEQuirks = P.getIsIEQuirks(x),
    t.isEdge = t.ieVersion && t.ieVersion > 11 || !1,
    t.isSafari = v.getIsSafari(x),
    t.safariVersion = w.getSafariVersion(x),
    t.isSafariBasedBrowser = g.getIsSafariBasedBrowser(x),
    t.isFirefox = u.isFirefox(x),
    t.isChrome = s.getIsChrome(x),
    t.isYaBrowser = m.getIsYaBrowser(x),
    t.isUCBrowser = y.isUCBrowser(x),
    t.isIOS = d.getIsIOS(x),
    t.iOSVersion = i.getIOSVersion(x),
    t.isAndroid = a.getIfIsAndroid(x),
    t.androidVersion = r.getAndroidVersion(x),
    t.isWindowsPhone = b.isWindowsPhone(x),
    t.isMobile = l.isMobile(x),
    t.isPhone = h.isPhone(x),
    t.isHDPIScreen = c.isHDPIScreen(x),
    t.flashVer = [0, 0, 0];
    var C = n(536);
    t.testProperty = C.testProperty;
    var M = n(579);
    t.getBrowserName = M.getBrowserName,
    t.getDeviceName = function() {
        return (t.isPhone ? "phone" : t.isMobile && "tablet") || "desktop"
    }
    ,
    t.support = {
        cssFlex: O.isCssFlexSupported,
        cssTransform: O.isCssTransformSupported,
        cssTransition: O.isCssTransitionSupported,
        cssFilterBlur: O.isCssFilterBlurSupported,
        touch: _.isTouchDevice(x),
        postMessage: E.getIsPostMessageSupported(x),
        longUrls: S.getIsLongUrlSupported(x)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getAndroidVersion = function(e) {
        void 0 === e && (e = window);
        var t = e.navigator.userAgent
          , n = t.indexOf("Android");
        return -1 === n ? -1 : parseFloat(t.slice(n + 8))
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(534);
    t.getIsChrome = function(e) {
        return void 0 === e && (e = window),
        /Chrome/.test(e.navigator.userAgent) && /Google Inc/.test(e.navigator.vendor) && !r.getIsYaBrowser(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isFirefox = function(e) {
        return void 0 === e && (e = window),
        /firefox/.test(e.navigator.userAgent.toLowerCase())
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(531);
    t.isHDPIScreen = function(e) {
        return void 0 === e && (e = window),
        r.getPixelRatio(e) > 1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.isOpera = function(e) {
        return void 0 === e && (e = window),
        e.navigator.userAgent.indexOf("Opera") > -1 || e.navigator.userAgent.indexOf("OPR") > -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(33)
      , o = n(260)
      , i = n(573);
    t.isPhone = function(e) {
        return void 0 === e && (e = window),
        i.getIsIphone(e) || o.getIfIsAndroid(e) && r.getUserAgent(e).toLowerCase().indexOf("mobile") > -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(33)
      , o = n(60);
    t.getIsIphone = function(e) {
        return void 0 === e && (e = window),
        o.getIsIOS(e) && r.getUserAgent(e).toLowerCase().indexOf("iphone") > -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(575);
    t.getSafariVersion = function(e) {
        if (void 0 === e && (e = window),
        r.isSafari && e.navigator && e.navigator.userAgent) {
            var t = e.navigator.userAgent.match(/version\/(\d+)/i);
            if (t) {
                var n = Number(t[1]);
                if (n)
                    return n
            }
        }
        return -1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(122);
    t.isSafari = r.getIsSafari()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(536);
    t.isCssFlexSupported = r.testProperty("flex"),
    t.isCssTransformSupported = r.testProperty("transform"),
    t.isCssTransitionSupported = r.testProperty("transition"),
    t.isCssAnimationSupported = r.testProperty("animation"),
    t.isCssFilterBlurSupported = r.testProperty("filter:blur(2px)")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(275);
    t.getIsLongUrlSupported = function(e) {
        return void 0 === e && (e = window),
        !r.getIsIE(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(26)
      , o = n(535)
      , i = n(2);
    t.getIsPostMessageSupported = function(e) {
        return void 0 === e && (e = window),
        i.isFunction(e.postMessage) && -1 === r.getInternetExplorerVersion(e) && !o.isOperaMini(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(33);
    t.getBrowserName = function(e) {
        void 0 === e && (e = window);
        var t = r.getUserAgent(e)
          , n = t.match(/(opera|chrome|safari|firefox|ucbrowser|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(n[1]))
            return "MSIE";
        if ("Chrome" === n[1]) {
            var o = t.match(/\b(OPR|Edge|YaBrowser)\/(\d+)/);
            if (null !== o)
                return o[1].replace("OPR", "Opera")
        }
        return n[1]
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    );
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, a = n(105), s = n(581), u = n(499), c = n(519), d = n(502), l = n(501);
    !function(e) {
        e["marker"] = "marker",
        e["isXhr"] = "isXhr",
        e["isIframe"] = "isIframe",
        e["plugin"] = "plugin",
        e["isPrepareCode"] = "isPrepareCode",
        e["isXhrExperiment"] = "isXhrExperiment",
        e["isMatchIdCookieGotten"] = "isMatchIdCookieGotten",
        e["isAllCookies"] = "isAllCookies",
        e["isInitializationByViewportSlice"] = "isInitializationByViewportSlice",
        e["isInitializationByViewportTarget"] = "isInitializationByViewportTarget",
        e["version"] = "version",
        e["lastBit"] = "lastBit",
        e["adfoxDomain"] = "adfoxDomain",
        e["adfoxDomainExpPlace"] = "adfoxDomainExpPlace",
        e["anYandexRuExp"] = "anYandexRuExp",
        e["extIdExp"] = "extIdExp"
    }(i = t.Bits || (t.Bits = {}));
    var f = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return o(t, e),
        t.prototype.getTemplate = function() {
            return [[4, i.marker], [1, i.isXhr], [1, i.isPrepareCode], [5, null], [1, i.isXhrExperiment], [4, null], [1, i.isIframe], [2, null], [1, i.isMatchIdCookieGotten], [1, i.isAllCookies], [1, i.isInitializationByViewportSlice], [1, i.isInitializationByViewportTarget], [1, i.adfoxDomainExpPlace], [1, i.adfoxDomain], [7, null], [4, i.anYandexRuExp], [3, null], [10, i.version], [1, i.plugin], [2, i.extIdExp], [1, i.lastBit]]
        }
        ,
        t.prototype.defaults = function() {
            var e;
            return (e = {})[i.marker] = s.PRODUCT_MARKERS.ADFOX,
            e[i.isIframe] = Number(window.top !== window.self),
            e[i.plugin] = Number(!1),
            e[i.version] = Number(d.getBundleVersion()),
            e[i.isAllCookies] = u.isAllCookies,
            e[i.isInitializationByViewportSlice] = c.isInitializationByViewportSlice,
            e[i.isInitializationByViewportTarget] = c.isInitializationByViewportTarget,
            e[i.extIdExp] = l.getExtIdExp(),
            e
        }
        ,
        t
    }(a.AbstractTesttag);
    t.AdfoxTesttag = f
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PRODUCT_MARKERS = {
        DIRECT: 1,
        RTB: 2,
        PERFORMANCE: 3,
        DISTRIBUTION: 4,
        ADFOX: 5,
        WIDGET: 13,
        OLD_BUILD: 14,
        LONG_SESSION: 15
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), i = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }, a = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
        return e
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(200)
      , u = n(486);
    t.manageLastBanner = function(e) {
        var t, n = function(e) {
            return "number" == typeof e && isFinite(e) && !(e % 1)
        }, r = function(e) {
            s.report(t.readyToShowEvent),
            e(t.content),
            t = void 0
        };
        return function(e) {
            function i() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(i, e),
            i.prototype._loadBundle = function(o) {
                for (var i = this, s = [], c = 1; c < arguments.length; c++)
                    s[c - 1] = arguments[c];
                if (o.attributes && o.attributes.lastBanner)
                    if (t)
                        r((function(t) {
                            return e.prototype._loadBundle.apply(i, a([t], s))
                        }
                        )),
                        u.errorToStats(new Error("severaLastBannersInWaterfall"));
                    else {
                        var d = o.attributes.lastBanner
                          , l = d.content
                          , f = d.readyToShowEvent
                          , p = d.sheduleCount;
                        n(p) ? (t = {
                            content: l,
                            readyToShowEvent: f,
                            sheduleCount: p
                        }).sheduleCount-- : u.errorToStats(new Error("invalidSheduleCount")),
                        e.prototype._loadBundle.apply(this, a([o], s))
                    }
                else
                    t && "number" == typeof t.sheduleCount && t.sheduleCount--,
                    e.prototype._loadBundle.apply(this, a([o], s))
            }
            ,
            i.prototype._resetBanner = function(n) {
                var o = this;
                t && t.sheduleCount <= 0 ? e.prototype._resetBanner.call(this, n, (function() {
                    return r((function(t) {
                        return e.prototype._loadBundle.call(o, t)
                    }
                    ))
                }
                )) : e.prototype._resetBanner.call(this, n)
            }
            ,
            i
        }(e)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    n(88);
    var r = n(202);
    t.getScriptSrcFromBundleName = function(e, t) {
        return e = e.replace(/\./g, "_"),
        r.getPublicPath(t) + e + ".js"
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(18);
        t.__esModule = !0,
        t["default"] = void 0;
        var o = r(n(528))
          , i = n(497)
          , a = n(121)
          , s = n(214)
          , u = n(302)
          , c = n(241)
          , d = n(64)
          , l = n(491);
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    o["default"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function h(e, t, n) {
            this._id = (0,
            u.generatePr)(),
            this._isDestroyed = !1,
            this._win = e,
            this._doc = e.document,
            this._callbacks = n;
            var r = (0,
            s.deepCopy)(t);
            delete r.cspNonce,
            this._params = r,
            this._isTurbo = (0,
            l.isAdfoxPageTurbo)(this._win),
            this._isXhr = t.isXhr,
            this._cspNonce = t.cspNonce
        }
        h.prototype = {
            constructor: h,
            renderTo: function(e) {
                this._container = e,
                this._render(),
                this._afterRender()
            },
            destroy: function() {
                this._isDestroyed || (this._isDestroyed = !0,
                (0,
                i.nukeSafeframe)(this._win, this._id))
            },
            _render: function() {
                var e = this._doc.createElement("div");
                this._container.appendChild(e),
                (0,
                i.initSafeframe)(this._win, e, this._getOptions())
            },
            _getSize: function() {
                return {
                    width: this._isTurbo ? this._params.attributes.width : "100%",
                    height: this._isTurbo ? this._params.attributes.height : 1
                }
            },
            _getOptions: function() {
                var t, n = "sfc-" + this._id, r = e.stringify(this._params);
                t = (0,
                d.isAdblock)() ? "" : 'crossorigin="anonymous" ';
                var o = '<div id="c"></div><script>function p(m){parent.postMessage("' + n + '-"+m,"*")}var ns="adfoxAsyncParams",w=window,d=document,e=d.getElementById("c");' + (0,
                c.getScriptStringForSettingGlobalVars)({
                    isXhr: this._isXhr
                }) + 'w[ns]=[];w[ns].push({containerId:"c",data:{data:[' + r + "]},isTurbo: " + this._isTurbo + ',onError:function(){p("error")},onStub:function(){p("stub")},onDestroy:function(){p("destroy")},onRender:function(){' + (this._isTurbo ? "" : "$sf.ext.expand({b:e.clientHeight-1,push:true});") + 'p("render")}});<\/script><script src="https://yastatic.net/pcode/adfox/loader.js" ' + t + " async><\/script>";
                return p(p({}, this._getSize()), {}, {
                    nonce: this._cspNonce,
                    html: o,
                    supports: {
                        "exp-push": !0
                    }
                })
            },
            _afterRender: function() {
                var e = this;
                (0,
                a.addEvent)(this._win, "message", (function(t) {
                    return e._onMessage(t)
                }
                ))
            },
            _onMessage: function(e) {
                e.data === "sfc-" + this._id + "-error" && this._triggerCallback("onError"),
                e.data === "sfc-" + this._id + "-destroy" && this._triggerCallback("onDestroy"),
                e.data === "sfc-" + this._id + "-render" && this._triggerCallback("onRender"),
                e.data === "sfc-" + this._id + "-stub" && this._triggerCallback("onStub")
            },
            _triggerCallback: function(e) {
                if (this._callbacks[e]) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return this._callbacks[e].apply(this._win, t)
                }
            }
        };
        var v = h;
        t["default"] = v
    }
    ).call(this, n(9))
}
, function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i["return"]) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(530)
      , i = n(491)
      , a = n(241)
      , s = n(586)
      , u = n(12)
      , c = i.isAdfoxPageTurbo(window);
    Boolean(a.ns.xhrExperiment) || (a.ns.xhrExperiment = function(e) {
        var t = o.parsedLocationQueryString["xhr-experiment-winner"]
          , n = r(u.filter(e, (function(e) {
            return e.name === t
        }
        )), 1)[0];
        return n ? n.value : s.choose(e)
    }([{
        name: "xhr",
        percent: 1,
        value: {
            isXhr: !0,
            isControl: !1
        }
    }, {
        name: "control",
        percent: 0,
        value: {
            isXhr: !1,
            isControl: !0
        }
    }, {
        name: "common",
        percent: 0,
        value: {
            isXhr: !1,
            isControl: !1
        }
    }]));
    var d = [255389]
      , l = Boolean(a.ns.isXhr) || Boolean(o.parsedLocationQueryString.xhr);
    t.isXhr = function(e) {
        var t = e.useXhr
          , n = e.ownerId
          , r = Boolean(a.ns.xhrExperiment && a.ns.xhrExperiment.isXhr);
        return (!n || -1 === d.indexOf(n)) && (c || l || t || r)
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Math.random();
    t.choose = function(e) {
        for (var t = 0, n = {
            percent: 0,
            value: ""
        }, o = 0; o < e.length && (t += e[o].percent,
        n = e[o],
        !(r <= t)); o++)
            ;
        return n.value
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(484);
    t.useYandexDomain = function(e) {
        var t = e.ownerId;
        return 245183 === Number(t) ? {
            placeName: "avito_sale",
            useDomain: r.isPercent(50)
        } : {
            placeName: "all",
            useDomain: !0
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(481)
      , o = n(178)
      , i = n(482);
    function a(e) {
        return void 0 === e && (e = window),
        String(e.location)
    }
    function s(e) {
        return void 0 === e && (e = window),
        i.encode(r.getCookie(e.document, "_ym_uid") || "")
    }
    function u(e) {
        return void 0 === e && (e = window),
        e.location.hostname
    }
    function c(e) {
        if (void 0 === e && (e = window),
        e.Ya) {
            var t = e.Ya.picture && e.Ya.picture.pr
              , n = e.Ya.headerBidding && e.Ya.headerBidding.pr;
            return t || n
        }
    }
    t.getPageRequestParams = function(e) {
        return void 0 === e && (e = window),
        {
            adSessionId: o.getSessionId(),
            location: a(e),
            extid_loader: s(e),
            extid_tag_loader: u(e),
            pr: c(e)
        }
    }
    ,
    t.getLocation = a,
    t.getExtidLoader = s,
    t.getExtidTagLoader = u
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(89);
        t.__esModule = !0,
        t.AdaptiveController = i;
        var o = r(n(121));
        function i(e) {
            this._win = e,
            this._banners = [],
            this._stateDesktop = "desktop",
            this._stateTablet = "tablet",
            this._statePhone = "phone",
            this._initResizeEvents()
        }
        i.prototype = {
            constructor: i,
            addBanner: function(t, n, r) {
                var o = this
                  , i = {
                    adaptiveOptions: e(this._getDefaultBannerAdaptiveOptions(), r || {}),
                    adInstance: t,
                    isVisible: !1,
                    state: null,
                    states: n
                };
                this._banners.push(i),
                this._checkBannerState(i);
                return function() {
                    return o.removeBanner(i.adInstance.getContainerId())
                }
            },
            removeBanner: function(e) {
                for (var t = 0; t < this._banners.length; t++)
                    if (this._banners[t].adInstance.getContainerId() === e) {
                        this._banners.splice(t, 1);
                        break
                    }
            },
            _getDefaultBannerAdaptiveOptions: function() {
                return {
                    tabletWidth: 830,
                    phoneWidth: 480,
                    isAutoReloads: !1
                }
            },
            _checkState: function() {
                for (var e = 0; e < this._banners.length; e++)
                    this._checkBannerState(this._banners[e])
            },
            _checkBannerState: function(e) {
                var t = this._win.document.documentElement.clientWidth
                  , n = e.adaptiveOptions
                  , r = null;
                (r = t > n.tabletWidth ? this._stateDesktop : t <= n.tabletWidth && t > n.phoneWidth ? this._stateTablet : this._statePhone) !== e.state && (e.state = r,
                this._toggleBannerState(e))
            },
            _initResizeEvents: function() {
                var e = this;
                o.addEvent(this._win, "resize", (function() {
                    return e._checkState()
                }
                ))
            },
            _toggleBannerState: function(e) {
                for (var t = !1, n = 0; n < e.states.length; n++)
                    if (e.states[n] === e.state) {
                        t = !0;
                        break
                    }
                t ? e.isVisible || this._showBanner(e) : e.isVisible && this._hideBanner(e)
            },
            _showBanner: function(e) {
                e.isVisible = !0,
                e.adInstance.initialize(),
                e.adaptiveOptions.isAutoReloads || e.adInstance.show()
            },
            _hideBanner: function(e) {
                e.isVisible = !1,
                e.adaptiveOptions.isAutoReloads ? e.adInstance.destroyWithoutCallbackInvocation() : e.adInstance.hide()
            }
        }
    }
    ).call(this, n(0))
}
, function(e, t, n) {
    "use strict";
    var r;
    function o() {
        return r || (r = document.createElement("a")),
        r
    }
    t.__esModule = !0,
    t.getOptionsFromQuery = function(e, t) {
        var n = {
            containerId: "AdFox_banner_" + e,
            params: {}
        }
          , r = o();
        r.href = t;
        var i = r.pathname;
        "/" !== i[0] && (i = "/" + i);
        var a = /\/(\d+)\//.exec(i);
        a && a[1] && (n.ownerId = a[1]);
        for (var s = r.search.slice(1).replace(/&amp;/g, "&"), u = s.split("&"), c = 0; c < u.length; c++) {
            var d = u[c]
              , l = d.indexOf("=");
            l > 0 && (n.params[d.substr(0, l)] = decodeURIComponent(d.substr(l + 1)))
        }
        if (!s.length || !n.ownerId)
            return !1;
        return n
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(89);
    t.__esModule = !0,
    t.initByScroll = function(e, t, n, r) {
        function s() {
            i.removeEvent(e, "scroll", c),
            i.removeEvent(e, "resize", c)
        }
        var u = function(e, t, n) {
            var r = e.document;
            return function() {
                if (function(e) {
                    return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }(t)) {
                    var i = r.documentElement.clientWidth
                      , a = r.documentElement.clientHeight
                      , s = o.elementOffset(t)
                      , u = o.pageOffset(e);
                    u.top + a >= s.top && u.left + i >= s.left && n()
                }
            }
        }(e, t, (function() {
            r && s(),
            n()
        }
        ))
          , c = a.throttle(u, 300);
        return i.addEvent(e, "scroll", c, {
            passive: !0
        }),
        i.addEvent(e, "resize", c, {
            passive: !0
        }),
        c(),
        s
    }
    ;
    var o = r(n(24))
      , i = r(n(121))
      , a = r(n(592))
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.throttle = function(e, t, n) {
        var r, o, i;
        return function() {
            o = arguments,
            i = !0,
            n = n || null,
            r || function a() {
                i ? (e.apply(n, o),
                i = !1,
                r = setTimeout(a, t)) : r = null
            }()
        }
    }
}
]);
