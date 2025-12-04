;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177],
    {
        1290: () => {},
        5379: (e, t, a) => {
            'use strict'
            a.d(t, { D: () => d, N: () => u })
            var r = a(1983),
                s = a(5849),
                n = a(2115),
                l = (e, t, a, r, s, n, l, o) => {
                    let i = document.documentElement,
                        m = ['light', 'dark']
                    function c(t) {
                        var a
                        ;(Array.isArray(e) ? e : [e]).forEach((e) => {
                            let a = 'class' === e,
                                r = a && n ? s.map((e) => n[e] || e) : s
                            a
                                ? (i.classList.remove(...r),
                                  i.classList.add(n && n[t] ? n[t] : t))
                                : i.setAttribute(e, t)
                        }),
                            (a = t),
                            o && m.includes(a) && (i.style.colorScheme = a)
                    }
                    if (r) c(r)
                    else
                        try {
                            let e = localStorage.getItem(t) || a,
                                r =
                                    l && 'system' === e
                                        ? window.matchMedia(
                                              '(prefers-color-scheme: dark)'
                                          ).matches
                                            ? 'dark'
                                            : 'light'
                                        : e
                            c(r)
                        } catch (e) {}
                },
                o = ['light', 'dark'],
                i = '(prefers-color-scheme: dark)',
                m = n.createContext(void 0),
                c = { setTheme: (e) => {}, themes: [] },
                d = () => {
                    var e
                    return null != (e = n.useContext(m)) ? e : c
                },
                u = (e) =>
                    n.useContext(m)
                        ? n.createElement(n.Fragment, null, e.children)
                        : n.createElement(y, (0, r._)({}, e)),
                h = ['light', 'dark'],
                y = (e) => {
                    let {
                            forcedTheme: t,
                            disableTransitionOnChange: a = !1,
                            enableSystem: r = !0,
                            enableColorScheme: s = !0,
                            storageKey: l = 'theme',
                            themes: c = h,
                            defaultTheme: d = r ? 'system' : 'light',
                            attribute: u = 'data-theme',
                            value: y,
                            children: g,
                            nonce: _,
                            scriptProps: k,
                        } = e,
                        [S, T] = n.useState(() => f(l, d)),
                        [E, w] = n.useState(() => ('system' === S ? p() : S)),
                        C = y ? Object.values(y) : c,
                        N = n.useCallback(
                            (e) => {
                                let t = e
                                if (!t) return
                                'system' === e && r && (t = p())
                                let n = y ? y[t] : t,
                                    l = a ? v(_) : null,
                                    i = document.documentElement,
                                    m = (e) => {
                                        'class' === e
                                            ? (i.classList.remove(...C),
                                              n && i.classList.add(n))
                                            : e.startsWith('data-') &&
                                              (n
                                                  ? i.setAttribute(e, n)
                                                  : i.removeAttribute(e))
                                    }
                                if (
                                    (Array.isArray(u) ? u.forEach(m) : m(u), s)
                                ) {
                                    let e = o.includes(d) ? d : null,
                                        a = o.includes(t) ? t : e
                                    i.style.colorScheme = a
                                }
                                null == l || l()
                            },
                            [_]
                        ),
                        P = n.useCallback(
                            (e) => {
                                let t = 'function' == typeof e ? e(S) : e
                                T(t)
                                try {
                                    localStorage.setItem(l, t)
                                } catch (e) {}
                            },
                            [S]
                        ),
                        L = n.useCallback(
                            (e) => {
                                w(p(e)),
                                    'system' === S && r && !t && N('system')
                            },
                            [S, t]
                        )
                    n.useEffect(() => {
                        let e = window.matchMedia(i)
                        return e.addListener(L), L(e), () => e.removeListener(L)
                    }, [L]),
                        n.useEffect(() => {
                            let e = (e) => {
                                e.key === l &&
                                    (e.newValue ? T(e.newValue) : P(d))
                            }
                            return (
                                window.addEventListener('storage', e),
                                () => window.removeEventListener('storage', e)
                            )
                        }, [P]),
                        n.useEffect(() => {
                            N(null != t ? t : S)
                        }, [t, S])
                    let A = n.useMemo(
                        () => ({
                            theme: S,
                            setTheme: P,
                            forcedTheme: t,
                            resolvedTheme: 'system' === S ? E : S,
                            themes: r ? [...c, 'system'] : c,
                            systemTheme: r ? E : void 0,
                        }),
                        [S, P, t, E, r, c]
                    )
                    return n.createElement(
                        m.Provider,
                        { value: A },
                        n.createElement(b, {
                            forcedTheme: t,
                            storageKey: l,
                            attribute: u,
                            enableSystem: r,
                            enableColorScheme: s,
                            defaultTheme: d,
                            value: y,
                            themes: c,
                            nonce: _,
                            scriptProps: k,
                        }),
                        g
                    )
                },
                b = n.memo((e) => {
                    let {
                            forcedTheme: t,
                            storageKey: a,
                            attribute: o,
                            enableSystem: i,
                            enableColorScheme: m,
                            defaultTheme: c,
                            value: d,
                            themes: u,
                            nonce: h,
                            scriptProps: y,
                        } = e,
                        b = JSON.stringify([o, a, c, t, u, d, i, m]).slice(
                            1,
                            -1
                        )
                    return n.createElement(
                        'script',
                        (0, s._)((0, r._)({}, y), {
                            suppressHydrationWarning: !0,
                            nonce: '',
                            dangerouslySetInnerHTML: {
                                __html: '('
                                    .concat(l.toString(), ')(')
                                    .concat(b, ')'),
                            },
                        })
                    )
                }),
                f = (e, t) => {
                    let a
                    try {
                        a = localStorage.getItem(e) || void 0
                    } catch (e) {}
                    return a || t
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
                p = (e) => (
                    e || (e = window.matchMedia(i)),
                    e.matches ? 'dark' : 'light'
                )
        },
        8199: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 8839)),
                Promise.resolve().then(a.t.bind(a, 8762, 23)),
                Promise.resolve().then(a.t.bind(a, 8280, 23)),
                Promise.resolve().then(a.t.bind(a, 1290, 23))
        },
        8280: (e) => {
            e.exports = {
                style: {
                    fontFamily: "'Play', 'Play Fallback'",
                    fontStyle: 'normal',
                },
                className: '__className_017788',
                variable: '__variable_017788',
            }
        },
        8762: (e) => {
            e.exports = {
                style: {
                    fontFamily: "'Titillium Web', 'Titillium Web Fallback'",
                    fontStyle: 'normal',
                },
                className: '__className_e0c16e',
                variable: '__variable_e0c16e',
            }
        },
        8839: (e, t, a) => {
            'use strict'
            a.d(t, { Providers: () => n })
            var r = a(5155),
                s = a(5379)
            function n(e) {
                let { children: t } = e
                return (0, r.jsx)(s.N, {
                    attribute: 'class',
                    defaultTheme: 'dark',
                    enableSystem: !1,
                    forcedTheme: 'dark',
                    disableTransitionOnChange: !1,
                    children: t,
                })
            }
        },
    },
    (e) => {
        e.O(0, [313, 441, 255, 358], () => e((e.s = 8199))), (_N_E = e.O())
    },
])
