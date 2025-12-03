'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [316],
    {
        64: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('youtube', [
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
        222: (e, t, n) => {
            n.d(t, { c: () => i })
            var r = n(2115)
            function i(e) {
                let t = r.useRef(e)
                return (
                    r.useEffect(() => {
                        t.current = e
                    }),
                    r.useMemo(
                        () =>
                            (...e) =>
                                t.current?.(...e),
                        []
                    )
                )
            }
        },
        296: (e, t, n) => {
            n.d(t, { L: () => r })
            let r = (0, n(2115).createContext)({})
        },
        627: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('tablet', [
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
        737: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'AmpStateContext', {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                })
            let r = n(8140)._(n(2115)).default.createContext({})
        },
        821: (e, t) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t)
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n],
                        })
                })(t, {
                    VALID_LOADERS: function () {
                        return n
                    },
                    imageConfigDefault: function () {
                        return r
                    },
                })
            let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
                r = {
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
        859: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('link', [
                [
                    'path',
                    {
                        d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
                        key: '1cjeqo',
                    },
                ],
                [
                    'path',
                    {
                        d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
                        key: '19qd67',
                    },
                ],
            ])
        },
        861: (e, t) => {
            function n(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: r = !1,
                } = void 0 === e ? {} : e
                return t || (n && r)
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isInAmpMode', {
                    enumerable: !0,
                    get: function () {
                        return n
                    },
                })
        },
        1124: (e, t) => {
            function n(e) {
                var t
                let { config: n, src: r, width: i, quality: o } = e,
                    s =
                        o ||
                        (null == (t = n.qualities)
                            ? void 0
                            : t.reduce((e, t) =>
                                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                              )) ||
                        75
                return (
                    n.path +
                    '?url=' +
                    encodeURIComponent(r) +
                    '&w=' +
                    i +
                    '&q=' +
                    s +
                    (r.startsWith('/_next/static/media/'), '')
                )
            }
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                }),
                (n.__next_img_default = !0)
            let r = n
        },
        1262: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s
                    },
                })
            let r = n(2115),
                i = r.useLayoutEffect,
                o = r.useEffect
            function s(e) {
                let { headManager: t, reduceComponentsToState: n } = e
                function s() {
                    if (t && t.mountedInstances) {
                        let i = r.Children.toArray(
                            Array.from(t.mountedInstances).filter(Boolean)
                        )
                        t.updateHead(n(i, e))
                    }
                }
                return (
                    i(() => {
                        var n
                        return (
                            null == t ||
                                null == (n = t.mountedInstances) ||
                                n.add(e.children),
                            () => {
                                var n
                                null == t ||
                                    null == (n = t.mountedInstances) ||
                                    n.delete(e.children)
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
        1356: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 })
            let r = n(1983),
                i = n(5849),
                o = n(7389)
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'Image', {
                    enumerable: !0,
                    get: function () {
                        return E
                    },
                })
            let s = n(8140),
                a = n(9417),
                l = n(5155),
                u = a._(n(2115)),
                c = s._(n(7650)),
                d = s._(n(4841)),
                h = n(5040),
                p = n(821),
                f = n(3455)
            n(4781)
            let m = n(9862),
                g = s._(n(1124)),
                v = n(3011),
                y = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: '/_next/image/',
                    loader: 'default',
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0,
                }
            function b(e, t, n, o, s, a, l) {
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
                                    null == n ? void 0 : n.current)
                                ) {
                                    let t = new Event('load')
                                    Object.defineProperty(t, 'target', {
                                        writable: !1,
                                        value: e,
                                    })
                                    let o = !1,
                                        s = !1
                                    n.current(
                                        i._(r._({}, t), {
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
                        src: n,
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
                        setShowAltText: T,
                        sizesInput: A,
                        onLoad: C,
                        onError: M,
                    } = e,
                    R = o._(e, [
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
                    j = (0, u.useCallback)(
                        (e) => {
                            e &&
                                (M && (e.src = e.src),
                                e.complete && b(e, g, E, P, S, w, A))
                        },
                        [n, g, E, P, S, M, w, A]
                    ),
                    D = (0, v.useMergedRef)(t, j)
                return (0, l.jsx)(
                    'img',
                    i._(r._({}, R, x(m)), {
                        loading: y,
                        width: d,
                        height: c,
                        decoding: h,
                        'data-nimg': k ? 'fill' : '1',
                        className: p,
                        style: f,
                        sizes: a,
                        srcSet: s,
                        src: n,
                        ref: D,
                        onLoad: (e) => {
                            b(e.currentTarget, g, E, P, S, w, A)
                        },
                        onError: (e) => {
                            T(!0), 'empty' !== g && S(!0), M && M(e)
                        },
                    })
                )
            })
            function k(e) {
                let { isAppRouter: t, imgAttributes: n } = e,
                    i = r._(
                        {
                            as: 'image',
                            imageSrcSet: n.srcSet,
                            imageSizes: n.sizes,
                            crossOrigin: n.crossOrigin,
                            referrerPolicy: n.referrerPolicy,
                        },
                        x(n.fetchPriority)
                    )
                return t && c.default.preload
                    ? (c.default.preload(n.src, i), null)
                    : (0, l.jsx)(d.default, {
                          children: (0, l.jsx)(
                              'link',
                              r._(
                                  {
                                      rel: 'preload',
                                      href: n.srcSet ? void 0 : n.src,
                                  },
                                  i
                              ),
                              '__nimg-' + n.src + n.srcSet + n.sizes
                          ),
                      })
            }
            let E = (0, u.forwardRef)((e, t) => {
                let n = (0, u.useContext)(m.RouterContext),
                    o = (0, u.useContext)(f.ImageConfigContext),
                    s = (0, u.useMemo)(() => {
                        var e
                        let t = y || o || p.imageConfigDefault,
                            n = [...t.deviceSizes, ...t.imageSizes].sort(
                                (e, t) => e - t
                            ),
                            s = t.deviceSizes.sort((e, t) => e - t),
                            a =
                                null == (e = t.qualities)
                                    ? void 0
                                    : e.sort((e, t) => e - t)
                        return i._(r._({}, t), {
                            allSizes: n,
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
                    { props: S, meta: T } = (0, h.getImgProps)(e, {
                        defaultLoader: g.default,
                        imgConf: s,
                        blurComplete: b,
                        showAltText: E,
                    })
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(
                            w,
                            i._(r._({}, S), {
                                unoptimized: T.unoptimized,
                                placeholder: T.placeholder,
                                fill: T.fill,
                                onLoadRef: d,
                                onLoadingCompleteRef: v,
                                setBlurComplete: x,
                                setShowAltText: P,
                                sizesInput: e.sizes,
                                ref: t,
                            })
                        ),
                        T.priority
                            ? (0, l.jsx)(k, {
                                  isAppRouter: !n,
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
        1402: (e, t, n) => {
            n.d(t, { s: () => i })
            var r = n(3142)
            function i(e) {
                return (0, r.G)(e) && 'offsetHeight' in e
            }
        },
        1733: (e, t, n) => {
            let r
            n.d(t, { P: () => ov })
            var i = n(2115)
            let o = [
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
                s = new Set(o),
                a = (e) => (180 * e) / Math.PI,
                l = (e) => c(a(Math.atan2(e[1], e[0]))),
                u = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
                    rotate: l,
                    rotateZ: l,
                    skewX: (e) => a(Math.atan(e[1])),
                    skewY: (e) => a(Math.atan(e[2])),
                    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
                },
                c = (e) => ((e %= 360) < 0 && (e += 360), e),
                d = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
                h = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
                p = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: d,
                    scaleY: h,
                    scale: (e) => (d(e) + h(e)) / 2,
                    rotateX: (e) => c(a(Math.atan2(e[6], e[5]))),
                    rotateY: (e) => c(a(Math.atan2(-e[2], e[0]))),
                    rotateZ: l,
                    rotate: l,
                    skewX: (e) => a(Math.atan(e[4])),
                    skewY: (e) => a(Math.atan(e[1])),
                    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
                }
            function f(e) {
                return +!!e.includes('scale')
            }
            function m(e, t) {
                let n, r
                if (!e || 'none' === e) return f(t)
                let i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u)
                if (i) (n = p), (r = i)
                else {
                    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u)
                    ;(n = u), (r = t)
                }
                if (!r) return f(t)
                let o = n[t],
                    s = r[1].split(',').map(g)
                return 'function' == typeof o ? o(s) : s[o]
            }
            function g(e) {
                return parseFloat(e.trim())
            }
            let v = (e) => (t) => 'string' == typeof t && t.startsWith(e),
                y = v('--'),
                b = v('var(--'),
                x = (e) => !!b(e) && w.test(e.split('/*')[0].trim()),
                w =
                    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
            function k({ top: e, left: t, right: n, bottom: r }) {
                return { x: { min: t, max: n }, y: { min: e, max: r } }
            }
            let E = (e, t, n) => e + (t - e) * n
            function P(e) {
                return void 0 === e || 1 === e
            }
            function S({ scale: e, scaleX: t, scaleY: n }) {
                return !P(e) || !P(t) || !P(n)
            }
            function T(e) {
                return (
                    S(e) ||
                    A(e) ||
                    e.z ||
                    e.rotate ||
                    e.rotateX ||
                    e.rotateY ||
                    e.skewX ||
                    e.skewY
                )
            }
            function A(e) {
                var t, n
                return ((t = e.x) && '0%' !== t) || ((n = e.y) && '0%' !== n)
            }
            function C(e, t, n, r, i) {
                return (
                    void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
                )
            }
            function M(e, t = 0, n = 1, r, i) {
                ;(e.min = C(e.min, t, n, r, i)), (e.max = C(e.max, t, n, r, i))
            }
            function R(e, { x: t, y: n }) {
                M(e.x, t.translate, t.scale, t.originPoint),
                    M(e.y, n.translate, n.scale, n.originPoint)
            }
            function j(e, t) {
                ;(e.min = e.min + t), (e.max = e.max + t)
            }
            function D(e, t, n, r, i = 0.5) {
                let o = E(e.min, e.max, i)
                M(e, t, n, o, r)
            }
            function _(e, t) {
                D(e.x, t.x, t.scaleX, t.scale, t.originX),
                    D(e.y, t.y, t.scaleY, t.scale, t.originY)
            }
            function O(e, t) {
                return k(
                    (function (e, t) {
                        if (!t) return e
                        let n = t({ x: e.left, y: e.top }),
                            r = t({ x: e.right, y: e.bottom })
                        return { top: n.y, left: n.x, bottom: r.y, right: r.x }
                    })(e.getBoundingClientRect(), t)
                )
            }
            let V = new Set([
                    'width',
                    'height',
                    'top',
                    'left',
                    'right',
                    'bottom',
                    ...o,
                ]),
                L = (e, t, n) => (n > t ? t : n < e ? e : n),
                I = {
                    test: (e) => 'number' == typeof e,
                    parse: parseFloat,
                    transform: (e) => e,
                },
                F = { ...I, transform: (e) => L(0, 1, e) },
                N = { ...I, default: 1 },
                z = (e) => ({
                    test: (t) =>
                        'string' == typeof t &&
                        t.endsWith(e) &&
                        1 === t.split(' ').length,
                    parse: parseFloat,
                    transform: (t) => `${t}${e}`,
                }),
                B = z('deg'),
                W = z('%'),
                U = z('px'),
                $ = z('vh'),
                K = z('vw'),
                G = {
                    ...W,
                    parse: (e) => W.parse(e) / 100,
                    transform: (e) => W.transform(100 * e),
                },
                X = (e) => (t) => t.test(e),
                Y = [
                    I,
                    U,
                    W,
                    B,
                    K,
                    $,
                    { test: (e) => 'auto' === e, parse: (e) => e },
                ],
                q = (e) => Y.find(X(e)),
                H = () => {},
                Z = () => {},
                Q = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
                J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                ee = (e) => e === I || e === U,
                et = new Set(['x', 'y', 'z']),
                en = o.filter((e) => !et.has(e)),
                er = {
                    width: (
                        { x: e },
                        { paddingLeft: t = '0', paddingRight: n = '0' }
                    ) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    height: (
                        { y: e },
                        { paddingTop: t = '0', paddingBottom: n = '0' }
                    ) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    top: (e, { top: t }) => parseFloat(t),
                    left: (e, { left: t }) => parseFloat(t),
                    bottom: ({ y: e }, { top: t }) =>
                        parseFloat(t) + (e.max - e.min),
                    right: ({ x: e }, { left: t }) =>
                        parseFloat(t) + (e.max - e.min),
                    x: (e, { transform: t }) => m(t, 'x'),
                    y: (e, { transform: t }) => m(t, 'y'),
                }
            ;(er.translateX = er.x), (er.translateY = er.y)
            let ei = (e) => e,
                eo = {},
                es = [
                    'setup',
                    'read',
                    'resolveKeyframes',
                    'preUpdate',
                    'update',
                    'preRender',
                    'render',
                    'postRender',
                ],
                ea = { value: null, addProjectionMetrics: null }
            function el(e, t) {
                let n = !1,
                    r = !0,
                    i = { delta: 0, timestamp: 0, isProcessing: !1 },
                    o = () => (n = !0),
                    s = es.reduce(
                        (e, n) => (
                            (e[n] = (function (e, t) {
                                let n = new Set(),
                                    r = new Set(),
                                    i = !1,
                                    o = !1,
                                    s = new WeakSet(),
                                    a = {
                                        delta: 0,
                                        timestamp: 0,
                                        isProcessing: !1,
                                    },
                                    l = 0
                                function u(t) {
                                    s.has(t) && (c.schedule(t), e()), l++, t(a)
                                }
                                let c = {
                                    schedule: (e, t = !1, o = !1) => {
                                        let a = o && i ? n : r
                                        return (
                                            t && s.add(e),
                                            a.has(e) || a.add(e),
                                            e
                                        )
                                    },
                                    cancel: (e) => {
                                        r.delete(e), s.delete(e)
                                    },
                                    process: (e) => {
                                        if (((a = e), i)) {
                                            o = !0
                                            return
                                        }
                                        ;(i = !0),
                                            ([n, r] = [r, n]),
                                            n.forEach(u),
                                            t &&
                                                ea.value &&
                                                ea.value.frameloop[t].push(l),
                                            (l = 0),
                                            n.clear(),
                                            (i = !1),
                                            o && ((o = !1), c.process(e))
                                    },
                                }
                                return c
                            })(o, t ? n : void 0)),
                            e
                        ),
                        {}
                    ),
                    {
                        setup: a,
                        read: l,
                        resolveKeyframes: u,
                        preUpdate: c,
                        update: d,
                        preRender: h,
                        render: p,
                        postRender: f,
                    } = s,
                    m = () => {
                        let o = eo.useManualTiming
                            ? i.timestamp
                            : performance.now()
                        ;(n = !1),
                            eo.useManualTiming ||
                                (i.delta = r
                                    ? 1e3 / 60
                                    : Math.max(
                                          Math.min(o - i.timestamp, 40),
                                          1
                                      )),
                            (i.timestamp = o),
                            (i.isProcessing = !0),
                            a.process(i),
                            l.process(i),
                            u.process(i),
                            c.process(i),
                            d.process(i),
                            h.process(i),
                            p.process(i),
                            f.process(i),
                            (i.isProcessing = !1),
                            n && t && ((r = !1), e(m))
                    }
                return {
                    schedule: es.reduce((t, o) => {
                        let a = s[o]
                        return (
                            (t[o] = (t, o = !1, s = !1) => (
                                !n &&
                                    ((n = !0),
                                    (r = !0),
                                    i.isProcessing || e(m)),
                                a.schedule(t, o, s)
                            )),
                            t
                        )
                    }, {}),
                    cancel: (e) => {
                        for (let t = 0; t < es.length; t++) s[es[t]].cancel(e)
                    },
                    state: i,
                    steps: s,
                }
            }
            let {
                    schedule: eu,
                    cancel: ec,
                    state: ed,
                    steps: eh,
                } = el(
                    'undefined' != typeof requestAnimationFrame
                        ? requestAnimationFrame
                        : ei,
                    !0
                ),
                ep = new Set(),
                ef = !1,
                em = !1,
                eg = !1
            function ev() {
                if (em) {
                    let e = Array.from(ep).filter((e) => e.needsMeasurement),
                        t = new Set(e.map((e) => e.element)),
                        n = new Map()
                    t.forEach((e) => {
                        let t = (function (e) {
                            let t = []
                            return (
                                en.forEach((n) => {
                                    let r = e.getValue(n)
                                    void 0 !== r &&
                                        (t.push([n, r.get()]),
                                        r.set(+!!n.startsWith('scale')))
                                }),
                                t
                            )
                        })(e)
                        t.length && (n.set(e, t), e.render())
                    }),
                        e.forEach((e) => e.measureInitialState()),
                        t.forEach((e) => {
                            e.render()
                            let t = n.get(e)
                            t &&
                                t.forEach(([t, n]) => {
                                    e.getValue(t)?.set(n)
                                })
                        }),
                        e.forEach((e) => e.measureEndState()),
                        e.forEach((e) => {
                            void 0 !== e.suspendedScrollY &&
                                window.scrollTo(0, e.suspendedScrollY)
                        })
                }
                ;(em = !1),
                    (ef = !1),
                    ep.forEach((e) => e.complete(eg)),
                    ep.clear()
            }
            function ey() {
                ep.forEach((e) => {
                    e.readKeyframes(), e.needsMeasurement && (em = !0)
                })
            }
            class eb {
                constructor(e, t, n, r, i, o = !1) {
                    ;(this.state = 'pending'),
                        (this.isAsync = !1),
                        (this.needsMeasurement = !1),
                        (this.unresolvedKeyframes = [...e]),
                        (this.onComplete = t),
                        (this.name = n),
                        (this.motionValue = r),
                        (this.element = i),
                        (this.isAsync = o)
                }
                scheduleResolve() {
                    ;(this.state = 'scheduled'),
                        this.isAsync
                            ? (ep.add(this),
                              ef ||
                                  ((ef = !0),
                                  eu.read(ey),
                                  eu.resolveKeyframes(ev)))
                            : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: e,
                        name: t,
                        element: n,
                        motionValue: r,
                    } = this
                    if (null === e[0]) {
                        let i = r?.get(),
                            o = e[e.length - 1]
                        if (void 0 !== i) e[0] = i
                        else if (n && t) {
                            let r = n.readValue(t, o)
                            null != r && (e[0] = r)
                        }
                        void 0 === e[0] && (e[0] = o),
                            r && void 0 === i && r.set(e[0])
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
                        ep.delete(this)
                }
                cancel() {
                    'scheduled' === this.state &&
                        (ep.delete(this), (this.state = 'pending'))
                }
                resume() {
                    'pending' === this.state && this.scheduleResolve()
                }
            }
            let ex = (e) => /^0[^.\s]+$/u.test(e),
                ew = (e) => Math.round(1e5 * e) / 1e5,
                ek = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                eE =
                    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                eP = (e, t) => (n) =>
                    !!(
                        ('string' == typeof n &&
                            eE.test(n) &&
                            n.startsWith(e)) ||
                        (t &&
                            null != n &&
                            Object.prototype.hasOwnProperty.call(n, t))
                    ),
                eS = (e, t, n) => (r) => {
                    if ('string' != typeof r) return r
                    let [i, o, s, a] = r.match(ek)
                    return {
                        [e]: parseFloat(i),
                        [t]: parseFloat(o),
                        [n]: parseFloat(s),
                        alpha: void 0 !== a ? parseFloat(a) : 1,
                    }
                },
                eT = { ...I, transform: (e) => Math.round(L(0, 255, e)) },
                eA = {
                    test: eP('rgb', 'red'),
                    parse: eS('red', 'green', 'blue'),
                    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
                        'rgba(' +
                        eT.transform(e) +
                        ', ' +
                        eT.transform(t) +
                        ', ' +
                        eT.transform(n) +
                        ', ' +
                        ew(F.transform(r)) +
                        ')',
                },
                eC = {
                    test: eP('#'),
                    parse: function (e) {
                        let t = '',
                            n = '',
                            r = '',
                            i = ''
                        return (
                            e.length > 5
                                ? ((t = e.substring(1, 3)),
                                  (n = e.substring(3, 5)),
                                  (r = e.substring(5, 7)),
                                  (i = e.substring(7, 9)))
                                : ((t = e.substring(1, 2)),
                                  (n = e.substring(2, 3)),
                                  (r = e.substring(3, 4)),
                                  (i = e.substring(4, 5)),
                                  (t += t),
                                  (n += n),
                                  (r += r),
                                  (i += i)),
                            {
                                red: parseInt(t, 16),
                                green: parseInt(n, 16),
                                blue: parseInt(r, 16),
                                alpha: i ? parseInt(i, 16) / 255 : 1,
                            }
                        )
                    },
                    transform: eA.transform,
                },
                eM = {
                    test: eP('hsl', 'hue'),
                    parse: eS('hue', 'saturation', 'lightness'),
                    transform: ({
                        hue: e,
                        saturation: t,
                        lightness: n,
                        alpha: r = 1,
                    }) =>
                        'hsla(' +
                        Math.round(e) +
                        ', ' +
                        W.transform(ew(t)) +
                        ', ' +
                        W.transform(ew(n)) +
                        ', ' +
                        ew(F.transform(r)) +
                        ')',
                },
                eR = {
                    test: (e) => eA.test(e) || eC.test(e) || eM.test(e),
                    parse: (e) =>
                        eA.test(e)
                            ? eA.parse(e)
                            : eM.test(e)
                            ? eM.parse(e)
                            : eC.parse(e),
                    transform: (e) =>
                        'string' == typeof e
                            ? e
                            : e.hasOwnProperty('red')
                            ? eA.transform(e)
                            : eM.transform(e),
                    getAnimatableNone: (e) => {
                        let t = eR.parse(e)
                        return (t.alpha = 0), eR.transform(t)
                    },
                },
                ej =
                    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                eD = 'number',
                e_ = 'color',
                eO =
                    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
            function eV(e) {
                let t = e.toString(),
                    n = [],
                    r = { color: [], number: [], var: [] },
                    i = [],
                    o = 0,
                    s = t
                        .replace(
                            eO,
                            (e) => (
                                eR.test(e)
                                    ? (r.color.push(o),
                                      i.push(e_),
                                      n.push(eR.parse(e)))
                                    : e.startsWith('var(')
                                    ? (r.var.push(o), i.push('var'), n.push(e))
                                    : (r.number.push(o),
                                      i.push(eD),
                                      n.push(parseFloat(e))),
                                ++o,
                                '${}'
                            )
                        )
                        .split('${}')
                return { values: n, split: s, indexes: r, types: i }
            }
            function eL(e) {
                return eV(e).values
            }
            function eI(e) {
                let { split: t, types: n } = eV(e),
                    r = t.length
                return (e) => {
                    let i = ''
                    for (let o = 0; o < r; o++)
                        if (((i += t[o]), void 0 !== e[o])) {
                            let t = n[o]
                            t === eD
                                ? (i += ew(e[o]))
                                : t === e_
                                ? (i += eR.transform(e[o]))
                                : (i += e[o])
                        }
                    return i
                }
            }
            let eF = (e) =>
                    'number' == typeof e
                        ? 0
                        : eR.test(e)
                        ? eR.getAnimatableNone(e)
                        : e,
                eN = {
                    test: function (e) {
                        return (
                            isNaN(e) &&
                            'string' == typeof e &&
                            (e.match(ek)?.length || 0) +
                                (e.match(ej)?.length || 0) >
                                0
                        )
                    },
                    parse: eL,
                    createTransformer: eI,
                    getAnimatableNone: function (e) {
                        let t = eL(e)
                        return eI(e)(t.map(eF))
                    },
                },
                ez = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
            function eB(e) {
                let [t, n] = e.slice(0, -1).split('(')
                if ('drop-shadow' === t) return e
                let [r] = n.match(ek) || []
                if (!r) return e
                let i = n.replace(r, ''),
                    o = +!!ez.has(t)
                return r !== n && (o *= 100), t + '(' + o + i + ')'
            }
            let eW = /\b([a-z-]*)\(.*?\)/gu,
                eU = {
                    ...eN,
                    getAnimatableNone: (e) => {
                        let t = e.match(eW)
                        return t ? t.map(eB).join(' ') : e
                    },
                },
                e$ = { ...I, transform: Math.round },
                eK = {
                    borderWidth: U,
                    borderTopWidth: U,
                    borderRightWidth: U,
                    borderBottomWidth: U,
                    borderLeftWidth: U,
                    borderRadius: U,
                    radius: U,
                    borderTopLeftRadius: U,
                    borderTopRightRadius: U,
                    borderBottomRightRadius: U,
                    borderBottomLeftRadius: U,
                    width: U,
                    maxWidth: U,
                    height: U,
                    maxHeight: U,
                    top: U,
                    right: U,
                    bottom: U,
                    left: U,
                    padding: U,
                    paddingTop: U,
                    paddingRight: U,
                    paddingBottom: U,
                    paddingLeft: U,
                    margin: U,
                    marginTop: U,
                    marginRight: U,
                    marginBottom: U,
                    marginLeft: U,
                    backgroundPositionX: U,
                    backgroundPositionY: U,
                    rotate: B,
                    rotateX: B,
                    rotateY: B,
                    rotateZ: B,
                    scale: N,
                    scaleX: N,
                    scaleY: N,
                    scaleZ: N,
                    skew: B,
                    skewX: B,
                    skewY: B,
                    distance: U,
                    translateX: U,
                    translateY: U,
                    translateZ: U,
                    x: U,
                    y: U,
                    z: U,
                    perspective: U,
                    transformPerspective: U,
                    opacity: F,
                    originX: G,
                    originY: G,
                    originZ: U,
                    zIndex: e$,
                    fillOpacity: F,
                    strokeOpacity: F,
                    numOctaves: e$,
                },
                eG = {
                    ...eK,
                    color: eR,
                    backgroundColor: eR,
                    outlineColor: eR,
                    fill: eR,
                    stroke: eR,
                    borderColor: eR,
                    borderTopColor: eR,
                    borderRightColor: eR,
                    borderBottomColor: eR,
                    borderLeftColor: eR,
                    filter: eU,
                    WebkitFilter: eU,
                },
                eX = (e) => eG[e]
            function eY(e, t) {
                let n = eX(e)
                return (
                    n !== eU && (n = eN),
                    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
                )
            }
            let eq = new Set(['auto', 'none', '0'])
            class eH extends eb {
                constructor(e, t, n, r, i) {
                    super(e, t, n, r, i, !0)
                }
                readKeyframes() {
                    let { unresolvedKeyframes: e, element: t, name: n } = this
                    if (!t || !t.current) return
                    super.readKeyframes()
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n]
                        if ('string' == typeof r && x((r = r.trim()))) {
                            let i = (function e(t, n, r = 1) {
                                Z(
                                    r <= 4,
                                    `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,
                                    'max-css-var-depth'
                                )
                                let [i, o] = (function (e) {
                                    let t = J.exec(e)
                                    if (!t) return [,]
                                    let [, n, r, i] = t
                                    return [`--${n ?? r}`, i]
                                })(t)
                                if (!i) return
                                let s = window
                                    .getComputedStyle(n)
                                    .getPropertyValue(i)
                                if (s) {
                                    let e = s.trim()
                                    return Q(e) ? parseFloat(e) : e
                                }
                                return x(o) ? e(o, n, r + 1) : o
                            })(r, t.current)
                            void 0 !== i && (e[n] = i),
                                n === e.length - 1 && (this.finalKeyframe = r)
                        }
                    }
                    if (
                        (this.resolveNoneKeyframes(),
                        !V.has(n) || 2 !== e.length)
                    )
                        return
                    let [r, i] = e,
                        o = q(r),
                        s = q(i)
                    if (o !== s)
                        if (ee(o) && ee(s))
                            for (let t = 0; t < e.length; t++) {
                                let n = e[t]
                                'string' == typeof n && (e[t] = parseFloat(n))
                            }
                        else er[n] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let { unresolvedKeyframes: e, name: t } = this,
                        n = []
                    for (let t = 0; t < e.length; t++) {
                        var r
                        ;(null === e[t] ||
                            ('number' == typeof (r = e[t])
                                ? 0 === r
                                : null === r ||
                                  'none' === r ||
                                  '0' === r ||
                                  ex(r))) &&
                            n.push(t)
                    }
                    n.length &&
                        (function (e, t, n) {
                            let r,
                                i = 0
                            for (; i < e.length && !r; ) {
                                let t = e[i]
                                'string' == typeof t &&
                                    !eq.has(t) &&
                                    eV(t).values.length &&
                                    (r = e[i]),
                                    i++
                            }
                            if (r && n) for (let i of t) e[i] = eY(n, r)
                        })(e, n, t)
                }
                measureInitialState() {
                    let { element: e, unresolvedKeyframes: t, name: n } = this
                    if (!e || !e.current) return
                    'height' === n &&
                        (this.suspendedScrollY = window.pageYOffset),
                        (this.measuredOrigin = er[n](
                            e.measureViewportBox(),
                            window.getComputedStyle(e.current)
                        )),
                        (t[0] = this.measuredOrigin)
                    let r = t[t.length - 1]
                    void 0 !== r && e.getValue(n, r).jump(r, !1)
                }
                measureEndState() {
                    let { element: e, name: t, unresolvedKeyframes: n } = this
                    if (!e || !e.current) return
                    let r = e.getValue(t)
                    r && r.jump(this.measuredOrigin, !1)
                    let i = n.length - 1,
                        o = n[i]
                    ;(n[i] = er[t](
                        e.measureViewportBox(),
                        window.getComputedStyle(e.current)
                    )),
                        null !== o &&
                            void 0 === this.finalKeyframe &&
                            (this.finalKeyframe = o),
                        this.removedTransforms?.length &&
                            this.removedTransforms.forEach(([t, n]) => {
                                e.getValue(t).set(n)
                            }),
                        this.resolveNoneKeyframes()
                }
            }
            let eZ = (e) => !!(e && e.getVelocity)
            function eQ() {
                r = void 0
            }
            let eJ = {
                now: () => (
                    void 0 === r &&
                        eJ.set(
                            ed.isProcessing || eo.useManualTiming
                                ? ed.timestamp
                                : performance.now()
                        ),
                    r
                ),
                set: (e) => {
                    ;(r = e), queueMicrotask(eQ)
                },
            }
            function e0(e, t) {
                ;-1 === e.indexOf(t) && e.push(t)
            }
            function e1(e, t) {
                let n = e.indexOf(t)
                n > -1 && e.splice(n, 1)
            }
            class e2 {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (
                        e0(this.subscriptions, e),
                        () => e1(this.subscriptions, e)
                    )
                }
                notify(e, t, n) {
                    let r = this.subscriptions.length
                    if (r)
                        if (1 === r) this.subscriptions[0](e, t, n)
                        else
                            for (let i = 0; i < r; i++) {
                                let r = this.subscriptions[i]
                                r && r(e, t, n)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let e5 = { current: void 0 }
            class e4 {
                constructor(e, t = {}) {
                    ;(this.canTrackVelocity = null),
                        (this.events = {}),
                        (this.updateAndNotify = (e) => {
                            let t = eJ.now()
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
                        (this.updatedAt = eJ.now()),
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
                    this.events[e] || (this.events[e] = new e2())
                    let n = this.events[e].add(t)
                    return 'change' === e
                        ? () => {
                              n(),
                                  eu.read(() => {
                                      this.events.change.getSize() ||
                                          this.stop()
                                  })
                          }
                        : n
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
                setWithVelocity(e, t, n) {
                    this.set(t),
                        (this.prev = void 0),
                        (this.prevFrameValue = e),
                        (this.prevUpdatedAt = this.updatedAt - n)
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
                    return e5.current && e5.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var e
                    let t = eJ.now()
                    if (
                        !this.canTrackVelocity ||
                        void 0 === this.prevFrameValue ||
                        t - this.updatedAt > 30
                    )
                        return 0
                    let n = Math.min(this.updatedAt - this.prevUpdatedAt, 30)
                    return (
                        (e =
                            parseFloat(this.current) -
                            parseFloat(this.prevFrameValue)),
                        n ? (1e3 / n) * e : 0
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
            function e3(e, t) {
                return new e4(e, t)
            }
            let e6 = [...Y, eR, eN],
                { schedule: e8 } = el(queueMicrotask, !1),
                e9 = {
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
                e7 = {}
            for (let e in e9)
                e7[e] = { isEnabled: (t) => e9[e].some((e) => !!t[e]) }
            let te = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0,
                }),
                tt = () => ({ x: te(), y: te() }),
                tn = () => ({ min: 0, max: 0 }),
                tr = () => ({ x: tn(), y: tn() })
            var ti = n(3577)
            let to = { current: null },
                ts = { current: !1 },
                ta = new WeakMap()
            function tl(e) {
                return (
                    null !== e &&
                    'object' == typeof e &&
                    'function' == typeof e.start
                )
            }
            function tu(e) {
                return 'string' == typeof e || Array.isArray(e)
            }
            let tc = [
                    'animate',
                    'whileInView',
                    'whileFocus',
                    'whileHover',
                    'whileTap',
                    'whileDrag',
                    'exit',
                ],
                td = ['initial', ...tc]
            function th(e) {
                return tl(e.animate) || td.some((t) => tu(e[t]))
            }
            function tp(e) {
                return !!(th(e) || e.variants)
            }
            function tf(e) {
                let t = [{}, {}]
                return (
                    e?.values.forEach((e, n) => {
                        ;(t[0][n] = e.get()), (t[1][n] = e.getVelocity())
                    }),
                    t
                )
            }
            function tm(e, t, n, r) {
                if ('function' == typeof t) {
                    let [i, o] = tf(r)
                    t = t(void 0 !== n ? n : e.custom, i, o)
                }
                if (
                    ('string' == typeof t && (t = e.variants && e.variants[t]),
                    'function' == typeof t)
                ) {
                    let [i, o] = tf(r)
                    t = t(void 0 !== n ? n : e.custom, i, o)
                }
                return t
            }
            let tg = [
                'AnimationStart',
                'AnimationComplete',
                'Update',
                'BeforeLayoutMeasure',
                'LayoutMeasure',
                'LayoutAnimationStart',
                'LayoutAnimationComplete',
            ]
            class tv {
                scrapeMotionValuesFromProps(e, t, n) {
                    return {}
                }
                constructor(
                    {
                        parent: e,
                        props: t,
                        presenceContext: n,
                        reducedMotionConfig: r,
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
                        (this.KeyframeResolver = eb),
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
                            let e = eJ.now()
                            this.renderScheduledAt < e &&
                                ((this.renderScheduledAt = e),
                                eu.render(this.render, !1, !0))
                        })
                    let { latestValues: a, renderState: l } = o
                    ;(this.latestValues = a),
                        (this.baseTarget = { ...a }),
                        (this.initialValues = t.initial ? { ...a } : {}),
                        (this.renderState = l),
                        (this.parent = e),
                        (this.props = t),
                        (this.presenceContext = n),
                        (this.depth = e ? e.depth + 1 : 0),
                        (this.reducedMotionConfig = r),
                        (this.options = s),
                        (this.blockInitialAnimation = !!i),
                        (this.isControllingVariants = th(t)),
                        (this.isVariantNode = tp(t)),
                        this.isVariantNode &&
                            (this.variantChildren = new Set()),
                        (this.manuallyAnimateOnMount = !!(e && e.current))
                    let { willChange: u, ...c } =
                        this.scrapeMotionValuesFromProps(t, {}, this)
                    for (let e in c) {
                        let t = c[e]
                        void 0 !== a[e] && eZ(t) && t.set(a[e])
                    }
                }
                mount(e) {
                    ;(this.current = e),
                        ta.set(e, this),
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
                        ts.current ||
                            (function () {
                                if (((ts.current = !0), ti.B))
                                    if (window.matchMedia) {
                                        let e = window.matchMedia(
                                                '(prefers-reduced-motion)'
                                            ),
                                            t = () => (to.current = e.matches)
                                        e.addEventListener('change', t), t()
                                    } else to.current = !1
                            })(),
                        (this.shouldReduceMotion =
                            'never' !== this.reducedMotionConfig &&
                            ('always' === this.reducedMotionConfig ||
                                to.current)),
                        this.parent?.addChild(this),
                        this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in (this.projection && this.projection.unmount(),
                    ec(this.notifyUpdate),
                    ec(this.render),
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
                    let n
                    this.valueSubscriptions.has(e) &&
                        this.valueSubscriptions.get(e)()
                    let r = s.has(e)
                    r && this.onBindTransform && this.onBindTransform()
                    let i = t.on('change', (t) => {
                        ;(this.latestValues[e] = t),
                            this.props.onUpdate &&
                                eu.preRender(this.notifyUpdate),
                            r &&
                                this.projection &&
                                (this.projection.isTransformDirty = !0),
                            this.scheduleRender()
                    })
                    window.MotionCheckAppearSync &&
                        (n = window.MotionCheckAppearSync(this, e, t)),
                        this.valueSubscriptions.set(e, () => {
                            i(), n && n(), t.owner && t.stop()
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
                    for (e in e7) {
                        let t = e7[e]
                        if (!t) continue
                        let { isEnabled: n, Feature: r } = t
                        if (
                            (!this.features[e] &&
                                r &&
                                n(this.props) &&
                                (this.features[e] = new r(this)),
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
                        : tr()
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
                    for (let t = 0; t < tg.length; t++) {
                        let n = tg[t]
                        this.propEventSubscriptions[n] &&
                            (this.propEventSubscriptions[n](),
                            delete this.propEventSubscriptions[n])
                        let r = e['on' + n]
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    ;(this.prevMotionValues = (function (e, t, n) {
                        for (let r in t) {
                            let i = t[r],
                                o = n[r]
                            if (eZ(i)) e.addValue(r, i)
                            else if (eZ(o)) e.addValue(r, e3(i, { owner: e }))
                            else if (o !== i)
                                if (e.hasValue(r)) {
                                    let t = e.getValue(r)
                                    !0 === t.liveStyle
                                        ? t.jump(i)
                                        : t.hasAnimated || t.set(i)
                                } else {
                                    let t = e.getStaticValue(r)
                                    e.addValue(
                                        r,
                                        e3(void 0 !== t ? t : i, { owner: e })
                                    )
                                }
                        }
                        for (let r in n) void 0 === t[r] && e.removeValue(r)
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
                    let n = this.values.get(e)
                    t !== n &&
                        (n && this.removeValue(e),
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
                    let n = this.values.get(e)
                    return (
                        void 0 === n &&
                            void 0 !== t &&
                            ((n = e3(null === t ? void 0 : t, { owner: this })),
                            this.addValue(e, n)),
                        n
                    )
                }
                readValue(e, t) {
                    let n =
                        void 0 === this.latestValues[e] && this.current
                            ? this.getBaseTargetFromProps(this.props, e) ??
                              this.readValueFromInstance(
                                  this.current,
                                  e,
                                  this.options
                              )
                            : this.latestValues[e]
                    if (null != n) {
                        if ('string' == typeof n && (Q(n) || ex(n)))
                            n = parseFloat(n)
                        else {
                            let r
                            ;(r = n),
                                !e6.find(X(r)) && eN.test(t) && (n = eY(e, t))
                        }
                        this.setBaseTarget(e, eZ(n) ? n.get() : n)
                    }
                    return eZ(n) ? n.get() : n
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    let t,
                        { initial: n } = this.props
                    if ('string' == typeof n || 'object' == typeof n) {
                        let r = tm(this.props, n, this.presenceContext?.custom)
                        r && (t = r[e])
                    }
                    if (n && void 0 !== t) return t
                    let r = this.getBaseTargetFromProps(this.props, e)
                    return void 0 === r || eZ(r)
                        ? void 0 !== this.initialValues[e] && void 0 === t
                            ? void 0
                            : this.baseTarget[e]
                        : r
                }
                on(e, t) {
                    return (
                        this.events[e] || (this.events[e] = new e2()),
                        this.events[e].add(t)
                    )
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
                scheduleRenderMicrotask() {
                    e8.render(this.render)
                }
            }
            class ty extends tv {
                constructor() {
                    super(...arguments), (this.KeyframeResolver = eH)
                }
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, { vars: t, style: n }) {
                    delete t[e], delete n[e]
                }
                handleChildMotionValue() {
                    this.childSubscription &&
                        (this.childSubscription(),
                        delete this.childSubscription)
                    let { children: e } = this.props
                    eZ(e) &&
                        (this.childSubscription = e.on('change', (e) => {
                            this.current && (this.current.textContent = `${e}`)
                        }))
                }
            }
            let tb = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e),
                tx = {
                    x: 'translateX',
                    y: 'translateY',
                    z: 'translateZ',
                    transformPerspective: 'perspective',
                },
                tw = o.length
            function tk(e, t, n) {
                let { style: r, vars: i, transformOrigin: a } = e,
                    l = !1,
                    u = !1
                for (let e in t) {
                    let n = t[e]
                    if (s.has(e)) {
                        l = !0
                        continue
                    }
                    if (y(e)) {
                        i[e] = n
                        continue
                    }
                    {
                        let t = tb(n, eK[e])
                        e.startsWith('origin')
                            ? ((u = !0), (a[e] = t))
                            : (r[e] = t)
                    }
                }
                if (
                    (!t.transform &&
                        (l || n
                            ? (r.transform = (function (e, t, n) {
                                  let r = '',
                                      i = !0
                                  for (let s = 0; s < tw; s++) {
                                      let a = o[s],
                                          l = e[a]
                                      if (void 0 === l) continue
                                      let u = !0
                                      if (
                                          !(u =
                                              'number' == typeof l
                                                  ? l ===
                                                    +!!a.startsWith('scale')
                                                  : 0 === parseFloat(l)) ||
                                          n
                                      ) {
                                          let e = tb(l, eK[a])
                                          if (!u) {
                                              i = !1
                                              let t = tx[a] || a
                                              r += `${t}(${e}) `
                                          }
                                          n && (t[a] = e)
                                      }
                                  }
                                  return (
                                      (r = r.trim()),
                                      n
                                          ? (r = n(t, i ? '' : r))
                                          : i && (r = 'none'),
                                      r
                                  )
                              })(t, e.transform, n))
                            : r.transform && (r.transform = 'none')),
                    u)
                ) {
                    let {
                        originX: e = '50%',
                        originY: t = '50%',
                        originZ: n = 0,
                    } = a
                    r.transformOrigin = `${e} ${t} ${n}`
                }
            }
            function tE(e, { style: t, vars: n }, r, i) {
                let o,
                    s = e.style
                for (o in t) s[o] = t[o]
                for (o in (i?.applyProjectionStyles(s, r), n))
                    s.setProperty(o, n[o])
            }
            let tP = {}
            function tS(e, { layout: t, layoutId: n }) {
                return (
                    s.has(e) ||
                    e.startsWith('origin') ||
                    ((t || void 0 !== n) && (!!tP[e] || 'opacity' === e))
                )
            }
            function tT(e, t, n) {
                let { style: r } = e,
                    i = {}
                for (let o in r)
                    (eZ(r[o]) ||
                        (t.style && eZ(t.style[o])) ||
                        tS(o, e) ||
                        n?.getValue(o)?.liveStyle !== void 0) &&
                        (i[o] = r[o])
                return i
            }
            class tA extends ty {
                constructor() {
                    super(...arguments),
                        (this.type = 'html'),
                        (this.renderInstance = tE)
                }
                readValueFromInstance(e, t) {
                    if (s.has(t))
                        return this.projection?.isProjecting
                            ? f(t)
                            : ((e, t) => {
                                  let { transform: n = 'none' } =
                                      getComputedStyle(e)
                                  return m(n, t)
                              })(e, t)
                    {
                        let n = window.getComputedStyle(e),
                            r = (y(t) ? n.getPropertyValue(t) : n[t]) || 0
                        return 'string' == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(e, { transformPagePoint: t }) {
                    return O(e, t)
                }
                build(e, t, n) {
                    tk(e, t, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t, n) {
                    return tT(e, t, n)
                }
            }
            let tC = (e) =>
                    e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
                tM = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
                tR = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
            function tj(
                e,
                {
                    attrX: t,
                    attrY: n,
                    attrScale: r,
                    pathLength: i,
                    pathSpacing: o = 1,
                    pathOffset: s = 0,
                    ...a
                },
                l,
                u,
                c
            ) {
                if ((tk(e, a, u), l)) {
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
                    void 0 !== n && (d.y = n),
                    void 0 !== r && (d.scale = r),
                    void 0 !== i &&
                        (function (e, t, n = 1, r = 0, i = !0) {
                            e.pathLength = 1
                            let o = i ? tM : tR
                            e[o.offset] = U.transform(-r)
                            let s = U.transform(t),
                                a = U.transform(n)
                            e[o.array] = `${s} ${a}`
                        })(d, i, o, s, !1)
            }
            let tD = new Set([
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
                t_ = (e) => 'string' == typeof e && 'svg' === e.toLowerCase()
            function tO(e, t, n) {
                let r = tT(e, t, n)
                for (let n in e)
                    (eZ(e[n]) || eZ(t[n])) &&
                        (r[
                            -1 !== o.indexOf(n)
                                ? 'attr' +
                                  n.charAt(0).toUpperCase() +
                                  n.substring(1)
                                : n
                        ] = e[n])
                return r
            }
            class tV extends ty {
                constructor() {
                    super(...arguments),
                        (this.type = 'svg'),
                        (this.isSVGTag = !1),
                        (this.measureInstanceViewportBox = tr)
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (s.has(t)) {
                        let e = eX(t)
                        return (e && e.default) || 0
                    }
                    return (t = tD.has(t) ? t : tC(t)), e.getAttribute(t)
                }
                scrapeMotionValuesFromProps(e, t, n) {
                    return tO(e, t, n)
                }
                build(e, t, n) {
                    tj(e, t, this.isSVGTag, n.transformTemplate, n.style)
                }
                renderInstance(e, t, n, r) {
                    for (let n in (tE(e, t, void 0, r), t.attrs))
                        e.setAttribute(tD.has(n) ? n : tC(n), t.attrs[n])
                }
                mount(e) {
                    ;(this.isSVGTag = t_(e.tagName)), super.mount(e)
                }
            }
            let tL = [
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
            function tI(e) {
                if ('string' != typeof e || e.includes('-'));
                else if (tL.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0
                return !1
            }
            var tF = n(1983),
                tN = n(5849),
                tz = n(5155),
                tB = n(296)
            let tW = (0, i.createContext)({ strict: !1 })
            var tU = n(3127)
            let t$ = (0, i.createContext)({})
            function tK(e) {
                return Array.isArray(e) ? e.join(' ') : e
            }
            let tG = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {},
            })
            function tX(e, t, n) {
                for (let r in t) eZ(t[r]) || tS(r, n) || (e[r] = t[r])
            }
            let tY = () => ({ ...tG(), attrs: {} }),
                tq = new Set([
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
            function tH(e) {
                return (
                    e.startsWith('while') ||
                    (e.startsWith('drag') && 'draggable' !== e) ||
                    e.startsWith('layout') ||
                    e.startsWith('onTap') ||
                    e.startsWith('onPan') ||
                    e.startsWith('onLayout') ||
                    tq.has(e)
                )
            }
            let tZ = (e) => !tH(e)
            try {
                !(function (e) {
                    'function' == typeof e &&
                        (tZ = (t) => (t.startsWith('on') ? !tH(t) : e(t)))
                })(require('@emotion/is-prop-valid').default)
            } catch {}
            var tQ = n(7389),
                tJ = n(9686),
                t0 = n(4416)
            function t1(e) {
                return eZ(e) ? e.get() : e
            }
            let t2 = (e) => (t, n) => {
                    let r = (0, i.useContext)(t$),
                        o = (0, i.useContext)(tJ.t),
                        s = () =>
                            (function (e, t, n, r) {
                                let {
                                    scrapeMotionValuesFromProps: i,
                                    createRenderState: o,
                                } = e
                                return {
                                    latestValues: (function (e, t, n, r) {
                                        let i = {},
                                            o = r(e, {})
                                        for (let e in o) i[e] = t1(o[e])
                                        let { initial: s, animate: a } = e,
                                            l = th(e),
                                            u = tp(e)
                                        t &&
                                            u &&
                                            !l &&
                                            !1 !== e.inherit &&
                                            (void 0 === s && (s = t.initial),
                                            void 0 === a && (a = t.animate))
                                        let c = !!n && !1 === n.initial,
                                            d = (c = c || !1 === s) ? a : s
                                        if (
                                            d &&
                                            'boolean' != typeof d &&
                                            !tl(d)
                                        ) {
                                            let t = Array.isArray(d) ? d : [d]
                                            for (let n = 0; n < t.length; n++) {
                                                let r = tm(e, t[n])
                                                if (r) {
                                                    let {
                                                            transitionEnd: e,
                                                            transition: t,
                                                        } = r,
                                                        n = (0, tQ._)(r, [
                                                            'transitionEnd',
                                                            'transition',
                                                        ])
                                                    for (let e in n) {
                                                        let t = n[e]
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
                                    })(t, n, r, i),
                                    renderState: o(),
                                }
                            })(e, t, r, o)
                    return n ? s() : (0, t0.M)(s)
                },
                t5 = t2({
                    scrapeMotionValuesFromProps: tT,
                    createRenderState: tG,
                }),
                t4 = t2({
                    scrapeMotionValuesFromProps: tO,
                    createRenderState: tY,
                }),
                t3 = Symbol.for('motionComponentSymbol')
            function t6(e) {
                return (
                    e &&
                    'object' == typeof e &&
                    Object.prototype.hasOwnProperty.call(e, 'current')
                )
            }
            let t8 = 'data-' + tC('framerAppearId'),
                t9 = (0, i.createContext)({})
            var t7 = n(6553)
            function ne(e) {
                var t, n
                let { forwardMotionProps: r = !1 } =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                    o = arguments.length > 2 ? arguments[2] : void 0,
                    s = arguments.length > 3 ? arguments[3] : void 0
                o &&
                    (function (e) {
                        for (let t in e) e7[t] = { ...e7[t], ...e[t] }
                    })(o)
                let a = tI(e) ? t4 : t5
                function l(t, n) {
                    var o
                    let l,
                        u = (0, tN._)(
                            (0, tF._)({}, (0, i.useContext)(tU.Q), t),
                            {
                                layoutId: (function (e) {
                                    let { layoutId: t } = e,
                                        n = (0, i.useContext)(tB.L).id
                                    return n && void 0 !== t ? n + '-' + t : t
                                })(t),
                            }
                        ),
                        { isStatic: c } = u,
                        d = (function (e) {
                            let { initial: t, animate: n } = (function (e, t) {
                                if (th(e)) {
                                    let { initial: t, animate: n } = e
                                    return {
                                        initial: !1 === t || tu(t) ? t : void 0,
                                        animate: tu(n) ? n : void 0,
                                    }
                                }
                                return !1 !== e.inherit ? t : {}
                            })(e, (0, i.useContext)(t$))
                            return (0, i.useMemo)(
                                () => ({ initial: t, animate: n }),
                                [tK(t), tK(n)]
                            )
                        })(t),
                        h = a(t, c)
                    if (!c && ti.B) {
                        ;(0, i.useContext)(tW).strict
                        let t = (function (e) {
                            let { drag: t, layout: n } = e7
                            if (!t && !n) return {}
                            let r = (0, tF._)({}, t, n)
                            return {
                                MeasureLayout:
                                    (null == t ? void 0 : t.isEnabled(e)) ||
                                    (null == n ? void 0 : n.isEnabled(e))
                                        ? r.MeasureLayout
                                        : void 0,
                                ProjectionNode: r.ProjectionNode,
                            }
                        })(u)
                        ;(l = t.MeasureLayout),
                            (d.visualElement = (function (e, t, n, r, o) {
                                var s, a, l, u
                                let { visualElement: c } = (0, i.useContext)(
                                        t$
                                    ),
                                    d = (0, i.useContext)(tW),
                                    h = (0, i.useContext)(tJ.t),
                                    p = (0, i.useContext)(tU.Q).reducedMotion,
                                    f = (0, i.useRef)(null)
                                ;(r = r || d.renderer),
                                    !f.current &&
                                        r &&
                                        (f.current = r(e, {
                                            visualState: t,
                                            parent: c,
                                            props: n,
                                            presenceContext: h,
                                            blockInitialAnimation:
                                                !!h && !1 === h.initial,
                                            reducedMotionConfig: p,
                                        }))
                                let m = f.current,
                                    g = (0, i.useContext)(t9)
                                m &&
                                    !m.projection &&
                                    o &&
                                    ('html' === m.type || 'svg' === m.type) &&
                                    (function (e, t, n, r) {
                                        let {
                                            layoutId: i,
                                            layout: o,
                                            drag: s,
                                            dragConstraints: a,
                                            layoutScroll: l,
                                            layoutRoot: u,
                                            layoutCrossfade: c,
                                        } = t
                                        ;(e.projection = new n(
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
                                                    !!s || (a && t6(a)),
                                                visualElement: e,
                                                animationType:
                                                    'string' == typeof o
                                                        ? o
                                                        : 'both',
                                                initialPromotionConfig: r,
                                                crossfade: c,
                                                layoutScroll: l,
                                                layoutRoot: u,
                                            })
                                    })(f.current, n, o, g)
                                let v = (0, i.useRef)(!1)
                                ;(0, i.useInsertionEffect)(() => {
                                    m && v.current && m.update(n, h)
                                })
                                let y = n[t8],
                                    b = (0, i.useRef)(
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
                                    (0, t7.E)(() => {
                                        m &&
                                            ((v.current = !0),
                                            (window.MotionIsMounted = !0),
                                            m.updateFeatures(),
                                            m.scheduleRenderMicrotask(),
                                            b.current &&
                                                m.animationState &&
                                                m.animationState.animateChanges())
                                    }),
                                    (0, i.useEffect)(() => {
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
                    return (0, tz.jsxs)(t$.Provider, {
                        value: d,
                        children: [
                            l && d.visualElement
                                ? (0, tz.jsx)(
                                      l,
                                      (0, tF._)(
                                          { visualElement: d.visualElement },
                                          u
                                      )
                                  )
                                : null,
                            (function (e, t, n, r, o) {
                                let { latestValues: s } = r,
                                    a =
                                        arguments.length > 5 &&
                                        void 0 !== arguments[5] &&
                                        arguments[5],
                                    l = (
                                        tI(e)
                                            ? function (e, t, n, r) {
                                                  let o = (0, i.useMemo)(() => {
                                                      let n = tY()
                                                      return (
                                                          tj(
                                                              n,
                                                              t,
                                                              t_(r),
                                                              e.transformTemplate,
                                                              e.style
                                                          ),
                                                          (0, tN._)(
                                                              (0, tF._)(
                                                                  {},
                                                                  n.attrs
                                                              ),
                                                              {
                                                                  style: (0,
                                                                  tF._)(
                                                                      {},
                                                                      n.style
                                                                  ),
                                                              }
                                                          )
                                                      )
                                                  }, [t])
                                                  if (e.style) {
                                                      let t = {}
                                                      tX(t, e.style, e),
                                                          (o.style = (0, tF._)(
                                                              {},
                                                              t,
                                                              o.style
                                                          ))
                                                  }
                                                  return o
                                              }
                                            : function (e, t) {
                                                  let n = {},
                                                      r = (function (e, t) {
                                                          let n = e.style || {},
                                                              r = {}
                                                          return (
                                                              tX(r, n, e),
                                                              Object.assign(
                                                                  r,
                                                                  (function (
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      let {
                                                                          transformTemplate:
                                                                              n,
                                                                      } = e
                                                                      return (0,
                                                                      i.useMemo)(() => {
                                                                          let e =
                                                                              tG()
                                                                          return (
                                                                              tk(
                                                                                  e,
                                                                                  t,
                                                                                  n
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
                                                              r
                                                          )
                                                      })(e, t)
                                                  return (
                                                      e.drag &&
                                                          !1 !==
                                                              e.dragListener &&
                                                          ((n.draggable = !1),
                                                          (r.userSelect =
                                                              r.WebkitUserSelect =
                                                              r.WebkitTouchCallout =
                                                                  'none'),
                                                          (r.touchAction =
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
                                                          (n.tabIndex = 0),
                                                      (n.style = r),
                                                      n
                                                  )
                                              }
                                    )(t, s, o, e),
                                    u = (function (e, t, n) {
                                        let r = {}
                                        for (let i in e)
                                            ('values' !== i ||
                                                'object' != typeof e.values) &&
                                                (tZ(i) ||
                                                    (!0 === n && tH(i)) ||
                                                    (!t && !tH(i)) ||
                                                    (e.draggable &&
                                                        i.startsWith(
                                                            'onDrag'
                                                        ))) &&
                                                (r[i] = e[i])
                                        return r
                                    })(t, 'string' == typeof e, a),
                                    c =
                                        e !== i.Fragment
                                            ? (0, tN._)((0, tF._)({}, u, l), {
                                                  ref: n,
                                              })
                                            : {},
                                    { children: d } = t,
                                    h = (0, i.useMemo)(
                                        () => (eZ(d) ? d.get() : d),
                                        [d]
                                    )
                                return (0, i.createElement)(
                                    e,
                                    (0, tN._)((0, tF._)({}, c), { children: h })
                                )
                            })(
                                e,
                                t,
                                ((o = d.visualElement),
                                (0, i.useCallback)(
                                    (e) => {
                                        e && h.onMount && h.onMount(e),
                                            o && (e ? o.mount(e) : o.unmount()),
                                            n &&
                                                ('function' == typeof n
                                                    ? n(e)
                                                    : t6(n) && (n.current = e))
                                    },
                                    [o]
                                )),
                                h,
                                c,
                                r
                            ),
                        ],
                    })
                }
                l.displayName = 'motion.'.concat(
                    'string' == typeof e
                        ? e
                        : 'create('.concat(
                              null !=
                                  (n = null != (t = e.displayName) ? t : e.name)
                                  ? n
                                  : '',
                              ')'
                          )
                )
                let u = (0, i.forwardRef)(l)
                return (u[t3] = e), u
            }
            function nt(e, t, n) {
                let r = e.getProps()
                return tm(r, t, void 0 !== n ? n : r.custom, e)
            }
            function nn(e, t) {
                return e?.[t] ?? e?.default ?? e
            }
            let nr = (e) => Array.isArray(e)
            function ni(e, t) {
                let n = e.getValue('willChange')
                if (eZ(n) && n.add) return n.add(t)
                if (!n && eo.WillChange) {
                    let n = new eo.WillChange('auto')
                    e.addValue('willChange', n), n.add(t)
                }
            }
            function no(e) {
                ;(e.duration = 0), (e.type = 'keyframes')
            }
            let ns = (e, t) => (n) => t(e(n)),
                na = (...e) => e.reduce(ns),
                nl = (e) => 1e3 * e,
                nu = { layout: 0, mainThread: 0, waapi: 0 }
            function nc(e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
                    ? e + (t - e) * 6 * n
                    : n < 0.5
                    ? t
                    : n < 2 / 3
                    ? e + (t - e) * (2 / 3 - n) * 6
                    : e
            }
            function nd(e, t) {
                return (n) => (n > 0 ? t : e)
            }
            let nh = (e, t, n) => {
                    let r = e * e,
                        i = n * (t * t - r) + r
                    return i < 0 ? 0 : Math.sqrt(i)
                },
                np = [eC, eA, eM]
            function nf(e) {
                let t = np.find((t) => t.test(e))
                if (
                    (H(
                        !!t,
                        `'${e}' is not an animatable color. Use the equivalent color code instead.`,
                        'color-not-animatable'
                    ),
                    !t)
                )
                    return !1
                let n = t.parse(e)
                return (
                    t === eM &&
                        (n = (function ({
                            hue: e,
                            saturation: t,
                            lightness: n,
                            alpha: r,
                        }) {
                            ;(e /= 360), (n /= 100)
                            let i = 0,
                                o = 0,
                                s = 0
                            if ((t /= 100)) {
                                let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                                    a = 2 * n - r
                                ;(i = nc(a, r, e + 1 / 3)),
                                    (o = nc(a, r, e)),
                                    (s = nc(a, r, e - 1 / 3))
                            } else i = o = s = n
                            return {
                                red: Math.round(255 * i),
                                green: Math.round(255 * o),
                                blue: Math.round(255 * s),
                                alpha: r,
                            }
                        })(n)),
                    n
                )
            }
            let nm = (e, t) => {
                    let n = nf(e),
                        r = nf(t)
                    if (!n || !r) return nd(e, t)
                    let i = { ...n }
                    return (e) => (
                        (i.red = nh(n.red, r.red, e)),
                        (i.green = nh(n.green, r.green, e)),
                        (i.blue = nh(n.blue, r.blue, e)),
                        (i.alpha = E(n.alpha, r.alpha, e)),
                        eA.transform(i)
                    )
                },
                ng = new Set(['none', 'hidden'])
            function nv(e, t) {
                return (n) => E(e, t, n)
            }
            function ny(e) {
                return 'number' == typeof e
                    ? nv
                    : 'string' == typeof e
                    ? x(e)
                        ? nd
                        : eR.test(e)
                        ? nm
                        : nw
                    : Array.isArray(e)
                    ? nb
                    : 'object' == typeof e
                    ? eR.test(e)
                        ? nm
                        : nx
                    : nd
            }
            function nb(e, t) {
                let n = [...e],
                    r = n.length,
                    i = e.map((e, n) => ny(e)(e, t[n]))
                return (e) => {
                    for (let t = 0; t < r; t++) n[t] = i[t](e)
                    return n
                }
            }
            function nx(e, t) {
                let n = { ...e, ...t },
                    r = {}
                for (let i in n)
                    void 0 !== e[i] &&
                        void 0 !== t[i] &&
                        (r[i] = ny(e[i])(e[i], t[i]))
                return (e) => {
                    for (let t in r) n[t] = r[t](e)
                    return n
                }
            }
            let nw = (e, t) => {
                let n = eN.createTransformer(t),
                    r = eV(e),
                    i = eV(t)
                return r.indexes.var.length === i.indexes.var.length &&
                    r.indexes.color.length === i.indexes.color.length &&
                    r.indexes.number.length >= i.indexes.number.length
                    ? (ng.has(e) && !i.values.length) ||
                      (ng.has(t) && !r.values.length)
                        ? (function (e, t) {
                              return ng.has(e)
                                  ? (n) => (n <= 0 ? e : t)
                                  : (n) => (n >= 1 ? t : e)
                          })(e, t)
                        : na(
                              nb(
                                  (function (e, t) {
                                      let n = [],
                                          r = { color: 0, var: 0, number: 0 }
                                      for (
                                          let i = 0;
                                          i < t.values.length;
                                          i++
                                      ) {
                                          let o = t.types[i],
                                              s = e.indexes[o][r[o]],
                                              a = e.values[s] ?? 0
                                          ;(n[i] = a), r[o]++
                                      }
                                      return n
                                  })(r, i),
                                  i.values
                              ),
                              n
                          )
                    : (H(
                          !0,
                          `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
                          'complex-values-different'
                      ),
                      nd(e, t))
            }
            function nk(e, t, n) {
                return 'number' == typeof e &&
                    'number' == typeof t &&
                    'number' == typeof n
                    ? E(e, t, n)
                    : ny(e)(e, t)
            }
            let nE = (e) => {
                    let t = ({ timestamp: t }) => e(t)
                    return {
                        start: (e = !0) => eu.update(t, e),
                        stop: () => ec(t),
                        now: () => (ed.isProcessing ? ed.timestamp : eJ.now()),
                    }
                },
                nP = (e, t, n = 10) => {
                    let r = '',
                        i = Math.max(Math.round(t / n), 2)
                    for (let t = 0; t < i; t++)
                        r += Math.round(1e4 * e(t / (i - 1))) / 1e4 + ', '
                    return `linear(${r.substring(0, r.length - 2)})`
                }
            function nS(e) {
                let t = 0,
                    n = e.next(t)
                for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t))
                return t >= 2e4 ? 1 / 0 : t
            }
            function nT(e, t, n) {
                var r, i
                let o = Math.max(t - 5, 0)
                return (r = n - e(o)), (i = t - o) ? (1e3 / i) * r : 0
            }
            let nA = {
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
            function nC(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let nM = ['duration', 'bounce'],
                nR = ['stiffness', 'damping', 'mass']
            function nj(e, t) {
                return t.some((t) => void 0 !== e[t])
            }
            function nD(e = nA.visualDuration, t = nA.bounce) {
                let n,
                    r =
                        'object' != typeof e
                            ? {
                                  visualDuration: e,
                                  keyframes: [0, 1],
                                  bounce: t,
                              }
                            : e,
                    { restSpeed: i, restDelta: o } = r,
                    s = r.keyframes[0],
                    a = r.keyframes[r.keyframes.length - 1],
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
                            velocity: nA.velocity,
                            stiffness: nA.stiffness,
                            damping: nA.damping,
                            mass: nA.mass,
                            isResolvedFromDuration: !1,
                            ...e,
                        }
                        if (!nj(e, nR) && nj(e, nM))
                            if (e.visualDuration) {
                                let n =
                                        (2 * Math.PI) /
                                        (1.2 * e.visualDuration),
                                    r = n * n,
                                    i =
                                        2 *
                                        L(0.05, 1, 1 - (e.bounce || 0)) *
                                        Math.sqrt(r)
                                t = {
                                    ...t,
                                    mass: nA.mass,
                                    stiffness: r,
                                    damping: i,
                                }
                            } else {
                                let n = (function ({
                                    duration: e = nA.duration,
                                    bounce: t = nA.bounce,
                                    velocity: n = nA.velocity,
                                    mass: r = nA.mass,
                                }) {
                                    let i, o
                                    H(
                                        e <= nl(nA.maxDuration),
                                        'Spring duration must be 10 seconds or less',
                                        'spring-duration-limit'
                                    )
                                    let s = 1 - t
                                    ;(s = L(nA.minDamping, nA.maxDamping, s)),
                                        (e = L(
                                            nA.minDuration,
                                            nA.maxDuration,
                                            e / 1e3
                                        )),
                                        s < 1
                                            ? ((i = (t) => {
                                                  let r = t * s,
                                                      i = r * e
                                                  return (
                                                      0.001 -
                                                      ((r - n) / nC(t, s)) *
                                                          Math.exp(-i)
                                                  )
                                              }),
                                              (o = (t) => {
                                                  let r = t * s * e,
                                                      o =
                                                          Math.pow(s, 2) *
                                                          Math.pow(t, 2) *
                                                          e,
                                                      a = Math.exp(-r),
                                                      l = nC(Math.pow(t, 2), s)
                                                  return (
                                                      ((r * n + n - o) *
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
                                                      ((t - n) * e + 1)),
                                              (o = (t) =>
                                                  e *
                                                  e *
                                                  (n - t) *
                                                  Math.exp(-t * e)))
                                    let a = (function (e, t, n) {
                                        let r = n
                                        for (let n = 1; n < 12; n++)
                                            r -= e(r) / t(r)
                                        return r
                                    })(i, o, 5 / e)
                                    if (((e = nl(e)), isNaN(a)))
                                        return {
                                            stiffness: nA.stiffness,
                                            damping: nA.damping,
                                            duration: e,
                                        }
                                    {
                                        let t = Math.pow(a, 2) * r
                                        return {
                                            stiffness: t,
                                            damping: 2 * s * Math.sqrt(r * t),
                                            duration: e,
                                        }
                                    }
                                })(e)
                                ;(t = {
                                    ...t,
                                    ...n,
                                    mass: nA.mass,
                                }).isResolvedFromDuration = !0
                            }
                        return t
                    })({ ...r, velocity: -((r.velocity || 0) / 1e3) }),
                    m = p || 0,
                    g = c / (2 * Math.sqrt(u * d)),
                    v = a - s,
                    y = Math.sqrt(u / d) / 1e3,
                    b = 5 > Math.abs(v)
                if (
                    (i ||
                        (i = b ? nA.restSpeed.granular : nA.restSpeed.default),
                    o || (o = b ? nA.restDelta.granular : nA.restDelta.default),
                    g < 1)
                ) {
                    let e = nC(y, g)
                    n = (t) =>
                        a -
                        Math.exp(-g * y * t) *
                            (((m + g * y * v) / e) * Math.sin(e * t) +
                                v * Math.cos(e * t))
                } else if (1 === g)
                    n = (e) => a - Math.exp(-y * e) * (v + (m + y * v) * e)
                else {
                    let e = y * Math.sqrt(g * g - 1)
                    n = (t) => {
                        let n = Math.exp(-g * y * t),
                            r = Math.min(e * t, 300)
                        return (
                            a -
                            (n *
                                ((m + g * y * v) * Math.sinh(r) +
                                    e * v * Math.cosh(r))) /
                                e
                        )
                    }
                }
                let x = {
                    calculatedDuration: (f && h) || null,
                    next: (e) => {
                        let t = n(e)
                        if (f) l.done = e >= h
                        else {
                            let r = 0 === e ? m : 0
                            g < 1 && (r = 0 === e ? nl(m) : nT(n, e, t))
                            let s = Math.abs(a - t) <= o
                            l.done = Math.abs(r) <= i && s
                        }
                        return (l.value = l.done ? a : t), l
                    },
                    toString: () => {
                        let e = Math.min(nS(x), 2e4),
                            t = nP((t) => x.next(e * t).value, e, 30)
                        return e + 'ms ' + t
                    },
                    toTransition: () => {},
                }
                return x
            }
            function n_({
                keyframes: e,
                velocity: t = 0,
                power: n = 0.8,
                timeConstant: r = 325,
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
                    m = n * t,
                    g = p + m,
                    v = void 0 === s ? g : s(g)
                v !== g && (m = v - p)
                let y = (e) => -m * Math.exp(-e / r),
                    b = (e) => v + y(e),
                    x = (e) => {
                        let t = y(e),
                            n = b(e)
                        ;(f.done = Math.abs(t) <= u), (f.value = f.done ? v : n)
                    },
                    w = (e) => {
                        let t
                        if (
                            ((t = f.value),
                            (void 0 !== a && t < a) || (void 0 !== l && t > l))
                        ) {
                            var n
                            ;(d = e),
                                (h = nD({
                                    keyframes: [
                                        f.value,
                                        ((n = f.value),
                                        void 0 === a
                                            ? l
                                            : void 0 === l ||
                                              Math.abs(a - n) < Math.abs(l - n)
                                            ? a
                                            : l),
                                    ],
                                    velocity: nT(b, e, f.value),
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
            nD.applyToOptions = (e) => {
                let t = (function (e, t = 100, n) {
                    let r = n({ ...e, keyframes: [0, t] }),
                        i = Math.min(nS(r), 2e4)
                    return {
                        type: 'keyframes',
                        ease: (e) => r.next(i * e).value / t,
                        duration: i / 1e3,
                    }
                })(e, 100, nD)
                return (
                    (e.ease = t.ease),
                    (e.duration = nl(t.duration)),
                    (e.type = 'keyframes'),
                    e
                )
            }
            let nO = (e, t, n) =>
                (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
            function nV(e, t, n, r) {
                return e === t && n === r
                    ? ei
                    : (i) =>
                          0 === i || 1 === i
                              ? i
                              : nO(
                                    (function (e, t, n, r, i) {
                                        let o,
                                            s,
                                            a = 0
                                        do
                                            (o =
                                                nO(
                                                    (s = t + (n - t) / 2),
                                                    r,
                                                    i
                                                ) - e) > 0
                                                ? (n = s)
                                                : (t = s)
                                        while (Math.abs(o) > 1e-7 && ++a < 12)
                                        return s
                                    })(i, 0, 1, e, n),
                                    t,
                                    r
                                )
            }
            let nL = nV(0.42, 0, 1, 1),
                nI = nV(0, 0, 0.58, 1),
                nF = nV(0.42, 0, 0.58, 1),
                nN = (e) => (t) =>
                    t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                nz = (e) => (t) => 1 - e(1 - t),
                nB = nV(0.33, 1.53, 0.69, 0.99),
                nW = nz(nB),
                nU = nN(nW),
                n$ = (e) =>
                    (e *= 2) < 1
                        ? 0.5 * nW(e)
                        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
                nK = (e) => 1 - Math.sin(Math.acos(e)),
                nG = nz(nK),
                nX = nN(nK),
                nY = (e) => Array.isArray(e) && 'number' == typeof e[0],
                nq = {
                    linear: ei,
                    easeIn: nL,
                    easeInOut: nF,
                    easeOut: nI,
                    circIn: nK,
                    circInOut: nX,
                    circOut: nG,
                    backIn: nW,
                    backInOut: nU,
                    backOut: nB,
                    anticipate: n$,
                },
                nH = (e) => {
                    if (nY(e)) {
                        Z(
                            4 === e.length,
                            'Cubic bezier arrays must contain four numerical values.',
                            'cubic-bezier-length'
                        )
                        let [t, n, r, i] = e
                        return nV(t, n, r, i)
                    }
                    return 'string' == typeof e
                        ? (Z(
                              void 0 !== nq[e],
                              `Invalid easing type '${e}'`,
                              'invalid-easing-type'
                          ),
                          nq[e])
                        : e
                },
                nZ = (e, t, n) => {
                    let r = t - e
                    return 0 === r ? 1 : (n - e) / r
                }
            function nQ({
                duration: e = 300,
                keyframes: t,
                times: n,
                ease: r = 'easeInOut',
            }) {
                var i
                let o =
                        Array.isArray(r) && 'number' != typeof r[0]
                            ? r.map(nH)
                            : nH(r),
                    s = { done: !1, value: t[0] },
                    a = (function (
                        e,
                        t,
                        { clamp: n = !0, ease: r, mixer: i } = {}
                    ) {
                        let o = e.length
                        if (
                            (Z(
                                o === t.length,
                                'Both input and output ranges must be the same length',
                                'range-length'
                            ),
                            1 === o)
                        )
                            return () => t[0]
                        if (2 === o && t[0] === t[1]) return () => t[1]
                        let s = e[0] === e[1]
                        e[0] > e[o - 1] &&
                            ((e = [...e].reverse()), (t = [...t].reverse()))
                        let a = (function (e, t, n) {
                                let r = [],
                                    i = n || eo.mix || nk,
                                    o = e.length - 1
                                for (let n = 0; n < o; n++) {
                                    let o = i(e[n], e[n + 1])
                                    t &&
                                        (o = na(
                                            Array.isArray(t) ? t[n] || ei : t,
                                            o
                                        )),
                                        r.push(o)
                                }
                                return r
                            })(t, r, i),
                            l = a.length,
                            u = (n) => {
                                if (s && n < e[0]) return t[0]
                                let r = 0
                                if (l > 1)
                                    for (
                                        ;
                                        r < e.length - 2 && !(n < e[r + 1]);
                                        r++
                                    );
                                let i = nZ(e[r], e[r + 1], n)
                                return a[r](i)
                            }
                        return n ? (t) => u(L(e[0], e[o - 1], t)) : u
                    })(
                        ((i =
                            n && n.length === t.length
                                ? n
                                : (function (e) {
                                      let t = [0]
                                      return (
                                          !(function (e, t) {
                                              let n = e[e.length - 1]
                                              for (let r = 1; r <= t; r++) {
                                                  let i = nZ(0, t, r)
                                                  e.push(E(n, 1, i))
                                              }
                                          })(t, e.length - 1),
                                          t
                                      )
                                  })(t)),
                        i.map((t) => t * e)),
                        t,
                        {
                            ease: Array.isArray(o)
                                ? o
                                : t.map(() => o || nF).splice(0, t.length - 1),
                        }
                    )
                return {
                    calculatedDuration: e,
                    next: (t) => ((s.value = a(t)), (s.done = t >= e), s),
                }
            }
            let nJ = (e) => null !== e
            function n0(e, { repeat: t, repeatType: n = 'loop' }, r, i = 1) {
                let o = e.filter(nJ),
                    s =
                        i < 0 || (t && 'loop' !== n && t % 2 == 1)
                            ? 0
                            : o.length - 1
                return s && void 0 !== r ? r : o[s]
            }
            let n1 = {
                decay: n_,
                inertia: n_,
                tween: nQ,
                keyframes: nQ,
                spring: nD,
            }
            function n2(e) {
                'string' == typeof e.type && (e.type = n1[e.type])
            }
            class n5 {
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
            let n4 = (e) => e / 100
            class n3 extends n5 {
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
                                e.updatedAt !== eJ.now() &&
                                this.tick(eJ.now()),
                                (this.isStopped = !0),
                                'idle' !== this.state &&
                                    (this.teardown(), this.options.onStop?.())
                        }),
                        nu.mainThread++,
                        (this.options = e),
                        this.initAnimation(),
                        this.play(),
                        !1 === e.autoplay && this.pause()
                }
                initAnimation() {
                    let { options: e } = this
                    n2(e)
                    let {
                            type: t = nQ,
                            repeat: n = 0,
                            repeatDelay: r = 0,
                            repeatType: i,
                            velocity: o = 0,
                        } = e,
                        { keyframes: s } = e,
                        a = t || nQ
                    a !== nQ &&
                        'number' != typeof s[0] &&
                        ((this.mixKeyframes = na(n4, nk(s[0], s[1]))),
                        (s = [0, 100]))
                    let l = a({ ...e, keyframes: s })
                    'mirror' === i &&
                        (this.mirroredGenerator = a({
                            ...e,
                            keyframes: [...s].reverse(),
                            velocity: -o,
                        })),
                        null === l.calculatedDuration &&
                            (l.calculatedDuration = nS(l))
                    let { calculatedDuration: u } = l
                    ;(this.calculatedDuration = u),
                        (this.resolvedDuration = u + r),
                        (this.totalDuration =
                            this.resolvedDuration * (n + 1) - r),
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
                        generator: n,
                        totalDuration: r,
                        mixKeyframes: i,
                        mirroredGenerator: o,
                        resolvedDuration: s,
                        calculatedDuration: a,
                    } = this
                    if (null === this.startTime) return n.next(0)
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
                              e - r / this.speed,
                              this.startTime
                          )),
                        t ? (this.currentTime = e) : this.updateTime(e)
                    let g =
                            this.currentTime -
                            l * (this.playbackSpeed >= 0 ? 1 : -1),
                        v = this.playbackSpeed >= 0 ? g < 0 : g > r
                    ;(this.currentTime = Math.max(g, 0)),
                        'finished' === this.state &&
                            null === this.holdTime &&
                            (this.currentTime = r)
                    let y = this.currentTime,
                        b = n
                    if (c) {
                        let e = Math.min(this.currentTime, r) / s,
                            t = Math.floor(e),
                            n = e % 1
                        !n && e >= 1 && (n = 1),
                            1 === n && t--,
                            (t = Math.min(t, c + 1)) % 2 &&
                                ('reverse' === d
                                    ? ((n = 1 - n), h && (n -= h / s))
                                    : 'mirror' === d && (b = o)),
                            (y = L(0, 1, n) * s)
                    }
                    let x = v ? { done: !1, value: u[0] } : b.next(y)
                    i && (x.value = i(x.value))
                    let { done: w } = x
                    v ||
                        null === a ||
                        (w =
                            this.playbackSpeed >= 0
                                ? this.currentTime >= r
                                : this.currentTime <= 0)
                    let k =
                        null === this.holdTime &&
                        ('finished' === this.state ||
                            ('running' === this.state && w))
                    return (
                        k &&
                            p !== n_ &&
                            (x.value = n0(u, this.options, m, this.speed)),
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
                    ;(e = nl(e)),
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
                    this.updateTime(eJ.now())
                    let t = this.playbackSpeed !== e
                    ;(this.playbackSpeed = e),
                        t && (this.time = this.currentTime / 1e3)
                }
                play() {
                    if (this.isStopped) return
                    let { driver: e = nE, startTime: t } = this.options
                    this.driver || (this.driver = e((e) => this.tick(e))),
                        this.options.onPlay?.()
                    let n = this.driver.now()
                    'finished' === this.state
                        ? (this.updateFinished(), (this.startTime = n))
                        : null !== this.holdTime
                        ? (this.startTime = n - this.holdTime)
                        : this.startTime || (this.startTime = t ?? n),
                        'finished' === this.state &&
                            this.speed < 0 &&
                            (this.startTime += this.calculatedDuration),
                        (this.holdTime = null),
                        (this.state = 'running'),
                        this.driver.start()
                }
                pause() {
                    ;(this.state = 'paused'),
                        this.updateTime(eJ.now()),
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
                        nu.mainThread--
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
            function n6(e) {
                let t
                return () => (void 0 === t && (t = e()), t)
            }
            let n8 = n6(() => void 0 !== window.ScrollTimeline),
                n9 = {},
                n7 = (function (e, t) {
                    let n = n6(e)
                    return () => n9[t] ?? n()
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
                re = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
                rt = {
                    linear: 'linear',
                    ease: 'ease',
                    easeIn: 'ease-in',
                    easeOut: 'ease-out',
                    easeInOut: 'ease-in-out',
                    circIn: re([0, 0.65, 0.55, 1]),
                    circOut: re([0.55, 0, 1, 0.45]),
                    backIn: re([0.31, 0.01, 0.66, -0.59]),
                    backOut: re([0.33, 1.53, 0.69, 0.99]),
                }
            function rn(e) {
                return 'function' == typeof e && 'applyToOptions' in e
            }
            class rr extends n5 {
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
                        name: n,
                        keyframes: r,
                        pseudoElement: i,
                        allowFlatten: o = !1,
                        finalKeyframe: s,
                        onComplete: a,
                    } = e
                    ;(this.isPseudoElement = !!i),
                        (this.allowFlatten = o),
                        (this.options = e),
                        Z(
                            'string' != typeof e.type,
                            'Mini animate() doesn\'t support "type" as a string.',
                            'mini-spring'
                        )
                    let l = (function ({ type: e, ...t }) {
                        return rn(e) && n7()
                            ? e.applyToOptions(t)
                            : (t.duration ?? (t.duration = 300),
                              t.ease ?? (t.ease = 'easeOut'),
                              t)
                    })(e)
                    ;(this.animation = (function (
                        e,
                        t,
                        n,
                        {
                            delay: r = 0,
                            duration: i = 300,
                            repeat: o = 0,
                            repeatType: s = 'loop',
                            ease: a = 'easeOut',
                            times: l,
                        } = {},
                        u
                    ) {
                        let c = { [t]: n }
                        l && (c.offset = l)
                        let d = (function e(t, n) {
                            if (t)
                                return 'function' == typeof t
                                    ? n7()
                                        ? nP(t, n)
                                        : 'ease-out'
                                    : nY(t)
                                    ? re(t)
                                    : Array.isArray(t)
                                    ? t.map((t) => e(t, n) || rt.easeOut)
                                    : rt[t]
                        })(a, i)
                        Array.isArray(d) && (c.easing = d),
                            ea.value && nu.waapi++
                        let h = {
                            delay: r,
                            duration: i,
                            easing: Array.isArray(d) ? 'linear' : d,
                            fill: 'both',
                            iterations: o + 1,
                            direction: 'reverse' === s ? 'alternate' : 'normal',
                        }
                        u && (h.pseudoElement = u)
                        let p = e.animate(c, h)
                        return (
                            ea.value &&
                                p.finished.finally(() => {
                                    nu.waapi--
                                }),
                            p
                        )
                    })(t, n, r, l, i)),
                        !1 === l.autoplay && this.animation.pause(),
                        (this.animation.onfinish = () => {
                            if (((this.finishedTime = this.time), !i)) {
                                let e = n0(r, this.options, s, this.speed)
                                this.updateMotionValue
                                    ? this.updateMotionValue(e)
                                    : (function (e, t, n) {
                                          t.startsWith('--')
                                              ? e.style.setProperty(t, n)
                                              : (e.style[t] = n)
                                      })(t, n, e),
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
                        (this.animation.currentTime = nl(e))
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
                    e && n8())
                        ? ((this.animation.timeline = e), ei)
                        : t(this)
                }
            }
            let ri = { anticipate: n$, backInOut: nU, circInOut: nX }
            class ro extends rr {
                constructor(e) {
                    !(function (e) {
                        'string' == typeof e.ease &&
                            e.ease in ri &&
                            (e.ease = ri[e.ease])
                    })(e),
                        n2(e),
                        super(e),
                        e.startTime && (this.startTime = e.startTime),
                        (this.options = e)
                }
                updateMotionValue(e) {
                    let {
                        motionValue: t,
                        onUpdate: n,
                        onComplete: r,
                        element: i,
                        ...o
                    } = this.options
                    if (!t) return
                    if (void 0 !== e) return void t.set(e)
                    let s = new n3({ ...o, autoplay: !1 }),
                        a = nl(this.finishedTime ?? this.time)
                    t.setWithVelocity(
                        s.sample(a - 10).value,
                        s.sample(a).value,
                        10
                    ),
                        s.stop()
                }
            }
            let rs = (e, t) =>
                    'zIndex' !== t &&
                    !!(
                        'number' == typeof e ||
                        Array.isArray(e) ||
                        ('string' == typeof e &&
                            (eN.test(e) || '0' === e) &&
                            !e.startsWith('url('))
                    ),
                ra = new Set(['opacity', 'clipPath', 'filter', 'transform']),
                rl = n6(() =>
                    Object.hasOwnProperty.call(Element.prototype, 'animate')
                )
            class ru extends n5 {
                constructor({
                    autoplay: e = !0,
                    delay: t = 0,
                    type: n = 'keyframes',
                    repeat: r = 0,
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
                        (this.createdAt = eJ.now())
                    let d = {
                            autoplay: e,
                            delay: t,
                            type: n,
                            repeat: r,
                            repeatDelay: i,
                            repeatType: o,
                            name: a,
                            motionValue: l,
                            element: u,
                            ...c,
                        },
                        h = u?.KeyframeResolver || eb
                    ;(this.keyframeResolver = new h(
                        s,
                        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
                        a,
                        l,
                        u
                    )),
                        this.keyframeResolver?.scheduleResolve()
                }
                onKeyframesResolved(e, t, n, r) {
                    this.keyframeResolver = void 0
                    let {
                        name: i,
                        type: o,
                        velocity: s,
                        delay: a,
                        isHandoff: l,
                        onUpdate: u,
                    } = n
                    ;(this.resolvedAt = eJ.now()),
                        !(function (e, t, n, r) {
                            let i = e[0]
                            if (null === i) return !1
                            if ('display' === t || 'visibility' === t) return !0
                            let o = e[e.length - 1],
                                s = rs(i, t),
                                a = rs(o, t)
                            return (
                                H(
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
                                        for (let n = 0; n < e.length; n++)
                                            if (e[n] !== t) return !0
                                    })(e) ||
                                        (('spring' === n || rn(n)) && r))
                            )
                        })(e, i, o, s) &&
                            ((eo.instantAnimations || !a) && u?.(n0(e, n, t)),
                            (e[0] = e[e.length - 1]),
                            no(n),
                            (n.repeat = 0))
                    let c = {
                            startTime: r
                                ? this.resolvedAt &&
                                  this.resolvedAt - this.createdAt > 40
                                    ? this.resolvedAt
                                    : this.createdAt
                                : void 0,
                            finalKeyframe: t,
                            ...n,
                            keyframes: e,
                        },
                        d =
                            !l &&
                            (function (e) {
                                let {
                                    motionValue: t,
                                    name: n,
                                    repeatDelay: r,
                                    repeatType: i,
                                    damping: o,
                                    type: s,
                                } = e
                                if (!(t?.owner?.current instanceof HTMLElement))
                                    return !1
                                let { onUpdate: a, transformTemplate: l } =
                                    t.owner.getProps()
                                return (
                                    rl() &&
                                    n &&
                                    ra.has(n) &&
                                    ('transform' !== n || !l) &&
                                    !a &&
                                    !r &&
                                    'mirror' !== i &&
                                    0 !== o &&
                                    'inertia' !== s
                                )
                            })(c)
                                ? new ro({
                                      ...c,
                                      element: c.motionValue.owner.current,
                                  })
                                : new n3(c)
                    d.finished.then(() => this.notifyFinished()).catch(ei),
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
                            (eg = !0),
                            ey(),
                            ev(),
                            (eg = !1)),
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
            let rc = (e) => null !== e,
                rd = {
                    type: 'spring',
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10,
                },
                rh = { type: 'keyframes', duration: 0.8 },
                rp = {
                    type: 'keyframes',
                    ease: [0.25, 0.1, 0.35, 1],
                    duration: 0.3,
                },
                rf =
                    (e, t, n, r = {}, i, o) =>
                    (a) => {
                        let l = nn(r, e) || {},
                            u = l.delay || r.delay || 0,
                            { elapsed: c = 0 } = r
                        c -= nl(u)
                        let d = {
                            keyframes: Array.isArray(n) ? n : [null, n],
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
                            element: o ? void 0 : i,
                        }
                        !(function ({
                            when: e,
                            delay: t,
                            delayChildren: n,
                            staggerChildren: r,
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
                                        ? rh
                                        : s.has(e)
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
                                            : rd
                                        : rp)(e, d)
                            ),
                            d.duration && (d.duration = nl(d.duration)),
                            d.repeatDelay &&
                                (d.repeatDelay = nl(d.repeatDelay)),
                            void 0 !== d.from && (d.keyframes[0] = d.from)
                        let h = !1
                        if (
                            ((!1 !== d.type &&
                                (0 !== d.duration || d.repeatDelay)) ||
                                (no(d), 0 === d.delay && (h = !0)),
                            (eo.instantAnimations || eo.skipAnimations) &&
                                ((h = !0), no(d), (d.delay = 0)),
                            (d.allowFlatten = !l.type && !l.ease),
                            h && !o && void 0 !== t.get())
                        ) {
                            let e = (function (
                                e,
                                { repeat: t, repeatType: n = 'loop' },
                                r
                            ) {
                                let i = e.filter(rc),
                                    o =
                                        t && 'loop' !== n && t % 2 == 1
                                            ? 0
                                            : i.length - 1
                                return i[o]
                            })(d.keyframes, l)
                            if (void 0 !== e)
                                return void eu.update(() => {
                                    d.onUpdate(e), d.onComplete()
                                })
                        }
                        return l.isSync ? new n3(d) : new ru(d)
                    }
            function rm(
                e,
                t,
                { delay: n = 0, transitionOverride: r, type: i } = {}
            ) {
                let {
                    transition: o = e.getDefaultTransition(),
                    transitionEnd: s,
                    ...a
                } = t
                r && (o = r)
                let l = [],
                    u = i && e.animationState && e.animationState.getState()[i]
                for (let t in a) {
                    let r = e.getValue(t, e.latestValues[t] ?? null),
                        i = a[t]
                    if (
                        void 0 === i ||
                        (u &&
                            (function (
                                { protectedKeys: e, needsAnimating: t },
                                n
                            ) {
                                let r = e.hasOwnProperty(n) && !0 !== t[n]
                                return (t[n] = !1), r
                            })(u, t))
                    )
                        continue
                    let s = { delay: n, ...nn(o || {}, t) },
                        c = r.get()
                    if (
                        void 0 !== c &&
                        !r.isAnimating &&
                        !Array.isArray(i) &&
                        i === c &&
                        !s.velocity
                    )
                        continue
                    let d = !1
                    if (window.MotionHandoffAnimation) {
                        let n = e.props[t8]
                        if (n) {
                            let e = window.MotionHandoffAnimation(n, t, eu)
                            null !== e && ((s.startTime = e), (d = !0))
                        }
                    }
                    ni(e, t),
                        r.start(
                            rf(
                                t,
                                r,
                                i,
                                e.shouldReduceMotion && V.has(t)
                                    ? { type: !1 }
                                    : s,
                                e,
                                d
                            )
                        )
                    let h = r.animation
                    h && l.push(h)
                }
                return (
                    s &&
                        Promise.all(l).then(() => {
                            eu.update(() => {
                                s &&
                                    (function (e, t) {
                                        let {
                                            transitionEnd: n = {},
                                            transition: r = {},
                                            ...i
                                        } = nt(e, t) || {}
                                        for (let t in (i = { ...i, ...n })) {
                                            var o
                                            let n = nr((o = i[t]))
                                                ? o[o.length - 1] || 0
                                                : o
                                            e.hasValue(t)
                                                ? e.getValue(t).set(n)
                                                : e.addValue(t, e3(n))
                                        }
                                    })(e, s)
                            })
                        }),
                    l
                )
            }
            function rg(e, t, n, r = 0, i = 1) {
                let o = Array.from(e)
                        .sort((e, t) => e.sortNodePosition(t))
                        .indexOf(t),
                    s = e.size,
                    a = (s - 1) * r
                return 'function' == typeof n
                    ? n(o, s)
                    : 1 === i
                    ? o * r
                    : a - o * r
            }
            function rv(e, t, n = {}) {
                let r = nt(
                        e,
                        t,
                        'exit' === n.type ? e.presenceContext?.custom : void 0
                    ),
                    { transition: i = e.getDefaultTransition() || {} } = r || {}
                n.transitionOverride && (i = n.transitionOverride)
                let o = r
                        ? () => Promise.all(rm(e, r, n))
                        : () => Promise.resolve(),
                    s =
                        e.variantChildren && e.variantChildren.size
                            ? (r = 0) => {
                                  let {
                                      delayChildren: o = 0,
                                      staggerChildren: s,
                                      staggerDirection: a,
                                  } = i
                                  return (function (
                                      e,
                                      t,
                                      n = 0,
                                      r = 0,
                                      i = 0,
                                      o = 1,
                                      s
                                  ) {
                                      let a = []
                                      for (let l of e.variantChildren)
                                          l.notify('AnimationStart', t),
                                              a.push(
                                                  rv(l, t, {
                                                      ...s,
                                                      delay:
                                                          n +
                                                          ('function' ==
                                                          typeof r
                                                              ? 0
                                                              : r) +
                                                          rg(
                                                              e.variantChildren,
                                                              l,
                                                              r,
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
                                  })(e, t, r, o, s, a, n)
                              }
                            : () => Promise.resolve(),
                    { when: a } = i
                if (!a) return Promise.all([o(), s(n.delay)])
                {
                    let [e, t] = 'beforeChildren' === a ? [o, s] : [s, o]
                    return e().then(() => t())
                }
            }
            function ry(e, t) {
                if (!Array.isArray(t)) return !1
                let n = t.length
                if (n !== e.length) return !1
                for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
                return !0
            }
            let rb = td.length,
                rx = [...tc].reverse(),
                rw = tc.length
            function rk(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {},
                }
            }
            function rE() {
                return {
                    animate: rk(!0),
                    whileInView: rk(),
                    whileHover: rk(),
                    whileTap: rk(),
                    whileDrag: rk(),
                    whileFocus: rk(),
                    exit: rk(),
                }
            }
            class rP {
                constructor(e) {
                    ;(this.isMounted = !1), (this.node = e)
                }
                update() {}
            }
            class rS extends rP {
                constructor(e) {
                    super(e),
                        e.animationState ||
                            (e.animationState = (function (e) {
                                let t = (t) =>
                                        Promise.all(
                                            t.map(
                                                ({
                                                    animation: t,
                                                    options: n,
                                                }) =>
                                                    (function (e, t, n = {}) {
                                                        let r
                                                        if (
                                                            (e.notify(
                                                                'AnimationStart',
                                                                t
                                                            ),
                                                            Array.isArray(t))
                                                        )
                                                            r = Promise.all(
                                                                t.map((t) =>
                                                                    rv(e, t, n)
                                                                )
                                                            )
                                                        else if (
                                                            'string' == typeof t
                                                        )
                                                            r = rv(e, t, n)
                                                        else {
                                                            let i =
                                                                'function' ==
                                                                typeof t
                                                                    ? nt(
                                                                          e,
                                                                          t,
                                                                          n.custom
                                                                      )
                                                                    : t
                                                            r = Promise.all(
                                                                rm(e, i, n)
                                                            )
                                                        }
                                                        return r.then(() => {
                                                            e.notify(
                                                                'AnimationComplete',
                                                                t
                                                            )
                                                        })
                                                    })(e, t, n)
                                            )
                                        ),
                                    n = rE(),
                                    r = !0,
                                    i = (t) => (n, r) => {
                                        let i = nt(
                                            e,
                                            r,
                                            'exit' === t
                                                ? e.presenceContext?.custom
                                                : void 0
                                        )
                                        if (i) {
                                            let {
                                                transition: e,
                                                transitionEnd: t,
                                                ...r
                                            } = i
                                            n = { ...n, ...r, ...t }
                                        }
                                        return n
                                    }
                                function o(o) {
                                    let { props: s } = e,
                                        a =
                                            (function e(t) {
                                                if (!t) return
                                                if (!t.isControllingVariants) {
                                                    let n =
                                                        (t.parent &&
                                                            e(t.parent)) ||
                                                        {}
                                                    return (
                                                        void 0 !==
                                                            t.props.initial &&
                                                            (n.initial =
                                                                t.props.initial),
                                                        n
                                                    )
                                                }
                                                let n = {}
                                                for (let e = 0; e < rb; e++) {
                                                    let r = td[e],
                                                        i = t.props[r]
                                                    ;(tu(i) || !1 === i) &&
                                                        (n[r] = i)
                                                }
                                                return n
                                            })(e.parent) || {},
                                        l = [],
                                        u = new Set(),
                                        c = {},
                                        d = 1 / 0
                                    for (let t = 0; t < rw; t++) {
                                        var h, p
                                        let f = rx[t],
                                            m = n[f],
                                            g = void 0 !== s[f] ? s[f] : a[f],
                                            v = tu(g),
                                            y = f === o ? m.isActive : null
                                        !1 === y && (d = t)
                                        let b = g === a[f] && g !== s[f] && v
                                        if (
                                            (b &&
                                                r &&
                                                e.manuallyAnimateOnMount &&
                                                (b = !1),
                                            (m.protectedKeys = { ...c }),
                                            (!m.isActive && null === y) ||
                                                (!g && !m.prevProp) ||
                                                tl(g) ||
                                                'boolean' == typeof g)
                                        )
                                            continue
                                        let x =
                                                ((h = m.prevProp),
                                                'string' == typeof (p = g)
                                                    ? p !== h
                                                    : !!Array.isArray(p) &&
                                                      !ry(p, h)),
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
                                            T = { ...S, ...P },
                                            A = (t) => {
                                                ;(w = !0),
                                                    u.has(t) &&
                                                        ((k = !0), u.delete(t)),
                                                    (m.needsAnimating[t] = !0)
                                                let n = e.getValue(t)
                                                n && (n.liveStyle = !1)
                                            }
                                        for (let e in T) {
                                            let t = P[e],
                                                n = S[e]
                                            if (!c.hasOwnProperty(e))
                                                (
                                                    nr(t) && nr(n)
                                                        ? ry(t, n)
                                                        : t === n
                                                )
                                                    ? void 0 !== t && u.has(e)
                                                        ? A(e)
                                                        : (m.protectedKeys[e] =
                                                              !0)
                                                    : null != t
                                                    ? A(e)
                                                    : u.add(e)
                                        }
                                        ;(m.prevProp = g),
                                            (m.prevResolvedValues = P),
                                            m.isActive && (c = { ...c, ...P }),
                                            r &&
                                                e.blockInitialAnimation &&
                                                (w = !1)
                                        let C = b && x,
                                            M = !C || k
                                        w &&
                                            M &&
                                            l.push(
                                                ...E.map((t) => {
                                                    let n = { type: f }
                                                    if (
                                                        'string' == typeof t &&
                                                        r &&
                                                        !C &&
                                                        e.manuallyAnimateOnMount &&
                                                        e.parent
                                                    ) {
                                                        let { parent: r } = e,
                                                            i = nt(r, t)
                                                        if (
                                                            r.enteringChildren &&
                                                            i
                                                        ) {
                                                            let {
                                                                delayChildren:
                                                                    t,
                                                            } =
                                                                i.transition ||
                                                                {}
                                                            n.delay = rg(
                                                                r.enteringChildren,
                                                                e,
                                                                t
                                                            )
                                                        }
                                                    }
                                                    return {
                                                        animation: t,
                                                        options: n,
                                                    }
                                                })
                                            )
                                    }
                                    if (u.size) {
                                        let t = {}
                                        if ('boolean' != typeof s.initial) {
                                            let n = nt(
                                                e,
                                                Array.isArray(s.initial)
                                                    ? s.initial[0]
                                                    : s.initial
                                            )
                                            n &&
                                                n.transition &&
                                                (t.transition = n.transition)
                                        }
                                        u.forEach((n) => {
                                            let r = e.getBaseTarget(n),
                                                i = e.getValue(n)
                                            i && (i.liveStyle = !0),
                                                (t[n] = r ?? null)
                                        }),
                                            l.push({ animation: t })
                                    }
                                    let f = !!l.length
                                    return (
                                        r &&
                                            (!1 === s.initial ||
                                                s.initial === s.animate) &&
                                            !e.manuallyAnimateOnMount &&
                                            (f = !1),
                                        (r = !1),
                                        f ? t(l) : Promise.resolve()
                                    )
                                }
                                return {
                                    animateChanges: o,
                                    setActive: function (t, r) {
                                        if (n[t].isActive === r)
                                            return Promise.resolve()
                                        e.variantChildren?.forEach((e) =>
                                            e.animationState?.setActive(t, r)
                                        ),
                                            (n[t].isActive = r)
                                        let i = o(t)
                                        for (let e in n) n[e].protectedKeys = {}
                                        return i
                                    },
                                    setAnimateFunction: function (n) {
                                        t = n(e)
                                    },
                                    getState: () => n,
                                    reset: () => {
                                        n = rE()
                                    },
                                }
                            })(e))
                }
                updateAnimationControlsSubscription() {
                    let { animate: e } = this.node.getProps()
                    tl(e) && (this.unmountControls = e.subscribe(this.node))
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
            let rT = 0
            class rA extends rP {
                constructor() {
                    super(...arguments), (this.id = rT++)
                }
                update() {
                    if (!this.node.presenceContext) return
                    let { isPresent: e, onExitComplete: t } =
                            this.node.presenceContext,
                        { isPresent: n } = this.node.prevPresenceContext || {}
                    if (!this.node.animationState || e === n) return
                    let r = this.node.animationState.setActive('exit', !e)
                    t &&
                        !e &&
                        r.then(() => {
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
            let rC = { x: !1, y: !1 }
            function rM(e, t, n, r = { passive: !0 }) {
                return (
                    e.addEventListener(t, n, r),
                    () => e.removeEventListener(t, n)
                )
            }
            let rR = (e) =>
                'mouse' === e.pointerType
                    ? 'number' != typeof e.button || e.button <= 0
                    : !1 !== e.isPrimary
            function rj(e) {
                return { point: { x: e.pageX, y: e.pageY } }
            }
            function rD(e, t, n, r) {
                return rM(e, t, (e) => rR(e) && n(e, rj(e)), r)
            }
            function r_(e) {
                return e.max - e.min
            }
            function rO(e, t, n, r = 0.5) {
                ;(e.origin = r),
                    (e.originPoint = E(t.min, t.max, e.origin)),
                    (e.scale = r_(n) / r_(t)),
                    (e.translate = E(n.min, n.max, e.origin) - e.originPoint),
                    ((e.scale >= 0.9999 && e.scale <= 1.0001) ||
                        isNaN(e.scale)) &&
                        (e.scale = 1),
                    ((e.translate >= -0.01 && e.translate <= 0.01) ||
                        isNaN(e.translate)) &&
                        (e.translate = 0)
            }
            function rV(e, t, n, r) {
                rO(e.x, t.x, n.x, r ? r.originX : void 0),
                    rO(e.y, t.y, n.y, r ? r.originY : void 0)
            }
            function rL(e, t, n) {
                ;(e.min = n.min + t.min), (e.max = e.min + r_(t))
            }
            function rI(e, t, n) {
                ;(e.min = t.min - n.min), (e.max = e.min + r_(t))
            }
            function rF(e, t, n) {
                rI(e.x, t.x, n.x), rI(e.y, t.y, n.y)
            }
            function rN(e) {
                return [e('x'), e('y')]
            }
            let rz = ({ current: e }) =>
                    e ? e.ownerDocument.defaultView : null,
                rB = (e, t) => Math.abs(e - t)
            class rW {
                constructor(
                    e,
                    t,
                    {
                        transformPagePoint: n,
                        contextWindow: r = window,
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
                            let e = rK(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                n =
                                    (function (e, t) {
                                        return Math.sqrt(
                                            rB(e.x, t.x) ** 2 +
                                                rB(e.y, t.y) ** 2
                                        )
                                    })(e.offset, { x: 0, y: 0 }) >=
                                    this.distanceThreshold
                            if (!t && !n) return
                            let { point: r } = e,
                                { timestamp: i } = ed
                            this.history.push({ ...r, timestamp: i })
                            let { onStart: o, onMove: s } = this.handlers
                            t ||
                                (o && o(this.lastMoveEvent, e),
                                (this.startEvent = this.lastMoveEvent)),
                                s && s(this.lastMoveEvent, e)
                        }),
                        (this.handlePointerMove = (e, t) => {
                            ;(this.lastMoveEvent = e),
                                (this.lastMoveEventInfo = rU(
                                    t,
                                    this.transformPagePoint
                                )),
                                eu.update(this.updatePoint, !0)
                        }),
                        (this.handlePointerUp = (e, t) => {
                            this.end()
                            let {
                                onEnd: n,
                                onSessionEnd: r,
                                resumeAnimation: i,
                            } = this.handlers
                            if (
                                (this.dragSnapToOrigin && i && i(),
                                !(this.lastMoveEvent && this.lastMoveEventInfo))
                            )
                                return
                            let o = rK(
                                'pointercancel' === e.type
                                    ? this.lastMoveEventInfo
                                    : rU(t, this.transformPagePoint),
                                this.history
                            )
                            this.startEvent && n && n(e, o), r && r(e, o)
                        }),
                        !rR(e))
                    )
                        return
                    ;(this.dragSnapToOrigin = i),
                        (this.handlers = t),
                        (this.transformPagePoint = n),
                        (this.distanceThreshold = o),
                        (this.contextWindow = r || window)
                    let s = rU(rj(e), this.transformPagePoint),
                        { point: a } = s,
                        { timestamp: l } = ed
                    this.history = [{ ...a, timestamp: l }]
                    let { onSessionStart: u } = t
                    u && u(e, rK(s, this.history)),
                        (this.removeListeners = na(
                            rD(
                                this.contextWindow,
                                'pointermove',
                                this.handlePointerMove
                            ),
                            rD(
                                this.contextWindow,
                                'pointerup',
                                this.handlePointerUp
                            ),
                            rD(
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
                        ec(this.updatePoint)
                }
            }
            function rU(e, t) {
                return t ? { point: t(e.point) } : e
            }
            function r$(e, t) {
                return { x: e.x - t.x, y: e.y - t.y }
            }
            function rK({ point: e }, t) {
                return {
                    point: e,
                    delta: r$(e, rG(t)),
                    offset: r$(e, t[0]),
                    velocity: (function (e, t) {
                        if (e.length < 2) return { x: 0, y: 0 }
                        let n = e.length - 1,
                            r = null,
                            i = rG(e)
                        for (
                            ;
                            n >= 0 &&
                            ((r = e[n]),
                            !(i.timestamp - r.timestamp > nl(0.1)));

                        )
                            n--
                        if (!r) return { x: 0, y: 0 }
                        let o = (i.timestamp - r.timestamp) / 1e3
                        if (0 === o) return { x: 0, y: 0 }
                        let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o }
                        return (
                            s.x === 1 / 0 && (s.x = 0),
                            s.y === 1 / 0 && (s.y = 0),
                            s
                        )
                    })(t, 0.1),
                }
            }
            function rG(e) {
                return e[e.length - 1]
            }
            function rX(e, t, n) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
                }
            }
            function rY(e, t) {
                let n = t.min - e.min,
                    r = t.max - e.max
                return (
                    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
                    { min: n, max: r }
                )
            }
            function rq(e, t, n) {
                return { min: rH(e, t), max: rH(e, n) }
            }
            function rH(e, t) {
                return 'number' == typeof e ? e : e[t] || 0
            }
            let rZ = new WeakMap()
            class rQ {
                constructor(e) {
                    ;(this.openDragLock = null),
                        (this.isDragging = !1),
                        (this.currentDirection = null),
                        (this.originPoint = { x: 0, y: 0 }),
                        (this.constraints = !1),
                        (this.hasMutatedConstraints = !1),
                        (this.elastic = tr()),
                        (this.latestPointerEvent = null),
                        (this.latestPanInfo = null),
                        (this.visualElement = e)
                }
                start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
                    let { presenceContext: r } = this.visualElement
                    if (r && !1 === r.isPresent) return
                    let i = (e) => {
                            let { dragSnapToOrigin: n } = this.getProps()
                            n ? this.pauseAnimation() : this.stopAnimation(),
                                t && this.snapToCursor(rj(e).point)
                        },
                        o = (e, t) => {
                            let {
                                drag: n,
                                dragPropagation: r,
                                onDragStart: i,
                            } = this.getProps()
                            if (
                                n &&
                                !r &&
                                (this.openDragLock && this.openDragLock(),
                                (this.openDragLock = (function (e) {
                                    if ('x' === e || 'y' === e)
                                        if (rC[e]) return null
                                        else
                                            return (
                                                (rC[e] = !0),
                                                () => {
                                                    rC[e] = !1
                                                }
                                            )
                                    return rC.x || rC.y
                                        ? null
                                        : ((rC.x = rC.y = !0),
                                          () => {
                                              rC.x = rC.y = !1
                                          })
                                })(n)),
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
                                rN((e) => {
                                    let t =
                                        this.getAxisMotionValue(e).get() || 0
                                    if (W.test(t)) {
                                        let { projection: n } =
                                            this.visualElement
                                        if (n && n.layout) {
                                            let r = n.layout.layoutBox[e]
                                            r &&
                                                (t =
                                                    r_(r) *
                                                    (parseFloat(t) / 100))
                                        }
                                    }
                                    this.originPoint[e] = t
                                }),
                                i && eu.postRender(() => i(e, t)),
                                ni(this.visualElement, 'transform')
                            let { animationState: o } = this.visualElement
                            o && o.setActive('whileDrag', !0)
                        },
                        s = (e, t) => {
                            ;(this.latestPointerEvent = e),
                                (this.latestPanInfo = t)
                            let {
                                dragPropagation: n,
                                dragDirectionLock: r,
                                onDirectionLock: i,
                                onDrag: o,
                            } = this.getProps()
                            if (!n && !this.openDragLock) return
                            let { offset: s } = t
                            if (r && null === this.currentDirection) {
                                ;(this.currentDirection = (function (
                                    e,
                                    t = 10
                                ) {
                                    let n = null
                                    return (
                                        Math.abs(e.y) > t
                                            ? (n = 'y')
                                            : Math.abs(e.x) > t && (n = 'x'),
                                        n
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
                            rN(
                                (e) =>
                                    'paused' === this.getAnimationState(e) &&
                                    this.getAxisMotionValue(e).animation?.play()
                            ),
                        { dragSnapToOrigin: u } = this.getProps()
                    this.panSession = new rW(
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
                            distanceThreshold: n,
                            contextWindow: rz(this.visualElement),
                        }
                    )
                }
                stop(e, t) {
                    let n = e || this.latestPointerEvent,
                        r = t || this.latestPanInfo,
                        i = this.isDragging
                    if ((this.cancel(), !i || !r || !n)) return
                    let { velocity: o } = r
                    this.startAnimation(o)
                    let { onDragEnd: s } = this.getProps()
                    s && eu.postRender(() => s(n, r))
                }
                cancel() {
                    this.isDragging = !1
                    let { projection: e, animationState: t } =
                        this.visualElement
                    e && (e.isAnimationBlocked = !1),
                        this.panSession && this.panSession.end(),
                        (this.panSession = void 0)
                    let { dragPropagation: n } = this.getProps()
                    !n &&
                        this.openDragLock &&
                        (this.openDragLock(), (this.openDragLock = null)),
                        t && t.setActive('whileDrag', !1)
                }
                updateAxis(e, t, n) {
                    let { drag: r } = this.getProps()
                    if (!n || !rJ(e, r, this.currentDirection)) return
                    let i = this.getAxisMotionValue(e),
                        o = this.originPoint[e] + n[e]
                    this.constraints &&
                        this.constraints[e] &&
                        (o = (function (e, { min: t, max: n }, r) {
                            return (
                                void 0 !== t && e < t
                                    ? (e = r ? E(t, e, r.min) : Math.max(e, t))
                                    : void 0 !== n &&
                                      e > n &&
                                      (e = r ? E(n, e, r.max) : Math.min(e, n)),
                                e
                            )
                        })(o, this.constraints[e], this.elastic[e])),
                        i.set(o)
                }
                resolveConstraints() {
                    let { dragConstraints: e, dragElastic: t } =
                            this.getProps(),
                        n =
                            this.visualElement.projection &&
                            !this.visualElement.projection.layout
                                ? this.visualElement.projection.measure(!1)
                                : this.visualElement.projection?.layout,
                        r = this.constraints
                    e && t6(e)
                        ? this.constraints ||
                          (this.constraints = this.resolveRefConstraints())
                        : e && n
                        ? (this.constraints = (function (
                              e,
                              { top: t, left: n, bottom: r, right: i }
                          ) {
                              return { x: rX(e.x, n, i), y: rX(e.y, t, r) }
                          })(n.layoutBox, e))
                        : (this.constraints = !1),
                        (this.elastic = (function (e = 0.35) {
                            return (
                                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                                {
                                    x: rq(e, 'left', 'right'),
                                    y: rq(e, 'top', 'bottom'),
                                }
                            )
                        })(t)),
                        r !== this.constraints &&
                            n &&
                            this.constraints &&
                            !this.hasMutatedConstraints &&
                            rN((e) => {
                                !1 !== this.constraints &&
                                    this.getAxisMotionValue(e) &&
                                    (this.constraints[e] = (function (e, t) {
                                        let n = {}
                                        return (
                                            void 0 !== t.min &&
                                                (n.min = t.min - e.min),
                                            void 0 !== t.max &&
                                                (n.max = t.max - e.min),
                                            n
                                        )
                                    })(n.layoutBox[e], this.constraints[e]))
                            })
                }
                resolveRefConstraints() {
                    var e
                    let { dragConstraints: t, onMeasureDragConstraints: n } =
                        this.getProps()
                    if (!t || !t6(t)) return !1
                    let r = t.current
                    Z(
                        null !== r,
                        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
                        'drag-constraints-ref'
                    )
                    let { projection: i } = this.visualElement
                    if (!i || !i.layout) return !1
                    let o = (function (e, t, n) {
                            let r = O(e, n),
                                { scroll: i } = t
                            return (
                                i && (j(r.x, i.offset.x), j(r.y, i.offset.y)), r
                            )
                        })(
                            r,
                            i.root,
                            this.visualElement.getTransformPagePoint()
                        ),
                        s =
                            ((e = i.layout.layoutBox),
                            { x: rY(e.x, o.x), y: rY(e.y, o.y) })
                    if (n) {
                        let e = n(
                            (function ({ x: e, y: t }) {
                                return {
                                    top: t.min,
                                    right: e.max,
                                    bottom: t.max,
                                    left: e.min,
                                }
                            })(s)
                        )
                        ;(this.hasMutatedConstraints = !!e), e && (s = k(e))
                    }
                    return s
                }
                startAnimation(e) {
                    let {
                            drag: t,
                            dragMomentum: n,
                            dragElastic: r,
                            dragTransition: i,
                            dragSnapToOrigin: o,
                            onDragTransitionEnd: s,
                        } = this.getProps(),
                        a = this.constraints || {}
                    return Promise.all(
                        rN((s) => {
                            if (!rJ(s, t, this.currentDirection)) return
                            let l = (a && a[s]) || {}
                            o && (l = { min: 0, max: 0 })
                            let u = {
                                type: 'inertia',
                                velocity: n ? e[s] : 0,
                                bounceStiffness: r ? 200 : 1e6,
                                bounceDamping: r ? 40 : 1e7,
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
                    let n = this.getAxisMotionValue(e)
                    return (
                        ni(this.visualElement, e),
                        n.start(rf(e, n, 0, t, this.visualElement, !1))
                    )
                }
                stopAnimation() {
                    rN((e) => this.getAxisMotionValue(e).stop())
                }
                pauseAnimation() {
                    rN((e) => this.getAxisMotionValue(e).animation?.pause())
                }
                getAnimationState(e) {
                    return this.getAxisMotionValue(e).animation?.state
                }
                getAxisMotionValue(e) {
                    let t = `_drag${e.toUpperCase()}`,
                        n = this.visualElement.getProps()
                    return (
                        n[t] ||
                        this.visualElement.getValue(
                            e,
                            (n.initial ? n.initial[e] : void 0) || 0
                        )
                    )
                }
                snapToCursor(e) {
                    rN((t) => {
                        let { drag: n } = this.getProps()
                        if (!rJ(t, n, this.currentDirection)) return
                        let { projection: r } = this.visualElement,
                            i = this.getAxisMotionValue(t)
                        if (r && r.layout) {
                            let { min: n, max: o } = r.layout.layoutBox[t]
                            i.set(e[t] - E(n, o, 0.5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return
                    let { drag: e, dragConstraints: t } = this.getProps(),
                        { projection: n } = this.visualElement
                    if (!t6(t) || !n || !this.constraints) return
                    this.stopAnimation()
                    let r = { x: 0, y: 0 }
                    rN((e) => {
                        let t = this.getAxisMotionValue(e)
                        if (t && !1 !== this.constraints) {
                            let n = t.get()
                            r[e] = (function (e, t) {
                                let n = 0.5,
                                    r = r_(e),
                                    i = r_(t)
                                return (
                                    i > r
                                        ? (n = nZ(t.min, t.max - r, e.min))
                                        : r > i &&
                                          (n = nZ(e.min, e.max - i, t.min)),
                                    L(0, 1, n)
                                )
                            })({ min: n, max: n }, this.constraints[e])
                        }
                    })
                    let { transformTemplate: i } = this.visualElement.getProps()
                    ;(this.visualElement.current.style.transform = i
                        ? i({}, '')
                        : 'none'),
                        n.root && n.root.updateScroll(),
                        n.updateLayout(),
                        this.resolveConstraints(),
                        rN((t) => {
                            if (!rJ(t, e, null)) return
                            let n = this.getAxisMotionValue(t),
                                { min: i, max: o } = this.constraints[t]
                            n.set(E(i, o, r[t]))
                        })
                }
                addListeners() {
                    if (!this.visualElement.current) return
                    rZ.set(this.visualElement, this)
                    let e = rD(
                            this.visualElement.current,
                            'pointerdown',
                            (e) => {
                                let { drag: t, dragListener: n = !0 } =
                                    this.getProps()
                                t && n && this.start(e)
                            }
                        ),
                        t = () => {
                            let { dragConstraints: e } = this.getProps()
                            t6(e) &&
                                e.current &&
                                (this.constraints =
                                    this.resolveRefConstraints())
                        },
                        { projection: n } = this.visualElement,
                        r = n.addEventListener('measure', t)
                    n &&
                        !n.layout &&
                        (n.root && n.root.updateScroll(), n.updateLayout()),
                        eu.read(t)
                    let i = rM(window, 'resize', () =>
                            this.scalePositionWithinConstraints()
                        ),
                        o = n.addEventListener(
                            'didUpdate',
                            ({ delta: e, hasLayoutChanged: t }) => {
                                this.isDragging &&
                                    t &&
                                    (rN((t) => {
                                        let n = this.getAxisMotionValue(t)
                                        n &&
                                            ((this.originPoint[t] +=
                                                e[t].translate),
                                            n.set(n.get() + e[t].translate))
                                    }),
                                    this.visualElement.render())
                            }
                        )
                    return () => {
                        i(), e(), r(), o && o()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: r = !1,
                            dragConstraints: i = !1,
                            dragElastic: o = 0.35,
                            dragMomentum: s = !0,
                        } = e
                    return {
                        ...e,
                        drag: t,
                        dragDirectionLock: n,
                        dragPropagation: r,
                        dragConstraints: i,
                        dragElastic: o,
                        dragMomentum: s,
                    }
                }
            }
            function rJ(e, t, n) {
                return (!0 === t || t === e) && (null === n || n === e)
            }
            class r0 extends rP {
                constructor(e) {
                    super(e),
                        (this.removeGroupControls = ei),
                        (this.removeListeners = ei),
                        (this.controls = new rQ(e))
                }
                mount() {
                    let { dragControls: e } = this.node.getProps()
                    e &&
                        (this.removeGroupControls = e.subscribe(this.controls)),
                        (this.removeListeners =
                            this.controls.addListeners() || ei)
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let r1 = (e) => (t, n) => {
                e && eu.postRender(() => e(t, n))
            }
            class r2 extends rP {
                constructor() {
                    super(...arguments), (this.removePointerDownListener = ei)
                }
                onPointerDown(e) {
                    this.session = new rW(e, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: rz(this.node),
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: e,
                        onPanStart: t,
                        onPan: n,
                        onPanEnd: r,
                    } = this.node.getProps()
                    return {
                        onSessionStart: r1(e),
                        onStart: r1(t),
                        onMove: n,
                        onEnd: (e, t) => {
                            delete this.session,
                                r && eu.postRender(() => r(e, t))
                        },
                    }
                }
                mount() {
                    this.removePointerDownListener = rD(
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
            var r5 = n(5601)
            let r4 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
            function r3(e, t) {
                return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
            }
            let r6 = {
                    correct: (e, t) => {
                        if (!t.target) return e
                        if ('string' == typeof e)
                            if (!U.test(e)) return e
                            else e = parseFloat(e)
                        let n = r3(e, t.target.x),
                            r = r3(e, t.target.y)
                        return `${n}% ${r}%`
                    },
                },
                r8 = !1
            class r9 extends i.Component {
                componentDidMount() {
                    let {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: n,
                            layoutId: r,
                        } = this.props,
                        { projection: i } = e
                    for (let e in ie)
                        (tP[e] = ie[e]), y(e) && (tP[e].isCSSVariable = !0)
                    i &&
                        (t.group && t.group.add(i),
                        n && n.register && r && n.register(i),
                        r8 && i.root.didUpdate(),
                        i.addEventListener('animationComplete', () => {
                            this.safeToRemove()
                        }),
                        i.setOptions(
                            (0, tN._)((0, tF._)({}, i.options), {
                                onExitComplete: () => this.safeToRemove(),
                            })
                        )),
                        (r4.hasEverUpdated = !0)
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                            layoutDependency: t,
                            visualElement: n,
                            drag: r,
                            isPresent: i,
                        } = this.props,
                        { projection: o } = n
                    return (
                        o &&
                            ((o.isPresent = i),
                            (r8 = !0),
                            r ||
                            e.layoutDependency !== t ||
                            void 0 === t ||
                            e.isPresent !== i
                                ? o.willUpdate()
                                : this.safeToRemove(),
                            e.isPresent !== i &&
                                (i
                                    ? o.promote()
                                    : o.relegate() ||
                                      eu.postRender(() => {
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
                        e8.postRender(() => {
                            !e.currentAnimation &&
                                e.isLead() &&
                                this.safeToRemove()
                        }))
                }
                componentWillUnmount() {
                    let {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: n,
                        } = this.props,
                        { projection: r } = e
                    ;(r8 = !0),
                        r &&
                            (r.scheduleCheckAfterUnmount(),
                            t && t.group && t.group.remove(r),
                            n && n.deregister && n.deregister(r))
                }
                safeToRemove() {
                    let { safeToRemove: e } = this.props
                    e && e()
                }
                render() {
                    return null
                }
            }
            function r7(e) {
                let [t, n] = (0, r5.xQ)(),
                    r = (0, i.useContext)(tB.L)
                return (0, tz.jsx)(
                    r9,
                    (0, tN._)((0, tF._)({}, e), {
                        layoutGroup: r,
                        switchLayoutGroup: (0, i.useContext)(t9),
                        isPresent: t,
                        safeToRemove: n,
                    })
                )
            }
            let ie = {
                borderRadius: (0, tN._)((0, tF._)({}, r6), {
                    applyTo: [
                        'borderTopLeftRadius',
                        'borderTopRightRadius',
                        'borderBottomLeftRadius',
                        'borderBottomRightRadius',
                    ],
                }),
                borderTopLeftRadius: r6,
                borderTopRightRadius: r6,
                borderBottomLeftRadius: r6,
                borderBottomRightRadius: r6,
                boxShadow: {
                    correct: (e, { treeScale: t, projectionDelta: n }) => {
                        let r = eN.parse(e)
                        if (r.length > 5) return e
                        let i = eN.createTransformer(e),
                            o = +('number' != typeof r[0]),
                            s = n.x.scale * t.x,
                            a = n.y.scale * t.y
                        ;(r[0 + o] /= s), (r[1 + o] /= a)
                        let l = E(s, a, 0.5)
                        return (
                            'number' == typeof r[2 + o] && (r[2 + o] /= l),
                            'number' == typeof r[3 + o] && (r[3 + o] /= l),
                            i(r)
                        )
                    },
                },
            }
            var it = n(3142)
            function ir(e) {
                return (0, it.G)(e) && 'ownerSVGElement' in e
            }
            let ii = (e, t) => e.depth - t.depth
            class io {
                constructor() {
                    ;(this.children = []), (this.isDirty = !1)
                }
                add(e) {
                    e0(this.children, e), (this.isDirty = !0)
                }
                remove(e) {
                    e1(this.children, e), (this.isDirty = !0)
                }
                forEach(e) {
                    this.isDirty && this.children.sort(ii),
                        (this.isDirty = !1),
                        this.children.forEach(e)
                }
            }
            let is = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
                ia = is.length,
                il = (e) => ('string' == typeof e ? parseFloat(e) : e),
                iu = (e) => 'number' == typeof e || U.test(e)
            function ic(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let id = ip(0, 0.5, nG),
                ih = ip(0.5, 0.95, ei)
            function ip(e, t, n) {
                return (r) => (r < e ? 0 : r > t ? 1 : n(nZ(e, t, r)))
            }
            function im(e, t) {
                ;(e.min = t.min), (e.max = t.max)
            }
            function ig(e, t) {
                im(e.x, t.x), im(e.y, t.y)
            }
            function iv(e, t) {
                ;(e.translate = t.translate),
                    (e.scale = t.scale),
                    (e.originPoint = t.originPoint),
                    (e.origin = t.origin)
            }
            function iy(e, t, n, r, i) {
                return (
                    (e -= t),
                    (e = r + (1 / n) * (e - r)),
                    void 0 !== i && (e = r + (1 / i) * (e - r)),
                    e
                )
            }
            function ib(e, t, [n, r, i], o, s) {
                !(function (e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
                    if (
                        (W.test(t) &&
                            ((t = parseFloat(t)),
                            (t = E(s.min, s.max, t / 100) - s.min)),
                        'number' != typeof t)
                    )
                        return
                    let a = E(o.min, o.max, r)
                    e === o && (a -= t),
                        (e.min = iy(e.min, t, n, a, i)),
                        (e.max = iy(e.max, t, n, a, i))
                })(e, t[n], t[r], t[i], t.scale, o, s)
            }
            let ix = ['x', 'scaleX', 'originX'],
                iw = ['y', 'scaleY', 'originY']
            function ik(e, t, n, r) {
                ib(e.x, t, ix, n ? n.x : void 0, r ? r.x : void 0),
                    ib(e.y, t, iw, n ? n.y : void 0, r ? r.y : void 0)
            }
            function iE(e) {
                return 0 === e.translate && 1 === e.scale
            }
            function iP(e) {
                return iE(e.x) && iE(e.y)
            }
            function iS(e, t) {
                return e.min === t.min && e.max === t.max
            }
            function iT(e, t) {
                return (
                    Math.round(e.min) === Math.round(t.min) &&
                    Math.round(e.max) === Math.round(t.max)
                )
            }
            function iA(e, t) {
                return iT(e.x, t.x) && iT(e.y, t.y)
            }
            function iC(e) {
                return r_(e.x) / r_(e.y)
            }
            function iM(e, t) {
                return (
                    e.translate === t.translate &&
                    e.scale === t.scale &&
                    e.originPoint === t.originPoint
                )
            }
            class iR {
                constructor() {
                    this.members = []
                }
                add(e) {
                    e0(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if (
                        (e1(this.members, e),
                        e === this.prevLead && (this.prevLead = void 0),
                        e === this.lead)
                    ) {
                        let e = this.members[this.members.length - 1]
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t,
                        n = this.members.findIndex((t) => e === t)
                    if (0 === n) return !1
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e]
                        if (!1 !== n.isPresent) {
                            t = n
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    let n = this.lead
                    if (
                        e !== n &&
                        ((this.prevLead = n), (this.lead = e), e.show(), n)
                    ) {
                        n.instance && n.scheduleRender(),
                            e.scheduleRender(),
                            (e.resumeFrom = n),
                            t && (e.resumeFrom.preserveOpacity = !0),
                            n.snapshot &&
                                ((e.snapshot = n.snapshot),
                                (e.snapshot.latestValues =
                                    n.animationValues || n.latestValues)),
                            e.root &&
                                e.root.isUpdating &&
                                (e.isLayoutDirty = !0)
                        let { crossfade: r } = e.options
                        !1 === r && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((e) => {
                        let { options: t, resumingFrom: n } = e
                        t.onExitComplete && t.onExitComplete(),
                            n &&
                                n.options.onExitComplete &&
                                n.options.onExitComplete()
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
            let ij = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0,
                },
                iD = ['', 'X', 'Y', 'Z'],
                i_ = 0
            function iO(e, t, n, r) {
                let { latestValues: i } = t
                i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
            }
            function iV({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: n,
                checkIsScrollRoot: r,
                resetTransform: i,
            }) {
                return class {
                    constructor(e = {}, n = t?.()) {
                        ;(this.id = i_++),
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
                                    ea.value &&
                                        (ij.nodes =
                                            ij.calculatedTargetDeltas =
                                            ij.calculatedProjections =
                                                0),
                                    this.nodes.forEach(iF),
                                    this.nodes.forEach(iK),
                                    this.nodes.forEach(iG),
                                    this.nodes.forEach(iN),
                                    ea.addProjectionMetrics &&
                                        ea.addProjectionMetrics(ij)
                            }),
                            (this.resolvedRelativeTargetAt = 0),
                            (this.linkedParentVersion = 0),
                            (this.hasProjected = !1),
                            (this.isVisible = !0),
                            (this.animationProgress = 0),
                            (this.sharedNodes = new Map()),
                            (this.latestValues = e),
                            (this.root = n ? n.root || n : this),
                            (this.path = n ? [...n.path, n] : []),
                            (this.parent = n),
                            (this.depth = n ? n.depth + 1 : 0)
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].shouldResetTransform = !0
                        this.root === this && (this.nodes = new io())
                    }
                    addEventListener(e, t) {
                        return (
                            this.eventHandlers.has(e) ||
                                this.eventHandlers.set(e, new e2()),
                            this.eventHandlers.get(e).add(t)
                        )
                    }
                    notifyListeners(e, ...t) {
                        let n = this.eventHandlers.get(e)
                        n && n.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    mount(t) {
                        if (this.instance) return
                        ;(this.isSVG =
                            ir(t) && !(ir(t) && 'svg' === t.tagName)),
                            (this.instance = t)
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: i,
                        } = this.options
                        if (
                            (i && !i.current && i.mount(t),
                            this.root.nodes.add(this),
                            this.parent && this.parent.children.add(this),
                            this.root.hasTreeAnimated &&
                                (r || n) &&
                                (this.isLayoutDirty = !0),
                            e)
                        ) {
                            let n,
                                r = 0,
                                i = () => (this.root.updateBlockedByResize = !1)
                            eu.read(() => {
                                r = window.innerWidth
                            }),
                                e(t, () => {
                                    let e = window.innerWidth
                                    e !== r &&
                                        ((r = e),
                                        (this.root.updateBlockedByResize = !0),
                                        n && n(),
                                        (n = (function (e, t) {
                                            let n = eJ.now(),
                                                r = ({ timestamp: t }) => {
                                                    let i = t - n
                                                    i >= 250 &&
                                                        (ec(r), e(i - 250))
                                                }
                                            return eu.setup(r, !0), () => ec(r)
                                        })(i, 250)),
                                        r4.hasAnimatedSinceResize &&
                                            ((r4.hasAnimatedSinceResize = !1),
                                            this.nodes.forEach(i$)))
                                })
                        }
                        n && this.root.registerSharedNode(n, this),
                            !1 !== this.options.animate &&
                                i &&
                                (n || r) &&
                                this.addEventListener(
                                    'didUpdate',
                                    ({
                                        delta: e,
                                        hasLayoutChanged: t,
                                        hasRelativeLayoutChanged: n,
                                        layout: r,
                                    }) => {
                                        if (this.isTreeAnimationBlocked()) {
                                            ;(this.target = void 0),
                                                (this.relativeTarget = void 0)
                                            return
                                        }
                                        let o =
                                                this.options.transition ||
                                                i.getDefaultTransition() ||
                                                iQ,
                                            {
                                                onLayoutAnimationStart: s,
                                                onLayoutAnimationComplete: a,
                                            } = i.getProps(),
                                            l =
                                                !this.targetLayout ||
                                                !iA(this.targetLayout, r),
                                            u = !t && n
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
                                                ...nn(o, 'layout'),
                                                onPlay: s,
                                                onComplete: a,
                                            }
                                            ;(i.shouldReduceMotion ||
                                                this.options.layoutRoot) &&
                                                ((t.delay = 0), (t.type = !1)),
                                                this.startAnimation(t),
                                                this.setAnimationOrigin(e, u)
                                        } else
                                            t || i$(this),
                                                this.isLead() &&
                                                    this.options
                                                        .onExitComplete &&
                                                    this.options.onExitComplete()
                                        this.targetLayout = r
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
                            ec(this.updateProjection)
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
                            this.nodes && this.nodes.forEach(iX),
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
                                    let { visualElement: n } = t.options
                                    if (!n) return
                                    let r = n.props[t8]
                                    if (
                                        window.MotionHasOptimisedAnimation(
                                            r,
                                            'transform'
                                        )
                                    ) {
                                        let { layout: e, layoutId: n } =
                                            t.options
                                        window.MotionCancelOptimisedAnimation(
                                            r,
                                            'transform',
                                            eu,
                                            !(e || n)
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
                        let { layoutId: t, layout: n } = this.options
                        if (void 0 === t && !n) return
                        let r = this.getTransformTemplate()
                        ;(this.prevTransformTemplateValue = r
                            ? r(this.latestValues, '')
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
                                this.nodes.forEach(iB)
                            return
                        }
                        if (this.animationId <= this.animationCommitId)
                            return void this.nodes.forEach(iW)
                        ;(this.animationCommitId = this.animationId),
                            this.isUpdating
                                ? ((this.isUpdating = !1),
                                  this.nodes.forEach(iU),
                                  this.nodes.forEach(iL),
                                  this.nodes.forEach(iI))
                                : this.nodes.forEach(iW),
                            this.clearAllSnapshots()
                        let e = eJ.now()
                        ;(ed.delta = L(0, 1e3 / 60, e - ed.timestamp)),
                            (ed.timestamp = e),
                            (ed.isProcessing = !0),
                            eh.update.process(ed),
                            eh.preRender.process(ed),
                            eh.render.process(ed),
                            (ed.isProcessing = !1)
                    }
                    didUpdate() {
                        this.updateScheduled ||
                            ((this.updateScheduled = !0),
                            e8.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iz), this.sharedNodes.forEach(iY)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled ||
                            ((this.projectionUpdateScheduled = !0),
                            eu.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        eu.postRender(() => {
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
                                r_(this.snapshot.measuredBox.x) ||
                                r_(this.snapshot.measuredBox.y) ||
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
                            (this.layoutCorrected = tr()),
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
                            let t = r(this.instance)
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: e,
                                isRoot: t,
                                offset: n(this.instance),
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
                                !iP(this.projectionDelta),
                            n = this.getTransformTemplate(),
                            r = n ? n(this.latestValues, '') : void 0,
                            o = r !== this.prevTransformTemplateValue
                        e &&
                            this.instance &&
                            (t || T(this.latestValues) || o) &&
                            (i(this.instance, r),
                            (this.shouldResetTransform = !1),
                            this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t
                        let n = this.measurePageBox(),
                            r = this.removeElementScroll(n)
                        return (
                            e && (r = this.removeTransform(r)),
                            i1((t = r).x),
                            i1(t.y),
                            {
                                animationId: this.root.animationId,
                                measuredBox: n,
                                layoutBox: r,
                                latestValues: {},
                                source: this.id,
                            }
                        )
                    }
                    measurePageBox() {
                        let { visualElement: e } = this.options
                        if (!e) return tr()
                        let t = e.measureViewportBox()
                        if (!(this.scroll?.wasRoot || this.path.some(i5))) {
                            let { scroll: e } = this.root
                            e && (j(t.x, e.offset.x), j(t.y, e.offset.y))
                        }
                        return t
                    }
                    removeElementScroll(e) {
                        let t = tr()
                        if ((ig(t, e), this.scroll?.wasRoot)) return t
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n],
                                { scroll: i, options: o } = r
                            r !== this.root &&
                                i &&
                                o.layoutScroll &&
                                (i.wasRoot && ig(t, e),
                                j(t.x, i.offset.x),
                                j(t.y, i.offset.y))
                        }
                        return t
                    }
                    applyTransform(e, t = !1) {
                        let n = tr()
                        ig(n, e)
                        for (let e = 0; e < this.path.length; e++) {
                            let r = this.path[e]
                            !t &&
                                r.options.layoutScroll &&
                                r.scroll &&
                                r !== r.root &&
                                _(n, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y,
                                }),
                                T(r.latestValues) && _(n, r.latestValues)
                        }
                        return (
                            T(this.latestValues) && _(n, this.latestValues), n
                        )
                    }
                    removeTransform(e) {
                        let t = tr()
                        ig(t, e)
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e]
                            if (!n.instance || !T(n.latestValues)) continue
                            S(n.latestValues) && n.updateSnapshot()
                            let r = tr()
                            ig(r, n.measurePageBox()),
                                ik(
                                    t,
                                    n.latestValues,
                                    n.snapshot ? n.snapshot.layoutBox : void 0,
                                    r
                                )
                        }
                        return (
                            T(this.latestValues) && ik(t, this.latestValues), t
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
                                ed.timestamp &&
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
                        let n = !!this.resumingFrom || this !== t
                        if (
                            !(
                                e ||
                                (n && this.isSharedProjectionDirty) ||
                                this.isProjectionDirty ||
                                this.parent?.isProjectionDirty ||
                                this.attemptToResolveRelativeTarget ||
                                this.root.updateBlockedByResize
                            )
                        )
                            return
                        let { layout: r, layoutId: i } = this.options
                        if (!this.layout || !(r || i)) return
                        this.resolvedRelativeTargetAt = ed.timestamp
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
                                    ((this.target = tr()),
                                    (this.targetWithTransforms = tr())),
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
                                    rL(s.x, a.x, l.x),
                                    rL(s.y, a.y, l.y)
                            } else
                                this.targetDelta
                                    ? (this.resumingFrom
                                          ? (this.target = this.applyTransform(
                                                this.layout.layoutBox
                                            ))
                                          : ig(
                                                this.target,
                                                this.layout.layoutBox
                                            ),
                                      R(this.target, this.targetDelta))
                                    : ig(this.target, this.layout.layoutBox)
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
                                ea.value && ij.calculatedTargetDeltas++
                        }
                    }
                    getClosestProjectingParent() {
                        if (
                            !(
                                !this.parent ||
                                S(this.parent.latestValues) ||
                                A(this.parent.latestValues)
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
                    createRelativeTarget(e, t, n) {
                        ;(this.relativeParent = e),
                            (this.linkedParentVersion = e.layoutVersion),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = tr()),
                            (this.relativeTargetOrigin = tr()),
                            rF(this.relativeTargetOrigin, t, n),
                            ig(this.relativeTarget, this.relativeTargetOrigin)
                    }
                    removeRelativeTarget() {
                        this.relativeParent = this.relativeTarget = void 0
                    }
                    calcProjection() {
                        let e = this.getLead(),
                            t = !!this.resumingFrom || this !== e,
                            n = !0
                        if (
                            ((this.isProjectionDirty ||
                                this.parent?.isProjectionDirty) &&
                                (n = !1),
                            t &&
                                (this.isSharedProjectionDirty ||
                                    this.isTransformDirty) &&
                                (n = !1),
                            this.resolvedRelativeTargetAt === ed.timestamp &&
                                (n = !1),
                            n)
                        )
                            return
                        let { layout: r, layoutId: i } = this.options
                        if (
                            ((this.isTreeAnimating = !!(
                                (this.parent && this.parent.isTreeAnimating) ||
                                this.currentAnimation ||
                                this.pendingAnimation
                            )),
                            this.isTreeAnimating ||
                                (this.targetDelta = this.relativeTarget =
                                    void 0),
                            !this.layout || !(r || i))
                        )
                            return
                        ig(this.layoutCorrected, this.layout.layoutBox)
                        let o = this.treeScale.x,
                            s = this.treeScale.y
                        !(function (e, t, n, r = !1) {
                            let i,
                                o,
                                s = n.length
                            if (s) {
                                t.x = t.y = 1
                                for (let a = 0; a < s; a++) {
                                    o = (i = n[a]).projectionDelta
                                    let { visualElement: s } = i.options
                                    ;(!s ||
                                        !s.props.style ||
                                        'contents' !== s.props.style.display) &&
                                        (r &&
                                            i.options.layoutScroll &&
                                            i.scroll &&
                                            i !== i.root &&
                                            _(e, {
                                                x: -i.scroll.offset.x,
                                                y: -i.scroll.offset.y,
                                            }),
                                        o &&
                                            ((t.x *= o.x.scale),
                                            (t.y *= o.y.scale),
                                            R(e, o)),
                                        r &&
                                            T(i.latestValues) &&
                                            _(e, i.latestValues))
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
                                (e.targetWithTransforms = tr()))
                        let { target: a } = e
                        if (!a) {
                            this.prevProjectionDelta &&
                                (this.createProjectionDeltas(),
                                this.scheduleRender())
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta
                            ? (iv(
                                  this.prevProjectionDelta.x,
                                  this.projectionDelta.x
                              ),
                              iv(
                                  this.prevProjectionDelta.y,
                                  this.projectionDelta.y
                              ))
                            : this.createProjectionDeltas(),
                            rV(
                                this.projectionDelta,
                                this.layoutCorrected,
                                a,
                                this.latestValues
                            ),
                            (this.treeScale.x === o &&
                                this.treeScale.y === s &&
                                iM(
                                    this.projectionDelta.x,
                                    this.prevProjectionDelta.x
                                ) &&
                                iM(
                                    this.projectionDelta.y,
                                    this.prevProjectionDelta.y
                                )) ||
                                ((this.hasProjected = !0),
                                this.scheduleRender(),
                                this.notifyListeners('projectionUpdate', a)),
                            ea.value && ij.calculatedProjections++
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
                        ;(this.prevProjectionDelta = tt()),
                            (this.projectionDelta = tt()),
                            (this.projectionDeltaWithTransform = tt())
                    }
                    setAnimationOrigin(e, t = !1) {
                        let n,
                            r = this.snapshot,
                            i = r ? r.latestValues : {},
                            o = { ...this.latestValues },
                            s = tt()
                        ;(this.relativeParent &&
                            this.relativeParent.options.layoutRoot) ||
                            (this.relativeTarget = this.relativeTargetOrigin =
                                void 0),
                            (this.attemptToResolveRelativeTarget = !t)
                        let a = tr(),
                            l =
                                (r ? r.source : void 0) !==
                                (this.layout ? this.layout.source : void 0),
                            u = this.getStack(),
                            c = !u || u.members.length <= 1,
                            d = !!(
                                l &&
                                !c &&
                                !0 === this.options.crossfade &&
                                !this.path.some(iZ)
                            )
                        ;(this.animationProgress = 0),
                            (this.mixTargetDelta = (t) => {
                                let r = t / 1e3
                                if (
                                    (iq(s.x, e.x, r),
                                    iq(s.y, e.y, r),
                                    this.setTargetDelta(s),
                                    this.relativeTarget &&
                                        this.relativeTargetOrigin &&
                                        this.layout &&
                                        this.relativeParent &&
                                        this.relativeParent.layout)
                                ) {
                                    var u, h, p, f, m, g
                                    rF(
                                        a,
                                        this.layout.layoutBox,
                                        this.relativeParent.layout.layoutBox
                                    ),
                                        (p = this.relativeTarget),
                                        (f = this.relativeTargetOrigin),
                                        (m = a),
                                        (g = r),
                                        iH(p.x, f.x, m.x, g),
                                        iH(p.y, f.y, m.y, g),
                                        n &&
                                            ((u = this.relativeTarget),
                                            (h = n),
                                            iS(u.x, h.x) && iS(u.y, h.y)) &&
                                            (this.isProjectionDirty = !1),
                                        n || (n = tr()),
                                        ig(n, this.relativeTarget)
                                }
                                l &&
                                    ((this.animationValues = o),
                                    (function (e, t, n, r, i, o) {
                                        i
                                            ? ((e.opacity = E(
                                                  0,
                                                  n.opacity ?? 1,
                                                  id(r)
                                              )),
                                              (e.opacityExit = E(
                                                  t.opacity ?? 1,
                                                  0,
                                                  ih(r)
                                              )))
                                            : o &&
                                              (e.opacity = E(
                                                  t.opacity ?? 1,
                                                  n.opacity ?? 1,
                                                  r
                                              ))
                                        for (let i = 0; i < ia; i++) {
                                            let o = `border${is[i]}Radius`,
                                                s = ic(t, o),
                                                a = ic(n, o)
                                            ;(void 0 !== s || void 0 !== a) &&
                                                (s || (s = 0),
                                                a || (a = 0),
                                                0 === s ||
                                                0 === a ||
                                                iu(s) === iu(a)
                                                    ? ((e[o] = Math.max(
                                                          E(il(s), il(a), r),
                                                          0
                                                      )),
                                                      (W.test(a) ||
                                                          W.test(s)) &&
                                                          (e[o] += '%'))
                                                    : (e[o] = a))
                                        }
                                        ;(t.rotate || n.rotate) &&
                                            (e.rotate = E(
                                                t.rotate || 0,
                                                n.rotate || 0,
                                                r
                                            ))
                                    })(o, i, this.latestValues, r, d, c)),
                                    this.root.scheduleUpdateProjection(),
                                    this.scheduleRender(),
                                    (this.animationProgress = r)
                            }),
                            this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(e) {
                        this.notifyListeners('animationStart'),
                            this.currentAnimation?.stop(),
                            this.resumingFrom?.currentAnimation?.stop(),
                            this.pendingAnimation &&
                                (ec(this.pendingAnimation),
                                (this.pendingAnimation = void 0)),
                            (this.pendingAnimation = eu.update(() => {
                                ;(r4.hasAnimatedSinceResize = !0),
                                    nu.layout++,
                                    this.motionValue ||
                                        (this.motionValue = e3(0)),
                                    (this.currentAnimation = (function (
                                        e,
                                        t,
                                        n
                                    ) {
                                        let r = eZ(e) ? e : e3(e)
                                        return (
                                            r.start(rf('', r, t, n)),
                                            r.animation
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
                                            nu.layout--
                                        },
                                        onComplete: () => {
                                            nu.layout--,
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
                                target: n,
                                layout: r,
                                latestValues: i,
                            } = e
                        if (t && n && r) {
                            if (
                                this !== e &&
                                this.layout &&
                                r &&
                                i2(
                                    this.options.animationType,
                                    this.layout.layoutBox,
                                    r.layoutBox
                                )
                            ) {
                                n = this.target || tr()
                                let t = r_(this.layout.layoutBox.x)
                                ;(n.x.min = e.target.x.min),
                                    (n.x.max = n.x.min + t)
                                let r = r_(this.layout.layoutBox.y)
                                ;(n.y.min = e.target.y.min),
                                    (n.y.max = n.y.min + r)
                            }
                            ig(t, n),
                                _(t, i),
                                rV(
                                    this.projectionDeltaWithTransform,
                                    this.layoutCorrected,
                                    t,
                                    i
                                )
                        }
                    }
                    registerSharedNode(e, t) {
                        this.sharedNodes.has(e) ||
                            this.sharedNodes.set(e, new iR()),
                            this.sharedNodes.get(e).add(t)
                        let n = t.options.initialPromotionConfig
                        t.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity:
                                n && n.shouldPreserveFollowOpacity
                                    ? n.shouldPreserveFollowOpacity(t)
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
                        preserveFollowOpacity: n,
                    } = {}) {
                        let r = this.getStack()
                        r && r.promote(this, n),
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
                            { latestValues: n } = e
                        if (
                            ((n.z ||
                                n.rotate ||
                                n.rotateX ||
                                n.rotateY ||
                                n.rotateZ ||
                                n.skewX ||
                                n.skewY) &&
                                (t = !0),
                            !t)
                        )
                            return
                        let r = {}
                        n.z && iO('z', e, r, this.animationValues)
                        for (let t = 0; t < iD.length; t++)
                            iO(`rotate${iD[t]}`, e, r, this.animationValues),
                                iO(`skew${iD[t]}`, e, r, this.animationValues)
                        for (let t in (e.render(), r))
                            e.setStaticValue(t, r[t]),
                                this.animationValues &&
                                    (this.animationValues[t] = r[t])
                        e.scheduleRender()
                    }
                    applyProjectionStyles(e, t) {
                        if (!this.instance || this.isSVG) return
                        if (!this.isVisible) {
                            e.visibility = 'hidden'
                            return
                        }
                        let n = this.getTransformTemplate()
                        if (this.needsReset) {
                            ;(this.needsReset = !1),
                                (e.visibility = ''),
                                (e.opacity = ''),
                                (e.pointerEvents = t1(t?.pointerEvents) || ''),
                                (e.transform = n
                                    ? n(this.latestValues, '')
                                    : 'none')
                            return
                        }
                        let r = this.getLead()
                        if (
                            !this.projectionDelta ||
                            !this.layout ||
                            !r.target
                        ) {
                            this.options.layoutId &&
                                ((e.opacity =
                                    void 0 !== this.latestValues.opacity
                                        ? this.latestValues.opacity
                                        : 1),
                                (e.pointerEvents = t1(t?.pointerEvents) || '')),
                                this.hasProjected &&
                                    !T(this.latestValues) &&
                                    ((e.transform = n ? n({}, '') : 'none'),
                                    (this.hasProjected = !1))
                            return
                        }
                        e.visibility = ''
                        let i = r.animationValues || r.latestValues
                        this.applyTransformsToTarget()
                        let o = (function (e, t, n) {
                            let r = '',
                                i = e.x.translate / t.x,
                                o = e.y.translate / t.y,
                                s = n?.z || 0
                            if (
                                ((i || o || s) &&
                                    (r = `translate3d(${i}px, ${o}px, ${s}px) `),
                                (1 !== t.x || 1 !== t.y) &&
                                    (r += `scale(${1 / t.x}, ${1 / t.y}) `),
                                n)
                            ) {
                                let {
                                    transformPerspective: e,
                                    rotate: t,
                                    rotateX: i,
                                    rotateY: o,
                                    skewX: s,
                                    skewY: a,
                                } = n
                                e && (r = `perspective(${e}px) ${r}`),
                                    t && (r += `rotate(${t}deg) `),
                                    i && (r += `rotateX(${i}deg) `),
                                    o && (r += `rotateY(${o}deg) `),
                                    s && (r += `skewX(${s}deg) `),
                                    a && (r += `skewY(${a}deg) `)
                            }
                            let a = e.x.scale * t.x,
                                l = e.y.scale * t.y
                            return (
                                (1 !== a || 1 !== l) &&
                                    (r += `scale(${a}, ${l})`),
                                r || 'none'
                            )
                        })(this.projectionDeltaWithTransform, this.treeScale, i)
                        n && (o = n(i, o)), (e.transform = o)
                        let { x: s, y: a } = this.projectionDelta
                        for (let t in ((e.transformOrigin = `${
                            100 * s.origin
                        }% ${100 * a.origin}% 0`),
                        r.animationValues
                            ? (e.opacity =
                                  r === this
                                      ? i.opacity ??
                                        this.latestValues.opacity ??
                                        1
                                      : this.preserveOpacity
                                      ? this.latestValues.opacity
                                      : i.opacityExit)
                            : (e.opacity =
                                  r === this
                                      ? void 0 !== i.opacity
                                          ? i.opacity
                                          : ''
                                      : void 0 !== i.opacityExit
                                      ? i.opacityExit
                                      : 0),
                        tP)) {
                            if (void 0 === i[t]) continue
                            let {
                                    correct: n,
                                    applyTo: s,
                                    isCSSVariable: a,
                                } = tP[t],
                                l = 'none' === o ? i[t] : n(i[t], r)
                            if (s) {
                                let t = s.length
                                for (let n = 0; n < t; n++) e[s[n]] = l
                            } else
                                a
                                    ? (this.options.visualElement.renderState.vars[
                                          t
                                      ] = l)
                                    : (e[t] = l)
                        }
                        this.options.layoutId &&
                            (e.pointerEvents =
                                r === this
                                    ? t1(t?.pointerEvents) || ''
                                    : 'none')
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach((e) =>
                            e.currentAnimation?.stop()
                        ),
                            this.root.nodes.forEach(iB),
                            this.root.sharedNodes.clear()
                    }
                }
            }
            function iL(e) {
                e.updateLayout()
            }
            function iI(e) {
                let t = e.resumeFrom?.snapshot || e.snapshot
                if (
                    e.isLead() &&
                    e.layout &&
                    t &&
                    e.hasListeners('didUpdate')
                ) {
                    let { layoutBox: n, measuredBox: r } = e.layout,
                        { animationType: i } = e.options,
                        o = t.source !== e.layout.source
                    'size' === i
                        ? rN((e) => {
                              let r = o ? t.measuredBox[e] : t.layoutBox[e],
                                  i = r_(r)
                              ;(r.min = n[e].min), (r.max = r.min + i)
                          })
                        : i2(i, t.layoutBox, n) &&
                          rN((r) => {
                              let i = o ? t.measuredBox[r] : t.layoutBox[r],
                                  s = r_(n[r])
                              ;(i.max = i.min + s),
                                  e.relativeTarget &&
                                      !e.currentAnimation &&
                                      ((e.isProjectionDirty = !0),
                                      (e.relativeTarget[r].max =
                                          e.relativeTarget[r].min + s))
                          })
                    let s = tt()
                    rV(s, n, t.layoutBox)
                    let a = tt()
                    o
                        ? rV(a, e.applyTransform(r, !0), t.measuredBox)
                        : rV(a, n, t.layoutBox)
                    let l = !iP(s),
                        u = !1
                    if (!e.resumeFrom) {
                        let r = e.getClosestProjectingParent()
                        if (r && !r.resumeFrom) {
                            let { snapshot: i, layout: o } = r
                            if (i && o) {
                                let s = tr()
                                rF(s, t.layoutBox, i.layoutBox)
                                let a = tr()
                                rF(a, n, o.layoutBox),
                                    iA(s, a) || (u = !0),
                                    r.options.layoutRoot &&
                                        ((e.relativeTarget = a),
                                        (e.relativeTargetOrigin = s),
                                        (e.relativeParent = r))
                            }
                        }
                    }
                    e.notifyListeners('didUpdate', {
                        layout: n,
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
            function iF(e) {
                ea.value && ij.nodes++,
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
            function iN(e) {
                e.isProjectionDirty =
                    e.isSharedProjectionDirty =
                    e.isTransformDirty =
                        !1
            }
            function iz(e) {
                e.clearSnapshot()
            }
            function iB(e) {
                e.clearMeasurements()
            }
            function iW(e) {
                e.isLayoutDirty = !1
            }
            function iU(e) {
                let { visualElement: t } = e.options
                t &&
                    t.getProps().onBeforeLayoutMeasure &&
                    t.notify('BeforeLayoutMeasure'),
                    e.resetTransform()
            }
            function i$(e) {
                e.finishAnimation(),
                    (e.targetDelta = e.relativeTarget = e.target = void 0),
                    (e.isProjectionDirty = !0)
            }
            function iK(e) {
                e.resolveTargetDelta()
            }
            function iG(e) {
                e.calcProjection()
            }
            function iX(e) {
                e.resetSkewAndRotation()
            }
            function iY(e) {
                e.removeLeadSnapshot()
            }
            function iq(e, t, n) {
                ;(e.translate = E(t.translate, 0, n)),
                    (e.scale = E(t.scale, 1, n)),
                    (e.origin = t.origin),
                    (e.originPoint = t.originPoint)
            }
            function iH(e, t, n, r) {
                ;(e.min = E(t.min, n.min, r)), (e.max = E(t.max, n.max, r))
            }
            function iZ(e) {
                return (
                    e.animationValues &&
                    void 0 !== e.animationValues.opacityExit
                )
            }
            let iQ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
                iJ = (e) =>
                    'undefined' != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().includes(e),
                i0 = iJ('applewebkit/') && !iJ('chrome/') ? Math.round : ei
            function i1(e) {
                ;(e.min = i0(e.min)), (e.max = i0(e.max))
            }
            function i2(e, t, n) {
                return (
                    'position' === e ||
                    ('preserve-aspect' === e &&
                        !(0.2 >= Math.abs(iC(t) - iC(n))))
                )
            }
            function i5(e) {
                return e !== e.root && e.scroll?.wasRoot
            }
            let i4 = iV({
                    attachResizeListener: (e, t) => rM(e, 'resize', t),
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
                i3 = { current: void 0 },
                i6 = iV({
                    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
                    defaultParent: () => {
                        if (!i3.current) {
                            let e = new i4({})
                            e.mount(window),
                                e.setOptions({ layoutScroll: !0 }),
                                (i3.current = e)
                        }
                        return i3.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : 'none'
                    },
                    checkIsScrollRoot: (e) =>
                        'fixed' === window.getComputedStyle(e).position,
                })
            function i8(e, t) {
                let n = (function (e, t, n) {
                        if (e instanceof EventTarget) return [e]
                        if ('string' == typeof e) {
                            let t = document,
                                n = void 0 ?? t.querySelectorAll(e)
                            return n ? Array.from(n) : []
                        }
                        return Array.from(e)
                    })(e),
                    r = new AbortController()
                return [
                    n,
                    { passive: !0, ...t, signal: r.signal },
                    () => r.abort(),
                ]
            }
            function i9(e) {
                return !('touch' === e.pointerType || rC.x || rC.y)
            }
            function i7(e, t, n) {
                let { props: r } = e
                e.animationState &&
                    r.whileHover &&
                    e.animationState.setActive('whileHover', 'Start' === n)
                let i = r['onHover' + n]
                i && eu.postRender(() => i(t, rj(t)))
            }
            class oe extends rP {
                mount() {
                    let { current: e } = this.node
                    e &&
                        (this.unmount = (function (e, t, n = {}) {
                            let [r, i, o] = i8(e, n),
                                s = (e) => {
                                    if (!i9(e)) return
                                    let { target: n } = e,
                                        r = t(n, e)
                                    if ('function' != typeof r || !n) return
                                    let o = (e) => {
                                        i9(e) &&
                                            (r(e),
                                            n.removeEventListener(
                                                'pointerleave',
                                                o
                                            ))
                                    }
                                    n.addEventListener('pointerleave', o, i)
                                }
                            return (
                                r.forEach((e) => {
                                    e.addEventListener('pointerenter', s, i)
                                }),
                                o
                            )
                        })(
                            e,
                            (e, t) => (
                                i7(this.node, t, 'Start'),
                                (e) => i7(this.node, e, 'End')
                            )
                        ))
                }
                unmount() {}
            }
            class ot extends rP {
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
                    this.unmount = na(
                        rM(this.node.current, 'focus', () => this.onFocus()),
                        rM(this.node.current, 'blur', () => this.onBlur())
                    )
                }
                unmount() {}
            }
            var on = n(1402)
            let or = (e, t) => !!t && (e === t || or(e, t.parentElement)),
                oi = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
                oo = new WeakSet()
            function os(e) {
                return (t) => {
                    'Enter' === t.key && e(t)
                }
            }
            function oa(e, t) {
                e.dispatchEvent(
                    new PointerEvent('pointer' + t, {
                        isPrimary: !0,
                        bubbles: !0,
                    })
                )
            }
            function ol(e) {
                return rR(e) && !(rC.x || rC.y)
            }
            function ou(e, t, n) {
                let { props: r } = e
                if (
                    e.current instanceof HTMLButtonElement &&
                    e.current.disabled
                )
                    return
                e.animationState &&
                    r.whileTap &&
                    e.animationState.setActive('whileTap', 'Start' === n)
                let i = r['onTap' + ('End' === n ? '' : n)]
                i && eu.postRender(() => i(t, rj(t)))
            }
            class oc extends rP {
                mount() {
                    let { current: e } = this.node
                    e &&
                        (this.unmount = (function (e, t, n = {}) {
                            let [r, i, o] = i8(e, n),
                                s = (e) => {
                                    let r = e.currentTarget
                                    if (!ol(e)) return
                                    oo.add(r)
                                    let o = t(r, e),
                                        s = (e, t) => {
                                            window.removeEventListener(
                                                'pointerup',
                                                a
                                            ),
                                                window.removeEventListener(
                                                    'pointercancel',
                                                    l
                                                ),
                                                oo.has(r) && oo.delete(r),
                                                ol(e) &&
                                                    'function' == typeof o &&
                                                    o(e, { success: t })
                                        },
                                        a = (e) => {
                                            s(
                                                e,
                                                r === window ||
                                                    r === document ||
                                                    n.useGlobalTarget ||
                                                    or(r, e.target)
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
                                r.forEach((e) => {
                                    ;((n.useGlobalTarget
                                        ? window
                                        : e
                                    ).addEventListener('pointerdown', s, i),
                                    (0, on.s)(e)) &&
                                        (e.addEventListener('focus', (e) =>
                                            ((e, t) => {
                                                let n = e.currentTarget
                                                if (!n) return
                                                let r = os(() => {
                                                    if (oo.has(n)) return
                                                    oa(n, 'down')
                                                    let e = os(() => {
                                                        oa(n, 'up')
                                                    })
                                                    n.addEventListener(
                                                        'keyup',
                                                        e,
                                                        t
                                                    ),
                                                        n.addEventListener(
                                                            'blur',
                                                            () =>
                                                                oa(n, 'cancel'),
                                                            t
                                                        )
                                                })
                                                n.addEventListener(
                                                    'keydown',
                                                    r,
                                                    t
                                                ),
                                                    n.addEventListener(
                                                        'blur',
                                                        () =>
                                                            n.removeEventListener(
                                                                'keydown',
                                                                r
                                                            ),
                                                        t
                                                    )
                                            })(e, i)
                                        ),
                                        oi.has(e.tagName) ||
                                            -1 !== e.tabIndex ||
                                            e.hasAttribute('tabindex') ||
                                            (e.tabIndex = 0))
                                }),
                                o
                            )
                        })(
                            e,
                            (e, t) => (
                                ou(this.node, t, 'Start'),
                                (e, { success: t }) =>
                                    ou(this.node, e, t ? 'End' : 'Cancel')
                            ),
                            { useGlobalTarget: this.node.props.globalTapTarget }
                        ))
                }
                unmount() {}
            }
            let od = new WeakMap(),
                oh = new WeakMap(),
                op = (e) => {
                    let t = od.get(e.target)
                    t && t(e)
                },
                of = (e) => {
                    e.forEach(op)
                },
                om = { some: 0, all: 1 }
            class og extends rP {
                constructor() {
                    super(...arguments),
                        (this.hasEnteredView = !1),
                        (this.isInView = !1)
                }
                startObserver() {
                    this.unmount()
                    let { viewport: e = {} } = this.node.getProps(),
                        { root: t, margin: n, amount: r = 'some', once: i } = e,
                        o = {
                            root: t ? t.current : void 0,
                            rootMargin: n,
                            threshold: 'number' == typeof r ? r : om[r],
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
                            let { onViewportEnter: n, onViewportLeave: r } =
                                    this.node.getProps(),
                                o = t ? n : r
                            o && o(e)
                        }
                    var a = this.node.current
                    let l = (function ({ root: e, ...t }) {
                        let n = e || document
                        oh.has(n) || oh.set(n, {})
                        let r = oh.get(n),
                            i = JSON.stringify(t)
                        return (
                            r[i] ||
                                (r[i] = new IntersectionObserver(of, {
                                    root: e,
                                    ...t,
                                })),
                            r[i]
                        )
                    })(o)
                    return (
                        od.set(a, s),
                        l.observe(a),
                        () => {
                            od.delete(a), l.unobserve(a)
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
                            return (n) => e[n] !== t[n]
                        })(e, t)
                    ) && this.startObserver()
                }
                unmount() {}
            }
            let ov = (function (e, t) {
                if ('undefined' == typeof Proxy) return ne
                let n = new Map(),
                    r = (n, r) => ne(n, r, e, t)
                return new Proxy((e, t) => r(e, t), {
                    get: (i, o) =>
                        'create' === o
                            ? r
                            : (n.has(o) || n.set(o, ne(o, void 0, e, t)),
                              n.get(o)),
                })
            })(
                {
                    animation: { Feature: rS },
                    exit: { Feature: rA },
                    inView: { Feature: og },
                    tap: { Feature: oc },
                    focus: { Feature: ot },
                    hover: { Feature: oe },
                    pan: { Feature: r2 },
                    drag: {
                        Feature: r0,
                        ProjectionNode: i6,
                        MeasureLayout: r7,
                    },
                    layout: { ProjectionNode: i6, MeasureLayout: r7 },
                },
                (e, t) =>
                    tI(e)
                        ? new tV(t)
                        : new tA(t, { allowProjection: e !== i.Fragment })
            )
        },
        1847: (e, t, n) => {
            n.d(t, { A: () => d })
            var r = n(1983),
                i = n(7389),
                o = n(2115)
            let s = (e) => {
                    let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
                        n ? n.toUpperCase() : t.toLowerCase()
                    )
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                a = function () {
                    for (
                        var e = arguments.length, t = Array(e), n = 0;
                        n < e;
                        n++
                    )
                        t[n] = arguments[n]
                    return t
                        .filter(
                            (e, t, n) =>
                                !!e && '' !== e.trim() && n.indexOf(e) === t
                        )
                        .join(' ')
                        .trim()
                }
            var l = n(5849),
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
                            color: n = 'currentColor',
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
                        (0, r._)(
                            (0, l._)((0, r._)({ ref: t }, u), {
                                width: s,
                                height: s,
                                stroke: n,
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
                                let [t, n] = e
                                return (0, o.createElement)(t, n)
                            }),
                            ...(Array.isArray(p) ? p : [p]),
                        ]
                    )
                }),
                d = (e, t) => {
                    let n = (0, o.forwardRef)((n, l) => {
                        var { className: u } = n,
                            d = (0, i._)(n, ['className'])
                        return (0, o.createElement)(
                            c,
                            (0, r._)(
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
                    return (n.displayName = s(e)), n
                }
        },
        2108: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('chevron-up', [
                ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
            ])
        },
        2467: (e, t, n) => {
            n.d(t, { DX: () => c })
            var r,
                i = n(2115),
                o = n(4446),
                s = n(5155),
                a = Symbol.for('react.lazy'),
                l = (r || (r = n.t(i, 2)))[' use '.trim().toString()]
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
                                let { children: n, ...r } = e
                                if (
                                    (u(n) &&
                                        'function' == typeof l &&
                                        (n = l(n._payload)),
                                    i.isValidElement(n))
                                ) {
                                    var s
                                    let e,
                                        a,
                                        l =
                                            ((s = n),
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
                                            let n = { ...t }
                                            for (let r in t) {
                                                let i = e[r],
                                                    o = t[r]
                                                ;/^on[A-Z]/.test(r)
                                                    ? i && o
                                                        ? (n[r] = (...e) => {
                                                              let t = o(...e)
                                                              return i(...e), t
                                                          })
                                                        : i && (n[r] = i)
                                                    : 'style' === r
                                                    ? (n[r] = { ...i, ...o })
                                                    : 'className' === r &&
                                                      (n[r] = [i, o]
                                                          .filter(Boolean)
                                                          .join(' '))
                                            }
                                            return { ...e, ...n }
                                        })(r, n.props)
                                    return (
                                        n.type !== i.Fragment &&
                                            (u.ref = t ? (0, o.t)(t, l) : l),
                                        i.cloneElement(n, u)
                                    )
                                }
                                return i.Children.count(n) > 1
                                    ? i.Children.only(null)
                                    : null
                            })
                            return (t.displayName = `${e}.SlotClone`), t
                        })(e),
                        n = i.forwardRef((e, n) => {
                            let { children: r, ...o } = e
                            u(r) &&
                                'function' == typeof l &&
                                (r = l(r._payload))
                            let a = i.Children.toArray(r),
                                c = a.find(h)
                            if (c) {
                                let e = c.props.children,
                                    r = a.map((t) =>
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
                                    ref: n,
                                    children: i.isValidElement(e)
                                        ? i.cloneElement(e, void 0, r)
                                        : null,
                                })
                            }
                            return (0, s.jsx)(t, { ...o, ref: n, children: r })
                        })
                    return (n.displayName = `${e}.Slot`), n
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
        2508: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('smartphone', [
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
        2556: (e, t, n) => {
            function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
                return function (r) {
                    if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r)
                }
            }
            n.d(t, { mK: () => r }),
                'undefined' != typeof window &&
                    window.document &&
                    window.document.createElement
        },
        2821: (e, t, n) => {
            n.d(t, { $: () => r })
            function r() {
                for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
                    (e = arguments[n]) &&
                        (t = (function e(t) {
                            var n,
                                r,
                                i = ''
                            if ('string' == typeof t || 'number' == typeof t)
                                i += t
                            else if ('object' == typeof t)
                                if (Array.isArray(t)) {
                                    var o = t.length
                                    for (n = 0; n < o; n++)
                                        t[n] &&
                                            (r = e(t[n])) &&
                                            (i && (i += ' '), (i += r))
                                } else
                                    for (r in t)
                                        t[r] && (i && (i += ' '), (i += r))
                            return i
                        })(e)) &&
                        (r && (r += ' '), (r += t))
                return r
            }
        },
        2987: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('arrow-right', [
                ['path', { d: 'M5 12h14', key: '1ays0h' }],
                ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
            ])
        },
        3011: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return i
                    },
                })
            let r = n(2115)
            function i(e, t) {
                let n = (0, r.useRef)(null),
                    i = (0, r.useRef)(null)
                return (0, r.useCallback)(
                    (r) => {
                        if (null === r) {
                            let e = n.current
                            e && ((n.current = null), e())
                            let t = i.current
                            t && ((i.current = null), t())
                        } else
                            e && (n.current = o(e, r)),
                                t && (i.current = o(t, r))
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
                    let n = e(t)
                    return 'function' == typeof n ? n : () => e(null)
                }
            }
            ;('function' == typeof t.default ||
                ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }),
                Object.assign(t.default, t),
                (e.exports = t.default))
        },
        3101: (e, t, n) => {
            n.d(t, { F: () => s })
            var r = n(2821)
            let i = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
                o = r.$,
                s = (e, t) => (n) => {
                    var r
                    if ((null == t ? void 0 : t.variants) == null)
                        return o(
                            e,
                            null == n ? void 0 : n.class,
                            null == n ? void 0 : n.className
                        )
                    let { variants: s, defaultVariants: a } = t,
                        l = Object.keys(s).map((e) => {
                            let t = null == n ? void 0 : n[e],
                                r = null == a ? void 0 : a[e]
                            if (null === t) return null
                            let o = i(t) || i(r)
                            return s[e][o]
                        }),
                        u =
                            n &&
                            Object.entries(n).reduce((e, t) => {
                                let [n, r] = t
                                return void 0 === r || (e[n] = r), e
                            }, {})
                    return o(
                        e,
                        l,
                        null == t || null == (r = t.compoundVariants)
                            ? void 0
                            : r.reduce((e, t) => {
                                  let { class: n, className: r, ...i } = t
                                  return Object.entries(i).every((e) => {
                                      let [t, n] = e
                                      return Array.isArray(n)
                                          ? n.includes({ ...a, ...u }[t])
                                          : { ...a, ...u }[t] === n
                                  })
                                      ? [...e, n, r]
                                      : e
                              }, []),
                        null == n ? void 0 : n.class,
                        null == n ? void 0 : n.className
                    )
                }
        },
        3127: (e, t, n) => {
            n.d(t, { Q: () => r })
            let r = (0, n(2115).createContext)({
                transformPagePoint: (e) => e,
                isStatic: !1,
                reducedMotion: 'never',
            })
        },
        3142: (e, t, n) => {
            n.d(t, { G: () => r })
            function r(e) {
                return 'object' == typeof e && null !== e
            }
        },
        3455: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'ImageConfigContext', {
                    enumerable: !0,
                    get: function () {
                        return o
                    },
                })
            let r = n(8140)._(n(2115)),
                i = n(821),
                o = r.default.createContext(i.imageConfigDefault)
        },
        3468: (e, t, n) => {
            n.d(t, { A: () => s, q: () => o })
            var r = n(2115),
                i = n(5155)
            function o(e, t) {
                let n = r.createContext(t),
                    o = (e) => {
                        let { children: t, ...o } = e,
                            s = r.useMemo(() => o, Object.values(o))
                        return (0, i.jsx)(n.Provider, { value: s, children: t })
                    }
                return (
                    (o.displayName = e + 'Provider'),
                    [
                        o,
                        function (i) {
                            let o = r.useContext(n)
                            if (o) return o
                            if (void 0 !== t) return t
                            throw Error(`\`${i}\` must be used within \`${e}\``)
                        },
                    ]
                )
            }
            function s(e, t = []) {
                let n = [],
                    o = () => {
                        let t = n.map((e) => r.createContext(e))
                        return function (n) {
                            let i = n?.[e] || t
                            return r.useMemo(
                                () => ({ [`__scope${e}`]: { ...n, [e]: i } }),
                                [n, i]
                            )
                        }
                    }
                return (
                    (o.scopeName = e),
                    [
                        function (t, o) {
                            let s = r.createContext(o),
                                a = n.length
                            n = [...n, o]
                            let l = (t) => {
                                let { scope: n, children: o, ...l } = t,
                                    u = n?.[e]?.[a] || s,
                                    c = r.useMemo(() => l, Object.values(l))
                                return (0, i.jsx)(u.Provider, {
                                    value: c,
                                    children: o,
                                })
                            }
                            return (
                                (l.displayName = t + 'Provider'),
                                [
                                    l,
                                    function (n, i) {
                                        let l = i?.[e]?.[a] || s,
                                            u = r.useContext(l)
                                        if (u) return u
                                        if (void 0 !== o) return o
                                        throw Error(
                                            `\`${n}\` must be used within \`${t}\``
                                        )
                                    },
                                ]
                            )
                        },
                        (function (...e) {
                            let t = e[0]
                            if (1 === e.length) return t
                            let n = () => {
                                let n = e.map((e) => ({
                                    useScope: e(),
                                    scopeName: e.scopeName,
                                }))
                                return function (e) {
                                    let i = n.reduce(
                                        (t, { useScope: n, scopeName: r }) => {
                                            let i = n(e)[`__scope${r}`]
                                            return { ...t, ...i }
                                        },
                                        {}
                                    )
                                    return r.useMemo(
                                        () => ({
                                            [`__scope${t.scopeName}`]: i,
                                        }),
                                        [i]
                                    )
                                }
                            }
                            return (n.scopeName = t.scopeName), n
                        })(o, ...t),
                    ]
                )
            }
        },
        3558: (e, t, n) => {
            n.d(t, { i: () => a })
            var r,
                i = n(2115),
                o = n(4129),
                s =
                    (r || (r = n.t(i, 2)))[
                        ' useInsertionEffect '.trim().toString()
                    ] || o.N
            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {},
                caller: r,
            }) {
                let [o, a, l] = (function ({ defaultProp: e, onChange: t }) {
                        let [n, r] = i.useState(e),
                            o = i.useRef(n),
                            a = i.useRef(t)
                        return (
                            s(() => {
                                a.current = t
                            }, [t]),
                            i.useEffect(() => {
                                o.current !== n &&
                                    (a.current?.(n), (o.current = n))
                            }, [n, o]),
                            [n, r, a]
                        )
                    })({ defaultProp: t, onChange: n }),
                    u = void 0 !== e,
                    c = u ? e : o
                {
                    let t = i.useRef(void 0 !== e)
                    i.useEffect(() => {
                        let e = t.current
                        if (e !== u) {
                            let t = u ? 'controlled' : 'uncontrolled'
                            console.warn(
                                `${r} is changing from ${
                                    e ? 'controlled' : 'uncontrolled'
                                } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                            )
                        }
                        t.current = u
                    }, [u, r])
                }
                return [
                    c,
                    i.useCallback(
                        (t) => {
                            if (u) {
                                let n = 'function' == typeof t ? t(e) : t
                                n !== e && l.current?.(n)
                            } else a(t)
                        },
                        [u, e, a, l]
                    ),
                ]
            }
            Symbol('RADIX:SYNC_STATE')
        },
        3577: (e, t, n) => {
            n.d(t, { B: () => r })
            let r = 'undefined' != typeof window
        },
        3586: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('music', [
                ['path', { d: 'M9 18V5l12-2v13', key: '1jmyc2' }],
                ['circle', { cx: '6', cy: '18', r: '3', key: 'fqmcym' }],
                ['circle', { cx: '18', cy: '16', r: '3', key: '1hluhg' }],
            ])
        },
        3664: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('mail', [
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
        4105: (e, t) => {
            function n(e) {
                let {
                        widthInt: t,
                        heightInt: n,
                        blurWidth: r,
                        blurHeight: i,
                        blurDataURL: o,
                        objectFit: s,
                    } = e,
                    a = r ? 40 * r : t,
                    l = i ? 40 * i : n,
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
                        return n
                    },
                })
        },
        4129: (e, t, n) => {
            n.d(t, { N: () => i })
            var r = n(2115),
                i = globalThis?.document ? r.useLayoutEffect : () => {}
        },
        4416: (e, t, n) => {
            n.d(t, { M: () => i })
            var r = n(2115)
            function i(e) {
                let t = (0, r.useRef)(null)
                return null === t.current && (t.current = e()), t.current
            }
        },
        4446: (e, t, n) => {
            n.d(t, { s: () => s, t: () => o })
            var r = n(2115)
            function i(e, t) {
                if ('function' == typeof e) return e(t)
                null != e && (e.current = t)
            }
            function o(...e) {
                return (t) => {
                    let n = !1,
                        r = e.map((e) => {
                            let r = i(e, t)
                            return n || 'function' != typeof r || (n = !0), r
                        })
                    if (n)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                let n = r[t]
                                'function' == typeof n ? n() : i(e[t], null)
                            }
                        }
                }
            }
            function s(...e) {
                return r.useCallback(o(...e), e)
            }
        },
        4484: (e, t, n) => {
            n.d(t, { UC: () => el, B8: () => es, bL: () => eo, l9: () => ea })
            var r,
                i = n(1983),
                o = n(5849),
                s = n(7389),
                a = n(2115),
                l = n(2556),
                u = n(3468)
            function c(e, t, n) {
                if (!t.has(e))
                    throw TypeError(
                        'attempted to ' + n + ' private field on non-instance'
                    )
                return t.get(e)
            }
            function d(e, t) {
                var n = c(e, t, 'get')
                return n.get ? n.get.call(e) : n.value
            }
            function h(e, t, n) {
                var r = c(e, t, 'set')
                if (r.set) r.set.call(e, n)
                else {
                    if (!r.writable)
                        throw TypeError(
                            'attempted to set read only private field'
                        )
                    r.value = n
                }
                return n
            }
            var p = n(4446),
                f = n(5155)
            function m(e) {
                let t = (function (e) {
                        let t = a.forwardRef((e, t) => {
                            let { children: n, ...r } = e
                            if (a.isValidElement(n)) {
                                var i
                                let e,
                                    o,
                                    s =
                                        ((i = n),
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
                                        let n = { ...t }
                                        for (let r in t) {
                                            let i = e[r],
                                                o = t[r]
                                            ;/^on[A-Z]/.test(r)
                                                ? i && o
                                                    ? (n[r] = (...e) => {
                                                          let t = o(...e)
                                                          return i(...e), t
                                                      })
                                                    : i && (n[r] = i)
                                                : 'style' === r
                                                ? (n[r] = { ...i, ...o })
                                                : 'className' === r &&
                                                  (n[r] = [i, o]
                                                      .filter(Boolean)
                                                      .join(' '))
                                        }
                                        return { ...e, ...n }
                                    })(r, n.props)
                                return (
                                    n.type !== a.Fragment &&
                                        (l.ref = t ? (0, p.t)(t, s) : s),
                                    a.cloneElement(n, l)
                                )
                            }
                            return a.Children.count(n) > 1
                                ? a.Children.only(null)
                                : null
                        })
                        return (t.displayName = `${e}.SlotClone`), t
                    })(e),
                    n = a.forwardRef((e, n) => {
                        let { children: r, ...i } = e,
                            o = a.Children.toArray(r),
                            s = o.find(v)
                        if (s) {
                            let e = s.props.children,
                                r = o.map((t) =>
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
                                ref: n,
                                children: a.isValidElement(e)
                                    ? a.cloneElement(e, void 0, r)
                                    : null,
                            })
                        }
                        return (0, f.jsx)(t, { ...i, ref: n, children: r })
                    })
                return (n.displayName = `${e}.Slot`), n
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
                let n = (function (e, t) {
                    let n = e.length,
                        r = x(t),
                        i = r >= 0 ? r : n + r
                    return i < 0 || i >= n ? -1 : i
                })(e, t)
                return -1 === n ? void 0 : e[n]
            }
            function x(e) {
                return e != e || 0 === e ? 0 : Math.trunc(e)
            }
            ;(r = new WeakMap()),
                class e extends Map {
                    set(e, t) {
                        return (
                            y.get(this) &&
                                (this.has(e)
                                    ? (d(this, r)[d(this, r).indexOf(e)] = e)
                                    : d(this, r).push(e)),
                            super.set(e, t),
                            this
                        )
                    }
                    insert(e, t, n) {
                        let i,
                            o = this.has(t),
                            s = d(this, r).length,
                            a = x(e),
                            l = a >= 0 ? a : s + a,
                            u = l < 0 || l >= s ? -1 : l
                        if (
                            u === this.size ||
                            (o && u === this.size - 1) ||
                            -1 === u
                        )
                            return this.set(t, n), this
                        let c = this.size + +!o
                        a < 0 && l++
                        let h = [...d(this, r)],
                            p = !1
                        for (let e = l; e < c; e++)
                            if (l === e) {
                                let r = h[e]
                                h[e] === t && (r = h[e + 1]),
                                    o && this.delete(t),
                                    (i = this.get(r)),
                                    this.set(t, n)
                            } else {
                                p || h[e - 1] !== t || (p = !0)
                                let n = h[p ? e : e - 1],
                                    r = i
                                ;(i = this.get(n)),
                                    this.delete(n),
                                    this.set(n, r)
                            }
                        return this
                    }
                    with(t, n, r) {
                        let i = new e(this)
                        return i.insert(t, n, r), i
                    }
                    before(e) {
                        let t = d(this, r).indexOf(e) - 1
                        if (!(t < 0)) return this.entryAt(t)
                    }
                    setBefore(e, t, n) {
                        let i = d(this, r).indexOf(e)
                        return -1 === i ? this : this.insert(i, t, n)
                    }
                    after(e) {
                        let t = d(this, r).indexOf(e)
                        if (
                            -1 !==
                            (t = -1 === t || t === this.size - 1 ? -1 : t + 1)
                        )
                            return this.entryAt(t)
                    }
                    setAfter(e, t, n) {
                        let i = d(this, r).indexOf(e)
                        return -1 === i ? this : this.insert(i + 1, t, n)
                    }
                    first() {
                        return this.entryAt(0)
                    }
                    last() {
                        return this.entryAt(-1)
                    }
                    clear() {
                        return h(this, r, []), super.clear()
                    }
                    delete(e) {
                        let t = super.delete(e)
                        return (
                            t && d(this, r).splice(d(this, r).indexOf(e), 1), t
                        )
                    }
                    deleteAt(e) {
                        let t = this.keyAt(e)
                        return void 0 !== t && this.delete(t)
                    }
                    at(e) {
                        let t = b(d(this, r), e)
                        if (void 0 !== t) return this.get(t)
                    }
                    entryAt(e) {
                        let t = b(d(this, r), e)
                        if (void 0 !== t) return [t, this.get(t)]
                    }
                    indexOf(e) {
                        return d(this, r).indexOf(e)
                    }
                    keyAt(e) {
                        return b(d(this, r), e)
                    }
                    from(e, t) {
                        let n = this.indexOf(e)
                        if (-1 === n) return
                        let r = n + t
                        return (
                            r < 0 && (r = 0),
                            r >= this.size && (r = this.size - 1),
                            this.at(r)
                        )
                    }
                    keyFrom(e, t) {
                        let n = this.indexOf(e)
                        if (-1 === n) return
                        let r = n + t
                        return (
                            r < 0 && (r = 0),
                            r >= this.size && (r = this.size - 1),
                            this.keyAt(r)
                        )
                    }
                    find(e, t) {
                        let n = 0
                        for (let r of this) {
                            if (Reflect.apply(e, t, [r, n, this])) return r
                            n++
                        }
                    }
                    findIndex(e, t) {
                        let n = 0
                        for (let r of this) {
                            if (Reflect.apply(e, t, [r, n, this])) return n
                            n++
                        }
                        return -1
                    }
                    filter(t, n) {
                        let r = [],
                            i = 0
                        for (let e of this)
                            Reflect.apply(t, n, [e, i, this]) && r.push(e), i++
                        return new e(r)
                    }
                    map(t, n) {
                        let r = [],
                            i = 0
                        for (let e of this)
                            r.push([e[0], Reflect.apply(t, n, [e, i, this])]),
                                i++
                        return new e(r)
                    }
                    reduce() {
                        for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                        )
                            t[n] = arguments[n]
                        let [r, i] = t,
                            o = 0,
                            s = null != i ? i : this.at(0)
                        for (let e of this)
                            (s =
                                0 === o && 1 === t.length
                                    ? e
                                    : Reflect.apply(r, this, [s, e, o, this])),
                                o++
                        return s
                    }
                    reduceRight() {
                        for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                        )
                            t[n] = arguments[n]
                        let [r, i] = t,
                            o = null != i ? i : this.at(-1)
                        for (let e = this.size - 1; e >= 0; e--) {
                            let n = this.at(e)
                            o =
                                e === this.size - 1 && 1 === t.length
                                    ? n
                                    : Reflect.apply(r, this, [o, n, e, this])
                        }
                        return o
                    }
                    toSorted(t) {
                        return new e([...this.entries()].sort(t))
                    }
                    toReversed() {
                        let t = new e()
                        for (let e = this.size - 1; e >= 0; e--) {
                            let n = this.keyAt(e),
                                r = this.get(n)
                            t.set(n, r)
                        }
                        return t
                    }
                    toSpliced() {
                        for (
                            var t = arguments.length, n = Array(t), r = 0;
                            r < t;
                            r++
                        )
                            n[r] = arguments[r]
                        let i = [...this.entries()]
                        return i.splice(...n), new e(i)
                    }
                    slice(t, n) {
                        let r = new e(),
                            i = this.size - 1
                        if (void 0 === t) return r
                        t < 0 && (t += this.size),
                            void 0 !== n && n > 0 && (i = n - 1)
                        for (let e = t; e <= i; e++) {
                            let t = this.keyAt(e),
                                n = this.get(t)
                            r.set(t, n)
                        }
                        return r
                    }
                    every(e, t) {
                        let n = 0
                        for (let r of this) {
                            if (!Reflect.apply(e, t, [r, n, this])) return !1
                            n++
                        }
                        return !0
                    }
                    some(e, t) {
                        let n = 0
                        for (let r of this) {
                            if (Reflect.apply(e, t, [r, n, this])) return !0
                            n++
                        }
                        return !1
                    }
                    constructor(e) {
                        super(e),
                            (function (e, t, n) {
                                if (t.has(e))
                                    throw TypeError(
                                        'Cannot initialize the same private elements twice on an object'
                                    )
                                t.set(e, n)
                            })(this, r, { writable: !0, value: void 0 }),
                            h(this, r, [...super.keys()]),
                            y.set(this, !0)
                    }
                }
            var w = n(8946),
                k = n(8142),
                E = n(222),
                P = n(3558),
                S = a.createContext(void 0)
            function T(e) {
                let t = a.useContext(S)
                return e || t || 'ltr'
            }
            var A = 'rovingFocusGroup.onEntryFocus',
                C = { bubbles: !1, cancelable: !0 },
                M = 'RovingFocusGroup',
                [R, j, D] = (function (e) {
                    let t = e + 'CollectionProvider',
                        [n, r] = (0, u.A)(t),
                        [l, c] = n(t, {
                            collectionRef: { current: null },
                            itemMap: new Map(),
                        }),
                        d = (e) => {
                            let { scope: t, children: n } = e,
                                r = a.useRef(null),
                                i = a.useRef(new Map()).current
                            return (0, f.jsx)(l, {
                                scope: t,
                                itemMap: i,
                                collectionRef: r,
                                children: n,
                            })
                        }
                    d.displayName = t
                    let h = e + 'CollectionSlot',
                        g = m(h),
                        v = a.forwardRef((e, t) => {
                            let { scope: n, children: r } = e,
                                i = c(h, n),
                                o = (0, p.s)(t, i.collectionRef)
                            return (0, f.jsx)(g, { ref: o, children: r })
                        })
                    v.displayName = h
                    let y = e + 'CollectionItemSlot',
                        b = 'data-radix-collection-item',
                        x = m(y),
                        w = a.forwardRef((e, t) => {
                            let { scope: n, children: r } = e,
                                l = (0, s._)(e, ['scope', 'children']),
                                u = a.useRef(null),
                                d = (0, p.s)(t, u),
                                h = c(y, n)
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
                                        children: r,
                                    })
                                )
                            )
                        })
                    return (
                        (w.displayName = y),
                        [
                            { Provider: d, Slot: v, ItemSlot: w },
                            function (t) {
                                let n = c(e + 'CollectionConsumer', t)
                                return a.useCallback(() => {
                                    let e = n.collectionRef.current
                                    if (!e) return []
                                    let t = Array.from(
                                        e.querySelectorAll('['.concat(b, ']'))
                                    )
                                    return Array.from(n.itemMap.values()).sort(
                                        (e, n) =>
                                            t.indexOf(e.ref.current) -
                                            t.indexOf(n.ref.current)
                                    )
                                }, [n.collectionRef, n.itemMap])
                            },
                            r,
                        ]
                    )
                })(M),
                [_, O] = (0, u.A)(M, [D]),
                [V, L] = _(M),
                I = a.forwardRef((e, t) =>
                    (0, f.jsx)(R.Provider, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, f.jsx)(R.Slot, {
                            scope: e.__scopeRovingFocusGroup,
                            children: (0, f.jsx)(
                                F,
                                (0, o._)((0, i._)({}, e), { ref: t })
                            ),
                        }),
                    })
                )
            I.displayName = M
            var F = a.forwardRef((e, t) => {
                    let {
                            __scopeRovingFocusGroup: n,
                            orientation: r,
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
                        w = T(c),
                        [S, R] = (0, P.i)({
                            prop: d,
                            defaultProp: null != h ? h : null,
                            onChange: m,
                            caller: M,
                        }),
                        [D, _] = a.useState(!1),
                        O = (0, E.c)(g),
                        L = j(n),
                        I = a.useRef(!1),
                        [F, N] = a.useState(0)
                    return (
                        a.useEffect(() => {
                            let e = b.current
                            if (e)
                                return (
                                    e.addEventListener(A, O),
                                    () => e.removeEventListener(A, O)
                                )
                        }, [O]),
                        (0, f.jsx)(V, {
                            scope: n,
                            orientation: r,
                            dir: w,
                            loop: u,
                            currentTabStopId: S,
                            onItemFocus: a.useCallback((e) => R(e), [R]),
                            onItemShiftTab: a.useCallback(() => _(!0), []),
                            onFocusableItemAdd: a.useCallback(
                                () => N((e) => e + 1),
                                []
                            ),
                            onFocusableItemRemove: a.useCallback(
                                () => N((e) => e - 1),
                                []
                            ),
                            children: (0, f.jsx)(
                                k.sG.div,
                                (0, o._)(
                                    (0, i._)(
                                        {
                                            tabIndex: D || 0 === F ? -1 : 0,
                                            'data-orientation': r,
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
                                                I.current = !0
                                            }
                                        ),
                                        onFocus: (0, l.mK)(e.onFocus, (e) => {
                                            let t = !I.current
                                            if (
                                                e.target === e.currentTarget &&
                                                t &&
                                                !D
                                            ) {
                                                let t = new CustomEvent(A, C)
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
                                            I.current = !1
                                        }),
                                        onBlur: (0, l.mK)(e.onBlur, () =>
                                            _(!1)
                                        ),
                                    }
                                )
                            ),
                        })
                    )
                }),
                N = 'RovingFocusGroupItem',
                z = a.forwardRef((e, t) => {
                    let {
                            __scopeRovingFocusGroup: n,
                            focusable: r = !0,
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
                        g = L(N, n),
                        v = g.currentTabStopId === m,
                        y = j(n),
                        {
                            onFocusableItemAdd: b,
                            onFocusableItemRemove: x,
                            currentTabStopId: E,
                        } = g
                    return (
                        a.useEffect(() => {
                            if (r) return b(), () => x()
                        }, [r, b, x]),
                        (0, f.jsx)(R.ItemSlot, {
                            scope: n,
                            id: m,
                            focusable: r,
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
                                                r
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
                                                let t = (function (e, t, n) {
                                                    var r
                                                    let i =
                                                        ((r = e.key),
                                                        'rtl' !== n
                                                            ? r
                                                            : 'ArrowLeft' === r
                                                            ? 'ArrowRight'
                                                            : 'ArrowRight' === r
                                                            ? 'ArrowLeft'
                                                            : r)
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
                                                        return B[i]
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
                                                    let n = y()
                                                        .filter(
                                                            (e) => e.focusable
                                                        )
                                                        .map(
                                                            (e) => e.ref.current
                                                        )
                                                    if ('last' === t)
                                                        n.reverse()
                                                    else if (
                                                        'prev' === t ||
                                                        'next' === t
                                                    ) {
                                                        'prev' === t &&
                                                            n.reverse()
                                                        let r = n.indexOf(
                                                            e.currentTarget
                                                        )
                                                        n = g.loop
                                                            ? (function (e, t) {
                                                                  return e.map(
                                                                      (n, r) =>
                                                                          e[
                                                                              (t +
                                                                                  r) %
                                                                                  e.length
                                                                          ]
                                                                  )
                                                              })(n, r + 1)
                                                            : n.slice(r + 1)
                                                    }
                                                    setTimeout(() => W(n))
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
            z.displayName = N
            var B = {
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
                    n = document.activeElement
                for (let r of e)
                    if (
                        r === n ||
                        (r.focus({ preventScroll: t }),
                        document.activeElement !== n)
                    )
                        return
            }
            var U = n(6842),
                $ = 'Tabs',
                [K, G] = (0, u.A)($, [O]),
                X = O(),
                [Y, q] = K($),
                H = a.forwardRef((e, t) => {
                    let {
                            __scopeTabs: n,
                            value: r,
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
                        p = T(c),
                        [m, g] = (0, P.i)({
                            prop: r,
                            onChange: a,
                            defaultProp: null != l ? l : '',
                            caller: $,
                        })
                    return (0, f.jsx)(Y, {
                        scope: n,
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
            H.displayName = $
            var Z = 'TabsList',
                Q = a.forwardRef((e, t) => {
                    let { __scopeTabs: n, loop: r = !0 } = e,
                        a = (0, s._)(e, ['__scopeTabs', 'loop']),
                        l = q(Z, n),
                        u = X(n)
                    return (0, f.jsx)(
                        I,
                        (0, o._)((0, i._)({ asChild: !0 }, u), {
                            orientation: l.orientation,
                            dir: l.dir,
                            loop: r,
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
            Q.displayName = Z
            var J = 'TabsTrigger',
                ee = a.forwardRef((e, t) => {
                    let { __scopeTabs: n, value: r, disabled: a = !1 } = e,
                        u = (0, s._)(e, ['__scopeTabs', 'value', 'disabled']),
                        c = q(J, n),
                        d = X(n),
                        h = er(c.baseId, r),
                        p = ei(c.baseId, r),
                        m = r === c.value
                    return (0, f.jsx)(
                        z,
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
                                                    : c.onValueChange(r)
                                            }
                                        ),
                                        onKeyDown: (0, l.mK)(
                                            e.onKeyDown,
                                            (e) => {
                                                ;[' ', 'Enter'].includes(
                                                    e.key
                                                ) && c.onValueChange(r)
                                            }
                                        ),
                                        onFocus: (0, l.mK)(e.onFocus, () => {
                                            let e =
                                                'manual' !== c.activationMode
                                            m || a || !e || c.onValueChange(r)
                                        }),
                                    }
                                )
                            ),
                        })
                    )
                })
            ee.displayName = J
            var et = 'TabsContent',
                en = a.forwardRef((e, t) => {
                    let {
                            __scopeTabs: n,
                            value: r,
                            forceMount: l,
                            children: u,
                        } = e,
                        c = (0, s._)(e, [
                            '__scopeTabs',
                            'value',
                            'forceMount',
                            'children',
                        ]),
                        d = q(et, n),
                        h = er(d.baseId, r),
                        p = ei(d.baseId, r),
                        m = r === d.value,
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
                            children: (n) => {
                                let { present: r } = n
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
                                                hidden: !r,
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
                                            children: r && u,
                                        }
                                    )
                                )
                            },
                        })
                    )
                })
            function er(e, t) {
                return ''.concat(e, '-trigger-').concat(t)
            }
            function ei(e, t) {
                return ''.concat(e, '-content-').concat(t)
            }
            en.displayName = et
            var eo = H,
                es = Q,
                ea = ee,
                el = en
        },
        4652: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t)
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n],
                        })
                })(t, {
                    default: function () {
                        return l
                    },
                    getImageProps: function () {
                        return a
                    },
                })
            let r = n(8140),
                i = n(5040),
                o = n(1356),
                s = r._(n(1124))
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
                for (let [e, n] of Object.entries(t))
                    void 0 === n && delete t[e]
                return { props: t }
            }
            let l = o.Image
        },
        4684: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('github', [
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
        4841: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t)
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n],
                        })
                })(t, {
                    default: function () {
                        return m
                    },
                    defaultHead: function () {
                        return d
                    },
                })
            let r = n(8140),
                i = n(9417),
                o = n(5155),
                s = i._(n(2115)),
                a = r._(n(1262)),
                l = n(737),
                u = n(2073),
                c = n(861)
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
            n(4781)
            let p = ['name', 'httpEquiv', 'charSet', 'itemProp']
            function f(e, t) {
                let { inAmpMode: n } = t
                return e
                    .reduce(h, [])
                    .reverse()
                    .concat(d(n).reverse())
                    .filter(
                        (function () {
                            let e = new Set(),
                                t = new Set(),
                                n = new Set(),
                                r = {}
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
                                                    n.has(t)
                                                        ? (o = !1)
                                                        : n.add(t)
                                                else {
                                                    let e = i.props[t],
                                                        n = r[t] || new Set()
                                                    ;('name' !== t || !s) &&
                                                    n.has(e)
                                                        ? (o = !1)
                                                        : (n.add(e), (r[t] = n))
                                                }
                                        }
                                }
                                return o
                            }
                        })()
                    )
                    .reverse()
                    .map((e, t) => {
                        let n = e.key || t
                        return s.default.cloneElement(e, { key: n })
                    })
            }
            let m = function (e) {
                let { children: t } = e,
                    n = (0, s.useContext)(l.AmpStateContext),
                    r = (0, s.useContext)(u.HeadManagerContext)
                return (0, o.jsx)(a.default, {
                    reduceComponentsToState: f,
                    headManager: r,
                    inAmpMode: (0, c.isInAmpMode)(n),
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
        5040: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 })
            let r = n(1983),
                i = n(5849),
                o = n(7389)
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'getImgProps', {
                    enumerable: !0,
                    get: function () {
                        return d
                    },
                }),
                n(4781)
            let s = n(4105),
                a = n(821),
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
                var n, d
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
                        overrideSrc: T,
                        onLoad: A,
                        onLoadingComplete: C,
                        placeholder: M = 'empty',
                        blurDataURL: R,
                        fetchPriority: j,
                        decoding: D = 'async',
                        layout: _,
                        objectFit: O,
                        objectPosition: V,
                        lazyBoundary: L,
                        lazyRoot: I,
                    } = e,
                    F = o._(e, [
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
                        imgConf: N,
                        showAltText: z,
                        blurComplete: B,
                        defaultLoader: W,
                    } = t,
                    U = N || a.imageConfigDefault
                if ('allSizes' in U) h = U
                else {
                    let e = [...U.deviceSizes, ...U.imageSizes].sort(
                            (e, t) => e - t
                        ),
                        t = U.deviceSizes.sort((e, t) => e - t),
                        o =
                            null == (n = U.qualities)
                                ? void 0
                                : n.sort((e, t) => e - t)
                    h = i._(r._({}, U), {
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
                let $ = F.loader || W
                delete F.loader, delete F.srcSet
                let K = '__next_img_default' in $
                if (K) {
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
                    let e = $
                    $ = (t) => {
                        let { config: n } = t
                        return e(o._(t, ['config']))
                    }
                }
                if (_) {
                    'fill' === _ && (P = !0)
                    let e = {
                        intrinsic: { maxWidth: '100%', height: 'auto' },
                        responsive: { width: '100%', height: 'auto' },
                    }[_]
                    e && (S = r._({}, S, e))
                    let t = { responsive: '100vw', fill: '100vw' }[_]
                    t && !g && (g = t)
                }
                let G = '',
                    X = c(k),
                    Y = c(E)
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
                        (R = R || e.blurDataURL),
                        (G = e.src),
                        !P)
                    )
                        if (X || Y) {
                            if (X && !Y) {
                                let t = X / e.width
                                Y = Math.round(e.height * t)
                            } else if (!X && Y) {
                                let t = Y / e.height
                                X = Math.round(e.width * t)
                            }
                        } else (X = e.width), (Y = e.height)
                }
                let q = !y && ('lazy' === b || void 0 === b)
                ;(!(m = 'string' == typeof m ? m : G) ||
                    m.startsWith('data:') ||
                    m.startsWith('blob:')) &&
                    ((v = !0), (q = !1)),
                    h.unoptimized && (v = !0),
                    K &&
                        !h.dangerouslyAllowSVG &&
                        m.split('?', 1)[0].endsWith('.svg') &&
                        (v = !0)
                let H = c(w),
                    Z = Object.assign(
                        P
                            ? {
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  objectFit: O,
                                  objectPosition: V,
                              }
                            : {},
                        z ? {} : { color: 'transparent' },
                        S
                    ),
                    Q =
                        B || 'empty' === M
                            ? null
                            : 'blur' === M
                            ? 'url("data:image/svg+xml;charset=utf-8,' +
                              (0, s.getImageBlurSvg)({
                                  widthInt: X,
                                  heightInt: Y,
                                  blurWidth: p,
                                  blurHeight: f,
                                  blurDataURL: R || '',
                                  objectFit: Z.objectFit,
                              }) +
                              '")'
                            : 'url("' + M + '")',
                    J = l.includes(Z.objectFit)
                        ? 'fill' === Z.objectFit
                            ? '100% 100%'
                            : 'cover'
                        : Z.objectFit,
                    ee = Q
                        ? {
                              backgroundSize: J,
                              backgroundPosition: Z.objectPosition || '50% 50%',
                              backgroundRepeat: 'no-repeat',
                              backgroundImage: Q,
                          }
                        : {},
                    et = (function (e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: i,
                            quality: o,
                            sizes: s,
                            loader: a,
                        } = e
                        if (r) return { src: n, srcSet: void 0, sizes: void 0 }
                        let { widths: l, kind: u } = (function (e, t, n) {
                                let { deviceSizes: r, allSizes: i } = e
                                if (n) {
                                    let e = /(^|\s)(1?\d?\d)vw/g,
                                        t = []
                                    for (let r; (r = e.exec(n)); )
                                        t.push(parseInt(r[2]))
                                    if (t.length) {
                                        let e = 0.01 * Math.min(...t)
                                        return {
                                            widths: i.filter(
                                                (t) => t >= r[0] * e
                                            ),
                                            kind: 'w',
                                        }
                                    }
                                    return { widths: i, kind: 'w' }
                                }
                                return 'number' != typeof t
                                    ? { widths: r, kind: 'w' }
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
                                    (e, r) =>
                                        a({
                                            config: t,
                                            src: n,
                                            quality: o,
                                            width: e,
                                        }) +
                                        ' ' +
                                        ('w' === u ? e : r + 1) +
                                        u
                                )
                                .join(', '),
                            src: a({
                                config: t,
                                src: n,
                                quality: o,
                                width: l[c],
                            }),
                        }
                    })({
                        config: h,
                        src: m,
                        unoptimized: v,
                        width: X,
                        quality: H,
                        sizes: g,
                        loader: $,
                    })
                return {
                    props: i._(r._({}, F), {
                        loading: q ? 'lazy' : b,
                        fetchPriority: j,
                        width: X,
                        height: Y,
                        decoding: D,
                        className: x,
                        style: r._({}, Z, ee),
                        sizes: et.sizes,
                        srcSet: et.srcSet,
                        src: T || et.src,
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
        5229: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('x', [
                ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
                ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
            ])
        },
        5239: (e, t, n) => {
            n.d(t, { default: () => i.a })
            var r = n(4652),
                i = n.n(r)
        },
        5601: (e, t, n) => {
            n.d(t, { xQ: () => o })
            var r = n(2115),
                i = n(9686)
            function o() {
                let e =
                        !(arguments.length > 0) ||
                        void 0 === arguments[0] ||
                        arguments[0],
                    t = (0, r.useContext)(i.t)
                if (null === t) return [!0, null]
                let { isPresent: n, onExitComplete: o, register: s } = t,
                    a = (0, r.useId)()
                ;(0, r.useEffect)(() => {
                    if (e) return s(a)
                }, [e])
                let l = (0, r.useCallback)(() => e && o && o(a), [a, o, e])
                return !n && o ? [!1, l] : [!0]
            }
        },
        5889: (e, t, n) => {
            n.d(t, { QP: () => el })
            let r = (e = new Map(), t = null, n) => ({
                    nextPart: e,
                    validators: t,
                    classGroupId: n,
                }),
                i = [],
                o = (e, t, n) => {
                    if (0 == e.length - t) return n.classGroupId
                    let r = e[t],
                        i = n.nextPart.get(r)
                    if (i) {
                        let n = o(e, t + 1, i)
                        if (n) return n
                    }
                    let s = n.validators
                    if (null === s) return
                    let a = 0 === t ? e.join('-') : e.slice(t).join('-'),
                        l = s.length
                    for (let e = 0; e < l; e++) {
                        let t = s[e]
                        if (t.validator(a)) return t.classGroupId
                    }
                },
                s = (e, t) => {
                    let n = r()
                    for (let r in e) a(e[r], n, r, t)
                    return n
                },
                a = (e, t, n, r) => {
                    let i = e.length
                    for (let o = 0; o < i; o++) l(e[o], t, n, r)
                },
                l = (e, t, n, r) =>
                    'string' == typeof e
                        ? void u(e, t, n)
                        : 'function' == typeof e
                        ? void c(e, t, n, r)
                        : void d(e, t, n, r),
                u = (e, t, n) => {
                    ;('' === e ? t : h(t, e)).classGroupId = n
                },
                c = (e, t, n, r) => {
                    if (p(e)) return void a(e(r), t, n, r)
                    null === t.validators && (t.validators = []),
                        t.validators.push({ classGroupId: n, validator: e })
                },
                d = (e, t, n, r) => {
                    let i = Object.entries(e),
                        o = i.length
                    for (let e = 0; e < o; e++) {
                        let [o, s] = i[e]
                        a(s, h(t, o), n, r)
                    }
                },
                h = (e, t) => {
                    let n = e,
                        i = t.split('-'),
                        o = i.length
                    for (let e = 0; e < o; e++) {
                        let t = i[e],
                            o = n.nextPart.get(t)
                        o || ((o = r()), n.nextPart.set(t, o)), (n = o)
                    }
                    return n
                },
                p = (e) => 'isThemeGetter' in e && !0 === e.isThemeGetter,
                f = [],
                m = (e, t, n, r, i) => ({
                    modifiers: e,
                    hasImportantModifier: t,
                    baseClassName: n,
                    maybePostfixModifierPosition: r,
                    isExternal: i,
                }),
                g = /\s+/,
                v = (e) => {
                    let t
                    if ('string' == typeof e) return e
                    let n = ''
                    for (let r = 0; r < e.length; r++)
                        e[r] && (t = v(e[r])) && (n && (n += ' '), (n += t))
                    return n
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
                T =
                    /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                A =
                    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                C = (e) => k.test(e),
                M = (e) => !!e && !Number.isNaN(Number(e)),
                R = (e) => !!e && Number.isInteger(Number(e)),
                j = (e) => e.endsWith('%') && M(e.slice(0, -1)),
                D = (e) => E.test(e),
                _ = () => !0,
                O = (e) => P.test(e) && !S.test(e),
                V = () => !1,
                L = (e) => T.test(e),
                I = (e) => A.test(e),
                F = (e) => !z(e) && !G(e),
                N = (e) => J(e, er, V),
                z = (e) => x.test(e),
                B = (e) => J(e, ei, O),
                W = (e) => J(e, eo, M),
                U = (e) => J(e, et, V),
                $ = (e) => J(e, en, I),
                K = (e) => J(e, ea, L),
                G = (e) => w.test(e),
                X = (e) => ee(e, ei),
                Y = (e) => ee(e, es),
                q = (e) => ee(e, et),
                H = (e) => ee(e, er),
                Z = (e) => ee(e, en),
                Q = (e) => ee(e, ea, !0),
                J = (e, t, n) => {
                    let r = x.exec(e)
                    return !!r && (r[1] ? t(r[1]) : n(r[2]))
                },
                ee = (e, t, n = !1) => {
                    let r = w.exec(e)
                    return !!r && (r[1] ? t(r[1]) : n)
                },
                et = (e) => 'position' === e || 'percentage' === e,
                en = (e) => 'image' === e || 'url' === e,
                er = (e) => 'length' === e || 'size' === e || 'bg-size' === e,
                ei = (e) => 'length' === e,
                eo = (e) => 'number' === e,
                es = (e) => 'family-name' === e,
                ea = (e) => 'shadow' === e
            Symbol.toStringTag
            let el = ((e, ...t) => {
                let n,
                    r,
                    a,
                    l,
                    u = (e) => {
                        let t = r(e)
                        if (t) return t
                        let i = ((e, t) => {
                            let {
                                    parseClassName: n,
                                    getClassGroupId: r,
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
                                    } = n(t)
                                if (u) {
                                    l = t + (l.length > 0 ? ' ' + l : l)
                                    continue
                                }
                                let f = !!p,
                                    m = r(f ? h.substring(0, p) : h)
                                if (!m) {
                                    if (!f || !(m = r(h))) {
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
                        })(e, n)
                        return a(e, i), i
                    }
                return (
                    (l = (c) => (
                        (r = (n = ((e) => ({
                            cache: ((e) => {
                                if (e < 1)
                                    return { get: () => void 0, set: () => {} }
                                let t = 0,
                                    n = Object.create(null),
                                    r = Object.create(null),
                                    i = (i, o) => {
                                        ;(n[i] = o),
                                            ++t > e &&
                                                ((t = 0),
                                                (r = n),
                                                (n = Object.create(null)))
                                    }
                                return {
                                    get(e) {
                                        let t = n[e]
                                        return void 0 !== t
                                            ? t
                                            : void 0 !== (t = r[e])
                                            ? (i(e, t), t)
                                            : void 0
                                    },
                                    set(e, t) {
                                        e in n ? (n[e] = t) : i(e, t)
                                    },
                                }
                            })(e.cacheSize),
                            parseClassName: ((e) => {
                                let {
                                        prefix: t,
                                        experimentalParseClassName: n,
                                    } = e,
                                    r = (e) => {
                                        let t,
                                            n = [],
                                            r = 0,
                                            i = 0,
                                            o = 0,
                                            s = e.length
                                        for (let a = 0; a < s; a++) {
                                            let s = e[a]
                                            if (0 === r && 0 === i) {
                                                if (':' === s) {
                                                    n.push(e.slice(o, a)),
                                                        (o = a + 1)
                                                    continue
                                                }
                                                if ('/' === s) {
                                                    t = a
                                                    continue
                                                }
                                            }
                                            '[' === s
                                                ? r++
                                                : ']' === s
                                                ? r--
                                                : '(' === s
                                                ? i++
                                                : ')' === s && i--
                                        }
                                        let a = 0 === n.length ? e : e.slice(o),
                                            l = a,
                                            u = !1
                                        return (
                                            a.endsWith('!')
                                                ? ((l = a.slice(0, -1)),
                                                  (u = !0))
                                                : a.startsWith('!') &&
                                                  ((l = a.slice(1)), (u = !0)),
                                            m(
                                                n,
                                                u,
                                                l,
                                                t && t > o ? t - o : void 0
                                            )
                                        )
                                    }
                                if (t) {
                                    let e = t + ':',
                                        n = r
                                    r = (t) =>
                                        t.startsWith(e)
                                            ? n(t.slice(e.length))
                                            : m(f, !1, t, void 0, !0)
                                }
                                if (n) {
                                    let e = r
                                    r = (t) =>
                                        n({ className: t, parseClassName: e })
                                }
                                return r
                            })(e),
                            sortModifiers: ((e) => {
                                let t = new Map()
                                return (
                                    e.orderSensitiveModifiers.forEach(
                                        (e, n) => {
                                            t.set(e, 1e6 + n)
                                        }
                                    ),
                                    (e) => {
                                        let n = [],
                                            r = []
                                        for (let i = 0; i < e.length; i++) {
                                            let o = e[i],
                                                s = '[' === o[0],
                                                a = t.has(o)
                                            s || a
                                                ? (r.length > 0 &&
                                                      (r.sort(),
                                                      n.push(...r),
                                                      (r = [])),
                                                  n.push(o))
                                                : r.push(o)
                                        }
                                        return (
                                            r.length > 0 &&
                                                (r.sort(), n.push(...r)),
                                            n
                                        )
                                    }
                                )
                            })(e),
                            ...((e) => {
                                let t = ((e) => {
                                        let { theme: t, classGroups: n } = e
                                        return s(n, t)
                                    })(e),
                                    {
                                        conflictingClassGroups: n,
                                        conflictingClassGroupModifiers: r,
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
                                                              n =
                                                                  t.indexOf(
                                                                      ':'
                                                                  ),
                                                              r = t.slice(0, n)
                                                          return r
                                                              ? 'arbitrary..' +
                                                                    r
                                                              : void 0
                                                      })())(e)
                                        let n = e.split('-'),
                                            r = +('' === n[0] && n.length > 1)
                                        return o(n, r, t)
                                    },
                                    getConflictingClassGroupIds: (e, t) => {
                                        if (t) {
                                            let t = r[e],
                                                o = n[e]
                                            return t
                                                ? o
                                                    ? ((e, t) => {
                                                          let n = Array(
                                                              e.length +
                                                                  t.length
                                                          )
                                                          for (
                                                              let t = 0;
                                                              t < e.length;
                                                              t++
                                                          )
                                                              n[t] = e[t]
                                                          for (
                                                              let r = 0;
                                                              r < t.length;
                                                              r++
                                                          )
                                                              n[e.length + r] =
                                                                  t[r]
                                                          return n
                                                      })(o, t)
                                                    : t
                                                : o || i
                                        }
                                        return n[e] || i
                                    },
                                }
                            })(e),
                        }))(t.reduce((e, t) => t(e), e()))).cache.get),
                        (a = n.cache.set),
                        (l = u),
                        u(c)
                    )),
                    (...e) =>
                        l(
                            ((...e) => {
                                let t,
                                    n,
                                    r = 0,
                                    i = ''
                                for (; r < e.length; )
                                    (t = e[r++]) &&
                                        (n = v(t)) &&
                                        (i && (i += ' '), (i += n))
                                return i
                            })(...e)
                        )
                )
            })(() => {
                let e = b('color'),
                    t = b('font'),
                    n = b('text'),
                    r = b('font-weight'),
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
                    k = () => [...w(), G, z],
                    E = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
                    P = () => ['auto', 'contain', 'none'],
                    S = () => [G, z, l],
                    T = () => [C, 'full', 'auto', ...S()],
                    A = () => [R, 'none', 'subgrid', G, z],
                    O = () => ['auto', { span: ['full', R, G, z] }, R, G, z],
                    V = () => [R, 'auto', G, z],
                    L = () => ['auto', 'min', 'max', 'fr', G, z],
                    I = () => [
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
                    en = () => [e, G, z],
                    er = () => [...w(), q, U, { position: [G, z] }],
                    ei = () => [
                        'no-repeat',
                        { repeat: ['', 'x', 'y', 'space', 'round'] },
                    ],
                    eo = () => [
                        'auto',
                        'cover',
                        'contain',
                        H,
                        N,
                        { size: [G, z] },
                    ],
                    es = () => [j, X, B],
                    ea = () => ['', 'none', 'full', u, G, z],
                    el = () => ['', M, X, B],
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
                    ed = () => [M, j, q, U],
                    eh = () => ['', 'none', f, G, z],
                    ep = () => ['none', M, G, z],
                    ef = () => ['none', M, G, z],
                    em = () => [M, G, z],
                    eg = () => [C, 'full', ...S()]
                return {
                    cacheSize: 500,
                    theme: {
                        animate: ['spin', 'ping', 'pulse', 'bounce'],
                        aspect: ['video'],
                        blur: [D],
                        breakpoint: [D],
                        color: [_],
                        container: [D],
                        'drop-shadow': [D],
                        ease: ['in', 'out', 'in-out'],
                        font: [F],
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
                        'inset-shadow': [D],
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
                        radius: [D],
                        shadow: [D],
                        spacing: ['px', M],
                        text: [D],
                        'text-shadow': [D],
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
                        aspect: [{ aspect: ['auto', 'square', C, z, G, g] }],
                        container: ['container'],
                        columns: [{ columns: [M, z, G, a] }],
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
                        inset: [{ inset: T() }],
                        'inset-x': [{ 'inset-x': T() }],
                        'inset-y': [{ 'inset-y': T() }],
                        start: [{ start: T() }],
                        end: [{ end: T() }],
                        top: [{ top: T() }],
                        right: [{ right: T() }],
                        bottom: [{ bottom: T() }],
                        left: [{ left: T() }],
                        visibility: ['visible', 'invisible', 'collapse'],
                        z: [{ z: [R, 'auto', G, z] }],
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
                        flex: [{ flex: [M, C, 'auto', 'initial', 'none', z] }],
                        grow: [{ grow: ['', M, G, z] }],
                        shrink: [{ shrink: ['', M, G, z] }],
                        order: [{ order: [R, 'first', 'last', 'none', G, z] }],
                        'grid-cols': [{ 'grid-cols': A() }],
                        'col-start-end': [{ col: O() }],
                        'col-start': [{ 'col-start': V() }],
                        'col-end': [{ 'col-end': V() }],
                        'grid-rows': [{ 'grid-rows': A() }],
                        'row-start-end': [{ row: O() }],
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
                        'justify-content': [{ justify: [...I(), 'normal'] }],
                        'justify-items': [
                            { 'justify-items': [...J(), 'normal'] },
                        ],
                        'justify-self': [{ 'justify-self': ['auto', ...J()] }],
                        'align-content': [{ content: ['normal', ...I()] }],
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
                        'place-content': [{ 'place-content': I() }],
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
                        'font-size': [{ text: ['base', n, X, B] }],
                        'font-smoothing': [
                            'antialiased',
                            'subpixel-antialiased',
                        ],
                        'font-style': ['italic', 'not-italic'],
                        'font-weight': [{ font: [r, G, W] }],
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
                                    j,
                                    z,
                                ],
                            },
                        ],
                        'font-family': [{ font: [Y, z, t] }],
                        'fvn-normal': ['normal-nums'],
                        'fvn-ordinal': ['ordinal'],
                        'fvn-slashed-zero': ['slashed-zero'],
                        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                        'fvn-fraction': [
                            'diagonal-fractions',
                            'stacked-fractions',
                        ],
                        tracking: [{ tracking: [i, G, z] }],
                        'line-clamp': [{ 'line-clamp': [M, 'none', G, W] }],
                        leading: [{ leading: [o, ...S()] }],
                        'list-image': [{ 'list-image': ['none', G, z] }],
                        'list-style-position': [
                            { list: ['inside', 'outside'] },
                        ],
                        'list-style-type': [
                            { list: ['disc', 'decimal', 'none', G, z] },
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
                        'placeholder-color': [{ placeholder: en() }],
                        'text-color': [{ text: en() }],
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
                            { decoration: [M, 'from-font', 'auto', G, B] },
                        ],
                        'text-decoration-color': [{ decoration: en() }],
                        'underline-offset': [
                            { 'underline-offset': [M, 'auto', G, z] },
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
                                    G,
                                    z,
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
                        content: [{ content: ['none', G, z] }],
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
                        'bg-position': [{ bg: er() }],
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
                                            R,
                                            G,
                                            z,
                                        ],
                                        radial: ['', G, z],
                                        conic: [R, G, z],
                                    },
                                    Z,
                                    $,
                                ],
                            },
                        ],
                        'bg-color': [{ bg: en() }],
                        'gradient-from-pos': [{ from: es() }],
                        'gradient-via-pos': [{ via: es() }],
                        'gradient-to-pos': [{ to: es() }],
                        'gradient-from': [{ from: en() }],
                        'gradient-via': [{ via: en() }],
                        'gradient-to': [{ to: en() }],
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
                        'border-color': [{ border: en() }],
                        'border-color-x': [{ 'border-x': en() }],
                        'border-color-y': [{ 'border-y': en() }],
                        'border-color-s': [{ 'border-s': en() }],
                        'border-color-e': [{ 'border-e': en() }],
                        'border-color-t': [{ 'border-t': en() }],
                        'border-color-r': [{ 'border-r': en() }],
                        'border-color-b': [{ 'border-b': en() }],
                        'border-color-l': [{ 'border-l': en() }],
                        'divide-color': [{ divide: en() }],
                        'outline-style': [
                            { outline: [...eu(), 'none', 'hidden'] },
                        ],
                        'outline-offset': [{ 'outline-offset': [M, G, z] }],
                        'outline-w': [{ outline: ['', M, X, B] }],
                        'outline-color': [{ outline: en() }],
                        shadow: [{ shadow: ['', 'none', c, Q, K] }],
                        'shadow-color': [{ shadow: en() }],
                        'inset-shadow': [{ 'inset-shadow': ['none', d, Q, K] }],
                        'inset-shadow-color': [{ 'inset-shadow': en() }],
                        'ring-w': [{ ring: el() }],
                        'ring-w-inset': ['ring-inset'],
                        'ring-color': [{ ring: en() }],
                        'ring-offset-w': [{ 'ring-offset': [M, B] }],
                        'ring-offset-color': [{ 'ring-offset': en() }],
                        'inset-ring-w': [{ 'inset-ring': el() }],
                        'inset-ring-color': [{ 'inset-ring': en() }],
                        'text-shadow': [{ 'text-shadow': ['none', h, Q, K] }],
                        'text-shadow-color': [{ 'text-shadow': en() }],
                        opacity: [{ opacity: [M, G, z] }],
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
                            { 'mask-linear-from': en() },
                        ],
                        'mask-image-linear-to-color': [
                            { 'mask-linear-to': en() },
                        ],
                        'mask-image-t-from-pos': [{ 'mask-t-from': ed() }],
                        'mask-image-t-to-pos': [{ 'mask-t-to': ed() }],
                        'mask-image-t-from-color': [{ 'mask-t-from': en() }],
                        'mask-image-t-to-color': [{ 'mask-t-to': en() }],
                        'mask-image-r-from-pos': [{ 'mask-r-from': ed() }],
                        'mask-image-r-to-pos': [{ 'mask-r-to': ed() }],
                        'mask-image-r-from-color': [{ 'mask-r-from': en() }],
                        'mask-image-r-to-color': [{ 'mask-r-to': en() }],
                        'mask-image-b-from-pos': [{ 'mask-b-from': ed() }],
                        'mask-image-b-to-pos': [{ 'mask-b-to': ed() }],
                        'mask-image-b-from-color': [{ 'mask-b-from': en() }],
                        'mask-image-b-to-color': [{ 'mask-b-to': en() }],
                        'mask-image-l-from-pos': [{ 'mask-l-from': ed() }],
                        'mask-image-l-to-pos': [{ 'mask-l-to': ed() }],
                        'mask-image-l-from-color': [{ 'mask-l-from': en() }],
                        'mask-image-l-to-color': [{ 'mask-l-to': en() }],
                        'mask-image-x-from-pos': [{ 'mask-x-from': ed() }],
                        'mask-image-x-to-pos': [{ 'mask-x-to': ed() }],
                        'mask-image-x-from-color': [{ 'mask-x-from': en() }],
                        'mask-image-x-to-color': [{ 'mask-x-to': en() }],
                        'mask-image-y-from-pos': [{ 'mask-y-from': ed() }],
                        'mask-image-y-to-pos': [{ 'mask-y-to': ed() }],
                        'mask-image-y-from-color': [{ 'mask-y-from': en() }],
                        'mask-image-y-to-color': [{ 'mask-y-to': en() }],
                        'mask-image-radial': [{ 'mask-radial': [G, z] }],
                        'mask-image-radial-from-pos': [
                            { 'mask-radial-from': ed() },
                        ],
                        'mask-image-radial-to-pos': [
                            { 'mask-radial-to': ed() },
                        ],
                        'mask-image-radial-from-color': [
                            { 'mask-radial-from': en() },
                        ],
                        'mask-image-radial-to-color': [
                            { 'mask-radial-to': en() },
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
                            { 'mask-conic-from': en() },
                        ],
                        'mask-image-conic-to-color': [
                            { 'mask-conic-to': en() },
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
                        'mask-position': [{ mask: er() }],
                        'mask-repeat': [{ mask: ei() }],
                        'mask-size': [{ mask: eo() }],
                        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                        'mask-image': [{ mask: ['none', G, z] }],
                        filter: [{ filter: ['', 'none', G, z] }],
                        blur: [{ blur: eh() }],
                        brightness: [{ brightness: [M, G, z] }],
                        contrast: [{ contrast: [M, G, z] }],
                        'drop-shadow': [
                            { 'drop-shadow': ['', 'none', p, Q, K] },
                        ],
                        'drop-shadow-color': [{ 'drop-shadow': en() }],
                        grayscale: [{ grayscale: ['', M, G, z] }],
                        'hue-rotate': [{ 'hue-rotate': [M, G, z] }],
                        invert: [{ invert: ['', M, G, z] }],
                        saturate: [{ saturate: [M, G, z] }],
                        sepia: [{ sepia: ['', M, G, z] }],
                        'backdrop-filter': [
                            { 'backdrop-filter': ['', 'none', G, z] },
                        ],
                        'backdrop-blur': [{ 'backdrop-blur': eh() }],
                        'backdrop-brightness': [
                            { 'backdrop-brightness': [M, G, z] },
                        ],
                        'backdrop-contrast': [
                            { 'backdrop-contrast': [M, G, z] },
                        ],
                        'backdrop-grayscale': [
                            { 'backdrop-grayscale': ['', M, G, z] },
                        ],
                        'backdrop-hue-rotate': [
                            { 'backdrop-hue-rotate': [M, G, z] },
                        ],
                        'backdrop-invert': [
                            { 'backdrop-invert': ['', M, G, z] },
                        ],
                        'backdrop-opacity': [{ 'backdrop-opacity': [M, G, z] }],
                        'backdrop-saturate': [
                            { 'backdrop-saturate': [M, G, z] },
                        ],
                        'backdrop-sepia': [{ 'backdrop-sepia': ['', M, G, z] }],
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
                                    G,
                                    z,
                                ],
                            },
                        ],
                        'transition-behavior': [
                            { transition: ['normal', 'discrete'] },
                        ],
                        duration: [{ duration: [M, 'initial', G, z] }],
                        ease: [{ ease: ['linear', 'initial', v, G, z] }],
                        delay: [{ delay: [M, G, z] }],
                        animate: [{ animate: ['none', y, G, z] }],
                        backface: [{ backface: ['hidden', 'visible'] }],
                        perspective: [{ perspective: [m, G, z] }],
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
                            { transform: [G, z, '', 'none', 'gpu', 'cpu'] },
                        ],
                        'transform-origin': [{ origin: k() }],
                        'transform-style': [{ transform: ['3d', 'flat'] }],
                        translate: [{ translate: eg() }],
                        'translate-x': [{ 'translate-x': eg() }],
                        'translate-y': [{ 'translate-y': eg() }],
                        'translate-z': [{ 'translate-z': eg() }],
                        'translate-none': ['translate-none'],
                        accent: [{ accent: en() }],
                        appearance: [{ appearance: ['none', 'auto'] }],
                        'caret-color': [{ caret: en() }],
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
                                    G,
                                    z,
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
                                    G,
                                    z,
                                ],
                            },
                        ],
                        fill: [{ fill: ['none', ...en()] }],
                        'stroke-w': [{ stroke: [M, X, B, W] }],
                        stroke: [{ stroke: ['none', ...en()] }],
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
        6497: (e, t, n) => {
            n.d(t, { N: () => x })
            var r = n(5155),
                i = n(2115),
                o = n(296),
                s = n(4416),
                a = n(6553),
                l = n(1983),
                u = n(9686),
                c = n(1402),
                d = n(3127)
            function h(e, t) {
                if ('function' == typeof e) return e(t)
                null != e && (e.current = t)
            }
            class p extends i.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            n = ((0, c.s)(e) && e.offsetWidth) || 0,
                            r = this.props.sizeRef.current
                        ;(r.height = t.offsetHeight || 0),
                            (r.width = t.offsetWidth || 0),
                            (r.top = t.offsetTop),
                            (r.left = t.offsetLeft),
                            (r.right = n - r.width - r.left)
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }
            function f(e) {
                let { children: t, isPresent: n, anchorX: o, root: s } = e,
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
                                    let n = !1,
                                        r = e.map((e) => {
                                            let r = h(e, t)
                                            return (
                                                n ||
                                                    'function' != typeof r ||
                                                    (n = !0),
                                                r
                                            )
                                        })
                                    if (n)
                                        return () => {
                                            for (let t = 0; t < r.length; t++) {
                                                let n = r[t]
                                                'function' == typeof n
                                                    ? n()
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
                            top: r,
                            left: i,
                            right: d,
                        } = u.current
                        if (n || !l.current || !e || !t) return
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
                                            r,
                                            'px !important;\n          }\n        '
                                        )
                                ),
                            () => {
                                p.contains(h) && p.removeChild(h)
                            }
                        )
                    }, [n]),
                    (0, r.jsx)(p, {
                        isPresent: n,
                        childRef: l,
                        sizeRef: u,
                        children: i.cloneElement(t, { ref: f }),
                    })
                )
            }
            let m = (e) => {
                let {
                        children: t,
                        initial: n,
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
                                initial: n,
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
                        (t = (0, r.jsx)(f, {
                            isPresent: o,
                            anchorX: p,
                            root: m,
                            children: t,
                        })),
                    (0, r.jsx)(u.t.Provider, { value: x, children: t })
                )
            }
            function g() {
                return new Map()
            }
            var v = n(5601)
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
                        custom: n,
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
                    [T, A] = (0, i.useState)(w),
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
                let R = []
                if (w !== T) {
                    let e = [...w]
                    for (let t = 0; t < C.length; t++) {
                        let n = C[t],
                            r = y(n)
                        k.includes(r) || (e.splice(t, 0, n), R.push(n))
                    }
                    return (
                        'wait' === d && R.length && (e = R), M(b(e)), A(w), null
                    )
                }
                let { forceRender: j } = (0, i.useContext)(o.L)
                return (0, r.jsx)(r.Fragment, {
                    children: C.map((e) => {
                        let t = y(e),
                            i = (!h || !!g) && (w === C || k.includes(t))
                        return (0, r.jsx)(
                            m,
                            {
                                isPresent: i,
                                initial: (!E.current || !!l) && void 0,
                                custom: n,
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
                                                  (null == j || j(),
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
        6553: (e, t, n) => {
            n.d(t, { E: () => i })
            var r = n(2115)
            let i = n(3577).B ? r.useLayoutEffect : r.useEffect
        },
        6842: (e, t, n) => {
            n.d(t, { C: () => s })
            var r = n(2115),
                i = n(4446),
                o = n(4129),
                s = (e) => {
                    let { present: t, children: n } = e,
                        s = (function (e) {
                            var t, n
                            let [i, s] = r.useState(),
                                l = r.useRef(null),
                                u = r.useRef(e),
                                c = r.useRef('none'),
                                [d, h] =
                                    ((t = e ? 'mounted' : 'unmounted'),
                                    (n = {
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
                                    r.useReducer((e, t) => {
                                        let r = n[e][t]
                                        return null != r ? r : e
                                    }, t))
                            return (
                                r.useEffect(() => {
                                    let e = a(l.current)
                                    c.current = 'mounted' === d ? e : 'none'
                                }, [d]),
                                (0, o.N)(() => {
                                    let t = l.current,
                                        n = u.current
                                    if (n !== e) {
                                        let r = c.current,
                                            i = a(t)
                                        e
                                            ? h('MOUNT')
                                            : 'none' === i ||
                                              (null == t
                                                  ? void 0
                                                  : t.display) === 'none'
                                            ? h('UNMOUNT')
                                            : n && r !== i
                                            ? h('ANIMATION_OUT')
                                            : h('UNMOUNT'),
                                            (u.current = e)
                                    }
                                }, [e, h]),
                                (0, o.N)(() => {
                                    if (i) {
                                        var e
                                        let t,
                                            n =
                                                null !=
                                                (e =
                                                    i.ownerDocument.defaultView)
                                                    ? e
                                                    : window,
                                            r = (e) => {
                                                let r = a(l.current).includes(
                                                    CSS.escape(e.animationName)
                                                )
                                                if (
                                                    e.target === i &&
                                                    r &&
                                                    (h('ANIMATION_END'),
                                                    !u.current)
                                                ) {
                                                    let e =
                                                        i.style
                                                            .animationFillMode
                                                    ;(i.style.animationFillMode =
                                                        'forwards'),
                                                        (t = n.setTimeout(
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
                                                r
                                            ),
                                            i.addEventListener(
                                                'animationend',
                                                r
                                            ),
                                            () => {
                                                n.clearTimeout(t),
                                                    i.removeEventListener(
                                                        'animationstart',
                                                        o
                                                    ),
                                                    i.removeEventListener(
                                                        'animationcancel',
                                                        r
                                                    ),
                                                    i.removeEventListener(
                                                        'animationend',
                                                        r
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
                                    ref: r.useCallback((e) => {
                                        ;(l.current = e
                                            ? getComputedStyle(e)
                                            : null),
                                            s(e)
                                    }, []),
                                }
                            )
                        })(t),
                        l =
                            'function' == typeof n
                                ? n({ present: s.isPresent })
                                : r.Children.only(n),
                        u = (0, i.s)(
                            s.ref,
                            (function (e) {
                                var t, n
                                let r =
                                        null ==
                                        (t = Object.getOwnPropertyDescriptor(
                                            e.props,
                                            'ref'
                                        ))
                                            ? void 0
                                            : t.get,
                                    i =
                                        r &&
                                        'isReactWarning' in r &&
                                        r.isReactWarning
                                return i
                                    ? e.ref
                                    : (i =
                                          (r =
                                              null ==
                                              (n =
                                                  Object.getOwnPropertyDescriptor(
                                                      e,
                                                      'ref'
                                                  ))
                                                  ? void 0
                                                  : n.get) &&
                                          'isReactWarning' in r &&
                                          r.isReactWarning)
                                    ? e.props.ref
                                    : e.props.ref || e.ref
                            })(l)
                        )
                    return 'function' == typeof n || s.isPresent
                        ? r.cloneElement(l, { ref: u })
                        : null
                }
            function a(e) {
                return (null == e ? void 0 : e.animationName) || 'none'
            }
            s.displayName = 'Presence'
        },
        7161: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('instagram', [
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
        7333: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('linkedin', [
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
        7378: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('twitter', [
                [
                    'path',
                    {
                        d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
                        key: 'pff0z6',
                    },
                ],
            ])
        },
        7389: (e, t, n) => {
            n.r(t), n.d(t, { _: () => r })
            function r(e, t) {
                if (null == e) return {}
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {}
                        var n,
                            r,
                            i = {},
                            o = Object.keys(e)
                        for (r = 0; r < o.length; r++)
                            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
                        return i
                    })(e, t)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e)
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(t.indexOf(n) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    n
                                ) &&
                                (i[n] = e[n])
                }
                return i
            }
        },
        8142: (e, t, n) => {
            n.d(t, { sG: () => u, hO: () => c })
            var r = n(2115),
                i = n(7650),
                o = n(4446),
                s = n(5155),
                a = Symbol('radix.slottable')
            function l(e) {
                return (
                    r.isValidElement(e) &&
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
                let n = (function (e) {
                        let t = (function (e) {
                                let t = r.forwardRef((e, t) => {
                                    let { children: n, ...i } = e
                                    if (r.isValidElement(n)) {
                                        var s
                                        let e,
                                            a,
                                            l =
                                                ((s = n),
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
                                                let n = { ...t }
                                                for (let r in t) {
                                                    let i = e[r],
                                                        o = t[r]
                                                    ;/^on[A-Z]/.test(r)
                                                        ? i && o
                                                            ? (n[r] = (
                                                                  ...e
                                                              ) => {
                                                                  let t = o(
                                                                      ...e
                                                                  )
                                                                  return (
                                                                      i(...e), t
                                                                  )
                                                              })
                                                            : i && (n[r] = i)
                                                        : 'style' === r
                                                        ? (n[r] = {
                                                              ...i,
                                                              ...o,
                                                          })
                                                        : 'className' === r &&
                                                          (n[r] = [i, o]
                                                              .filter(Boolean)
                                                              .join(' '))
                                                }
                                                return { ...e, ...n }
                                            })(i, n.props)
                                        return (
                                            n.type !== r.Fragment &&
                                                (u.ref = t
                                                    ? (0, o.t)(t, l)
                                                    : l),
                                            r.cloneElement(n, u)
                                        )
                                    }
                                    return r.Children.count(n) > 1
                                        ? r.Children.only(null)
                                        : null
                                })
                                return (t.displayName = `${e}.SlotClone`), t
                            })(e),
                            n = r.forwardRef((e, n) => {
                                let { children: i, ...o } = e,
                                    a = r.Children.toArray(i),
                                    u = a.find(l)
                                if (u) {
                                    let e = u.props.children,
                                        i = a.map((t) =>
                                            t !== u
                                                ? t
                                                : r.Children.count(e) > 1
                                                ? r.Children.only(null)
                                                : r.isValidElement(e)
                                                ? e.props.children
                                                : null
                                        )
                                    return (0, s.jsx)(t, {
                                        ...o,
                                        ref: n,
                                        children: r.isValidElement(e)
                                            ? r.cloneElement(e, void 0, i)
                                            : null,
                                    })
                                }
                                return (0, s.jsx)(t, {
                                    ...o,
                                    ref: n,
                                    children: i,
                                })
                            })
                        return (n.displayName = `${e}.Slot`), n
                    })(`Primitive.${t}`),
                    i = r.forwardRef((e, r) => {
                        let { asChild: i, ...o } = e
                        return (
                            'undefined' != typeof window &&
                                (window[Symbol.for('radix-ui')] = !0),
                            (0, s.jsx)(i ? n : t, { ...o, ref: r })
                        )
                    })
                return (i.displayName = `Primitive.${t}`), { ...e, [t]: i }
            }, {})
            function c(e, t) {
                e && i.flushSync(() => e.dispatchEvent(t))
            }
        },
        8714: (e, t, n) => {
            n.d(t, {
                bm: () => tu,
                UC: () => ts,
                VY: () => tl,
                hJ: () => to,
                ZL: () => ti,
                bL: () => tn,
                hE: () => ta,
                l9: () => tr,
            })
            var r,
                i,
                o,
                s = n(1983),
                a = n(5849),
                l = n(7389),
                u = n(2115),
                c = n(2556),
                d = n(4446),
                h = n(3468),
                p = n(8946),
                f = n(3558),
                m = n(8142),
                g = n(222),
                v = n(5155),
                y = 'dismissableLayer.update',
                b = u.createContext({
                    layers: new Set(),
                    layersWithOutsidePointerEventsDisabled: new Set(),
                    branches: new Set(),
                }),
                x = u.forwardRef((e, t) => {
                    var n, r
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
                        [T, A] = u.useState(null),
                        C =
                            null != (r = null == T ? void 0 : T.ownerDocument)
                                ? r
                                : null == (n = globalThis)
                                ? void 0
                                : n.document,
                        [, M] = u.useState({}),
                        R = (0, d.s)(t, (e) => A(e)),
                        j = Array.from(S.layers),
                        [D] = [
                            ...S.layersWithOutsidePointerEventsDisabled,
                        ].slice(-1),
                        _ = j.indexOf(D),
                        O = T ? j.indexOf(T) : -1,
                        V = S.layersWithOutsidePointerEventsDisabled.size > 0,
                        L = O >= _,
                        I = (function (e) {
                            var t
                            let n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null == (t = globalThis)
                                        ? void 0
                                        : t.document,
                                r = (0, g.c)(e),
                                i = u.useRef(!1),
                                o = u.useRef(() => {})
                            return (
                                u.useEffect(() => {
                                    let e = (e) => {
                                            if (e.target && !i.current) {
                                                let t = function () {
                                                        k(
                                                            'dismissableLayer.pointerDownOutside',
                                                            r,
                                                            i,
                                                            { discrete: !0 }
                                                        )
                                                    },
                                                    i = { originalEvent: e }
                                                'touch' === e.pointerType
                                                    ? (n.removeEventListener(
                                                          'click',
                                                          o.current
                                                      ),
                                                      (o.current = t),
                                                      n.addEventListener(
                                                          'click',
                                                          o.current,
                                                          { once: !0 }
                                                      ))
                                                    : t()
                                            } else
                                                n.removeEventListener(
                                                    'click',
                                                    o.current
                                                )
                                            i.current = !1
                                        },
                                        t = window.setTimeout(() => {
                                            n.addEventListener('pointerdown', e)
                                        }, 0)
                                    return () => {
                                        window.clearTimeout(t),
                                            n.removeEventListener(
                                                'pointerdown',
                                                e
                                            ),
                                            n.removeEventListener(
                                                'click',
                                                o.current
                                            )
                                    }
                                }, [n, r]),
                                { onPointerDownCapture: () => (i.current = !0) }
                            )
                        })((e) => {
                            let t = e.target,
                                n = [...S.branches].some((e) => e.contains(t))
                            L &&
                                !n &&
                                (null == p || p(e),
                                null == x || x(e),
                                e.defaultPrevented || null == E || E())
                        }, C),
                        F = (function (e) {
                            var t
                            let n =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : null == (t = globalThis)
                                        ? void 0
                                        : t.document,
                                r = (0, g.c)(e),
                                i = u.useRef(!1)
                            return (
                                u.useEffect(() => {
                                    let e = (e) => {
                                        e.target &&
                                            !i.current &&
                                            k(
                                                'dismissableLayer.focusOutside',
                                                r,
                                                { originalEvent: e },
                                                { discrete: !1 }
                                            )
                                    }
                                    return (
                                        n.addEventListener('focusin', e),
                                        () =>
                                            n.removeEventListener('focusin', e)
                                    )
                                }, [n, r]),
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
                            let n = (0, g.c)(e)
                            u.useEffect(() => {
                                let e = (e) => {
                                    'Escape' === e.key && n(e)
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
                            }, [n, t])
                        })((e) => {
                            O === S.layers.size - 1 &&
                                (null == h || h(e),
                                !e.defaultPrevented &&
                                    E &&
                                    (e.preventDefault(), E()))
                        }, C),
                        u.useEffect(() => {
                            if (T)
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
                                            T
                                        )),
                                    S.layers.add(T),
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
                        }, [T, C, o, S]),
                        u.useEffect(
                            () => () => {
                                T &&
                                    (S.layers.delete(T),
                                    S.layersWithOutsidePointerEventsDisabled.delete(
                                        T
                                    ),
                                    w())
                            },
                            [T, S]
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
                                ref: R,
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
                                    F.onFocusCapture
                                ),
                                onBlurCapture: (0, c.mK)(
                                    e.onBlurCapture,
                                    F.onBlurCapture
                                ),
                                onPointerDownCapture: (0, c.mK)(
                                    e.onPointerDownCapture,
                                    I.onPointerDownCapture
                                ),
                            })
                        )
                    )
                })
            function w() {
                let e = new CustomEvent(y)
                document.dispatchEvent(e)
            }
            function k(e, t, n, r) {
                let { discrete: i } = r,
                    o = n.originalEvent.target,
                    s = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: n,
                    })
                t && o.addEventListener(e, t, { once: !0 }),
                    i ? (0, m.hO)(o, s) : o.dispatchEvent(s)
            }
            ;(x.displayName = 'DismissableLayer'),
                (u.forwardRef((e, t) => {
                    let n = u.useContext(b),
                        r = u.useRef(null),
                        i = (0, d.s)(t, r)
                    return (
                        u.useEffect(() => {
                            let e = r.current
                            if (e)
                                return (
                                    n.branches.add(e),
                                    () => {
                                        n.branches.delete(e)
                                    }
                                )
                        }, [n.branches]),
                        (0, v.jsx)(
                            m.sG.div,
                            (0, a._)((0, s._)({}, e), { ref: i })
                        )
                    )
                }).displayName = 'DismissableLayerBranch')
            var E = 'focusScope.autoFocusOnMount',
                P = 'focusScope.autoFocusOnUnmount',
                S = { bubbles: !1, cancelable: !0 },
                T = u.forwardRef((e, t) => {
                    let {
                            loop: n = !1,
                            trapped: r = !1,
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
                        if (r) {
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
                            let n = new MutationObserver(function (e) {
                                if (document.activeElement === document.body)
                                    for (let t of e)
                                        t.removedNodes.length > 0 && M(h)
                            })
                            return (
                                h &&
                                    n.observe(h, {
                                        childList: !0,
                                        subtree: !0,
                                    }),
                                () => {
                                    document.removeEventListener('focusin', e),
                                        document.removeEventListener(
                                            'focusout',
                                            t
                                        ),
                                        n.disconnect()
                                }
                            )
                        }
                    }, [r, h, w.paused]),
                        u.useEffect(() => {
                            if (h) {
                                R.add(w)
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
                                                    n = document.activeElement
                                                for (let r of e)
                                                    if (
                                                        (M(r, { select: t }),
                                                        document.activeElement !==
                                                            n)
                                                    )
                                                        return
                                            })(
                                                A(h).filter(
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
                                                R.remove(w)
                                        }, 0)
                                }
                            }
                        }, [h, f, y, w])
                    let k = u.useCallback(
                        (e) => {
                            if ((!n && !r) || w.paused) return
                            let t =
                                    'Tab' === e.key &&
                                    !e.altKey &&
                                    !e.ctrlKey &&
                                    !e.metaKey,
                                i = document.activeElement
                            if (t && i) {
                                let t = e.currentTarget,
                                    [r, o] = (function (e) {
                                        let t = A(e)
                                        return [C(t, e), C(t.reverse(), e)]
                                    })(t)
                                r && o
                                    ? e.shiftKey || i !== o
                                        ? e.shiftKey &&
                                          i === r &&
                                          (e.preventDefault(),
                                          n && M(o, { select: !0 }))
                                        : (e.preventDefault(),
                                          n && M(r, { select: !0 }))
                                    : i === t && e.preventDefault()
                            }
                        },
                        [n, r, w.paused]
                    )
                    return (0, v.jsx)(
                        m.sG.div,
                        (0, a._)((0, s._)({ tabIndex: -1 }, c), {
                            ref: x,
                            onKeyDown: k,
                        })
                    )
                })
            function A(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: (e) => {
                            let t = 'INPUT' === e.tagName && 'hidden' === e.type
                            return e.disabled || e.hidden || t
                                ? NodeFilter.FILTER_SKIP
                                : e.tabIndex >= 0
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP
                        },
                    })
                for (; n.nextNode(); ) t.push(n.currentNode)
                return t
            }
            function C(e, t) {
                for (let n of e)
                    if (
                        !(function (e, t) {
                            let { upTo: n } = t
                            if ('hidden' === getComputedStyle(e).visibility)
                                return !0
                            for (; e && (void 0 === n || e !== n); ) {
                                if ('none' === getComputedStyle(e).display)
                                    return !0
                                e = e.parentElement
                            }
                            return !1
                        })(n, { upTo: t })
                    )
                        return n
            }
            function M(e) {
                let { select: t = !1 } =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                if (e && e.focus) {
                    var n
                    let r = document.activeElement
                    e.focus({ preventScroll: !0 }),
                        e !== r &&
                            (n = e) instanceof HTMLInputElement &&
                            'select' in n &&
                            t &&
                            e.select()
                }
            }
            T.displayName = 'FocusScope'
            var R = (function () {
                let e = []
                return {
                    add(t) {
                        let n = e[0]
                        t !== n && (null == n || n.pause()),
                            (e = j(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n
                        null == (n = (e = j(e, t))[0]) || n.resume()
                    },
                }
            })()
            function j(e, t) {
                let n = [...e],
                    r = n.indexOf(t)
                return -1 !== r && n.splice(r, 1), n
            }
            var D = n(7650),
                _ = n(4129),
                O = u.forwardRef((e, t) => {
                    var n, r
                    let { container: i } = e,
                        o = (0, l._)(e, ['container']),
                        [c, d] = u.useState(!1)
                    ;(0, _.N)(() => d(!0), [])
                    let h =
                        i ||
                        (c &&
                            (null == (r = globalThis) ||
                            null == (n = r.document)
                                ? void 0
                                : n.body))
                    return h
                        ? D.createPortal(
                              (0, v.jsx)(
                                  m.sG.div,
                                  (0, a._)((0, s._)({}, o), { ref: t })
                              ),
                              h
                          )
                        : null
                })
            O.displayName = 'Portal'
            var V = n(6842),
                L = 0
            function I() {
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
            var F = function () {
                return (F =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                    (e[i] = t[i])
                        return e
                    }).apply(this, arguments)
            }
            function N(e, t) {
                var n = {}
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                        0 > t.indexOf(r) &&
                        (n[r] = e[r])
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                )
                    for (
                        var i = 0, r = Object.getOwnPropertySymbols(e);
                        i < r.length;
                        i++
                    )
                        0 > t.indexOf(r[i]) &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                r[i]
                            ) &&
                            (n[r[i]] = e[r[i]])
                return n
            }
            Object.create
            Object.create
            var z =
                    ('function' == typeof SuppressedError && SuppressedError,
                    'right-scroll-bar-position'),
                B = 'width-before-scroll-bar'
            function W(e, t) {
                return 'function' == typeof e ? e(t) : e && (e.current = t), e
            }
            var U =
                    'undefined' != typeof window
                        ? u.useLayoutEffect
                        : u.useEffect,
                $ = new WeakMap()
            function K(e) {
                return e
            }
            var G = (function (e) {
                    void 0 === e && (e = {})
                    var t,
                        n,
                        r,
                        i =
                            (void 0 === t && (t = K),
                            (n = []),
                            (r = !1),
                            {
                                read: function () {
                                    if (r)
                                        throw Error(
                                            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                                        )
                                    return n.length ? n[n.length - 1] : null
                                },
                                useMedium: function (e) {
                                    var i = t(e, r)
                                    return (
                                        n.push(i),
                                        function () {
                                            n = n.filter(function (e) {
                                                return e !== i
                                            })
                                        }
                                    )
                                },
                                assignSyncMedium: function (e) {
                                    for (r = !0; n.length; ) {
                                        var t = n
                                        ;(n = []), t.forEach(e)
                                    }
                                    n = {
                                        push: function (t) {
                                            return e(t)
                                        },
                                        filter: function () {
                                            return n
                                        },
                                    }
                                },
                                assignMedium: function (e) {
                                    r = !0
                                    var t = []
                                    if (n.length) {
                                        var i = n
                                        ;(n = []), i.forEach(e), (t = n)
                                    }
                                    var o = function () {
                                            var n = t
                                            ;(t = []), n.forEach(e)
                                        },
                                        s = function () {
                                            return Promise.resolve().then(o)
                                        }
                                    s(),
                                        (n = {
                                            push: function (e) {
                                                t.push(e), s()
                                            },
                                            filter: function (e) {
                                                return (t = t.filter(e)), n
                                            },
                                        })
                                },
                            })
                    return (i.options = F({ async: !0, ssr: !1 }, e)), i
                })(),
                X = function () {},
                Y = u.forwardRef(function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = u.useRef(null),
                        a = u.useState({
                            onScrollCapture: X,
                            onWheelCapture: X,
                            onTouchMoveCapture: X,
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
                        P = N(e, [
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
                            ((n = [s, t]),
                            (r = function (e) {
                                return n.forEach(function (t) {
                                    return W(t, e)
                                })
                            }),
                            ((i = (0, u.useState)(function () {
                                return {
                                    value: null,
                                    callback: r,
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
                            })[0]).callback = r),
                            (o = i.facade),
                            U(
                                function () {
                                    var e = $.get(o)
                                    if (e) {
                                        var t = new Set(e),
                                            r = new Set(n),
                                            i = o.current
                                        t.forEach(function (e) {
                                            r.has(e) || W(e, null)
                                        }),
                                            r.forEach(function (e) {
                                                t.has(e) || W(e, i)
                                            })
                                    }
                                    $.set(o, n)
                                },
                                [n]
                            ),
                            o),
                        T = F(F({}, P), l)
                    return u.createElement(
                        u.Fragment,
                        null,
                        m &&
                            u.createElement(v, {
                                sideCar: G,
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
                                  F(F({}, T), { ref: S })
                              )
                            : u.createElement(
                                  void 0 === k ? 'div' : k,
                                  F({}, T, { className: p, ref: S }),
                                  h
                              )
                    )
                })
            ;(Y.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
                (Y.classNames = { fullWidth: B, zeroRight: z })
            var q = function (e) {
                var t = e.sideCar,
                    n = N(e, ['sideCar'])
                if (!t)
                    throw Error(
                        'Sidecar: please provide `sideCar` property to import the right car'
                    )
                var r = t.read()
                if (!r) throw Error('Sidecar medium not found')
                return u.createElement(r, F({}, n))
            }
            q.isSideCarExport = !0
            var H = function () {
                    var e = 0,
                        t = null
                    return {
                        add: function (r) {
                            if (
                                0 == e &&
                                (t = (function () {
                                    if (!document) return null
                                    var e = document.createElement('style')
                                    e.type = 'text/css'
                                    var t = o || n.nc
                                    return t && e.setAttribute('nonce', t), e
                                })())
                            ) {
                                var i, s
                                ;(i = t).styleSheet
                                    ? (i.styleSheet.cssText = r)
                                    : i.appendChild(document.createTextNode(r)),
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
                Z = function () {
                    var e = H()
                    return function (t, n) {
                        u.useEffect(
                            function () {
                                return (
                                    e.add(t),
                                    function () {
                                        e.remove()
                                    }
                                )
                            },
                            [t && n]
                        )
                    }
                },
                Q = function () {
                    var e = Z()
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
                        n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                        r = t['padding' === e ? 'paddingTop' : 'marginTop'],
                        i = t['padding' === e ? 'paddingRight' : 'marginRight']
                    return [ee(n), ee(r), ee(i)]
                },
                en = function (e) {
                    if (
                        (void 0 === e && (e = 'margin'),
                        'undefined' == typeof window)
                    )
                        return J
                    var t = et(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0]),
                    }
                },
                er = Q(),
                ei = 'data-scroll-locked',
                eo = function (e, t, n, r) {
                    var i = e.left,
                        o = e.top,
                        s = e.right,
                        a = e.gap
                    return (
                        void 0 === n && (n = 'margin'),
                        '\n  .'
                            .concat(
                                'with-scroll-bars-hidden',
                                ' {\n   overflow: hidden '
                            )
                            .concat(r, ';\n   padding-right: ')
                            .concat(a, 'px ')
                            .concat(r, ';\n  }\n  body[')
                            .concat(ei, '] {\n    overflow: hidden ')
                            .concat(
                                r,
                                ';\n    overscroll-behavior: contain;\n    '
                            )
                            .concat(
                                [
                                    t && 'position: relative '.concat(r, ';'),
                                    'margin' === n &&
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
                                            .concat(r, ';\n    '),
                                    'padding' === n &&
                                        'padding-right: '
                                            .concat(a, 'px ')
                                            .concat(r, ';'),
                                ]
                                    .filter(Boolean)
                                    .join(''),
                                '\n  }\n  \n  .'
                            )
                            .concat(z, ' {\n    right: ')
                            .concat(a, 'px ')
                            .concat(r, ';\n  }\n  \n  .')
                            .concat(B, ' {\n    margin-right: ')
                            .concat(a, 'px ')
                            .concat(r, ';\n  }\n  \n  .')
                            .concat(z, ' .')
                            .concat(z, ' {\n    right: 0 ')
                            .concat(r, ';\n  }\n  \n  .')
                            .concat(B, ' .')
                            .concat(B, ' {\n    margin-right: 0 ')
                            .concat(r, ';\n  }\n  \n  body[')
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
                        n = e.noImportant,
                        r = e.gapMode,
                        i = void 0 === r ? 'margin' : r
                    ea()
                    var o = u.useMemo(
                        function () {
                            return en(i)
                        },
                        [i]
                    )
                    return u.createElement(er, {
                        styles: eo(o, !t, i, n ? '' : '!important'),
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
                    var n = window.getComputedStyle(e)
                    return (
                        'hidden' !== n[t] &&
                        (n.overflowY !== n.overflowX ||
                            'TEXTAREA' === e.tagName ||
                            'visible' !== n[t])
                    )
                },
                ep = function (e, t) {
                    var n = t.ownerDocument,
                        r = t
                    do {
                        if (
                            ('undefined' != typeof ShadowRoot &&
                                r instanceof ShadowRoot &&
                                (r = r.host),
                            ef(e, r))
                        ) {
                            var i = em(e, r)
                            if (i[1] > i[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body)
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
                eg = function (e, t, n, r, i) {
                    var o,
                        s =
                            ((o = window.getComputedStyle(t).direction),
                            'h' === e && 'rtl' === o ? -1 : 1),
                        a = s * r,
                        l = n.target,
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
                ((r = function (e) {
                    var t = u.useRef([]),
                        n = u.useRef([0, 0]),
                        r = u.useRef(),
                        i = u.useState(ex++)[0],
                        o = u.useState(Q)[0],
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
                                    var t = (function (e, t, n) {
                                        if (n || 2 == arguments.length)
                                            for (
                                                var r, i = 0, o = t.length;
                                                i < o;
                                                i++
                                            )
                                                (!r && i in t) ||
                                                    (r ||
                                                        (r =
                                                            Array.prototype.slice.call(
                                                                t,
                                                                0,
                                                                i
                                                            )),
                                                    (r[i] = t[i]))
                                        return e.concat(
                                            r || Array.prototype.slice.call(t)
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
                                a = n.current,
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
                                (!r.current &&
                                    'changedTouches' in e &&
                                    (l || u) &&
                                    (r.current = i),
                                !i)
                            )
                                return !0
                            var m = r.current || i
                            return eg(m, t, e, 'h' === m ? l : u, !0)
                        }, []),
                        l = u.useCallback(function (e) {
                            if (ew.length && ew[ew.length - 1] === o) {
                                var n = 'deltaY' in e ? ey(e) : ev(e),
                                    r = t.current.filter(function (t) {
                                        var r
                                        return (
                                            t.name === e.type &&
                                            (t.target === e.target ||
                                                e.target === t.shadowParent) &&
                                            ((r = t.delta),
                                            r[0] === n[0] && r[1] === n[1])
                                        )
                                    })[0]
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault()
                                    return
                                }
                                if (!r) {
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
                        c = u.useCallback(function (e, n, r, i) {
                            var o = {
                                name: e,
                                delta: n,
                                target: r,
                                should: i,
                                shadowParent: (function (e) {
                                    for (var t = null; null !== e; )
                                        e instanceof ShadowRoot &&
                                            ((t = e.host), (e = e.host)),
                                            (e = e.parentNode)
                                    return t
                                })(r),
                            }
                            t.current.push(o),
                                setTimeout(function () {
                                    t.current = t.current.filter(function (e) {
                                        return e !== o
                                    })
                                }, 1)
                        }, []),
                        d = u.useCallback(function (e) {
                            ;(n.current = ev(e)), (r.current = void 0)
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
                G.useMedium(r),
                q)
            var eE = u.forwardRef(function (e, t) {
                return u.createElement(Y, F({}, e, { ref: t, sideCar: ek }))
            })
            eE.classNames = Y.classNames
            var eP = new WeakMap(),
                eS = new WeakMap(),
                eT = {},
                eA = 0,
                eC = function (e) {
                    return e && (e.host || eC(e.parentNode))
                },
                eM = function (e, t, n, r) {
                    var i = (Array.isArray(e) ? e : [e])
                        .map(function (e) {
                            if (t.contains(e)) return e
                            var n = eC(e)
                            return n && t.contains(n)
                                ? n
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
                    eT[n] || (eT[n] = new WeakMap())
                    var o = eT[n],
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
                                            var t = e.getAttribute(r),
                                                i = null !== t && 'false' !== t,
                                                l = (eP.get(e) || 0) + 1,
                                                u = (o.get(e) || 0) + 1
                                            eP.set(e, l),
                                                o.set(e, u),
                                                s.push(e),
                                                1 === l && i && eS.set(e, !0),
                                                1 === u &&
                                                    e.setAttribute(n, 'true'),
                                                i || e.setAttribute(r, 'true')
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
                        eA++,
                        function () {
                            s.forEach(function (e) {
                                var t = eP.get(e) - 1,
                                    i = o.get(e) - 1
                                eP.set(e, t),
                                    o.set(e, i),
                                    t ||
                                        (eS.has(e) || e.removeAttribute(r),
                                        eS.delete(e)),
                                    i || e.removeAttribute(n)
                            }),
                                --eA ||
                                    ((eP = new WeakMap()),
                                    (eP = new WeakMap()),
                                    (eS = new WeakMap()),
                                    (eT = {}))
                        }
                    )
                },
                eR = function (e, t, n) {
                    void 0 === n && (n = 'data-aria-hidden')
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        i =
                            t ||
                            ('undefined' == typeof document
                                ? null
                                : (Array.isArray(e) ? e[0] : e).ownerDocument
                                      .body)
                    return i
                        ? (r.push.apply(
                              r,
                              Array.from(
                                  i.querySelectorAll('[aria-live], script')
                              )
                          ),
                          eM(r, i, n, 'aria-hidden'))
                        : function () {
                              return null
                          }
                },
                ej = Symbol('radix.slottable')
            function eD(e) {
                return (
                    u.isValidElement(e) &&
                    'function' == typeof e.type &&
                    '__radixId' in e.type &&
                    e.type.__radixId === ej
                )
            }
            var e_ = 'Dialog',
                [eO, eV] = (0, h.A)(e_),
                [eL, eI] = eO(e_),
                eF = (e) => {
                    let {
                            __scopeDialog: t,
                            children: n,
                            open: r,
                            defaultOpen: i,
                            onOpenChange: o,
                            modal: s = !0,
                        } = e,
                        a = u.useRef(null),
                        l = u.useRef(null),
                        [c, d] = (0, f.i)({
                            prop: r,
                            defaultProp: null != i && i,
                            onChange: o,
                            caller: e_,
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
                        children: n,
                    })
                }
            eF.displayName = e_
            var eN = 'DialogTrigger',
                ez = u.forwardRef((e, t) => {
                    let { __scopeDialog: n } = e,
                        r = (0, l._)(e, ['__scopeDialog']),
                        i = eI(eN, n),
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
                                    'data-state': e6(i.open),
                                },
                                r
                            ),
                            {
                                ref: o,
                                onClick: (0, c.mK)(e.onClick, i.onOpenToggle),
                            }
                        )
                    )
                })
            ez.displayName = eN
            var eB = 'DialogPortal',
                [eW, eU] = eO(eB, { forceMount: void 0 }),
                e$ = (e) => {
                    let {
                            __scopeDialog: t,
                            forceMount: n,
                            children: r,
                            container: i,
                        } = e,
                        o = eI(eB, t)
                    return (0, v.jsx)(eW, {
                        scope: t,
                        forceMount: n,
                        children: u.Children.map(r, (e) =>
                            (0, v.jsx)(V.C, {
                                present: n || o.open,
                                children: (0, v.jsx)(O, {
                                    asChild: !0,
                                    container: i,
                                    children: e,
                                }),
                            })
                        ),
                    })
                }
            e$.displayName = eB
            var eK = 'DialogOverlay',
                eG = u.forwardRef((e, t) => {
                    let n = eU(eK, e.__scopeDialog),
                        { forceMount: r = n.forceMount } = e,
                        i = (0, l._)(e, ['forceMount']),
                        o = eI(eK, e.__scopeDialog)
                    return o.modal
                        ? (0, v.jsx)(V.C, {
                              present: r || o.open,
                              children: (0, v.jsx)(
                                  eY,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              ),
                          })
                        : null
                })
            eG.displayName = eK
            var eX = (function (e) {
                    let t = (function (e) {
                            let t = u.forwardRef((e, t) => {
                                let { children: n, ...r } = e
                                if (u.isValidElement(n)) {
                                    var i
                                    let e,
                                        o,
                                        s =
                                            ((i = n),
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
                                            let n = { ...t }
                                            for (let r in t) {
                                                let i = e[r],
                                                    o = t[r]
                                                ;/^on[A-Z]/.test(r)
                                                    ? i && o
                                                        ? (n[r] = (...e) => {
                                                              let t = o(...e)
                                                              return i(...e), t
                                                          })
                                                        : i && (n[r] = i)
                                                    : 'style' === r
                                                    ? (n[r] = { ...i, ...o })
                                                    : 'className' === r &&
                                                      (n[r] = [i, o]
                                                          .filter(Boolean)
                                                          .join(' '))
                                            }
                                            return { ...e, ...n }
                                        })(r, n.props)
                                    return (
                                        n.type !== u.Fragment &&
                                            (a.ref = t ? (0, d.t)(t, s) : s),
                                        u.cloneElement(n, a)
                                    )
                                }
                                return u.Children.count(n) > 1
                                    ? u.Children.only(null)
                                    : null
                            })
                            return (t.displayName = `${e}.SlotClone`), t
                        })(e),
                        n = u.forwardRef((e, n) => {
                            let { children: r, ...i } = e,
                                o = u.Children.toArray(r),
                                s = o.find(eD)
                            if (s) {
                                let e = s.props.children,
                                    r = o.map((t) =>
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
                                    ref: n,
                                    children: u.isValidElement(e)
                                        ? u.cloneElement(e, void 0, r)
                                        : null,
                                })
                            }
                            return (0, v.jsx)(t, { ...i, ref: n, children: r })
                        })
                    return (n.displayName = `${e}.Slot`), n
                })('DialogOverlay.RemoveScroll'),
                eY = u.forwardRef((e, t) => {
                    let { __scopeDialog: n } = e,
                        r = (0, l._)(e, ['__scopeDialog']),
                        i = eI(eK, n)
                    return (0, v.jsx)(eE, {
                        as: eX,
                        allowPinchZoom: !0,
                        shards: [i.contentRef],
                        children: (0, v.jsx)(
                            m.sG.div,
                            (0, a._)(
                                (0, s._)({ 'data-state': e6(i.open) }, r),
                                {
                                    ref: t,
                                    style: (0, s._)(
                                        { pointerEvents: 'auto' },
                                        r.style
                                    ),
                                }
                            )
                        ),
                    })
                }),
                eq = 'DialogContent',
                eH = u.forwardRef((e, t) => {
                    let n = eU(eq, e.__scopeDialog),
                        { forceMount: r = n.forceMount } = e,
                        i = (0, l._)(e, ['forceMount']),
                        o = eI(eq, e.__scopeDialog)
                    return (0, v.jsx)(V.C, {
                        present: r || o.open,
                        children: o.modal
                            ? (0, v.jsx)(
                                  eZ,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              )
                            : (0, v.jsx)(
                                  eQ,
                                  (0, a._)((0, s._)({}, i), { ref: t })
                              ),
                    })
                })
            eH.displayName = eq
            var eZ = u.forwardRef((e, t) => {
                    let n = eI(eq, e.__scopeDialog),
                        r = u.useRef(null),
                        i = (0, d.s)(t, n.contentRef, r)
                    return (
                        u.useEffect(() => {
                            let e = r.current
                            if (e) return eR(e)
                        }, []),
                        (0, v.jsx)(
                            eJ,
                            (0, a._)((0, s._)({}, e), {
                                ref: i,
                                trapFocus: n.open,
                                disableOutsidePointerEvents: !0,
                                onCloseAutoFocus: (0, c.mK)(
                                    e.onCloseAutoFocus,
                                    (e) => {
                                        var t
                                        e.preventDefault(),
                                            null ==
                                                (t = n.triggerRef.current) ||
                                                t.focus()
                                    }
                                ),
                                onPointerDownOutside: (0, c.mK)(
                                    e.onPointerDownOutside,
                                    (e) => {
                                        let t = e.detail.originalEvent,
                                            n =
                                                0 === t.button &&
                                                !0 === t.ctrlKey
                                        ;(2 === t.button || n) &&
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
                eQ = u.forwardRef((e, t) => {
                    let n = eI(eq, e.__scopeDialog),
                        r = u.useRef(!1),
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
                                        (r.current ||
                                            null ==
                                                (s = n.triggerRef.current) ||
                                            s.focus(),
                                        t.preventDefault()),
                                    (r.current = !1),
                                    (i.current = !1)
                            },
                            onInteractOutside: (t) => {
                                var o, s
                                null == (o = e.onInteractOutside) ||
                                    o.call(e, t),
                                    t.defaultPrevented ||
                                        ((r.current = !0),
                                        'pointerdown' ===
                                            t.detail.originalEvent.type &&
                                            (i.current = !0))
                                let a = t.target
                                ;(null == (s = n.triggerRef.current)
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
                            __scopeDialog: n,
                            trapFocus: r,
                            onOpenAutoFocus: i,
                            onCloseAutoFocus: o,
                        } = e,
                        c = (0, l._)(e, [
                            '__scopeDialog',
                            'trapFocus',
                            'onOpenAutoFocus',
                            'onCloseAutoFocus',
                        ]),
                        h = eI(eq, n),
                        p = u.useRef(null),
                        f = (0, d.s)(t, p)
                    return (
                        u.useEffect(() => {
                            var e, t
                            let n = document.querySelectorAll(
                                '[data-radix-focus-guard]'
                            )
                            return (
                                document.body.insertAdjacentElement(
                                    'afterbegin',
                                    null != (e = n[0]) ? e : I()
                                ),
                                document.body.insertAdjacentElement(
                                    'beforeend',
                                    null != (t = n[1]) ? t : I()
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
                                (0, v.jsx)(T, {
                                    asChild: !0,
                                    loop: !0,
                                    trapped: r,
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
                                                    'data-state': e6(h.open),
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
                    let { __scopeDialog: n } = e,
                        r = (0, l._)(e, ['__scopeDialog']),
                        i = eI(e0, n)
                    return (0, v.jsx)(
                        m.sG.h2,
                        (0, a._)((0, s._)({ id: i.titleId }, r), { ref: t })
                    )
                })
            e1.displayName = e0
            var e2 = 'DialogDescription',
                e5 = u.forwardRef((e, t) => {
                    let { __scopeDialog: n } = e,
                        r = (0, l._)(e, ['__scopeDialog']),
                        i = eI(e2, n)
                    return (0, v.jsx)(
                        m.sG.p,
                        (0, a._)((0, s._)({ id: i.descriptionId }, r), {
                            ref: t,
                        })
                    )
                })
            e5.displayName = e2
            var e4 = 'DialogClose',
                e3 = u.forwardRef((e, t) => {
                    let { __scopeDialog: n } = e,
                        r = (0, l._)(e, ['__scopeDialog']),
                        i = eI(e4, n)
                    return (0, v.jsx)(
                        m.sG.button,
                        (0, a._)((0, s._)({ type: 'button' }, r), {
                            ref: t,
                            onClick: (0, c.mK)(e.onClick, () =>
                                i.onOpenChange(!1)
                            ),
                        })
                    )
                })
            function e6(e) {
                return e ? 'open' : 'closed'
            }
            e3.displayName = e4
            var e8 = 'DialogTitleWarning',
                [e9, e7] = (0, h.q)(e8, {
                    contentName: eq,
                    titleName: e0,
                    docsSlug: 'dialog',
                }),
                te = (e) => {
                    let { titleId: t } = e,
                        n = e7(e8),
                        r = '`'
                            .concat(n.contentName, '` requires a `')
                            .concat(
                                n.titleName,
                                '` for the component to be accessible for screen reader users.\n\nIf you want to hide the `'
                            )
                            .concat(
                                n.titleName,
                                '`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/'
                            )
                            .concat(n.docsSlug)
                    return (
                        u.useEffect(() => {
                            t &&
                                (document.getElementById(t) || console.error(r))
                        }, [r, t]),
                        null
                    )
                },
                tt = (e) => {
                    let { contentRef: t, descriptionId: n } = e,
                        r = e7('DialogDescriptionWarning'),
                        i =
                            'Warning: Missing `Description` or `aria-describedby={undefined}` for {'.concat(
                                r.contentName,
                                '}.'
                            )
                    return (
                        u.useEffect(() => {
                            var e
                            let r =
                                null == (e = t.current)
                                    ? void 0
                                    : e.getAttribute('aria-describedby')
                            n &&
                                r &&
                                (document.getElementById(n) || console.warn(i))
                        }, [i, t, n]),
                        null
                    )
                },
                tn = eF,
                tr = ez,
                ti = e$,
                to = eG,
                ts = eH,
                ta = e1,
                tl = e5,
                tu = e3
        },
        8946: (e, t, n) => {
            n.d(t, { B: () => l })
            var r,
                i = n(2115),
                o = n(4129),
                s =
                    (r || (r = n.t(i, 2)))[' useId '.trim().toString()] ||
                    (() => void 0),
                a = 0
            function l(e) {
                let [t, n] = i.useState(s())
                return (
                    (0, o.N)(() => {
                        e || n((e) => e ?? String(a++))
                    }, [e]),
                    e || (t ? `radix-${t}` : '')
                )
            }
        },
        9451: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('monitor', [
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
        9540: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('menu', [
                ['path', { d: 'M4 5h16', key: '1tepv9' }],
                ['path', { d: 'M4 12h16', key: '1lakjw' }],
                ['path', { d: 'M4 19h16', key: '1djgab' }],
            ])
        },
        9602: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('code', [
                ['path', { d: 'm16 18 6-6-6-6', key: 'eg8j8' }],
                ['path', { d: 'm8 6-6 6 6 6', key: 'ppft3o' }],
            ])
        },
        9633: (e, t, n) => {
            n.d(t, { A: () => r })
            let r = (0, n(1847).A)('briefcase', [
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
        9686: (e, t, n) => {
            n.d(t, { t: () => r })
            let r = (0, n(2115).createContext)(null)
        },
        9862: (e, t, n) => {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'RouterContext', {
                    enumerable: !0,
                    get: function () {
                        return r
                    },
                })
            let r = n(8140)._(n(2115)).default.createContext(null)
        },
    },
])
