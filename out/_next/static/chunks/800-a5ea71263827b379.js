'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [800],
    {
        42: (e, t, r) => {
            r.d(t, { W: () => n })
            let n = {}
        },
        64: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('youtube', [
                [
                    'path',
                    {
                        d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
                        key: '1q2vi4',
                    },
                ],
                ['path', { d: 'm10 15 5-3-5-3z', key: '1jp15x' }],
            ])
        },
        178: (e, t, r) => {
            r.d(t, { p: () => n })
            function n(e) {
                let t
                return () => (void 0 === t && (t = e()), t)
            }
        },
        222: (e, t, r) => {
            r.d(t, { c: () => i })
            var n = r(2115)
            function i(e) {
                let t = n.useRef(e)
                return (
                    n.useEffect(() => {
                        t.current = e
                    }),
                    n.useMemo(
                        () =>
                            (...e) =>
                                t.current?.(...e),
                        []
                    )
                )
            }
        },
        296: (e, t, r) => {
            r.d(t, { L: () => n })
            let n = (0, r(2115).createContext)({})
        },
        368: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('chevron-left', [
                ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }],
            ])
        },
        508: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('user', [
                [
                    'path',
                    {
                        d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
                        key: '975kel',
                    },
                ],
                ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
            ])
        },
        627: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('tablet', [
                [
                    'rect',
                    {
                        width: '16',
                        height: '20',
                        x: '4',
                        y: '2',
                        rx: '2',
                        ry: '2',
                        key: '76otgf',
                    },
                ],
                [
                    'line',
                    {
                        x1: '12',
                        x2: '12.01',
                        y1: '18',
                        y2: '18',
                        key: '1dp563',
                    },
                ],
            ])
        },
        737: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'AmpStateContext', {
                    enumerable: !0,
                    get: function () {
                        return n
                    },
                })
            let n = r(8140)._(r(2115)).default.createContext({})
        },
        821: (e, t) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        })
                })(t, {
                    VALID_LOADERS: function () {
                        return r
                    },
                    imageConfigDefault: function () {
                        return n
                    },
                })
            let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
                n = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: '/_next/image',
                    loader: 'default',
                    loaderFile: '',
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ['image/webp'],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy:
                        "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: 'attachment',
                    localPatterns: void 0,
                    remotePatterns: [],
                    qualities: void 0,
                    unoptimized: !1,
                }
        },
        861: (e, t) => {
            function r(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: r = !1,
                    hasQuery: n = !1,
                } = void 0 === e ? {} : e
                return t || (r && n)
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isInAmpMode', {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                })
        },
        1075: (e, t, r) => {
            r.d(t, { P: () => iD })
            var n = r(2115)
            let i = [
                    'transformPerspective',
                    'x',
                    'y',
                    'z',
                    'translateX',
                    'translateY',
                    'translateZ',
                    'scale',
                    'scaleX',
                    'scaleY',
                    'rotate',
                    'rotateX',
                    'rotateY',
                    'rotateZ',
                    'skew',
                    'skewX',
                    'skewY',
                ],
                o = new Set(i),
                s = (e) => (180 * e) / Math.PI,
                a = (e) => u(s(Math.atan2(e[1], e[0]))),
                l = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
                    rotate: a,
                    rotateZ: a,
                    skewX: (e) => s(Math.atan(e[1])),
                    skewY: (e) => s(Math.atan(e[2])),
                    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
                },
                u = (e) => ((e %= 360) < 0 && (e += 360), e),
                c = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
                d = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
                h = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: c,
                    scaleY: d,
                    scale: (e) => (c(e) + d(e)) / 2,
                    rotateX: (e) => u(s(Math.atan2(e[6], e[5]))),
                    rotateY: (e) => u(s(Math.atan2(-e[2], e[0]))),
                    rotateZ: a,
                    rotate: a,
                    skewX: (e) => s(Math.atan(e[4])),
                    skewY: (e) => s(Math.atan(e[1])),
                    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
                }
            function p(e) {
                return +!!e.includes('scale')
            }
            function f(e, t) {
                let r, n
                if (!e || 'none' === e) return p(t)
                let i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
                if (i) (r = h), (n = i)
                else {
                    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
                    ;(r = l), (n = t)
                }
                if (!n) return p(t)
                let o = r[t],
                    s = n[1].split(',').map(m)
                return 'function' == typeof o ? o(s) : s[o]
            }
            function m(e) {
                return parseFloat(e.trim())
            }
            var g = r(1391)
            function v({ top: e, left: t, right: r, bottom: n }) {
                return { x: { min: t, max: r }, y: { min: e, max: n } }
            }
            var y = r(9361)
            function b(e) {
                return void 0 === e || 1 === e
            }
            function x({ scale: e, scaleX: t, scaleY: r }) {
                return !b(e) || !b(t) || !b(r)
            }
            function w(e) {
                return (
                    x(e) ||
                    k(e) ||
                    e.z ||
                    e.rotate ||
                    e.rotateX ||
                    e.rotateY ||
                    e.skewX ||
                    e.skewY
                )
            }
            function k(e) {
                var t, r
                return ((t = e.x) && '0%' !== t) || ((r = e.y) && '0%' !== r)
            }
            function E(e, t, r, n, i) {
                return (
                    void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t
                )
            }
            function P(e, t = 0, r = 1, n, i) {
                ;(e.min = E(e.min, t, r, n, i)), (e.max = E(e.max, t, r, n, i))
            }
            function S(e, { x: t, y: r }) {
                P(e.x, t.translate, t.scale, t.originPoint),
                    P(e.y, r.translate, r.scale, r.originPoint)
            }
            function A(e, t) {
                ;(e.min = e.min + t), (e.max = e.max + t)
            }
            function T(e, t, r, n, i = 0.5) {
                let o = (0, y.k)(e.min, e.max, i)
                P(e, t, r, o, n)
            }
            function C(e, t) {
                T(e.x, t.x, t.scaleX, t.scale, t.originX),
                    T(e.y, t.y, t.scaleY, t.scale, t.originY)
            }
            function M(e, t) {
                return v(
                    (function (e, t) {
                        if (!t) return e
                        let r = t({ x: e.left, y: e.top }),
                            n = t({ x: e.right, y: e.bottom })
                        return { top: r.y, left: r.x, bottom: n.y, right: n.x }
                    })(e.getBoundingClientRect(), t)
                )
            }
            let j = new Set([
                'width',
                'height',
                'top',
                'left',
                'right',
                'bottom',
                ...i,
            ])
            var R = r(7822),
                O = r(2419)
            let D = (e) => (t) => t.test(e),
                _ = [
                    R.ai,
                    O.px,
                    O.KN,
                    O.uj,
                    O.vw,
                    O.vh,
                    { test: (e) => 'auto' === e, parse: (e) => e },
                ],
                V = (e) => _.find(D(e))
            var L = r(8041)
            let N = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
                I = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                F = (e) => e === R.ai || e === O.px,
                B = new Set(['x', 'y', 'z']),
                z = i.filter((e) => !B.has(e)),
                W = {
                    width: (
                        { x: e },
                        { paddingLeft: t = '0', paddingRight: r = '0' }
                    ) => e.max - e.min - parseFloat(t) - parseFloat(r),
                    height: (
                        { y: e },
                        { paddingTop: t = '0', paddingBottom: r = '0' }
                    ) => e.max - e.min - parseFloat(t) - parseFloat(r),
                    top: (e, { top: t }) => parseFloat(t),
                    left: (e, { left: t }) => parseFloat(t),
                    bottom: ({ y: e }, { top: t }) =>
                        parseFloat(t) + (e.max - e.min),
                    right: ({ x: e }, { left: t }) =>
                        parseFloat(t) + (e.max - e.min),
                    x: (e, { transform: t }) => f(t, 'x'),
                    y: (e, { transform: t }) => f(t, 'y'),
                }
            ;(W.translateX = W.x), (W.translateY = W.y)
            var U = r(3934)
            let G = new Set(),
                $ = !1,
                K = !1,
                q = !1
            function H() {
                if (K) {
                    let e = Array.from(G).filter((e) => e.needsMeasurement),
                        t = new Set(e.map((e) => e.element)),
                        r = new Map()
                    t.forEach((e) => {
                        let t = (function (e) {
                            let t = []
                            return (
                                z.forEach((r) => {
                                    let n = e.getValue(r)
                                    void 0 !== n &&
                                        (t.push([r, n.get()]),
                                        n.set(+!!r.startsWith('scale')))
                                }),
                                t
                            )
                        })(e)
                        t.length && (r.set(e, t), e.render())
                    }),
                        e.forEach((e) => e.measureInitialState()),
                        t.forEach((e) => {
                            e.render()
                            let t = r.get(e)
                            t &&
                                t.forEach(([t, r]) => {
                                    e.getValue(t)?.set(r)
                                })
                        }),
                        e.forEach((e) => e.measureEndState()),
                        e.forEach((e) => {
                            void 0 !== e.suspendedScrollY &&
                                window.scrollTo(0, e.suspendedScrollY)
                        })
                }
                ;(K = !1), ($ = !1), G.forEach((e) => e.complete(q)), G.clear()
            }
            function X() {
                G.forEach((e) => {
                    e.readKeyframes(), e.needsMeasurement && (K = !0)
                })
            }
            class Y {
                constructor(e, t, r, n, i, o = !1) {
                    ;(this.state = 'pending'),
                        (this.isAsync = !1),
                        (this.needsMeasurement = !1),
                        (this.unresolvedKeyframes = [...e]),
                        (this.onComplete = t),
                        (this.name = r),
                        (this.motionValue = n),
                        (this.element = i),
                        (this.isAsync = o)
                }
                scheduleResolve() {
                    ;(this.state = 'scheduled'),
                        this.isAsync
                            ? (G.add(this),
                              $ ||
                                  (($ = !0),
                                  U.Gt.read(X),
                                  U.Gt.resolveKeyframes(H)))
                            : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t,
                        element: r,
                        motionValue: n,
                    } = this
                    if (null === e[0]) {
                        let i = n?.get(),
                            o = e[e.length - 1]
                        if (void 0 !== i) e[0] = i
                        else if (r && t) {
                            let n = r.readValue(t, o)
                            null != n && (e[0] = n)
                        }
                        void 0 === e[0] && (e[0] = o),
                            n && void 0 === i && n.set(e[0])
                    }
                    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete(e = !1) {
                    ;(this.state = 'complete'),
                        this.onComplete(
                            this.unresolvedKeyframes,
                            this.finalKeyframe,
                            e
                        ),
                        G.delete(this)
                }
                cancel() {
                    'scheduled' === this.state &&
                        (G.delete(this), (this.state = 'pending'))
                }
                resume() {
                    'pending' === this.state && this.scheduleResolve()
                }
            }
            let Q = (e) => /^0[^.\s]+$/u.test(e)
            var Z = r(4888),
                J = r(4531)
            let ee = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
            function et(e) {
                let [t, r] = e.slice(0, -1).split('(')
                if ('drop-shadow' === t) return e
                let [n] = r.match(J.S) || []
                if (!n) return e
                let i = r.replace(n, ''),
                    o = +!!ee.has(t)
                return n !== r && (o *= 100), t + '(' + o + i + ')'
            }
            let er = /\b([a-z-]*)\(.*?\)/gu,
                en = {
                    ...Z.f,
                    getAnimatableNone: (e) => {
                        let t = e.match(er)
                        return t ? t.map(et).join(' ') : e
                    },
                }
            var ei = r(5389)
            let eo = { ...R.ai, transform: Math.round },
                es = {
                    rotate: O.uj,
                    rotateX: O.uj,
                    rotateY: O.uj,
                    rotateZ: O.uj,
                    scale: R.hs,
                    scaleX: R.hs,
                    scaleY: R.hs,
                    scaleZ: R.hs,
                    skew: O.uj,
                    skewX: O.uj,
                    skewY: O.uj,
                    distance: O.px,
                    translateX: O.px,
                    translateY: O.px,
                    translateZ: O.px,
                    x: O.px,
                    y: O.px,
                    z: O.px,
                    perspective: O.px,
                    transformPerspective: O.px,
                    opacity: R.X4,
                    originX: O.gQ,
                    originY: O.gQ,
                    originZ: O.px,
                },
                ea = {
                    borderWidth: O.px,
                    borderTopWidth: O.px,
                    borderRightWidth: O.px,
                    borderBottomWidth: O.px,
                    borderLeftWidth: O.px,
                    borderRadius: O.px,
                    radius: O.px,
                    borderTopLeftRadius: O.px,
                    borderTopRightRadius: O.px,
                    borderBottomRightRadius: O.px,
                    borderBottomLeftRadius: O.px,
                    width: O.px,
                    maxWidth: O.px,
                    height: O.px,
                    maxHeight: O.px,
                    top: O.px,
                    right: O.px,
                    bottom: O.px,
                    left: O.px,
                    padding: O.px,
                    paddingTop: O.px,
                    paddingRight: O.px,
                    paddingBottom: O.px,
                    paddingLeft: O.px,
                    margin: O.px,
                    marginTop: O.px,
                    marginRight: O.px,
                    marginBottom: O.px,
                    marginLeft: O.px,
                    backgroundPositionX: O.px,
                    backgroundPositionY: O.px,
                    ...es,
                    zIndex: eo,
                    fillOpacity: R.X4,
                    strokeOpacity: R.X4,
                    numOctaves: eo,
                },
                el = {
                    ...ea,
                    color: ei.y,
                    backgroundColor: ei.y,
                    outlineColor: ei.y,
                    fill: ei.y,
                    stroke: ei.y,
                    borderColor: ei.y,
                    borderTopColor: ei.y,
                    borderRightColor: ei.y,
                    borderBottomColor: ei.y,
                    borderLeftColor: ei.y,
                    filter: en,
                    WebkitFilter: en,
                },
                eu = (e) => el[e]
            function ec(e, t) {
                let r = eu(e)
                return (
                    r !== en && (r = Z.f),
                    r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
                )
            }
            let ed = new Set(['auto', 'none', '0'])
            class eh extends Y {
                constructor(e, t, r, n, i) {
                    super(e, t, r, n, i, !0)
                }
                readKeyframes() {
                    let { unresolvedKeyframes: e, element: t, name: r } = this
                    if (!t || !t.current) return
                    super.readKeyframes()
                    for (let r = 0; r < e.length; r++) {
                        let n = e[r]
                        if (
                            'string' == typeof n &&
                            ((n = n.trim()), (0, g.p)(n))
                        ) {
                            let i = (function e(t, r, n = 1) {
                                ;(0, L.V)(
                                    n <= 4,
                                    `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                                    'max-css-var-depth'
                                )
                                let [i, o] = (function (e) {
                                    let t = I.exec(e)
                                    if (!t) return [,]
                                    let [, r, n, i] = t
                                    return [`--${r ?? n}`, i]
                                })(t)
                                if (!i) return
                                let s = window
                                    .getComputedStyle(r)
                                    .getPropertyValue(i)
                                if (s) {
                                    let e = s.trim()
                                    return N(e) ? parseFloat(e) : e
                                }
                                return (0, g.p)(o) ? e(o, r, n + 1) : o
                            })(n, t.current)
                            void 0 !== i && (e[r] = i),
                                r === e.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (
                        (this.resolveNoneKeyframes(),
                        !j.has(r) || 2 !== e.length)
                    )
                        return
                    let [n, i] = e,
                        o = V(n),
                        s = V(i)
                    if (o !== s)
                        if (F(o) && F(s))
                            for (let t = 0; t < e.length; t++) {
                                let r = e[t]
                                'string' == typeof r && (e[t] = parseFloat(r))
                            }
                        else W[r] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let { unresolvedKeyframes: e, name: t } = this,
                        r = []
                    for (let t = 0; t < e.length; t++) {
                        var n
                        ;(null === e[t] ||
                            ('number' == typeof (n = e[t])
                                ? 0 === n
                                : null === n ||
                                  'none' === n ||
                                  '0' === n ||
                                  Q(n))) &&
                            r.push(t)
                    }
                    r.length &&
                        (function (e, t, r) {
                            let n,
                                i = 0
                            for (; i < e.length && !n; ) {
                                let t = e[i]
                                'string' == typeof t &&
                                    !ed.has(t) &&
                                    (0, Z.V)(t).values.length &&
                                    (n = e[i]),
                                    i++
                            }
                            if (n && r) for (let i of t) e[i] = ec(r, n)
                        })(e, r, t)
                }
                measureInitialState() {
                    let { element: e, unresolvedKeyframes: t, name: r } = this
                    if (!e || !e.current) return
                    'height' === r &&
                        (this.suspendedScrollY = window.pageYOffset),
                        (this.measuredOrigin = W[r](
                            e.measureViewportBox(),
                            window.getComputedStyle(e.current)
                        )),
                        (t[0] = this.measuredOrigin)
                    let n = t[t.length - 1]
                    void 0 !== n && e.getValue(r, n).jump(n, !1)
                }
                measureEndState() {
                    let { element: e, name: t, unresolvedKeyframes: r } = this
                    if (!e || !e.current) return
                    let n = e.getValue(t)
                    n && n.jump(this.measuredOrigin, !1)
                    let i = r.length - 1,
                        o = r[i]
                    ;(r[i] = W[t](
                        e.measureViewportBox(),
                        window.getComputedStyle(e.current)
                    )),
                        null !== o &&
                            void 0 === this.finalKeyframe &&
                            (this.finalKeyframe = o),
                        this.removedTransforms?.length &&
                            this.removedTransforms.forEach(([t, r]) => {
                                e.getValue(t).set(r)
                            }),
                        this.resolveNoneKeyframes()
                }
            }
            let ep = (e) => !!(e && e.getVelocity)
            var ef = r(7424),
                em = r(2039)
            let eg = [..._, ei.y, Z.f],
                { schedule: ev } = (0, r(4300).I)(queueMicrotask, !1)
            var ey = r(8453)
            let eb = {
                    animation: [
                        'animate',
                        'variants',
                        'whileHover',
                        'whileTap',
                        'exit',
                        'whileInView',
                        'whileFocus',
                        'whileDrag',
                    ],
                    exit: ['exit'],
                    drag: ['drag', 'dragControls'],
                    focus: ['whileFocus'],
                    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
                    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
                    pan: [
                        'onPan',
                        'onPanStart',
                        'onPanSessionStart',
                        'onPanEnd',
                    ],
                    inView: [
                        'whileInView',
                        'onViewportEnter',
                        'onViewportLeave',
                    ],
                    layout: ['layout', 'layoutId'],
                },
                ex = {}
            for (let e in eb)
                ex[e] = { isEnabled: (t) => eb[e].some((e) => !!t[e]) }
            let ew = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0,
                }),
                ek = () => ({ x: ew(), y: ew() }),
                eE = () => ({ min: 0, max: 0 }),
                eP = () => ({ x: eE(), y: eE() })
            var eS = r(3577)
            let eA = { current: null },
                eT = { current: !1 },
                eC = new WeakMap()
            function eM(e) {
                return (
                    null !== e &&
                    'object' == typeof e &&
                    'function' == typeof e.start
                )
            }
            function ej(e) {
                return 'string' == typeof e || Array.isArray(e)
            }
            let eR = [
                    'animate',
                    'whileInView',
                    'whileFocus',
                    'whileHover',
                    'whileTap',
                    'whileDrag',
                    'exit',
                ],
                eO = ['initial', ...eR]
            function eD(e) {
                return eM(e.animate) || eO.some((t) => ej(e[t]))
            }
            function e_(e) {
                return !!(eD(e) || e.variants)
            }
            function eV(e) {
                let t = [{}, {}]
                return (
                    e?.values.forEach((e, r) => {
                        ;(t[0][r] = e.get()), (t[1][r] = e.getVelocity())
                    }),
                    t
                )
            }
            function eL(e, t, r, n) {
                if ('function' == typeof t) {
                    let [i, o] = eV(n)
                    t = t(void 0 !== r ? r : e.custom, i, o)
                }
                if (
                    ('string' == typeof t && (t = e.variants && e.variants[t]),
                    'function' == typeof t)
                ) {
                    let [i, o] = eV(n)
                    t = t(void 0 !== r ? r : e.custom, i, o)
                }
                return t
            }
            let eN = [
                'AnimationStart',
                'AnimationComplete',
                'Update',
                'BeforeLayoutMeasure',
                'LayoutMeasure',
                'LayoutAnimationStart',
                'LayoutAnimationComplete',
            ]
            class eI {
                scrapeMotionValuesFromProps(e, t, r) {
                    return {}
                }
                constructor(
                    {
                        parent: e,
                        props: t,
                        presenceContext: r,
                        reducedMotionConfig: n,
                        blockInitialAnimation: i,
                        visualState: o,
                    },
                    s = {}
                ) {
                    ;(this.current = null),
                        (this.children = new Set()),
                        (this.isVariantNode = !1),
                        (this.isControllingVariants = !1),
                        (this.shouldReduceMotion = null),
                        (this.values = new Map()),
                        (this.KeyframeResolver = Y),
                        (this.features = {}),
                        (this.valueSubscriptions = new Map()),
                        (this.prevMotionValues = {}),
                        (this.events = {}),
                        (this.propEventSubscriptions = {}),
                        (this.notifyUpdate = () =>
                            this.notify('Update', this.latestValues)),
                        (this.render = () => {
                            this.current &&
                                (this.triggerBuild(),
                                this.renderInstance(
                                    this.current,
                                    this.renderState,
                                    this.props.style,
                                    this.projection
                                ))
                        }),
                        (this.renderScheduledAt = 0),
                        (this.scheduleRender = () => {
                            let e = ef.k.now()
                            this.renderScheduledAt < e &&
                                ((this.renderScheduledAt = e),
                                U.Gt.render(this.render, !1, !0))
                        })
                    let { latestValues: a, renderState: l } = o
                    ;(this.latestValues = a),
                        (this.baseTarget = { ...a }),
                        (this.initialValues = t.initial ? { ...a } : {}),
                        (this.renderState = l),
                        (this.parent = e),
                        (this.props = t),
                        (this.presenceContext = r),
                        (this.depth = e ? e.depth + 1 : 0),
                        (this.reducedMotionConfig = n),
                        (this.options = s),
                        (this.blockInitialAnimation = !!i),
                        (this.isControllingVariants = eD(t)),
                        (this.isVariantNode = e_(t)),
                        this.isVariantNode &&
                            (this.variantChildren = new Set()),
                        (this.manuallyAnimateOnMount = !!(e && e.current))
                    let { willChange: u, ...c } =
                        this.scrapeMotionValuesFromProps(t, {}, this)
                    for (let e in c) {
                        let t = c[e]
                        void 0 !== a[e] && ep(t) && t.set(a[e])
                    }
                }
                mount(e) {
                    ;(this.current = e),
                        eC.set(e, this),
                        this.projection &&
                            !this.projection.instance &&
                            this.projection.mount(e),
                        this.parent &&
                            this.isVariantNode &&
                            !this.isControllingVariants &&
                            (this.removeFromVariantTree =
                                this.parent.addVariantChild(this)),
                        this.values.forEach((e, t) =>
                            this.bindToMotionValue(t, e)
                        ),
                        eT.current ||
                            (function () {
                                if (((eT.current = !0), eS.B))
                                    if (window.matchMedia) {
                                        let e = window.matchMedia(
                                                '(prefers-reduced-motion)'
                                            ),
                                            t = () => (eA.current = e.matches)
                                        e.addEventListener('change', t), t()
                                    } else eA.current = !1
                            })(),
                        (this.shouldReduceMotion =
                            'never' !== this.reducedMotionConfig &&
                            ('always' === this.reducedMotionConfig ||
                                eA.current)),
                        this.parent?.addChild(this),
                        this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in (this.projection && this.projection.unmount(),
                    (0, U.WG)(this.notifyUpdate),
                    (0, U.WG)(this.render),
                    this.valueSubscriptions.forEach((e) => e()),
                    this.valueSubscriptions.clear(),
                    this.removeFromVariantTree && this.removeFromVariantTree(),
                    this.parent?.removeChild(this),
                    this.events))
                        this.events[e].clear()
                    for (let e in this.features) {
                        let t = this.features[e]
                        t && (t.unmount(), (t.isMounted = !1))
                    }
                    this.current = null
                }
                addChild(e) {
                    this.children.add(e),
                        this.enteringChildren ??
                            (this.enteringChildren = new Set()),
                        this.enteringChildren.add(e)
                }
                removeChild(e) {
                    this.children.delete(e),
                        this.enteringChildren && this.enteringChildren.delete(e)
                }
                bindToMotionValue(e, t) {
                    let r
                    this.valueSubscriptions.has(e) &&
                        this.valueSubscriptions.get(e)()
                    let n = o.has(e)
                    n && this.onBindTransform && this.onBindTransform()
                    let i = t.on('change', (t) => {
                        ;(this.latestValues[e] = t),
                            this.props.onUpdate &&
                                U.Gt.preRender(this.notifyUpdate),
                            n &&
                                this.projection &&
                                (this.projection.isTransformDirty = !0),
                            this.scheduleRender()
                    })
                    window.MotionCheckAppearSync &&
                        (r = window.MotionCheckAppearSync(this, e, t)),
                        this.valueSubscriptions.set(e, () => {
                            i(), r && r(), t.owner && t.stop()
                        })
                }
                sortNodePosition(e) {
                    return this.current &&
                        this.sortInstanceNodePosition &&
                        this.type === e.type
                        ? this.sortInstanceNodePosition(this.current, e.current)
                        : 0
                }
                updateFeatures() {
                    let e = 'animation'
                    for (e in ex) {
                        let t = ex[e]
                        if (!t) continue
                        let { isEnabled: r, Feature: n } = t
                        if (
                            (!this.features[e] &&
                                n &&
                                r(this.props) &&
                                (this.features[e] = new n(this)),
                            this.features[e])
                        ) {
                            let t = this.features[e]
                            t.isMounted
                                ? t.update()
                                : (t.mount(), (t.isMounted = !0))
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current
                        ? this.measureInstanceViewportBox(
                              this.current,
                              this.props
                          )
                        : eP()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                update(e, t) {
                    ;(e.transformTemplate || this.props.transformTemplate) &&
                        this.scheduleRender(),
                        (this.prevProps = this.props),
                        (this.props = e),
                        (this.prevPresenceContext = this.presenceContext),
                        (this.presenceContext = t)
                    for (let t = 0; t < eN.length; t++) {
                        let r = eN[t]
                        this.propEventSubscriptions[r] &&
                            (this.propEventSubscriptions[r](),
                            delete this.propEventSubscriptions[r])
                        let n = e['on' + r]
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    ;(this.prevMotionValues = (function (e, t, r) {
                        for (let n in t) {
                            let i = t[n],
                                o = r[n]
                            if (ep(i)) e.addValue(n, i)
                            else if (ep(o))
                                e.addValue(n, (0, em.OQ)(i, { owner: e }))
                            else if (o !== i)
                                if (e.hasValue(n)) {
                                    let t = e.getValue(n)
                                    !0 === t.liveStyle
                                        ? t.jump(i)
                                        : t.hasAnimated || t.set(i)
                                } else {
                                    let t = e.getStaticValue(n)
                                    e.addValue(
                                        n,
                                        (0, em.OQ)(void 0 !== t ? t : i, {
                                            owner: e,
                                        })
                                    )
                                }
                        }
                        for (let n in r) void 0 === t[n] && e.removeValue(n)
                        return t
                    })(
                        this,
                        this.scrapeMotionValuesFromProps(
                            e,
                            this.prevProps,
                            this
                        ),
                        this.prevMotionValues
                    )),
                        this.handleChildMotionValue &&
                            this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode
                        ? this
                        : this.parent
                        ? this.parent.getClosestVariantNode()
                        : void 0
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode()
                    if (t)
                        return (
                            t.variantChildren && t.variantChildren.add(e),
                            () => t.variantChildren.delete(e)
                        )
                }
                addValue(e, t) {
                    let r = this.values.get(e)
                    t !== r &&
                        (r && this.removeValue(e),
                        this.bindToMotionValue(e, t),
                        this.values.set(e, t),
                        (this.latestValues[e] = t.get()))
                }
                removeValue(e) {
                    this.values.delete(e)
                    let t = this.valueSubscriptions.get(e)
                    t && (t(), this.valueSubscriptions.delete(e)),
                        delete this.latestValues[e],
                        this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e])
                        return this.props.values[e]
                    let r = this.values.get(e)
                    return (
                        void 0 === r &&
                            void 0 !== t &&
                            ((r = (0, em.OQ)(null === t ? void 0 : t, {
                                owner: this,
                            })),
                            this.addValue(e, r)),
                        r
                    )
                }
                readValue(e, t) {
                    let r =
                        void 0 === this.latestValues[e] && this.current
                            ? this.getBaseTargetFromProps(this.props, e) ??
                              this.readValueFromInstance(
                                  this.current,
                                  e,
                                  this.options
                              )
                            : this.latestValues[e]
                    if (null != r) {
                        if ('string' == typeof r && (N(r) || Q(r)))
                            r = parseFloat(r)
                        else {
                            let n
                            ;(n = r),
                                !eg.find(D(n)) && Z.f.test(t) && (r = ec(e, t))
                        }
                        this.setBaseTarget(e, ep(r) ? r.get() : r)
                    }
                    return ep(r) ? r.get() : r
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    let t,
                        { initial: r } = this.props
                    if ('string' == typeof r || 'object' == typeof r) {
                        let n = eL(this.props, r, this.presenceContext?.custom)
                        n && (t = n[e])
                    }
                    if (r && void 0 !== t) return t
                    let n = this.getBaseTargetFromProps(this.props, e)
                    return void 0 === n || ep(n)
                        ? void 0 !== this.initialValues[e] && void 0 === t
                            ? void 0
                            : this.baseTarget[e]
                        : n
                }
                on(e, t) {
                    return (
                        this.events[e] || (this.events[e] = new ey.v()),
                        this.events[e].add(t)
                    )
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
                scheduleRenderMicrotask() {
                    ev.render(this.render)
                }
            }
            class eF extends eI {
                constructor() {
                    super(...arguments), (this.KeyframeResolver = eh)
                }
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, { vars: t, style: r }) {
                    delete t[e], delete r[e]
                }
                handleChildMotionValue() {
                    this.childSubscription &&
                        (this.childSubscription(),
                        delete this.childSubscription)
                    let { children: e } = this.props
                    ep(e) &&
                        (this.childSubscription = e.on('change', (e) => {
                            this.current && (this.current.textContent = `${e}`)
                        }))
                }
            }
            let eB = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e),
                ez = {
                    x: 'translateX',
                    y: 'translateY',
                    z: 'translateZ',
                    transformPerspective: 'perspective',
                },
                eW = i.length
            function eU(e, t, r) {
                let { style: n, vars: s, transformOrigin: a } = e,
                    l = !1,
                    u = !1
                for (let e in t) {
                    let r = t[e]
                    if (o.has(e)) {
                        l = !0
                        continue
                    }
                    if ((0, g.j)(e)) {
                        s[e] = r
                        continue
                    }
                    {
                        let t = eB(r, ea[e])
                        e.startsWith('origin')
                            ? ((u = !0), (a[e] = t))
                            : (n[e] = t)
                    }
                }
                if (
                    (!t.transform &&
                        (l || r
                            ? (n.transform = (function (e, t, r) {
                                  let n = '',
                                      o = !0
                                  for (let s = 0; s < eW; s++) {
                                      let a = i[s],
                                          l = e[a]
                                      if (void 0 === l) continue
                                      let u = !0
                                      if (
                                          !(u =
                                              'number' == typeof l
                                                  ? l ===
                                                    +!!a.startsWith('scale')
                                                  : 0 === parseFloat(l)) ||
                                          r
                                      ) {
                                          let e = eB(l, ea[a])
                                          if (!u) {
                                              o = !1
                                              let t = ez[a] || a
                                              n += `${t}(${e}) `
                                          }
                                          r && (t[a] = e)
                                      }
                                  }
                                  return (
                                      (n = n.trim()),
                                      r
                                          ? (n = r(t, o ? '' : n))
                                          : o && (n = 'none'),
                                      n
                                  )
                              })(t, e.transform, r))
                            : n.transform && (n.transform = 'none')),
                    u)
                ) {
                    let {
                        originX: e = '50%',
                        originY: t = '50%',
                        originZ: r = 0,
                    } = a
                    n.transformOrigin = `${e} ${t} ${r}`
                }
            }
            function eG(e, { style: t, vars: r }, n, i) {
                let o,
                    s = e.style
                for (o in t) s[o] = t[o]
                for (o in (i?.applyProjectionStyles(s, n), r))
                    s.setProperty(o, r[o])
            }
            let e$ = {}
            function eK(e, { layout: t, layoutId: r }) {
                return (
                    o.has(e) ||
                    e.startsWith('origin') ||
                    ((t || void 0 !== r) && (!!e$[e] || 'opacity' === e))
                )
            }
            function eq(e, t, r) {
                let { style: n } = e,
                    i = {}
                for (let o in n)
                    (ep(n[o]) ||
                        (t.style && ep(t.style[o])) ||
                        eK(o, e) ||
                        r?.getValue(o)?.liveStyle !== void 0) &&
                        (i[o] = n[o])
                return i
            }
            class eH extends eF {
                constructor() {
                    super(...arguments),
                        (this.type = 'html'),
                        (this.renderInstance = eG)
                }
                readValueFromInstance(e, t) {
                    if (o.has(t))
                        return this.projection?.isProjecting
                            ? p(t)
                            : ((e, t) => {
                                  let { transform: r = 'none' } =
                                      getComputedStyle(e)
                                  return f(r, t)
                              })(e, t)
                    {
                        let r = window.getComputedStyle(e),
                            n =
                                ((0, g.j)(t) ? r.getPropertyValue(t) : r[t]) ||
                                0
                        return 'string' == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(e, { transformPagePoint: t }) {
                    return M(e, t)
                }
                build(e, t, r) {
                    eU(e, t, r.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t, r) {
                    return eq(e, t, r)
                }
            }
            let eX = (e) =>
                    e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
                eY = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
                eQ = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
            function eZ(
                e,
                {
                    attrX: t,
                    attrY: r,
                    attrScale: n,
                    pathLength: i,
                    pathSpacing: o = 1,
                    pathOffset: s = 0,
                    ...a
                },
                l,
                u,
                c
            ) {
                if ((eU(e, a, u), l)) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
                    return
                }
                ;(e.attrs = e.style), (e.style = {})
                let { attrs: d, style: h } = e
                d.transform &&
                    ((h.transform = d.transform), delete d.transform),
                    (h.transform || d.transformOrigin) &&
                        ((h.transformOrigin = d.transformOrigin ?? '50% 50%'),
                        delete d.transformOrigin),
                    h.transform &&
                        ((h.transformBox = c?.transformBox ?? 'fill-box'),
                        delete d.transformBox),
                    void 0 !== t && (d.x = t),
                    void 0 !== r && (d.y = r),
                    void 0 !== n && (d.scale = n),
                    void 0 !== i &&
                        (function (e, t, r = 1, n = 0, i = !0) {
                            e.pathLength = 1
                            let o = i ? eY : eQ
                            e[o.offset] = O.px.transform(-n)
                            let s = O.px.transform(t),
                                a = O.px.transform(r)
                            e[o.array] = `${s} ${a}`
                        })(d, i, o, s, !1)
            }
            let eJ = new Set([
                    'baseFrequency',
                    'diffuseConstant',
                    'kernelMatrix',
                    'kernelUnitLength',
                    'keySplines',
                    'keyTimes',
                    'limitingConeAngle',
                    'markerHeight',
                    'markerWidth',
                    'numOctaves',
                    'targetX',
                    'targetY',
                    'surfaceScale',
                    'specularConstant',
                    'specularExponent',
                    'stdDeviation',
                    'tableValues',
                    'viewBox',
                    'gradientTransform',
                    'pathLength',
                    'startOffset',
                    'textLength',
                    'lengthAdjust',
                ]),
                e0 = (e) => 'string' == typeof e && 'svg' === e.toLowerCase()
            function e1(e, t, r) {
                let n = eq(e, t, r)
                for (let r in e)
                    (ep(e[r]) || ep(t[r])) &&
                        (n[
                            -1 !== i.indexOf(r)
                                ? 'attr' +
                                  r.charAt(0).toUpperCase() +
                                  r.substring(1)
                                : r
                        ] = e[r])
                return n
            }
            class e2 extends eF {
                constructor() {
                    super(...arguments),
                        (this.type = 'svg'),
                        (this.isSVGTag = !1),
                        (this.measureInstanceViewportBox = eP)
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (o.has(t)) {
                        let e = eu(t)
                        return (e && e.default) || 0
                    }
                    return (t = eJ.has(t) ? t : eX(t)), e.getAttribute(t)
                }
                scrapeMotionValuesFromProps(e, t, r) {
                    return e1(e, t, r)
                }
                build(e, t, r) {
                    eZ(e, t, this.isSVGTag, r.transformTemplate, r.style)
                }
                renderInstance(e, t, r, n) {
                    for (let r in (eG(e, t, void 0, n), t.attrs))
                        e.setAttribute(eJ.has(r) ? r : eX(r), t.attrs[r])
                }
                mount(e) {
                    ;(this.isSVGTag = e0(e.tagName)), super.mount(e)
                }
            }
            let e5 = [
                'animate',
                'circle',
                'defs',
                'desc',
                'ellipse',
                'g',
                'image',
                'line',
                'filter',
                'marker',
                'mask',
                'metadata',
                'path',
                'pattern',
                'polygon',
                'polyline',
                'rect',
                'stop',
                'switch',
                'symbol',
                'svg',
                'text',
                'tspan',
                'use',
                'view',
            ]
            function e4(e) {
                if ('string' != typeof e || e.includes('-'));
                else if (e5.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0
                return !1
            }
            var e3 = r(1983),
                e8 = r(5849),
                e6 = r(5155),
                e9 = r(296)
            let e7 = (0, n.createContext)({ strict: !1 })
            var te = r(3127)
            let tt = (0, n.createContext)({})
            function tr(e) {
                return Array.isArray(e) ? e.join(' ') : e
            }
            let tn = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
            })
            function ti(e, t, r) {
                for (let n in t) ep(t[n]) || eK(n, r) || (e[n] = t[n])
            }
            let to = () => ({ ...tn(), attrs: {} }),
                ts = new Set([
                    'animate',
                    'exit',
                    'variants',
                    'initial',
                    'style',
                    'values',
                    'variants',
                    'transition',
                    'transformTemplate',
                    'custom',
                    'inherit',
                    'onBeforeLayoutMeasure',
                    'onAnimationStart',
                    'onAnimationComplete',
                    'onUpdate',
                    'onDragStart',
                    'onDrag',
                    'onDragEnd',
                    'onMeasureDragConstraints',
                    'onDirectionLock',
                    'onDragTransitionEnd',
                    '_dragX',
                    '_dragY',
                    'onHoverStart',
                    'onHoverEnd',
                    'onViewportEnter',
                    'onViewportLeave',
                    'globalTapTarget',
                    'ignoreStrict',
                    'viewport',
                ])
            function ta(e) {
                return (
                    e.startsWith('while') ||
                    (e.startsWith('drag') && 'draggable' !== e) ||
                    e.startsWith('layout') ||
                    e.startsWith('onTap') ||
                    e.startsWith('onPan') ||
                    e.startsWith('onLayout') ||
                    ts.has(e)
                )
            }
            let tl = (e) => !ta(e)
            try {
                !(function (e) {
                    'function' == typeof e &&
                        (tl = (t) => (t.startsWith('on') ? !ta(t) : e(t)))
                })(require('@emotion/is-prop-valid').default)
            } catch {}
            var tu = r(7389),
                tc = r(9686),
                td = r(4416)
            function th(e) {
                return ep(e) ? e.get() : e
            }
            let tp = (e) => (t, r) => {
                    let i = (0, n.useContext)(tt),
                        o = (0, n.useContext)(tc.t),
                        s = () =>
                            (function (e, t, r, n) {
                                let {
                                    scrapeMotionValuesFromProps: i,
                                    createRenderState: o,
                                } = e
                                return {
                                    latestValues: (function (e, t, r, n) {
                                        let i = {},
                                            o = n(e, {})
                                        for (let e in o) i[e] = th(o[e])
                                        let { initial: s, animate: a } = e,
                                            l = eD(e),
                                            u = e_(e)
                                        t &&
                                            u &&
                                            !l &&
                                            !1 !== e.inherit &&
                                            (void 0 === s && (s = t.initial),
                                            void 0 === a && (a = t.animate))
                                        let c = !!r && !1 === r.initial,
                                            d = (c = c || !1 === s) ? a : s
                                        if (
                                            d &&
                                            'boolean' != typeof d &&
                                            !eM(d)
                                        ) {
                                            let t = Array.isArray(d) ? d : [d]
                                            for (let r = 0; r < t.length; r++) {
                                                let n = eL(e, t[r])
                                                if (n) {
                                                    let {
                                                            transitionEnd: e,
                                                            transition: t,
                                                        } = n,
                                                        r = (0, tu._)(n, [
                                                            'transitionEnd',
                                                            'transition',
                                                        ])
                                                    for (let e in r) {
                                                        let t = r[e]
                                                        if (Array.isArray(t)) {
                                                            let e = c
                                                                ? t.length - 1
                                                                : 0
                                                            t = t[e]
                                                        }
                                                        null !== t && (i[e] = t)
                                                    }
                                                    for (let t in e) i[t] = e[t]
                                                }
                                            }
                                        }
                                        return i
                                    })(t, r, n, i),
                                    renderState: o(),
                                }
                            })(e, t, i, o)
                    return r ? s() : (0, td.M)(s)
                },
                tf = tp({
                    scrapeMotionValuesFromProps: eq,
                    createRenderState: tn,
                }),
                tm = tp({
                    scrapeMotionValuesFromProps: e1,
                    createRenderState: to,
                }),
                tg = Symbol.for('motionComponentSymbol')
            function tv(e) {
                return (
                    e &&
                    'object' == typeof e &&
                    Object.prototype.hasOwnProperty.call(e, 'current')
                )
            }
            let ty = 'data-' + eX('framerAppearId'),
                tb = (0, n.createContext)({})
            var tx = r(6553)
            function tw(e) {
                var t, r
                let { forwardMotionProps: i = !1 } =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                    o = arguments.length > 2 ? arguments[2] : void 0,
                    s = arguments.length > 3 ? arguments[3] : void 0
                o &&
                    (function (e) {
                        for (let t in e) ex[t] = { ...ex[t], ...e[t] }
                    })(o)
                let a = e4(e) ? tm : tf
                function l(t, r) {
                    var o
                    let l,
                        u = (0, e8._)(
                            (0, e3._)({}, (0, n.useContext)(te.Q), t),
                            {
                                layoutId: (function (e) {
                                    let { layoutId: t } = e,
                                        r = (0, n.useContext)(e9.L).id
                                    return r && void 0 !== t ? r + '-' + t : t
                                })(t),
                            }
                        ),
                        { isStatic: c } = u,
                        d = (function (e) {
                            let { initial: t, animate: r } = (function (e, t) {
                                if (eD(e)) {
                                    let { initial: t, animate: r } = e
                                    return {
                                        initial: !1 === t || ej(t) ? t : void 0,
                                        animate: ej(r) ? r : void 0,
                                    }
                                }
                                return !1 !== e.inherit ? t : {}
                            })(e, (0, n.useContext)(tt))
                            return (0, n.useMemo)(
                                () => ({ initial: t, animate: r }),
                                [tr(t), tr(r)]
                            )
                        })(t),
                        h = a(t, c)
                    if (!c && eS.B) {
                        ;(0, n.useContext)(e7).strict
                        let t = (function (e) {
                            let { drag: t, layout: r } = ex
                            if (!t && !r) return {}
                            let n = (0, e3._)({}, t, r)
                            return {
                                MeasureLayout:
                                    (null == t ? void 0 : t.isEnabled(e)) ||
                                    (null == r ? void 0 : r.isEnabled(e))
                                        ? n.MeasureLayout
                                        : void 0,
                                ProjectionNode: n.ProjectionNode,
                            }
                        })(u)
                        ;(l = t.MeasureLayout),
                            (d.visualElement = (function (e, t, r, i, o) {
                                var s, a, l, u
                                let { visualElement: c } = (0, n.useContext)(
                                        tt
                                    ),
                                    d = (0, n.useContext)(e7),
                                    h = (0, n.useContext)(tc.t),
                                    p = (0, n.useContext)(te.Q).reducedMotion,
                                    f = (0, n.useRef)(null)
                                ;(i = i || d.renderer),
                                    !f.current &&
                                        i &&
                                        (f.current = i(e, {
                                            visualState: t,
                                            parent: c,
                                            props: r,
                                            presenceContext: h,
                                            blockInitialAnimation:
                                                !!h && !1 === h.initial,
                                            reducedMotionConfig: p,
                                        }))
                                let m = f.current,
                                    g = (0, n.useContext)(tb)
                                m &&
                                    !m.projection &&
                                    o &&
                                    ('html' === m.type || 'svg' === m.type) &&
                                    (function (e, t, r, n) {
                                        let {
                                            layoutId: i,
                                            layout: o,
                                            drag: s,
                                            dragConstraints: a,
                                            layoutScroll: l,
                                            layoutRoot: u,
                                            layoutCrossfade: c,
                                        } = t
                                        ;(e.projection = new r(
                                            e.latestValues,
                                            t['data-framer-portal-id']
                                                ? void 0
                                                : (function e(t) {
                                                      if (t)
                                                          return !1 !==
                                                              t.options
                                                                  .allowProjection
                                                              ? t.projection
                                                              : e(t.parent)
                                                  })(e.parent)
                                        )),
                                            e.projection.setOptions({
                                                layoutId: i,
                                                layout: o,
                                                alwaysMeasureLayout:
                                                    !!s || (a && tv(a)),
                                                visualElement: e,
                                                animationType:
                                                    'string' == typeof o
                                                        ? o
                                                        : 'both',
                                                initialPromotionConfig: n,
                                                crossfade: c,
                                                layoutScroll: l,
                                                layoutRoot: u,
                                            })
                                    })(f.current, r, o, g)
                                let v = (0, n.useRef)(!1)
                                ;(0, n.useInsertionEffect)(() => {
                                    m && v.current && m.update(r, h)
                                })
                                let y = r[ty],
                                    b = (0, n.useRef)(
                                        !!y &&
                                            !(null ==
                                            (s = (a = window)
                                                .MotionHandoffIsComplete)
                                                ? void 0
                                                : s.call(a, y)) &&
                                            (null ==
                                            (l = (u = window)
                                                .MotionHasOptimisedAnimation)
                                                ? void 0
                                                : l.call(u, y))
                                    )
                                return (
                                    (0, tx.E)(() => {
                                        m &&
                                            ((v.current = !0),
                                            (window.MotionIsMounted = !0),
                                            m.updateFeatures(),
                                            m.scheduleRenderMicrotask(),
                                            b.current &&
                                                m.animationState &&
                                                m.animationState.animateChanges())
                                    }),
                                    (0, n.useEffect)(() => {
                                        m &&
                                            (!b.current &&
                                                m.animationState &&
                                                m.animationState.animateChanges(),
                                            b.current &&
                                                (queueMicrotask(() => {
                                                    var e, t
                                                    null ==
                                                        (e = (t = window)
                                                            .MotionHandoffMarkAsComplete) ||
                                                        e.call(t, y)
                                                }),
                                                (b.current = !1)),
                                            (m.enteringChildren = void 0))
                                    }),
                                    m
                                )
                            })(e, h, u, s, t.ProjectionNode))
                    }
                    return (0, e6.jsxs)(tt.Provider, {
                        value: d,
                        children: [
                            l && d.visualElement
                                ? (0, e6.jsx)(
                                      l,
                                      (0, e3._)(
                                          { visualElement: d.visualElement },
                                          u
                                      )
                                  )
                                : null,
                            (function (e, t, r, i, o) {
                                let { latestValues: s } = i,
                                    a =
                                        arguments.length > 5 &&
                                        void 0 !== arguments[5] &&
                                        arguments[5],
                                    l = (
                                        e4(e)
                                            ? function (e, t, r, i) {
                                                  let o = (0, n.useMemo)(() => {
                                                      let r = to()
                                                      return (
                                                          eZ(
                                                              r,
                                                              t,
                                                              e0(i),
                                                              e.transformTemplate,
                                                              e.style
                                                          ),
                                                          (0, e8._)(
                                                              (0, e3._)(
                                                                  {},
                                                                  r.attrs
                                                              ),
                                                              {
                                                                  style: (0,
                                                                  e3._)(
                                                                      {},
                                                                      r.style
                                                                  ),
                                                              }
                                                          )
                                                      )
                                                  }, [t])
                                                  if (e.style) {
                                                      let t = {}
                                                      ti(t, e.style, e),
                                                          (o.style = (0, e3._)(
                                                              {},
                                                              t,
                                                              o.style
                                                          ))
                                                  }
                                                  return o
                                              }
                                            : function (e, t) {
                                                  let r = {},
                                                      i = (function (e, t) {
                                                          let r = e.style || {},
                                                              i = {}
                                                          return (
                                                              ti(i, r, e),
                                                              Object.assign(
                                                                  i,
                                                                  (function (
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      let {
                                                                          transformTemplate:
                                                                              r,
                                                                      } = e
                                                                      return (0,
                                                                      n.useMemo)(() => {
                                                                          let e =
                                                                              tn()
                                                                          return (
                                                                              eU(
                                                                                  e,
                                                                                  t,
                                                                                  r
                                                                              ),
                                                                              Object.assign(
                                                                                  {},
                                                                                  e.vars,
                                                                                  e.style
                                                                              )
                                                                          )
                                                                      }, [t])
                                                                  })(e, t)
                                                              ),
                                                              i
                                                          )
                                                      })(e, t)
                                                  return (
                                                      e.drag &&
                                                          !1 !==
                                                              e.dragListener &&
                                                          ((r.draggable = !1),
                                                          (i.userSelect =
                                                              i.WebkitUserSelect =
                                                              i.WebkitTouchCallout =
                                                                  'none'),
                                                          (i.touchAction =
                                                              !0 === e.drag
                                                                  ? 'none'
                                                                  : 'pan-'.concat(
                                                                        'x' ===
                                                                            e.drag
                                                                            ? 'y'
                                                                            : 'x'
                                                                    ))),
                                                      void 0 === e.tabIndex &&
                                                          (e.onTap ||
                                                              e.onTapStart ||
                                                              e.whileTap) &&
                                                          (r.tabIndex = 0),
                                                      (r.style = i),
                                                      r
                                                  )
                                              }
                                    )(t, s, o, e),
                                    u = (function (e, t, r) {
                                        let n = {}
                                        for (let i in e)
                                            ('values' !== i ||
                                                'object' != typeof e.values) &&
                                                (tl(i) ||
                                                    (!0 === r && ta(i)) ||
                                                    (!t && !ta(i)) ||
                                                    (e.draggable &&
                                                        i.startsWith(
                                                            'onDrag'
                                                        ))) &&
                                                (n[i] = e[i])
                                        return n
                                    })(t, 'string' == typeof e, a),
                                    c =
                                        e !== n.Fragment
                                            ? (0, e8._)((0, e3._)({}, u, l), {
                                                  ref: r,
                                              })
                                            : {},
                                    { children: d } = t,
                                    h = (0, n.useMemo)(
                                        () => (ep(d) ? d.get() : d),
                                        [d]
                                    )
                                return (0, n.createElement)(
                                    e,
                                    (0, e8._)((0, e3._)({}, c), { children: h })
                                )
                            })(
                                e,
                                t,
                                ((o = d.visualElement),
                                (0, n.useCallback)(
                                    (e) => {
                                        e && h.onMount && h.onMount(e),
                                            o && (e ? o.mount(e) : o.unmount()),
                                            r &&
                                                ('function' == typeof r
                                                    ? r(e)
                                                    : tv(r) && (r.current = e))
                                    },
                                    [o]
                                )),
                                h,
                                c,
                                i
                            ),
                        ],
                    })
                }
                l.displayName = 'motion.'.concat(
                    'string' == typeof e
                        ? e
                        : 'create('.concat(
                              null !=
                                  (r = null != (t = e.displayName) ? t : e.name)
                                  ? r
                                  : '',
                              ')'
                          )
                )
                let u = (0, n.forwardRef)(l)
                return (u[tg] = e), u
            }
            function tk(e, t, r) {
                let n = e.getProps()
                return eL(n, t, void 0 !== r ? r : n.custom, e)
            }
            function tE(e, t) {
                return e?.[t] ?? e?.default ?? e
            }
            let tP = (e) => Array.isArray(e)
            var tS = r(42)
            function tA(e, t) {
                let r = e.getValue('willChange')
                if (ep(r) && r.add) return r.add(t)
                if (!r && tS.W.WillChange) {
                    let r = new tS.W.WillChange('auto')
                    e.addValue('willChange', r), r.add(t)
                }
            }
            function tT(e) {
                ;(e.duration = 0), (e.type = 'keyframes')
            }
            var tC = r(3656),
                tM = r(8895)
            let tj = (e) => 1e3 * e,
                tR = { layout: 0, mainThread: 0, waapi: 0 }
            var tO = r(5130)
            let tD = (e) => {
                    let t = ({ timestamp: t }) => e(t)
                    return {
                        start: (e = !0) => U.Gt.update(t, e),
                        stop: () => (0, U.WG)(t),
                        now: () =>
                            U.uv.isProcessing ? U.uv.timestamp : ef.k.now(),
                    }
                },
                t_ = (e, t, r = 10) => {
                    let n = '',
                        i = Math.max(Math.round(t / r), 2)
                    for (let t = 0; t < i; t++)
                        n += Math.round(1e4 * e(t / (i - 1))) / 1e4 + ', '
                    return `linear(${n.substring(0, n.length - 2)})`
                }
            function tV(e) {
                let t = 0,
                    r = e.next(t)
                for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t))
                return t >= 2e4 ? 1 / 0 : t
            }
            var tL = r(5242)
            function tN(e, t, r) {
                let n = Math.max(t - 5, 0)
                return (0, tL.f)(r - e(n), t - n)
            }
            let tI = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: 0.3,
                visualDuration: 0.3,
                restSpeed: { granular: 0.01, default: 2 },
                restDelta: { granular: 0.005, default: 0.5 },
                minDuration: 0.01,
                maxDuration: 10,
                minDamping: 0.05,
                maxDamping: 1,
            }
            function tF(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let tB = ['duration', 'bounce'],
                tz = ['stiffness', 'damping', 'mass']
            function tW(e, t) {
                return t.some((t) => void 0 !== e[t])
            }
            function tU(e = tI.visualDuration, t = tI.bounce) {
                let r,
                    n =
                        'object' != typeof e
                            ? {
                                  visualDuration: e,
                                  keyframes: [0, 1],
                                  bounce: t,
                              }
                            : e,
                    { restSpeed: i, restDelta: o } = n,
                    s = n.keyframes[0],
                    a = n.keyframes[n.keyframes.length - 1],
                    l = { done: !1, value: s },
                    {
                        stiffness: u,
                        damping: c,
                        mass: d,
                        duration: h,
                        velocity: p,
                        isResolvedFromDuration: f,
                    } = (function (e) {
                        let t = {
                            velocity: tI.velocity,
                            stiffness: tI.stiffness,
                            damping: tI.damping,
                            mass: tI.mass,
                            isResolvedFromDuration: !1,
                            ...e,
                        }
                        if (!tW(e, tz) && tW(e, tB))
                            if (e.visualDuration) {
                                let r =
                                        (2 * Math.PI) /
                                        (1.2 * e.visualDuration),
                                    n = r * r,
                                    i =
                                        2 *
                                        (0, tM.q)(
                                            0.05,
                                            1,
                                            1 - (e.bounce || 0)
                                        ) *
                                        Math.sqrt(n)
                                t = {
                                    ...t,
                                    mass: tI.mass,
                                    stiffness: n,
                                    damping: i,
                                }
                            } else {
                                let r = (function ({
                                    duration: e = tI.duration,
                                    bounce: t = tI.bounce,
                                    velocity: r = tI.velocity,
                                    mass: n = tI.mass,
                                }) {
                                    let i, o
                                    ;(0, L.$)(
                                        e <= tj(tI.maxDuration),
                                        'Spring duration must be 10 seconds or less',
                                        'spring-duration-limit'
                                    )
                                    let s = 1 - t
                                    ;(s = (0, tM.q)(
                                        tI.minDamping,
                                        tI.maxDamping,
                                        s
                                    )),
                                        (e = (0, tM.q)(
                                            tI.minDuration,
                                            tI.maxDuration,
                                            e / 1e3
                                        )),
                                        s < 1
                                            ? ((i = (t) => {
                                                  let n = t * s,
                                                      i = n * e
                                                  return (
                                                      0.001 -
                                                      ((n - r) / tF(t, s)) *
                                                          Math.exp(-i)
                                                  )
                                              }),
                                              (o = (t) => {
                                                  let n = t * s * e,
                                                      o =
                                                          Math.pow(s, 2) *
                                                          Math.pow(t, 2) *
                                                          e,
                                                      a = Math.exp(-n),
                                                      l = tF(Math.pow(t, 2), s)
                                                  return (
                                                      ((n * r + r - o) *
                                                          a *
                                                          (-i(t) + 0.001 > 0
                                                              ? -1
                                                              : 1)) /
                                                      l
                                                  )
                                              }))
                                            : ((i = (t) =>
                                                  -0.001 +
                                                  Math.exp(-t * e) *
                                                      ((t - r) * e + 1)),
                                              (o = (t) =>
                                                  e *
                                                  e *
                                                  (r - t) *
                                                  Math.exp(-t * e)))
                                    let a = (function (e, t, r) {
                                        let n = r
                                        for (let r = 1; r < 12; r++)
                                            n -= e(n) / t(n)
                                        return n
                                    })(i, o, 5 / e)
                                    if (((e = tj(e)), isNaN(a)))
                                        return {
                                            stiffness: tI.stiffness,
                                            damping: tI.damping,
                                            duration: e,
                                        }
                                    {
                                        let t = Math.pow(a, 2) * n
                                        return {
                                            stiffness: t,
                                            damping: 2 * s * Math.sqrt(n * t),
                                            duration: e,
                                        }
                                    }
                                })(e)
                                ;(t = {
                                    ...t,
                                    ...r,
                                    mass: tI.mass,
                                }).isResolvedFromDuration = !0
                            }
                        return t
                    })({ ...n, velocity: -((n.velocity || 0) / 1e3) }),
                    m = p || 0,
                    g = c / (2 * Math.sqrt(u * d)),
                    v = a - s,
                    y = Math.sqrt(u / d) / 1e3,
                    b = 5 > Math.abs(v)
                if (
                    (i ||
                        (i = b ? tI.restSpeed.granular : tI.restSpeed.default),
                    o || (o = b ? tI.restDelta.granular : tI.restDelta.default),
                    g < 1)
                ) {
                    let e = tF(y, g)
                    r = (t) =>
                        a -
                        Math.exp(-g * y * t) *
                            (((m + g * y * v) / e) * Math.sin(e * t) +
                                v * Math.cos(e * t))
                } else if (1 === g)
                    r = (e) => a - Math.exp(-y * e) * (v + (m + y * v) * e)
                else {
                    let e = y * Math.sqrt(g * g - 1)
                    r = (t) => {
                        let r = Math.exp(-g * y * t),
                            n = Math.min(e * t, 300)
                        return (
                            a -
                            (r *
                                ((m + g * y * v) * Math.sinh(n) +
                                    e * v * Math.cosh(n))) /
                                e
                        )
                    }
                }
                let x = {
                    calculatedDuration: (f && h) || null,
                    next: (e) => {
                        let t = r(e)
                        if (f) l.done = e >= h
                        else {
                            let n = 0 === e ? m : 0
                            g < 1 && (n = 0 === e ? tj(m) : tN(r, e, t))
                            let s = Math.abs(a - t) <= o
                            l.done = Math.abs(n) <= i && s
                        }
                        return (l.value = l.done ? a : t), l
                    },
                    toString: () => {
                        let e = Math.min(tV(x), 2e4),
                            t = t_((t) => x.next(e * t).value, e, 30)
                        return e + 'ms ' + t
                    },
                    toTransition: () => {},
                }
                return x
            }
            function tG({
                keyframes: e,
                velocity: t = 0,
                power: r = 0.8,
                timeConstant: n = 325,
                bounceDamping: i = 10,
                bounceStiffness: o = 500,
                modifyTarget: s,
                min: a,
                max: l,
                restDelta: u = 0.5,
                restSpeed: c,
            }) {
                let d,
                    h,
                    p = e[0],
                    f = { done: !1, value: p },
                    m = r * t,
                    g = p + m,
                    v = void 0 === s ? g : s(g)
                v !== g && (m = v - p)
                let y = (e) => -m * Math.exp(-e / n),
                    b = (e) => v + y(e),
                    x = (e) => {
                        let t = y(e),
                            r = b(e)
                        ;(f.done = Math.abs(t) <= u), (f.value = f.done ? v : r)
                    },
                    w = (e) => {
                        let t
                        if (
                            ((t = f.value),
                            (void 0 !== a && t < a) || (void 0 !== l && t > l))
                        ) {
                            var r
                            ;(d = e),
                                (h = tU({
                                    keyframes: [
                                        f.value,
                                        ((r = f.value),
                                        void 0 === a
                                            ? l
                                            : void 0 === l ||
                                              Math.abs(a - r) < Math.abs(l - r)
                                            ? a
                                            : l),
                                    ],
                                    velocity: tN(b, e, f.value),
                                    damping: i,
                                    stiffness: o,
                                    restDelta: u,
                                    restSpeed: c,
                                }))
                        }
                    }
                return (
                    w(0),
                    {
                        calculatedDuration: null,
                        next: (e) => {
                            let t = !1
                            return (h || void 0 !== d || ((t = !0), x(e), w(e)),
                            void 0 !== d && e >= d)
                                ? h.next(e - d)
                                : (t || x(e), f)
                        },
                    }
                )
            }
            tU.applyToOptions = (e) => {
                let t = (function (e, t = 100, r) {
                    let n = r({ ...e, keyframes: [0, t] }),
                        i = Math.min(tV(n), 2e4)
                    return {
                        type: 'keyframes',
                        ease: (e) => n.next(i * e).value / t,
                        duration: i / 1e3,
                    }
                })(e, 100, tU)
                return (
                    (e.ease = t.ease),
                    (e.duration = tj(t.duration)),
                    (e.type = 'keyframes'),
                    e
                )
            }
            var t$ = r(4119)
            let tK = (e, t, r) =>
                (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e
            function tq(e, t, r, n) {
                return e === t && r === n
                    ? t$.l
                    : (i) =>
                          0 === i || 1 === i
                              ? i
                              : tK(
                                    (function (e, t, r, n, i) {
                                        let o,
                                            s,
                                            a = 0
                                        do
                                            (o =
                                                tK(
                                                    (s = t + (r - t) / 2),
                                                    n,
                                                    i
                                                ) - e) > 0
                                                ? (r = s)
                                                : (t = s)
                                        while (Math.abs(o) > 1e-7 && ++a < 12)
                                        return s
                                    })(i, 0, 1, e, r),
                                    t,
                                    n
                                )
            }
            let tH = tq(0.42, 0, 1, 1),
                tX = tq(0, 0, 0.58, 1),
                tY = tq(0.42, 0, 0.58, 1),
                tQ = (e) => (t) =>
                    t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                tZ = (e) => (t) => 1 - e(1 - t),
                tJ = tq(0.33, 1.53, 0.69, 0.99),
                t0 = tZ(tJ),
                t1 = tQ(t0),
                t2 = (e) =>
                    (e *= 2) < 1
                        ? 0.5 * t0(e)
                        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
                t5 = (e) => 1 - Math.sin(Math.acos(e)),
                t4 = tZ(t5),
                t3 = tQ(t5),
                t8 = (e) => Array.isArray(e) && 'number' == typeof e[0],
                t6 = {
                    linear: t$.l,
                    easeIn: tH,
                    easeInOut: tY,
                    easeOut: tX,
                    circIn: t5,
                    circInOut: t3,
                    circOut: t4,
                    backIn: t0,
                    backInOut: t1,
                    backOut: tJ,
                    anticipate: t2,
                },
                t9 = (e) => {
                    if (t8(e)) {
                        ;(0, L.V)(
                            4 === e.length,
                            'Cubic bezier arrays must contain four numerical values.',
                            'cubic-bezier-length'
                        )
                        let [t, r, n, i] = e
                        return tq(t, r, n, i)
                    }
                    return 'string' == typeof e
                        ? ((0, L.V)(
                              void 0 !== t6[e],
                              `Invalid easing type '${e}'`,
                              'invalid-easing-type'
                          ),
                          t6[e])
                        : e
                }
            var t7 = r(6706),
                re = r(6827)
            function rt({
                duration: e = 300,
                keyframes: t,
                times: r,
                ease: n = 'easeInOut',
            }) {
                var i
                let o =
                        Array.isArray(n) && 'number' != typeof n[0]
                            ? n.map(t9)
                            : t9(n),
                    s = { done: !1, value: t[0] },
                    a =
                        ((i = r && r.length === t.length ? r : (0, re.Z)(t)),
                        i.map((t) => t * e)),
                    l = (0, t7.G)(a, t, {
                        ease: Array.isArray(o)
                            ? o
                            : t.map(() => o || tY).splice(0, t.length - 1),
                    })
                return {
                    calculatedDuration: e,
                    next: (t) => ((s.value = l(t)), (s.done = t >= e), s),
                }
            }
            let rr = (e) => null !== e
            function rn(e, { repeat: t, repeatType: r = 'loop' }, n, i = 1) {
                let o = e.filter(rr),
                    s =
                        i < 0 || (t && 'loop' !== r && t % 2 == 1)
                            ? 0
                            : o.length - 1
                return s && void 0 !== n ? n : o[s]
            }
            let ri = {
                decay: tG,
                inertia: tG,
                tween: rt,
                keyframes: rt,
                spring: tU,
            }
            function ro(e) {
                'string' == typeof e.type && (e.type = ri[e.type])
            }
            class rs {
                constructor() {
                    this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this._finished = new Promise((e) => {
                        this.resolve = e
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(e, t) {
                    return this.finished.then(e, t)
                }
            }
            let ra = (e) => e / 100
            class rl extends rs {
                constructor(e) {
                    super(),
                        (this.state = 'idle'),
                        (this.startTime = null),
                        (this.isStopped = !1),
                        (this.currentTime = 0),
                        (this.holdTime = null),
                        (this.playbackSpeed = 1),
                        (this.stop = () => {
                            let { motionValue: e } = this.options
                            e &&
                                e.updatedAt !== ef.k.now() &&
                                this.tick(ef.k.now()),
                                (this.isStopped = !0),
                                'idle' !== this.state &&
                                    (this.teardown(), this.options.onStop?.())
                        }),
                        tR.mainThread++,
                        (this.options = e),
                        this.initAnimation(),
                        this.play(),
                        !1 === e.autoplay && this.pause()
                }
                initAnimation() {
                    let { options: e } = this
                    ro(e)
                    let {
                            type: t = rt,
                            repeat: r = 0,
                            repeatDelay: n = 0,
                            repeatType: i,
                            velocity: o = 0,
                        } = e,
                        { keyframes: s } = e,
                        a = t || rt
                    a !== rt &&
                        'number' != typeof s[0] &&
                        ((this.mixKeyframes = (0, tC.F)(
                            ra,
                            (0, tO.j)(s[0], s[1])
                        )),
                        (s = [0, 100]))
                    let l = a({ ...e, keyframes: s })
                    'mirror' === i &&
                        (this.mirroredGenerator = a({
                            ...e,
                            keyframes: [...s].reverse(),
                            velocity: -o,
                        })),
                        null === l.calculatedDuration &&
                            (l.calculatedDuration = tV(l))
                    let { calculatedDuration: u } = l
                    ;(this.calculatedDuration = u),
                        (this.resolvedDuration = u + n),
                        (this.totalDuration =
                            this.resolvedDuration * (r + 1) - n),
                        (this.generator = l)
                }
                updateTime(e) {
                    let t = Math.round(e - this.startTime) * this.playbackSpeed
                    null !== this.holdTime
                        ? (this.currentTime = this.holdTime)
                        : (this.currentTime = t)
                }
                tick(e, t = !1) {
                    let {
                        generator: r,
                        totalDuration: n,
                        mixKeyframes: i,
                        mirroredGenerator: o,
                        resolvedDuration: s,
                        calculatedDuration: a,
                    } = this
                    if (null === this.startTime) return r.next(0)
                    let {
                        delay: l = 0,
                        keyframes: u,
                        repeat: c,
                        repeatType: d,
                        repeatDelay: h,
                        type: p,
                        onUpdate: f,
                        finalKeyframe: m,
                    } = this.options
                    this.speed > 0
                        ? (this.startTime = Math.min(this.startTime, e))
                        : this.speed < 0 &&
                          (this.startTime = Math.min(
                              e - n / this.speed,
                              this.startTime
                          )),
                        t ? (this.currentTime = e) : this.updateTime(e)
                    let g =
                            this.currentTime -
                            l * (this.playbackSpeed >= 0 ? 1 : -1),
                        v = this.playbackSpeed >= 0 ? g < 0 : g > n
                    ;(this.currentTime = Math.max(g, 0)),
                        'finished' === this.state &&
                            null === this.holdTime &&
                            (this.currentTime = n)
                    let y = this.currentTime,
                        b = r
                    if (c) {
                        let e = Math.min(this.currentTime, n) / s,
                            t = Math.floor(e),
                            r = e % 1
                        !r && e >= 1 && (r = 1),
                            1 === r && t--,
                            (t = Math.min(t, c + 1)) % 2 &&
                                ('reverse' === d
                                    ? ((r = 1 - r), h && (r -= h / s))
                                    : 'mirror' === d && (b = o)),
                            (y = (0, tM.q)(0, 1, r) * s)
                    }
                    let x = v ? { done: !1, value: u[0] } : b.next(y)
                    i && (x.value = i(x.value))
                    let { done: w } = x
                    v ||
                        null === a ||
                        (w =
                            this.playbackSpeed >= 0
                                ? this.currentTime >= n
                                : this.currentTime <= 0)
                    let k =
                        null === this.holdTime &&
                        ('finished' === this.state ||
                            ('running' === this.state && w))
                    return (
                        k &&
                            p !== tG &&
                            (x.value = rn(u, this.options, m, this.speed)),
                        f && f(x.value),
                        k && this.finish(),
                        x
                    )
                }
                then(e, t) {
                    return this.finished.then(e, t)
                }
                get duration() {
                    return this.calculatedDuration / 1e3
                }
                get iterationDuration() {
                    let { delay: e = 0 } = this.options || {}
                    return this.duration + e / 1e3
                }
                get time() {
                    return this.currentTime / 1e3
                }
                set time(e) {
                    ;(e = tj(e)),
                        (this.currentTime = e),
                        null === this.startTime ||
                        null !== this.holdTime ||
                        0 === this.playbackSpeed
                            ? (this.holdTime = e)
                            : this.driver &&
                              (this.startTime =
                                  this.driver.now() - e / this.playbackSpeed),
                        this.driver?.start(!1)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(e) {
                    this.updateTime(ef.k.now())
                    let t = this.playbackSpeed !== e
                    ;(this.playbackSpeed = e),
                        t && (this.time = this.currentTime / 1e3)
                }
                play() {
                    if (this.isStopped) return
                    let { driver: e = tD, startTime: t } = this.options
                    this.driver || (this.driver = e((e) => this.tick(e))),
                        this.options.onPlay?.()
                    let r = this.driver.now()
                    'finished' === this.state
                        ? (this.updateFinished(), (this.startTime = r))
                        : null !== this.holdTime
                        ? (this.startTime = r - this.holdTime)
                        : this.startTime || (this.startTime = t ?? r),
                        'finished' === this.state &&
                            this.speed < 0 &&
                            (this.startTime += this.calculatedDuration),
                        (this.holdTime = null),
                        (this.state = 'running'),
                        this.driver.start()
                }
                pause() {
                    ;(this.state = 'paused'),
                        this.updateTime(ef.k.now()),
                        (this.holdTime = this.currentTime)
                }
                complete() {
                    'running' !== this.state && this.play(),
                        (this.state = 'finished'),
                        (this.holdTime = null)
                }
                finish() {
                    this.notifyFinished(),
                        this.teardown(),
                        (this.state = 'finished'),
                        this.options.onComplete?.()
                }
                cancel() {
                    ;(this.holdTime = null),
                        (this.startTime = 0),
                        this.tick(0),
                        this.teardown(),
                        this.options.onCancel?.()
                }
                teardown() {
                    ;(this.state = 'idle'),
                        this.stopDriver(),
                        (this.startTime = this.holdTime = null),
                        tR.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), (this.driver = void 0))
                }
                sample(e) {
                    return (this.startTime = 0), this.tick(e, !0)
                }
                attachTimeline(e) {
                    return (
                        this.options.allowFlatten &&
                            ((this.options.type = 'keyframes'),
                            (this.options.ease = 'linear'),
                            this.initAnimation()),
                        this.driver?.stop(),
                        e.observe(this)
                    )
                }
            }
            var ru = r(4995),
                rc = r(3867),
                rd = r(178)
            let rh = {},
                rp = (function (e, t) {
                    let r = (0, rd.p)(e)
                    return () => rh[t] ?? r()
                })(() => {
                    try {
                        document
                            .createElement('div')
                            .animate({ opacity: 0 }, { easing: 'linear(0, 1)' })
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, 'linearEasing'),
                rf = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
                rm = {
                    linear: 'linear',
                    ease: 'ease',
                    easeIn: 'ease-in',
                    easeOut: 'ease-out',
                    easeInOut: 'ease-in-out',
                    circIn: rf([0, 0.65, 0.55, 1]),
                    circOut: rf([0.55, 0, 1, 0.45]),
                    backIn: rf([0.31, 0.01, 0.66, -0.59]),
                    backOut: rf([0.33, 1.53, 0.69, 0.99]),
                }
            function rg(e) {
                return 'function' == typeof e && 'applyToOptions' in e
            }
            class rv extends rs {
                constructor(e) {
                    if (
                        (super(),
                        (this.finishedTime = null),
                        (this.isStopped = !1),
                        !e)
                    )
                        return
                    let {
                        element: t,
                        name: r,
                        keyframes: n,
                        pseudoElement: i,
                        allowFlatten: o = !1,
                        finalKeyframe: s,
                        onComplete: a,
                    } = e
                    ;(this.isPseudoElement = !!i),
                        (this.allowFlatten = o),
                        (this.options = e),
                        (0, L.V)(
                            'string' != typeof e.type,
                            'Mini animate() doesn\'t support "type" as a string.',
                            'mini-spring'
                        )
                    let l = (function ({ type: e, ...t }) {
                        return rg(e) && rp()
                            ? e.applyToOptions(t)
                            : (t.duration ?? (t.duration = 300),
                              t.ease ?? (t.ease = 'easeOut'),
                              t)
                    })(e)
                    ;(this.animation = (function (
                        e,
                        t,
                        r,
                        {
                            delay: n = 0,
                            duration: i = 300,
                            repeat: o = 0,
                            repeatType: s = 'loop',
                            ease: a = 'easeOut',
                            times: l,
                        } = {},
                        u
                    ) {
                        let c = { [t]: r }
                        l && (c.offset = l)
                        let d = (function e(t, r) {
                            if (t)
                                return 'function' == typeof t
                                    ? rp()
                                        ? t_(t, r)
                                        : 'ease-out'
                                    : t8(t)
                                    ? rf(t)
                                    : Array.isArray(t)
                                    ? t.map((t) => e(t, r) || rm.easeOut)
                                    : rm[t]
                        })(a, i)
                        Array.isArray(d) && (c.easing = d),
                            rc.Q.value && tR.waapi++
                        let h = {
                            delay: n,
                            duration: i,
                            easing: Array.isArray(d) ? 'linear' : d,
                            fill: 'both',
                            iterations: o + 1,
                            direction: 'reverse' === s ? 'alternate' : 'normal',
                        }
                        u && (h.pseudoElement = u)
                        let p = e.animate(c, h)
                        return (
                            rc.Q.value &&
                                p.finished.finally(() => {
                                    tR.waapi--
                                }),
                            p
                        )
                    })(t, r, n, l, i)),
                        !1 === l.autoplay && this.animation.pause(),
                        (this.animation.onfinish = () => {
                            if (((this.finishedTime = this.time), !i)) {
                                let e = rn(n, this.options, s, this.speed)
                                this.updateMotionValue
                                    ? this.updateMotionValue(e)
                                    : (function (e, t, r) {
                                          t.startsWith('--')
                                              ? e.style.setProperty(t, r)
                                              : (e.style[t] = r)
                                      })(t, r, e),
                                    this.animation.cancel()
                            }
                            a?.(), this.notifyFinished()
                        })
                }
                play() {
                    this.isStopped ||
                        (this.animation.play(),
                        'finished' === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish?.()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (e) {}
                }
                stop() {
                    if (this.isStopped) return
                    this.isStopped = !0
                    let { state: e } = this
                    'idle' !== e &&
                        'finished' !== e &&
                        (this.updateMotionValue
                            ? this.updateMotionValue()
                            : this.commitStyles(),
                        this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles?.()
                }
                get duration() {
                    return (
                        Number(
                            this.animation.effect?.getComputedTiming?.()
                                .duration || 0
                        ) / 1e3
                    )
                }
                get iterationDuration() {
                    let { delay: e = 0 } = this.options || {}
                    return this.duration + e / 1e3
                }
                get time() {
                    return (Number(this.animation.currentTime) || 0) / 1e3
                }
                set time(e) {
                    ;(this.finishedTime = null),
                        (this.animation.currentTime = tj(e))
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(e) {
                    e < 0 && (this.finishedTime = null),
                        (this.animation.playbackRate = e)
                }
                get state() {
                    return null !== this.finishedTime
                        ? 'finished'
                        : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(e) {
                    this.animation.startTime = e
                }
                attachTimeline({ timeline: e, observe: t }) {
                    return (this.allowFlatten &&
                        this.animation.effect?.updateTiming({
                            easing: 'linear',
                        }),
                    (this.animation.onfinish = null),
                    e && (0, ru.J)())
                        ? ((this.animation.timeline = e), t$.l)
                        : t(this)
                }
            }
            let ry = { anticipate: t2, backInOut: t1, circInOut: t3 }
            class rb extends rv {
                constructor(e) {
                    !(function (e) {
                        'string' == typeof e.ease &&
                            e.ease in ry &&
                            (e.ease = ry[e.ease])
                    })(e),
                        ro(e),
                        super(e),
                        e.startTime && (this.startTime = e.startTime),
                        (this.options = e)
                }
                updateMotionValue(e) {
                    let {
                        motionValue: t,
                        onUpdate: r,
                        onComplete: n,
                        element: i,
                        ...o
                    } = this.options
                    if (!t) return
                    if (void 0 !== e) return void t.set(e)
                    let s = new rl({ ...o, autoplay: !1 }),
                        a = tj(this.finishedTime ?? this.time)
                    t.setWithVelocity(
                        s.sample(a - 10).value,
                        s.sample(a).value,
                        10
                    ),
                        s.stop()
                }
            }
            let rx = (e, t) =>
                    'zIndex' !== t &&
                    !!(
                        'number' == typeof e ||
                        Array.isArray(e) ||
                        ('string' == typeof e &&
                            (Z.f.test(e) || '0' === e) &&
                            !e.startsWith('url('))
                    ),
                rw = new Set(['opacity', 'clipPath', 'filter', 'transform']),
                rk = (0, rd.p)(() =>
                    Object.hasOwnProperty.call(Element.prototype, 'animate')
                )
            class rE extends rs {
                constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: r = 'keyframes',
                    repeat: n = 0,
                    repeatDelay: i = 0,
                    repeatType: o = 'loop',
                    keyframes: s,
                    name: a,
                    motionValue: l,
                    element: u,
                    ...c
                }) {
                    super(),
                        (this.stop = () => {
                            this._animation &&
                                (this._animation.stop(), this.stopTimeline?.()),
                                this.keyframeResolver?.cancel()
                        }),
                        (this.createdAt = ef.k.now())
                    let d = {
                            autoplay: e,
                            delay: t,
                            type: r,
                            repeat: n,
                            repeatDelay: i,
                            repeatType: o,
                            name: a,
                            motionValue: l,
                            element: u,
                            ...c,
                        },
                        h = u?.KeyframeResolver || Y
                    ;(this.keyframeResolver = new h(
                        s,
                        (e, t, r) => this.onKeyframesResolved(e, t, d, !r),
                        a,
                        l,
                        u
                    )),
                        this.keyframeResolver?.scheduleResolve()
                }
                onKeyframesResolved(e, t, r, n) {
                    this.keyframeResolver = void 0
                    let {
                        name: i,
                        type: o,
                        velocity: s,
                        delay: a,
                        isHandoff: l,
                        onUpdate: u,
                    } = r
                    ;(this.resolvedAt = ef.k.now()),
                        !(function (e, t, r, n) {
                            let i = e[0]
                            if (null === i) return !1
                            if ('display' === t || 'visibility' === t) return !0
                            let o = e[e.length - 1],
                                s = rx(i, t),
                                a = rx(o, t)
                            return (
                                (0, L.$)(
                                    s === a,
                                    `You are trying to animate ${t} from "${i}" to "${o}". "${
                                        s ? o : i
                                    }" is not an animatable value.`,
                                    'value-not-animatable'
                                ),
                                !!s &&
                                    !!a &&
                                    ((function (e) {
                                        let t = e[0]
                                        if (1 === e.length) return !0
                                        for (let r = 0; r < e.length; r++)
                                            if (e[r] !== t) return !0
                                    })(e) ||
                                        (('spring' === r || rg(r)) && n))
                            )
                        })(e, i, o, s) &&
                            ((tS.W.instantAnimations || !a) && u?.(rn(e, r, t)),
                            (e[0] = e[e.length - 1]),
                            tT(r),
                            (r.repeat = 0))
                    let c = {
                            startTime: n
                                ? this.resolvedAt &&
                                  this.resolvedAt - this.createdAt > 40
                                    ? this.resolvedAt
                                    : this.createdAt
                                : void 0,
                            finalKeyframe: t,
                            ...r,
                            keyframes: e,
                        },
                        d =
                            !l &&
                            (function (e) {
                                let {
                                    motionValue: t,
                                    name: r,
                                    repeatDelay: n,
                                    repeatType: i,
                                    damping: o,
                                    type: s,
                                } = e
                                if (!(t?.owner?.current instanceof HTMLElement))
                                    return !1
                                let { onUpdate: a, transformTemplate: l } =
                                    t.owner.getProps()
                                return (
                                    rk() &&
                                    r &&
                                    rw.has(r) &&
                                    ('transform' !== r || !l) &&
                                    !a &&
                                    !n &&
                                    'mirror' !== i &&
                                    0 !== o &&
                                    'inertia' !== s
                                )
                            })(c)
                                ? new rb({
                                      ...c,
                                      element: c.motionValue.owner.current,
                                  })
                                : new rl(c)
                    d.finished.then(() => this.notifyFinished()).catch(t$.l),
                        this.pendingTimeline &&
                            ((this.stopTimeline = d.attachTimeline(
                                this.pendingTimeline
                            )),
                            (this.pendingTimeline = void 0)),
                        (this._animation = d)
                }
                get finished() {
                    return this._animation
                        ? this.animation.finished
                        : this._finished
                }
                then(e, t) {
                    return this.finished.finally(e).then(() => {})
                }
                get animation() {
                    return (
                        this._animation ||
                            (this.keyframeResolver?.resume(),
                            (q = !0),
                            X(),
                            H(),
                            (q = !1)),
                        this._animation
                    )
                }
                get duration() {
                    return this.animation.duration
                }
                get iterationDuration() {
                    return this.animation.iterationDuration
                }
                get time() {
                    return this.animation.time
                }
                set time(e) {
                    this.animation.time = e
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(e) {
                    this.animation.speed = e
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(e) {
                    return (
                        this._animation
                            ? (this.stopTimeline =
                                  this.animation.attachTimeline(e))
                            : (this.pendingTimeline = e),
                        () => this.stop()
                    )
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this._animation && this.animation.cancel(),
                        this.keyframeResolver?.cancel()
                }
            }
            let rP = (e) => null !== e,
                rS = {
                    type: 'spring',
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10,
                },
                rA = { type: 'keyframes', duration: 0.8 },
                rT = {
                    type: 'keyframes',
                    ease: [0.25, 0.1, 0.35, 1],
                    duration: 0.3,
                },
                rC =
                    (e, t, r, n = {}, i, s) =>
                    (a) => {
                        let l = tE(n, e) || {},
                            u = l.delay || n.delay || 0,
                            { elapsed: c = 0 } = n
                        c -= tj(u)
                        let d = {
                            keyframes: Array.isArray(r) ? r : [null, r],
                            ease: 'easeOut',
                            velocity: t.getVelocity(),
                            ...l,
                            delay: -c,
                            onUpdate: (e) => {
                                t.set(e), l.onUpdate && l.onUpdate(e)
                            },
                            onComplete: () => {
                                a(), l.onComplete && l.onComplete()
                            },
                            name: e,
                            motionValue: t,
                            element: s ? void 0 : i,
                        }
                        !(function ({
                            when: e,
                            delay: t,
                            delayChildren: r,
                            staggerChildren: n,
                            staggerDirection: i,
                            repeat: o,
                            repeatType: s,
                            repeatDelay: a,
                            from: l,
                            elapsed: u,
                            ...c
                        }) {
                            return !!Object.keys(c).length
                        })(l) &&
                            Object.assign(
                                d,
                                ((e, { keyframes: t }) =>
                                    t.length > 2
                                        ? rA
                                        : o.has(e)
                                        ? e.startsWith('scale')
                                            ? {
                                                  type: 'spring',
                                                  stiffness: 550,
                                                  damping:
                                                      0 === t[1]
                                                          ? 2 * Math.sqrt(550)
                                                          : 30,
                                                  restSpeed: 10,
                                              }
                                            : rS
                                        : rT)(e, d)
                            ),
                            d.duration && (d.duration = tj(d.duration)),
                            d.repeatDelay &&
                                (d.repeatDelay = tj(d.repeatDelay)),
                            void 0 !== d.from && (d.keyframes[0] = d.from)
                        let h = !1
                        if (
                            ((!1 !== d.type &&
                                (0 !== d.duration || d.repeatDelay)) ||
                                (tT(d), 0 === d.delay && (h = !0)),
                            (tS.W.instantAnimations || tS.W.skipAnimations) &&
                                ((h = !0), tT(d), (d.delay = 0)),
                            (d.allowFlatten = !l.type && !l.ease),
                            h && !s && void 0 !== t.get())
                        ) {
                            let e = (function (
                                e,
                                { repeat: t, repeatType: r = 'loop' },
                                n
                            ) {
                                let i = e.filter(rP),
                                    o =
                                        t && 'loop' !== r && t % 2 == 1
                                            ? 0
                                            : i.length - 1
                                return i[o]
                            })(d.keyframes, l)
                            if (void 0 !== e)
                                return void U.Gt.update(() => {
                                    d.onUpdate(e), d.onComplete()
                                })
                        }
                        return l.isSync ? new rl(d) : new rE(d)
                    }
            function rM(
                e,
                t,
                { delay: r = 0, transitionOverride: n, type: i } = {}
            ) {
                let {
                    transition: o = e.getDefaultTransition(),
                    transitionEnd: s,
                    ...a
                } = t
                n && (o = n)
                let l = [],
                    u = i && e.animationState && e.animationState.getState()[i]
                for (let t in a) {
                    let n = e.getValue(t, e.latestValues[t] ?? null),
                        i = a[t]
                    if (
                        void 0 === i ||
                        (u &&
                            (function (
                                { protectedKeys: e, needsAnimating: t },
                                r
                            ) {
                                let n = e.hasOwnProperty(r) && !0 !== t[r]
                                return (t[r] = !1), n
                            })(u, t))
                    )
                        continue
                    let s = { delay: r, ...tE(o || {}, t) },
                        c = n.get()
                    if (
                        void 0 !== c &&
                        !n.isAnimating &&
                        !Array.isArray(i) &&
                        i === c &&
                        !s.velocity
                    )
                        continue
                    let d = !1
                    if (window.MotionHandoffAnimation) {
                        let r = e.props[ty]
                        if (r) {
                            let e = window.MotionHandoffAnimation(r, t, U.Gt)
                            null !== e && ((s.startTime = e), (d = !0))
                        }
                    }
                    tA(e, t),
                        n.start(
                            rC(
                                t,
                                n,
                                i,
                                e.shouldReduceMotion && j.has(t)
                                    ? { type: !1 }
                                    : s,
                                e,
                                d
                            )
                        )
                    let h = n.animation
                    h && l.push(h)
                }
                return (
                    s &&
                        Promise.all(l).then(() => {
                            U.Gt.update(() => {
                                s &&
                                    (function (e, t) {
                                        let {
                                            transitionEnd: r = {},
                                            transition: n = {},
                                            ...i
                                        } = tk(e, t) || {}
                                        for (let t in (i = { ...i, ...r })) {
                                            var o
                                            let r = tP((o = i[t]))
                                                ? o[o.length - 1] || 0
                                                : o
                                            e.hasValue(t)
                                                ? e.getValue(t).set(r)
                                                : e.addValue(t, (0, em.OQ)(r))
                                        }
                                    })(e, s)
                            })
                        }),
                    l
                )
            }
            function rj(e, t, r, n = 0, i = 1) {
                let o = Array.from(e)
                        .sort((e, t) => e.sortNodePosition(t))
                        .indexOf(t),
                    s = e.size,
                    a = (s - 1) * n
                return 'function' == typeof r
                    ? r(o, s)
                    : 1 === i
                    ? o * n
                    : a - o * n
            }
            function rR(e, t, r = {}) {
                let n = tk(
                        e,
                        t,
                        'exit' === r.type ? e.presenceContext?.custom : void 0
                    ),
                    { transition: i = e.getDefaultTransition() || {} } = n || {}
                r.transitionOverride && (i = r.transitionOverride)
                let o = n
                        ? () => Promise.all(rM(e, n, r))
                        : () => Promise.resolve(),
                    s =
                        e.variantChildren && e.variantChildren.size
                            ? (n = 0) => {
                                  let {
                                      delayChildren: o = 0,
                                      staggerChildren: s,
                                      staggerDirection: a,
                                  } = i
                                  return (function (
                                      e,
                                      t,
                                      r = 0,
                                      n = 0,
                                      i = 0,
                                      o = 1,
                                      s
                                  ) {
                                      let a = []
                                      for (let l of e.variantChildren)
                                          l.notify('AnimationStart', t),
                                              a.push(
                                                  rR(l, t, {
                                                      ...s,
                                                      delay:
                                                          r +
                                                          ('function' ==
                                                          typeof n
                                                              ? 0
                                                              : n) +
                                                          rj(
                                                              e.variantChildren,
                                                              l,
                                                              n,
                                                              i,
                                                              o
                                                          ),
                                                  }).then(() =>
                                                      l.notify(
                                                          'AnimationComplete',
                                                          t
                                                      )
                                                  )
                                              )
                                      return Promise.all(a)
                                  })(e, t, n, o, s, a, r)
                              }
                            : () => Promise.resolve(),
                    { when: a } = i
                if (!a) return Promise.all([o(), s(r.delay)])
                {
                    let [e, t] = 'beforeChildren' === a ? [o, s] : [s, o]
                    return e().then(() => t())
                }
            }
            function rO(e, t) {
                if (!Array.isArray(t)) return !1
                let r = t.length
                if (r !== e.length) return !1
                for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1
                return !0
            }
            let rD = eO.length,
                r_ = [...eR].reverse(),
                rV = eR.length
            function rL(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {},
                }
            }
            function rN() {
                return {
                    animate: rL(!0),
                    whileInView: rL(),
                    whileHover: rL(),
                    whileTap: rL(),
                    whileDrag: rL(),
                    whileFocus: rL(),
                    exit: rL(),
                }
            }
            class rI {
                constructor(e) {
                    ;(this.isMounted = !1), (this.node = e)
                }
                update() {}
            }
            class rF extends rI {
                constructor(e) {
                    super(e),
                        e.animationState ||
                            (e.animationState = (function (e) {
                                let t = (t) =>
                                        Promise.all(
                                            t.map(
                                                ({
                                                    animation: t,
                                                    options: r,
                                                }) =>
                                                    (function (e, t, r = {}) {
                                                        let n
                                                        if (
                                                            (e.notify(
                                                                'AnimationStart',
                                                                t
                                                            ),
                                                            Array.isArray(t))
                                                        )
                                                            n = Promise.all(
                                                                t.map((t) =>
                                                                    rR(e, t, r)
                                                                )
                                                            )
                                                        else if (
                                                            'string' == typeof t
                                                        )
                                                            n = rR(e, t, r)
                                                        else {
                                                            let i =
                                                                'function' ==
                                                                typeof t
                                                                    ? tk(
                                                                          e,
                                                                          t,
                                                                          r.custom
                                                                      )
                                                                    : t
                                                            n = Promise.all(
                                                                rM(e, i, r)
                                                            )
                                                        }
                                                        return n.then(() => {
                                                            e.notify(
                                                                'AnimationComplete',
                                                                t
                                                            )
                                                        })
                                                    })(e, t, r)
                                            )
                                        ),
                                    r = rN(),
                                    n = !0,
                                    i = (t) => (r, n) => {
                                        let i = tk(
                                            e,
                                            n,
                                            'exit' === t
                                                ? e.presenceContext?.custom
                                                : void 0
                                        )
                                        if (i) {
                                            let {
                                                transition: e,
                                                transitionEnd: t,
                                                ...n
                                            } = i
                                            r = { ...r, ...n, ...t }
                                        }
                                        return r
                                    }
                                function o(o) {
                                    let { props: s } = e,
                                        a =
                                            (function e(t) {
                                                if (!t) return
                                                if (!t.isControllingVariants) {
                                                    let r =
                                                        (t.parent &&
                                                            e(t.parent)) ||
                                                        {}
                                                    return (
                                                        void 0 !==
                                                            t.props.initial &&
                                                            (r.initial =
                                                                t.props.initial),
                                                        r
                                                    )
                                                }
                                                let r = {}
                                                for (let e = 0; e < rD; e++) {
                                                    let n = eO[e],
                                                        i = t.props[n]
                                                    ;(ej(i) || !1 === i) &&
                                                        (r[n] = i)
                                                }
                                                return r
                                            })(e.parent) || {},
                                        l = [],
                                        u = new Set(),
                                        c = {},
                                        d = 1 / 0
                                    for (let t = 0; t < rV; t++) {
                                        var h, p
                                        let f = r_[t],
                                            m = r[f],
                                            g = void 0 !== s[f] ? s[f] : a[f],
                                            v = ej(g),
                                            y = f === o ? m.isActive : null
                                        !1 === y && (d = t)
                                        let b = g === a[f] && g !== s[f] && v
                                        if (
                                            (b &&
                                                n &&
                                                e.manuallyAnimateOnMount &&
                                                (b = !1),
                                            (m.protectedKeys = { ...c }),
                                            (!m.isActive && null === y) ||
                                                (!g && !m.prevProp) ||
                                                eM(g) ||
                                                'boolean' == typeof g)
                                        )
                                            continue
                                        let x =
                                                ((h = m.prevProp),
                                                'string' == typeof (p = g)
                                                    ? p !== h
                                                    : !!Array.isArray(p) &&
                                                      !rO(p, h)),
                                            w =
                                                x ||
                                                (f === o &&
                                                    m.isActive &&
                                                    !b &&
                                                    v) ||
                                                (t > d && v),
                                            k = !1,
                                            E = Array.isArray(g) ? g : [g],
                                            P = E.reduce(i(f), {})
                                        !1 === y && (P = {})
                                        let { prevResolvedValues: S = {} } = m,
                                            A = { ...S, ...P },
                                            T = (t) => {
                                                ;(w = !0),
                                                    u.has(t) &&
                                                        ((k = !0), u.delete(t)),
                                                    (m.needsAnimating[t] = !0)
                                                let r = e.getValue(t)
                                                r && (r.liveStyle = !1)
                                            }
                                        for (let e in A) {
                                            let t = P[e],
                                                r = S[e]
                                            if (!c.hasOwnProperty(e))
                                                (
                                                    tP(t) && tP(r)
                                                        ? rO(t, r)
                                                        : t === r
                                                )
                                                    ? void 0 !== t && u.has(e)
                                                        ? T(e)
                                                        : (m.protectedKeys[e] =
                                                              !0)
                                                    : null != t
                                                    ? T(e)
                                                    : u.add(e)
                                        }
                                        ;(m.prevProp = g),
                                            (m.prevResolvedValues = P),
                                            m.isActive && (c = { ...c, ...P }),
                                            n &&
                                                e.blockInitialAnimation &&
                                                (w = !1)
                                        let C = b && x,
                                            M = !C || k
                                        w &&
                                            M &&
                                            l.push(
                                                ...E.map((t) => {
                                                    let r = { type: f }
                                                    if (
                                                        'string' == typeof t &&
                                                        n &&
                                                        !C &&
                                                        e.manuallyAnimateOnMount &&
                                                        e.parent
                                                    ) {
                                                        let { parent: n } = e,
                                                            i = tk(n, t)
                                                        if (
                                                            n.enteringChildren &&
                                                            i
                                                        ) {
                                                            let {
                                                                delayChildren:
                                                                    t,
                                                            } =
                                                                i.transition ||
                                                                {}
                                                            r.delay = rj(
                                                                n.enteringChildren,
                                                                e,
                                                                t
                                                            )
                                                        }
                                                    }
                                                    return {
                                                        animation: t,
                                                        options: r,
                                                    }
                                                })
                                            )
                                    }
                                    if (u.size) {
                                        let t = {}
                                        if ('boolean' != typeof s.initial) {
                                            let r = tk(
                                                e,
                                                Array.isArray(s.initial)
                                                    ? s.initial[0]
                                                    : s.initial
                                            )
                                            r &&
                                                r.transition &&
                                                (t.transition = r.transition)
                                        }
                                        u.forEach((r) => {
                                            let n = e.getBaseTarget(r),
                                                i = e.getValue(r)
                                            i && (i.liveStyle = !0),
                                                (t[r] = n ?? null)
                                        }),
                                            l.push({ animation: t })
                                    }
                                    let f = !!l.length
                                    return (
                                        n &&
                                            (!1 === s.initial ||
                                                s.initial === s.animate) &&
                                            !e.manuallyAnimateOnMount &&
                                            (f = !1),
                                        (n = !1),
                                        f ? t(l) : Promise.resolve()
                                    )
                                }
                                return {
                                    animateChanges: o,
                                    setActive: function (t, n) {
                                        if (r[t].isActive === n)
                                            return Promise.resolve()
                                        e.variantChildren?.forEach((e) =>
                                            e.animationState?.setActive(t, n)
                                        ),
                                            (r[t].isActive = n)
                                        let i = o(t)
                                        for (let e in r) r[e].protectedKeys = {}
                                        return i
                                    },
                                    setAnimateFunction: function (r) {
                                        t = r(e)
                                    },
                                    getState: () => r,
                                    reset: () => {
                                        r = rN()
                                    },
                                }
                            })(e))
                }
                updateAnimationControlsSubscription() {
                    let { animate: e } = this.node.getProps()
                    eM(e) && (this.unmountControls = e.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let { animate: e } = this.node.getProps(),
                        { animate: t } = this.node.prevProps || {}
                    e !== t && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls?.()
                }
            }
            let rB = 0
            class rz extends rI {
                constructor() {
                    super(...arguments), (this.id = rB++)
                }
                update() {
                    if (!this.node.presenceContext) return
                    let { isPresent: e, onExitComplete: t } =
                            this.node.presenceContext,
                        { isPresent: r } = this.node.prevPresenceContext || {}
                    if (!this.node.animationState || e === r) return
                    let n = this.node.animationState.setActive('exit', !e)
                    t &&
                        !e &&
                        n.then(() => {
                            t(this.id)
                        })
                }
                mount() {
                    let { register: e, onExitComplete: t } =
                        this.node.presenceContext || {}
                    t && t(this.id), e && (this.unmount = e(this.id))
                }
                unmount() {}
            }
            let rW = { x: !1, y: !1 }
            function rU(e, t, r, n = { passive: !0 }) {
                return (
                    e.addEventListener(t, r, n),
                    () => e.removeEventListener(t, r)
                )
            }
            let rG = (e) =>
                'mouse' === e.pointerType
                    ? 'number' != typeof e.button || e.button <= 0
                    : !1 !== e.isPrimary
            function r$(e) {
                return { point: { x: e.pageX, y: e.pageY } }
            }
            function rK(e, t, r, n) {
                return rU(e, t, (e) => rG(e) && r(e, r$(e)), n)
            }
            function rq(e) {
                return e.max - e.min
            }
            function rH(e, t, r, n = 0.5) {
                ;(e.origin = n),
                    (e.originPoint = (0, y.k)(t.min, t.max, e.origin)),
                    (e.scale = rq(r) / rq(t)),
                    (e.translate =
                        (0, y.k)(r.min, r.max, e.origin) - e.originPoint),
                    ((e.scale >= 0.9999 && e.scale <= 1.0001) ||
                        isNaN(e.scale)) &&
                        (e.scale = 1),
                    ((e.translate >= -0.01 && e.translate <= 0.01) ||
                        isNaN(e.translate)) &&
                        (e.translate = 0)
            }
            function rX(e, t, r, n) {
                rH(e.x, t.x, r.x, n ? n.originX : void 0),
                    rH(e.y, t.y, r.y, n ? n.originY : void 0)
            }
            function rY(e, t, r) {
                ;(e.min = r.min + t.min), (e.max = e.min + rq(t))
            }
            function rQ(e, t, r) {
                ;(e.min = t.min - r.min), (e.max = e.min + rq(t))
            }
            function rZ(e, t, r) {
                rQ(e.x, t.x, r.x), rQ(e.y, t.y, r.y)
            }
            function rJ(e) {
                return [e('x'), e('y')]
            }
            let r0 = ({ current: e }) =>
                    e ? e.ownerDocument.defaultView : null,
                r1 = (e, t) => Math.abs(e - t)
            class r2 {
                constructor(
                    e,
                    t,
                    {
                        transformPagePoint: r,
                        contextWindow: n = window,
                        dragSnapToOrigin: i = !1,
                        distanceThreshold: o = 3,
                    } = {}
                ) {
                    if (
                        ((this.startEvent = null),
                        (this.lastMoveEvent = null),
                        (this.lastMoveEventInfo = null),
                        (this.handlers = {}),
                        (this.contextWindow = window),
                        (this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                                return
                            let e = r3(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                r =
                                    (function (e, t) {
                                        return Math.sqrt(
                                            r1(e.x, t.x) ** 2 +
                                                r1(e.y, t.y) ** 2
                                        )
                                    })(e.offset, { x: 0, y: 0 }) >=
                                    this.distanceThreshold
                            if (!t && !r) return
                            let { point: n } = e,
                                { timestamp: i } = U.uv
                            this.history.push({ ...n, timestamp: i })
                            let { onStart: o, onMove: s } = this.handlers
                            t ||
                                (o && o(this.lastMoveEvent, e),
                                (this.startEvent = this.lastMoveEvent)),
                                s && s(this.lastMoveEvent, e)
                        }),
                        (this.handlePointerMove = (e, t) => {
                            ;(this.lastMoveEvent = e),
                                (this.lastMoveEventInfo = r5(
                                    t,
                                    this.transformPagePoint
                                )),
                                U.Gt.update(this.updatePoint, !0)
                        }),
                        (this.handlePointerUp = (e, t) => {
                            this.end()
                            let {
                                onEnd: r,
                                onSessionEnd: n,
                                resumeAnimation: i,
                            } = this.handlers
                            if (
                                (this.dragSnapToOrigin && i && i(),
                                !(this.lastMoveEvent && this.lastMoveEventInfo))
                            )
                                return
                            let o = r3(
                                'pointercancel' === e.type
                                    ? this.lastMoveEventInfo
                                    : r5(t, this.transformPagePoint),
                                this.history
                            )
                            this.startEvent && r && r(e, o), n && n(e, o)
                        }),
                        !rG(e))
                    )
                        return
                    ;(this.dragSnapToOrigin = i),
                        (this.handlers = t),
                        (this.transformPagePoint = r),
                        (this.distanceThreshold = o),
                        (this.contextWindow = n || window)
                    let s = r5(r$(e), this.transformPagePoint),
                        { point: a } = s,
                        { timestamp: l } = U.uv
                    this.history = [{ ...a, timestamp: l }]
                    let { onSessionStart: u } = t
                    u && u(e, r3(s, this.history)),
                        (this.removeListeners = (0, tC.F)(
                            rK(
                                this.contextWindow,
                                'pointermove',
                                this.handlePointerMove
                            ),
                            rK(
                                this.contextWindow,
                                'pointerup',
                                this.handlePointerUp
                            ),
                            rK(
                                this.contextWindow,
                                'pointercancel',
                                this.handlePointerUp
                            )
                        ))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(),
                        (0, U.WG)(this.updatePoint)
                }
            }
            function r5(e, t) {
                return t ? { point: t(e.point) } : e
            }
            function r4(e, t) {
                return { x: e.x - t.x, y: e.y - t.y }
            }
            function r3({ point: e }, t) {
                return {
                    point: e,
                    delta: r4(e, r8(t)),
                    offset: r4(e, t[0]),
                    velocity: (function (e, t) {
                        if (e.length < 2) return { x: 0, y: 0 }
                        let r = e.length - 1,
                            n = null,
                            i = r8(e)
                        for (
                            ;
                            r >= 0 &&
                            ((n = e[r]),
                            !(i.timestamp - n.timestamp > tj(0.1)));

                        )
                            r--
                        if (!n) return { x: 0, y: 0 }
                        let o = (i.timestamp - n.timestamp) / 1e3
                        if (0 === o) return { x: 0, y: 0 }
                        let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o }
                        return (
                            s.x === 1 / 0 && (s.x = 0),
                            s.y === 1 / 0 && (s.y = 0),
                            s
                        )
                    })(t, 0.1),
                }
            }
            function r8(e) {
                return e[e.length - 1]
            }
            var r6 = r(1225)
            function r9(e, t, r) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
                }
            }
            function r7(e, t) {
                let r = t.min - e.min,
                    n = t.max - e.max
                return (
                    t.max - t.min < e.max - e.min && ([r, n] = [n, r]),
                    { min: r, max: n }
                )
            }
            function ne(e, t, r) {
                return { min: nt(e, t), max: nt(e, r) }
            }
            function nt(e, t) {
                return 'number' == typeof e ? e : e[t] || 0
            }
            let nr = new WeakMap()
            class nn {
                constructor(e) {
                    ;(this.openDragLock = null),
                        (this.isDragging = !1),
                        (this.currentDirection = null),
                        (this.originPoint = { x: 0, y: 0 }),
                        (this.constraints = !1),
                        (this.hasMutatedConstraints = !1),
                        (this.elastic = eP()),
                        (this.latestPointerEvent = null),
                        (this.latestPanInfo = null),
                        (this.visualElement = e)
                }
                start(e, { snapToCursor: t = !1, distanceThreshold: r } = {}) {
                    let { presenceContext: n } = this.visualElement
                    if (n && !1 === n.isPresent) return
                    let i = (e) => {
                            let { dragSnapToOrigin: r } = this.getProps()
                            r ? this.pauseAnimation() : this.stopAnimation(),
                                t && this.snapToCursor(r$(e).point)
                        },
                        o = (e, t) => {
                            let {
                                drag: r,
                                dragPropagation: n,
                                onDragStart: i,
                            } = this.getProps()
                            if (
                                r &&
                                !n &&
                                (this.openDragLock && this.openDragLock(),
                                (this.openDragLock = (function (e) {
                                    if ('x' === e || 'y' === e)
                                        if (rW[e]) return null
                                        else
                                            return (
                                                (rW[e] = !0),
                                                () => {
                                                    rW[e] = !1
                                                }
                                            )
                                    return rW.x || rW.y
                                        ? null
                                        : ((rW.x = rW.y = !0),
                                          () => {
                                              rW.x = rW.y = !1
                                          })
                                })(r)),
                                !this.openDragLock)
                            )
                                return
                            ;(this.latestPointerEvent = e),
                                (this.latestPanInfo = t),
                                (this.isDragging = !0),
                                (this.currentDirection = null),
                                this.resolveConstraints(),
                                this.visualElement.projection &&
                                    ((this.visualElement.projection.isAnimationBlocked =
                                        !0),
                                    (this.visualElement.projection.target =
                                        void 0)),
                                rJ((e) => {
                                    let t =
                                        this.getAxisMotionValue(e).get() || 0
                                    if (O.KN.test(t)) {
                                        let { projection: r } =
                                            this.visualElement
                                        if (r && r.layout) {
                                            let n = r.layout.layoutBox[e]
                                            n &&
                                                (t =
                                                    rq(n) *
                                                    (parseFloat(t) / 100))
                                        }
                                    }
                                    this.originPoint[e] = t
                                }),
                                i && U.Gt.postRender(() => i(e, t)),
                                tA(this.visualElement, 'transform')
                            let { animationState: o } = this.visualElement
                            o && o.setActive('whileDrag', !0)
                        },
                        s = (e, t) => {
                            ;(this.latestPointerEvent = e),
                                (this.latestPanInfo = t)
                            let {
                                dragPropagation: r,
                                dragDirectionLock: n,
                                onDirectionLock: i,
                                onDrag: o,
                            } = this.getProps()
                            if (!r && !this.openDragLock) return
                            let { offset: s } = t
                            if (n && null === this.currentDirection) {
                                ;(this.currentDirection = (function (
                                    e,
                                    t = 10
                                ) {
                                    let r = null
                                    return (
                                        Math.abs(e.y) > t
                                            ? (r = 'y')
                                            : Math.abs(e.x) > t && (r = 'x'),
                                        r
                                    )
                                })(s)),
                                    null !== this.currentDirection &&
                                        i &&
                                        i(this.currentDirection)
                                return
                            }
                            this.updateAxis('x', t.point, s),
                                this.updateAxis('y', t.point, s),
                                this.visualElement.render(),
                                o && o(e, t)
                        },
                        a = (e, t) => {
                            ;(this.latestPointerEvent = e),
                                (this.latestPanInfo = t),
                                this.stop(e, t),
                                (this.latestPointerEvent = null),
                                (this.latestPanInfo = null)
                        },
                        l = () =>
                            rJ(
                                (e) =>
                                    'paused' === this.getAnimationState(e) &&
                                    this.getAxisMotionValue(e).animation?.play()
                            ),
                        { dragSnapToOrigin: u } = this.getProps()
                    this.panSession = new r2(
                        e,
                        {
                            onSessionStart: i,
                            onStart: o,
                            onMove: s,
                            onSessionEnd: a,
                            resumeAnimation: l,
                        },
                        {
                            transformPagePoint:
                                this.visualElement.getTransformPagePoint(),
                            dragSnapToOrigin: u,
                            distanceThreshold: r,
                            contextWindow: r0(this.visualElement),
                        }
                    )
                }
                stop(e, t) {
                    let r = e || this.latestPointerEvent,
                        n = t || this.latestPanInfo,
                        i = this.isDragging
                    if ((this.cancel(), !i || !n || !r)) return
                    let { velocity: o } = n
                    this.startAnimation(o)
                    let { onDragEnd: s } = this.getProps()
                    s && U.Gt.postRender(() => s(r, n))
                }
                cancel() {
                    this.isDragging = !1
                    let { projection: e, animationState: t } =
                        this.visualElement
                    e && (e.isAnimationBlocked = !1),
                        this.panSession && this.panSession.end(),
                        (this.panSession = void 0)
                    let { dragPropagation: r } = this.getProps()
                    !r &&
                        this.openDragLock &&
                        (this.openDragLock(), (this.openDragLock = null)),
                        t && t.setActive('whileDrag', !1)
                }
                updateAxis(e, t, r) {
                    let { drag: n } = this.getProps()
                    if (!r || !ni(e, n, this.currentDirection)) return
                    let i = this.getAxisMotionValue(e),
                        o = this.originPoint[e] + r[e]
                    this.constraints &&
                        this.constraints[e] &&
                        (o = (function (e, { min: t, max: r }, n) {
                            return (
                                void 0 !== t && e < t
                                    ? (e = n
                                          ? (0, y.k)(t, e, n.min)
                                          : Math.max(e, t))
                                    : void 0 !== r &&
                                      e > r &&
                                      (e = n
                                          ? (0, y.k)(r, e, n.max)
                                          : Math.min(e, r)),
                                e
                            )
                        })(o, this.constraints[e], this.elastic[e])),
                        i.set(o)
                }
                resolveConstraints() {
                    let { dragConstraints: e, dragElastic: t } =
                            this.getProps(),
                        r =
                            this.visualElement.projection &&
                            !this.visualElement.projection.layout
                                ? this.visualElement.projection.measure(!1)
                                : this.visualElement.projection?.layout,
                        n = this.constraints
                    e && tv(e)
                        ? this.constraints ||
                          (this.constraints = this.resolveRefConstraints())
                        : e && r
                        ? (this.constraints = (function (
                              e,
                              { top: t, left: r, bottom: n, right: i }
                          ) {
                              return { x: r9(e.x, r, i), y: r9(e.y, t, n) }
                          })(r.layoutBox, e))
                        : (this.constraints = !1),
                        (this.elastic = (function (e = 0.35) {
                            return (
                                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                                {
                                    x: ne(e, 'left', 'right'),
                                    y: ne(e, 'top', 'bottom'),
                                }
                            )
                        })(t)),
                        n !== this.constraints &&
                            r &&
                            this.constraints &&
                            !this.hasMutatedConstraints &&
                            rJ((e) => {
                                !1 !== this.constraints &&
                                    this.getAxisMotionValue(e) &&
                                    (this.constraints[e] = (function (e, t) {
                                        let r = {}
                                        return (
                                            void 0 !== t.min &&
                                                (r.min = t.min - e.min),
                                            void 0 !== t.max &&
                                                (r.max = t.max - e.min),
                                            r
                                        )
                                    })(r.layoutBox[e], this.constraints[e]))
                            })
                }
                resolveRefConstraints() {
                    var e
                    let { dragConstraints: t, onMeasureDragConstraints: r } =
                        this.getProps()
                    if (!t || !tv(t)) return !1
                    let n = t.current
                    ;(0, L.V)(
                        null !== n,
                        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
                        'drag-constraints-ref'
                    )
                    let { projection: i } = this.visualElement
                    if (!i || !i.layout) return !1
                    let o = (function (e, t, r) {
                            let n = M(e, r),
                                { scroll: i } = t
                            return (
                                i && (A(n.x, i.offset.x), A(n.y, i.offset.y)), n
                            )
                        })(
                            n,
                            i.root,
                            this.visualElement.getTransformPagePoint()
                        ),
                        s =
                            ((e = i.layout.layoutBox),
                            { x: r7(e.x, o.x), y: r7(e.y, o.y) })
                    if (r) {
                        let e = r(
                            (function ({ x: e, y: t }) {
                                return {
                                    top: t.min,
                                    right: e.max,
                                    bottom: t.max,
                                    left: e.min,
                                }
                            })(s)
                        )
                        ;(this.hasMutatedConstraints = !!e), e && (s = v(e))
                    }
                    return s
                }
                startAnimation(e) {
                    let {
                            drag: t,
                            dragMomentum: r,
                            dragElastic: n,
                            dragTransition: i,
                            dragSnapToOrigin: o,
                            onDragTransitionEnd: s,
                        } = this.getProps(),
                        a = this.constraints || {}
                    return Promise.all(
                        rJ((s) => {
                            if (!ni(s, t, this.currentDirection)) return
                            let l = (a && a[s]) || {}
                            o && (l = { min: 0, max: 0 })
                            let u = {
                                type: 'inertia',
                                velocity: r ? e[s] : 0,
                                bounceStiffness: n ? 200 : 1e6,
                                bounceDamping: n ? 40 : 1e7,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                                ...i,
                                ...l,
                            }
                            return this.startAxisValueAnimation(s, u)
                        })
                    ).then(s)
                }
                startAxisValueAnimation(e, t) {
                    let r = this.getAxisMotionValue(e)
                    return (
                        tA(this.visualElement, e),
                        r.start(rC(e, r, 0, t, this.visualElement, !1))
                    )
                }
                stopAnimation() {
                    rJ((e) => this.getAxisMotionValue(e).stop())
                }
                pauseAnimation() {
                    rJ((e) => this.getAxisMotionValue(e).animation?.pause())
                }
                getAnimationState(e) {
                    return this.getAxisMotionValue(e).animation?.state
                }
                getAxisMotionValue(e) {
                    let t = `_drag${e.toUpperCase()}`,
                        r = this.visualElement.getProps()
                    return (
                        r[t] ||
                        this.visualElement.getValue(
                            e,
                            (r.initial ? r.initial[e] : void 0) || 0
                        )
                    )
                }
                snapToCursor(e) {
                    rJ((t) => {
                        let { drag: r } = this.getProps()
                        if (!ni(t, r, this.currentDirection)) return
                        let { projection: n } = this.visualElement,
                            i = this.getAxisMotionValue(t)
                        if (n && n.layout) {
                            let { min: r, max: o } = n.layout.layoutBox[t]
                            i.set(e[t] - (0, y.k)(r, o, 0.5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return
                    let { drag: e, dragConstraints: t } = this.getProps(),
                        { projection: r } = this.visualElement
                    if (!tv(t) || !r || !this.constraints) return
                    this.stopAnimation()
                    let n = { x: 0, y: 0 }
                    rJ((e) => {
                        let t = this.getAxisMotionValue(e)
                        if (t && !1 !== this.constraints) {
                            let r = t.get()
                            n[e] = (function (e, t) {
                                let r = 0.5,
                                    n = rq(e),
                                    i = rq(t)
                                return (
                                    i > n
                                        ? (r = (0, r6.q)(
                                              t.min,
                                              t.max - n,
                                              e.min
                                          ))
                                        : n > i &&
                                          (r = (0, r6.q)(
                                              e.min,
                                              e.max - i,
                                              t.min
                                          )),
                                    (0, tM.q)(0, 1, r)
                                )
                            })({ min: r, max: r }, this.constraints[e])
                        }
                    })
                    let { transformTemplate: i } = this.visualElement.getProps()
                    ;(this.visualElement.current.style.transform = i
                        ? i({}, '')
                        : 'none'),
                        r.root && r.root.updateScroll(),
                        r.updateLayout(),
                        this.resolveConstraints(),
                        rJ((t) => {
                            if (!ni(t, e, null)) return
                            let r = this.getAxisMotionValue(t),
                                { min: i, max: o } = this.constraints[t]
                            r.set((0, y.k)(i, o, n[t]))
                        })
                }
                addListeners() {
                    if (!this.visualElement.current) return
                    nr.set(this.visualElement, this)
                    let e = rK(
                            this.visualElement.current,
                            'pointerdown',
                            (e) => {
                                let { drag: t, dragListener: r = !0 } =
                                    this.getProps()
                                t && r && this.start(e)
                            }
                        ),
                        t = () => {
                            let { dragConstraints: e } = this.getProps()
                            tv(e) &&
                                e.current &&
                                (this.constraints =
                                    this.resolveRefConstraints())
                        },
                        { projection: r } = this.visualElement,
                        n = r.addEventListener('measure', t)
                    r &&
                        !r.layout &&
                        (r.root && r.root.updateScroll(), r.updateLayout()),
                        U.Gt.read(t)
                    let i = rU(window, 'resize', () =>
                            this.scalePositionWithinConstraints()
                        ),
                        o = r.addEventListener(
                            'didUpdate',
                            ({ delta: e, hasLayoutChanged: t }) => {
                                this.isDragging &&
                                    t &&
                                    (rJ((t) => {
                                        let r = this.getAxisMotionValue(t)
                                        r &&
                                            ((this.originPoint[t] +=
                                                e[t].translate),
                                            r.set(r.get() + e[t].translate))
                                    }),
                                    this.visualElement.render())
                            }
                        )
                    return () => {
                        i(), e(), n(), o && o()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: r = !1,
                            dragPropagation: n = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = 0.35,
                            dragMomentum: s = !0,
                        } = e
                    return {
                        ...e,
                        drag: t,
                        dragDirectionLock: r,
                        dragPropagation: n,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: s,
                    }
                }
            }
            function ni(e, t, r) {
                return (!0 === t || t === e) && (null === r || r === e)
            }
            class no extends rI {
                constructor(e) {
                    super(e),
                        (this.removeGroupControls = t$.l),
                        (this.removeListeners = t$.l),
                        (this.controls = new nn(e))
                }
                mount() {
                    let { dragControls: e } = this.node.getProps()
                    e &&
                        (this.removeGroupControls = e.subscribe(this.controls)),
                        (this.removeListeners =
                            this.controls.addListeners() || t$.l)
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let ns = (e) => (t, r) => {
                e && U.Gt.postRender(() => e(t, r))
            }
            class na extends rI {
                constructor() {
                    super(...arguments), (this.removePointerDownListener = t$.l)
                }
                onPointerDown(e) {
                    this.session = new r2(e, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: r0(this.node),
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: e,
                        onPanStart: t,
                        onPan: r,
                        onPanEnd: n,
                    } = this.node.getProps()
                    return {
                        onSessionStart: ns(e),
                        onStart: ns(t),
                        onMove: r,
                        onEnd: (e, t) => {
                            delete this.session,
                                n && U.Gt.postRender(() => n(e, t))
                        },
                    }
                }
                mount() {
                    this.removePointerDownListener = rK(
                        this.node.current,
                        'pointerdown',
                        (e) => this.onPointerDown(e)
                    )
                }
                update() {
                    this.session &&
                        this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(),
                        this.session && this.session.end()
                }
            }
            var nl = r(5601)
            let nu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
            function nc(e, t) {
                return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
            }
            let nd = {
                    correct: (e, t) => {
                        if (!t.target) return e
                        if ('string' == typeof e)
                            if (!O.px.test(e)) return e
                            else e = parseFloat(e)
                        let r = nc(e, t.target.x),
                            n = nc(e, t.target.y)
                        return `${r}% ${n}%`
                    },
                },
                nh = !1
            class np extends n.Component {
                componentDidMount() {
                    let {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: r,
                            layoutId: n,
                        } = this.props,
                        { projection: i } = e
                    for (let e in nm)
                        (e$[e] = nm[e]),
                            (0, g.j)(e) && (e$[e].isCSSVariable = !0)
                    i &&
                        (t.group && t.group.add(i),
                        r && r.register && n && r.register(i),
                        nh && i.root.didUpdate(),
                        i.addEventListener('animationComplete', () => {
                            this.safeToRemove()
                        }),
                        i.setOptions(
                            (0, e8._)((0, e3._)({}, i.options), {
                                onExitComplete: () => this.safeToRemove(),
                            })
                        )),
                        (nu.hasEverUpdated = !0)
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                            layoutDependency: t,
                            visualElement: r,
                            drag: n,
                            isPresent: i,
                        } = this.props,
                        { projection: o } = r
                    return (
                        o &&
                            ((o.isPresent = i),
                            (nh = !0),
                            n ||
                            e.layoutDependency !== t ||
                            void 0 === t ||
                            e.isPresent !== i
                                ? o.willUpdate()
                                : this.safeToRemove(),
                            e.isPresent !== i &&
                                (i
                                    ? o.promote()
                                    : o.relegate() ||
                                      U.Gt.postRender(() => {
                                          let e = o.getStack()
                                          ;(e && e.members.length) ||
                                              this.safeToRemove()
                                      }))),
                        null
                    )
                }
                componentDidUpdate() {
                    let { projection: e } = this.props.visualElement
                    e &&
                        (e.root.didUpdate(),
                        ev.postRender(() => {
                            !e.currentAnimation &&
                                e.isLead() &&
                                this.safeToRemove()
                        }))
                }
                componentWillUnmount() {
                    let {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: r,
                        } = this.props,
                        { projection: n } = e
                    ;(nh = !0),
                        n &&
                            (n.scheduleCheckAfterUnmount(),
                            t && t.group && t.group.remove(n),
                            r && r.deregister && r.deregister(n))
                }
                safeToRemove() {
                    let { safeToRemove: e } = this.props
                    e && e()
                }
                render() {
                    return null
                }
            }
            function nf(e) {
                let [t, r] = (0, nl.xQ)(),
                    i = (0, n.useContext)(e9.L)
                return (0, e6.jsx)(
                    np,
                    (0, e8._)((0, e3._)({}, e), {
                        layoutGroup: i,
                        switchLayoutGroup: (0, n.useContext)(tb),
                        isPresent: t,
                        safeToRemove: r,
                    })
                )
            }
            let nm = {
                borderRadius: (0, e8._)((0, e3._)({}, nd), {
                    applyTo: [
                        'borderTopLeftRadius',
                        'borderTopRightRadius',
                        'borderBottomLeftRadius',
                        'borderBottomRightRadius',
                    ],
                }),
                borderTopLeftRadius: nd,
                borderTopRightRadius: nd,
                borderBottomLeftRadius: nd,
                borderBottomRightRadius: nd,
                boxShadow: {
                    correct: (e, { treeScale: t, projectionDelta: r }) => {
                        let n = Z.f.parse(e)
                        if (n.length > 5) return e
                        let i = Z.f.createTransformer(e),
                            o = +('number' != typeof n[0]),
                            s = r.x.scale * t.x,
                            a = r.y.scale * t.y
                        ;(n[0 + o] /= s), (n[1 + o] /= a)
                        let l = (0, y.k)(s, a, 0.5)
                        return (
                            'number' == typeof n[2 + o] && (n[2 + o] /= l),
                            'number' == typeof n[3 + o] && (n[3 + o] /= l),
                            i(n)
                        )
                    },
                },
            }
            var ng = r(9089),
                nv = r(6105)
            let ny = (e, t) => e.depth - t.depth
            class nb {
                constructor() {
                    ;(this.children = []), (this.isDirty = !1)
                }
                add(e) {
                    ;(0, nv.Kq)(this.children, e), (this.isDirty = !0)
                }
                remove(e) {
                    ;(0, nv.Ai)(this.children, e), (this.isDirty = !0)
                }
                forEach(e) {
                    this.isDirty && this.children.sort(ny),
                        (this.isDirty = !1),
                        this.children.forEach(e)
                }
            }
            let nx = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
                nw = nx.length,
                nk = (e) => ('string' == typeof e ? parseFloat(e) : e),
                nE = (e) => 'number' == typeof e || O.px.test(e)
            function nP(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let nS = nT(0, 0.5, t4),
                nA = nT(0.5, 0.95, t$.l)
            function nT(e, t, r) {
                return (n) => (n < e ? 0 : n > t ? 1 : r((0, r6.q)(e, t, n)))
            }
            function nC(e, t) {
                ;(e.min = t.min), (e.max = t.max)
            }
            function nM(e, t) {
                nC(e.x, t.x), nC(e.y, t.y)
            }
            function nj(e, t) {
                ;(e.translate = t.translate),
                    (e.scale = t.scale),
                    (e.originPoint = t.originPoint),
                    (e.origin = t.origin)
            }
            function nR(e, t, r, n, i) {
                return (
                    (e -= t),
                    (e = n + (1 / r) * (e - n)),
                    void 0 !== i && (e = n + (1 / i) * (e - n)),
                    e
                )
            }
            function nO(e, t, [r, n, i], o, s) {
                !(function (e, t = 0, r = 1, n = 0.5, i, o = e, s = e) {
                    if (
                        (O.KN.test(t) &&
                            ((t = parseFloat(t)),
                            (t = (0, y.k)(s.min, s.max, t / 100) - s.min)),
                        'number' != typeof t)
                    )
                        return
                    let a = (0, y.k)(o.min, o.max, n)
                    e === o && (a -= t),
                        (e.min = nR(e.min, t, r, a, i)),
                        (e.max = nR(e.max, t, r, a, i))
                })(e, t[r], t[n], t[i], t.scale, o, s)
            }
            let nD = ['x', 'scaleX', 'originX'],
                n_ = ['y', 'scaleY', 'originY']
            function nV(e, t, r, n) {
                nO(e.x, t, nD, r ? r.x : void 0, n ? n.x : void 0),
                    nO(e.y, t, n_, r ? r.y : void 0, n ? n.y : void 0)
            }
            function nL(e) {
                return 0 === e.translate && 1 === e.scale
            }
            function nN(e) {
                return nL(e.x) && nL(e.y)
            }
            function nI(e, t) {
                return e.min === t.min && e.max === t.max
            }
            function nF(e, t) {
                return (
                    Math.round(e.min) === Math.round(t.min) &&
                    Math.round(e.max) === Math.round(t.max)
                )
            }
            function nB(e, t) {
                return nF(e.x, t.x) && nF(e.y, t.y)
            }
            function nz(e) {
                return rq(e.x) / rq(e.y)
            }
            function nW(e, t) {
                return (
                    e.translate === t.translate &&
                    e.scale === t.scale &&
                    e.originPoint === t.originPoint
                )
            }
            class nU {
                constructor() {
                    this.members = []
                }
                add(e) {
                    ;(0, nv.Kq)(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (
                        ((0, nv.Ai)(this.members, e),
                        e === this.prevLead && (this.prevLead = void 0),
                        e === this.lead)
                    ) {
                        let e = this.members[this.members.length - 1]
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t,
                        r = this.members.findIndex((t) => e === t)
                    if (0 === r) return !1
                    for (let e = r; e >= 0; e--) {
                        let r = this.members[e]
                        if (!1 !== r.isPresent) {
                            t = r
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    let r = this.lead
                    if (
                        e !== r &&
                        ((this.prevLead = r), (this.lead = e), e.show(), r)
                    ) {
                        r.instance && r.scheduleRender(),
                            e.scheduleRender(),
                            (e.resumeFrom = r),
                            t && (e.resumeFrom.preserveOpacity = !0),
                            r.snapshot &&
                                ((e.snapshot = r.snapshot),
                                (e.snapshot.latestValues =
                                    r.animationValues || r.latestValues)),
                            e.root &&
                                e.root.isUpdating &&
                                (e.isLayoutDirty = !0)
                        let { crossfade: n } = e.options
                        !1 === n && r.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((e) => {
                        let { options: t, resumingFrom: r } = e
                        t.onExitComplete && t.onExitComplete(),
                            r &&
                                r.options.onExitComplete &&
                                r.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach((e) => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead &&
                        this.lead.snapshot &&
                        (this.lead.snapshot = void 0)
                }
            }
            let nG = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0,
                },
                n$ = ['', 'X', 'Y', 'Z'],
                nK = 0
            function nq(e, t, r, n) {
                let { latestValues: i } = t
                i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0))
            }
            function nH({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: r,
                checkIsScrollRoot: n,
                resetTransform: i,
            }) {
                return class {
                    constructor(e = {}, r = t?.()) {
                        ;(this.id = nK++),
                            (this.animationId = 0),
                            (this.animationCommitId = 0),
                            (this.children = new Set()),
                            (this.options = {}),
                            (this.isTreeAnimating = !1),
                            (this.isAnimationBlocked = !1),
                            (this.isLayoutDirty = !1),
                            (this.isProjectionDirty = !1),
                            (this.isSharedProjectionDirty = !1),
                            (this.isTransformDirty = !1),
                            (this.updateManuallyBlocked = !1),
                            (this.updateBlockedByResize = !1),
                            (this.isUpdating = !1),
                            (this.isSVG = !1),
                            (this.needsReset = !1),
                            (this.shouldResetTransform = !1),
                            (this.hasCheckedOptimisedAppear = !1),
                            (this.treeScale = { x: 1, y: 1 }),
                            (this.eventHandlers = new Map()),
                            (this.hasTreeAnimated = !1),
                            (this.layoutVersion = 0),
                            (this.updateScheduled = !1),
                            (this.scheduleUpdate = () => this.update()),
                            (this.projectionUpdateScheduled = !1),
                            (this.checkUpdateFailed = () => {
                                this.isUpdating &&
                                    ((this.isUpdating = !1),
                                    this.clearAllSnapshots())
                            }),
                            (this.updateProjection = () => {
                                ;(this.projectionUpdateScheduled = !1),
                                    rc.Q.value &&
                                        (nG.nodes =
                                            nG.calculatedTargetDeltas =
                                            nG.calculatedProjections =
                                                0),
                                    this.nodes.forEach(nQ),
                                    this.nodes.forEach(n4),
                                    this.nodes.forEach(n3),
                                    this.nodes.forEach(nZ),
                                    rc.Q.addProjectionMetrics &&
                                        rc.Q.addProjectionMetrics(nG)
                            }),
                            (this.resolvedRelativeTargetAt = 0),
                            (this.linkedParentVersion = 0),
                            (this.hasProjected = !1),
                            (this.isVisible = !0),
                            (this.animationProgress = 0),
                            (this.sharedNodes = new Map()),
                            (this.latestValues = e),
                            (this.root = r ? r.root || r : this),
                            (this.path = r ? [...r.path, r] : []),
                            (this.parent = r),
                            (this.depth = r ? r.depth + 1 : 0)
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].shouldResetTransform = !0
                        this.root === this && (this.nodes = new nb())
                    }
                    addEventListener(e, t) {
                        return (
                            this.eventHandlers.has(e) ||
                                this.eventHandlers.set(e, new ey.v()),
                            this.eventHandlers.get(e).add(t)
                        )
                    }
                    notifyListeners(e, ...t) {
                        let r = this.eventHandlers.get(e)
                        r && r.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    mount(t) {
                        if (this.instance) return
                        ;(this.isSVG =
                            (0, ng.x)(t) &&
                            (!(0, ng.x)(t) || 'svg' !== t.tagName)),
                            (this.instance = t)
                        let {
                            layoutId: r,
                            layout: n,
                            visualElement: i,
                        } = this.options
                        if (
                            (i && !i.current && i.mount(t),
                            this.root.nodes.add(this),
                            this.parent && this.parent.children.add(this),
                            this.root.hasTreeAnimated &&
                                (n || r) &&
                                (this.isLayoutDirty = !0),
                            e)
                        ) {
                            let r,
                                n = 0,
                                i = () => (this.root.updateBlockedByResize = !1)
                            U.Gt.read(() => {
                                n = window.innerWidth
                            }),
                                e(t, () => {
                                    let e = window.innerWidth
                                    e !== n &&
                                        ((n = e),
                                        (this.root.updateBlockedByResize = !0),
                                        r && r(),
                                        (r = (function (e, t) {
                                            let r = ef.k.now(),
                                                n = ({ timestamp: t }) => {
                                                    let i = t - r
                                                    i >= 250 &&
                                                        ((0, U.WG)(n),
                                                        e(i - 250))
                                                }
                                            return (
                                                U.Gt.setup(n, !0),
                                                () => (0, U.WG)(n)
                                            )
                                        })(i, 250)),
                                        nu.hasAnimatedSinceResize &&
                                            ((nu.hasAnimatedSinceResize = !1),
                                            this.nodes.forEach(n5)))
                                })
                        }
                        r && this.root.registerSharedNode(r, this),
                            !1 !== this.options.animate &&
                                i &&
                                (r || n) &&
                                this.addEventListener(
                                    'didUpdate',
                                    ({
                                        delta: e,
                                        hasLayoutChanged: t,
                                        hasRelativeLayoutChanged: r,
                                        layout: n,
                                    }) => {
                                        if (this.isTreeAnimationBlocked()) {
                                            ;(this.target = void 0),
                                                (this.relativeTarget = void 0)
                                            return
                                        }
                                        let o =
                                                this.options.transition ||
                                                i.getDefaultTransition() ||
                                                it,
                                            {
                                                onLayoutAnimationStart: s,
                                                onLayoutAnimationComplete: a,
                                            } = i.getProps(),
                                            l =
                                                !this.targetLayout ||
                                                !nB(this.targetLayout, n),
                                            u = !t && r
                                        if (
                                            this.options.layoutRoot ||
                                            this.resumeFrom ||
                                            u ||
                                            (t && (l || !this.currentAnimation))
                                        ) {
                                            this.resumeFrom &&
                                                ((this.resumingFrom =
                                                    this.resumeFrom),
                                                (this.resumingFrom.resumingFrom =
                                                    void 0))
                                            let t = {
                                                ...tE(o, 'layout'),
                                                onPlay: s,
                                                onComplete: a,
                                            }
                                            ;(i.shouldReduceMotion ||
                                                this.options.layoutRoot) &&
                                                ((t.delay = 0), (t.type = !1)),
                                                this.startAnimation(t),
                                                this.setAnimationOrigin(e, u)
                                        } else
                                            t || n5(this),
                                                this.isLead() &&
                                                    this.options
                                                        .onExitComplete &&
                                                    this.options.onExitComplete()
                                        this.targetLayout = n
                                    }
                                )
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(),
                            this.root.nodes.remove(this)
                        let e = this.getStack()
                        e && e.remove(this),
                            this.parent && this.parent.children.delete(this),
                            (this.instance = void 0),
                            this.eventHandlers.clear(),
                            (0, U.WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return (
                            this.updateManuallyBlocked ||
                            this.updateBlockedByResize
                        )
                    }
                    isTreeAnimationBlocked() {
                        return (
                            this.isAnimationBlocked ||
                            (this.parent &&
                                this.parent.isTreeAnimationBlocked()) ||
                            !1
                        )
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() &&
                            ((this.isUpdating = !0),
                            this.nodes && this.nodes.forEach(n8),
                            this.animationId++)
                    }
                    getTransformTemplate() {
                        let { visualElement: e } = this.options
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (
                            ((this.root.hasTreeAnimated = !0),
                            this.root.isUpdateBlocked())
                        ) {
                            this.options.onExitComplete &&
                                this.options.onExitComplete()
                            return
                        }
                        if (
                            (window.MotionCancelOptimisedAnimation &&
                                !this.hasCheckedOptimisedAppear &&
                                (function e(t) {
                                    if (
                                        ((t.hasCheckedOptimisedAppear = !0),
                                        t.root === t)
                                    )
                                        return
                                    let { visualElement: r } = t.options
                                    if (!r) return
                                    let n = r.props[ty]
                                    if (
                                        window.MotionHasOptimisedAnimation(
                                            n,
                                            'transform'
                                        )
                                    ) {
                                        let { layout: e, layoutId: r } =
                                            t.options
                                        window.MotionCancelOptimisedAnimation(
                                            n,
                                            'transform',
                                            U.Gt,
                                            !(e || r)
                                        )
                                    }
                                    let { parent: i } = t
                                    i && !i.hasCheckedOptimisedAppear && e(i)
                                })(this),
                            this.root.isUpdating || this.root.startUpdate(),
                            this.isLayoutDirty)
                        )
                            return
                        this.isLayoutDirty = !0
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e]
                            ;(t.shouldResetTransform = !0),
                                t.updateScroll('snapshot'),
                                t.options.layoutRoot && t.willUpdate(!1)
                        }
                        let { layoutId: t, layout: r } = this.options
                        if (void 0 === t && !r) return
                        let n = this.getTransformTemplate()
                        ;(this.prevTransformTemplateValue = n
                            ? n(this.latestValues, '')
                            : void 0),
                            this.updateSnapshot(),
                            e && this.notifyListeners('willUpdate')
                    }
                    update() {
                        if (
                            ((this.updateScheduled = !1),
                            this.isUpdateBlocked())
                        ) {
                            this.unblockUpdate(),
                                this.clearAllSnapshots(),
                                this.nodes.forEach(n0)
                            return
                        }
                        if (this.animationId <= this.animationCommitId)
                            return void this.nodes.forEach(n1)
                        ;(this.animationCommitId = this.animationId),
                            this.isUpdating
                                ? ((this.isUpdating = !1),
                                  this.nodes.forEach(n2),
                                  this.nodes.forEach(nX),
                                  this.nodes.forEach(nY))
                                : this.nodes.forEach(n1),
                            this.clearAllSnapshots()
                        let e = ef.k.now()
                        ;(U.uv.delta = (0, tM.q)(
                            0,
                            1e3 / 60,
                            e - U.uv.timestamp
                        )),
                            (U.uv.timestamp = e),
                            (U.uv.isProcessing = !0),
                            U.PP.update.process(U.uv),
                            U.PP.preRender.process(U.uv),
                            U.PP.render.process(U.uv),
                            (U.uv.isProcessing = !1)
                    }
                    didUpdate() {
                        this.updateScheduled ||
                            ((this.updateScheduled = !0),
                            ev.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nJ), this.sharedNodes.forEach(n6)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled ||
                            ((this.projectionUpdateScheduled = !0),
                            U.Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        U.Gt.postRender(() => {
                            this.isLayoutDirty
                                ? this.root.didUpdate()
                                : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot &&
                            this.instance &&
                            ((this.snapshot = this.measure()),
                            !this.snapshot ||
                                rq(this.snapshot.measuredBox.x) ||
                                rq(this.snapshot.measuredBox.y) ||
                                (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (
                            !this.instance ||
                            (this.updateScroll(),
                            !(
                                this.options.alwaysMeasureLayout &&
                                this.isLead()
                            ) && !this.isLayoutDirty)
                        )
                            return
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++)
                                this.path[e].updateScroll()
                        let e = this.layout
                        ;(this.layout = this.measure(!1)),
                            this.layoutVersion++,
                            (this.layoutCorrected = eP()),
                            (this.isLayoutDirty = !1),
                            (this.projectionDelta = void 0),
                            this.notifyListeners(
                                'measure',
                                this.layout.layoutBox
                            )
                        let { visualElement: t } = this.options
                        t &&
                            t.notify(
                                'LayoutMeasure',
                                this.layout.layoutBox,
                                e ? e.layoutBox : void 0
                            )
                    }
                    updateScroll(e = 'measure') {
                        let t = !!(this.options.layoutScroll && this.instance)
                        if (
                            (this.scroll &&
                                this.scroll.animationId ===
                                    this.root.animationId &&
                                this.scroll.phase === e &&
                                (t = !1),
                            t && this.instance)
                        ) {
                            let t = n(this.instance)
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: e,
                                isRoot: t,
                                offset: r(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : t,
                            }
                        }
                    }
                    resetTransform() {
                        if (!i) return
                        let e =
                                this.isLayoutDirty ||
                                this.shouldResetTransform ||
                                this.options.alwaysMeasureLayout,
                            t =
                                this.projectionDelta &&
                                !nN(this.projectionDelta),
                            r = this.getTransformTemplate(),
                            n = r ? r(this.latestValues, '') : void 0,
                            o = n !== this.prevTransformTemplateValue
                        e &&
                            this.instance &&
                            (t || w(this.latestValues) || o) &&
                            (i(this.instance, n),
                            (this.shouldResetTransform = !1),
                            this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t
                        let r = this.measurePageBox(),
                            n = this.removeElementScroll(r)
                        return (
                            e && (n = this.removeTransform(n)),
                            io((t = n).x),
                            io(t.y),
                            {
                                animationId: this.root.animationId,
                                measuredBox: r,
                                layoutBox: n,
                                latestValues: {},
                                source: this.id,
                            }
                        )
                    }
                    measurePageBox() {
                        let { visualElement: e } = this.options
                        if (!e) return eP()
                        let t = e.measureViewportBox()
                        if (!(this.scroll?.wasRoot || this.path.some(ia))) {
                            let { scroll: e } = this.root
                            e && (A(t.x, e.offset.x), A(t.y, e.offset.y))
                        }
                        return t
                    }
                    removeElementScroll(e) {
                        let t = eP()
                        if ((nM(t, e), this.scroll?.wasRoot)) return t
                        for (let r = 0; r < this.path.length; r++) {
                            let n = this.path[r],
                                { scroll: i, options: o } = n
                            n !== this.root &&
                                i &&
                                o.layoutScroll &&
                                (i.wasRoot && nM(t, e),
                                A(t.x, i.offset.x),
                                A(t.y, i.offset.y))
                        }
                        return t
                    }
                    applyTransform(e, t = !1) {
                        let r = eP()
                        nM(r, e)
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e]
                            !t &&
                                n.options.layoutScroll &&
                                n.scroll &&
                                n !== n.root &&
                                C(r, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y,
                                }),
                                w(n.latestValues) && C(r, n.latestValues)
                        }
                        return (
                            w(this.latestValues) && C(r, this.latestValues), r
                        )
                    }
                    removeTransform(e) {
                        let t = eP()
                        nM(t, e)
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e]
                            if (!r.instance || !w(r.latestValues)) continue
                            x(r.latestValues) && r.updateSnapshot()
                            let n = eP()
                            nM(n, r.measurePageBox()),
                                nV(
                                    t,
                                    r.latestValues,
                                    r.snapshot ? r.snapshot.layoutBox : void 0,
                                    n
                                )
                        }
                        return (
                            w(this.latestValues) && nV(t, this.latestValues), t
                        )
                    }
                    setTargetDelta(e) {
                        ;(this.targetDelta = e),
                            this.root.scheduleUpdateProjection(),
                            (this.isProjectionDirty = !0)
                    }
                    setOptions(e) {
                        this.options = {
                            ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade,
                        }
                    }
                    clearMeasurements() {
                        ;(this.scroll = void 0),
                            (this.layout = void 0),
                            (this.snapshot = void 0),
                            (this.prevTransformTemplateValue = void 0),
                            (this.targetDelta = void 0),
                            (this.target = void 0),
                            (this.isLayoutDirty = !1)
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent &&
                            this.relativeParent.resolvedRelativeTargetAt !==
                                U.uv.timestamp &&
                            this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(e = !1) {
                        let t = this.getLead()
                        this.isProjectionDirty ||
                            (this.isProjectionDirty = t.isProjectionDirty),
                            this.isTransformDirty ||
                                (this.isTransformDirty = t.isTransformDirty),
                            this.isSharedProjectionDirty ||
                                (this.isSharedProjectionDirty =
                                    t.isSharedProjectionDirty)
                        let r = !!this.resumingFrom || this !== t
                        if (
                            !(
                                e ||
                                (r && this.isSharedProjectionDirty) ||
                                this.isProjectionDirty ||
                                this.parent?.isProjectionDirty ||
                                this.attemptToResolveRelativeTarget ||
                                this.root.updateBlockedByResize
                            )
                        )
                            return
                        let { layout: n, layoutId: i } = this.options
                        if (!this.layout || !(n || i)) return
                        this.resolvedRelativeTargetAt = U.uv.timestamp
                        let o = this.getClosestProjectingParent()
                        if (
                            (o &&
                                this.linkedParentVersion !== o.layoutVersion &&
                                !o.options.layoutRoot &&
                                this.removeRelativeTarget(),
                            this.targetDelta ||
                                this.relativeTarget ||
                                (o && o.layout
                                    ? this.createRelativeTarget(
                                          o,
                                          this.layout.layoutBox,
                                          o.layout.layoutBox
                                      )
                                    : this.removeRelativeTarget()),
                            this.relativeTarget || this.targetDelta)
                        ) {
                            if (
                                (this.target ||
                                    ((this.target = eP()),
                                    (this.targetWithTransforms = eP())),
                                this.relativeTarget &&
                                    this.relativeTargetOrigin &&
                                    this.relativeParent &&
                                    this.relativeParent.target)
                            ) {
                                var s, a, l
                                this.forceRelativeParentToResolveTarget(),
                                    (s = this.target),
                                    (a = this.relativeTarget),
                                    (l = this.relativeParent.target),
                                    rY(s.x, a.x, l.x),
                                    rY(s.y, a.y, l.y)
                            } else
                                this.targetDelta
                                    ? (this.resumingFrom
                                          ? (this.target = this.applyTransform(
                                                this.layout.layoutBox
                                            ))
                                          : nM(
                                                this.target,
                                                this.layout.layoutBox
                                            ),
                                      S(this.target, this.targetDelta))
                                    : nM(this.target, this.layout.layoutBox)
                            this.attemptToResolveRelativeTarget &&
                                ((this.attemptToResolveRelativeTarget = !1),
                                o &&
                                !!o.resumingFrom == !!this.resumingFrom &&
                                !o.options.layoutScroll &&
                                o.target &&
                                1 !== this.animationProgress
                                    ? this.createRelativeTarget(
                                          o,
                                          this.target,
                                          o.target
                                      )
                                    : (this.relativeParent =
                                          this.relativeTarget =
                                              void 0)),
                                rc.Q.value && nG.calculatedTargetDeltas++
                        }
                    }
                    getClosestProjectingParent() {
                        if (
                            !(
                                !this.parent ||
                                x(this.parent.latestValues) ||
                                k(this.parent.latestValues)
                            )
                        )
                            if (this.parent.isProjecting()) return this.parent
                            else return this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!(
                            (this.relativeTarget ||
                                this.targetDelta ||
                                this.options.layoutRoot) &&
                            this.layout
                        )
                    }
                    createRelativeTarget(e, t, r) {
                        ;(this.relativeParent = e),
                            (this.linkedParentVersion = e.layoutVersion),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = eP()),
                            (this.relativeTargetOrigin = eP()),
                            rZ(this.relativeTargetOrigin, t, r),
                            nM(this.relativeTarget, this.relativeTargetOrigin)
                    }
                    removeRelativeTarget() {
                        this.relativeParent = this.relativeTarget = void 0
                    }
                    calcProjection() {
                        let e = this.getLead(),
                            t = !!this.resumingFrom || this !== e,
                            r = !0
                        if (
                            ((this.isProjectionDirty ||
                                this.parent?.isProjectionDirty) &&
                                (r = !1),
                            t &&
                                (this.isSharedProjectionDirty ||
                                    this.isTransformDirty) &&
                                (r = !1),
                            this.resolvedRelativeTargetAt === U.uv.timestamp &&
                                (r = !1),
                            r)
                        )
                            return
                        let { layout: n, layoutId: i } = this.options
                        if (
                            ((this.isTreeAnimating = !!(
                                (this.parent && this.parent.isTreeAnimating) ||
                                this.currentAnimation ||
                                this.pendingAnimation
                            )),
                            this.isTreeAnimating ||
                                (this.targetDelta = this.relativeTarget =
                                    void 0),
                            !this.layout || !(n || i))
                        )
                            return
                        nM(this.layoutCorrected, this.layout.layoutBox)
                        let o = this.treeScale.x,
                            s = this.treeScale.y
                        !(function (e, t, r, n = !1) {
                            let i,
                                o,
                                s = r.length
                            if (s) {
                                t.x = t.y = 1
                                for (let a = 0; a < s; a++) {
                                    o = (i = r[a]).projectionDelta
                                    let { visualElement: s } = i.options
                                    ;(!s ||
                                        !s.props.style ||
                                        'contents' !== s.props.style.display) &&
                                        (n &&
                                            i.options.layoutScroll &&
                                            i.scroll &&
                                            i !== i.root &&
                                            C(e, {
                                                x: -i.scroll.offset.x,
                                                y: -i.scroll.offset.y,
                                            }),
                                        o &&
                                            ((t.x *= o.x.scale),
                                            (t.y *= o.y.scale),
                                            S(e, o)),
                                        n &&
                                            w(i.latestValues) &&
                                            C(e, i.latestValues))
                                }
                                t.x < 1.0000000000001 &&
                                    t.x > 0.999999999999 &&
                                    (t.x = 1),
                                    t.y < 1.0000000000001 &&
                                        t.y > 0.999999999999 &&
                                        (t.y = 1)
                            }
                        })(this.layoutCorrected, this.treeScale, this.path, t),
                            e.layout &&
                                !e.target &&
                                (1 !== this.treeScale.x ||
                                    1 !== this.treeScale.y) &&
                                ((e.target = e.layout.layoutBox),
                                (e.targetWithTransforms = eP()))
                        let { target: a } = e
                        if (!a) {
                            this.prevProjectionDelta &&
                                (this.createProjectionDeltas(),
                                this.scheduleRender())
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta
                            ? (nj(
                                  this.prevProjectionDelta.x,
                                  this.projectionDelta.x
                              ),
                              nj(
                                  this.prevProjectionDelta.y,
                                  this.projectionDelta.y
                              ))
                            : this.createProjectionDeltas(),
                            rX(
                                this.projectionDelta,
                                this.layoutCorrected,
                                a,
                                this.latestValues
                            ),
                            (this.treeScale.x === o &&
                                this.treeScale.y === s &&
                                nW(
                                    this.projectionDelta.x,
                                    this.prevProjectionDelta.x
                                ) &&
                                nW(
                                    this.projectionDelta.y,
                                    this.prevProjectionDelta.y
                                )) ||
                                ((this.hasProjected = !0),
                                this.scheduleRender(),
                                this.notifyListeners('projectionUpdate', a)),
                            rc.Q.value && nG.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        if ((this.options.visualElement?.scheduleRender(), e)) {
                            let e = this.getStack()
                            e && e.scheduleRender()
                        }
                        this.resumingFrom &&
                            !this.resumingFrom.instance &&
                            (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        ;(this.prevProjectionDelta = ek()),
                            (this.projectionDelta = ek()),
                            (this.projectionDeltaWithTransform = ek())
                    }
                    setAnimationOrigin(e, t = !1) {
                        let r,
                            n = this.snapshot,
                            i = n ? n.latestValues : {},
                            o = { ...this.latestValues },
                            s = ek()
                        ;(this.relativeParent &&
                            this.relativeParent.options.layoutRoot) ||
                            (this.relativeTarget = this.relativeTargetOrigin =
                                void 0),
                            (this.attemptToResolveRelativeTarget = !t)
                        let a = eP(),
                            l =
                                (n ? n.source : void 0) !==
                                (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            c = !u || u.members.length <= 1,
                            d = !!(
                                l &&
                                !c &&
                                !0 === this.options.crossfade &&
                                !this.path.some(ie)
                            )
                        ;(this.animationProgress = 0),
                            (this.mixTargetDelta = (t) => {
                                let n = t / 1e3
                                if (
                                    (n9(s.x, e.x, n),
                                    n9(s.y, e.y, n),
                                    this.setTargetDelta(s),
                                    this.relativeTarget &&
                                        this.relativeTargetOrigin &&
                                        this.layout &&
                                        this.relativeParent &&
                                        this.relativeParent.layout)
                                ) {
                                    var u, h, p, f, m, g
                                    rZ(
                                        a,
                                        this.layout.layoutBox,
                                        this.relativeParent.layout.layoutBox
                                    ),
                                        (p = this.relativeTarget),
                                        (f = this.relativeTargetOrigin),
                                        (m = a),
                                        (g = n),
                                        n7(p.x, f.x, m.x, g),
                                        n7(p.y, f.y, m.y, g),
                                        r &&
                                            ((u = this.relativeTarget),
                                            (h = r),
                                            nI(u.x, h.x) && nI(u.y, h.y)) &&
                                            (this.isProjectionDirty = !1),
                                        r || (r = eP()),
                                        nM(r, this.relativeTarget)
                                }
                                l &&
                                    ((this.animationValues = o),
                                    (function (e, t, r, n, i, o) {
                                        i
                                            ? ((e.opacity = (0, y.k)(
                                                  0,
                                                  r.opacity ?? 1,
                                                  nS(n)
                                              )),
                                              (e.opacityExit = (0, y.k)(
                                                  t.opacity ?? 1,
                                                  0,
                                                  nA(n)
                                              )))
                                            : o &&
                                              (e.opacity = (0, y.k)(
                                                  t.opacity ?? 1,
                                                  r.opacity ?? 1,
                                                  n
                                              ))
                                        for (let i = 0; i < nw; i++) {
                                            let o = `border${nx[i]}Radius`,
                                                s = nP(t, o),
                                                a = nP(r, o)
                                            ;(void 0 !== s || void 0 !== a) &&
                                                (s || (s = 0),
                                                a || (a = 0),
                                                0 === s ||
                                                0 === a ||
                                                nE(s) === nE(a)
                                                    ? ((e[o] = Math.max(
                                                          (0, y.k)(
                                                              nk(s),
                                                              nk(a),
                                                              n
                                                          ),
                                                          0
                                                      )),
                                                      (O.KN.test(a) ||
                                                          O.KN.test(s)) &&
                                                          (e[o] += '%'))
                                                    : (e[o] = a))
                                        }
                                        ;(t.rotate || r.rotate) &&
                                            (e.rotate = (0, y.k)(
                                                t.rotate || 0,
                                                r.rotate || 0,
                                                n
                                            ))
                                    })(o, i, this.latestValues, n, d, c)),
                                    this.root.scheduleUpdateProjection(),
                                    this.scheduleRender(),
                                    (this.animationProgress = n)
                            }),
                            this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(e) {
                        this.notifyListeners('animationStart'),
                            this.currentAnimation?.stop(),
                            this.resumingFrom?.currentAnimation?.stop(),
                            this.pendingAnimation &&
                                ((0, U.WG)(this.pendingAnimation),
                                (this.pendingAnimation = void 0)),
                            (this.pendingAnimation = U.Gt.update(() => {
                                ;(nu.hasAnimatedSinceResize = !0),
                                    tR.layout++,
                                    this.motionValue ||
                                        (this.motionValue = (0, em.OQ)(0)),
                                    (this.currentAnimation = (function (
                                        e,
                                        t,
                                        r
                                    ) {
                                        let n = ep(e) ? e : (0, em.OQ)(e)
                                        return (
                                            n.start(rC('', n, t, r)),
                                            n.animation
                                        )
                                    })(this.motionValue, [0, 1e3], {
                                        ...e,
                                        velocity: 0,
                                        isSync: !0,
                                        onUpdate: (t) => {
                                            this.mixTargetDelta(t),
                                                e.onUpdate && e.onUpdate(t)
                                        },
                                        onStop: () => {
                                            tR.layout--
                                        },
                                        onComplete: () => {
                                            tR.layout--,
                                                e.onComplete && e.onComplete(),
                                                this.completeAnimation()
                                        },
                                    })),
                                    this.resumingFrom &&
                                        (this.resumingFrom.currentAnimation =
                                            this.currentAnimation),
                                    (this.pendingAnimation = void 0)
                            }))
                    }
                    completeAnimation() {
                        this.resumingFrom &&
                            ((this.resumingFrom.currentAnimation = void 0),
                            (this.resumingFrom.preserveOpacity = void 0))
                        let e = this.getStack()
                        e && e.exitAnimationComplete(),
                            (this.resumingFrom =
                                this.currentAnimation =
                                this.animationValues =
                                    void 0),
                            this.notifyListeners('animationComplete')
                    }
                    finishAnimation() {
                        this.currentAnimation &&
                            (this.mixTargetDelta && this.mixTargetDelta(1e3),
                            this.currentAnimation.stop()),
                            this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: r,
                                layout: n,
                                latestValues: i,
                            } = e
                        if (t && r && n) {
                            if (
                                this !== e &&
                                this.layout &&
                                n &&
                                is(
                                    this.options.animationType,
                                    this.layout.layoutBox,
                                    n.layoutBox
                                )
                            ) {
                                r = this.target || eP()
                                let t = rq(this.layout.layoutBox.x)
                                ;(r.x.min = e.target.x.min),
                                    (r.x.max = r.x.min + t)
                                let n = rq(this.layout.layoutBox.y)
                                ;(r.y.min = e.target.y.min),
                                    (r.y.max = r.y.min + n)
                            }
                            nM(t, r),
                                C(t, i),
                                rX(
                                    this.projectionDeltaWithTransform,
                                    this.layoutCorrected,
                                    t,
                                    i
                                )
                        }
                    }
                    registerSharedNode(e, t) {
                        this.sharedNodes.has(e) ||
                            this.sharedNodes.set(e, new nU()),
                            this.sharedNodes.get(e).add(t)
                        let r = t.options.initialPromotionConfig
                        t.promote({
                            transition: r ? r.transition : void 0,
                            preserveFollowOpacity:
                                r && r.shouldPreserveFollowOpacity
                                    ? r.shouldPreserveFollowOpacity(t)
                                    : void 0,
                        })
                    }
                    isLead() {
                        let e = this.getStack()
                        return !e || e.lead === this
                    }
                    getLead() {
                        let { layoutId: e } = this.options
                        return (e && this.getStack()?.lead) || this
                    }
                    getPrevLead() {
                        let { layoutId: e } = this.options
                        return e ? this.getStack()?.prevLead : void 0
                    }
                    getStack() {
                        let { layoutId: e } = this.options
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: r,
                    } = {}) {
                        let n = this.getStack()
                        n && n.promote(this, r),
                            e &&
                                ((this.projectionDelta = void 0),
                                (this.needsReset = !0)),
                            t && this.setOptions({ transition: t })
                    }
                    relegate() {
                        let e = this.getStack()
                        return !!e && e.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let { visualElement: e } = this.options
                        if (!e) return
                        let t = !1,
                            { latestValues: r } = e
                        if (
                            ((r.z ||
                                r.rotate ||
                                r.rotateX ||
                                r.rotateY ||
                                r.rotateZ ||
                                r.skewX ||
                                r.skewY) &&
                                (t = !0),
                            !t)
                        )
                            return
                        let n = {}
                        r.z && nq('z', e, n, this.animationValues)
                        for (let t = 0; t < n$.length; t++)
                            nq(`rotate${n$[t]}`, e, n, this.animationValues),
                                nq(`skew${n$[t]}`, e, n, this.animationValues)
                        for (let t in (e.render(), n))
                            e.setStaticValue(t, n[t]),
                                this.animationValues &&
                                    (this.animationValues[t] = n[t])
                        e.scheduleRender()
                    }
                    applyProjectionStyles(e, t) {
                        if (!this.instance || this.isSVG) return
                        if (!this.isVisible) {
                            e.visibility = 'hidden'
                            return
                        }
                        let r = this.getTransformTemplate()
                        if (this.needsReset) {
                            ;(this.needsReset = !1),
                                (e.visibility = ''),
                                (e.opacity = ''),
                                (e.pointerEvents = th(t?.pointerEvents) || ''),
                                (e.transform = r
                                    ? r(this.latestValues, '')
                                    : 'none')
                            return
                        }
                        let n = this.getLead()
                        if (
                            !this.projectionDelta ||
                            !this.layout ||
                            !n.target
                        ) {
                            this.options.layoutId &&
                                ((e.opacity =
                                    void 0 !== this.latestValues.opacity
                                        ? this.latestValues.opacity
                                        : 1),
                                (e.pointerEvents = th(t?.pointerEvents) || '')),
                                this.hasProjected &&
                                    !w(this.latestValues) &&
                                    ((e.transform = r ? r({}, '') : 'none'),
                                    (this.hasProjected = !1))
                            return
                        }
                        e.visibility = ''
                        let i = n.animationValues || n.latestValues
                        this.applyTransformsToTarget()
                        let o = (function (e, t, r) {
                            let n = '',
                                i = e.x.translate / t.x,
                                o = e.y.translate / t.y,
                                s = r?.z || 0
                            if (
                                ((i || o || s) &&
                                    (n = `translate3d(${i}px, ${o}px, ${s}px) `),
                                (1 !== t.x || 1 !== t.y) &&
                                    (n += `scale(${1 / t.x}, ${1 / t.y}) `),
                                r)
                            ) {
                                let {
                                    transformPerspective: e,
                                    rotate: t,
                                    rotateX: i,
                                    rotateY: o,
                                    skewX: s,
                                    skewY: a,
                                } = r
                                e && (n = `perspective(${e}px) ${n}`),
                                    t && (n += `rotate(${t}deg) `),
                                    i && (n += `rotateX(${i}deg) `),
                                    o && (n += `rotateY(${o}deg) `),
                                    s && (n += `skewX(${s}deg) `),
                                    a && (n += `skewY(${a}deg) `)
                            }
                            let a = e.x.scale * t.x,
                                l = e.y.scale * t.y
                            return (
                                (1 !== a || 1 !== l) &&
                                    (n += `scale(${a}, ${l})`),
                                n || 'none'
                            )
                        })(this.projectionDeltaWithTransform, this.treeScale, i)
                        r && (o = r(i, o)), (e.transform = o)
                        let { x: s, y: a } = this.projectionDelta
                        for (let t in ((e.transformOrigin = `${
                            100 * s.origin
                        }% ${100 * a.origin}% 0`),
                        n.animationValues
                            ? (e.opacity =
                                  n === this
                                      ? i.opacity ??
                                        this.latestValues.opacity ??
                                        1
                                      : this.preserveOpacity
                                      ? this.latestValues.opacity
                                      : i.opacityExit)
                            : (e.opacity =
                                  n === this
                                      ? void 0 !== i.opacity
                                          ? i.opacity
                                          : ''
                                      : void 0 !== i.opacityExit
                                      ? i.opacityExit
                                      : 0),
                        e$)) {
                            if (void 0 === i[t]) continue
                            let {
                                    correct: r,
                                    applyTo: s,
                                    isCSSVariable: a,
                                } = e$[t],
                                l = 'none' === o ? i[t] : r(i[t], n)
                            if (s) {
                                let t = s.length
                                for (let r = 0; r < t; r++) e[s[r]] = l
                            } else
                                a
                                    ? (this.options.visualElement.renderState.vars[
                                          t
                                      ] = l)
                                    : (e[t] = l)
                        }
                        this.options.layoutId &&
                            (e.pointerEvents =
                                n === this
                                    ? th(t?.pointerEvents) || ''
                                    : 'none')
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach((e) =>
                            e.currentAnimation?.stop()
                        ),
                            this.root.nodes.forEach(n0),
                            this.root.sharedNodes.clear()
                    }
                }
            }
            function nX(e) {
                e.updateLayout()
            }
            function nY(e) {
                let t = e.resumeFrom?.snapshot || e.snapshot
                if (
                    e.isLead() &&
                    e.layout &&
                    t &&
                    e.hasListeners('didUpdate')
                ) {
                    let { layoutBox: r, measuredBox: n } = e.layout,
                        { animationType: i } = e.options,
                        o = t.source !== e.layout.source
                    'size' === i
                        ? rJ((e) => {
                              let n = o ? t.measuredBox[e] : t.layoutBox[e],
                                  i = rq(n)
                              ;(n.min = r[e].min), (n.max = n.min + i)
                          })
                        : is(i, t.layoutBox, r) &&
                          rJ((n) => {
                              let i = o ? t.measuredBox[n] : t.layoutBox[n],
                                  s = rq(r[n])
                              ;(i.max = i.min + s),
                                  e.relativeTarget &&
                                      !e.currentAnimation &&
                                      ((e.isProjectionDirty = !0),
                                      (e.relativeTarget[n].max =
                                          e.relativeTarget[n].min + s))
                          })
                    let s = ek()
                    rX(s, r, t.layoutBox)
                    let a = ek()
                    o
                        ? rX(a, e.applyTransform(n, !0), t.measuredBox)
                        : rX(a, r, t.layoutBox)
                    let l = !nN(s),
                        u = !1
                    if (!e.resumeFrom) {
                        let n = e.getClosestProjectingParent()
                        if (n && !n.resumeFrom) {
                            let { snapshot: i, layout: o } = n
                            if (i && o) {
                                let s = eP()
                                rZ(s, t.layoutBox, i.layoutBox)
                                let a = eP()
                                rZ(a, r, o.layoutBox),
                                    nB(s, a) || (u = !0),
                                    n.options.layoutRoot &&
                                        ((e.relativeTarget = a),
                                        (e.relativeTargetOrigin = s),
                                        (e.relativeParent = n))
                            }
                        }
                    }
                    e.notifyListeners('didUpdate', {
                        layout: r,
                        snapshot: t,
                        delta: a,
                        layoutDelta: s,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: u,
                    })
                } else if (e.isLead()) {
                    let { onExitComplete: t } = e.options
                    t && t()
                }
                e.options.transition = void 0
            }
            function nQ(e) {
                rc.Q.value && nG.nodes++,
                    e.parent &&
                        (e.isProjecting() ||
                            (e.isProjectionDirty = e.parent.isProjectionDirty),
                        e.isSharedProjectionDirty ||
                            (e.isSharedProjectionDirty = !!(
                                e.isProjectionDirty ||
                                e.parent.isProjectionDirty ||
                                e.parent.isSharedProjectionDirty
                            )),
                        e.isTransformDirty ||
                            (e.isTransformDirty = e.parent.isTransformDirty))
            }
            function nZ(e) {
                e.isProjectionDirty =
                    e.isSharedProjectionDirty =
                    e.isTransformDirty =
                        !1
            }
            function nJ(e) {
                e.clearSnapshot()
            }
            function n0(e) {
                e.clearMeasurements()
            }
            function n1(e) {
                e.isLayoutDirty = !1
            }
            function n2(e) {
                let { visualElement: t } = e.options
                t &&
                    t.getProps().onBeforeLayoutMeasure &&
                    t.notify('BeforeLayoutMeasure'),
                    e.resetTransform()
            }
            function n5(e) {
                e.finishAnimation(),
                    (e.targetDelta = e.relativeTarget = e.target = void 0),
                    (e.isProjectionDirty = !0)
            }
            function n4(e) {
                e.resolveTargetDelta()
            }
            function n3(e) {
                e.calcProjection()
            }
            function n8(e) {
                e.resetSkewAndRotation()
            }
            function n6(e) {
                e.removeLeadSnapshot()
            }
            function n9(e, t, r) {
                ;(e.translate = (0, y.k)(t.translate, 0, r)),
                    (e.scale = (0, y.k)(t.scale, 1, r)),
                    (e.origin = t.origin),
                    (e.originPoint = t.originPoint)
            }
            function n7(e, t, r, n) {
                ;(e.min = (0, y.k)(t.min, r.min, n)),
                    (e.max = (0, y.k)(t.max, r.max, n))
            }
            function ie(e) {
                return (
                    e.animationValues &&
                    void 0 !== e.animationValues.opacityExit
                )
            }
            let it = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
                ir = (e) =>
                    'undefined' != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().includes(e),
                ii = ir('applewebkit/') && !ir('chrome/') ? Math.round : t$.l
            function io(e) {
                ;(e.min = ii(e.min)), (e.max = ii(e.max))
            }
            function is(e, t, r) {
                return (
                    'position' === e ||
                    ('preserve-aspect' === e &&
                        !(0.2 >= Math.abs(nz(t) - nz(r))))
                )
            }
            function ia(e) {
                return e !== e.root && e.scroll?.wasRoot
            }
            let il = nH({
                    attachResizeListener: (e, t) => rU(e, 'resize', t),
                    measureScroll: () => ({
                        x:
                            document.documentElement.scrollLeft ||
                            document.body.scrollLeft,
                        y:
                            document.documentElement.scrollTop ||
                            document.body.scrollTop,
                    }),
                    checkIsScrollRoot: () => !0,
                }),
                iu = { current: void 0 },
                ic = nH({
                    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
                    defaultParent: () => {
                        if (!iu.current) {
                            let e = new il({})
                            e.mount(window),
                                e.setOptions({ layoutScroll: !0 }),
                                (iu.current = e)
                        }
                        return iu.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : 'none'
                    },
                    checkIsScrollRoot: (e) =>
                        'fixed' === window.getComputedStyle(e).position,
                })
            var id = r(8561)
            function ih(e, t) {
                let r = (0, id.K)(e),
                    n = new AbortController()
                return [
                    r,
                    { passive: !0, ...t, signal: n.signal },
                    () => n.abort(),
                ]
            }
            function ip(e) {
                return !('touch' === e.pointerType || rW.x || rW.y)
            }
            function im(e, t, r) {
                let { props: n } = e
                e.animationState &&
                    n.whileHover &&
                    e.animationState.setActive('whileHover', 'Start' === r)
                let i = n['onHover' + r]
                i && U.Gt.postRender(() => i(t, r$(t)))
            }
            class ig extends rI {
                mount() {
                    let { current: e } = this.node
                    e &&
                        (this.unmount = (function (e, t, r = {}) {
                            let [n, i, o] = ih(e, r),
                                s = (e) => {
                                    if (!ip(e)) return
                                    let { target: r } = e,
                                        n = t(r, e)
                                    if ('function' != typeof n || !r) return
                                    let o = (e) => {
                                        ip(e) &&
                                            (n(e),
                                            r.removeEventListener(
                                                'pointerleave',
                                                o
                                            ))
                                    }
                                    r.addEventListener('pointerleave', o, i)
                                }
                            return (
                                n.forEach((e) => {
                                    e.addEventListener('pointerenter', s, i)
                                }),
                                o
                            )
                        })(
                            e,
                            (e, t) => (
                                im(this.node, t, 'Start'),
                                (e) => im(this.node, e, 'End')
                            )
                        ))
                }
                unmount() {}
            }
            class iv extends rI {
                constructor() {
                    super(...arguments), (this.isActive = !1)
                }
                onFocus() {
                    let e = !1
                    try {
                        e = this.node.current.matches(':focus-visible')
                    } catch (t) {
                        e = !0
                    }
                    e &&
                        this.node.animationState &&
                        (this.node.animationState.setActive('whileFocus', !0),
                        (this.isActive = !0))
                }
                onBlur() {
                    this.isActive &&
                        this.node.animationState &&
                        (this.node.animationState.setActive('whileFocus', !1),
                        (this.isActive = !1))
                }
                mount() {
                    this.unmount = (0, tC.F)(
                        rU(this.node.current, 'focus', () => this.onFocus()),
                        rU(this.node.current, 'blur', () => this.onBlur())
                    )
                }
                unmount() {}
            }
            var iy = r(1402)
            let ib = (e, t) => !!t && (e === t || ib(e, t.parentElement)),
                ix = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
                iw = new WeakSet()
            function ik(e) {
                return (t) => {
                    'Enter' === t.key && e(t)
                }
            }
            function iE(e, t) {
                e.dispatchEvent(
                    new PointerEvent('pointer' + t, {
                        isPrimary: !0,
                        bubbles: !0,
                    })
                )
            }
            function iP(e) {
                return rG(e) && !(rW.x || rW.y)
            }
            function iS(e, t, r) {
                let { props: n } = e
                if (
                    e.current instanceof HTMLButtonElement &&
                    e.current.disabled
                )
                    return
                e.animationState &&
                    n.whileTap &&
                    e.animationState.setActive('whileTap', 'Start' === r)
                let i = n['onTap' + ('End' === r ? '' : r)]
                i && U.Gt.postRender(() => i(t, r$(t)))
            }
            class iA extends rI {
                mount() {
                    let { current: e } = this.node
                    e &&
                        (this.unmount = (function (e, t, r = {}) {
                            let [n, i, o] = ih(e, r),
                                s = (e) => {
                                    let n = e.currentTarget
                                    if (!iP(e)) return
                                    iw.add(n)
                                    let o = t(n, e),
                                        s = (e, t) => {
                                            window.removeEventListener(
                                                'pointerup',
                                                a
                                            ),
                                                window.removeEventListener(
                                                    'pointercancel',
                                                    l
                                                ),
                                                iw.has(n) && iw.delete(n),
                                                iP(e) &&
                                                    'function' == typeof o &&
                                                    o(e, { success: t })
                                        },
                                        a = (e) => {
                                            s(
                                                e,
                                                n === window ||
                                                    n === document ||
                                                    r.useGlobalTarget ||
                                                    ib(n, e.target)
                                            )
                                        },
                                        l = (e) => {
                                            s(e, !1)
                                        }
                                    window.addEventListener('pointerup', a, i),
                                        window.addEventListener(
                                            'pointercancel',
                                            l,
                                            i
                                        )
                                }
                            return (
                                n.forEach((e) => {
                                    ;((r.useGlobalTarget
                                        ? window
                                        : e
                                    ).addEventListener('pointerdown', s, i),
                                    (0, iy.s)(e)) &&
                                        (e.addEventListener('focus', (e) =>
                                            ((e, t) => {
                                                let r = e.currentTarget
                                                if (!r) return
                                                let n = ik(() => {
                                                    if (iw.has(r)) return
                                                    iE(r, 'down')
                                                    let e = ik(() => {
                                                        iE(r, 'up')
                                                    })
                                                    r.addEventListener(
                                                        'keyup',
                                                        e,
                                                        t
                                                    ),
                                                        r.addEventListener(
                                                            'blur',
                                                            () =>
                                                                iE(r, 'cancel'),
                                                            t
                                                        )
                                                })
                                                r.addEventListener(
                                                    'keydown',
                                                    n,
                                                    t
                                                ),
                                                    r.addEventListener(
                                                        'blur',
                                                        () =>
                                                            r.removeEventListener(
                                                                'keydown',
                                                                n
                                                            ),
                                                        t
                                                    )
                                            })(e, i)
                                        ),
                                        ix.has(e.tagName) ||
                                            -1 !== e.tabIndex ||
                                            e.hasAttribute('tabindex') ||
                                            (e.tabIndex = 0))
                                }),
                                o
                            )
                        })(
                            e,
                            (e, t) => (
                                iS(this.node, t, 'Start'),
                                (e, { success: t }) =>
                                    iS(this.node, e, t ? 'End' : 'Cancel')
                            ),
                            { useGlobalTarget: this.node.props.globalTapTarget }
                        ))
                }
                unmount() {}
            }
            let iT = new WeakMap(),
                iC = new WeakMap(),
                iM = (e) => {
                    let t = iT.get(e.target)
                    t && t(e)
                },
                ij = (e) => {
                    e.forEach(iM)
                },
                iR = { some: 0, all: 1 }
            class iO extends rI {
                constructor() {
                    super(...arguments),
                        (this.hasEnteredView = !1),
                        (this.isInView = !1)
                }
                startObserver() {
                    this.unmount()
                    let { viewport: e = {} } = this.node.getProps(),
                        { root: t, margin: r, amount: n = 'some', once: i } = e,
                        o = {
                            root: t ? t.current : void 0,
                            rootMargin: r,
                            threshold: 'number' == typeof n ? n : iR[n],
                        },
                        s = (e) => {
                            let { isIntersecting: t } = e
                            if (
                                this.isInView === t ||
                                ((this.isInView = t),
                                i && !t && this.hasEnteredView)
                            )
                                return
                            t && (this.hasEnteredView = !0),
                                this.node.animationState &&
                                    this.node.animationState.setActive(
                                        'whileInView',
                                        t
                                    )
                            let { onViewportEnter: r, onViewportLeave: n } =
                                    this.node.getProps(),
                                o = t ? r : n
                            o && o(e)
                        }
                    var a = this.node.current
                    let l = (function ({ root: e, ...t }) {
                        let r = e || document
                        iC.has(r) || iC.set(r, {})
                        let n = iC.get(r),
                            i = JSON.stringify(t)
                        return (
                            n[i] ||
                                (n[i] = new IntersectionObserver(ij, {
                                    root: e,
                                    ...t,
                                })),
                            n[i]
                        )
                    })(o)
                    return (
                        iT.set(a, s),
                        l.observe(a),
                        () => {
                            iT.delete(a), l.unobserve(a)
                        }
                    )
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ('undefined' == typeof IntersectionObserver) return
                    let { props: e, prevProps: t } = this.node
                    ;['amount', 'margin', 'root'].some(
                        (function (
                            { viewport: e = {} },
                            { viewport: t = {} } = {}
                        ) {
                            return (r) => e[r] !== t[r]
                        })(e, t)
                    ) && this.startObserver()
                }
                unmount() {}
            }
            let iD = (function (e, t) {
                if ('undefined' == typeof Proxy) return tw
                let r = new Map(),
                    n = (r, n) => tw(r, n, e, t)
                return new Proxy((e, t) => n(e, t), {
                    get: (i, o) =>
                        'create' === o
                            ? n
                            : (r.has(o) || r.set(o, tw(o, void 0, e, t)),
                              r.get(o)),
                })
            })(
                {
                    animation: { Feature: rF },
                    exit: { Feature: rz },
                    inView: { Feature: iO },
                    tap: { Feature: iA },
                    focus: { Feature: iv },
                    hover: { Feature: ig },
                    pan: { Feature: na },
                    drag: {
                        Feature: no,
                        ProjectionNode: ic,
                        MeasureLayout: nf,
                    },
                    layout: { ProjectionNode: ic, MeasureLayout: nf },
                },
                (e, t) =>
                    e4(e)
                        ? new e2(t)
                        : new eH(t, { allowProjection: e !== n.Fragment })
            )
        },
        1124: (e, t) => {
            function r(e) {
                var t
                let { config: r, src: n, width: i, quality: o } = e,
                    s =
                        o ||
                        (null == (t = r.qualities)
                            ? void 0
                            : t.reduce((e, t) =>
                                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                              )) ||
                        75
                return (
                    r.path +
                    '?url=' +
                    encodeURIComponent(n) +
                    '&w=' +
                    i +
                    '&q=' +
                    s +
                    (n.startsWith('/_next/static/media/'), '')
                )
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return n
                    },
                }),
                (r.__next_img_default = !0)
            let n = r
        },
        1225: (e, t, r) => {
            r.d(t, { q: () => n })
            let n = (e, t, r) => {
                let n = t - e
                return 0 === n ? 1 : (r - e) / n
            }
        },
        1262: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s
                    },
                })
            let n = r(2115),
                i = n.useLayoutEffect,
                o = n.useEffect
            function s(e) {
                let { headManager: t, reduceComponentsToState: r } = e
                function s() {
                    if (t && t.mountedInstances) {
                        let i = n.Children.toArray(
                            Array.from(t.mountedInstances).filter(Boolean)
                        )
                        t.updateHead(r(i, e))
                    }
                }
                return (
                    i(() => {
                        var r
                        return (
                            null == t ||
                                null == (r = t.mountedInstances) ||
                                r.add(e.children),
                            () => {
                                var r
                                null == t ||
                                    null == (r = t.mountedInstances) ||
                                    r.delete(e.children)
                            }
                        )
                    }),
                    i(
                        () => (
                            t && (t._pendingUpdate = s),
                            () => {
                                t && (t._pendingUpdate = s)
                            }
                        )
                    ),
                    o(
                        () => (
                            t &&
                                t._pendingUpdate &&
                                (t._pendingUpdate(), (t._pendingUpdate = null)),
                            () => {
                                t &&
                                    t._pendingUpdate &&
                                    (t._pendingUpdate(),
                                    (t._pendingUpdate = null))
                            }
                        )
                    ),
                    null
                )
            }
        },
        1356: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 })
            let n = r(1983),
                i = r(5849),
                o = r(7389)
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'Image', {
                    enumerable: !0,
                    get: function () {
                        return E
                    },
                })
            let s = r(8140),
                a = r(9417),
                l = r(5155),
                u = a._(r(2115)),
                c = s._(r(7650)),
                d = s._(r(4841)),
                h = r(5040),
                p = r(821),
                f = r(3455)
            r(4781)
            let m = r(9862),
                g = s._(r(1124)),
                v = r(3011),
                y = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: '/_next/image/',
                    loader: 'default',
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0,
                }
            function b(e, t, r, o, s, a, l) {
                let u = null == e ? void 0 : e.src
                e &&
                    e['data-loaded-src'] !== u &&
                    ((e['data-loaded-src'] = u),
                    ('decode' in e ? e.decode() : Promise.resolve())
                        .catch(() => {})
                        .then(() => {
                            if (e.parentElement && e.isConnected) {
                                if (
                                    ('empty' !== t && s(!0),
                                    null == r ? void 0 : r.current)
                                ) {
                                    let t = new Event('load')
                                    Object.defineProperty(t, 'target', {
                                        writable: !1,
                                        value: e,
                                    })
                                    let o = !1,
                                        s = !1
                                    r.current(
                                        i._(n._({}, t), {
                                            nativeEvent: t,
                                            currentTarget: e,
                                            target: e,
                                            isDefaultPrevented: () => o,
                                            isPropagationStopped: () => s,
                                            persist: () => {},
                                            preventDefault: () => {
                                                ;(o = !0), t.preventDefault()
                                            },
                                            stopPropagation: () => {
                                                ;(s = !0), t.stopPropagation()
                                            },
                                        })
                                    )
                                }
                                ;(null == o ? void 0 : o.current) &&
                                    o.current(e)
                            }
                        }))
            }
            function x(e) {
                return u.use ? { fetchPriority: e } : { fetchpriority: e }
            }
            let w = (0, u.forwardRef)((e, t) => {
                let {
                        src: r,
                        srcSet: s,
                        sizes: a,
                        height: c,
                        width: d,
                        decoding: h,
                        className: p,
                        style: f,
                        fetchPriority: m,
                        placeholder: g,
                        loading: y,
                        unoptimized: w,
                        fill: k,
                        onLoadRef: E,
                        onLoadingCompleteRef: P,
                        setBlurComplete: S,
                        setShowAltText: A,
                        sizesInput: T,
                        onLoad: C,
                        onError: M,
                    } = e,
                    j = o._(e, [
                        'src',
                        'srcSet',
                        'sizes',
                        'height',
                        'width',
                        'decoding',
                        'className',
                        'style',
                        'fetchPriority',
                        'placeholder',
                        'loading',
                        'unoptimized',
                        'fill',
                        'onLoadRef',
                        'onLoadingCompleteRef',
                        'setBlurComplete',
                        'setShowAltText',
                        'sizesInput',
                        'onLoad',
                        'onError',
                    ]),
                    R = (0, u.useCallback)(
                        (e) => {
                            e &&
                                (M && (e.src = e.src),
                                e.complete && b(e, g, E, P, S, w, T))
                        },
                        [r, g, E, P, S, M, w, T]
                    ),
                    O = (0, v.useMergedRef)(t, R)
                return (0, l.jsx)(
                    'img',
                    i._(n._({}, j, x(m)), {
                        loading: y,
                        width: d,
                        height: c,
                        decoding: h,
                        'data-nimg': k ? 'fill' : '1',
                        className: p,
                        style: f,
                        sizes: a,
                        srcSet: s,
                        src: r,
                        ref: O,
                        onLoad: (e) => {
                            b(e.currentTarget, g, E, P, S, w, T)
                        },
                        onError: (e) => {
                            A(!0), 'empty' !== g && S(!0), M && M(e)
                        },
                    })
                )
            })
            function k(e) {
                let { isAppRouter: t, imgAttributes: r } = e,
                    i = n._(
                        {
                            as: 'image',
                            imageSrcSet: r.srcSet,
                            imageSizes: r.sizes,
                            crossOrigin: r.crossOrigin,
                            referrerPolicy: r.referrerPolicy,
                        },
                        x(r.fetchPriority)
                    )
                return t && c.default.preload
                    ? (c.default.preload(r.src, i), null)
                    : (0, l.jsx)(d.default, {
                          children: (0, l.jsx)(
                              'link',
                              n._(
                                  {
                                      rel: 'preload',
                                      href: r.srcSet ? void 0 : r.src,
                                  },
                                  i
                              ),
                              '__nimg-' + r.src + r.srcSet + r.sizes
                          ),
                      })
            }
            let E = (0, u.forwardRef)((e, t) => {
                let r = (0, u.useContext)(m.RouterContext),
                    o = (0, u.useContext)(f.ImageConfigContext),
                    s = (0, u.useMemo)(() => {
                        var e
                        let t = y || o || p.imageConfigDefault,
                            r = [...t.deviceSizes, ...t.imageSizes].sort(
                                (e, t) => e - t
                            ),
                            s = t.deviceSizes.sort((e, t) => e - t),
                            a =
                                null == (e = t.qualities)
                                    ? void 0
                                    : e.sort((e, t) => e - t)
                        return i._(n._({}, t), {
                            allSizes: r,
                            deviceSizes: s,
                            qualities: a,
                        })
                    }, [o]),
                    { onLoad: a, onLoadingComplete: c } = e,
                    d = (0, u.useRef)(a)
                ;(0, u.useEffect)(() => {
                    d.current = a
                }, [a])
                let v = (0, u.useRef)(c)
                ;(0, u.useEffect)(() => {
                    v.current = c
                }, [c])
                let [b, x] = (0, u.useState)(!1),
                    [E, P] = (0, u.useState)(!1),
                    { props: S, meta: A } = (0, h.getImgProps)(e, {
                        defaultLoader: g.default,
                        imgConf: s,
                        blurComplete: b,
                        showAltText: E,
                    })
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(
                            w,
                            i._(n._({}, S), {
                                unoptimized: A.unoptimized,
                                placeholder: A.placeholder,
                                fill: A.fill,
                                onLoadRef: d,
                                onLoadingCompleteRef: v,
                                setBlurComplete: x,
                                setShowAltText: P,
                                sizesInput: e.sizes,
                                ref: t,
                            })
                        ),
                        A.priority
                            ? (0, l.jsx)(k, {
                                  isAppRouter: !r,
                                  imgAttributes: S,
                              })
                            : null,
                    ],
                })
            })
            ;('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default))
        },
        1391: (e, t, r) => {
            r.d(t, { j: () => i, p: () => s })
            let n = (e) => (t) => 'string' == typeof t && t.startsWith(e),
                i = n('--'),
                o = n('var(--'),
                s = (e) => !!o(e) && a.test(e.split('/*')[0].trim()),
                a =
                    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        1402: (e, t, r) => {
            r.d(t, { s: () => i })
            var n = r(3142)
            function i(e) {
                return (0, n.G)(e) && 'offsetHeight' in e
            }
        },
        1543: (e, t, r) => {
            let n, i
            r.d(t, { L: () => X })
            var o = r(1983),
                s = r(5849),
                a = r(7389),
                l = r(2039),
                u = r(8041),
                c = r(2115),
                d = r(4119),
                h = r(3934)
            function p(e, t) {
                let r,
                    n = () => {
                        let { currentTime: n } = t,
                            i = (null === n ? 0 : n.value) / 100
                        r !== i && e(i), (r = i)
                    }
                return h.Gt.preUpdate(n, !0), () => (0, h.WG)(n)
            }
            var f = r(4995),
                m = r(9089),
                g = r(8561)
            let v = new WeakMap(),
                y = (e, t, r) => (n, i) =>
                    i && i[0]
                        ? i[0][e + 'Size']
                        : (0, m.x)(n) && 'getBBox' in n
                        ? n.getBBox()[t]
                        : n[r],
                b = y('inline', 'width', 'offsetWidth'),
                x = y('block', 'height', 'offsetHeight')
            function w({ target: e, borderBoxSize: t }) {
                v.get(e)?.forEach((r) => {
                    r(e, {
                        get width() {
                            return b(e, t)
                        },
                        get height() {
                            return x(e, t)
                        },
                    })
                })
            }
            function k(e) {
                e.forEach(w)
            }
            let E = new Set()
            var P = r(1225),
                S = r(5242)
            let A = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0,
                }),
                T = {
                    x: { length: 'Width', position: 'Left' },
                    y: { length: 'Height', position: 'Top' },
                }
            function C(e, t, r, n) {
                let i = r[t],
                    { length: o, position: s } = T[t],
                    a = i.current,
                    l = r.time
                ;(i.current = e[`scroll${s}`]),
                    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
                    (i.offset.length = 0),
                    (i.offset[0] = 0),
                    (i.offset[1] = i.scrollLength),
                    (i.progress = (0, P.q)(0, i.scrollLength, i.current))
                let u = n - l
                i.velocity = u > 50 ? 0 : (0, S.f)(i.current - a, u)
            }
            var M = r(6706),
                j = r(6827),
                R = r(8895),
                O = r(1402)
            let D = { start: 0, center: 0.5, end: 1 }
            function _(e, t, r = 0) {
                let n = 0
                if ((e in D && (e = D[e]), 'string' == typeof e)) {
                    let t = parseFloat(e)
                    e.endsWith('px')
                        ? (n = t)
                        : e.endsWith('%')
                        ? (e = t / 100)
                        : e.endsWith('vw')
                        ? (n = (t / 100) * document.documentElement.clientWidth)
                        : e.endsWith('vh')
                        ? (n =
                              (t / 100) * document.documentElement.clientHeight)
                        : (e = t)
                }
                return 'number' == typeof e && (n = t * e), r + n
            }
            let V = [0, 0],
                L = {
                    All: [
                        [0, 0],
                        [1, 1],
                    ],
                },
                N = { x: 0, y: 0 },
                I = new WeakMap(),
                F = new WeakMap(),
                B = new WeakMap(),
                z = (e) => (e === document.scrollingElement ? window : e)
            function W(
                e,
                { container: t = document.scrollingElement, ...r } = {}
            ) {
                if (!t) return d.l
                let o = B.get(t)
                o || ((o = new Set()), B.set(t, o))
                let s = (function (e, t, r, n = {}) {
                    return {
                        measure: (t) => {
                            !(function (e, t = e, r) {
                                if (
                                    ((r.x.targetOffset = 0),
                                    (r.y.targetOffset = 0),
                                    t !== e)
                                ) {
                                    let n = t
                                    for (; n && n !== e; )
                                        (r.x.targetOffset += n.offsetLeft),
                                            (r.y.targetOffset += n.offsetTop),
                                            (n = n.offsetParent)
                                }
                                ;(r.x.targetLength =
                                    t === e ? t.scrollWidth : t.clientWidth),
                                    (r.y.targetLength =
                                        t === e
                                            ? t.scrollHeight
                                            : t.clientHeight),
                                    (r.x.containerLength = e.clientWidth),
                                    (r.y.containerLength = e.clientHeight)
                            })(e, n.target, r),
                                C(e, 'x', r, t),
                                C(e, 'y', r, t),
                                (r.time = t),
                                (n.offset || n.target) &&
                                    (function (e, t, r) {
                                        let { offset: n = L.All } = r,
                                            { target: i = e, axis: o = 'y' } =
                                                r,
                                            s = 'y' === o ? 'height' : 'width',
                                            a =
                                                i !== e
                                                    ? (function (e, t) {
                                                          let r = {
                                                                  x: 0,
                                                                  y: 0,
                                                              },
                                                              n = e
                                                          for (; n && n !== t; )
                                                              if ((0, O.s)(n))
                                                                  (r.x +=
                                                                      n.offsetLeft),
                                                                      (r.y +=
                                                                          n.offsetTop),
                                                                      (n =
                                                                          n.offsetParent)
                                                              else if (
                                                                  'svg' ===
                                                                  n.tagName
                                                              ) {
                                                                  let e =
                                                                          n.getBoundingClientRect(),
                                                                      t = (n =
                                                                          n.parentElement).getBoundingClientRect()
                                                                  ;(r.x +=
                                                                      e.left -
                                                                      t.left),
                                                                      (r.y +=
                                                                          e.top -
                                                                          t.top)
                                                              } else if (
                                                                  n instanceof
                                                                  SVGGraphicsElement
                                                              ) {
                                                                  let {
                                                                      x: e,
                                                                      y: t,
                                                                  } =
                                                                      n.getBBox()
                                                                  ;(r.x += e),
                                                                      (r.y += t)
                                                                  let i = null,
                                                                      o =
                                                                          n.parentNode
                                                                  for (; !i; )
                                                                      'svg' ===
                                                                          o.tagName &&
                                                                          (i =
                                                                              o),
                                                                          (o =
                                                                              n.parentNode)
                                                                  n = i
                                                              } else break
                                                          return r
                                                      })(i, e)
                                                    : N,
                                            l =
                                                i === e
                                                    ? {
                                                          width: e.scrollWidth,
                                                          height: e.scrollHeight,
                                                      }
                                                    : 'getBBox' in i &&
                                                      'svg' !== i.tagName
                                                    ? i.getBBox()
                                                    : {
                                                          width: i.clientWidth,
                                                          height: i.clientHeight,
                                                      },
                                            u = {
                                                width: e.clientWidth,
                                                height: e.clientHeight,
                                            }
                                        t[o].offset.length = 0
                                        let c = !t[o].interpolate,
                                            d = n.length
                                        for (let e = 0; e < d; e++) {
                                            let r = (function (e, t, r, n) {
                                                let i = Array.isArray(e)
                                                        ? e
                                                        : V,
                                                    o = 0
                                                return (
                                                    'number' == typeof e
                                                        ? (i = [e, e])
                                                        : 'string' ==
                                                              typeof e &&
                                                          (i = (e =
                                                              e.trim()).includes(
                                                              ' '
                                                          )
                                                              ? e.split(' ')
                                                              : [
                                                                    e,
                                                                    D[e]
                                                                        ? e
                                                                        : '0',
                                                                ]),
                                                    (o = _(i[0], r, n)) -
                                                        _(i[1], t)
                                                )
                                            })(n[e], u[s], l[s], a[o])
                                            c ||
                                                r ===
                                                    t[o].interpolatorOffsets[
                                                        e
                                                    ] ||
                                                (c = !0),
                                                (t[o].offset[e] = r)
                                        }
                                        c &&
                                            ((t[o].interpolate = (0, M.G)(
                                                t[o].offset,
                                                (0, j.Z)(n),
                                                { clamp: !1 }
                                            )),
                                            (t[o].interpolatorOffsets = [
                                                ...t[o].offset,
                                            ])),
                                            (t[o].progress = (0, R.q)(
                                                0,
                                                1,
                                                t[o].interpolate(t[o].current)
                                            ))
                                    })(e, r, n)
                        },
                        notify: () => t(r),
                    }
                })(t, e, { time: 0, x: A(), y: A() }, r)
                if ((o.add(s), !I.has(t))) {
                    let e = () => {
                            for (let e of o) e.measure(h.uv.timestamp)
                            h.Gt.preUpdate(r)
                        },
                        r = () => {
                            for (let e of o) e.notify()
                        },
                        s = () => h.Gt.read(e)
                    I.set(t, s)
                    let a = z(t)
                    window.addEventListener('resize', s, { passive: !0 }),
                        t !== document.documentElement &&
                            F.set(
                                t,
                                'function' == typeof t
                                    ? (E.add(t),
                                      i ||
                                          ((i = () => {
                                              let e = {
                                                  get width() {
                                                      return window.innerWidth
                                                  },
                                                  get height() {
                                                      return window.innerHeight
                                                  },
                                              }
                                              E.forEach((t) => t(e))
                                          }),
                                          window.addEventListener('resize', i)),
                                      () => {
                                          E.delete(t),
                                              E.size ||
                                                  'function' != typeof i ||
                                                  (window.removeEventListener(
                                                      'resize',
                                                      i
                                                  ),
                                                  (i = void 0))
                                      })
                                    : (function (e, t) {
                                          n ||
                                              ('undefined' !=
                                                  typeof ResizeObserver &&
                                                  (n = new ResizeObserver(k)))
                                          let r = (0, g.K)(e)
                                          return (
                                              r.forEach((e) => {
                                                  let r = v.get(e)
                                                  r ||
                                                      ((r = new Set()),
                                                      v.set(e, r)),
                                                      r.add(t),
                                                      n?.observe(e)
                                              }),
                                              () => {
                                                  r.forEach((e) => {
                                                      let r = v.get(e)
                                                      r?.delete(t),
                                                          r?.size ||
                                                              n?.unobserve(e)
                                                  })
                                              }
                                          )
                                      })(t, s)
                            ),
                        a.addEventListener('scroll', s, { passive: !0 }),
                        s()
                }
                let a = I.get(t)
                return (
                    h.Gt.read(a, !1, !0),
                    () => {
                        ;(0, h.WG)(a)
                        let e = B.get(t)
                        if (!e || (e.delete(s), e.size)) return
                        let r = I.get(t)
                        I.delete(t),
                            r &&
                                (z(t).removeEventListener('scroll', r),
                                F.get(t)?.(),
                                window.removeEventListener('resize', r))
                    }
                )
            }
            let U = new Map()
            function G({ source: e, container: t, ...r }) {
                let { axis: n } = r
                e && (t = e)
                let i = U.get(t) ?? new Map()
                U.set(t, i)
                let o = r.target ?? 'self',
                    s = i.get(o) ?? {},
                    a = n + (r.offset ?? []).join(',')
                return (
                    s[a] ||
                        (s[a] =
                            !r.target && (0, f.J)()
                                ? new ScrollTimeline({ source: t, axis: n })
                                : (function (e) {
                                      let t = { value: 0 },
                                          r = W((r) => {
                                              t.value = 100 * r[e.axis].progress
                                          }, e)
                                      return { currentTime: t, cancel: r }
                                  })({ container: t, ...r })),
                    s[a]
                )
            }
            var $ = r(4416),
                K = r(6553)
            let q = () => ({
                    scrollX: (0, l.OQ)(0),
                    scrollY: (0, l.OQ)(0),
                    scrollXProgress: (0, l.OQ)(0),
                    scrollYProgress: (0, l.OQ)(0),
                }),
                H = (e) => !!e && !e.current
            function X() {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                var { container: t, target: r } = e,
                    n = (0, a._)(e, ['container', 'target'])
                let i = (0, $.M)(q),
                    l = (0, c.useRef)(null),
                    h = (0, c.useRef)(!1),
                    f = (0, c.useCallback)(
                        () => (
                            (l.current = (function (
                                e,
                                {
                                    axis: t = 'y',
                                    container: r = document.scrollingElement,
                                    ...n
                                } = {}
                            ) {
                                var i, o
                                if (!r) return d.l
                                let s = { axis: t, container: r, ...n }
                                return 'function' == typeof e
                                    ? ((i = e),
                                      (o = s),
                                      2 === i.length
                                          ? W((e) => {
                                                i(e[o.axis].progress, e)
                                            }, o)
                                          : p(i, G(o)))
                                    : (function (e, t) {
                                          let r = G(t)
                                          return e.attachTimeline({
                                              timeline: t.target ? void 0 : r,
                                              observe: (e) => (
                                                  e.pause(),
                                                  p((t) => {
                                                      e.time =
                                                          e.iterationDuration *
                                                          t
                                                  }, r)
                                              ),
                                          })
                                      })(e, s)
                            })((e, t) => {
                                let { x: r, y: n } = t
                                i.scrollX.set(r.current),
                                    i.scrollXProgress.set(r.progress),
                                    i.scrollY.set(n.current),
                                    i.scrollYProgress.set(n.progress)
                            }, (0, s._)((0, o._)({}, n), { container: (null == t ? void 0 : t.current) || void 0, target: (null == r ? void 0 : r.current) || void 0 }))),
                            () => {
                                var e
                                null == (e = l.current) || e.call(l)
                            }
                        ),
                        [t, r, JSON.stringify(n.offset)]
                    )
                return (
                    (0, K.E)(() => {
                        if (((h.current = !1), !(H(t) || H(r)))) return f()
                        h.current = !0
                    }, [f]),
                    (0, c.useEffect)(
                        () =>
                            h.current
                                ? ((0, u.V)(
                                      !H(t),
                                      'Container ref is defined but not hydrated',
                                      'use-scroll-ref'
                                  ),
                                  (0, u.V)(
                                      !H(r),
                                      'Target ref is defined but not hydrated',
                                      'use-scroll-ref'
                                  ),
                                  f())
                                : void 0,
                        [f]
                    ),
                    i
                )
            }
        },
        1739: (e, t, r) => {
            r.d(t, { B: () => l })
            var n = r(8895),
                i = r(7822),
                o = r(9150),
                s = r(3919)
            let a = {
                    ...i.ai,
                    transform: (e) => Math.round((0, n.q)(0, 255, e)),
                },
                l = {
                    test: (0, s.$)('rgb', 'red'),
                    parse: (0, s.q)('red', 'green', 'blue'),
                    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
                        'rgba(' +
                        a.transform(e) +
                        ', ' +
                        a.transform(t) +
                        ', ' +
                        a.transform(r) +
                        ', ' +
                        (0, o.a)(i.X4.transform(n)) +
                        ')',
                }
        },
        1847: (e, t, r) => {
            r.d(t, { A: () => d })
            var n = r(1983),
                i = r(7389),
                o = r(2115)
            let s = (e) => {
                    let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
                        r ? r.toUpperCase() : t.toLowerCase()
                    )
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                a = function () {
                    for (
                        var e = arguments.length, t = Array(e), r = 0;
                        r < e;
                        r++
                    )
                        t[r] = arguments[r]
                    return t
                        .filter(
                            (e, t, r) =>
                                !!e && '' !== e.trim() && r.indexOf(e) === t
                        )
                        .join(' ')
                        .trim()
                }
            var l = r(5849),
                u = {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }
            let c = (0, o.forwardRef)((e, t) => {
                    var {
                            color: r = 'currentColor',
                            size: s = 24,
                            strokeWidth: c = 2,
                            absoluteStrokeWidth: d,
                            className: h = '',
                            children: p,
                            iconNode: f,
                        } = e,
                        m = (0, i._)(e, [
                            'color',
                            'size',
                            'strokeWidth',
                            'absoluteStrokeWidth',
                            'className',
                            'children',
                            'iconNode',
                        ])
                    return (0, o.createElement)(
                        'svg',
                        (0, n._)(
                            (0, l._)((0, n._)({ ref: t }, u), {
                                width: s,
                                height: s,
                                stroke: r,
                                strokeWidth: d
                                    ? (24 * Number(c)) / Number(s)
                                    : c,
                                className: a('lucide', h),
                            }),
                            !p &&
                                !((e) => {
                                    for (let t in e)
                                        if (
                                            t.startsWith('aria-') ||
                                            'role' === t ||
                                            'title' === t
                                        )
                                            return !0
                                })(m) && { 'aria-hidden': 'true' },
                            m
                        ),
                        [
                            ...f.map((e) => {
                                let [t, r] = e
                                return (0, o.createElement)(t, r)
                            }),
                            ...(Array.isArray(p) ? p : [p]),
                        ]
                    )
                }),
                d = (e, t) => {
                    let r = (0, o.forwardRef)((r, l) => {
                        var { className: u } = r,
                            d = (0, i._)(r, ['className'])
                        return (0, o.createElement)(
                            c,
                            (0, n._)(
                                {
                                    ref: l,
                                    iconNode: t,
                                    className: a(
                                        'lucide-'.concat(
                                            s(e)
                                                .replace(
                                                    /([a-z0-9])([A-Z])/g,
                                                    '$1-$2'
                                                )
                                                .toLowerCase()
                                        ),
                                        'lucide-'.concat(e),
                                        u
                                    ),
                                },
                                d
                            )
                        )
                    })
                    return (r.displayName = s(e)), r
                }
        },
        2039: (e, t, r) => {
            r.d(t, { OQ: () => u, bt: () => a })
            var n = r(8453),
                i = r(5242),
                o = r(7424),
                s = r(3934)
            let a = { current: void 0 }
            class l {
                constructor(e, t = {}) {
                    ;(this.canTrackVelocity = null),
                        (this.events = {}),
                        (this.updateAndNotify = (e) => {
                            let t = o.k.now()
                            if (
                                (this.updatedAt !== t &&
                                    this.setPrevFrameValue(),
                                (this.prev = this.current),
                                this.setCurrent(e),
                                this.current !== this.prev &&
                                    (this.events.change?.notify(this.current),
                                    this.dependents))
                            )
                                for (let e of this.dependents) e.dirty()
                        }),
                        (this.hasAnimated = !1),
                        this.setCurrent(e),
                        (this.owner = t.owner)
                }
                setCurrent(e) {
                    ;(this.current = e),
                        (this.updatedAt = o.k.now()),
                        null === this.canTrackVelocity &&
                            void 0 !== e &&
                            (this.canTrackVelocity = !isNaN(
                                parseFloat(this.current)
                            ))
                }
                setPrevFrameValue(e = this.current) {
                    ;(this.prevFrameValue = e),
                        (this.prevUpdatedAt = this.updatedAt)
                }
                onChange(e) {
                    return this.on('change', e)
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new n.v())
                    let r = this.events[e].add(t)
                    return 'change' === e
                        ? () => {
                              r(),
                                  s.Gt.read(() => {
                                      this.events.change.getSize() ||
                                          this.stop()
                                  })
                          }
                        : r
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, t) {
                    ;(this.passiveEffect = e), (this.stopPassiveEffect = t)
                }
                set(e) {
                    this.passiveEffect
                        ? this.passiveEffect(e, this.updateAndNotify)
                        : this.updateAndNotify(e)
                }
                setWithVelocity(e, t, r) {
                    this.set(t),
                        (this.prev = void 0),
                        (this.prevFrameValue = e),
                        (this.prevUpdatedAt = this.updatedAt - r)
                }
                jump(e, t = !0) {
                    this.updateAndNotify(e),
                        (this.prev = e),
                        (this.prevUpdatedAt = this.prevFrameValue = void 0),
                        t && this.stop(),
                        this.stopPassiveEffect && this.stopPassiveEffect()
                }
                dirty() {
                    this.events.change?.notify(this.current)
                }
                addDependent(e) {
                    this.dependents || (this.dependents = new Set()),
                        this.dependents.add(e)
                }
                removeDependent(e) {
                    this.dependents && this.dependents.delete(e)
                }
                get() {
                    return a.current && a.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let e = o.k.now()
                    if (
                        !this.canTrackVelocity ||
                        void 0 === this.prevFrameValue ||
                        e - this.updatedAt > 30
                    )
                        return 0
                    let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30)
                    return (0, i.f)(
                        parseFloat(this.current) -
                            parseFloat(this.prevFrameValue),
                        t
                    )
                }
                start(e) {
                    return (
                        this.stop(),
                        new Promise((t) => {
                            ;(this.hasAnimated = !0),
                                (this.animation = e(t)),
                                this.events.animationStart &&
                                    this.events.animationStart.notify()
                        }).then(() => {
                            this.events.animationComplete &&
                                this.events.animationComplete.notify(),
                                this.clearAnimation()
                        })
                    )
                }
                stop() {
                    this.animation &&
                        (this.animation.stop(),
                        this.events.animationCancel &&
                            this.events.animationCancel.notify()),
                        this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.dependents?.clear(),
                        this.events.destroy?.notify(),
                        this.clearListeners(),
                        this.stop(),
                        this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }
            function u(e, t) {
                return new l(e, t)
            }
        },
        2108: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('chevron-up', [
                ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
            ])
        },
        2419: (e, t, r) => {
            r.d(t, {
                KN: () => o,
                gQ: () => u,
                px: () => s,
                uj: () => i,
                vh: () => a,
                vw: () => l,
            })
            let n = (e) => ({
                    test: (t) =>
                        'string' == typeof t &&
                        t.endsWith(e) &&
                        1 === t.split(' ').length,
                    parse: parseFloat,
                    transform: (t) => `${t}${e}`,
                }),
                i = n('deg'),
                o = n('%'),
                s = n('px'),
                a = n('vh'),
                l = n('vw'),
                u = {
                    ...o,
                    parse: (e) => o.parse(e) / 100,
                    transform: (e) => o.transform(100 * e),
                }
        },
        2467: (e, t, r) => {
            r.d(t, { DX: () => c })
            var n,
                i = r(2115),
                o = r(4446),
                s = r(5155),
                a = Symbol.for('react.lazy'),
                l = (n || (n = r.t(i, 2)))[' use '.trim().toString()]
            function u(e) {
                var t
                return (
                    null != e &&
                    'object' == typeof e &&
                    '$$typeof' in e &&
                    e.$$typeof === a &&
                    '_payload' in e &&
                    'object' == typeof (t = e._payload) &&
                    null !== t &&
                    'then' in t
                )
            }
            var c = (function (e) {
                    let t = (function (e) {
                            let t = i.forwardRef((e, t) => {
                                let { children: r, ...n } = e
                                if (
                                    (u(r) &&
                                        'function' == typeof l &&
                                        (r = l(r._payload)),
                                    i.isValidElement(r))
                                ) {
                                    var s
                                    let e,
                                        a,
                                        l =
                                            ((s = r),
                                            (a =
                                                (e =
                                                    Object.getOwnPropertyDescriptor(
                                                        s.props,
                                                        'ref'
                                                    )?.get) &&
                                                'isReactWarning' in e &&
                                                e.isReactWarning)
                                                ? s.ref
                                                : (a =
                                                      (e =
                                                          Object.getOwnPropertyDescriptor(
                                                              s,
                                                              'ref'
                                                          )?.get) &&
                                                      'isReactWarning' in e &&
                                                      e.isReactWarning)
                                                ? s.props.ref
                                                : s.props.ref || s.ref),
                                        u = (function (e, t) {
                                            let r = { ...t }
                                            for (let n in t) {
                                                let i = e[n],
                                                    o = t[n]
                                                ;/^on[A-Z]/.test(n)
                                                    ? i && o
                                                        ? (r[n] = (...e) => {
                                                              let t = o(...e)
                                                              return i(...e), t
                                                          })
                                                        : i && (r[n] = i)
                                                    : 'style' === n
                                                    ? (r[n] = { ...i, ...o })
                                                    : 'className' === n &&
                                                      (r[n] = [i, o]
                                                          .filter(Boolean)
                                                          .join(' '))
                                            }
                                            return { ...e, ...r }
                                        })(n, r.props)
                                    return (
                                        r.type !== i.Fragment &&
                                            (u.ref = t ? (0, o.t)(t, l) : l),
                                        i.cloneElement(r, u)
                                    )
                                }
                                return i.Children.count(r) > 1
                                    ? i.Children.only(null)
                                    : null
                            })
                            return (t.displayName = `${e}.SlotClone`), t
                        })(e),
                        r = i.forwardRef((e, r) => {
                            let { children: n, ...o } = e
                            u(n) &&
                                'function' == typeof l &&
                                (n = l(n._payload))
                            let a = i.Children.toArray(n),
                                c = a.find(h)
                            if (c) {
                                let e = c.props.children,
                                    n = a.map((t) =>
                                        t !== c
                                            ? t
                                            : i.Children.count(e) > 1
                                            ? i.Children.only(null)
                                            : i.isValidElement(e)
                                            ? e.props.children
                                            : null
                                    )
                                return (0, s.jsx)(t, {
                                    ...o,
                                    ref: r,
                                    children: i.isValidElement(e)
                                        ? i.cloneElement(e, void 0, n)
                                        : null,
                                })
                            }
                            return (0, s.jsx)(t, { ...o, ref: r, children: n })
                        })
                    return (r.displayName = `${e}.Slot`), r
                })('Slot'),
                d = Symbol('radix.slottable')
            function h(e) {
                return (
                    i.isValidElement(e) &&
                    'function' == typeof e.type &&
                    '__radixId' in e.type &&
                    e.type.__radixId === d
                )
            }
        },
        2508: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('smartphone', [
                [
                    'rect',
                    {
                        width: '14',
                        height: '20',
                        x: '5',
                        y: '2',
                        rx: '2',
                        ry: '2',
                        key: '1yt0o3',
                    },
                ],
                ['path', { d: 'M12 18h.01', key: 'mhygvu' }],
            ])
        },
        2556: (e, t, r) => {
            function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
                return function (n) {
                    if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n)
                }
            }
            r.d(t, { mK: () => n }),
                'undefined' != typeof window &&
                    window.document &&
                    window.document.createElement
        },
        2821: (e, t, r) => {
            r.d(t, { $: () => n })
            function n() {
                for (var e, t, r = 0, n = '', i = arguments.length; r < i; r++)
                    (e = arguments[r]) &&
                        (t = (function e(t) {
                            var r,
                                n,
                                i = ''
                            if ('string' == typeof t || 'number' == typeof t)
                                i += t
                            else if ('object' == typeof t)
                                if (Array.isArray(t)) {
                                    var o = t.length
                                    for (r = 0; r < o; r++)
                                        t[r] &&
                                            (n = e(t[r])) &&
                                            (i && (i += ' '), (i += n))
                                } else
                                    for (n in t)
                                        t[n] && (i && (i += ' '), (i += n))
                            return i
                        })(e)) &&
                        (n && (n += ' '), (n += t))
                return n
            }
        },
        3011: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i
                    },
                })
            let n = r(2115)
            function i(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useRef)(null)
                return (0, n.useCallback)(
                    (n) => {
                        if (null === n) {
                            let e = r.current
                            e && ((r.current = null), e())
                            let t = i.current
                            t && ((i.current = null), t())
                        } else
                            e && (r.current = o(e, n)),
                                t && (i.current = o(t, n))
                    },
                    [e, t]
                )
            }
            function o(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null
                        }
                    )
                {
                    let r = e(t)
                    return 'function' == typeof r ? r : () => e(null)
                }
            }
            ;('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default))
        },
        3101: (e, t, r) => {
            r.d(t, { F: () => s })
            var n = r(2821)
            let i = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
                o = n.$,
                s = (e, t) => (r) => {
                    var n
                    if ((null == t ? void 0 : t.variants) == null)
                        return o(
                            e,
                            null == r ? void 0 : r.class,
                            null == r ? void 0 : r.className
                        )
                    let { variants: s, defaultVariants: a } = t,
                        l = Object.keys(s).map((e) => {
                            let t = null == r ? void 0 : r[e],
                                n = null == a ? void 0 : a[e]
                            if (null === t) return null
                            let o = i(t) || i(n)
                            return s[e][o]
                        }),
                        u =
                            r &&
                            Object.entries(r).reduce((e, t) => {
                                let [r, n] = t
                                return void 0 === n || (e[r] = n), e
                            }, {})
                    return o(
                        e,
                        l,
                        null == t || null == (n = t.compoundVariants)
                            ? void 0
                            : n.reduce((e, t) => {
                                  let { class: r, className: n, ...i } = t
                                  return Object.entries(i).every((e) => {
                                      let [t, r] = e
                                      return Array.isArray(r)
                                          ? r.includes({ ...a, ...u }[t])
                                          : { ...a, ...u }[t] === r
                                  })
                                      ? [...e, r, n]
                                      : e
                              }, []),
                        null == r ? void 0 : r.class,
                        null == r ? void 0 : r.className
                    )
                }
        },
        3127: (e, t, r) => {
            r.d(t, { Q: () => n })
            let n = (0, r(2115).createContext)({
                transformPagePoint: (e) => e,
                isStatic: !1,
                reducedMotion: 'never',
            })
        },
        3142: (e, t, r) => {
            r.d(t, { G: () => n })
            function n(e) {
                return 'object' == typeof e && null !== e
            }
        },
        3350: (e, t, r) => {
            r.d(t, { d: () => a })
            var n = r(2039),
                i = r(2115),
                o = r(3127),
                s = r(4416)
            function a(e) {
                let t = (0, s.M)(() => (0, n.OQ)(e)),
                    { isStatic: r } = (0, i.useContext)(o.Q)
                if (r) {
                    let [, r] = (0, i.useState)(e)
                    ;(0, i.useEffect)(() => t.on('change', r), [])
                }
                return t
            }
        },
        3455: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'ImageConfigContext', {
                    enumerable: !0,
                    get: function () {
                        return o
                    },
                })
            let n = r(8140)._(r(2115)),
                i = r(821),
                o = n.default.createContext(i.imageConfigDefault)
        },
        3468: (e, t, r) => {
            r.d(t, { A: () => s, q: () => o })
            var n = r(2115),
                i = r(5155)
            function o(e, t) {
                let r = n.createContext(t),
                    o = (e) => {
                        let { children: t, ...o } = e,
                            s = n.useMemo(() => o, Object.values(o))
                        return (0, i.jsx)(r.Provider, { value: s, children: t })
                    }
                return (
                    (o.displayName = e + 'Provider'),
                    [
                        o,
                        function (i) {
                            let o = n.useContext(r)
                            if (o) return o
                            if (void 0 !== t) return t
                            throw Error(`\`${i}\` must be used within \`${e}\``)
                        },
                    ]
                )
            }
            function s(e, t = []) {
                let r = [],
                    o = () => {
                        let t = r.map((e) => n.createContext(e))
                        return function (r) {
                            let i = r?.[e] || t
                            return n.useMemo(
                                () => ({ [`__scope${e}`]: { ...r, [e]: i } }),
                                [r, i]
                            )
                        }
                    }
                return (
                    (o.scopeName = e),
                    [
                        function (t, o) {
                            let s = n.createContext(o),
                                a = r.length
                            r = [...r, o]
                            let l = (t) => {
                                let { scope: r, children: o, ...l } = t,
                                    u = r?.[e]?.[a] || s,
                                    c = n.useMemo(() => l, Object.values(l))
                                return (0, i.jsx)(u.Provider, {
                                    value: c,
                                    children: o,
                                })
                            }
                            return (
                                (l.displayName = t + 'Provider'),
                                [
                                    l,
                                    function (r, i) {
                                        let l = i?.[e]?.[a] || s,
                                            u = n.useContext(l)
                                        if (u) return u
                                        if (void 0 !== o) return o
                                        throw Error(
                                            `\`${r}\` must be used within \`${t}\``
                                        )
                                    },
                                ]
                            )
                        },
                        (function (...e) {
                            let t = e[0]
                            if (1 === e.length) return t
                            let r = () => {
                                let r = e.map((e) => ({
                                    useScope: e(),
                                    scopeName: e.scopeName,
                                }))
                                return function (e) {
                                    let i = r.reduce(
                                        (t, { useScope: r, scopeName: n }) => {
                                            let i = r(e)[`__scope${n}`]
                                            return { ...t, ...i }
                                        },
                                        {}
                                    )
                                    return n.useMemo(
                                        () => ({
                                            [`__scope${t.scopeName}`]: i,
                                        }),
                                        [i]
                                    )
                                }
                            }
                            return (r.scopeName = t.scopeName), r
                        })(o, ...t),
                    ]
                )
            }
        },
        3558: (e, t, r) => {
            r.d(t, { i: () => a })
            var n,
                i = r(2115),
                o = r(4129),
                s =
                    (n || (n = r.t(i, 2)))[
                        ' useInsertionEffect '.trim().toString()
                    ] || o.N
            function a({
                prop: e,
                defaultProp: t,
                onChange: r = () => {},
                caller: n,
            }) {
                let [o, a, l] = (function ({ defaultProp: e, onChange: t }) {
                        let [r, n] = i.useState(e),
                            o = i.useRef(r),
                            a = i.useRef(t)
                        return (
                            s(() => {
                                a.current = t
                            }, [t]),
                            i.useEffect(() => {
                                o.current !== r &&
                                    (a.current?.(r), (o.current = r))
                            }, [r, o]),
                            [r, n, a]
                        )
                    })({ defaultProp: t, onChange: r }),
                    u = void 0 !== e,
                    c = u ? e : o
                {
                    let t = i.useRef(void 0 !== e)
                    i.useEffect(() => {
                        let e = t.current
                        if (e !== u) {
                            let t = u ? 'controlled' : 'uncontrolled'
                            console.warn(
                                `${n} is changing from ${
                                    e ? 'controlled' : 'uncontrolled'
                                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                            )
                        }
                        t.current = u
                    }, [u, n])
                }
                return [
                    c,
                    i.useCallback(
                        (t) => {
                            if (u) {
                                let r = 'function' == typeof t ? t(e) : t
                                r !== e && l.current?.(r)
                            } else a(t)
                        },
                        [u, e, a, l]
                    ),
                ]
            }
            Symbol('RADIX:SYNC_STATE')
        },
        3577: (e, t, r) => {
            r.d(t, { B: () => n })
            let n = 'undefined' != typeof window
        },
        3586: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('music', [
                ['path', { d: 'M9 18V5l12-2v13', key: '1jmyc2' }],
                ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
                ['circle', { cx: '18', cy: '16', r: '3', key: '1hluhg' }],
            ])
        },
        3656: (e, t, r) => {
            r.d(t, { F: () => i })
            let n = (e, t) => (r) => t(e(r)),
                i = (...e) => e.reduce(n)
        },
        3664: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('mail', [
                [
                    'path',
                    {
                        d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7',
                        key: '132q7q',
                    },
                ],
                [
                    'rect',
                    {
                        x: '2',
                        y: '4',
                        width: '20',
                        height: '16',
                        rx: '2',
                        key: 'izxlao',
                    },
                ],
            ])
        },
        3867: (e, t, r) => {
            r.d(t, { Q: () => n })
            let n = { value: null, addProjectionMetrics: null }
        },
        3919: (e, t, r) => {
            r.d(t, { $: () => o, q: () => s })
            var n = r(4531)
            let i =
                    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                o = (e, t) => (r) =>
                    !!(
                        ('string' == typeof r &&
                            i.test(r) &&
                            r.startsWith(e)) ||
                        (t &&
                            null != r &&
                            Object.prototype.hasOwnProperty.call(r, t))
                    ),
                s = (e, t, r) => (i) => {
                    if ('string' != typeof i) return i
                    let [o, s, a, l] = i.match(n.S)
                    return {
                        [e]: parseFloat(o),
                        [t]: parseFloat(s),
                        [r]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1,
                    }
                }
        },
        3934: (e, t, r) => {
            r.d(t, { Gt: () => i, PP: () => a, WG: () => o, uv: () => s })
            var n = r(4119)
            let {
                schedule: i,
                cancel: o,
                state: s,
                steps: a,
            } = (0, r(4300).I)(
                'undefined' != typeof requestAnimationFrame
                    ? requestAnimationFrame
                    : n.l,
                !0
            )
        },
        4033: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('chevron-down', [
                ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
            ])
        },
        4105: (e, t) => {
            function r(e) {
                let {
                        widthInt: t,
                        heightInt: r,
                        blurWidth: n,
                        blurHeight: i,
                        blurDataURL: o,
                        objectFit: s,
                    } = e,
                    a = n ? 40 * n : t,
                    l = i ? 40 * i : r,
                    u = a && l ? "viewBox='0 0 " + a + ' ' + l + "'" : ''
                return (
                    "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                    u +
                    "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                    (u
                        ? 'none'
                        : 'contain' === s
                        ? 'xMidYMid'
                        : 'cover' === s
                        ? 'xMidYMid slice'
                        : 'none') +
                    "' style='filter: url(%23b);' href='" +
                    o +
                    "'/%3E%3C/svg%3E"
                )
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'getImageBlurSvg', {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                })
        },
        4119: (e, t, r) => {
            r.d(t, { l: () => n })
            let n = (e) => e
        },
        4129: (e, t, r) => {
            r.d(t, { N: () => i })
            var n = r(2115),
                i = globalThis?.document ? n.useLayoutEffect : () => {}
        },
        4300: (e, t, r) => {
            r.d(t, { I: () => s })
            var n = r(42)
            let i = [
                'setup',
                'read',
                'resolveKeyframes',
                'preUpdate',
                'update',
                'preRender',
                'render',
                'postRender',
            ]
            var o = r(3867)
            function s(e, t) {
                let r = !1,
                    s = !0,
                    a = { delta: 0, timestamp: 0, isProcessing: !1 },
                    l = () => (r = !0),
                    u = i.reduce(
                        (e, r) => (
                            (e[r] = (function (e, t) {
                                let r = new Set(),
                                    n = new Set(),
                                    i = !1,
                                    s = !1,
                                    a = new WeakSet(),
                                    l = {
                                        delta: 0,
                                        timestamp: 0,
                                        isProcessing: !1,
                                    },
                                    u = 0
                                function c(t) {
                                    a.has(t) && (d.schedule(t), e()), u++, t(l)
                                }
                                let d = {
                                    schedule: (e, t = !1, o = !1) => {
                                        let s = o && i ? r : n
                                        return (
                                            t && a.add(e),
                                            s.has(e) || s.add(e),
                                            e
                                        )
                                    },
                                    cancel: (e) => {
                                        n.delete(e), a.delete(e)
                                    },
                                    process: (e) => {
                                        if (((l = e), i)) {
                                            s = !0
                                            return
                                        }
                                        ;(i = !0),
                                            ([r, n] = [n, r]),
                                            r.forEach(c),
                                            t &&
                                                o.Q.value &&
                                                o.Q.value.frameloop[t].push(u),
                                            (u = 0),
                                            r.clear(),
                                            (i = !1),
                                            s && ((s = !1), d.process(e))
                                    },
                                }
                                return d
                            })(l, t ? r : void 0)),
                            e
                        ),
                        {}
                    ),
                    {
                        setup: c,
                        read: d,
                        resolveKeyframes: h,
                        preUpdate: p,
                        update: f,
                        preRender: m,
                        render: g,
                        postRender: v,
                    } = u,
                    y = () => {
                        let i = n.W.useManualTiming
                            ? a.timestamp
                            : performance.now()
                        ;(r = !1),
                            n.W.useManualTiming ||
                                (a.delta = s
                                    ? 1e3 / 60
                                    : Math.max(
                                          Math.min(i - a.timestamp, 40),
                                          1
                                      )),
                            (a.timestamp = i),
                            (a.isProcessing = !0),
                            c.process(a),
                            d.process(a),
                            h.process(a),
                            p.process(a),
                            f.process(a),
                            m.process(a),
                            g.process(a),
                            v.process(a),
                            (a.isProcessing = !1),
                            r && t && ((s = !1), e(y))
                    }
                return {
                    schedule: i.reduce((t, n) => {
                        let i = u[n]
                        return (
                            (t[n] = (t, n = !1, o = !1) => (
                                !r &&
                                    ((r = !0),
                                    (s = !0),
                                    a.isProcessing || e(y)),
                                i.schedule(t, n, o)
                            )),
                            t
                        )
                    }, {}),
                    cancel: (e) => {
                        for (let t = 0; t < i.length; t++) u[i[t]].cancel(e)
                    },
                    state: a,
                    steps: u,
                }
            }
        },
        4416: (e, t, r) => {
            r.d(t, { M: () => i })
            var n = r(2115)
            function i(e) {
                let t = (0, n.useRef)(null)
                return null === t.current && (t.current = e()), t.current
            }
        },
        4446: (e, t, r) => {
            r.d(t, { s: () => s, t: () => o })
            var n = r(2115)
            function i(e, t) {
                if ('function' == typeof e) return e(t)
                null != e && (e.current = t)
            }
            function o(...e) {
                return (t) => {
                    let r = !1,
                        n = e.map((e) => {
                            let n = i(e, t)
                            return r || 'function' != typeof n || (r = !0), n
                        })
                    if (r)
                        return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t]
                                'function' == typeof r ? r() : i(e[t], null)
                            }
                        }
                }
            }
            function s(...e) {
                return n.useCallback(o(...e), e)
            }
        },
        4484: (e, t, r) => {
            r.d(t, { UC: () => el, B8: () => es, bL: () => eo, l9: () => ea })
            var n,
                i = r(1983),
                o = r(5849),
                s = r(7389),
                a = r(2115),
                l = r(2556),
                u = r(3468)
            function c(e, t, r) {
                if (!t.has(e))
                    throw TypeError(
                        'attempted to ' + r + ' private field on non-instance'
                    )
                return t.get(e)
            }
            function d(e, t) {
                var r = c(e, t, 'get')
                return r.get ? r.get.call(e) : r.value
            }
            function h(e, t, r) {
                var n = c(e, t, 'set')
                if (n.set) n.set.call(e, r)
                else {
                    if (!n.writable)
                        throw TypeError(
                            'attempted to set read only private field'
                        )
                    n.value = r
                }
                return r
            }
            var p = r(4446),
                f = r(5155)
            function m(e) {
                let t = (function (e) {
                        let t = a.forwardRef((e, t) => {
                            let { children: r, ...n } = e
                            if (a.isValidElement(r)) {
                                var i
                                let e,
                                    o,
                                    s =
                                        ((i = r),
                                        (o =
                                            (e =
                                                Object.getOwnPropertyDescriptor(
                                                    i.props,
                                                    'ref'
                                                )?.get) &&
                                            'isReactWarning' in e &&
                                            e.isReactWarning)
                                            ? i.ref
                                            : (o =
                                                  (e =
                                                      Object.getOwnPropertyDescriptor(
                                                          i,
                                                          'ref'
                                                      )?.get) &&
                                                  'isReactWarning' in e &&
                                                  e.isReactWarning)
                                            ? i.props.ref
                                            : i.props.ref || i.ref),
                                    l = (function (e, t) {
                                        let r = { ...t }
                                        for (let n in t) {
                                            let i = e[n],
                                                o = t[n]
                                            ;/^on[A-Z]/.test(n)
                                                ? i && o
                                                    ? (r[n] = (...e) => {
                                                          let t = o(...e)
                                                          return i(...e), t
                                                      })
                                                    : i && (r[n] = i)
                                                : 'style' === n
                                                ? (r[n] = { ...i, ...o })
                                                : 'className' === n &&
                                                  (r[n] = [i, o]
                                                      .filter(Boolean)
                                                      .join(' '))
                                        }
                                        return { ...e, ...r }
                                    })(n, r.props)
                                return (
                                    r.type !== a.Fragment &&
                                        (l.ref = t ? (0, p.t)(t, s) : s),
                                    a.cloneElement(r, l)
                                )
                            }
                            return a.Children.count(r) > 1
                                ? a.Children.only(null)
                                : null
                        })
                        return (t.displayName = `${e}.SlotClone`), t
                    })(e),
                    r = a.forwardRef((e, r) => {
                        let { children: n, ...i } = e,
                            o = a.Children.toArray(n),
                            s = o.find(v)
                        if (s) {
                            let e = s.props.children,
                                n = o.map((t) =>
                                    t !== s
                                        ? t
                                        : a.Children.count(e) > 1
                                        ? a.Children.only(null)
                                        : a.isValidElement(e)
                                        ? e.props.children
                                        : null
                                )
                            return (0, f.jsx)(t, {
                                ...i,
                                ref: r,
                                children: a.isValidElement(e)
                                    ? a.cloneElement(e, void 0, n)
                                    : null,
                            })
                        }
                        return (0, f.jsx)(t, { ...i, ref: r, children: n })
                    })
                return (r.displayName = `${e}.Slot`), r
            }
            var g = Symbol('radix.slottable')
            function v(e) {
                return (
                    a.isValidElement(e) &&
                    'function' == typeof e.type &&
                    '__radixId' in e.type &&
                    e.type.__radixId === g
                )
            }
            var y = new WeakMap()
            function b(e, t) {
                if ('at' in Array.prototype)
                    return Array.prototype.at.call(e, t)
                let r = (function (e, t) {
                    let r = e.length,
                        n = x(t),
                        i = n >= 0 ? n : r + n
                    return i < 0 || i >= r ? -1 : i
                })(e, t)
                return -1 === r ? void 0 : e[r]
            }
            function x(e) {
                return e != e || 0 === e ? 0 : Math.trunc(e)
            }
            ;(n = new WeakMap()),
                class e extends Map {
                    set(e, t) {
                        return (
                            y.get(this) &&
                                (this.has(e)
                                    ? (d(this, n)[d(this, n).indexOf(e)] = e)
                                    : d(this, n).push(e)),
                            super.set(e, t),
                            this
                        )
                    }
                    insert(e, t, r) {
                        let i,
                            o = this.has(t),
                            s = d(this, n).length,
                            a = x(e),
                            l = a >= 0 ? a : s + a,
                            u = l < 0 || l >= s ? -1 : l
                        if (
                            u === this.size ||
                            (o && u === this.size - 1) ||
                            -1 === u
                        )
                            return this.set(t, r), this
                        let c = this.size + +!o
                        a < 0 && l++
                        let h = [...d(this, n)],
                            p = !1
                        for (let e = l; e < c; e++)
                            if (l === e) {
                                let n = h[e]
                                h[e] === t && (n = h[e + 1]),
                                    o && this.delete(t),
                                    (i = this.get(n)),
                                    this.set(t, r)
                            } else {
                                p || h[e - 1] !== t || (p = !0)
                                let r = h[p ? e : e - 1],
                                    n = i
                                ;(i = this.get(r)),
                                    this.delete(r),
                                    this.set(r, n)
                            }
                        return this
                    }
                    with(t, r, n) {
                        let i = new e(this)
                        return i.insert(t, r, n), i
                    }
                    before(e) {
                        let t = d(this, n).indexOf(e) - 1
                        if (!(t < 0)) return this.entryAt(t)
                    }
                    setBefore(e, t, r) {
                        let i = d(this, n).indexOf(e)
                        return -1 === i ? this : this.insert(i, t, r)
                    }
                    after(e) {
                        let t = d(this, n).indexOf(e)
                        if (
                            -1 !==
                            (t = -1 === t || t === this.size - 1 ? -1 : t + 1)
                        )
                            return this.entryAt(t)
                    }
                    setAfter(e, t, r) {
                        let i = d(this, n).indexOf(e)
                        return -1 === i ? this : this.insert(i + 1, t, r)
                    }
                    first() {
                        return this.entryAt(0)
                    }
                    last() {
                        return this.entryAt(-1)
                    }
                    clear() {
                        return h(this, n, []), super.clear()
                    }
                    delete(e) {
                        let t = super.delete(e)
                        return (
                            t && d(this, n).splice(d(this, n).indexOf(e), 1), t
                        )
                    }
                    deleteAt(e) {
                        let t = this.keyAt(e)
                        return void 0 !== t && this.delete(t)
                    }
                    at(e) {
                        let t = b(d(this, n), e)
                        if (void 0 !== t) return this.get(t)
                    }
                    entryAt(e) {
                        let t = b(d(this, n), e)
                        if (void 0 !== t) return [t, this.get(t)]
                    }
                    indexOf(e) {
                        return d(this, n).indexOf(e)
                    }
                    keyAt(e) {
                        return b(d(this, n), e)
                    }
                    from(e, t) {
                        let r = this.indexOf(e)
                        if (-1 === r) return
                        let n = r + t
                        return (
                            n < 0 && (n = 0),
                            n >= this.size && (n = this.size - 1),
                            this.at(n)
                        )
                    }
                    keyFrom(e, t) {
                        let r = this.indexOf(e)
                        if (-1 === r) return
                        let n = r + t
                        return (
                            n < 0 && (n = 0),
                            n >= this.size && (n = this.size - 1),
                            this.keyAt(n)
                        )
                    }
                    find(e, t) {
                        let r = 0
                        for (let n of this) {
                            if (Reflect.apply(e, t, [n, r, this])) return n
                            r++
                        }
                    }
                    findIndex(e, t) {
                        let r = 0
                        for (let n of this) {
                            if (Reflect.apply(e, t, [n, r, this])) return r
                            r++
                        }
                        return -1
                    }
                    filter(t, r) {
                        let n = [],
                            i = 0
                        for (let e of this)
                            Reflect.apply(t, r, [e, i, this]) && n.push(e), i++
                        return new e(n)
                    }
                    map(t, r) {
                        let n = [],
                            i = 0
                        for (let e of this)
                            n.push([e[0], Reflect.apply(t, r, [e, i, this])]),
                                i++
                        return new e(n)
                    }
                    reduce() {
                        for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                        )
                            t[r] = arguments[r]
                        let [n, i] = t,
                            o = 0,
                            s = null != i ? i : this.at(0)
                        for (let e of this)
                            (s =
                                0 === o && 1 === t.length
                                    ? e
                                    : Reflect.apply(n, this, [s, e, o, this])),
                                o++
                        return s
                    }
                    reduceRight() {
                        for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                        )
                            t[r] = arguments[r]
                        let [n, i] = t,
                            o = null != i ? i : this.at(-1)
                        for (let e = this.size - 1; e >= 0; e--) {
                            let r = this.at(e)
                            o =
                                e === this.size - 1 && 1 === t.length
                                    ? r
                                    : Reflect.apply(n, this, [o, r, e, this])
                        }
                        return o
                    }
                    toSorted(t) {
                        return new e([...this.entries()].sort(t))
                    }
                    toReversed() {
                        let t = new e()
                        for (let e = this.size - 1; e >= 0; e--) {
                            let r = this.keyAt(e),
                                n = this.get(r)
                            t.set(r, n)
                        }
                        return t
                    }
                    toSpliced() {
                        for (
                            var t = arguments.length, r = Array(t), n = 0;
                            n < t;
                            n++
                        )
                            r[n] = arguments[n]
                        let i = [...this.entries()]
                        return i.splice(...r), new e(i)
                    }
                    slice(t, r) {
                        let n = new e(),
                            i = this.size - 1
                        if (void 0 === t) return n
                        t < 0 && (t += this.size),
                            void 0 !== r && r > 0 && (i = r - 1)
                        for (let e = t; e <= i; e++) {
                            let t = this.keyAt(e),
                                r = this.get(t)
                            n.set(t, r)
                        }
                        return n
                    }
                    every(e, t) {
                        let r = 0
                        for (let n of this) {
                            if (!Reflect.apply(e, t, [n, r, this])) return !1
                            r++
                        }
                        return !0
                    }
                    some(e, t) {
                        let r = 0
                        for (let n of this) {
                            if (Reflect.apply(e, t, [n, r, this])) return !0
                            r++
                        }
                        return !1
                    }
                    constructor(e) {
                        super(e),
                            (function (e, t, r) {
                                if (t.has(e))
                                    throw TypeError(
                                        'Cannot initialize the same private elements twice on an object'
                                    )
                                t.set(e, r)
                            })(this, n, { writable: !0, value: void 0 }),
                            h(this, n, [...super.keys()]),
                            y.set(this, !0)
                    }
                }
            var w = r(8946),
                k = r(8142),
                E = r(222),
                P = r(3558),
                S = a.createContext(void 0)
            function A(e) {
                let t = a.useContext(S)
                return e || t || 'ltr'
            }
            var T = 'rovingFocusGroup.onEntryFocus',
                C = { bubbles: !1, cancelable: !0 },
                M = 'RovingFocusGroup',
                [j, R, O] = (function (e) {
                    let t = e + 'CollectionProvider',
                        [r, n] = (0, u.A)(t),
                        [l, c] = r(t, {
                            collectionRef: { current: null },
                            itemMap: new Map(),
                        }),
                        d = (e) => {
                            let { scope: t, children: r } = e,
                                n = a.useRef(null),
                                i = a.useRef(new Map()).current
                            return (0, f.jsx)(l, {
                                scope: t,
                                itemMap: i,
                                collectionRef: n,
                                children: r,
                            })
                        }
                    d.displayName = t
                    let h = e + 'CollectionSlot',
                        g = m(h),
                        v = a.forwardRef((e, t) => {
                            let { scope: r, children: n } = e,
                                i = c(h, r),
                                o = (0, p.s)(t, i.collectionRef)
                            return (0, f.jsx)(g, { ref: o, children: n })
                        })
                    v.displayName = h
                    let y = e + 'CollectionItemSlot',
                        b = 'data-radix-collection-item',
                        x = m(y),
                        w = a.forwardRef((e, t) => {
                            let { scope: r, children: n } = e,
                                l = (0, s._)(e, ['scope', 'children']),
                                u = a.useRef(null),
                                d = (0, p.s)(t, u),
                                h = c(y, r)
                            return (
                                a.useEffect(
                                    () => (
                                        h.itemMap.set(
                                            u,
                                            (0, i._)({ ref: u }, l)
                                        ),
                                        () => void h.itemMap.delete(u)
                                    )
                                ),
                                (0, f.jsx)(
                                    x,
                                    (0, o._)((0, i._)({}, { [b]: '' }), {
                                        ref: d,
                                        children: n,
                                    })
                                )
                            )
                        })
                    return (
                        (w.displayName = y),
                        [
                            { Provider: d, Slot: v, ItemSlot: w },
                            function (t) {
                                let r = c(e + 'CollectionConsumer', t)
                                return a.useCallback(() => {
                                    let e = r.collectionRef.current
                                    if (!e) return []
                                    let t = Array.from(
                                        e.querySelectorAll('['.concat(b, ']'))
                                    )
                                    return Array.from(r.itemMap.values()).sort(
                                        (e, r) =>
                                            t.indexOf(e.ref.current) -
                                            t.indexOf(r.ref.current)
                                    )
                                }, [r.collectionRef, r.itemMap])
                            },
                            n,
                        ]
                    )
                })(M),
                [D, _] = (0, u.A)(M, [O]),
                [V, L] = D(M),
                N = a.forwardRef((e, t) =>
                    (0, f.jsx)(j.Provider, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, f.jsx)(j.Slot, {
                            scope: e.__scopeRovingFocusGroup,
                            children: (0, f.jsx)(
                                I,
                                (0, o._)((0, i._)({}, e), { ref: t })
                            ),
                        }),
                    })
                )
            N.displayName = M
            var I = a.forwardRef((e, t) => {
                    let {
                            __scopeRovingFocusGroup: r,
                            orientation: n,
                            loop: u = !1,
                            dir: c,
                            currentTabStopId: d,
                            defaultCurrentTabStopId: h,
                            onCurrentTabStopIdChange: m,
                            onEntryFocus: g,
                            preventScrollOnEntryFocus: v = !1,
                        } = e,
                        y = (0, s._)(e, [
                            '__scopeRovingFocusGroup',
                            'orientation',
                            'loop',
                            'dir',
                            'currentTabStopId',
                            'defaultCurrentTabStopId',
                            'onCurrentTabStopIdChange',
                            'onEntryFocus',
                            'preventScrollOnEntryFocus',
                        ]),
                        b = a.useRef(null),
                        x = (0, p.s)(t, b),
                        w = A(c),
                        [S, j] = (0, P.i)({
                            prop: d,
                            defaultProp: null != h ? h : null,
                            onChange: m,
                            caller: M,
                        }),
                        [O, D] = a.useState(!1),
                        _ = (0, E.c)(g),
                        L = R(r),
                        N = a.useRef(!1),
                        [I, F] = a.useState(0)
                    return (
                        a.useEffect(() => {
                            let e = b.current
                            if (e)
                                return (
                                    e.addEventListener(T, _),
                                    () => e.removeEventListener(T, _)
                                )
                        }, [_]),
                        (0, f.jsx)(V, {
                            scope: r,
                            orientation: n,
                            dir: w,
                            loop: u,
                            currentTabStopId: S,
                            onItemFocus: a.useCallback((e) => j(e), [j]),
                            onItemShiftTab: a.useCallback(() => D(!0), []),
                            onFocusableItemAdd: a.useCallback(
                                () => F((e) => e + 1),
                                []
                            ),
                            onFocusableItemRemove: a.useCallback(
                                () => F((e) => e - 1),
                                []
                            ),
                            children: (0, f.jsx)(
                                k.sG.div,
                                (0, o._)(
                                    (0, i._)(
                                        {
                                            tabIndex: O || 0 === I ? -1 : 0,
                                            'data-orientation': n,
                                        },
                                        y
                                    ),
                                    {
                                        ref: x,
                                        style: (0, i._)(
                                            { outline: 'none' },
                                            e.style
                                        ),
                                        onMouseDown: (0, l.mK)(
                                            e.onMouseDown,
                                            () => {
                                                N.current = !0
                                            }
                                        ),
                                        onFocus: (0, l.mK)(e.onFocus, (e) => {
                                            let t = !N.current
                                            if (
                                                e.target === e.currentTarget &&
                                                t &&
                                                !O
                                            ) {
                                                let t = new CustomEvent(T, C)
                                                if (
                                                    (e.currentTarget.dispatchEvent(
                                                        t
                                                    ),
                                                    !t.defaultPrevented)
                                                ) {
                                                    let e = L().filter(
                                                        (e) => e.focusable
                                                    )
                                                    W(
                                                        [
                                                            e.find(
                                                                (e) => e.active
                                                            ),
                                                            e.find(
                                                                (e) =>
                                                                    e.id === S
                                                            ),
                                                            ...e,
                                                        ]
                                                            .filter(Boolean)
                                                            .map(
                                                                (e) =>
                                                                    e.ref
                                                                        .current
                                                            ),
                                                        v
                                                    )
                                                }
                                            }
                                            N.current = !1
                                        }),
                                        onBlur: (0, l.mK)(e.onBlur, () =>
                                            D(!1)
                                        ),
                                    }
                                )
                            ),
                        })
                    )
                }),
                F = 'RovingFocusGroupItem',
                B = a.forwardRef((e, t) => {
                    let {
                            __scopeRovingFocusGroup: r,
                            focusable: n = !0,
                            active: u = !1,
                            tabStopId: c,
                            children: d,
                        } = e,
                        h = (0, s._)(e, [
                            '__scopeRovingFocusGroup',
                            'focusable',
                            'active',
                            'tabStopId',
                            'children',
                        ]),
                        p = (0, w.B)(),
                        m = c || p,
                        g = L(F, r),
                        v = g.currentTabStopId === m,
                        y = R(r),
                        {
                            onFocusableItemAdd: b,
                            onFocusableItemRemove: x,
                            currentTabStopId: E,
                        } = g
                    return (
                        a.useEffect(() => {
                            if (n) return b(), () => x()
                        }, [n, b, x]),
                        (0, f.jsx)(j.ItemSlot, {
                            scope: r,
                            id: m,
                            focusable: n,
                            active: u,
                            children: (0, f.jsx)(
                                k.sG.span,
                                (0, o._)(
                                    (0, i._)(
                                        {
                                            tabIndex: v ? 0 : -1,
                                            'data-orientation': g.orientation,
                                        },
                                        h
                                    ),
                                    {
                                        ref: t,
                                        onMouseDown: (0, l.mK)(
                                            e.onMouseDown,
                                            (e) => {
                                                n
                                                    ? g.onItemFocus(m)
                                                    : e.preventDefault()
                                            }
                                        ),
                                        onFocus: (0, l.mK)(e.onFocus, () =>
                                            g.onItemFocus(m)
                                        ),
                                        onKeyDown: (0, l.mK)(
                                            e.onKeyDown,
                                            (e) => {
                                                if (
                                                    'Tab' === e.key &&
                                                    e.shiftKey
                                                )
                                                    return void g.onItemShiftTab()
                                                if (
                                                    e.target !== e.currentTarget
                                                )
                                                    return
                                                let t = (function (e, t, r) {
                                                    var n
                                                    let i =
                                                        ((n = e.key),
                                                        'rtl' !== r
                                                            ? n
                                                            : 'ArrowLeft' === n
                                                            ? 'ArrowRight'
                                                            : 'ArrowRight' === n
                                                            ? 'ArrowLeft'
                                                            : n)
                                                    if (
                                                        !(
                                                            'vertical' === t &&
                                                            [
                                                                'ArrowLeft',
                                                                'ArrowRight',
                                                            ].includes(i)
                                                        ) &&
                                                        !(
                                                            'horizontal' ===
                                                                t &&
                                                            [
                                                                'ArrowUp',
                                                                'ArrowDown',
                                                            ].includes(i)
                                                        )
                                                    )
                                                        return z[i]
                                                })(e, g.orientation, g.dir)
                                                if (void 0 !== t) {
                                                    if (
                                                        e.metaKey ||
                                                        e.ctrlKey ||
                                                        e.altKey ||
                                                        e.shiftKey
                                                    )
                                                        return
                                                    e.preventDefault()
                                                    let r = y()
                                                        .filter(
                                                            (e) => e.focusable
                                                        )
                                                        .map(
                                                            (e) => e.ref.current
                                                        )
                                                    if ('last' === t)
                                                        r.reverse()
                                                    else if (
                                                        'prev' === t ||
                                                        'next' === t
                                                    ) {
                                                        'prev' === t &&
                                                            r.reverse()
                                                        let n = r.indexOf(
                                                            e.currentTarget
                                                        )
                                                        r = g.loop
                                                            ? (function (e, t) {
                                                                  return e.map(
                                                                      (r, n) =>
                                                                          e[
                                                                              (t +
                                                                                  n) %
                                                                                  e.length
                                                                          ]
                                                                  )
                                                              })(r, n + 1)
                                                            : r.slice(n + 1)
                                                    }
                                                    setTimeout(() => W(r))
                                                }
                                            }
                                        ),
                                        children:
                                            'function' == typeof d
                                                ? d({
                                                      isCurrentTabStop: v,
                                                      hasTabStop: null != E,
                                                  })
                                                : d,
                                    }
                                )
                            ),
                        })
                    )
                })
            B.displayName = F
            var z = {
                ArrowLeft: 'prev',
                ArrowUp: 'prev',
                ArrowRight: 'next',
                ArrowDown: 'next',
                PageUp: 'first',
                Home: 'first',
                PageDown: 'last',
                End: 'last',
            }
            function W(e) {
                let t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                    r = document.activeElement
                for (let n of e)
                    if (
                        n === r ||
                        (n.focus({ preventScroll: t }),
                        document.activeElement !== r)
                    )
                        return
            }
            var U = r(6842),
                G = 'Tabs',
                [$, K] = (0, u.A)(G, [_]),
                q = _(),
                [H, X] = $(G),
                Y = a.forwardRef((e, t) => {
                    let {
                            __scopeTabs: r,
                            value: n,
                            onValueChange: a,
                            defaultValue: l,
                            orientation: u = 'horizontal',
                            dir: c,
                            activationMode: d = 'automatic',
                        } = e,
                        h = (0, s._)(e, [
                            '__scopeTabs',
                            'value',
                            'onValueChange',
                            'defaultValue',
                            'orientation',
                            'dir',
                            'activationMode',
                        ]),
                        p = A(c),
                        [m, g] = (0, P.i)({
                            prop: n,
                            onChange: a,
                            defaultProp: null != l ? l : '',
                            caller: G,
                        })
                    return (0, f.jsx)(H, {
                        scope: r,
                        baseId: (0, w.B)(),
                        value: m,
                        onValueChange: g,
                        orientation: u,
                        dir: p,
                        activationMode: d,
                        children: (0, f.jsx)(
                            k.sG.div,
                            (0, o._)(
                                (0, i._)({ dir: p, 'data-orientation': u }, h),
                                { ref: t }
                            )
                        ),
                    })
                })
            Y.displayName = G
            var Q = 'TabsList',
                Z = a.forwardRef((e, t) => {
                    let { __scopeTabs: r, loop: n = !0 } = e,
                        a = (0, s._)(e, ['__scopeTabs', 'loop']),
                        l = X(Q, r),
                        u = q(r)
                    return (0, f.jsx)(
                        N,
                        (0, o._)((0, i._)({ asChild: !0 }, u), {
                            orientation: l.orientation,
                            dir: l.dir,
                            loop: n,
                            children: (0, f.jsx)(
                                k.sG.div,
                                (0, o._)(
                                    (0, i._)(
                                        {
                                            role: 'tablist',
                                            'aria-orientation': l.orientation,
                                        },
                                        a
                                    ),
                                    { ref: t }
                                )
                            ),
                        })
                    )
                })
            Z.displayName = Q
            var J = 'TabsTrigger',
                ee = a.forwardRef((e, t) => {
                    let { __scopeTabs: r, value: n, disabled: a = !1 } = e,
                        u = (0, s._)(e, ['__scopeTabs', 'value', 'disabled']),
                        c = X(J, r),
                        d = q(r),
                        h = en(c.baseId, n),
                        p = ei(c.baseId, n),
                        m = n === c.value
                    return (0, f.jsx)(
                        B,
                        (0, o._)((0, i._)({ asChild: !0 }, d), {
                            focusable: !a,
                            active: m,
                            children: (0, f.jsx)(
                                k.sG.button,
                                (0, o._)(
                                    (0, i._)(
                                        {
                                            type: 'button',
                                            role: 'tab',
                                            'aria-selected': m,
                                            'aria-controls': p,
                                            'data-state': m
                                                ? 'active'
                                                : 'inactive',
                                            'data-disabled': a ? '' : void 0,
                                            disabled: a,
                                            id: h,
                                        },
                                        u
                                    ),
                                    {
                                        ref: t,
                                        onMouseDown: (0, l.mK)(
                                            e.onMouseDown,
                                            (e) => {
                                                a ||
                                                0 !== e.button ||
                                                !1 !== e.ctrlKey
                                                    ? e.preventDefault()
                                                    : c.onValueChange(n)
                                            }
                                        ),
                                        onKeyDown: (0, l.mK)(
                                            e.onKeyDown,
                                            (e) => {
                                                ;[' ', 'Enter'].includes(
                                                    e.key
                                                ) && c.onValueChange(n)
                                            }
                                        ),
                                        onFocus: (0, l.mK)(e.onFocus, () => {
                                            let e =
                                                'manual' !== c.activationMode
                                            m || a || !e || c.onValueChange(n)
                                        }),
                                    }
                                )
                            ),
                        })
                    )
                })
            ee.displayName = J
            var et = 'TabsContent',
                er = a.forwardRef((e, t) => {
                    let {
                            __scopeTabs: r,
                            value: n,
                            forceMount: l,
                            children: u,
                        } = e,
                        c = (0, s._)(e, [
                            '__scopeTabs',
                            'value',
                            'forceMount',
                            'children',
                        ]),
                        d = X(et, r),
                        h = en(d.baseId, n),
                        p = ei(d.baseId, n),
                        m = n === d.value,
                        g = a.useRef(m)
                    return (
                        a.useEffect(() => {
                            let e = requestAnimationFrame(
                                () => (g.current = !1)
                            )
                            return () => cancelAnimationFrame(e)
                        }, []),
                        (0, f.jsx)(U.C, {
                            present: l || m,
                            children: (r) => {
                                let { present: n } = r
                                return (0, f.jsx)(
                                    k.sG.div,
                                    (0, o._)(
                                        (0, i._)(
                                            {
                                                'data-state': m
                                                    ? 'active'
                                                    : 'inactive',
                                                'data-orientation':
                                                    d.orientation,
                                                role: 'tabpanel',
                                                'aria-labelledby': h,
                                                hidden: !n,
                                                id: p,
                                                tabIndex: 0,
                                            },
                                            c
                                        ),
                                        {
                                            ref: t,
                                            style: (0, o._)(
                                                (0, i._)({}, e.style),
                                                {
                                                    animationDuration: g.current
                                                        ? '0s'
                                                        : void 0,
                                                }
                                            ),
                                            children: n && u,
                                        }
                                    )
                                )
                            },
                        })
                    )
                })
            function en(e, t) {
                return ''.concat(e, '-trigger-').concat(t)
            }
            function ei(e, t) {
                return ''.concat(e, '-content-').concat(t)
            }
            er.displayName = et
            var eo = Y,
                es = Z,
                ea = ee,
                el = er
        },
        4531: (e, t, r) => {
            r.d(t, { S: () => n })
            let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        4652: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        })
                })(t, {
                    default: function () {
                        return l
                    },
                    getImageProps: function () {
                        return a
                    },
                })
            let n = r(8140),
                i = r(5040),
                o = r(1356),
                s = n._(r(1124))
            function a(e) {
                let { props: t } = (0, i.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [
                            640, 750, 828, 1080, 1200, 1920, 2048, 3840,
                        ],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: '/_next/image/',
                        loader: 'default',
                        dangerouslyAllowSVG: !1,
                        unoptimized: !0,
                    },
                })
                for (let [e, r] of Object.entries(t))
                    void 0 === r && delete t[e]
                return { props: t }
            }
            let l = o.Image
        },
        4684: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('github', [
                [
                    'path',
                    {
                        d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
                        key: 'tonef',
                    },
                ],
                ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
            ])
        },
        4807: (e, t, r) => {
            r.d(t, { V: () => a })
            var n = r(7822),
                i = r(2419),
                o = r(9150),
                s = r(3919)
            let a = {
                test: (0, s.$)('hsl', 'hue'),
                parse: (0, s.q)('hue', 'saturation', 'lightness'),
                transform: ({
                    hue: e,
                    saturation: t,
                    lightness: r,
                    alpha: s = 1,
                }) =>
                    'hsla(' +
                    Math.round(e) +
                    ', ' +
                    i.KN.transform((0, o.a)(t)) +
                    ', ' +
                    i.KN.transform((0, o.a)(r)) +
                    ', ' +
                    (0, o.a)(n.X4.transform(s)) +
                    ')',
            }
        },
        4841: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t)
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        })
                })(t, {
                    default: function () {
                        return m
                    },
                    defaultHead: function () {
                        return d
                    },
                })
            let n = r(8140),
                i = r(9417),
                o = r(5155),
                s = i._(r(2115)),
                a = n._(r(1262)),
                l = r(737),
                u = r(2073),
                c = r(861)
            function d(e) {
                void 0 === e && (e = !1)
                let t = [(0, o.jsx)('meta', { charSet: 'utf-8' }, 'charset')]
                return (
                    e ||
                        t.push(
                            (0, o.jsx)(
                                'meta',
                                {
                                    name: 'viewport',
                                    content: 'width=device-width',
                                },
                                'viewport'
                            )
                        ),
                    t
                )
            }
            function h(e, t) {
                return 'string' == typeof t || 'number' == typeof t
                    ? e
                    : t.type === s.default.Fragment
                    ? e.concat(
                          s.default.Children.toArray(t.props.children).reduce(
                              (e, t) =>
                                  'string' == typeof t || 'number' == typeof t
                                      ? e
                                      : e.concat(t),
                              []
                          )
                      )
                    : e.concat(t)
            }
            r(4781)
            let p = ['name', 'httpEquiv', 'charSet', 'itemProp']
            function f(e, t) {
                let { inAmpMode: r } = t
                return e
                    .reduce(h, [])
                    .reverse()
                    .concat(d(r).reverse())
                    .filter(
                        (function () {
                            let e = new Set(),
                                t = new Set(),
                                r = new Set(),
                                n = {}
                            return (i) => {
                                let o = !0,
                                    s = !1
                                if (
                                    i.key &&
                                    'number' != typeof i.key &&
                                    i.key.indexOf('$') > 0
                                ) {
                                    s = !0
                                    let t = i.key.slice(i.key.indexOf('$') + 1)
                                    e.has(t) ? (o = !1) : e.add(t)
                                }
                                switch (i.type) {
                                    case 'title':
                                    case 'base':
                                        t.has(i.type) ? (o = !1) : t.add(i.type)
                                        break
                                    case 'meta':
                                        for (
                                            let e = 0, t = p.length;
                                            e < t;
                                            e++
                                        ) {
                                            let t = p[e]
                                            if (i.props.hasOwnProperty(t))
                                                if ('charSet' === t)
                                                    r.has(t)
                                                        ? (o = !1)
                                                        : r.add(t)
                                                else {
                                                    let e = i.props[t],
                                                        r = n[t] || new Set()
                                                    ;('name' !== t || !s) &&
                                                    r.has(e)
                                                        ? (o = !1)
                                                        : (r.add(e), (n[t] = r))
                                                }
                                        }
                                }
                                return o
                            }
                        })()
                    )
                    .reverse()
                    .map((e, t) => {
                        let r = e.key || t
                        return s.default.cloneElement(e, { key: r })
                    })
            }
            let m = function (e) {
                let { children: t } = e,
                    r = (0, s.useContext)(l.AmpStateContext),
                    n = (0, s.useContext)(u.HeadManagerContext)
                return (0, o.jsx)(a.default, {
                    reduceComponentsToState: f,
                    headManager: n,
                    inAmpMode: (0, c.isInAmpMode)(r),
                    children: t,
                })
            }
            ;('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default))
        },
        4888: (e, t, r) => {
            r.d(t, { V: () => c, f: () => f })
            var n = r(5389)
            let i =
                /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
            var o = r(4531),
                s = r(9150)
            let a = 'number',
                l = 'color',
                u =
                    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
            function c(e) {
                let t = e.toString(),
                    r = [],
                    i = { color: [], number: [], var: [] },
                    o = [],
                    s = 0,
                    c = t
                        .replace(
                            u,
                            (e) => (
                                n.y.test(e)
                                    ? (i.color.push(s),
                                      o.push(l),
                                      r.push(n.y.parse(e)))
                                    : e.startsWith('var(')
                                    ? (i.var.push(s), o.push('var'), r.push(e))
                                    : (i.number.push(s),
                                      o.push(a),
                                      r.push(parseFloat(e))),
                                ++s,
                                '${}'
                            )
                        )
                        .split('${}')
                return { values: r, split: c, indexes: i, types: o }
            }
            function d(e) {
                return c(e).values
            }
            function h(e) {
                let { split: t, types: r } = c(e),
                    i = t.length
                return (e) => {
                    let o = ''
                    for (let u = 0; u < i; u++)
                        if (((o += t[u]), void 0 !== e[u])) {
                            let t = r[u]
                            t === a
                                ? (o += (0, s.a)(e[u]))
                                : t === l
                                ? (o += n.y.transform(e[u]))
                                : (o += e[u])
                        }
                    return o
                }
            }
            let p = (e) =>
                    'number' == typeof e
                        ? 0
                        : n.y.test(e)
                        ? n.y.getAnimatableNone(e)
                        : e,
                f = {
                    test: function (e) {
                        return (
                            isNaN(e) &&
                            'string' == typeof e &&
                            (e.match(o.S)?.length || 0) +
                                (e.match(i)?.length || 0) >
                                0
                        )
                    },
                    parse: d,
                    createTransformer: h,
                    getAnimatableNone: function (e) {
                        let t = d(e)
                        return h(e)(t.map(p))
                    },
                }
        },
        4995: (e, t, r) => {
            r.d(t, { J: () => n })
            let n = (0, r(178).p)(() => void 0 !== window.ScrollTimeline)
        },
        5040: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 })
            let n = r(1983),
                i = r(5849),
                o = r(7389)
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'getImgProps', {
                    enumerable: !0,
                    get: function () {
                        return d
                    },
                }),
                r(4781)
            let s = r(4105),
                a = r(821),
                l = ['-moz-initial', 'fill', 'none', 'scale-down', void 0]
            function u(e) {
                return void 0 !== e.default
            }
            function c(e) {
                return void 0 === e
                    ? e
                    : 'number' == typeof e
                    ? Number.isFinite(e)
                        ? e
                        : NaN
                    : 'string' == typeof e && /^[0-9]+$/.test(e)
                    ? parseInt(e, 10)
                    : NaN
            }
            function d(e, t) {
                var r, d
                let h,
                    p,
                    f,
                    {
                        src: m,
                        sizes: g,
                        unoptimized: v = !1,
                        priority: y = !1,
                        loading: b,
                        className: x,
                        quality: w,
                        width: k,
                        height: E,
                        fill: P = !1,
                        style: S,
                        overrideSrc: A,
                        onLoad: T,
                        onLoadingComplete: C,
                        placeholder: M = 'empty',
                        blurDataURL: j,
                        fetchPriority: R,
                        decoding: O = 'async',
                        layout: D,
                        objectFit: _,
                        objectPosition: V,
                        lazyBoundary: L,
                        lazyRoot: N,
                    } = e,
                    I = o._(e, [
                        'src',
                        'sizes',
                        'unoptimized',
                        'priority',
                        'loading',
                        'className',
                        'quality',
                        'width',
                        'height',
                        'fill',
                        'style',
                        'overrideSrc',
                        'onLoad',
                        'onLoadingComplete',
                        'placeholder',
                        'blurDataURL',
                        'fetchPriority',
                        'decoding',
                        'layout',
                        'objectFit',
                        'objectPosition',
                        'lazyBoundary',
                        'lazyRoot',
                    ]),
                    {
                        imgConf: F,
                        showAltText: B,
                        blurComplete: z,
                        defaultLoader: W,
                    } = t,
                    U = F || a.imageConfigDefault
                if ('allSizes' in U) h = U
                else {
                    let e = [...U.deviceSizes, ...U.imageSizes].sort(
                            (e, t) => e - t
                        ),
                        t = U.deviceSizes.sort((e, t) => e - t),
                        o =
                            null == (r = U.qualities)
                                ? void 0
                                : r.sort((e, t) => e - t)
                    h = i._(n._({}, U), {
                        allSizes: e,
                        deviceSizes: t,
                        qualities: o,
                    })
                }
                if (void 0 === W)
                    throw Object.defineProperty(
                        Error(
                            'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
                        ),
                        '__NEXT_ERROR_CODE',
                        { value: 'E163', enumerable: !1, configurable: !0 }
                    )
                let G = I.loader || W
                delete I.loader, delete I.srcSet
                let $ = '__next_img_default' in G
                if ($) {
                    if ('custom' === h.loader)
                        throw Object.defineProperty(
                            Error(
                                'Image with src "' +
                                    m +
                                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                            ),
                            '__NEXT_ERROR_CODE',
                            { value: 'E252', enumerable: !1, configurable: !0 }
                        )
                } else {
                    let e = G
                    G = (t) => {
                        let { config: r } = t
                        return e(o._(t, ['config']))
                    }
                }
                if (D) {
                    'fill' === D && (P = !0)
                    let e = {
                        intrinsic: { maxWidth: '100%', height: 'auto' },
                        responsive: { width: '100%', height: 'auto' },
                    }[D]
                    e && (S = n._({}, S, e))
                    let t = { responsive: '100vw', fill: '100vw' }[D]
                    t && !g && (g = t)
                }
                let K = '',
                    q = c(k),
                    H = c(E)
                if (
                    (d = m) &&
                    'object' == typeof d &&
                    (u(d) || void 0 !== d.src)
                ) {
                    let e = u(m) ? m.default : m
                    if (!e.src)
                        throw Object.defineProperty(
                            Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                                    JSON.stringify(e)
                            ),
                            '__NEXT_ERROR_CODE',
                            { value: 'E460', enumerable: !1, configurable: !0 }
                        )
                    if (!e.height || !e.width)
                        throw Object.defineProperty(
                            Error(
                                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                                    JSON.stringify(e)
                            ),
                            '__NEXT_ERROR_CODE',
                            { value: 'E48', enumerable: !1, configurable: !0 }
                        )
                    if (
                        ((p = e.blurWidth),
                        (f = e.blurHeight),
                        (j = j || e.blurDataURL),
                        (K = e.src),
                        !P)
                    )
                        if (q || H) {
                            if (q && !H) {
                                let t = q / e.width
                                H = Math.round(e.height * t)
                            } else if (!q && H) {
                                let t = H / e.height
                                q = Math.round(e.width * t)
                            }
                        } else (q = e.width), (H = e.height)
                }
                let X = !y && ('lazy' === b || void 0 === b)
                ;(!(m = 'string' == typeof m ? m : K) ||
                    m.startsWith('data:') ||
                    m.startsWith('blob:')) &&
                    ((v = !0), (X = !1)),
                    h.unoptimized && (v = !0),
                    $ &&
                        !h.dangerouslyAllowSVG &&
                        m.split('?', 1)[0].endsWith('.svg') &&
                        (v = !0)
                let Y = c(w),
                    Q = Object.assign(
                        P
                            ? {
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  objectFit: _,
                                  objectPosition: V,
                              }
                            : {},
                        B ? {} : { color: 'transparent' },
                        S
                    ),
                    Z =
                        z || 'empty' === M
                            ? null
                            : 'blur' === M
                            ? 'url("data:image/svg+xml;charset=utf-8,' +
                              (0, s.getImageBlurSvg)({
                                  widthInt: q,
                                  heightInt: H,
                                  blurWidth: p,
                                  blurHeight: f,
                                  blurDataURL: j || '',
                                  objectFit: Q.objectFit,
                              }) +
                              '")'
                            : 'url("' + M + '")',
                    J = l.includes(Q.objectFit)
                        ? 'fill' === Q.objectFit
                            ? '100% 100%'
                            : 'cover'
                        : Q.objectFit,
                    ee = Z
                        ? {
                              backgroundSize: J,
                              backgroundPosition: Q.objectPosition || '50% 50%',
                              backgroundRepeat: 'no-repeat',
                              backgroundImage: Z,
                          }
                        : {},
                    et = (function (e) {
                        let {
                            config: t,
                            src: r,
                            unoptimized: n,
                            width: i,
                            quality: o,
                            sizes: s,
                            loader: a,
                        } = e
                        if (n) return { src: r, srcSet: void 0, sizes: void 0 }
                        let { widths: l, kind: u } = (function (e, t, r) {
                                let { deviceSizes: n, allSizes: i } = e
                                if (r) {
                                    let e = /(^|\s)(1?\d?\d)vw/g,
                                        t = []
                                    for (let n; (n = e.exec(r)); )
                                        t.push(parseInt(n[2]))
                                    if (t.length) {
                                        let e = 0.01 * Math.min(...t)
                                        return {
                                            widths: i.filter(
                                                (t) => t >= n[0] * e
                                            ),
                                            kind: 'w',
                                        }
                                    }
                                    return { widths: i, kind: 'w' }
                                }
                                return 'number' != typeof t
                                    ? { widths: n, kind: 'w' }
                                    : {
                                          widths: [
                                              ...new Set(
                                                  [t, 2 * t].map(
                                                      (e) =>
                                                          i.find(
                                                              (t) => t >= e
                                                          ) || i[i.length - 1]
                                                  )
                                              ),
                                          ],
                                          kind: 'x',
                                      }
                            })(t, i, s),
                            c = l.length - 1
                        return {
                            sizes: s || 'w' !== u ? s : '100vw',
                            srcSet: l
                                .map(
                                    (e, n) =>
                                        a({
                                            config: t,
                                            src: r,
                                            quality: o,
                                            width: e,
                                        }) +
                                        ' ' +
                                        ('w' === u ? e : n + 1) +
                                        u
                                )
                                .join(', '),
                            src: a({
                                config: t,
                                src: r,
                                quality: o,
                                width: l[c],
                            }),
                        }
                    })({
                        config: h,
                        src: m,
                        unoptimized: v,
                        width: q,
                        quality: Y,
                        sizes: g,
                        loader: G,
                    })
                return {
                    props: i._(n._({}, I), {
                        loading: X ? 'lazy' : b,
                        fetchPriority: R,
                        width: q,
                        height: H,
                        decoding: O,
                        className: x,
                        style: n._({}, Q, ee),
                        sizes: et.sizes,
                        srcSet: et.srcSet,
                        src: A || et.src,
                    }),
                    meta: {
                        unoptimized: v,
                        priority: y,
                        placeholder: M,
                        fill: P,
                    },
                }
            }
        },
        5130: (e, t, r) => {
            r.d(t, { j: () => P })
            var n = r(3656),
                i = r(8041),
                o = r(1391),
                s = r(5389),
                a = r(4888),
                l = r(8894),
                u = r(4807)
            function c(e, t, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
                    ? e + (t - e) * 6 * r
                    : r < 0.5
                    ? t
                    : r < 2 / 3
                    ? e + (t - e) * (2 / 3 - r) * 6
                    : e
            }
            var d = r(1739)
            function h(e, t) {
                return (r) => (r > 0 ? t : e)
            }
            var p = r(9361)
            let f = (e, t, r) => {
                    let n = e * e,
                        i = r * (t * t - n) + n
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                m = [l.u, d.B, u.V]
            function g(e) {
                let t = m.find((t) => t.test(e))
                if (
                    ((0, i.$)(
                        !!t,
                        `'${e}' is not an animatable color. Use the equivalent color code instead.`,
                        'color-not-animatable'
                    ),
                    !t)
                )
                    return !1
                let r = t.parse(e)
                return (
                    t === u.V &&
                        (r = (function ({
                            hue: e,
                            saturation: t,
                            lightness: r,
                            alpha: n,
                        }) {
                            ;(e /= 360), (r /= 100)
                            let i = 0,
                                o = 0,
                                s = 0
                            if ((t /= 100)) {
                                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                                    a = 2 * r - n
                                ;(i = c(a, n, e + 1 / 3)),
                                    (o = c(a, n, e)),
                                    (s = c(a, n, e - 1 / 3))
                            } else i = o = s = r
                            return {
                                red: Math.round(255 * i),
                                green: Math.round(255 * o),
                                blue: Math.round(255 * s),
                                alpha: n,
                            }
                        })(r)),
                    r
                )
            }
            let v = (e, t) => {
                    let r = g(e),
                        n = g(t)
                    if (!r || !n) return h(e, t)
                    let i = { ...r }
                    return (e) => (
                        (i.red = f(r.red, n.red, e)),
                        (i.green = f(r.green, n.green, e)),
                        (i.blue = f(r.blue, n.blue, e)),
                        (i.alpha = (0, p.k)(r.alpha, n.alpha, e)),
                        d.B.transform(i)
                    )
                },
                y = new Set(['none', 'hidden'])
            function b(e, t) {
                return (r) => (0, p.k)(e, t, r)
            }
            function x(e) {
                return 'number' == typeof e
                    ? b
                    : 'string' == typeof e
                    ? (0, o.p)(e)
                        ? h
                        : s.y.test(e)
                        ? v
                        : E
                    : Array.isArray(e)
                    ? w
                    : 'object' == typeof e
                    ? s.y.test(e)
                        ? v
                        : k
                    : h
            }
            function w(e, t) {
                let r = [...e],
                    n = r.length,
                    i = e.map((e, r) => x(e)(e, t[r]))
                return (e) => {
                    for (let t = 0; t < n; t++) r[t] = i[t](e)
                    return r
                }
            }
            function k(e, t) {
                let r = { ...e, ...t },
                    n = {}
                for (let i in r)
                    void 0 !== e[i] &&
                        void 0 !== t[i] &&
                        (n[i] = x(e[i])(e[i], t[i]))
                return (e) => {
                    for (let t in n) r[t] = n[t](e)
                    return r
                }
            }
            let E = (e, t) => {
                let r = a.f.createTransformer(t),
                    o = (0, a.V)(e),
                    s = (0, a.V)(t)
                return o.indexes.var.length === s.indexes.var.length &&
                    o.indexes.color.length === s.indexes.color.length &&
                    o.indexes.number.length >= s.indexes.number.length
                    ? (y.has(e) && !s.values.length) ||
                      (y.has(t) && !o.values.length)
                        ? (function (e, t) {
                              return y.has(e)
                                  ? (r) => (r <= 0 ? e : t)
                                  : (r) => (r >= 1 ? t : e)
                          })(e, t)
                        : (0, n.F)(
                              w(
                                  (function (e, t) {
                                      let r = [],
                                          n = { color: 0, var: 0, number: 0 }
                                      for (
                                          let i = 0;
                                          i < t.values.length;
                                          i++
                                      ) {
                                          let o = t.types[i],
                                              s = e.indexes[o][n[o]],
                                              a = e.values[s] ?? 0
                                          ;(r[i] = a), n[o]++
                                      }
                                      return r
                                  })(o, s),
                                  s.values
                              ),
                              r
                          )
                    : ((0, i.$)(
                          !0,
                          `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
                          'complex-values-different'
                      ),
                      h(e, t))
            }
            function P(e, t, r) {
                return 'number' == typeof e &&
                    'number' == typeof t &&
                    'number' == typeof r
                    ? (0, p.k)(e, t, r)
                    : x(e)(e, t)
            }
        },
        5229: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('x', [
                ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
                ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
            ])
        },
        5239: (e, t, r) => {
            r.d(t, { default: () => i.a })
            var n = r(4652),
                i = r.n(n)
        },
        5242: (e, t, r) => {
            r.d(t, { f: () => n })
            function n(e, t) {
                return t ? (1e3 / t) * e : 0
            }
        },
        5379: (e, t, r) => {
            r.d(t, { D: () => d, N: () => h })
            var n = r(1983),
                i = r(5849),
                o = r(2115),
                s = (e, t, r, n, i, o, s, a) => {
                    let l = document.documentElement,
                        u = ['light', 'dark']
                    function c(t) {
                        var r
                        ;(Array.isArray(e) ? e : [e]).forEach((e) => {
                            let r = 'class' === e,
                                n = r && o ? i.map((e) => o[e] || e) : i
                            r
                                ? (l.classList.remove(...n),
                                  l.classList.add(o && o[t] ? o[t] : t))
                                : l.setAttribute(e, t)
                        }),
                            (r = t),
                            a && u.includes(r) && (l.style.colorScheme = r)
                    }
                    if (n) c(n)
                    else
                        try {
                            let e = localStorage.getItem(t) || r,
                                n =
                                    s && 'system' === e
                                        ? window.matchMedia(
                                              '(prefers-color-scheme: dark)'
                                          ).matches
                                            ? 'dark'
                                            : 'light'
                                        : e
                            c(n)
                        } catch (e) {}
                },
                a = ['light', 'dark'],
                l = '(prefers-color-scheme: dark)',
                u = o.createContext(void 0),
                c = { setTheme: (e) => {}, themes: [] },
                d = () => {
                    var e
                    return null != (e = o.useContext(u)) ? e : c
                },
                h = (e) =>
                    o.useContext(u)
                        ? o.createElement(o.Fragment, null, e.children)
                        : o.createElement(f, (0, n._)({}, e)),
                p = ['light', 'dark'],
                f = (e) => {
                    let {
                            forcedTheme: t,
                            disableTransitionOnChange: r = !1,
                            enableSystem: n = !0,
                            enableColorScheme: i = !0,
                            storageKey: s = 'theme',
                            themes: c = p,
                            defaultTheme: d = n ? 'system' : 'light',
                            attribute: h = 'data-theme',
                            value: f,
                            children: b,
                            nonce: x,
                            scriptProps: w,
                        } = e,
                        [k, E] = o.useState(() => g(s, d)),
                        [P, S] = o.useState(() => ('system' === k ? y() : k)),
                        A = f ? Object.values(f) : c,
                        T = o.useCallback(
                            (e) => {
                                let t = e
                                if (!t) return
                                'system' === e && n && (t = y())
                                let o = f ? f[t] : t,
                                    s = r ? v(x) : null,
                                    l = document.documentElement,
                                    u = (e) => {
                                        'class' === e
                                            ? (l.classList.remove(...A),
                                              o && l.classList.add(o))
                                            : e.startsWith('data-') &&
                                              (o
                                                  ? l.setAttribute(e, o)
                                                  : l.removeAttribute(e))
                                    }
                                if (
                                    (Array.isArray(h) ? h.forEach(u) : u(h), i)
                                ) {
                                    let e = a.includes(d) ? d : null,
                                        r = a.includes(t) ? t : e
                                    l.style.colorScheme = r
                                }
                                null == s || s()
                            },
                            [x]
                        ),
                        C = o.useCallback(
                            (e) => {
                                let t = 'function' == typeof e ? e(k) : e
                                E(t)
                                try {
                                    localStorage.setItem(s, t)
                                } catch (e) {}
                            },
                            [k]
                        ),
                        M = o.useCallback(
                            (e) => {
                                S(y(e)),
                                    'system' === k && n && !t && T('system')
                            },
                            [k, t]
                        )
                    o.useEffect(() => {
                        let e = window.matchMedia(l)
                        return e.addListener(M), M(e), () => e.removeListener(M)
                    }, [M]),
                        o.useEffect(() => {
                            let e = (e) => {
                                e.key === s &&
                                    (e.newValue ? E(e.newValue) : C(d))
                            }
                            return (
                                window.addEventListener('storage', e),
                                () => window.removeEventListener('storage', e)
                            )
                        }, [C]),
                        o.useEffect(() => {
                            T(null != t ? t : k)
                        }, [t, k])
                    let j = o.useMemo(
                        () => ({
                            theme: k,
                            setTheme: C,
                            forcedTheme: t,
                            resolvedTheme: 'system' === k ? P : k,
                            themes: n ? [...c, 'system'] : c,
                            systemTheme: n ? P : void 0,
                        }),
                        [k, C, t, P, n, c]
                    )
                    return o.createElement(
                        u.Provider,
                        { value: j },
                        o.createElement(m, {
                            forcedTheme: t,
                            storageKey: s,
                            attribute: h,
                            enableSystem: n,
                            enableColorScheme: i,
                            defaultTheme: d,
                            value: f,
                            themes: c,
                            nonce: x,
                            scriptProps: w,
                        }),
                        b
                    )
                },
                m = o.memo((e) => {
                    let {
                            forcedTheme: t,
                            storageKey: r,
                            attribute: a,
                            enableSystem: l,
                            enableColorScheme: u,
                            defaultTheme: c,
                            value: d,
                            themes: h,
                            nonce: p,
                            scriptProps: f,
                        } = e,
                        m = JSON.stringify([a, r, c, t, h, d, l, u]).slice(
                            1,
                            -1
                        )
                    return o.createElement(
                        'script',
                        (0, i._)((0, n._)({}, f), {
                            suppressHydrationWarning: !0,
                            nonce: '',
                            dangerouslySetInnerHTML: {
                                __html: '('
                                    .concat(s.toString(), ')(')
                                    .concat(m, ')'),
                            },
                        })
                    )
                }),
                g = (e, t) => {
                    let r
                    try {
                        r = localStorage.getItem(e) || void 0
                    } catch (e) {}
                    return r || t
                },
                v = (e) => {
                    let t = document.createElement('style')
                    return (
                        e && t.setAttribute('nonce', e),
                        t.appendChild(
                            document.createTextNode(
                                '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                            )
                        ),
                        document.head.appendChild(t),
                        () => {
                            window.getComputedStyle(document.body),
                                setTimeout(() => {
                                    document.head.removeChild(t)
                                }, 1)
                        }
                    )
                },
                y = (e) => (
                    e || (e = window.matchMedia(l)),
                    e.matches ? 'dark' : 'light'
                )
        },
        5389: (e, t, r) => {
            r.d(t, { y: () => s })
            var n = r(8894),
                i = r(4807),
                o = r(1739)
            let s = {
                test: (e) => o.B.test(e) || n.u.test(e) || i.V.test(e),
                parse: (e) =>
                    o.B.test(e)
                        ? o.B.parse(e)
                        : i.V.test(e)
                        ? i.V.parse(e)
                        : n.u.parse(e),
                transform: (e) =>
                    'string' == typeof e
                        ? e
                        : e.hasOwnProperty('red')
                        ? o.B.transform(e)
                        : i.V.transform(e),
                getAnimatableNone: (e) => {
                    let t = s.parse(e)
                    return (t.alpha = 0), s.transform(t)
                },
            }
        },
        5601: (e, t, r) => {
            r.d(t, { xQ: () => o })
            var n = r(2115),
                i = r(9686)
            function o() {
                let e =
                        !(arguments.length > 0) ||
                        void 0 === arguments[0] ||
                        arguments[0],
                    t = (0, n.useContext)(i.t)
                if (null === t) return [!0, null]
                let { isPresent: r, onExitComplete: o, register: s } = t,
                    a = (0, n.useId)()
                ;(0, n.useEffect)(() => {
                    if (e) return s(a)
                }, [e])
                let l = (0, n.useCallback)(() => e && o && o(a), [a, o, e])
                return !r && o ? [!1, l] : [!0]
            }
        },
        5740: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('sparkles', [
                [
                    'path',
                    {
                        d: 'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
                        key: '1s2grr',
                    },
                ],
                ['path', { d: 'M20 2v4', key: '1rf3ol' }],
                ['path', { d: 'M22 4h-4', key: 'gwowj6' }],
                ['circle', { cx: '4', cy: '20', r: '2', key: '6kqj1y' }],
            ])
        },
        5880: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('external-link', [
                ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
                ['path', { d: 'M10 14 21 3', key: 'gplh6r' }],
                [
                    'path',
                    {
                        d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                        key: 'a6xqqp',
                    },
                ],
            ])
        },
        5889: (e, t, r) => {
            r.d(t, { QP: () => el })
            let n = (e = new Map(), t = null, r) => ({
                    nextPart: e,
                    validators: t,
                    classGroupId: r,
                }),
                i = [],
                o = (e, t, r) => {
                    if (0 == e.length - t) return r.classGroupId
                    let n = e[t],
                        i = r.nextPart.get(n)
                    if (i) {
                        let r = o(e, t + 1, i)
                        if (r) return r
                    }
                    let s = r.validators
                    if (null === s) return
                    let a = 0 === t ? e.join('-') : e.slice(t).join('-'),
                        l = s.length
                    for (let e = 0; e < l; e++) {
                        let t = s[e]
                        if (t.validator(a)) return t.classGroupId
                    }
                },
                s = (e, t) => {
                    let r = n()
                    for (let n in e) a(e[n], r, n, t)
                    return r
                },
                a = (e, t, r, n) => {
                    let i = e.length
                    for (let o = 0; o < i; o++) l(e[o], t, r, n)
                },
                l = (e, t, r, n) =>
                    'string' == typeof e
                        ? void u(e, t, r)
                        : 'function' == typeof e
                        ? void c(e, t, r, n)
                        : void d(e, t, r, n),
                u = (e, t, r) => {
                    ;('' === e ? t : h(t, e)).classGroupId = r
                },
                c = (e, t, r, n) => {
                    if (p(e)) return void a(e(n), t, r, n)
                    null === t.validators && (t.validators = []),
                        t.validators.push({ classGroupId: r, validator: e })
                },
                d = (e, t, r, n) => {
                    let i = Object.entries(e),
                        o = i.length
                    for (let e = 0; e < o; e++) {
                        let [o, s] = i[e]
                        a(s, h(t, o), r, n)
                    }
                },
                h = (e, t) => {
                    let r = e,
                        i = t.split('-'),
                        o = i.length
                    for (let e = 0; e < o; e++) {
                        let t = i[e],
                            o = r.nextPart.get(t)
                        o || ((o = n()), r.nextPart.set(t, o)), (r = o)
                    }
                    return r
                },
                p = (e) => 'isThemeGetter' in e && !0 === e.isThemeGetter,
                f = [],
                m = (e, t, r, n, i) => ({
                    modifiers: e,
                    hasImportantModifier: t,
                    baseClassName: r,
                    maybePostfixModifierPosition: n,
                    isExternal: i,
                }),
                g = /\s+/,
                v = (e) => {
                    let t
                    if ('string' == typeof e) return e
                    let r = ''
                    for (let n = 0; n < e.length; n++)
                        e[n] && (t = v(e[n])) && (r && (r += ' '), (r += t))
                    return r
                },
                y = [],
                b = (e) => {
                    let t = (t) => t[e] || y
                    return (t.isThemeGetter = !0), t
                },
                x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
                w = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
                k = /^\d+\/\d+$/,
                E = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                P =
                    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
                A =
                    /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                T =
                    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                C = (e) => k.test(e),
                M = (e) => !!e && !Number.isNaN(Number(e)),
                j = (e) => !!e && Number.isInteger(Number(e)),
                R = (e) => e.endsWith('%') && M(e.slice(0, -1)),
                O = (e) => E.test(e),
                D = () => !0,
                _ = (e) => P.test(e) && !S.test(e),
                V = () => !1,
                L = (e) => A.test(e),
                N = (e) => T.test(e),
                I = (e) => !B(e) && !K(e),
                F = (e) => J(e, en, V),
                B = (e) => x.test(e),
                z = (e) => J(e, ei, _),
                W = (e) => J(e, eo, M),
                U = (e) => J(e, et, V),
                G = (e) => J(e, er, N),
                $ = (e) => J(e, ea, L),
                K = (e) => w.test(e),
                q = (e) => ee(e, ei),
                H = (e) => ee(e, es),
                X = (e) => ee(e, et),
                Y = (e) => ee(e, en),
                Q = (e) => ee(e, er),
                Z = (e) => ee(e, ea, !0),
                J = (e, t, r) => {
                    let n = x.exec(e)
                    return !!n && (n[1] ? t(n[1]) : r(n[2]))
                },
                ee = (e, t, r = !1) => {
                    let n = w.exec(e)
                    return !!n && (n[1] ? t(n[1]) : r)
                },
                et = (e) => 'position' === e || 'percentage' === e,
                er = (e) => 'image' === e || 'url' === e,
                en = (e) => 'length' === e || 'size' === e || 'bg-size' === e,
                ei = (e) => 'length' === e,
                eo = (e) => 'number' === e,
                es = (e) => 'family-name' === e,
                ea = (e) => 'shadow' === e
            Symbol.toStringTag
            let el = ((e, ...t) => {
                let r,
                    n,
                    a,
                    l,
                    u = (e) => {
                        let t = n(e)
                        if (t) return t
                        let i = ((e, t) => {
                            let {
                                    parseClassName: r,
                                    getClassGroupId: n,
                                    getConflictingClassGroupIds: i,
                                    sortModifiers: o,
                                } = t,
                                s = [],
                                a = e.trim().split(g),
                                l = ''
                            for (let e = a.length - 1; e >= 0; e -= 1) {
                                let t = a[e],
                                    {
                                        isExternal: u,
                                        modifiers: c,
                                        hasImportantModifier: d,
                                        baseClassName: h,
                                        maybePostfixModifierPosition: p,
                                    } = r(t)
                                if (u) {
                                    l = t + (l.length > 0 ? ' ' + l : l)
                                    continue
                                }
                                let f = !!p,
                                    m = n(f ? h.substring(0, p) : h)
                                if (!m) {
                                    if (!f || !(m = n(h))) {
                                        l = t + (l.length > 0 ? ' ' + l : l)
                                        continue
                                    }
                                    f = !1
                                }
                                let g =
                                        0 === c.length
                                            ? ''
                                            : 1 === c.length
                                            ? c[0]
                                            : o(c).join(':'),
                                    v = d ? g + '!' : g,
                                    y = v + m
                                if (s.indexOf(y) > -1) continue
                                s.push(y)
                                let b = i(m, f)
                                for (let e = 0; e < b.length; ++e) {
                                    let t = b[e]
                                    s.push(v + t)
                                }
                                l = t + (l.length > 0 ? ' ' + l : l)
                            }
                            return l
                        })(e, r)
                        return a(e, i), i
                    }
                return (
                    (l = (c) => (
                        (n = (r = ((e) => ({
                            cache: ((e) => {
                                if (e < 1)
                                    return { get: () => void 0, set: () => {} }
                                let t = 0,
                                    r = Object.create(null),
                                    n = Object.create(null),
                                    i = (i, o) => {
                                        ;(r[i] = o),
                                            ++t > e &&
                                                ((t = 0),
                                                (n = r),
                                                (r = Object.create(null)))
                                    }
                                return {
                                    get(e) {
                                        let t = r[e]
                                        return void 0 !== t
                                            ? t
                                            : void 0 !== (t = n[e])
                                            ? (i(e, t), t)
                                            : void 0
                                    },
                                    set(e, t) {
                                        e in r ? (r[e] = t) : i(e, t)
                                    },
                                }
                            })(e.cacheSize),
                            parseClassName: ((e) => {
                                let {
                                        prefix: t,
                                        experimentalParseClassName: r,
                                    } = e,
                                    n = (e) => {
                                        let t,
                                            r = [],
                                            n = 0,
                                            i = 0,
                                            o = 0,
                                            s = e.length
                                        for (let a = 0; a < s; a++) {
                                            let s = e[a]
                                            if (0 === n && 0 === i) {
                                                if (':' === s) {
                                                    r.push(e.slice(o, a)),
                                                        (o = a + 1)
                                                    continue
                                                }
                                                if ('/' === s) {
                                                    t = a
                                                    continue
                                                }
                                            }
                                            '[' === s
                                                ? n++
                                                : ']' === s
                                                ? n--
                                                : '(' === s
                                                ? i++
                                                : ')' === s && i--
                                        }
                                        let a = 0 === r.length ? e : e.slice(o),
                                            l = a,
                                            u = !1
                                        return (
                                            a.endsWith('!')
                                                ? ((l = a.slice(0, -1)),
                                                  (u = !0))
                                                : a.startsWith('!') &&
                                                  ((l = a.slice(1)), (u = !0)),
                                            m(
                                                r,
                                                u,
                                                l,
                                                t && t > o ? t - o : void 0
                                            )
                                        )
                                    }
                                if (t) {
                                    let e = t + ':',
                                        r = n
                                    n = (t) =>
                                        t.startsWith(e)
                                            ? r(t.slice(e.length))
                                            : m(f, !1, t, void 0, !0)
                                }
                                if (r) {
                                    let e = n
                                    n = (t) =>
                                        r({ className: t, parseClassName: e })
                                }
                                return n
                            })(e),
                            sortModifiers: ((e) => {
                                let t = new Map()
                                return (
                                    e.orderSensitiveModifiers.forEach(
                                        (e, r) => {
                                            t.set(e, 1e6 + r)
                                        }
                                    ),
                                    (e) => {
                                        let r = [],
                                            n = []
                                        for (let i = 0; i < e.length; i++) {
                                            let o = e[i],
                                                s = '[' === o[0],
                                                a = t.has(o)
                                            s || a
                                                ? (n.length > 0 &&
                                                      (n.sort(),
                                                      r.push(...n),
                                                      (n = [])),
                                                  r.push(o))
                                                : n.push(o)
                                        }
                                        return (
                                            n.length > 0 &&
                                                (n.sort(), r.push(...n)),
                                            r
                                        )
                                    }
                                )
                            })(e),
                            ...((e) => {
                                let t = ((e) => {
                                        let { theme: t, classGroups: r } = e
                                        return s(r, t)
                                    })(e),
                                    {
                                        conflictingClassGroups: r,
                                        conflictingClassGroupModifiers: n,
                                    } = e
                                return {
                                    getClassGroupId: (e) => {
                                        if (
                                            e.startsWith('[') &&
                                            e.endsWith(']')
                                        )
                                            return ((e) =>
                                                -1 ===
                                                e.slice(1, -1).indexOf(':')
                                                    ? void 0
                                                    : (() => {
                                                          let t = e.slice(
                                                                  1,
                                                                  -1
                                                              ),
                                                              r =
                                                                  t.indexOf(
                                                                      ':'
                                                                  ),
                                                              n = t.slice(0, r)
                                                          return n
                                                              ? 'arbitrary..' +
                                                                    n
                                                              : void 0
                                                      })())(e)
                                        let r = e.split('-'),
                                            n = +('' === r[0] && r.length > 1)
                                        return o(r, n, t)
                                    },
                                    getConflictingClassGroupIds: (e, t) => {
                                        if (t) {
                                            let t = n[e],
                                                o = r[e]
                                            return t
                                                ? o
                                                    ? ((e, t) => {
                                                          let r = Array(
                                                              e.length +
                                                                  t.length
                                                          )
                                                          for (
                                                              let t = 0;
                                                              t < e.length;
                                                              t++
                                                          )
                                                              r[t] = e[t]
                                                          for (
                                                              let n = 0;
                                                              n < t.length;
                                                              n++
                                                          )
                                                              r[e.length + n] =
                                                                  t[n]
                                                          return r
                                                      })(o, t)
                                                    : t
                                                : o || i
                                        }
                                        return r[e] || i
                                    },
                                }
                            })(e),
                        }))(t.reduce((e, t) => t(e), e()))).cache.get),
                        (a = r.cache.set),
                        (l = u),
                        u(c)
                    )),
                    (...e) =>
                        l(
                            ((...e) => {
                                let t,
                                    r,
                                    n = 0,
                                    i = ''
                                for (; n < e.length; )
                                    (t = e[n++]) &&
                                        (r = v(t)) &&
                                        (i && (i += ' '), (i += r))
                                return i
                            })(...e)
                        )
                )
            })(() => {
                let e = b('color'),
                    t = b('font'),
                    r = b('text'),
                    n = b('font-weight'),
                    i = b('tracking'),
                    o = b('leading'),
                    s = b('breakpoint'),
                    a = b('container'),
                    l = b('spacing'),
                    u = b('radius'),
                    c = b('shadow'),
                    d = b('inset-shadow'),
                    h = b('text-shadow'),
                    p = b('drop-shadow'),
                    f = b('blur'),
                    m = b('perspective'),
                    g = b('aspect'),
                    v = b('ease'),
                    y = b('animate'),
                    x = () => [
                        'auto',
                        'avoid',
                        'all',
                        'avoid-page',
                        'page',
                        'left',
                        'right',
                        'column',
                    ],
                    w = () => [
                        'center',
                        'top',
                        'bottom',
                        'left',
                        'right',
                        'top-left',
                        'left-top',
                        'top-right',
                        'right-top',
                        'bottom-right',
                        'right-bottom',
                        'bottom-left',
                        'left-bottom',
                    ],
                    k = () => [...w(), K, B],
                    E = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
                    P = () => ['auto', 'contain', 'none'],
                    S = () => [K, B, l],
                    A = () => [C, 'full', 'auto', ...S()],
                    T = () => [j, 'none', 'subgrid', K, B],
                    _ = () => ['auto', { span: ['full', j, K, B] }, j, K, B],
                    V = () => [j, 'auto', K, B],
                    L = () => ['auto', 'min', 'max', 'fr', K, B],
                    N = () => [
                        'start',
                        'end',
                        'center',
                        'between',
                        'around',
                        'evenly',
                        'stretch',
                        'baseline',
                        'center-safe',
                        'end-safe',
                    ],
                    J = () => [
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'center-safe',
                        'end-safe',
                    ],
                    ee = () => ['auto', ...S()],
                    et = () => [
                        C,
                        'auto',
                        'full',
                        'dvw',
                        'dvh',
                        'lvw',
                        'lvh',
                        'svw',
                        'svh',
                        'min',
                        'max',
                        'fit',
                        ...S(),
                    ],
                    er = () => [e, K, B],
                    en = () => [...w(), X, U, { position: [K, B] }],
                    ei = () => [
                        'no-repeat',
                        { repeat: ['', 'x', 'y', 'space', 'round'] },
                    ],
                    eo = () => [
                        'auto',
                        'cover',
                        'contain',
                        Y,
                        F,
                        { size: [K, B] },
                    ],
                    es = () => [R, q, z],
                    ea = () => ['', 'none', 'full', u, K, B],
                    el = () => ['', M, q, z],
                    eu = () => ['solid', 'dashed', 'dotted', 'double'],
                    ec = () => [
                        'normal',
                        'multiply',
                        'screen',
                        'overlay',
                        'darken',
                        'lighten',
                        'color-dodge',
                        'color-burn',
                        'hard-light',
                        'soft-light',
                        'difference',
                        'exclusion',
                        'hue',
                        'saturation',
                        'color',
                        'luminosity',
                    ],
                    ed = () => [M, R, X, U],
                    eh = () => ['', 'none', f, K, B],
                    ep = () => ['none', M, K, B],
                    ef = () => ['none', M, K, B],
                    em = () => [M, K, B],
                    eg = () => [C, 'full', ...S()]
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ['spin', 'ping', 'pulse', 'bounce'],
                        aspect: ['video'],
                        blur: [O],
                        breakpoint: [O],
                        color: [D],
                        container: [O],
                        'drop-shadow': [O],
                        ease: ['in', 'out', 'in-out'],
                        font: [I],
                        'font-weight': [
                            'thin',
                            'extralight',
                            'light',
                            'normal',
                            'medium',
                            'semibold',
                            'bold',
                            'extrabold',
                            'black',
                        ],
                        'inset-shadow': [O],
                        leading: [
                            'none',
                            'tight',
                            'snug',
                            'normal',
                            'relaxed',
                            'loose',
                        ],
                        perspective: [
                            'dramatic',
                            'near',
                            'normal',
                            'midrange',
                            'distant',
                            'none',
                        ],
                        radius: [O],
                        shadow: [O],
                        spacing: ['px', M],
                        text: [O],
                        'text-shadow': [O],
                        tracking: [
                            'tighter',
                            'tight',
                            'normal',
                            'wide',
                            'wider',
                            'widest',
                        ],
                    },
                    classGroups: {
                        aspect: [{ aspect: ['auto', 'square', C, B, K, g] }],
                        container: ['container'],
                        columns: [{ columns: [M, B, K, a] }],
                        'break-after': [{ 'break-after': x() }],
                        'break-before': [{ 'break-before': x() }],
                        'break-inside': [
                            {
                                'break-inside': [
                                    'auto',
                                    'avoid',
                                    'avoid-page',
                                    'avoid-column',
                                ],
                            },
                        ],
                        'box-decoration': [
                            { 'box-decoration': ['slice', 'clone'] },
                        ],
                        box: [{ box: ['border', 'content'] }],
                        display: [
                            'block',
                            'inline-block',
                            'inline',
                            'flex',
                            'inline-flex',
                            'table',
                            'inline-table',
                            'table-caption',
                            'table-cell',
                            'table-column',
                            'table-column-group',
                            'table-footer-group',
                            'table-header-group',
                            'table-row-group',
                            'table-row',
                            'flow-root',
                            'grid',
                            'inline-grid',
                            'contents',
                            'list-item',
                            'hidden',
                        ],
                        sr: ['sr-only', 'not-sr-only'],
                        float: [
                            {
                                float: [
                                    'right',
                                    'left',
                                    'none',
                                    'start',
                                    'end',
                                ],
                            },
                        ],
                        clear: [
                            {
                                clear: [
                                    'left',
                                    'right',
                                    'both',
                                    'none',
                                    'start',
                                    'end',
                                ],
                            },
                        ],
                        isolation: ['isolate', 'isolation-auto'],
                        'object-fit': [
                            {
                                object: [
                                    'contain',
                                    'cover',
                                    'fill',
                                    'none',
                                    'scale-down',
                                ],
                            },
                        ],
                        'object-position': [{ object: k() }],
                        overflow: [{ overflow: E() }],
                        'overflow-x': [{ 'overflow-x': E() }],
                        'overflow-y': [{ 'overflow-y': E() }],
                        overscroll: [{ overscroll: P() }],
                        'overscroll-x': [{ 'overscroll-x': P() }],
                        'overscroll-y': [{ 'overscroll-y': P() }],
                        position: [
                            'static',
                            'fixed',
                            'absolute',
                            'relative',
                            'sticky',
                        ],
                        inset: [{ inset: A() }],
                        'inset-x': [{ 'inset-x': A() }],
                        'inset-y': [{ 'inset-y': A() }],
                        start: [{ start: A() }],
                        end: [{ end: A() }],
                        top: [{ top: A() }],
                        right: [{ right: A() }],
                        bottom: [{ bottom: A() }],
                        left: [{ left: A() }],
                        visibility: ['visible', 'invisible', 'collapse'],
                        z: [{ z: [j, 'auto', K, B] }],
                        basis: [{ basis: [C, 'full', 'auto', a, ...S()] }],
                        'flex-direction': [
                            {
                                flex: [
                                    'row',
                                    'row-reverse',
                                    'col',
                                    'col-reverse',
                                ],
                            },
                        ],
                        'flex-wrap': [
                            { flex: ['nowrap', 'wrap', 'wrap-reverse'] },
                        ],
                        flex: [{ flex: [M, C, 'auto', 'initial', 'none', B] }],
                        grow: [{ grow: ['', M, K, B] }],
                        shrink: [{ shrink: ['', M, K, B] }],
                        order: [{ order: [j, 'first', 'last', 'none', K, B] }],
                        'grid-cols': [{ 'grid-cols': T() }],
                        'col-start-end': [{ col: _() }],
                        'col-start': [{ 'col-start': V() }],
                        'col-end': [{ 'col-end': V() }],
                        'grid-rows': [{ 'grid-rows': T() }],
                        'row-start-end': [{ row: _() }],
                        'row-start': [{ 'row-start': V() }],
                        'row-end': [{ 'row-end': V() }],
                        'grid-flow': [
                            {
                                'grid-flow': [
                                    'row',
                                    'col',
                                    'dense',
                                    'row-dense',
                                    'col-dense',
                                ],
                            },
                        ],
                        'auto-cols': [{ 'auto-cols': L() }],
                        'auto-rows': [{ 'auto-rows': L() }],
                        gap: [{ gap: S() }],
                        'gap-x': [{ 'gap-x': S() }],
                        'gap-y': [{ 'gap-y': S() }],
                        'justify-content': [{ justify: [...N(), 'normal'] }],
                        'justify-items': [
                            { 'justify-items': [...J(), 'normal'] },
                        ],
                        'justify-self': [{ 'justify-self': ['auto', ...J()] }],
                        'align-content': [{ content: ['normal', ...N()] }],
                        'align-items': [
                            { items: [...J(), { baseline: ['', 'last'] }] },
                        ],
                        'align-self': [
                            {
                                self: [
                                    'auto',
                                    ...J(),
                                    { baseline: ['', 'last'] },
                                ],
                            },
                        ],
                        'place-content': [{ 'place-content': N() }],
                        'place-items': [
                            { 'place-items': [...J(), 'baseline'] },
                        ],
                        'place-self': [{ 'place-self': ['auto', ...J()] }],
                        p: [{ p: S() }],
                        px: [{ px: S() }],
                        py: [{ py: S() }],
                        ps: [{ ps: S() }],
                        pe: [{ pe: S() }],
                        pt: [{ pt: S() }],
                        pr: [{ pr: S() }],
                        pb: [{ pb: S() }],
                        pl: [{ pl: S() }],
                        m: [{ m: ee() }],
                        mx: [{ mx: ee() }],
                        my: [{ my: ee() }],
                        ms: [{ ms: ee() }],
                        me: [{ me: ee() }],
                        mt: [{ mt: ee() }],
                        mr: [{ mr: ee() }],
                        mb: [{ mb: ee() }],
                        ml: [{ ml: ee() }],
                        'space-x': [{ 'space-x': S() }],
                        'space-x-reverse': ['space-x-reverse'],
                        'space-y': [{ 'space-y': S() }],
                        'space-y-reverse': ['space-y-reverse'],
                        size: [{ size: et() }],
                        w: [{ w: [a, 'screen', ...et()] }],
                        'min-w': [{ 'min-w': [a, 'screen', 'none', ...et()] }],
                        'max-w': [
                            {
                                'max-w': [
                                    a,
                                    'screen',
                                    'none',
                                    'prose',
                                    { screen: [s] },
                                    ...et(),
                                ],
                            },
                        ],
                        h: [{ h: ['screen', 'lh', ...et()] }],
                        'min-h': [
                            { 'min-h': ['screen', 'lh', 'none', ...et()] },
                        ],
                        'max-h': [{ 'max-h': ['screen', 'lh', ...et()] }],
                        'font-size': [{ text: ['base', r, q, z] }],
                        'font-smoothing': [
                            'antialiased',
                            'subpixel-antialiased',
                        ],
                        'font-style': ['italic', 'not-italic'],
                        'font-weight': [{ font: [n, K, W] }],
                        'font-stretch': [
                            {
                                'font-stretch': [
                                    'ultra-condensed',
                                    'extra-condensed',
                                    'condensed',
                                    'semi-condensed',
                                    'normal',
                                    'semi-expanded',
                                    'expanded',
                                    'extra-expanded',
                                    'ultra-expanded',
                                    R,
                                    B,
                                ],
                            },
                        ],
                        'font-family': [{ font: [H, B, t] }],
                        'fvn-normal': ['normal-nums'],
                        'fvn-ordinal': ['ordinal'],
                        'fvn-slashed-zero': ['slashed-zero'],
                        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                        'fvn-fraction': [
                            'diagonal-fractions',
                            'stacked-fractions',
                        ],
                        tracking: [{ tracking: [i, K, B] }],
                        'line-clamp': [{ 'line-clamp': [M, 'none', K, W] }],
                        leading: [{ leading: [o, ...S()] }],
                        'list-image': [{ 'list-image': ['none', K, B] }],
                        'list-style-position': [
                            { list: ['inside', 'outside'] },
                        ],
                        'list-style-type': [
                            { list: ['disc', 'decimal', 'none', K, B] },
                        ],
                        'text-alignment': [
                            {
                                text: [
                                    'left',
                                    'center',
                                    'right',
                                    'justify',
                                    'start',
                                    'end',
                                ],
                            },
                        ],
                        'placeholder-color': [{ placeholder: er() }],
                        'text-color': [{ text: er() }],
                        'text-decoration': [
                            'underline',
                            'overline',
                            'line-through',
                            'no-underline',
                        ],
                        'text-decoration-style': [
                            { decoration: [...eu(), 'wavy'] },
                        ],
                        'text-decoration-thickness': [
                            { decoration: [M, 'from-font', 'auto', K, z] },
                        ],
                        'text-decoration-color': [{ decoration: er() }],
                        'underline-offset': [
                            { 'underline-offset': [M, 'auto', K, B] },
                        ],
                        'text-transform': [
                            'uppercase',
                            'lowercase',
                            'capitalize',
                            'normal-case',
                        ],
                        'text-overflow': [
                            'truncate',
                            'text-ellipsis',
                            'text-clip',
                        ],
                        'text-wrap': [
                            { text: ['wrap', 'nowrap', 'balance', 'pretty'] },
                        ],
                        indent: [{ indent: S() }],
                        'vertical-align': [
                            {
                                align: [
                                    'baseline',
                                    'top',
                                    'middle',
                                    'bottom',
                                    'text-top',
                                    'text-bottom',
                                    'sub',
                                    'super',
                                    K,
                                    B,
                                ],
                            },
                        ],
                        whitespace: [
                            {
                                whitespace: [
                                    'normal',
                                    'nowrap',
                                    'pre',
                                    'pre-line',
                                    'pre-wrap',
                                    'break-spaces',
                                ],
                            },
                        ],
                        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                        content: [{ content: ['none', K, B] }],
                        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                        'bg-clip': [
                            {
                                'bg-clip': [
                                    'border',
                                    'padding',
                                    'content',
                                    'text',
                                ],
                            },
                        ],
                        'bg-origin': [
                            { 'bg-origin': ['border', 'padding', 'content'] },
                        ],
                        'bg-position': [{ bg: en() }],
                        'bg-repeat': [{ bg: ei() }],
                        'bg-size': [{ bg: eo() }],
                        'bg-image': [
                            {
                                bg: [
                                    'none',
                                    {
                                        linear: [
                                            {
                                                to: [
                                                    't',
                                                    'tr',
                                                    'r',
                                                    'br',
                                                    'b',
                                                    'bl',
                                                    'l',
                                                    'tl',
                                                ],
                                            },
                                            j,
                                            K,
                                            B,
                                        ],
                                        radial: ['', K, B],
                                        conic: [j, K, B],
                                    },
                                    Q,
                                    G,
                                ],
                            },
                        ],
                        'bg-color': [{ bg: er() }],
                        'gradient-from-pos': [{ from: es() }],
                        'gradient-via-pos': [{ via: es() }],
                        'gradient-to-pos': [{ to: es() }],
                        'gradient-from': [{ from: er() }],
                        'gradient-via': [{ via: er() }],
                        'gradient-to': [{ to: er() }],
                        rounded: [{ rounded: ea() }],
                        'rounded-s': [{ 'rounded-s': ea() }],
                        'rounded-e': [{ 'rounded-e': ea() }],
                        'rounded-t': [{ 'rounded-t': ea() }],
                        'rounded-r': [{ 'rounded-r': ea() }],
                        'rounded-b': [{ 'rounded-b': ea() }],
                        'rounded-l': [{ 'rounded-l': ea() }],
                        'rounded-ss': [{ 'rounded-ss': ea() }],
                        'rounded-se': [{ 'rounded-se': ea() }],
                        'rounded-ee': [{ 'rounded-ee': ea() }],
                        'rounded-es': [{ 'rounded-es': ea() }],
                        'rounded-tl': [{ 'rounded-tl': ea() }],
                        'rounded-tr': [{ 'rounded-tr': ea() }],
                        'rounded-br': [{ 'rounded-br': ea() }],
                        'rounded-bl': [{ 'rounded-bl': ea() }],
                        'border-w': [{ border: el() }],
                        'border-w-x': [{ 'border-x': el() }],
                        'border-w-y': [{ 'border-y': el() }],
                        'border-w-s': [{ 'border-s': el() }],
                        'border-w-e': [{ 'border-e': el() }],
                        'border-w-t': [{ 'border-t': el() }],
                        'border-w-r': [{ 'border-r': el() }],
                        'border-w-b': [{ 'border-b': el() }],
                        'border-w-l': [{ 'border-l': el() }],
                        'divide-x': [{ 'divide-x': el() }],
                        'divide-x-reverse': ['divide-x-reverse'],
                        'divide-y': [{ 'divide-y': el() }],
                        'divide-y-reverse': ['divide-y-reverse'],
                        'border-style': [
                            { border: [...eu(), 'hidden', 'none'] },
                        ],
                        'divide-style': [
                            { divide: [...eu(), 'hidden', 'none'] },
                        ],
                        'border-color': [{ border: er() }],
                        'border-color-x': [{ 'border-x': er() }],
                        'border-color-y': [{ 'border-y': er() }],
                        'border-color-s': [{ 'border-s': er() }],
                        'border-color-e': [{ 'border-e': er() }],
                        'border-color-t': [{ 'border-t': er() }],
                        'border-color-r': [{ 'border-r': er() }],
                        'border-color-b': [{ 'border-b': er() }],
                        'border-color-l': [{ 'border-l': er() }],
                        'divide-color': [{ divide: er() }],
                        'outline-style': [
                            { outline: [...eu(), 'none', 'hidden'] },
                        ],
                        'outline-offset': [{ 'outline-offset': [M, K, B] }],
                        'outline-w': [{ outline: ['', M, q, z] }],
                        'outline-color': [{ outline: er() }],
                        shadow: [{ shadow: ['', 'none', c, Z, $] }],
                        'shadow-color': [{ shadow: er() }],
                        'inset-shadow': [{ 'inset-shadow': ['none', d, Z, $] }],
                        'inset-shadow-color': [{ 'inset-shadow': er() }],
                        'ring-w': [{ ring: el() }],
                        'ring-w-inset': ['ring-inset'],
                        'ring-color': [{ ring: er() }],
                        'ring-offset-w': [{ 'ring-offset': [M, z] }],
                        'ring-offset-color': [{ 'ring-offset': er() }],
                        'inset-ring-w': [{ 'inset-ring': el() }],
                        'inset-ring-color': [{ 'inset-ring': er() }],
                        'text-shadow': [{ 'text-shadow': ['none', h, Z, $] }],
                        'text-shadow-color': [{ 'text-shadow': er() }],
                        opacity: [{ opacity: [M, K, B] }],
                        'mix-blend': [
                            {
                                'mix-blend': [
                                    ...ec(),
                                    'plus-darker',
                                    'plus-lighter',
                                ],
                            },
                        ],
                        'bg-blend': [{ 'bg-blend': ec() }],
                        'mask-clip': [
                            {
                                'mask-clip': [
                                    'border',
                                    'padding',
                                    'content',
                                    'fill',
                                    'stroke',
                                    'view',
                                ],
                            },
                            'mask-no-clip',
                        ],
                        'mask-composite': [
                            {
                                mask: [
                                    'add',
                                    'subtract',
                                    'intersect',
                                    'exclude',
                                ],
                            },
                        ],
                        'mask-image-linear-pos': [{ 'mask-linear': [M] }],
                        'mask-image-linear-from-pos': [
                            { 'mask-linear-from': ed() },
                        ],
                        'mask-image-linear-to-pos': [
                            { 'mask-linear-to': ed() },
                        ],
                        'mask-image-linear-from-color': [
                            { 'mask-linear-from': er() },
                        ],
                        'mask-image-linear-to-color': [
                            { 'mask-linear-to': er() },
                        ],
                        'mask-image-t-from-pos': [{ 'mask-t-from': ed() }],
                        'mask-image-t-to-pos': [{ 'mask-t-to': ed() }],
                        'mask-image-t-from-color': [{ 'mask-t-from': er() }],
                        'mask-image-t-to-color': [{ 'mask-t-to': er() }],
                        'mask-image-r-from-pos': [{ 'mask-r-from': ed() }],
                        'mask-image-r-to-pos': [{ 'mask-r-to': ed() }],
                        'mask-image-r-from-color': [{ 'mask-r-from': er() }],
                        'mask-image-r-to-color': [{ 'mask-r-to': er() }],
                        'mask-image-b-from-pos': [{ 'mask-b-from': ed() }],
                        'mask-image-b-to-pos': [{ 'mask-b-to': ed() }],
                        'mask-image-b-from-color': [{ 'mask-b-from': er() }],
                        'mask-image-b-to-color': [{ 'mask-b-to': er() }],
                        'mask-image-l-from-pos': [{ 'mask-l-from': ed() }],
                        'mask-image-l-to-pos': [{ 'mask-l-to': ed() }],
                        'mask-image-l-from-color': [{ 'mask-l-from': er() }],
                        'mask-image-l-to-color': [{ 'mask-l-to': er() }],
                        'mask-image-x-from-pos': [{ 'mask-x-from': ed() }],
                        'mask-image-x-to-pos': [{ 'mask-x-to': ed() }],
                        'mask-image-x-from-color': [{ 'mask-x-from': er() }],
                        'mask-image-x-to-color': [{ 'mask-x-to': er() }],
                        'mask-image-y-from-pos': [{ 'mask-y-from': ed() }],
                        'mask-image-y-to-pos': [{ 'mask-y-to': ed() }],
                        'mask-image-y-from-color': [{ 'mask-y-from': er() }],
                        'mask-image-y-to-color': [{ 'mask-y-to': er() }],
                        'mask-image-radial': [{ 'mask-radial': [K, B] }],
                        'mask-image-radial-from-pos': [
                            { 'mask-radial-from': ed() },
                        ],
                        'mask-image-radial-to-pos': [
                            { 'mask-radial-to': ed() },
                        ],
                        'mask-image-radial-from-color': [
                            { 'mask-radial-from': er() },
                        ],
                        'mask-image-radial-to-color': [
                            { 'mask-radial-to': er() },
                        ],
                        'mask-image-radial-shape': [
                            { 'mask-radial': ['circle', 'ellipse'] },
                        ],
                        'mask-image-radial-size': [
                            {
                                'mask-radial': [
                                    {
                                        closest: ['side', 'corner'],
                                        farthest: ['side', 'corner'],
                                    },
                                ],
                            },
                        ],
                        'mask-image-radial-pos': [{ 'mask-radial-at': w() }],
                        'mask-image-conic-pos': [{ 'mask-conic': [M] }],
                        'mask-image-conic-from-pos': [
                            { 'mask-conic-from': ed() },
                        ],
                        'mask-image-conic-to-pos': [{ 'mask-conic-to': ed() }],
                        'mask-image-conic-from-color': [
                            { 'mask-conic-from': er() },
                        ],
                        'mask-image-conic-to-color': [
                            { 'mask-conic-to': er() },
                        ],
                        'mask-mode': [
                            { mask: ['alpha', 'luminance', 'match'] },
                        ],
                        'mask-origin': [
                            {
                                'mask-origin': [
                                    'border',
                                    'padding',
                                    'content',
                                    'fill',
                                    'stroke',
                                    'view',
                                ],
                            },
                        ],
                        'mask-position': [{ mask: en() }],
                        'mask-repeat': [{ mask: ei() }],
                        'mask-size': [{ mask: eo() }],
                        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                        'mask-image': [{ mask: ['none', K, B] }],
                        filter: [{ filter: ['', 'none', K, B] }],
                        blur: [{ blur: eh() }],
                        brightness: [{ brightness: [M, K, B] }],
                        contrast: [{ contrast: [M, K, B] }],
                        'drop-shadow': [
                            { 'drop-shadow': ['', 'none', p, Z, $] },
                        ],
                        'drop-shadow-color': [{ 'drop-shadow': er() }],
                        grayscale: [{ grayscale: ['', M, K, B] }],
                        'hue-rotate': [{ 'hue-rotate': [M, K, B] }],
                        invert: [{ invert: ['', M, K, B] }],
                        saturate: [{ saturate: [M, K, B] }],
                        sepia: [{ sepia: ['', M, K, B] }],
                        'backdrop-filter': [
                            { 'backdrop-filter': ['', 'none', K, B] },
                        ],
                        'backdrop-blur': [{ 'backdrop-blur': eh() }],
                        'backdrop-brightness': [
                            { 'backdrop-brightness': [M, K, B] },
                        ],
                        'backdrop-contrast': [
                            { 'backdrop-contrast': [M, K, B] },
                        ],
                        'backdrop-grayscale': [
                            { 'backdrop-grayscale': ['', M, K, B] },
                        ],
                        'backdrop-hue-rotate': [
                            { 'backdrop-hue-rotate': [M, K, B] },
                        ],
                        'backdrop-invert': [
                            { 'backdrop-invert': ['', M, K, B] },
                        ],
                        'backdrop-opacity': [{ 'backdrop-opacity': [M, K, B] }],
                        'backdrop-saturate': [
                            { 'backdrop-saturate': [M, K, B] },
                        ],
                        'backdrop-sepia': [{ 'backdrop-sepia': ['', M, K, B] }],
                        'border-collapse': [
                            { border: ['collapse', 'separate'] },
                        ],
                        'border-spacing': [{ 'border-spacing': S() }],
                        'border-spacing-x': [{ 'border-spacing-x': S() }],
                        'border-spacing-y': [{ 'border-spacing-y': S() }],
                        'table-layout': [{ table: ['auto', 'fixed'] }],
                        caption: [{ caption: ['top', 'bottom'] }],
                        transition: [
                            {
                                transition: [
                                    '',
                                    'all',
                                    'colors',
                                    'opacity',
                                    'shadow',
                                    'transform',
                                    'none',
                                    K,
                                    B,
                                ],
                            },
                        ],
                        'transition-behavior': [
                            { transition: ['normal', 'discrete'] },
                        ],
                        duration: [{ duration: [M, 'initial', K, B] }],
                        ease: [{ ease: ['linear', 'initial', v, K, B] }],
                        delay: [{ delay: [M, K, B] }],
                        animate: [{ animate: ['none', y, K, B] }],
                        backface: [{ backface: ['hidden', 'visible'] }],
                        perspective: [{ perspective: [m, K, B] }],
                        'perspective-origin': [{ 'perspective-origin': k() }],
                        rotate: [{ rotate: ep() }],
                        'rotate-x': [{ 'rotate-x': ep() }],
                        'rotate-y': [{ 'rotate-y': ep() }],
                        'rotate-z': [{ 'rotate-z': ep() }],
                        scale: [{ scale: ef() }],
                        'scale-x': [{ 'scale-x': ef() }],
                        'scale-y': [{ 'scale-y': ef() }],
                        'scale-z': [{ 'scale-z': ef() }],
                        'scale-3d': ['scale-3d'],
                        skew: [{ skew: em() }],
                        'skew-x': [{ 'skew-x': em() }],
                        'skew-y': [{ 'skew-y': em() }],
                        transform: [
                            { transform: [K, B, '', 'none', 'gpu', 'cpu'] },
                        ],
                        'transform-origin': [{ origin: k() }],
                        'transform-style': [{ transform: ['3d', 'flat'] }],
                        translate: [{ translate: eg() }],
                        'translate-x': [{ 'translate-x': eg() }],
                        'translate-y': [{ 'translate-y': eg() }],
                        'translate-z': [{ 'translate-z': eg() }],
                        'translate-none': ['translate-none'],
                        accent: [{ accent: er() }],
                        appearance: [{ appearance: ['none', 'auto'] }],
                        'caret-color': [{ caret: er() }],
                        'color-scheme': [
                            {
                                scheme: [
                                    'normal',
                                    'dark',
                                    'light',
                                    'light-dark',
                                    'only-dark',
                                    'only-light',
                                ],
                            },
                        ],
                        cursor: [
                            {
                                cursor: [
                                    'auto',
                                    'default',
                                    'pointer',
                                    'wait',
                                    'text',
                                    'move',
                                    'help',
                                    'not-allowed',
                                    'none',
                                    'context-menu',
                                    'progress',
                                    'cell',
                                    'crosshair',
                                    'vertical-text',
                                    'alias',
                                    'copy',
                                    'no-drop',
                                    'grab',
                                    'grabbing',
                                    'all-scroll',
                                    'col-resize',
                                    'row-resize',
                                    'n-resize',
                                    'e-resize',
                                    's-resize',
                                    'w-resize',
                                    'ne-resize',
                                    'nw-resize',
                                    'se-resize',
                                    'sw-resize',
                                    'ew-resize',
                                    'ns-resize',
                                    'nesw-resize',
                                    'nwse-resize',
                                    'zoom-in',
                                    'zoom-out',
                                    K,
                                    B,
                                ],
                            },
                        ],
                        'field-sizing': [
                            { 'field-sizing': ['fixed', 'content'] },
                        ],
                        'pointer-events': [
                            { 'pointer-events': ['auto', 'none'] },
                        ],
                        resize: [{ resize: ['none', '', 'y', 'x'] }],
                        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                        'scroll-m': [{ 'scroll-m': S() }],
                        'scroll-mx': [{ 'scroll-mx': S() }],
                        'scroll-my': [{ 'scroll-my': S() }],
                        'scroll-ms': [{ 'scroll-ms': S() }],
                        'scroll-me': [{ 'scroll-me': S() }],
                        'scroll-mt': [{ 'scroll-mt': S() }],
                        'scroll-mr': [{ 'scroll-mr': S() }],
                        'scroll-mb': [{ 'scroll-mb': S() }],
                        'scroll-ml': [{ 'scroll-ml': S() }],
                        'scroll-p': [{ 'scroll-p': S() }],
                        'scroll-px': [{ 'scroll-px': S() }],
                        'scroll-py': [{ 'scroll-py': S() }],
                        'scroll-ps': [{ 'scroll-ps': S() }],
                        'scroll-pe': [{ 'scroll-pe': S() }],
                        'scroll-pt': [{ 'scroll-pt': S() }],
                        'scroll-pr': [{ 'scroll-pr': S() }],
                        'scroll-pb': [{ 'scroll-pb': S() }],
                        'scroll-pl': [{ 'scroll-pl': S() }],
                        'snap-align': [
                            { snap: ['start', 'end', 'center', 'align-none'] },
                        ],
                        'snap-stop': [{ snap: ['normal', 'always'] }],
                        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                        'snap-strictness': [
                            { snap: ['mandatory', 'proximity'] },
                        ],
                        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                        'touch-pz': ['touch-pinch-zoom'],
                        select: [{ select: ['none', 'text', 'all', 'auto'] }],
                        'will-change': [
                            {
                                'will-change': [
                                    'auto',
                                    'scroll',
                                    'contents',
                                    'transform',
                                    K,
                                    B,
                                ],
                            },
                        ],
                        fill: [{ fill: ['none', ...er()] }],
                        'stroke-w': [{ stroke: [M, q, z, W] }],
                        stroke: [{ stroke: ['none', ...er()] }],
                        'forced-color-adjust': [
                            { 'forced-color-adjust': ['auto', 'none'] },
                        ],
                    },
                    conflictingClassGroups: {
                        overflow: ['overflow-x', 'overflow-y'],
                        overscroll: ['overscroll-x', 'overscroll-y'],
                        inset: [
                            'inset-x',
                            'inset-y',
                            'start',
                            'end',
                            'top',
                            'right',
                            'bottom',
                            'left',
                        ],
                        'inset-x': ['right', 'left'],
                        'inset-y': ['top', 'bottom'],
                        flex: ['basis', 'grow', 'shrink'],
                        gap: ['gap-x', 'gap-y'],
                        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
                        px: ['pr', 'pl'],
                        py: ['pt', 'pb'],
                        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
                        mx: ['mr', 'ml'],
                        my: ['mt', 'mb'],
                        size: ['w', 'h'],
                        'font-size': ['leading'],
                        'fvn-normal': [
                            'fvn-ordinal',
                            'fvn-slashed-zero',
                            'fvn-figure',
                            'fvn-spacing',
                            'fvn-fraction',
                        ],
                        'fvn-ordinal': ['fvn-normal'],
                        'fvn-slashed-zero': ['fvn-normal'],
                        'fvn-figure': ['fvn-normal'],
                        'fvn-spacing': ['fvn-normal'],
                        'fvn-fraction': ['fvn-normal'],
                        'line-clamp': ['display', 'overflow'],
                        rounded: [
                            'rounded-s',
                            'rounded-e',
                            'rounded-t',
                            'rounded-r',
                            'rounded-b',
                            'rounded-l',
                            'rounded-ss',
                            'rounded-se',
                            'rounded-ee',
                            'rounded-es',
                            'rounded-tl',
                            'rounded-tr',
                            'rounded-br',
                            'rounded-bl',
                        ],
                        'rounded-s': ['rounded-ss', 'rounded-es'],
                        'rounded-e': ['rounded-se', 'rounded-ee'],
                        'rounded-t': ['rounded-tl', 'rounded-tr'],
                        'rounded-r': ['rounded-tr', 'rounded-br'],
                        'rounded-b': ['rounded-br', 'rounded-bl'],
                        'rounded-l': ['rounded-tl', 'rounded-bl'],
                        'border-spacing': [
                            'border-spacing-x',
                            'border-spacing-y',
                        ],
                        'border-w': [
                            'border-w-x',
                            'border-w-y',
                            'border-w-s',
                            'border-w-e',
                            'border-w-t',
                            'border-w-r',
                            'border-w-b',
                            'border-w-l',
                        ],
                        'border-w-x': ['border-w-r', 'border-w-l'],
                        'border-w-y': ['border-w-t', 'border-w-b'],
                        'border-color': [
                            'border-color-x',
                            'border-color-y',
                            'border-color-s',
                            'border-color-e',
                            'border-color-t',
                            'border-color-r',
                            'border-color-b',
                            'border-color-l',
                        ],
                        'border-color-x': ['border-color-r', 'border-color-l'],
                        'border-color-y': ['border-color-t', 'border-color-b'],
                        translate: [
                            'translate-x',
                            'translate-y',
                            'translate-none',
                        ],
                        'translate-none': [
                            'translate',
                            'translate-x',
                            'translate-y',
                            'translate-z',
                        ],
                        'scroll-m': [
                            'scroll-mx',
                            'scroll-my',
                            'scroll-ms',
                            'scroll-me',
                            'scroll-mt',
                            'scroll-mr',
                            'scroll-mb',
                            'scroll-ml',
                        ],
                        'scroll-mx': ['scroll-mr', 'scroll-ml'],
                        'scroll-my': ['scroll-mt', 'scroll-mb'],
                        'scroll-p': [
                            'scroll-px',
                            'scroll-py',
                            'scroll-ps',
                            'scroll-pe',
                            'scroll-pt',
                            'scroll-pr',
                            'scroll-pb',
                            'scroll-pl',
                        ],
                        'scroll-px': ['scroll-pr', 'scroll-pl'],
                        'scroll-py': ['scroll-pt', 'scroll-pb'],
                        touch: ['touch-x', 'touch-y', 'touch-pz'],
                        'touch-x': ['touch'],
                        'touch-y': ['touch'],
                        'touch-pz': ['touch'],
                    },
                    conflictingClassGroupModifiers: {
                        'font-size': ['leading'],
                    },
                    orderSensitiveModifiers: [
                        '*',
                        '**',
                        'after',
                        'backdrop',
                        'before',
                        'details-content',
                        'file',
                        'first-letter',
                        'first-line',
                        'marker',
                        'placeholder',
                        'selection',
                    ],
                }
            })
        },
        5993: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('house', [
                [
                    'path',
                    {
                        d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8',
                        key: '5wwlr5',
                    },
                ],
                [
                    'path',
                    {
                        d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                        key: 'r6nss1',
                    },
                ],
            ])
        },
        6105: (e, t, r) => {
            function n(e, t) {
                ;-1 === e.indexOf(t) && e.push(t)
            }
            function i(e, t) {
                let r = e.indexOf(t)
                r > -1 && e.splice(r, 1)
            }
            r.d(t, { Ai: () => i, Kq: () => n })
        },
        6497: (e, t, r) => {
            r.d(t, { N: () => x })
            var n = r(5155),
                i = r(2115),
                o = r(296),
                s = r(4416),
                a = r(6553),
                l = r(1983),
                u = r(9686),
                c = r(1402),
                d = r(3127)
            function h(e, t) {
                if ('function' == typeof e) return e(t)
                null != e && (e.current = t)
            }
            class p extends i.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            r = ((0, c.s)(e) && e.offsetWidth) || 0,
                            n = this.props.sizeRef.current
                        ;(n.height = t.offsetHeight || 0),
                            (n.width = t.offsetWidth || 0),
                            (n.top = t.offsetTop),
                            (n.left = t.offsetLeft),
                            (n.right = r - n.width - n.left)
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            function f(e) {
                let { children: t, isPresent: r, anchorX: o, root: s } = e,
                    a = (0, i.useId)(),
                    l = (0, i.useRef)(null),
                    u = (0, i.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                    }),
                    { nonce: c } = (0, i.useContext)(d.Q),
                    f = (function (...e) {
                        return i.useCallback(
                            (function (...e) {
                                return (t) => {
                                    let r = !1,
                                        n = e.map((e) => {
                                            let n = h(e, t)
                                            return (
                                                r ||
                                                    'function' != typeof n ||
                                                    (r = !0),
                                                n
                                            )
                                        })
                                    if (r)
                                        return () => {
                                            for (let t = 0; t < n.length; t++) {
                                                let r = n[t]
                                                'function' == typeof r
                                                    ? r()
                                                    : h(e[t], null)
                                            }
                                        }
                                }
                            })(...e),
                            e
                        )
                    })(l, null == t ? void 0 : t.ref)
                return (
                    (0, i.useInsertionEffect)(() => {
                        let {
                            width: e,
                            height: t,
                            top: n,
                            left: i,
                            right: d,
                        } = u.current
                        if (r || !l.current || !e || !t) return
                        l.current.dataset.motionPopId = a
                        let h = document.createElement('style')
                        c && (h.nonce = c)
                        let p = null != s ? s : document.head
                        return (
                            p.appendChild(h),
                            h.sheet &&
                                h.sheet.insertRule(
                                    '\n          [data-motion-pop-id="'
                                        .concat(
                                            a,
                                            '"] {\n            position: absolute !important;\n            width: '
                                        )
                                        .concat(
                                            e,
                                            'px !important;\n            height: '
                                        )
                                        .concat(
                                            t,
                                            'px !important;\n            '
                                        )
                                        .concat(
                                            'left' === o
                                                ? 'left: '.concat(i)
                                                : 'right: '.concat(d),
                                            'px !important;\n            top: '
                                        )
                                        .concat(
                                            n,
                                            'px !important;\n          }\n        '
                                        )
                                ),
                            () => {
                                p.contains(h) && p.removeChild(h)
                            }
                        )
                    }, [r]),
                    (0, n.jsx)(p, {
                        isPresent: r,
                        childRef: l,
                        sizeRef: u,
                        children: i.cloneElement(t, { ref: f }),
                    })
                )
            }
            let m = (e) => {
                let {
                        children: t,
                        initial: r,
                        isPresent: o,
                        onExitComplete: a,
                        custom: c,
                        presenceAffectsLayout: d,
                        mode: h,
                        anchorX: p,
                        root: m,
                    } = e,
                    v = (0, s.M)(g),
                    y = (0, i.useId)(),
                    b = !0,
                    x = (0, i.useMemo)(
                        () => (
                            (b = !1),
                            {
                                id: y,
                                initial: r,
                                isPresent: o,
                                custom: c,
                                onExitComplete: (e) => {
                                    for (let t of (v.set(e, !0), v.values()))
                                        if (!t) return
                                    a && a()
                                },
                                register: (e) => (
                                    v.set(e, !1), () => v.delete(e)
                                ),
                            }
                        ),
                        [o, v, a]
                    )
                return (
                    d && b && (x = (0, l._)({}, x)),
                    (0, i.useMemo)(() => {
                        v.forEach((e, t) => v.set(t, !1))
                    }, [o]),
                    i.useEffect(() => {
                        o || v.size || !a || a()
                    }, [o]),
                    'popLayout' === h &&
                        (t = (0, n.jsx)(f, {
                            isPresent: o,
                            anchorX: p,
                            root: m,
                            children: t,
                        })),
                    (0, n.jsx)(u.t.Provider, { value: x, children: t })
                )
            }
            function g() {
                return new Map()
            }
            var v = r(5601)
            let y = (e) => e.key || ''
            function b(e) {
                let t = []
                return (
                    i.Children.forEach(e, (e) => {
                        ;(0, i.isValidElement)(e) && t.push(e)
                    }),
                    t
                )
            }
            let x = (e) => {
                let {
                        children: t,
                        custom: r,
                        initial: l = !0,
                        onExitComplete: u,
                        presenceAffectsLayout: c = !0,
                        mode: d = 'sync',
                        propagate: h = !1,
                        anchorX: p = 'left',
                        root: f,
                    } = e,
                    [g, x] = (0, v.xQ)(h),
                    w = (0, i.useMemo)(() => b(t), [t]),
                    k = h && !g ? [] : w.map(y),
                    E = (0, i.useRef)(!0),
                    P = (0, i.useRef)(w),
                    S = (0, s.M)(() => new Map()),
                    [A, T] = (0, i.useState)(w),
                    [C, M] = (0, i.useState)(w)
                ;(0, a.E)(() => {
                    ;(E.current = !1), (P.current = w)
                    for (let e = 0; e < C.length; e++) {
                        let t = y(C[e])
                        k.includes(t)
                            ? S.delete(t)
                            : !0 !== S.get(t) && S.set(t, !1)
                    }
                }, [C, k.length, k.join('-')])
                let j = []
                if (w !== A) {
                    let e = [...w]
                    for (let t = 0; t < C.length; t++) {
                        let r = C[t],
                            n = y(r)
                        k.includes(n) || (e.splice(t, 0, r), j.push(r))
                    }
                    return (
                        'wait' === d && j.length && (e = j), M(b(e)), T(w), null
                    )
                }
                let { forceRender: R } = (0, i.useContext)(o.L)
                return (0, n.jsx)(n.Fragment, {
                    children: C.map((e) => {
                        let t = y(e),
                            i = (!h || !!g) && (w === C || k.includes(t))
                        return (0, n.jsx)(
                            m,
                            {
                                isPresent: i,
                                initial: (!E.current || !!l) && void 0,
                                custom: r,
                                presenceAffectsLayout: c,
                                mode: d,
                                root: f,
                                onExitComplete: i
                                    ? void 0
                                    : () => {
                                          if (!S.has(t)) return
                                          S.set(t, !0)
                                          let e = !0
                                          S.forEach((t) => {
                                              t || (e = !1)
                                          }),
                                              e &&
                                                  (null == R || R(),
                                                  M(P.current),
                                                  h && (null == x || x()),
                                                  u && u())
                                      },
                                anchorX: p,
                                children: e,
                            },
                            t
                        )
                    }),
                })
            }
        },
        6553: (e, t, r) => {
            r.d(t, { E: () => i })
            var n = r(2115)
            let i = r(3577).B ? n.useLayoutEffect : n.useEffect
        },
        6706: (e, t, r) => {
            r.d(t, { G: () => c })
            var n = r(42),
                i = r(4119),
                o = r(3656),
                s = r(8041),
                a = r(1225),
                l = r(8895),
                u = r(5130)
            function c(e, t, { clamp: r = !0, ease: d, mixer: h } = {}) {
                let p = e.length
                if (
                    ((0, s.V)(
                        p === t.length,
                        'Both input and output ranges must be the same length',
                        'range-length'
                    ),
                    1 === p)
                )
                    return () => t[0]
                if (2 === p && t[0] === t[1]) return () => t[1]
                let f = e[0] === e[1]
                e[0] > e[p - 1] &&
                    ((e = [...e].reverse()), (t = [...t].reverse()))
                let m = (function (e, t, r) {
                        let s = [],
                            a = r || n.W.mix || u.j,
                            l = e.length - 1
                        for (let r = 0; r < l; r++) {
                            let n = a(e[r], e[r + 1])
                            if (t) {
                                let e = Array.isArray(t) ? t[r] || i.l : t
                                n = (0, o.F)(e, n)
                            }
                            s.push(n)
                        }
                        return s
                    })(t, d, h),
                    g = m.length,
                    v = (r) => {
                        if (f && r < e[0]) return t[0]
                        let n = 0
                        if (g > 1)
                            for (; n < e.length - 2 && !(r < e[n + 1]); n++);
                        let i = (0, a.q)(e[n], e[n + 1], r)
                        return m[n](i)
                    }
                return r ? (t) => v((0, l.q)(e[0], e[p - 1], t)) : v
            }
        },
        6724: (e, t, r) => {
            r.d(t, { k5: () => c })
            var n = r(2115),
                i = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0,
                },
                o = n.createContext && n.createContext(i),
                s = ['attr', 'size', 'title']
            function a() {
                return (a = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t]
                              for (var n in r)
                                  Object.prototype.hasOwnProperty.call(r, n) &&
                                      (e[n] = r[n])
                          }
                          return e
                      }).apply(this, arguments)
            }
            function l(e, t) {
                var r = Object.keys(e)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e)
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                                e,
                                t
                            ).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                    t % 2
                        ? l(Object(r), !0).forEach(function (t) {
                              var n, i, o
                              ;(n = e),
                                  (i = t),
                                  (o = r[t]),
                                  (i = (function (e) {
                                      var t = (function (e, t) {
                                          if ('object' != typeof e || !e)
                                              return e
                                          var r = e[Symbol.toPrimitive]
                                          if (void 0 !== r) {
                                              var n = r.call(e, t || 'default')
                                              if ('object' != typeof n) return n
                                              throw TypeError(
                                                  '@@toPrimitive must return a primitive value.'
                                              )
                                          }
                                          return (
                                              'string' === t ? String : Number
                                          )(e)
                                      })(e, 'string')
                                      return 'symbol' == typeof t ? t : t + ''
                                  })(i)) in n
                                      ? Object.defineProperty(n, i, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (n[i] = o)
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                          )
                        : l(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                              )
                          })
                }
                return e
            }
            function c(e) {
                return (t) =>
                    n.createElement(
                        d,
                        a({ attr: u({}, e.attr) }, t),
                        (function e(t) {
                            return (
                                t &&
                                t.map((t, r) =>
                                    n.createElement(
                                        t.tag,
                                        u({ key: r }, t.attr),
                                        e(t.child)
                                    )
                                )
                            )
                        })(e.child)
                    )
            }
            function d(e) {
                var t = (t) => {
                    var r,
                        { attr: i, size: o, title: l } = e,
                        c = (function (e, t) {
                            if (null == e) return {}
                            var r,
                                n,
                                i = (function (e, t) {
                                    if (null == e) return {}
                                    var r = {}
                                    for (var n in e)
                                        if (
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                n
                                            )
                                        ) {
                                            if (t.indexOf(n) >= 0) continue
                                            r[n] = e[n]
                                        }
                                    return r
                                })(e, t)
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e)
                                for (n = 0; n < o.length; n++)
                                    (r = o[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                r
                                            ) &&
                                            (i[r] = e[r])
                            }
                            return i
                        })(e, s),
                        d = o || t.size || '1em'
                    return (
                        t.className && (r = t.className),
                        e.className && (r = (r ? r + ' ' : '') + e.className),
                        n.createElement(
                            'svg',
                            a(
                                {
                                    stroke: 'currentColor',
                                    fill: 'currentColor',
                                    strokeWidth: '0',
                                },
                                t.attr,
                                i,
                                c,
                                {
                                    className: r,
                                    style: u(
                                        u(
                                            { color: e.color || t.color },
                                            t.style
                                        ),
                                        e.style
                                    ),
                                    height: d,
                                    width: d,
                                    xmlns: 'http://www.w3.org/2000/svg',
                                }
                            ),
                            l && n.createElement('title', null, l),
                            e.children
                        )
                    )
                }
                return void 0 !== o
                    ? n.createElement(o.Consumer, null, (e) => t(e))
                    : t(i)
            }
        },
        6827: (e, t, r) => {
            r.d(t, { Z: () => o })
            var n = r(1225),
                i = r(9361)
            function o(e) {
                let t = [0]
                return (
                    !(function (e, t) {
                        let r = e[e.length - 1]
                        for (let o = 1; o <= t; o++) {
                            let s = (0, n.q)(0, t, o)
                            e.push((0, i.k)(r, 1, s))
                        }
                    })(t, e.length - 1),
                    t
                )
            }
        },
        6842: (e, t, r) => {
            r.d(t, { C: () => s })
            var n = r(2115),
                i = r(4446),
                o = r(4129),
                s = (e) => {
                    let { present: t, children: r } = e,
                        s = (function (e) {
                            var t, r
                            let [i, s] = n.useState(),
                                l = n.useRef(null),
                                u = n.useRef(e),
                                c = n.useRef('none'),
                                [d, h] =
                                    ((t = e ? 'mounted' : 'unmounted'),
                                    (r = {
                                        mounted: {
                                            UNMOUNT: 'unmounted',
                                            ANIMATION_OUT: 'unmountSuspended',
                                        },
                                        unmountSuspended: {
                                            MOUNT: 'mounted',
                                            ANIMATION_END: 'unmounted',
                                        },
                                        unmounted: { MOUNT: 'mounted' },
                                    }),
                                    n.useReducer((e, t) => {
                                        let n = r[e][t]
                                        return null != n ? n : e
                                    }, t))
                            return (
                                n.useEffect(() => {
                                    let e = a(l.current)
                                    c.current = 'mounted' === d ? e : 'none'
                                }, [d]),
                                (0, o.N)(() => {
                                    let t = l.current,
                                        r = u.current
                                    if (r !== e) {
                                        let n = c.current,
                                            i = a(t)
                                        e
                                            ? h('MOUNT')
                                            : 'none' === i ||
                                              (null == t
                                                  ? void 0
                                                  : t.display) === 'none'
                                            ? h('UNMOUNT')
                                            : r && n !== i
                                            ? h('ANIMATION_OUT')
                                            : h('UNMOUNT'),
                                            (u.current = e)
                                    }
                                }, [e, h]),
                                (0, o.N)(() => {
                                    if (i) {
                                        var e
                                        let t,
                                            r =
                                                null !=
                                                (e =
                                                    i.ownerDocument.defaultView)
                                                    ? e
                                                    : window,
                                            n = (e) => {
                                                let n = a(l.current).includes(
                                                    CSS.escape(e.animationName)
                                                )
                                                if (
                                                    e.target === i &&
                                                    n &&
                                                    (h('ANIMATION_END'),
                                                    !u.current)
                                                ) {
                                                    let e =
                                                        i.style
                                                            .animationFillMode
                                                    ;(i.style.animationFillMode =
                                                        'forwards'),
                                                        (t = r.setTimeout(
                                                            () => {
                                                                'forwards' ===
                                                                    i.style
                                                                        .animationFillMode &&
                                                                    (i.style.animationFillMode =
                                                                        e)
                                                            }
                                                        ))
                                                }
                                            },
                                            o = (e) => {
                                                e.target === i &&
                                                    (c.current = a(l.current))
                                            }
                                        return (
                                            i.addEventListener(
                                                'animationstart',
                                                o
                                            ),
                                            i.addEventListener(
                                                'animationcancel',
                                                n
                                            ),
                                            i.addEventListener(
                                                'animationend',
                                                n
                                            ),
                                            () => {
                                                r.clearTimeout(t),
                                                    i.removeEventListener(
                                                        'animationstart',
                                                        o
                                                    ),
                                                    i.removeEventListener(
                                                        'animationcancel',
                                                        n
                                                    ),
                                                    i.removeEventListener(
                                                        'animationend',
                                                        n
                                                    )
                                            }
                                        )
                                    }
                                    h('ANIMATION_END')
                                }, [i, h]),
                                {
                                    isPresent: [
                                        'mounted',
                                        'unmountSuspended',
                                    ].includes(d),
                                    ref: n.useCallback((e) => {
                                        ;(l.current = e
                                            ? getComputedStyle(e)
                                            : null),
                                            s(e)
                                    }, []),
                                }
                            )
                        })(t),
                        l =
                            'function' == typeof r
                                ? r({ present: s.isPresent })
                                : n.Children.only(r),
                        u = (0, i.s)(
                            s.ref,
                            (function (e) {
                                var t, r
                                let n =
                                        null ==
                                        (t = Object.getOwnPropertyDescriptor(
                                            e.props,
                                            'ref'
                                        ))
                                            ? void 0
                                            : t.get,
                                    i =
                                        n &&
                                        'isReactWarning' in n &&
                                        n.isReactWarning
                                return i
                                    ? e.ref
                                    : (i =
                                          (n =
                                              null ==
                                              (r =
                                                  Object.getOwnPropertyDescriptor(
                                                      e,
                                                      'ref'
                                                  ))
                                                  ? void 0
                                                  : r.get) &&
                                          'isReactWarning' in n &&
                                          n.isReactWarning)
                                    ? e.props.ref
                                    : e.props.ref || e.ref
                            })(l)
                        )
                    return 'function' == typeof r || s.isPresent
                        ? n.cloneElement(l, { ref: u })
                        : null
                }
            function a(e) {
                return (null == e ? void 0 : e.animationName) || 'none'
            }
            s.displayName = 'Presence'
        },
        7161: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('instagram', [
                [
                    'rect',
                    {
                        width: '20',
                        height: '20',
                        x: '2',
                        y: '2',
                        rx: '5',
                        ry: '5',
                        key: '2e1cvw',
                    },
                ],
                [
                    'path',
                    {
                        d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
                        key: '9exkf1',
                    },
                ],
                [
                    'line',
                    {
                        x1: '17.5',
                        x2: '17.51',
                        y1: '6.5',
                        y2: '6.5',
                        key: 'r4j83e',
                    },
                ],
            ])
        },
        7333: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('linkedin', [
                [
                    'path',
                    {
                        d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
                        key: 'c2jq9f',
                    },
                ],
                [
                    'rect',
                    { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' },
                ],
                ['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }],
            ])
        },
        7378: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('twitter', [
                [
                    'path',
                    {
                        d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
                        key: 'pff0z6',
                    },
                ],
            ])
        },
        7389: (e, t, r) => {
            r.r(t), r.d(t, { _: () => n })
            function n(e, t) {
                if (null == e) return {}
                var r,
                    n,
                    i = (function (e, t) {
                        if (null == e) return {}
                        var r,
                            n,
                            i = {},
                            o = Object.keys(e)
                        for (n = 0; n < o.length; n++)
                            (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r])
                        return i
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    r
                                ) &&
                                (i[r] = e[r])
                }
                return i
            }
        },
        7424: (e, t, r) => {
            let n
            r.d(t, { k: () => a })
            var i = r(42),
                o = r(3934)
            function s() {
                n = void 0
            }
            let a = {
                now: () => (
                    void 0 === n &&
                        a.set(
                            o.uv.isProcessing || i.W.useManualTiming
                                ? o.uv.timestamp
                                : performance.now()
                        ),
                    n
                ),
                set: (e) => {
                    ;(n = e), queueMicrotask(s)
                },
            }
        },
        7822: (e, t, r) => {
            r.d(t, { X4: () => o, ai: () => i, hs: () => s })
            var n = r(8895)
            let i = {
                    test: (e) => 'number' == typeof e,
                    parse: parseFloat,
                    transform: (e) => e,
                },
                o = { ...i, transform: (e) => (0, n.q)(0, 1, e) },
                s = { ...i, default: 1 }
        },
        7937: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('chevron-right', [
                ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
            ])
        },
        8041: (e, t, r) => {
            r.d(t, { $: () => n, V: () => i })
            let n = () => {},
                i = () => {}
        },
        8085: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('send', [
                [
                    'path',
                    {
                        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
                        key: '1ffxy3',
                    },
                ],
                ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
            ])
        },
        8142: (e, t, r) => {
            r.d(t, { sG: () => u, hO: () => c })
            var n = r(2115),
                i = r(7650),
                o = r(4446),
                s = r(5155),
                a = Symbol('radix.slottable')
            function l(e) {
                return (
                    n.isValidElement(e) &&
                    'function' == typeof e.type &&
                    '__radixId' in e.type &&
                    e.type.__radixId === a
                )
            }
            var u = [
                'a',
                'button',
                'div',
                'form',
                'h2',
                'h3',
                'img',
                'input',
                'label',
                'li',
                'nav',
                'ol',
                'p',
                'select',
                'span',
                'svg',
                'ul',
            ].reduce((e, t) => {
                let r = (function (e) {
                        let t = (function (e) {
                                let t = n.forwardRef((e, t) => {
                                    let { children: r, ...i } = e
                                    if (n.isValidElement(r)) {
                                        var s
                                        let e,
                                            a,
                                            l =
                                                ((s = r),
                                                (a =
                                                    (e =
                                                        Object.getOwnPropertyDescriptor(
                                                            s.props,
                                                            'ref'
                                                        )?.get) &&
                                                    'isReactWarning' in e &&
                                                    e.isReactWarning)
                                                    ? s.ref
                                                    : (a =
                                                          (e =
                                                              Object.getOwnPropertyDescriptor(
                                                                  s,
                                                                  'ref'
                                                              )?.get) &&
                                                          'isReactWarning' in
                                                              e &&
                                                          e.isReactWarning)
                                                    ? s.props.ref
                                                    : s.props.ref || s.ref),
                                            u = (function (e, t) {
                                                let r = { ...t }
                                                for (let n in t) {
                                                    let i = e[n],
                                                        o = t[n]
                                                    ;/^on[A-Z]/.test(n)
                                                        ? i && o
                                                            ? (r[n] = (
                                                                  ...e
                                                              ) => {
                                                                  let t = o(
                                                                      ...e
                                                                  )
                                                                  return (
                                                                      i(...e), t
                                                                  )
                                                              })
                                                            : i && (r[n] = i)
                                                        : 'style' === n
                                                        ? (r[n] = {
                                                              ...i,
                                                              ...o,
                                                          })
                                                        : 'className' === n &&
                                                          (r[n] = [i, o]
                                                              .filter(Boolean)
                                                              .join(' '))
                                                }
                                                return { ...e, ...r }
                                            })(i, r.props)
                                        return (
                                            r.type !== n.Fragment &&
                                                (u.ref = t
                                                    ? (0, o.t)(t, l)
                                                    : l),
                                            n.cloneElement(r, u)
                                        )
                                    }
                                    return n.Children.count(r) > 1
                                        ? n.Children.only(null)
                                        : null
                                })
                                return (t.displayName = `${e}.SlotClone`), t
                            })(e),
                            r = n.forwardRef((e, r) => {
                                let { children: i, ...o } = e,
                                    a = n.Children.toArray(i),
                                    u = a.find(l)
                                if (u) {
                                    let e = u.props.children,
                                        i = a.map((t) =>
                                            t !== u
                                                ? t
                                                : n.Children.count(e) > 1
                                                ? n.Children.only(null)
                                                : n.isValidElement(e)
                                                ? e.props.children
                                                : null
                                        )
                                    return (0, s.jsx)(t, {
                                        ...o,
                                        ref: r,
                                        children: n.isValidElement(e)
                                            ? n.cloneElement(e, void 0, i)
                                            : null,
                                    })
                                }
                                return (0, s.jsx)(t, {
                                    ...o,
                                    ref: r,
                                    children: i,
                                })
                            })
                        return (r.displayName = `${e}.Slot`), r
                    })(`Primitive.${t}`),
                    i = n.forwardRef((e, n) => {
                        let { asChild: i, ...o } = e
                        return (
                            'undefined' != typeof window &&
                                (window[Symbol.for('radix-ui')] = !0),
                            (0, s.jsx)(i ? r : t, { ...o, ref: n })
                        )
                    })
                return (i.displayName = `Primitive.${t}`), { ...e, [t]: i }
            }, {})
            function c(e, t) {
                e && i.flushSync(() => e.dispatchEvent(t))
            }
        },
        8453: (e, t, r) => {
            r.d(t, { v: () => i })
            var n = r(6105)
            class i {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (
                        (0, n.Kq)(this.subscriptions, e),
                        () => (0, n.Ai)(this.subscriptions, e)
                    )
                }
                notify(e, t, r) {
                    let n = this.subscriptions.length
                    if (n)
                        if (1 === n) this.subscriptions[0](e, t, r)
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i]
                                n && n(e, t, r)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        8561: (e, t, r) => {
            r.d(t, { K: () => n })
            function n(e, t, r) {
                if (e instanceof EventTarget) return [e]
                if ('string' == typeof e) {
                    let n = document
                    t && (n = t.current)
                    let i = r?.[e] ?? n.querySelectorAll(e)
                    return i ? Array.from(i) : []
                }
                return Array.from(e)
            }
        },
        8714: (e, t, r) => {
            r.d(t, {
                bm: () => tu,
                UC: () => ts,
                VY: () => tl,
                hJ: () => to,
                ZL: () => ti,
                bL: () => tr,
                hE: () => ta,
                l9: () => tn,
            })
            var n,
                i,
                o,
                s = r(1983),
                a = r(5849),
                l = r(7389),
                u = r(2115),
                c = r(2556),
                d = r(4446),
                h = r(3468),
                p = r(8946),
                f = r(3558),
                m = r(8142),
                g = r(222),
                v = r(5155),
                y = 'dismissableLayer.update',
                b = u.createContext({
                    layers: new Set(),
                    layersWithOutsidePointerEventsDisabled: new Set(),
                    branches: new Set(),
                }),
                x = u.forwardRef((e, t) => {
                    var r, n
                    let {
                            disableOutsidePointerEvents: o = !1,
                            onEscapeKeyDown: h,
                            onPointerDownOutside: p,
                            onFocusOutside: f,
                            onInteractOutside: x,
                            onDismiss: E,
                        } = e,
                        P = (0, l._)(e, [
                            'disableOutsidePointerEvents',
                            'onEscapeKeyDown',
                            'onPointerDownOutside',
                            'onFocusOutside',
                            'onInteractOutside',
                            'onDismiss',
                        ]),
                        S = u.useContext(b),
                        [A, T] = u.useState(null),
                        C =
                            null != (n = null == A ? void 0 : A.ownerDocument)
                                ? n
                                : null == (r = globalThis)
                                ? void 0
                                : r.document,
                        [, M] = u.useState({}),
                        j = (0, d.s)(t, (e) => T(e)),
                        R = Array.from(S.layers),
                        [O] = [
                            ...S.layersWithOutsidePointerEventsDisabled,
                        ].slice(-1),
                        D = R.indexOf(O),
                        _ = A ? R.indexOf(A) : -1,
                        V = S.layersWithOutsidePointerEventsDisabled.size > 0,
                        L = _ >= D,
                        N = (function (e) {
                            var t
                            let r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null == (t = globalThis)
                                        ? void 0
                                        : t.document,
                                n = (0, g.c)(e),
                                i = u.useRef(!1),
                                o = u.useRef(() => {})
                            return (
                                u.useEffect(() => {
                                    let e = (e) => {
                                            if (e.target && !i.current) {
                                                let t = function () {
                                                        k(
                                                            'dismissableLayer.pointerDownOutside',
                                                            n,
                                                            i,
                                                            { discrete: !0 }
                                                        )
                                                    },
                                                    i = { originalEvent: e }
                                                'touch' === e.pointerType
                                                    ? (r.removeEventListener(
                                                          'click',
                                                          o.current
                                                      ),
                                                      (o.current = t),
                                                      r.addEventListener(
                                                          'click',
                                                          o.current,
                                                          { once: !0 }
                                                      ))
                                                    : t()
                                            } else
                                                r.removeEventListener(
                                                    'click',
                                                    o.current
                                                )
                                            i.current = !1
                                        },
                                        t = window.setTimeout(() => {
                                            r.addEventListener('pointerdown', e)
                                        }, 0)
                                    return () => {
                                        window.clearTimeout(t),
                                            r.removeEventListener(
                                                'pointerdown',
                                                e
                                            ),
                                            r.removeEventListener(
                                                'click',
                                                o.current
                                            )
                                    }
                                }, [r, n]),
                                { onPointerDownCapture: () => (i.current = !0) }
                            )
                        })((e) => {
                            let t = e.target,
                                r = [...S.branches].some((e) => e.contains(t))
                            L &&
                                !r &&
                                (null == p || p(e),
                                null == x || x(e),
                                e.defaultPrevented || null == E || E())
                        }, C),
                        I = (function (e) {
                            var t
                            let r =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null == (t = globalThis)
                                        ? void 0
                                        : t.document,
                                n = (0, g.c)(e),
                                i = u.useRef(!1)
                            return (
                                u.useEffect(() => {
                                    let e = (e) => {
                                        e.target &&
                                            !i.current &&
                                            k(
                                                'dismissableLayer.focusOutside',
                                                n,
                                                { originalEvent: e },
                                                { discrete: !1 }
                                            )
                                    }
                                    return (
                                        r.addEventListener('focusin', e),
                                        () =>
                                            r.removeEventListener('focusin', e)
                                    )
                                }, [r, n]),
                                {
                                    onFocusCapture: () => (i.current = !0),
                                    onBlurCapture: () => (i.current = !1),
                                }
                            )
                        })((e) => {
                            let t = e.target
                            ![...S.branches].some((e) => e.contains(t)) &&
                                (null == f || f(e),
                                null == x || x(e),
                                e.defaultPrevented || null == E || E())
                        }, C)
                    return (
                        !(function (e, t = globalThis?.document) {
                            let r = (0, g.c)(e)
                            u.useEffect(() => {
                                let e = (e) => {
                                    'Escape' === e.key && r(e)
                                }
                                return (
                                    t.addEventListener('keydown', e, {
                                        capture: !0,
                                    }),
                                    () =>
                                        t.removeEventListener('keydown', e, {
                                            capture: !0,
                                        })
                                )
                            }, [r, t])
                        })((e) => {
                            _ === S.layers.size - 1 &&
                                (null == h || h(e),
                                !e.defaultPrevented &&
                                    E &&
                                    (e.preventDefault(), E()))
                        }, C),
                        u.useEffect(() => {
                            if (A)
                                return (
                                    o &&
                                        (0 ===
                                            S
                                                .layersWithOutsidePointerEventsDisabled
                                                .size &&
                                            ((i = C.body.style.pointerEvents),
                                            (C.body.style.pointerEvents =
                                                'none')),
                                        S.layersWithOutsidePointerEventsDisabled.add(
                                            A
                                        )),
                                    S.layers.add(A),
                                    w(),
                                    () => {
                                        o &&
                                            1 ===
                                                S
                                                    .layersWithOutsidePointerEventsDisabled
                                                    .size &&
                                            (C.body.style.pointerEvents = i)
                                    }
                                )
                        }, [A, C, o, S]),
                        u.useEffect(
                            () => () => {
                                A &&
                                    (S.layers.delete(A),
                                    S.layersWithOutsidePointerEventsDisabled.delete(
                                        A
                                    ),
                                    w())
                            },
                            [A, S]
                        ),
                        u.useEffect(() => {
                            let e = () => M({})
                            return (
                                document.addEventListener(y, e),
                                () => document.removeEventListener(y, e)
                            )
                        }, []),
                        (0, v.jsx)(
                            m.sG.div,
                            (0, a._)((0, s._)({}, P), {
                                ref: j,
                                style: (0, s._)(
                                    {
                                        pointerEvents: V
                                            ? L
                                                ? 'auto'
                                                : 'none'
                                            : void 0,
                                    },
                                    e.style
                                ),
                                onFocusCapture: (0, c.mK)(
                                    e.onFocusCapture,
                                    I.onFocusCapture
                                ),
                                onBlurCapture: (0, c.mK)(
                                    e.onBlurCapture,
                                    I.onBlurCapture
                                ),
                                onPointerDownCapture: (0, c.mK)(
                                    e.onPointerDownCapture,
                                    N.onPointerDownCapture
                                ),
                            })
                        )
                    )
                })
            function w() {
                let e = new CustomEvent(y)
                document.dispatchEvent(e)
            }
            function k(e, t, r, n) {
                let { discrete: i } = n,
                    o = r.originalEvent.target,
                    s = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: r,
                    })
                t && o.addEventListener(e, t, { once: !0 }),
                    i ? (0, m.hO)(o, s) : o.dispatchEvent(s)
            }
            ;(x.displayName = 'DismissableLayer'),
                (u.forwardRef((e, t) => {
                    let r = u.useContext(b),
                        n = u.useRef(null),
                        i = (0, d.s)(t, n)
                    return (
                        u.useEffect(() => {
                            let e = n.current
                            if (e)
                                return (
                                    r.branches.add(e),
                                    () => {
                                        r.branches.delete(e)
                                    }
                                )
                        }, [r.branches]),
                        (0, v.jsx)(
                            m.sG.div,
                            (0, a._)((0, s._)({}, e), { ref: i })
                        )
                    )
                }).displayName = 'DismissableLayerBranch')
            var E = 'focusScope.autoFocusOnMount',
                P = 'focusScope.autoFocusOnUnmount',
                S = { bubbles: !1, cancelable: !0 },
                A = u.forwardRef((e, t) => {
                    let {
                            loop: r = !1,
                            trapped: n = !1,
                            onMountAutoFocus: i,
                            onUnmountAutoFocus: o,
                        } = e,
                        c = (0, l._)(e, [
                            'loop',
                            'trapped',
                            'onMountAutoFocus',
                            'onUnmountAutoFocus',
                        ]),
                        [h, p] = u.useState(null),
                        f = (0, g.c)(i),
                        y = (0, g.c)(o),
                        b = u.useRef(null),
                        x = (0, d.s)(t, (e) => p(e)),
                        w = u.useRef({
                            paused: !1,
                            pause() {
                                this.paused = !0
                            },
                            resume() {
                                this.paused = !1
                            },
                        }).current
                    u.useEffect(() => {
                        if (n) {
                            let e = function (e) {
                                    if (w.paused || !h) return
                                    let t = e.target
                                    h.contains(t)
                                        ? (b.current = t)
                                        : M(b.current, { select: !0 })
                                },
                                t = function (e) {
                                    if (w.paused || !h) return
                                    let t = e.relatedTarget
                                    null !== t &&
                                        (h.contains(t) ||
                                            M(b.current, { select: !0 }))
                                }
                            document.addEventListener('focusin', e),
                                document.addEventListener('focusout', t)
                            let r = new MutationObserver(function (e) {
                                if (document.activeElement === document.body)
                                    for (let t of e)
                                        t.removedNodes.length > 0 && M(h)
                            })
                            return (
                                h &&
                                    r.observe(h, {
                                        childList: !0,
                                        subtree: !0,
                                    }),
                                () => {
                                    document.removeEventListener('focusin', e),
                                        document.removeEventListener(
                                            'focusout',
                                            t
                                        ),
                                        r.disconnect()
                                }
                            )
                        }
                    }, [n, h, w.paused]),
                        u.useEffect(() => {
                            if (h) {
                                j.add(w)
                                let e = document.activeElement
                                if (!h.contains(e)) {
                                    let t = new CustomEvent(E, S)
                                    h.addEventListener(E, f),
                                        h.dispatchEvent(t),
                                        t.defaultPrevented ||
                                            ((function (e) {
                                                let { select: t = !1 } =
                                                        arguments.length > 1 &&
                                                        void 0 !== arguments[1]
                                                            ? arguments[1]
                                                            : {},
                                                    r = document.activeElement
                                                for (let n of e)
                                                    if (
                                                        (M(n, { select: t }),
                                                        document.activeElement !==
                                                            r)
                                                    )
                                                        return
                                            })(
                                                T(h).filter(
                                                    (e) => 'A' !== e.tagName
                                                ),
                                                { select: !0 }
                                            ),
                                            document.activeElement === e &&
                                                M(h))
                                }
                                return () => {
                                    h.removeEventListener(E, f),
                                        setTimeout(() => {
                                            let t = new CustomEvent(P, S)
                                            h.addEventListener(P, y),
                                                h.dispatchEvent(t),
                                                t.defaultPrevented ||
                                                    M(
                                                        null != e
                                                            ? e
                                                            : document.body,
                                                        { select: !0 }
                                                    ),
                                                h.removeEventListener(P, y),
                                                j.remove(w)
                                        }, 0)
                                }
                            }
                        }, [h, f, y, w])
                    let k = u.useCallback(
                        (e) => {
                            if ((!r && !n) || w.paused) return
                            let t =
                                    'Tab' === e.key &&
                                    !e.altKey &&
                                    !e.ctrlKey &&
                                    !e.metaKey,
                                i = document.activeElement
                            if (t && i) {
                                let t = e.currentTarget,
                                    [n, o] = (function (e) {
                                        let t = T(e)
                                        return [C(t, e), C(t.reverse(), e)]
                                    })(t)
                                n && o
                                    ? e.shiftKey || i !== o
                                        ? e.shiftKey &&
                                          i === n &&
                                          (e.preventDefault(),
                                          r && M(o, { select: !0 }))
                                        : (e.preventDefault(),
                                          r && M(n, { select: !0 }))
                                    : i === t && e.preventDefault()
                            }
                        },
                        [r, n, w.paused]
                    )
                    return (0, v.jsx)(
                        m.sG.div,
                        (0, a._)((0, s._)({ tabIndex: -1 }, c), {
                            ref: x,
                            onKeyDown: k,
                        })
                    )
                })
            function T(e) {
                let t = [],
                    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            let t = 'INPUT' === e.tagName && 'hidden' === e.type
                            return e.disabled || e.hidden || t
                                ? NodeFilter.FILTER_SKIP
                                : e.tabIndex >= 0
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP
                        },
                    })
                for (; r.nextNode(); ) t.push(r.currentNode)
                return t
            }
            function C(e, t) {
                for (let r of e)
                    if (
                        !(function (e, t) {
                            let { upTo: r } = t
                            if ('hidden' === getComputedStyle(e).visibility)
                                return !0
                            for (; e && (void 0 === r || e !== r); ) {
                                if ('none' === getComputedStyle(e).display)
                                    return !0
                                e = e.parentElement
                            }
                            return !1
                        })(r, { upTo: t })
                    )
                        return r
            }
            function M(e) {
                let { select: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                if (e && e.focus) {
                    var r
                    let n = document.activeElement
                    e.focus({ preventScroll: !0 }),
                        e !== n &&
                            (r = e) instanceof HTMLInputElement &&
                            'select' in r &&
                            t &&
                            e.select()
                }
            }
            A.displayName = 'FocusScope'
            var j = (function () {
                let e = []
                return {
                    add(t) {
                        let r = e[0]
                        t !== r && (null == r || r.pause()),
                            (e = R(e, t)).unshift(t)
                    },
                    remove(t) {
                        var r
                        null == (r = (e = R(e, t))[0]) || r.resume()
                    },
                }
            })()
            function R(e, t) {
                let r = [...e],
                    n = r.indexOf(t)
                return -1 !== n && r.splice(n, 1), r
            }
            var O = r(7650),
                D = r(4129),
                _ = u.forwardRef((e, t) => {
                    var r, n
                    let { container: i } = e,
                        o = (0, l._)(e, ['container']),
                        [c, d] = u.useState(!1)
                    ;(0, D.N)(() => d(!0), [])
                    let h =
                        i ||
                        (c &&
                            (null == (n = globalThis) ||
                            null == (r = n.document)
                                ? void 0
                                : r.body))
                    return h
                        ? O.createPortal(
                              (0, v.jsx)(
                                  m.sG.div,
                                  (0, a._)((0, s._)({}, o), { ref: t })
                              ),
                              h
                          )
                        : null
                })
            _.displayName = 'Portal'
            var V = r(6842),
                L = 0
            function N() {
                let e = document.createElement('span')
                return (
                    e.setAttribute('data-radix-focus-guard', ''),
                    (e.tabIndex = 0),
                    (e.style.outline = 'none'),
                    (e.style.opacity = '0'),
                    (e.style.position = 'fixed'),
                    (e.style.pointerEvents = 'none'),
                    e
                )
            }
            var I = function () {
                return (I =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var i in (t = arguments[r]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                    (e[i] = t[i])
                        return e
                    }).apply(this, arguments)
            }
            function F(e, t) {
                var r = {}
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) &&
                        0 > t.indexOf(n) &&
                        (r[n] = e[n])
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                )
                    for (
                        var i = 0, n = Object.getOwnPropertySymbols(e);
                        i < n.length;
                        i++
                    )
                        0 > t.indexOf(n[i]) &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                n[i]
                            ) &&
                            (r[n[i]] = e[n[i]])
                return r
            }
            Object.create
            Object.create
            var B =
                    ('function' == typeof SuppressedError && SuppressedError,
                    'right-scroll-bar-position'),
                z = 'width-before-scroll-bar'
            function W(e, t) {
                return 'function' == typeof e ? e(t) : e && (e.current = t), e
            }
            var U =
                    'undefined' != typeof window
                        ? u.useLayoutEffect
                        : u.useEffect,
                G = new WeakMap()
            function $(e) {
                return e
            }
            var K = (function (e) {
                    void 0 === e && (e = {})
                    var t,
                        r,
                        n,
                        i =
                            (void 0 === t && (t = $),
                            (r = []),
                            (n = !1),
                            {
                                read: function () {
                                    if (n)
                                        throw Error(
                                            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                                        )
                                    return r.length ? r[r.length - 1] : null
                                },
                                useMedium: function (e) {
                                    var i = t(e, n)
                                    return (
                                        r.push(i),
                                        function () {
                                            r = r.filter(function (e) {
                                                return e !== i
                                            })
                                        }
                                    )
                                },
                                assignSyncMedium: function (e) {
                                    for (n = !0; r.length; ) {
                                        var t = r
                                        ;(r = []), t.forEach(e)
                                    }
                                    r = {
                                        push: function (t) {
                                            return e(t)
                                        },
                                        filter: function () {
                                            return r
                                        },
                                    }
                                },
                                assignMedium: function (e) {
                                    n = !0
                                    var t = []
                                    if (r.length) {
                                        var i = r
                                        ;(r = []), i.forEach(e), (t = r)
                                    }
                                    var o = function () {
                                            var r = t
                                            ;(t = []), r.forEach(e)
                                        },
                                        s = function () {
                                            return Promise.resolve().then(o)
                                        }
                                    s(),
                                        (r = {
                                            push: function (e) {
                                                t.push(e), s()
                                            },
                                            filter: function (e) {
                                                return (t = t.filter(e)), r
                                            },
                                        })
                                },
                            })
                    return (i.options = I({ async: !0, ssr: !1 }, e)), i
                })(),
                q = function () {},
                H = u.forwardRef(function (e, t) {
                    var r,
                        n,
                        i,
                        o,
                        s = u.useRef(null),
                        a = u.useState({
                            onScrollCapture: q,
                            onWheelCapture: q,
                            onTouchMoveCapture: q,
                        }),
                        l = a[0],
                        c = a[1],
                        d = e.forwardProps,
                        h = e.children,
                        p = e.className,
                        f = e.removeScrollBar,
                        m = e.enabled,
                        g = e.shards,
                        v = e.sideCar,
                        y = e.noRelative,
                        b = e.noIsolation,
                        x = e.inert,
                        w = e.allowPinchZoom,
                        k = e.as,
                        E = e.gapMode,
                        P = F(e, [
                            'forwardProps',
                            'children',
                            'className',
                            'removeScrollBar',
                            'enabled',
                            'shards',
                            'sideCar',
                            'noRelative',
                            'noIsolation',
                            'inert',
                            'allowPinchZoom',
                            'as',
                            'gapMode',
                        ]),
                        S =
                            ((r = [s, t]),
                            (n = function (e) {
                                return r.forEach(function (t) {
                                    return W(t, e)
                                })
                            }),
                            ((i = (0, u.useState)(function () {
                                return {
                                    value: null,
                                    callback: n,
                                    facade: {
                                        get current() {
                                            return i.value
                                        },
                                        set current(value) {
                                            var e = i.value
                                            e !== value &&
                                                ((i.value = value),
                                                i.callback(value, e))
                                        },
                                    },
                                }
                            })[0]).callback = n),
                            (o = i.facade),
                            U(
                                function () {
                                    var e = G.get(o)
                                    if (e) {
                                        var t = new Set(e),
                                            n = new Set(r),
                                            i = o.current
                                        t.forEach(function (e) {
                                            n.has(e) || W(e, null)
                                        }),
                                            n.forEach(function (e) {
                                                t.has(e) || W(e, i)
                                            })
                                    }
                                    G.set(o, r)
                                },
                                [r]
                            ),
                            o),
                        A = I(I({}, P), l)
                    return u.createElement(
                        u.Fragment,
                        null,
                        m &&
                            u.createElement(v, {
                                sideCar: K,
                                removeScrollBar: f,
                                shards: g,
                                noRelative: y,
                                noIsolation: b,
                                inert: x,
                                setCallbacks: c,
                                allowPinchZoom: !!w,
                                lockRef: s,
                                gapMode: E,
                            }),
                        d
                            ? u.cloneElement(
                                  u.Children.only(h),
                                  I(I({}, A), { ref: S })
                              )
                            : u.createElement(
                                  void 0 === k ? 'div' : k,
                                  I({}, A, { className: p, ref: S }),
                                  h
                              )
                    )
                })
            ;(H.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
                (H.classNames = { fullWidth: z, zeroRight: B })
            var X = function (e) {
                var t = e.sideCar,
                    r = F(e, ['sideCar'])
                if (!t)
                    throw Error(
                        'Sidecar: please provide `sideCar` property to import the right car'
                    )
                var n = t.read()
                if (!n) throw Error('Sidecar medium not found')
                return u.createElement(n, I({}, r))
            }
            X.isSideCarExport = !0
            var Y = function () {
                    var e = 0,
                        t = null
                    return {
                        add: function (n) {
                            if (
                                0 == e &&
                                (t = (function () {
                                    if (!document) return null
                                    var e = document.createElement('style')
                                    e.type = 'text/css'
                                    var t = o || r.nc
                                    return t && e.setAttribute('nonce', t), e
                                })())
                            ) {
                                var i, s
                                ;(i = t).styleSheet
                                    ? (i.styleSheet.cssText = n)
                                    : i.appendChild(document.createTextNode(n)),
                                    (s = t),
                                    (
                                        document.head ||
                                        document.getElementsByTagName('head')[0]
                                    ).appendChild(s)
                            }
                            e++
                        },
                        remove: function () {
                            --e ||
                                !t ||
                                (t.parentNode && t.parentNode.removeChild(t),
                                (t = null))
                        },
                    }
                },
                Q = function () {
                    var e = Y()
                    return function (t, r) {
                        u.useEffect(
                            function () {
                                return (
                                    e.add(t),
                                    function () {
                                        e.remove()
                                    }
                                )
                            },
                            [t && r]
                        )
                    }
                },
                Z = function () {
                    var e = Q()
                    return function (t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                J = { left: 0, top: 0, right: 0, gap: 0 },
                ee = function (e) {
                    return parseInt(e || '', 10) || 0
                },
                et = function (e) {
                    var t = window.getComputedStyle(document.body),
                        r = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                        n = t['padding' === e ? 'paddingTop' : 'marginTop'],
                        i = t['padding' === e ? 'paddingRight' : 'marginRight']
                    return [ee(r), ee(n), ee(i)]
                },
                er = function (e) {
                    if (
                        (void 0 === e && (e = 'margin'),
                        'undefined' == typeof window)
                    )
                        return J
                    var t = et(e),
                        r = document.documentElement.clientWidth,
                        n = window.innerWidth
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, n - r + t[2] - t[0]),
                    }
                },
                en = Z(),
                ei = 'data-scroll-locked',
                eo = function (e, t, r, n) {
                    var i = e.left,
                        o = e.top,
                        s = e.right,
                        a = e.gap
                    return (
                        void 0 === r && (r = 'margin'),
                        '\n  .'
                            .concat(
                                'with-scroll-bars-hidden',
                                ' {\n   overflow: hidden '
                            )
                            .concat(n, ';\n   padding-right: ')
                            .concat(a, 'px ')
                            .concat(n, ';\n  }\n  body[')
                            .concat(ei, '] {\n    overflow: hidden ')
                            .concat(
                                n,
                                ';\n    overscroll-behavior: contain;\n    '
                            )
                            .concat(
                                [
                                    t && 'position: relative '.concat(n, ';'),
                                    'margin' === r &&
                                        '\n    padding-left: '
                                            .concat(i, 'px;\n    padding-top: ')
                                            .concat(
                                                o,
                                                'px;\n    padding-right: '
                                            )
                                            .concat(
                                                s,
                                                'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                                            )
                                            .concat(a, 'px ')
                                            .concat(n, ';\n    '),
                                    'padding' === r &&
                                        'padding-right: '
                                            .concat(a, 'px ')
                                            .concat(n, ';'),
                                ]
                                    .filter(Boolean)
                                    .join(''),
                                '\n  }\n  \n  .'
                            )
                            .concat(B, ' {\n    right: ')
                            .concat(a, 'px ')
                            .concat(n, ';\n  }\n  \n  .')
                            .concat(z, ' {\n    margin-right: ')
                            .concat(a, 'px ')
                            .concat(n, ';\n  }\n  \n  .')
                            .concat(B, ' .')
                            .concat(B, ' {\n    right: 0 ')
                            .concat(n, ';\n  }\n  \n  .')
                            .concat(z, ' .')
                            .concat(z, ' {\n    margin-right: 0 ')
                            .concat(n, ';\n  }\n  \n  body[')
                            .concat(ei, '] {\n    ')
                            .concat('--removed-body-scroll-bar-size', ': ')
                            .concat(a, 'px;\n  }\n')
                    )
                },
                es = function () {
                    var e = parseInt(document.body.getAttribute(ei) || '0', 10)
                    return isFinite(e) ? e : 0
                },
                ea = function () {
                    u.useEffect(function () {
                        return (
                            document.body.setAttribute(
                                ei,
                                (es() + 1).toString()
                            ),
                            function () {
                                var e = es() - 1
                                e <= 0
                                    ? document.body.removeAttribute(ei)
                                    : document.body.setAttribute(
                                          ei,
                                          e.toString()
                                      )
                            }
                        )
                    }, [])
                },
                el = function (e) {
                    var t = e.noRelative,
                        r = e.noImportant,
                        n = e.gapMode,
                        i = void 0 === n ? 'margin' : n
                    ea()
                    var o = u.useMemo(
                        function () {
                            return er(i)
                        },
                        [i]
                    )
                    return u.createElement(en, {
                        styles: eo(o, !t, i, r ? '' : '!important'),
                    })
                },
                eu = !1
            if ('undefined' != typeof window)
                try {
                    var ec = Object.defineProperty({}, 'passive', {
                        get: function () {
                            return (eu = !0), !0
                        },
                    })
                    window.addEventListener('test', ec, ec),
                        window.removeEventListener('test', ec, ec)
                } catch (e) {
                    eu = !1
                }
            var ed = !!eu && { passive: !1 },
                eh = function (e, t) {
                    if (!(e instanceof Element)) return !1
                    var r = window.getComputedStyle(e)
                    return (
                        'hidden' !== r[t] &&
                        (r.overflowY !== r.overflowX ||
                            'TEXTAREA' === e.tagName ||
                            'visible' !== r[t])
                    )
                },
                ep = function (e, t) {
                    var r = t.ownerDocument,
                        n = t
                    do {
                        if (
                            ('undefined' != typeof ShadowRoot &&
                                n instanceof ShadowRoot &&
                                (n = n.host),
                            ef(e, n))
                        ) {
                            var i = em(e, n)
                            if (i[1] > i[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== r.body)
                    return !1
                },
                ef = function (e, t) {
                    return 'v' === e ? eh(t, 'overflowY') : eh(t, 'overflowX')
                },
                em = function (e, t) {
                    return 'v' === e
                        ? [t.scrollTop, t.scrollHeight, t.clientHeight]
                        : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                eg = function (e, t, r, n, i) {
                    var o,
                        s =
                            ((o = window.getComputedStyle(t).direction),
                            'h' === e && 'rtl' === o ? -1 : 1),
                        a = s * n,
                        l = r.target,
                        u = t.contains(l),
                        c = !1,
                        d = a > 0,
                        h = 0,
                        p = 0
                    do {
                        if (!l) break
                        var f = em(e, l),
                            m = f[0],
                            g = f[1] - f[2] - s * m
                        ;(m || g) && ef(e, l) && ((h += g), (p += m))
                        var v = l.parentNode
                        l =
                            v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                                ? v.host
                                : v
                    } while (
                        (!u && l !== document.body) ||
                        (u && (t.contains(l) || t === l))
                    )
                    return (
                        d && ((i && 1 > Math.abs(h)) || (!i && a > h))
                            ? (c = !0)
                            : !d &&
                              ((i && 1 > Math.abs(p)) || (!i && -a > p)) &&
                              (c = !0),
                        c
                    )
                },
                ev = function (e) {
                    return 'changedTouches' in e
                        ? [
                              e.changedTouches[0].clientX,
                              e.changedTouches[0].clientY,
                          ]
                        : [0, 0]
                },
                ey = function (e) {
                    return [e.deltaX, e.deltaY]
                },
                eb = function (e) {
                    return e && 'current' in e ? e.current : e
                },
                ex = 0,
                ew = []
            let ek =
                ((n = function (e) {
                    var t = u.useRef([]),
                        r = u.useRef([0, 0]),
                        n = u.useRef(),
                        i = u.useState(ex++)[0],
                        o = u.useState(Z)[0],
                        s = u.useRef(e)
                    u.useEffect(
                        function () {
                            s.current = e
                        },
                        [e]
                    ),
                        u.useEffect(
                            function () {
                                if (e.inert) {
                                    document.body.classList.add(
                                        'block-interactivity-'.concat(i)
                                    )
                                    var t = (function (e, t, r) {
                                        if (r || 2 == arguments.length)
                                            for (
                                                var n, i = 0, o = t.length;
                                                i < o;
                                                i++
                                            )
                                                (!n && i in t) ||
                                                    (n ||
                                                        (n =
                                                            Array.prototype.slice.call(
                                                                t,
                                                                0,
                                                                i
                                                            )),
                                                    (n[i] = t[i]))
                                        return e.concat(
                                            n || Array.prototype.slice.call(t)
                                        )
                                    })(
                                        [e.lockRef.current],
                                        (e.shards || []).map(eb),
                                        !0
                                    ).filter(Boolean)
                                    return (
                                        t.forEach(function (e) {
                                            return e.classList.add(
                                                'allow-interactivity-'.concat(i)
                                            )
                                        }),
                                        function () {
                                            document.body.classList.remove(
                                                'block-interactivity-'.concat(i)
                                            ),
                                                t.forEach(function (e) {
                                                    return e.classList.remove(
                                                        'allow-interactivity-'.concat(
                                                            i
                                                        )
                                                    )
                                                })
                                        }
                                    )
                                }
                            },
                            [e.inert, e.lockRef.current, e.shards]
                        )
                    var a = u.useCallback(function (e, t) {
                            if (
                                ('touches' in e && 2 === e.touches.length) ||
                                ('wheel' === e.type && e.ctrlKey)
                            )
                                return !s.current.allowPinchZoom
                            var i,
                                o = ev(e),
                                a = r.current,
                                l = 'deltaX' in e ? e.deltaX : a[0] - o[0],
                                u = 'deltaY' in e ? e.deltaY : a[1] - o[1],
                                c = e.target,
                                d = Math.abs(l) > Math.abs(u) ? 'h' : 'v'
                            if (
                                'touches' in e &&
                                'h' === d &&
                                'range' === c.type
                            )
                                return !1
                            var h = window.getSelection(),
                                p = h && h.anchorNode
                            if (p && (p === c || p.contains(c))) return !1
                            var f = ep(d, c)
                            if (!f) return !0
                            if (
                                (f
                                    ? (i = d)
                                    : ((i = 'v' === d ? 'h' : 'v'),
                                      (f = ep(d, c))),
                                !f)
                            )
                                return !1
                            if (
                                (!n.current &&
                                    'changedTouches' in e &&
                                    (l || u) &&
                                    (n.current = i),
                                !i)
                            )
                                return !0
                            var m = n.current || i
                            return eg(m, t, e, 'h' === m ? l : u, !0)
                        }, []),
                        l = u.useCallback(function (e) {
                            if (ew.length && ew[ew.length - 1] === o) {
                                var r = 'deltaY' in e ? ey(e) : ev(e),
                                    n = t.current.filter(function (t) {
                                        var n
                                        return (
                                            t.name === e.type &&
                                            (t.target === e.target ||
                                                e.target === t.shadowParent) &&
                                            ((n = t.delta),
                                            n[0] === r[0] && n[1] === r[1])
                                        )
                                    })[0]
                                if (n && n.should) {
                                    e.cancelable && e.preventDefault()
                                    return
                                }
                                if (!n) {
                                    var i = (s.current.shards || [])
                                        .map(eb)
                                        .filter(Boolean)
                                        .filter(function (t) {
                                            return t.contains(e.target)
                                        })
                                    ;(i.length > 0
                                        ? a(e, i[0])
                                        : !s.current.noIsolation) &&
                                        e.cancelable &&
                                        e.preventDefault()
                                }
                            }
                        }, []),
                        c = u.useCallback(function (e, r, n, i) {
                            var o = {
                                name: e,
                                delta: r,
                                target: n,
                                should: i,
                                shadowParent: (function (e) {
                                    for (var t = null; null !== e; )
                                        e instanceof ShadowRoot &&
                                            ((t = e.host), (e = e.host)),
                                            (e = e.parentNode)
                                    return t
                                })(n),
                            }
                            t.current.push(o),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== o
                                    })
                                }, 1)
                        }, []),
                        d = u.useCallback(function (e) {
                            ;(r.current = ev(e)), (n.current = void 0)
                        }, []),
                        h = u.useCallback(function (t) {
                            c(t.type, ey(t), t.target, a(t, e.lockRef.current))
                        }, []),
                        p = u.useCallback(function (t) {
                            c(t.type, ev(t), t.target, a(t, e.lockRef.current))
                        }, [])
                    u.useEffect(function () {
                        return (
                            ew.push(o),
                            e.setCallbacks({
                                onScrollCapture: h,
                                onWheelCapture: h,
                                onTouchMoveCapture: p,
                            }),
                            document.addEventListener('wheel', l, ed),
                            document.addEventListener('touchmove', l, ed),
                            document.addEventListener('touchstart', d, ed),
                            function () {
                                ;(ew = ew.filter(function (e) {
                                    return e !== o
                                })),
                                    document.removeEventListener(
                                        'wheel',
                                        l,
                                        ed
                                    ),
                                    document.removeEventListener(
                                        'touchmove',
                                        l,
                                        ed
                                    ),
                                    document.removeEventListener(
                                        'touchstart',
                                        d,
                                        ed
                                    )
                            }
                        )
                    }, [])
                    var f = e.removeScrollBar,
                        m = e.inert
                    return u.createElement(
                        u.Fragment,
                        null,
                        m
                            ? u.createElement(o, {
                                  styles: '\n  .block-interactivity-'
                                      .concat(
                                          i,
                                          ' {pointer-events: none;}\n  .allow-interactivity-'
                                      )
                                      .concat(i, ' {pointer-events: all;}\n'),
                              })
                            : null,
                        f
                            ? u.createElement(el, {
                                  noRelative: e.noRelative,
                                  gapMode: e.gapMode,
                              })
                            : null
                    )
                }),
                K.useMedium(n),
                X)
            var eE = u.forwardRef(function (e, t) {
                return u.createElement(H, I({}, e, { ref: t, sideCar: ek }))
            })
            eE.classNames = H.classNames
            var eP = new WeakMap(),
                eS = new WeakMap(),
                eA = {},
                eT = 0,
                eC = function (e) {
                    return e && (e.host || eC(e.parentNode))
                },
                eM = function (e, t, r, n) {
                    var i = (Array.isArray(e) ? e : [e])
                        .map(function (e) {
                            if (t.contains(e)) return e
                            var r = eC(e)
                            return r && t.contains(r)
                                ? r
                                : (console.error(
                                      'aria-hidden',
                                      e,
                                      'in not contained inside',
                                      t,
                                      '. Doing nothing'
                                  ),
                                  null)
                        })
                        .filter(function (e) {
                            return !!e
                        })
                    eA[r] || (eA[r] = new WeakMap())
                    var o = eA[r],
                        s = [],
                        a = new Set(),
                        l = new Set(i),
                        u = function (e) {
                            !e || a.has(e) || (a.add(e), u(e.parentNode))
                        }
                    i.forEach(u)
                    var c = function (e) {
                        !e ||
                            l.has(e) ||
                            Array.prototype.forEach.call(
                                e.children,
                                function (e) {
                                    if (a.has(e)) c(e)
                                    else
                                        try {
                                            var t = e.getAttribute(n),
                                                i = null !== t && 'false' !== t,
                                                l = (eP.get(e) || 0) + 1,
                                                u = (o.get(e) || 0) + 1
                                            eP.set(e, l),
                                                o.set(e, u),
                                                s.push(e),
                                                1 === l && i && eS.set(e, !0),
                                                1 === u &&
                                                    e.setAttribute(r, 'true'),
                                                i || e.setAttribute(n, 'true')
                                        } catch (t) {
                                            console.error(
                                                'aria-hidden: cannot operate on ',
                                                e,
                                                t
                                            )
                                        }
                                }
                            )
                    }
                    return (
                        c(t),
                        a.clear(),
                        eT++,
                        function () {
                            s.forEach(function (e) {
                                var t = eP.get(e) - 1,
                                    i = o.get(e) - 1
                                eP.set(e, t),
                                    o.set(e, i),
                                    t ||
                                        (eS.has(e) || e.removeAttribute(n),
                                        eS.delete(e)),
                                    i || e.removeAttribute(r)
                            }),
                                --eT ||
                                    ((eP = new WeakMap()),
                                    (eP = new WeakMap()),
                                    (eS = new WeakMap()),
                                    (eA = {}))
                        }
                    )
                },
                ej = function (e, t, r) {
                    void 0 === r && (r = 'data-aria-hidden')
                    var n = Array.from(Array.isArray(e) ? e : [e]),
                        i =
                            t ||
                            ('undefined' == typeof document
                                ? null
                                : (Array.isArray(e) ? e[0] : e).ownerDocument
                                      .body)
                    return i
                        ? (n.push.apply(
                              n,
                              Array.from(
                                  i.querySelectorAll('[aria-live], script')
                              )
                          ),
                          eM(n, i, r, 'aria-hidden'))
                        : function () {
                              return null
                          }
                },
                eR = Symbol('radix.slottable')
            function eO(e) {
                return (
                    u.isValidElement(e) &&
                    'function' == typeof e.type &&
                    '__radixId' in e.type &&
                    e.type.__radixId === eR
                )
            }
            var eD = 'Dialog',
                [e_, eV] = (0, h.A)(eD),
                [eL, eN] = e_(eD),
                eI = (e) => {
                    let {
                            __scopeDialog: t,
                            children: r,
                            open: n,
                            defaultOpen: i,
                            onOpenChange: o,
                            modal: s = !0,
                        } = e,
                        a = u.useRef(null),
                        l = u.useRef(null),
                        [c, d] = (0, f.i)({
                            prop: n,
                            defaultProp: null != i && i,
                            onChange: o,
                            caller: eD,
                        })
                    return (0, v.jsx)(eL, {
                        scope: t,
                        triggerRef: a,
                        contentRef: l,
                        contentId: (0, p.B)(),
                        titleId: (0, p.B)(),
                        descriptionId: (0, p.B)(),
                        open: c,
                        onOpenChange: d,
                        onOpenToggle: u.useCallback(() => d((e) => !e), [d]),
                        modal: s,
                        children: r,
                    })
                }
            eI.displayName = eD
            var eF = 'DialogTrigger',
                eB = u.forwardRef((e, t) => {
                    let { __scopeDialog: r } = e,
                        n = (0, l._)(e, ['__scopeDialog']),
                        i = eN(eF, r),
                        o = (0, d.s)(t, i.triggerRef)
                    return (0, v.jsx)(
                        m.sG.button,
                        (0, a._)(
                            (0, s._)(
                                {
                                    type: 'button',
                                    'aria-haspopup': 'dialog',
                                    'aria-expanded': i.open,
                                    'aria-controls': i.contentId,
                                    'data-state': e8(i.open),
                                },
                                n
                            ),
                            {
                                ref: o,
                                onClick: (0, c.mK)(e.onClick, i.onOpenToggle),
                            }
                        )
                    )
                })
            eB.displayName = eF
            var ez = 'DialogPortal',
                [eW, eU] = e_(ez, { forceMount: void 0 }),
                eG = (e) => {
                    let {
                            __scopeDialog: t,
                            forceMount: r,
                            children: n,
                            container: i,
                        } = e,
                        o = eN(ez, t)
                    return (0, v.jsx)(eW, {
                        scope: t,
                        forceMount: r,
                        children: u.Children.map(n, (e) =>
                            (0, v.jsx)(V.C, {
                                present: r || o.open,
                                children: (0, v.jsx)(_, {
                                    asChild: !0,
                                    container: i,
                                    children: e,
                                }),
                            })
                        ),
                    })
                }
            eG.displayName = ez
            var e$ = 'DialogOverlay',
                eK = u.forwardRef((e, t) => {
                    let r = eU(e$, e.__scopeDialog),
                        { forceMount: n = r.forceMount } = e,
                        i = (0, l._)(e, ['forceMount']),
                        o = eN(e$, e.__scopeDialog)
                    return o.modal
                        ? (0, v.jsx)(V.C, {
                              present: n || o.open,
                              children: (0, v.jsx)(
                                  eH,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              ),
                          })
                        : null
                })
            eK.displayName = e$
            var eq = (function (e) {
                    let t = (function (e) {
                            let t = u.forwardRef((e, t) => {
                                let { children: r, ...n } = e
                                if (u.isValidElement(r)) {
                                    var i
                                    let e,
                                        o,
                                        s =
                                            ((i = r),
                                            (o =
                                                (e =
                                                    Object.getOwnPropertyDescriptor(
                                                        i.props,
                                                        'ref'
                                                    )?.get) &&
                                                'isReactWarning' in e &&
                                                e.isReactWarning)
                                                ? i.ref
                                                : (o =
                                                      (e =
                                                          Object.getOwnPropertyDescriptor(
                                                              i,
                                                              'ref'
                                                          )?.get) &&
                                                      'isReactWarning' in e &&
                                                      e.isReactWarning)
                                                ? i.props.ref
                                                : i.props.ref || i.ref),
                                        a = (function (e, t) {
                                            let r = { ...t }
                                            for (let n in t) {
                                                let i = e[n],
                                                    o = t[n]
                                                ;/^on[A-Z]/.test(n)
                                                    ? i && o
                                                        ? (r[n] = (...e) => {
                                                              let t = o(...e)
                                                              return i(...e), t
                                                          })
                                                        : i && (r[n] = i)
                                                    : 'style' === n
                                                    ? (r[n] = { ...i, ...o })
                                                    : 'className' === n &&
                                                      (r[n] = [i, o]
                                                          .filter(Boolean)
                                                          .join(' '))
                                            }
                                            return { ...e, ...r }
                                        })(n, r.props)
                                    return (
                                        r.type !== u.Fragment &&
                                            (a.ref = t ? (0, d.t)(t, s) : s),
                                        u.cloneElement(r, a)
                                    )
                                }
                                return u.Children.count(r) > 1
                                    ? u.Children.only(null)
                                    : null
                            })
                            return (t.displayName = `${e}.SlotClone`), t
                        })(e),
                        r = u.forwardRef((e, r) => {
                            let { children: n, ...i } = e,
                                o = u.Children.toArray(n),
                                s = o.find(eO)
                            if (s) {
                                let e = s.props.children,
                                    n = o.map((t) =>
                                        t !== s
                                            ? t
                                            : u.Children.count(e) > 1
                                            ? u.Children.only(null)
                                            : u.isValidElement(e)
                                            ? e.props.children
                                            : null
                                    )
                                return (0, v.jsx)(t, {
                                    ...i,
                                    ref: r,
                                    children: u.isValidElement(e)
                                        ? u.cloneElement(e, void 0, n)
                                        : null,
                                })
                            }
                            return (0, v.jsx)(t, { ...i, ref: r, children: n })
                        })
                    return (r.displayName = `${e}.Slot`), r
                })('DialogOverlay.RemoveScroll'),
                eH = u.forwardRef((e, t) => {
                    let { __scopeDialog: r } = e,
                        n = (0, l._)(e, ['__scopeDialog']),
                        i = eN(e$, r)
                    return (0, v.jsx)(eE, {
                        as: eq,
                        allowPinchZoom: !0,
                        shards: [i.contentRef],
                        children: (0, v.jsx)(
                            m.sG.div,
                            (0, a._)(
                                (0, s._)({ 'data-state': e8(i.open) }, n),
                                {
                                    ref: t,
                                    style: (0, s._)(
                                        { pointerEvents: 'auto' },
                                        n.style
                                    ),
                                }
                            )
                        ),
                    })
                }),
                eX = 'DialogContent',
                eY = u.forwardRef((e, t) => {
                    let r = eU(eX, e.__scopeDialog),
                        { forceMount: n = r.forceMount } = e,
                        i = (0, l._)(e, ['forceMount']),
                        o = eN(eX, e.__scopeDialog)
                    return (0, v.jsx)(V.C, {
                        present: n || o.open,
                        children: o.modal
                            ? (0, v.jsx)(
                                  eQ,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              )
                            : (0, v.jsx)(
                                  eZ,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              ),
                    })
                })
            eY.displayName = eX
            var eQ = u.forwardRef((e, t) => {
                    let r = eN(eX, e.__scopeDialog),
                        n = u.useRef(null),
                        i = (0, d.s)(t, r.contentRef, n)
                    return (
                        u.useEffect(() => {
                            let e = n.current
                            if (e) return ej(e)
                        }, []),
                        (0, v.jsx)(
                            eJ,
                            (0, a._)((0, s._)({}, e), {
                                ref: i,
                                trapFocus: r.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, c.mK)(
                                    e.onCloseAutoFocus,
                                    (e) => {
                                        var t
                                        e.preventDefault(),
                                            null ==
                                                (t = r.triggerRef.current) ||
                                                t.focus()
                                    }
                                ),
                                onPointerDownOutside: (0, c.mK)(
                                    e.onPointerDownOutside,
                                    (e) => {
                                        let t = e.detail.originalEvent,
                                            r =
                                                0 === t.button &&
                                                !0 === t.ctrlKey
                                        ;(2 === t.button || r) &&
                                            e.preventDefault()
                                    }
                                ),
                                onFocusOutside: (0, c.mK)(
                                    e.onFocusOutside,
                                    (e) => e.preventDefault()
                                ),
                            })
                        )
                    )
                }),
                eZ = u.forwardRef((e, t) => {
                    let r = eN(eX, e.__scopeDialog),
                        n = u.useRef(!1),
                        i = u.useRef(!1)
                    return (0, v.jsx)(
                        eJ,
                        (0, a._)((0, s._)({}, e), {
                            ref: t,
                            trapFocus: !1,
                            disableOutsidePointerEvents: !1,
                            onCloseAutoFocus: (t) => {
                                var o, s
                                null == (o = e.onCloseAutoFocus) ||
                                    o.call(e, t),
                                    t.defaultPrevented ||
                                        (n.current ||
                                            null ==
                                                (s = r.triggerRef.current) ||
                                            s.focus(),
                                        t.preventDefault()),
                                    (n.current = !1),
                                    (i.current = !1)
                            },
                            onInteractOutside: (t) => {
                                var o, s
                                null == (o = e.onInteractOutside) ||
                                    o.call(e, t),
                                    t.defaultPrevented ||
                                        ((n.current = !0),
                                        'pointerdown' ===
                                            t.detail.originalEvent.type &&
                                            (i.current = !0))
                                let a = t.target
                                ;(null == (s = r.triggerRef.current)
                                    ? void 0
                                    : s.contains(a)) && t.preventDefault(),
                                    'focusin' === t.detail.originalEvent.type &&
                                        i.current &&
                                        t.preventDefault()
                            },
                        })
                    )
                }),
                eJ = u.forwardRef((e, t) => {
                    let {
                            __scopeDialog: r,
                            trapFocus: n,
                            onOpenAutoFocus: i,
                            onCloseAutoFocus: o,
                        } = e,
                        c = (0, l._)(e, [
                            '__scopeDialog',
                            'trapFocus',
                            'onOpenAutoFocus',
                            'onCloseAutoFocus',
                        ]),
                        h = eN(eX, r),
                        p = u.useRef(null),
                        f = (0, d.s)(t, p)
                    return (
                        u.useEffect(() => {
                            var e, t
                            let r = document.querySelectorAll(
                                '[data-radix-focus-guard]'
                            )
                            return (
                                document.body.insertAdjacentElement(
                                    'afterbegin',
                                    null != (e = r[0]) ? e : N()
                                ),
                                document.body.insertAdjacentElement(
                                    'beforeend',
                                    null != (t = r[1]) ? t : N()
                                ),
                                L++,
                                () => {
                                    1 === L &&
                                        document
                                            .querySelectorAll(
                                                '[data-radix-focus-guard]'
                                            )
                                            .forEach((e) => e.remove()),
                                        L--
                                }
                            )
                        }, []),
                        (0, v.jsxs)(v.Fragment, {
                            children: [
                                (0, v.jsx)(A, {
                                    asChild: !0,
                                    loop: !0,
                                    trapped: n,
                                    onMountAutoFocus: i,
                                    onUnmountAutoFocus: o,
                                    children: (0, v.jsx)(
                                        x,
                                        (0, a._)(
                                            (0, s._)(
                                                {
                                                    role: 'dialog',
                                                    id: h.contentId,
                                                    'aria-describedby':
                                                        h.descriptionId,
                                                    'aria-labelledby':
                                                        h.titleId,
                                                    'data-state': e8(h.open),
                                                },
                                                c
                                            ),
                                            {
                                                ref: f,
                                                onDismiss: () =>
                                                    h.onOpenChange(!1),
                                            }
                                        )
                                    ),
                                }),
                                (0, v.jsxs)(v.Fragment, {
                                    children: [
                                        (0, v.jsx)(te, { titleId: h.titleId }),
                                        (0, v.jsx)(tt, {
                                            contentRef: p,
                                            descriptionId: h.descriptionId,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    )
                }),
                e0 = 'DialogTitle',
                e1 = u.forwardRef((e, t) => {
                    let { __scopeDialog: r } = e,
                        n = (0, l._)(e, ['__scopeDialog']),
                        i = eN(e0, r)
                    return (0, v.jsx)(
                        m.sG.h2,
                        (0, a._)((0, s._)({ id: i.titleId }, n), { ref: t })
                    )
                })
            e1.displayName = e0
            var e2 = 'DialogDescription',
                e5 = u.forwardRef((e, t) => {
                    let { __scopeDialog: r } = e,
                        n = (0, l._)(e, ['__scopeDialog']),
                        i = eN(e2, r)
                    return (0, v.jsx)(
                        m.sG.p,
                        (0, a._)((0, s._)({ id: i.descriptionId }, n), {
                            ref: t,
                        })
                    )
                })
            e5.displayName = e2
            var e4 = 'DialogClose',
                e3 = u.forwardRef((e, t) => {
                    let { __scopeDialog: r } = e,
                        n = (0, l._)(e, ['__scopeDialog']),
                        i = eN(e4, r)
                    return (0, v.jsx)(
                        m.sG.button,
                        (0, a._)((0, s._)({ type: 'button' }, n), {
                            ref: t,
                            onClick: (0, c.mK)(e.onClick, () =>
                                i.onOpenChange(!1)
                            ),
                        })
                    )
                })
            function e8(e) {
                return e ? 'open' : 'closed'
            }
            e3.displayName = e4
            var e6 = 'DialogTitleWarning',
                [e9, e7] = (0, h.q)(e6, {
                    contentName: eX,
                    titleName: e0,
                    docsSlug: 'dialog',
                }),
                te = (e) => {
                    let { titleId: t } = e,
                        r = e7(e6),
                        n = '`'
                            .concat(r.contentName, '` requires a `')
                            .concat(
                                r.titleName,
                                '` for the component to be accessible for screen reader users.\n\nIf you want to hide the `'
                            )
                            .concat(
                                r.titleName,
                                '`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/'
                            )
                            .concat(r.docsSlug)
                    return (
                        u.useEffect(() => {
                            t &&
                                (document.getElementById(t) || console.error(n))
                        }, [n, t]),
                        null
                    )
                },
                tt = (e) => {
                    let { contentRef: t, descriptionId: r } = e,
                        n = e7('DialogDescriptionWarning'),
                        i =
                            'Warning: Missing `Description` or `aria-describedby={undefined}` for {'.concat(
                                n.contentName,
                                '}.'
                            )
                    return (
                        u.useEffect(() => {
                            var e
                            let n =
                                null == (e = t.current)
                                    ? void 0
                                    : e.getAttribute('aria-describedby')
                            r &&
                                n &&
                                (document.getElementById(r) || console.warn(i))
                        }, [i, t, r]),
                        null
                    )
                },
                tr = eI,
                tn = eB,
                ti = eG,
                to = eK,
                ts = eY,
                ta = e1,
                tl = e5,
                tu = e3
        },
        8734: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('folder-open', [
                [
                    'path',
                    {
                        d: 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
                        key: 'usdka0',
                    },
                ],
            ])
        },
        8803: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('arrow-down', [
                ['path', { d: 'M12 5v14', key: 's699le' }],
                ['path', { d: 'm19 12-7 7-7-7', key: '1idqje' }],
            ])
        },
        8894: (e, t, r) => {
            r.d(t, { u: () => i })
            var n = r(1739)
            let i = {
                test: (0, r(3919).$)('#'),
                parse: function (e) {
                    let t = '',
                        r = '',
                        n = '',
                        i = ''
                    return (
                        e.length > 5
                            ? ((t = e.substring(1, 3)),
                              (r = e.substring(3, 5)),
                              (n = e.substring(5, 7)),
                              (i = e.substring(7, 9)))
                            : ((t = e.substring(1, 2)),
                              (r = e.substring(2, 3)),
                              (n = e.substring(3, 4)),
                              (i = e.substring(4, 5)),
                              (t += t),
                              (r += r),
                              (n += n),
                              (i += i)),
                        {
                            red: parseInt(t, 16),
                            green: parseInt(r, 16),
                            blue: parseInt(n, 16),
                            alpha: i ? parseInt(i, 16) / 255 : 1,
                        }
                    )
                },
                transform: n.B.transform,
            }
        },
        8895: (e, t, r) => {
            r.d(t, { q: () => n })
            let n = (e, t, r) => (r > t ? t : r < e ? e : r)
        },
        8946: (e, t, r) => {
            r.d(t, { B: () => l })
            var n,
                i = r(2115),
                o = r(4129),
                s =
                    (n || (n = r.t(i, 2)))[' useId '.trim().toString()] ||
                    (() => void 0),
                a = 0
            function l(e) {
                let [t, r] = i.useState(s())
                return (
                    (0, o.N)(() => {
                        e || r((e) => e ?? String(a++))
                    }, [e]),
                    e || (t ? `radix-${t}` : '')
                )
            }
        },
        9089: (e, t, r) => {
            r.d(t, { x: () => i })
            var n = r(3142)
            function i(e) {
                return (0, n.G)(e) && 'ownerSVGElement' in e
            }
        },
        9150: (e, t, r) => {
            r.d(t, { a: () => n })
            let n = (e) => Math.round(1e5 * e) / 1e5
        },
        9361: (e, t, r) => {
            r.d(t, { k: () => n })
            let n = (e, t, r) => e + (t - e) * r
        },
        9451: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('monitor', [
                [
                    'rect',
                    {
                        width: '20',
                        height: '14',
                        x: '2',
                        y: '3',
                        rx: '2',
                        key: '48i651',
                    },
                ],
                [
                    'line',
                    { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' },
                ],
                [
                    'line',
                    { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' },
                ],
            ])
        },
        9540: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('menu', [
                ['path', { d: 'M4 5h16', key: '1tepv9' }],
                ['path', { d: 'M4 12h16', key: '1lakjw' }],
                ['path', { d: 'M4 19h16', key: '1djgab' }],
            ])
        },
        9602: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('code', [
                ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
                ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }],
            ])
        },
        9633: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('briefcase', [
                [
                    'path',
                    {
                        d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
                        key: 'jecpp',
                    },
                ],
                [
                    'rect',
                    {
                        width: '20',
                        height: '14',
                        x: '2',
                        y: '6',
                        rx: '2',
                        key: 'i6l2r4',
                    },
                ],
            ])
        },
        9686: (e, t, r) => {
            r.d(t, { t: () => n })
            let n = (0, r(2115).createContext)(null)
        },
        9770: (e, t, r) => {
            r.d(t, { G: () => c })
            var n = r(6706),
                i = r(4416),
                o = r(3934),
                s = r(6553),
                a = r(3350)
            function l(e, t) {
                let r = (0, a.d)(t()),
                    n = () => r.set(t())
                return (
                    n(),
                    (0, s.E)(() => {
                        let t = () => o.Gt.preRender(n, !1, !0),
                            r = e.map((e) => e.on('change', t))
                        return () => {
                            r.forEach((e) => e()), (0, o.WG)(n)
                        }
                    }),
                    r
                )
            }
            var u = r(2039)
            function c(e, t, r, i) {
                if ('function' == typeof e) {
                    ;(u.bt.current = []), e()
                    let t = l(u.bt.current, e)
                    return (u.bt.current = void 0), t
                }
                let o =
                    'function' == typeof t
                        ? t
                        : (function (...e) {
                              let t = !Array.isArray(e[0]),
                                  r = t ? 0 : -1,
                                  i = e[0 + r],
                                  o = e[1 + r],
                                  s = e[2 + r],
                                  a = e[3 + r],
                                  l = (0, n.G)(o, s, a)
                              return t ? l(i) : l
                          })(t, r, i)
                return Array.isArray(e)
                    ? d(e, o)
                    : d([e], (e) => {
                          let [t] = e
                          return o(t)
                      })
            }
            function d(e, t) {
                let r = (0, i.M)(() => [])
                return l(e, () => {
                    r.length = 0
                    let n = e.length
                    for (let t = 0; t < n; t++) r[t] = e[t].get()
                    return t(r)
                })
            }
        },
        9862: (e, t, r) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'RouterContext', {
                    enumerable: !0,
                    get: function () {
                        return n
                    },
                })
            let n = r(8140)._(r(2115)).default.createContext(null)
        },
        9867: (e, t, r) => {
            r.d(t, { A: () => n })
            let n = (0, r(1847).A)('download', [
                ['path', { d: 'M12 15V3', key: 'm9g1x1' }],
                [
                    'path',
                    {
                        d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
                        key: 'ih7n3h',
                    },
                ],
                ['path', { d: 'm7 10 5 5 5-5', key: 'brsn70' }],
            ])
        },
    },
])
