function A() {}
const gt = t=>t;
function $t(t, e) {
    for (const n in e)
        t[n] = e[n];
    return t
}
function it(t) {
    return t()
}
function Y() {
    return Object.create(null)
}
function S(t) {
    t.forEach(it)
}
function Q(t) {
    return typeof t == "function"
}
function Qt(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let P;
function Ut(t, e) {
    return P || (P = document.createElement("a")),
    P.href = e,
    t === P.href
}
function wt(t) {
    return Object.keys(t).length === 0
}
function st(t, ...e) {
    if (t == null)
        return A;
    const n = t.subscribe(...e);
    return n.unsubscribe ? ()=>n.unsubscribe() : n
}
function Vt(t) {
    let e;
    return st(t, n=>e = n)(),
    e
}
function Xt(t, e, n) {
    t.$$.on_destroy.push(st(e, n))
}
function Yt(t, e, n, i) {
    if (t) {
        const s = rt(t, e, n, i);
        return t[0](s)
    }
}
function rt(t, e, n, i) {
    return t[1] && i ? $t(n.ctx.slice(), t[1](i(e))) : n.ctx
}
function Zt(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0)
            return s;
        if (typeof s == "object") {
            const l = []
              , r = Math.max(e.dirty.length, s.length);
            for (let o = 0; o < r; o += 1)
                l[o] = e.dirty[o] | s[o];
            return l
        }
        return e.dirty | s
    }
    return e.dirty
}
function te(t, e, n, i, s, l) {
    if (s) {
        const r = rt(e, n, i, l);
        t.p(r, s)
    }
}
function ee(t) {
    if (t.ctx.length > 32) {
        const e = []
          , n = t.ctx.length / 32;
        for (let i = 0; i < n; i++)
            e[i] = -1;
        return e
    }
    return -1
}
function ne(t) {
    const e = {};
    for (const n in t)
        n[0] !== "$" && (e[n] = t[n]);
    return e
}
function ie(t, e) {
    const n = {};
    e = new Set(e);
    for (const i in t)
        !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
    return n
}
function se(t) {
    return t ?? ""
}
const ot = typeof window < "u";
let xt = ot ? ()=>window.performance.now() : ()=>Date.now()
  , U = ot ? t=>requestAnimationFrame(t) : A;
const T = new Set;
function ct(t) {
    T.forEach(e=>{
        e.c(t) || (T.delete(e),
        e.f())
    }
    ),
    T.size !== 0 && U(ct)
}
function bt(t) {
    let e;
    return T.size === 0 && U(ct),
    {
        promise: new Promise(n=>{
            T.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            T.delete(e)
        }
    }
}
let G = !1;
function vt() {
    G = !0
}
function Et() {
    G = !1
}
function kt(t, e, n, i) {
    for (; t < e; ) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}
function Nt(t) {
    if (t.hydrate_init)
        return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let a = 0; a < e.length; a++) {
            const f = e[a];
            f.claim_order !== void 0 && c.push(f)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1)
      , i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let c = 0; c < e.length; c++) {
        const a = e[c].claim_order
          , f = (s > 0 && e[n[s]].claim_order <= a ? s + 1 : kt(1, s, h=>e[n[h]].claim_order, a)) - 1;
        i[c] = n[f] + 1;
        const _ = f + 1;
        n[_] = c,
        s = Math.max(_, s)
    }
    const l = []
      , r = [];
    let o = e.length - 1;
    for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
        for (l.push(e[c - 1]); o >= c; o--)
            r.push(e[o]);
        o--
    }
    for (; o >= 0; o--)
        r.push(e[o]);
    l.reverse(),
    r.sort((c,a)=>c.claim_order - a.claim_order);
    for (let c = 0, a = 0; c < r.length; c++) {
        for (; a < l.length && r[c].claim_order >= l[a].claim_order; )
            a++;
        const f = a < l.length ? l[a] : null;
        t.insertBefore(r[c], f)
    }
}
function Tt(t, e) {
    t.appendChild(e)
}
function lt(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function At(t) {
    const e = V("style");
    return St(lt(t), e),
    e.sheet
}
function St(t, e) {
    return Tt(t.head || t, e),
    e.sheet
}
function Ct(t, e) {
    if (G) {
        for (Nt(t),
        (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
            t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else
        (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}
function Mt(t, e, n) {
    t.insertBefore(e, n || null)
}
function Dt(t, e, n) {
    G && !n ? Ct(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}
function H(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function re(t, e) {
    for (let n = 0; n < t.length; n += 1)
        t[n] && t[n].d(e)
}
function V(t) {
    return document.createElement(t)
}
function at(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function X(t) {
    return document.createTextNode(t)
}
function oe() {
    return X(" ")
}
function ce() {
    return X("")
}
function le(t, e, n, i) {
    return t.addEventListener(e, n, i),
    ()=>t.removeEventListener(e, n, i)
}
function ae(t) {
    return function(e) {
        return e.preventDefault(),
        t.call(this, e)
    }
}
function ue(t) {
    return function(e) {
        e.target === this && t.call(this, e)
    }
}
function jt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function fe(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e)
        e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set ? t[i] = e[i] : jt(t, i, e[i])
}
function Ht(t) {
    return Array.from(t.childNodes)
}
function ut(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}
function ft(t, e, n, i, s=!1) {
    ut(t);
    const l = (()=>{
        for (let r = t.claim_info.last_index; r < t.length; r++) {
            const o = t[r];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(r, 1) : t[r] = c,
                s || (t.claim_info.last_index = r),
                o
            }
        }
        for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
            const o = t[r];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(r, 1) : t[r] = c,
                s ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = r,
                o
            }
        }
        return i()
    }
    )();
    return l.claim_order = t.claim_info.total_claimed,
    t.claim_info.total_claimed += 1,
    l
}
function _t(t, e, n, i) {
    return ft(t, s=>s.nodeName === e, s=>{
        const l = [];
        for (let r = 0; r < s.attributes.length; r++) {
            const o = s.attributes[r];
            n[o.name] || l.push(o.name)
        }
        l.forEach(r=>s.removeAttribute(r))
    }
    , ()=>i(e))
}
function _e(t, e, n) {
    return _t(t, e, n, V)
}
function de(t, e, n) {
    return _t(t, e, n, at)
}
function Lt(t, e) {
    return ft(t, n=>n.nodeType === 3, n=>{
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length)
                return n.splitText(i.length)
        } else
            n.data = i
    }
    , ()=>X(e), !0)
}
function he(t) {
    return Lt(t, " ")
}
function Z(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e)
            return i
    }
    return t.length
}
function me(t, e) {
    const n = Z(t, "HTML_TAG_START", 0)
      , i = Z(t, "HTML_TAG_END", n);
    if (n === i)
        return new tt(void 0,e);
    ut(t);
    const s = t.splice(n, i - n + 1);
    H(s[0]),
    H(s[s.length - 1]);
    const l = s.slice(1, s.length - 1);
    for (const r of l)
        r.claim_order = t.claim_info.total_claimed,
        t.claim_info.total_claimed += 1;
    return new tt(l,e)
}
function pe(t, e) {
    e = "" + e,
    t.wholeText !== e && (t.data = e)
}
function ye(t, e) {
    t.value = e ?? ""
}
function ge(t, e, n, i) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}
function $e(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}
function dt(t, e, {bubbles: n=!1, cancelable: i=!1}={}) {
    const s = document.createEvent("CustomEvent");
    return s.initCustomEvent(t, n, i, e),
    s
}
function we(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const l = s.textContent.trim();
            l === `HEAD_${t}_END` ? (i -= 1,
            n.push(s)) : l === `HEAD_${t}_START` && (i += 1,
            n.push(s))
        } else
            i > 0 && n.push(s);
    return n
}
class Ot {
    constructor(e=!1) {
        this.is_svg = !1,
        this.is_svg = e,
        this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i=null) {
        this.e || (this.is_svg ? this.e = at(n.nodeName) : this.e = V(n.nodeName),
        this.t = n,
        this.c(e)),
        this.i(i)
    }
    h(e) {
        this.e.innerHTML = e,
        this.n = Array.from(this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1)
            Mt(this.t, this.n[n], e)
    }
    p(e) {
        this.d(),
        this.h(e),
        this.i(this.a)
    }
    d() {
        this.n.forEach(H)
    }
}
class tt extends Ot {
    constructor(e, n=!1) {
        super(n),
        this.e = this.n = null,
        this.l = e
    }
    c(e) {
        this.l ? this.n = this.l : super.c(e)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1)
            Dt(this.t, this.n[n], e)
    }
}
function xe(t, e) {
    return new t(e)
}
const B = new Map;
let z = 0;
function Pt(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function Rt(t, e) {
    const n = {
        stylesheet: At(e),
        rules: {}
    };
    return B.set(t, n),
    n
}
function et(t, e, n, i, s, l, r, o=0) {
    const c = 16.666 / i;
    let a = `{
`;
    for (let y = 0; y <= 1; y += c) {
        const g = e + (n - e) * l(y);
        a += y * 100 + `%{${r(g, 1 - g)}}
`
    }
    const f = a + `100% {${r(n, 1 - n)}}
}`
      , _ = `__svelte_${Pt(f)}_${o}`
      , h = lt(t)
      , {stylesheet: u, rules: d} = B.get(h) || Rt(h, t);
    d[_] || (d[_] = !0,
    u.insertRule(`@keyframes ${_} ${f}`, u.cssRules.length));
    const p = t.style.animation || "";
    return t.style.animation = `${p ? `${p}, ` : ""}${_} ${i}ms linear ${s}ms 1 both`,
    z += 1,
    _
}
function qt(t, e) {
    const n = (t.style.animation || "").split(", ")
      , i = n.filter(e ? l=>l.indexOf(e) < 0 : l=>l.indexOf("__svelte") === -1)
      , s = n.length - i.length;
    s && (t.style.animation = i.join(", "),
    z -= s,
    z || Bt())
}
function Bt() {
    U(()=>{
        z || (B.forEach(t=>{
            const {ownerNode: e} = t.stylesheet;
            e && H(e)
        }
        ),
        B.clear())
    }
    )
}
let L;
function j(t) {
    L = t
}
function C() {
    if (!L)
        throw new Error("Function called outside component initialization");
    return L
}
function be(t) {
    C().$$.on_mount.push(t)
}
function ve(t) {
    C().$$.after_update.push(t)
}
function Ee(t) {
    C().$$.on_destroy.push(t)
}
function ke() {
    const t = C();
    return (e,n,{cancelable: i=!1}={})=>{
        const s = t.$$.callbacks[e];
        if (s) {
            const l = dt(e, n, {
                cancelable: i
            });
            return s.slice().forEach(r=>{
                r.call(t, l)
            }
            ),
            !l.defaultPrevented
        }
        return !0
    }
}
function Ne(t, e) {
    return C().$$.context.set(t, e),
    e
}
function Te(t) {
    return C().$$.context.get(t)
}
function Ae(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach(i=>i.call(this, e))
}
const N = []
  , nt = []
  , R = []
  , J = []
  , ht = Promise.resolve();
let K = !1;
function mt() {
    K || (K = !0,
    ht.then(pt))
}
function Se() {
    return mt(),
    ht
}
function F(t) {
    R.push(t)
}
function Ce(t) {
    J.push(t)
}
const W = new Set;
let k = 0;
function pt() {
    if (k !== 0)
        return;
    const t = L;
    do {
        try {
            for (; k < N.length; ) {
                const e = N[k];
                k++,
                j(e),
                zt(e.$$)
            }
        } catch (e) {
            throw N.length = 0,
            k = 0,
            e
        }
        for (j(null),
        N.length = 0,
        k = 0; nt.length; )
            nt.pop()();
        for (let e = 0; e < R.length; e += 1) {
            const n = R[e];
            W.has(n) || (W.add(n),
            n())
        }
        R.length = 0
    } while (N.length);
    for (; J.length; )
        J.pop()();
    K = !1,
    W.clear(),
    j(t)
}
function zt(t) {
    if (t.fragment !== null) {
        t.update(),
        S(t.before_update);
        const e = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(F)
    }
}
let D;
function Ft() {
    return D || (D = Promise.resolve(),
    D.then(()=>{
        D = null
    }
    )),
    D
}
function I(t, e, n) {
    t.dispatchEvent(dt(`${e ? "intro" : "outro"}${n}`))
}
const q = new Set;
let x;
function Me() {
    x = {
        r: 0,
        c: [],
        p: x
    }
}
function De() {
    x.r || S(x.c),
    x = x.p
}
function yt(t, e) {
    t && t.i && (q.delete(t),
    t.i(e))
}
function Gt(t, e, n, i) {
    if (t && t.o) {
        if (q.has(t))
            return;
        q.add(t),
        x.c.push(()=>{
            q.delete(t),
            i && (n && t.d(1),
            i())
        }
        ),
        t.o(e)
    } else
        i && i()
}
const Wt = {
    duration: 0
};
function je(t, e, n, i) {
    const s = {
        direction: "both"
    };
    let l = e(t, n, s)
      , r = i ? 0 : 1
      , o = null
      , c = null
      , a = null;
    function f() {
        a && qt(t, a)
    }
    function _(u, d) {
        const p = u.b - r;
        return d *= Math.abs(p),
        {
            a: r,
            b: u.b,
            d: p,
            duration: d,
            start: u.start,
            end: u.start + d,
            group: u.group
        }
    }
    function h(u) {
        const {delay: d=0, duration: p=300, easing: y=gt, tick: g=A, css: b} = l || Wt
          , E = {
            start: xt() + d,
            b: u
        };
        u || (E.group = x,
        x.r += 1),
        o || c ? c = E : (b && (f(),
        a = et(t, r, u, p, d, y, b)),
        u && g(0, 1),
        o = _(E, p),
        F(()=>I(t, u, "start")),
        bt(v=>{
            if (c && v > c.start && (o = _(c, p),
            c = null,
            I(t, o.b, "start"),
            b && (f(),
            a = et(t, r, o.b, o.duration, 0, y, l.css))),
            o) {
                if (v >= o.end)
                    g(r = o.b, 1 - r),
                    I(t, o.b, "end"),
                    c || (o.b ? f() : --o.group.r || S(o.group.c)),
                    o = null;
                else if (v >= o.start) {
                    const M = v - o.start;
                    r = o.a + o.d * y(M / o.duration),
                    g(r, 1 - r)
                }
            }
            return !!(o || c)
        }
        ))
    }
    return {
        run(u) {
            Q(l) ? Ft().then(()=>{
                l = l(s),
                h(u)
            }
            ) : h(u)
        },
        end() {
            f(),
            o = c = null
        }
    }
}
const He = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Le(t, e) {
    Gt(t, 1, 1, ()=>{
        e.delete(t.key)
    }
    )
}
function Oe(t, e, n, i, s, l, r, o, c, a, f, _) {
    let h = t.length
      , u = l.length
      , d = h;
    const p = {};
    for (; d--; )
        p[t[d].key] = d;
    const y = []
      , g = new Map
      , b = new Map;
    for (d = u; d--; ) {
        const m = _(s, l, d)
          , $ = n(m);
        let w = r.get($);
        w ? i && w.p(m, e) : (w = a($, m),
        w.c()),
        g.set($, y[d] = w),
        $ in p && b.set($, Math.abs(d - p[$]))
    }
    const E = new Set
      , v = new Set;
    function M(m) {
        yt(m, 1),
        m.m(o, f),
        r.set(m.key, m),
        f = m.first,
        u--
    }
    for (; h && u; ) {
        const m = y[u - 1]
          , $ = t[h - 1]
          , w = m.key
          , O = $.key;
        m === $ ? (f = m.first,
        h--,
        u--) : g.has(O) ? !r.has(w) || E.has(w) ? M(m) : v.has(O) ? h-- : b.get(w) > b.get(O) ? (v.add(w),
        M(m)) : (E.add(O),
        h--) : (c($, r),
        h--)
    }
    for (; h--; ) {
        const m = t[h];
        g.has(m.key) || c(m, r)
    }
    for (; u; )
        M(y[u - 1]);
    return y
}
function Pe(t, e) {
    const n = {}
      , i = {}
      , s = {
        $$scope: 1
    };
    let l = t.length;
    for (; l--; ) {
        const r = t[l]
          , o = e[l];
        if (o) {
            for (const c in r)
                c in o || (i[c] = 1);
            for (const c in o)
                s[c] || (n[c] = o[c],
                s[c] = 1);
            t[l] = o
        } else
            for (const c in r)
                s[c] = 1
    }
    for (const r in i)
        r in n || (n[r] = void 0);
    return n
}
function Re(t, e, n) {
    const i = t.$$.props[e];
    i !== void 0 && (t.$$.bound[i] = n,
    n(t.$$.ctx[i]))
}
function qe(t) {
    t && t.c()
}
function Be(t, e) {
    t && t.l(e)
}
function It(t, e, n, i) {
    const {fragment: s, after_update: l} = t.$$;
    s && s.m(e, n),
    i || F(()=>{
        const r = t.$$.on_mount.map(it).filter(Q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : S(r),
        t.$$.on_mount = []
    }
    ),
    l.forEach(F)
}
function Jt(t, e) {
    const n = t.$$;
    n.fragment !== null && (S(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function Kt(t, e) {
    t.$$.dirty[0] === -1 && (N.push(t),
    mt(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function ze(t, e, n, i, s, l, r, o=[-1]) {
    const c = L;
    j(t);
    const a = t.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: A,
        not_equal: s,
        bound: Y(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: Y(),
        dirty: o,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    r && r(a.root);
    let f = !1;
    if (a.ctx = n ? n(t, e.props || {}, (_,h,...u)=>{
        const d = u.length ? u[0] : h;
        return a.ctx && s(a.ctx[_], a.ctx[_] = d) && (!a.skip_bound && a.bound[_] && a.bound[_](d),
        f && Kt(t, _)),
        h
    }
    ) : [],
    a.update(),
    f = !0,
    S(a.before_update),
    a.fragment = i ? i(a.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            vt();
            const _ = Ht(e.target);
            a.fragment && a.fragment.l(_),
            _.forEach(H)
        } else
            a.fragment && a.fragment.c();
        e.intro && yt(t.$$.fragment),
        It(t, e.target, e.anchor, e.customElement),
        Et(),
        pt()
    }
    j(c)
}
class Fe {
    $destroy() {
        Jt(this, 1),
        this.$destroy = A
    }
    $on(e, n) {
        if (!Q(n))
            return A;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n),
        ()=>{
            const s = i.indexOf(n);
            s !== -1 && i.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !wt(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
export {se as $, It as A, Jt as B, Yt as C, we as D, Ct as E, te as F, ee as G, Zt as H, A as I, Xt as J, gt as K, $t as L, fe as M, $e as N, le as O, Pe as P, ie as Q, ne as R, Fe as S, Ae as T, at as U, de as V, F as W, je as X, ke as Y, Ee as Z, He as _, oe as a, Q as a0, S as a1, Ne as a2, ue as a3, re as a4, Te as a5, ae as a6, Ut as a7, Oe as a8, Le as a9, Re as aa, Ce as ab, ye as ac, tt as ad, me as ae, Vt as af, Dt as b, he as c, Gt as d, ce as e, De as f, yt as g, H as h, ze as i, ve as j, V as k, _e as l, Ht as m, jt as n, be as o, ge as p, X as q, Lt as r, Qt as s, Se as t, pe as u, Me as v, nt as w, xe as x, qe as y, Be as z};
