import {S as u, i as f, s as _, C as p, k as h, q as k, a as S, D as g, l as $, m as v, r as C, h as d, c as E, E as m, b as y, F as b, G as L, H as w, g as M, d as j} from "../chunks/index.873908ac.js";
const q = !0
  , O = !0
  , P = !1
  , F = Object.freeze(Object.defineProperty({
    __proto__: null,
    csr: O,
    prerender: q,
    ssr: P
}, Symbol.toStringTag, {
    value: "Module"
}));
function T(o) {
    let s, l, r, n;
    const c = o[1].default
      , t = p(c, o, o[0], null);
    return {
        c() {
            s = h("script"),
            l = k(`if (document) {
      const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      const mode = localStorage.theme || prefersColorScheme
      if (mode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }`),
            r = S(),
            t && t.c()
        },
        l(e) {
            const a = g("svelte-43tisa", document.head);
            s = $(a, "SCRIPT", {});
            var i = v(s);
            l = C(i, `if (document) {
      const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      const mode = localStorage.theme || prefersColorScheme
      if (mode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }`),
            i.forEach(d),
            a.forEach(d),
            r = E(e),
            t && t.l(e)
        },
        m(e, a) {
            m(document.head, s),
            m(s, l),
            y(e, r, a),
            t && t.m(e, a),
            n = !0
        },
        p(e, [a]) {
            t && t.p && (!n || a & 1) && b(t, c, e, e[0], n ? w(c, e[0], a, null) : L(e[0]), null)
        },
        i(e) {
            n || (M(t, e),
            n = !0)
        },
        o(e) {
            j(t, e),
            n = !1
        },
        d(e) {
            d(s),
            e && d(r),
            t && t.d(e)
        }
    }
}
function z(o, s, l) {
    let {$$slots: r={}, $$scope: n} = s;
    return o.$$set = c=>{
        "$$scope"in c && l(0, n = c.$$scope)
    }
    ,
    [n, r]
}
class G extends u {
    constructor(s) {
        super(),
        f(this, s, z, T, _, {})
    }
}
export {G as component, F as universal};
