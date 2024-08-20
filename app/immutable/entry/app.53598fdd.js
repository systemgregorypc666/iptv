import {S as C, i as q, s as U, a as j, e as h, c as z, b as g, d, f as L, g as p, h as w, j as W, o as F, k as G, l as H, m as J, n as A, p as m, q as K, r as M, u as Q, v as P, t as X, w as D, x as k, y as v, z as I, A as E, B as y} from "../chunks/index.873908ac.js";
const Y = "modulepreload"
  , Z = function(o, e) {
    return new URL(o,e).href
}
  , N = {}
  , R = function(e, n, i) {
    if (!n || n.length === 0)
        return e();
    const s = document.getElementsByTagName("link");
    return Promise.all(n.map(f=>{
        if (f = Z(f, i),
        f in N)
            return;
        N[f] = !0;
        const t = f.endsWith(".css")
          , a = t ? '[rel="stylesheet"]' : "";
        if (!!i)
            for (let l = s.length - 1; l >= 0; l--) {
                const u = s[l];
                if (u.href === f && (!t || u.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${f}"]${a}`))
            return;
        const r = document.createElement("link");
        if (r.rel = t ? "stylesheet" : Y,
        t || (r.as = "script",
        r.crossOrigin = ""),
        r.href = f,
        document.head.appendChild(r),
        t)
            return new Promise((l,u)=>{
                r.addEventListener("load", l),
                r.addEventListener("error", ()=>u(new Error(`Unable to preload CSS for ${f}`)))
            }
            )
    }
    )).then(()=>e()).catch(f=>{
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = f,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw f
    }
    )
}
  , se = {};
function $(o) {
    let e, n, i;
    var s = o[1][0];
    function f(t) {
        return {
            props: {
                data: t[3],
                form: t[2]
            }
        }
    }
    return s && (e = k(s, f(o)),
    o[12](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && I(e.$$.fragment, t),
            n = h()
        },
        m(t, a) {
            e && E(e, t, a),
            g(t, n, a),
            i = !0
        },
        p(t, a) {
            const _ = {};
            if (a & 8 && (_.data = t[3]),
            a & 4 && (_.form = t[2]),
            s !== (s = t[1][0])) {
                if (e) {
                    P();
                    const r = e;
                    d(r.$$.fragment, 1, 0, ()=>{
                        y(r, 1)
                    }
                    ),
                    L()
                }
                s ? (e = k(s, f(t)),
                t[12](e),
                v(e.$$.fragment),
                p(e.$$.fragment, 1),
                E(e, n.parentNode, n)) : e = null
            } else
                s && e.$set(_)
        },
        i(t) {
            i || (e && p(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            o[12](null),
            t && w(n),
            e && y(e, t)
        }
    }
}
function x(o) {
    let e, n, i;
    var s = o[1][0];
    function f(t) {
        return {
            props: {
                data: t[3],
                $$slots: {
                    default: [ee]
                },
                $$scope: {
                    ctx: t
                }
            }
        }
    }
    return s && (e = k(s, f(o)),
    o[11](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && I(e.$$.fragment, t),
            n = h()
        },
        m(t, a) {
            e && E(e, t, a),
            g(t, n, a),
            i = !0
        },
        p(t, a) {
            const _ = {};
            if (a & 8 && (_.data = t[3]),
            a & 8215 && (_.$$scope = {
                dirty: a,
                ctx: t
            }),
            s !== (s = t[1][0])) {
                if (e) {
                    P();
                    const r = e;
                    d(r.$$.fragment, 1, 0, ()=>{
                        y(r, 1)
                    }
                    ),
                    L()
                }
                s ? (e = k(s, f(t)),
                t[11](e),
                v(e.$$.fragment),
                p(e.$$.fragment, 1),
                E(e, n.parentNode, n)) : e = null
            } else
                s && e.$set(_)
        },
        i(t) {
            i || (e && p(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            o[11](null),
            t && w(n),
            e && y(e, t)
        }
    }
}
function ee(o) {
    let e, n, i;
    var s = o[1][1];
    function f(t) {
        return {
            props: {
                data: t[4],
                form: t[2]
            }
        }
    }
    return s && (e = k(s, f(o)),
    o[10](e)),
    {
        c() {
            e && v(e.$$.fragment),
            n = h()
        },
        l(t) {
            e && I(e.$$.fragment, t),
            n = h()
        },
        m(t, a) {
            e && E(e, t, a),
            g(t, n, a),
            i = !0
        },
        p(t, a) {
            const _ = {};
            if (a & 16 && (_.data = t[4]),
            a & 4 && (_.form = t[2]),
            s !== (s = t[1][1])) {
                if (e) {
                    P();
                    const r = e;
                    d(r.$$.fragment, 1, 0, ()=>{
                        y(r, 1)
                    }
                    ),
                    L()
                }
                s ? (e = k(s, f(t)),
                t[10](e),
                v(e.$$.fragment),
                p(e.$$.fragment, 1),
                E(e, n.parentNode, n)) : e = null
            } else
                s && e.$set(_)
        },
        i(t) {
            i || (e && p(e.$$.fragment, t),
            i = !0)
        },
        o(t) {
            e && d(e.$$.fragment, t),
            i = !1
        },
        d(t) {
            o[10](null),
            t && w(n),
            e && y(e, t)
        }
    }
}
function O(o) {
    let e, n = o[6] && S(o);
    return {
        c() {
            e = G("div"),
            n && n.c(),
            this.h()
        },
        l(i) {
            e = H(i, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var s = J(e);
            n && n.l(s),
            s.forEach(w),
            this.h()
        },
        h() {
            A(e, "id", "svelte-announcer"),
            A(e, "aria-live", "assertive"),
            A(e, "aria-atomic", "true"),
            m(e, "position", "absolute"),
            m(e, "left", "0"),
            m(e, "top", "0"),
            m(e, "clip", "rect(0 0 0 0)"),
            m(e, "clip-path", "inset(50%)"),
            m(e, "overflow", "hidden"),
            m(e, "white-space", "nowrap"),
            m(e, "width", "1px"),
            m(e, "height", "1px")
        },
        m(i, s) {
            g(i, e, s),
            n && n.m(e, null)
        },
        p(i, s) {
            i[6] ? n ? n.p(i, s) : (n = S(i),
            n.c(),
            n.m(e, null)) : n && (n.d(1),
            n = null)
        },
        d(i) {
            i && w(e),
            n && n.d()
        }
    }
}
function S(o) {
    let e;
    return {
        c() {
            e = K(o[7])
        },
        l(n) {
            e = M(n, o[7])
        },
        m(n, i) {
            g(n, e, i)
        },
        p(n, i) {
            i & 128 && Q(e, n[7])
        },
        d(n) {
            n && w(e)
        }
    }
}
function te(o) {
    let e, n, i, s, f;
    const t = [x, $]
      , a = [];
    function _(l, u) {
        return l[1][1] ? 0 : 1
    }
    e = _(o),
    n = a[e] = t[e](o);
    let r = o[5] && O(o);
    return {
        c() {
            n.c(),
            i = j(),
            r && r.c(),
            s = h()
        },
        l(l) {
            n.l(l),
            i = z(l),
            r && r.l(l),
            s = h()
        },
        m(l, u) {
            a[e].m(l, u),
            g(l, i, u),
            r && r.m(l, u),
            g(l, s, u),
            f = !0
        },
        p(l, [u]) {
            let b = e;
            e = _(l),
            e === b ? a[e].p(l, u) : (P(),
            d(a[b], 1, 1, ()=>{
                a[b] = null
            }
            ),
            L(),
            n = a[e],
            n ? n.p(l, u) : (n = a[e] = t[e](l),
            n.c()),
            p(n, 1),
            n.m(i.parentNode, i)),
            l[5] ? r ? r.p(l, u) : (r = O(l),
            r.c(),
            r.m(s.parentNode, s)) : r && (r.d(1),
            r = null)
        },
        i(l) {
            f || (p(n),
            f = !0)
        },
        o(l) {
            d(n),
            f = !1
        },
        d(l) {
            a[e].d(l),
            l && w(i),
            r && r.d(l),
            l && w(s)
        }
    }
}
function ne(o, e, n) {
    let {stores: i} = e
      , {page: s} = e
      , {constructors: f} = e
      , {components: t=[]} = e
      , {form: a} = e
      , {data_0: _=null} = e
      , {data_1: r=null} = e;
    W(i.page.notify);
    let l = !1
      , u = !1
      , b = null;
    F(()=>{
        const c = i.page.subscribe(()=>{
            l && (n(6, u = !0),
            X().then(()=>{
                n(7, b = document.title || "untitled page")
            }
            ))
        }
        );
        return n(5, l = !0),
        c
    }
    );
    function T(c) {
        D[c ? "unshift" : "push"](()=>{
            t[1] = c,
            n(0, t)
        }
        )
    }
    function V(c) {
        D[c ? "unshift" : "push"](()=>{
            t[0] = c,
            n(0, t)
        }
        )
    }
    function B(c) {
        D[c ? "unshift" : "push"](()=>{
            t[0] = c,
            n(0, t)
        }
        )
    }
    return o.$$set = c=>{
        "stores"in c && n(8, i = c.stores),
        "page"in c && n(9, s = c.page),
        "constructors"in c && n(1, f = c.constructors),
        "components"in c && n(0, t = c.components),
        "form"in c && n(2, a = c.form),
        "data_0"in c && n(3, _ = c.data_0),
        "data_1"in c && n(4, r = c.data_1)
    }
    ,
    o.$$.update = ()=>{
        o.$$.dirty & 768 && i.page.set(s)
    }
    ,
    [t, f, a, _, r, l, u, b, i, s, T, V, B]
}
class re extends C {
    constructor(e) {
        super(),
        q(this, e, ne, te, U, {
            stores: 8,
            page: 9,
            constructors: 1,
            components: 0,
            form: 2,
            data_0: 3,
            data_1: 4
        })
    }
}
const oe = [()=>R(()=>import("../nodes/0.1d098126.js"), ["../nodes/0.1d098126.js", "../chunks/index.873908ac.js", "../assets/0.9793758c.css"], import.meta.url), ()=>R(()=>import("../nodes/1.dba2d0ec.js"), ["../nodes/1.dba2d0ec.js", "../chunks/index.873908ac.js", "../chunks/stores.2aa88a39.js", "../chunks/singletons.351ef785.js"], import.meta.url), ()=>R(()=>import("../nodes/2.db8f722a.js"), ["../nodes/2.db8f722a.js", "../chunks/index.873908ac.js", "../chunks/EditButton.90050fa5.js", "../chunks/singletons.351ef785.js", "../chunks/stores.2aa88a39.js", "../assets/EditButton.0d24e5da.css", "../assets/2.dadff33c.css"], import.meta.url), ()=>R(()=>import("../nodes/3.d9801271.js"), ["../nodes/3.d9801271.js", "../chunks/index.873908ac.js", "../chunks/stores.2aa88a39.js", "../chunks/singletons.351ef785.js"], import.meta.url), ()=>R(()=>import("../nodes/4.3515f347.js"), ["../nodes/4.3515f347.js", "../chunks/index.873908ac.js", "../chunks/EditButton.90050fa5.js", "../chunks/singletons.351ef785.js", "../chunks/stores.2aa88a39.js", "../assets/EditButton.0d24e5da.css"], import.meta.url)]
  , ae = []
  , le = {
    "/": [2],
    "/channels/[country]/[name]": [-5],
    "/channel": [3]
}
  , fe = {
    handleError: ({error: o})=>{
        console.error(o)
    }
};
export {le as dictionary, fe as hooks, se as matchers, oe as nodes, re as root, ae as server_loads};
