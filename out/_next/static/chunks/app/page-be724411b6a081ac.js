;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
        919: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 8600))
        },
        8600: (e, a, t) => {
            'use strict'
            t.r(a), t.d(a, { default: () => eD })
            var s = t(5155),
                l = t(2115),
                r = t(9540),
                n = t(2821),
                i = t(5889)
            function o() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
                    a[t] = arguments[t]
                return (0, i.QP)((0, n.$)(a))
            }
            let c = (e) => {
                try {
                    let e = document.querySelector('#back-to-top-anchor')
                    e
                        ? ((function () {
                              let { location: e, history: a } = window
                              try {
                                  if ('pushState' in a)
                                      a.pushState(
                                          null,
                                          document.title,
                                          e.pathname + e.search
                                      )
                                  else {
                                      let a = document.body.scrollTop,
                                          t = document.body.scrollLeft
                                      ;(e.hash = ''),
                                          (document.body.scrollTop = a),
                                          (document.body.scrollLeft = t)
                                  }
                              } catch (e) {
                                  console.warn(
                                      'Could not remove hash from URL:',
                                      e
                                  )
                              }
                          })(),
                          e.scrollIntoView({
                              behavior: 'smooth',
                              block: 'center',
                          }))
                        : window.scrollTo({ top: 0, behavior: 'smooth' })
                } catch (e) {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }
            function d(e) {
                let { dark: a = !1, className: t } = e
                return (0, s.jsx)('a', {
                    onClick: c,
                    style: {
                        color: a ? '#263238' : '#ff5722',
                        cursor: 'pointer',
                    },
                    className: o('font-neuropol text-4xl', t),
                    children: 'SAGARSYS',
                })
            }
            var m = t(1983),
                x = t(5849),
                h = t(7389),
                u = t(8714),
                f = t(3101),
                p = t(5229)
            let j = u.bL,
                g = u.l9
            u.bm
            let v = u.ZL,
                N = l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        u.hJ,
                        (0, x._)(
                            (0, m._)(
                                {
                                    className: o(
                                        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        t
                                    ),
                                },
                                l
                            ),
                            { ref: a }
                        )
                    )
                })
            N.displayName = u.hJ.displayName
            let b = (0, f.F)(
                    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
                    {
                        variants: {
                            side: {
                                top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
                                bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
                                left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
                                right: 'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
                            },
                        },
                        defaultVariants: { side: 'right' },
                    }
                ),
                y = l.forwardRef((e, a) => {
                    var { side: t = 'right', className: l, children: r } = e,
                        n = (0, h._)(e, ['side', 'className', 'children'])
                    return (0, s.jsxs)(v, {
                        children: [
                            (0, s.jsx)(N, {}),
                            (0, s.jsxs)(
                                u.UC,
                                (0, x._)(
                                    (0, m._)(
                                        {
                                            ref: a,
                                            className: o(b({ side: t }), l),
                                        },
                                        n
                                    ),
                                    {
                                        children: [
                                            r,
                                            (0, s.jsxs)(u.bm, {
                                                className:
                                                    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                                                children: [
                                                    (0, s.jsx)(p.A, {
                                                        className: 'h-4 w-4',
                                                    }),
                                                    (0, s.jsx)('span', {
                                                        className: 'sr-only',
                                                        children: 'Close',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }
                                )
                            ),
                        ],
                    })
                })
            ;(y.displayName = u.UC.displayName),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        u.hE,
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'text-lg font-semibold text-foreground',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = u.hE.displayName),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        u.VY,
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'text-sm text-muted-foreground',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = u.VY.displayName)
            var w = t(2467)
            let k = (0, f.F)(
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    {
                        variants: {
                            variant: {
                                default:
                                    'bg-primary text-primary-foreground hover:bg-primary/90',
                                destructive:
                                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                                outline:
                                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                                secondary:
                                    'bg-secondary text-white hover:bg-[#e64a19] hover:opacity-90',
                                ghost: 'hover:bg-accent hover:text-accent-foreground',
                                link: 'text-primary underline-offset-4 hover:underline',
                            },
                            size: {
                                default: 'h-10 px-4 py-2',
                                sm: 'h-9 rounded-md px-3',
                                lg: 'h-11 rounded-md px-8',
                                icon: 'h-10 w-10',
                            },
                        },
                        defaultVariants: {
                            variant: 'default',
                            size: 'default',
                        },
                    }
                ),
                _ = l.forwardRef((e, a) => {
                    var {
                            className: t,
                            variant: l,
                            size: r,
                            asChild: n = !1,
                        } = e,
                        i = (0, h._)(e, [
                            'className',
                            'variant',
                            'size',
                            'asChild',
                        ])
                    let c = n ? w.DX : 'button'
                    return (0, s.jsx)(
                        c,
                        (0, m._)(
                            {
                                className: o(
                                    k({ variant: l, size: r, className: t })
                                ),
                                ref: a,
                            },
                            i
                        )
                    )
                })
            function C() {
                let [e, a] = (0, l.useState)(!1),
                    t = ['about', 'portfolio', 'career', 'contact'],
                    n = (e, t) => {
                        e.preventDefault()
                        let s = document.getElementById(t)
                        if (s) {
                            let e =
                                window.innerWidth < 768
                                    ? s.offsetTop
                                    : s.offsetTop - 60
                            window.scrollTo({ top: e, behavior: 'smooth' }),
                                a(!1)
                        }
                    }
                return (0, s.jsx)('header', {
                    className:
                        'sticky md:fixed top-0 left-0 right-0 z-50 bg-primary',
                    children: (0, s.jsxs)('nav', {
                        className: 'flex items-center px-4 h-[60px]',
                        children: [
                            (0, s.jsxs)(j, {
                                open: e,
                                onOpenChange: a,
                                children: [
                                    (0, s.jsx)(g, {
                                        asChild: !0,
                                        children: (0, s.jsx)(_, {
                                            variant: 'ghost',
                                            size: 'icon',
                                            className:
                                                'mr-1 text-white hover:text-white hover:bg-primary/80 md:hidden',
                                            'aria-label': 'menu',
                                            children: (0, s.jsx)(r.A, {
                                                className: 'h-6 w-6',
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)(y, {
                                        side: 'left',
                                        className:
                                            'w-[250px] bg-primary border-primary',
                                        children: (0, s.jsx)('nav', {
                                            className:
                                                'flex flex-col space-y-1',
                                            'aria-label': 'mobile navigation',
                                            children: t.map((e) =>
                                                (0, s.jsx)(
                                                    'a',
                                                    {
                                                        href: '#'.concat(e),
                                                        onClick: (a) => n(a, e),
                                                        className:
                                                            'block px-4 py-2 text-white hover:text-secondary transition-colors cursor-pointer uppercase',
                                                        children: e,
                                                    },
                                                    e
                                                )
                                            ),
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: 'flex-1 md:flex-none',
                                children: (0, s.jsx)(d, {}),
                            }),
                            (0, s.jsx)('div', {
                                className: 'hidden md:flex flex-1',
                            }),
                            (0, s.jsx)('nav', {
                                className: 'hidden md:flex items-center',
                                'aria-label': 'main site navigation',
                                children: t.map((e) =>
                                    (0, s.jsx)(
                                        'a',
                                        {
                                            href: '#'.concat(e),
                                            onClick: (a) => n(a, e),
                                            className:
                                                'px-4 py-2 text-white hover:text-secondary transition-colors cursor-pointer uppercase',
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                })
            }
            function z(e) {
                let { height: a, id: t, children: l, className: r } = e
                return (0, s.jsx)('section', {
                    id: t,
                    className: o('h-auto min-h-screen md:min-h-0', r),
                    style: a ? { height: a, minHeight: 'unset' } : void 0,
                    children: l,
                })
            }
            function A() {
                return (
                    (0, l.useEffect)(() => {
                        let e = !1,
                            a = () => {
                                if (e) return
                                let a = document.createElement('style')
                                ;(a.id = 'hero-banner-animations'),
                                    (a.type = 'text/css')
                                let t = document.getElementById(
                                    'hero-banner-animations'
                                )
                                t && t.parentNode && t.parentNode.removeChild(t)
                                let s = ''
                                for (let e = 0; e < 20; e++) {
                                    let a = e + 1,
                                        t = Math.floor(e / 10),
                                        l = Math.floor(e / 2),
                                        r = Math.ceil(a / 2),
                                        n = 123.456 * e,
                                        i = ((Math.sin(n) + 1) * 500) % 100,
                                        o = ((Math.cos(2 * n) + 1) * 500) % 100,
                                        c = i - 500,
                                        d = o - 500,
                                        m =
                                            (((Math.sin(3 * n) + 1) * 500) %
                                                100) -
                                            500,
                                        x =
                                            (((Math.cos(4 * n) + 1) * 1500) %
                                                3e3) -
                                            2500,
                                        h = i - 50 + 10 * l - 100 * t,
                                        u = o - 50 + 50 * t,
                                        f = 10 * l - 100 * t,
                                        p = 50 * t,
                                        j = 10 * r - 100 * t,
                                        g = 50 * t + (a % 2) * 50,
                                        v = 10 * r - 100 * t,
                                        N = (t + 1) * 50
                                    s += '#banner .sagarsys:nth-child('
                                        .concat(a, ') {\n  clip-path: polygon(')
                                        .concat(f, '% ')
                                        .concat(p, '%, ')
                                        .concat(j, '% ')
                                        .concat(g, '%, ')
                                        .concat(v, '% ')
                                        .concat(N, '%);\n  transform-origin: ')
                                        .concat(h, '% ')
                                        .concat(u, '%;\n  animation: fly')
                                        .concat(a, ' 5000ms ')
                                        .concat(
                                            80 * e,
                                            'ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;\n}\n@keyframes fly'
                                        )
                                        .concat(
                                            a,
                                            ' {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) rotateX('
                                        )
                                        .concat(c, 'deg) rotateY(')
                                        .concat(d, 'deg) rotateZ(')
                                        .concat(m, 'deg) translateZ(')
                                        .concat(
                                            x,
                                            'px);\n  }\n  10% {\n    opacity: 0;\n    transform: translate(-50%, -50%) rotateX('
                                        )
                                        .concat(c, 'deg) rotateY(')
                                        .concat(d, 'deg) rotateZ(')
                                        .concat(m, 'deg) translateZ(')
                                        .concat(
                                            x,
                                            'px);\n  }\n  90% {\n    opacity: 1;\n    transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);\n  }\n}\n'
                                        )
                                }
                                e ||
                                    ((a.textContent = s),
                                    document.head.appendChild(a))
                            },
                            t = setTimeout(() => {
                                requestAnimationFrame(a)
                            }, 100)
                        return () => {
                            ;(e = !0), clearTimeout(t)
                            let a = document.getElementById(
                                'hero-banner-animations'
                            )
                            a && a.parentNode && a.parentNode.removeChild(a)
                        }
                    }, []),
                    (0, s.jsx)(z, {
                        id: 'home',
                        height: '60vh',
                        children: (0, s.jsxs)('div', {
                            className:
                                'flex flex-col h-full justify-center items-center px-6 text-center mt-[60px]',
                            children: [
                                (0, s.jsx)('div', {
                                    id: 'banner',
                                    className: 'relative w-full h-full',
                                    children: Array(20)
                                        .fill(0)
                                        .map((e, a) =>
                                            (0, s.jsx)(
                                                'h1',
                                                {
                                                    className:
                                                        'sagarsys font-neuropol text-[4rem] md:text-[8rem] leading-[4rem] md:leading-[8rem] text-secondary opacity-0 absolute top-1/2 left-1/2 mix-blend-screen',
                                                    children: 'SAGARSYS',
                                                },
                                                a
                                            )
                                        ),
                                }),
                                (0, s.jsx)('div', {
                                    className: 'relative mt-16',
                                    style: { height: ''.concat(48, 'px') },
                                    children: (0, s.jsxs)('h6', {
                                        className:
                                            'text-white flex items-start overflow-hidden relative tagline-hero h-auto md:h-[24px]',
                                        style: {
                                            lineHeight: ''.concat(24, 'px'),
                                        },
                                        children: [
                                            (0, s.jsx)('div', {
                                                className:
                                                    'inline-block overflow-y-hidden w-[150px] md:w-auto',
                                                style: {
                                                    height: ''.concat(24, 'px'),
                                                },
                                                children: (0, s.jsx)('ul', {
                                                    className:
                                                        'm-0 translate-y-[1px] pl-8 pr-4 list-none text-[#ff6b47] font-bold animate-[change-text_10s_infinite] inline-block',
                                                    style: {
                                                        height: ''.concat(
                                                            24,
                                                            'px'
                                                        ),
                                                    },
                                                    children: [
                                                        'Passionate',
                                                        'Creative',
                                                        'Innovative',
                                                        'Dedicated',
                                                    ].map((e, a) =>
                                                        (0, s.jsx)(
                                                            'li',
                                                            {
                                                                style: {
                                                                    height: ''.concat(
                                                                        24,
                                                                        'px'
                                                                    ),
                                                                },
                                                                children: e,
                                                            },
                                                            a
                                                        )
                                                    ),
                                                }),
                                            }),
                                            (0, s.jsxs)('span', {
                                                className: 'pr-8',
                                                children: [
                                                    ' ',
                                                    'web developer striving to make the web a better place',
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                )
            }
            function L(e, a) {
                let [t, s] = (0, l.useState)(null),
                    [r, n] = (0, l.useState)(null),
                    [i, o] = (0, l.useState)(!0)
                return (
                    (0, l.useEffect)(() => {
                        let t = !1,
                            l = new AbortController(),
                            r = l.signal
                        return (
                            (async function () {
                                n(null), s(null), o(!0)
                                try {
                                    let a = await fetch(e, { signal: r })
                                    if (!a.ok)
                                        throw Error(
                                            'HTTP error! status: '.concat(
                                                a.status
                                            )
                                        )
                                    let l = await a.json()
                                    t || r.aborted || (s(l), o(!1))
                                } catch (l) {
                                    if (
                                        r.aborted ||
                                        (l instanceof Error &&
                                            'AbortError' === l.name)
                                    )
                                        return
                                    let e =
                                        l instanceof Error
                                            ? l
                                            : Error(String(l))
                                    console.error(
                                        'Fetch '
                                            .concat(a, ' failed: \n')
                                            .concat(e)
                                    ),
                                        t || (n(e), s(null), o(!1))
                                }
                            })(),
                            () => {
                                ;(t = !0), l.abort()
                            }
                        )
                    }, [e, a]),
                    { data: t, error: r, isLoading: i }
                )
            }
            function R() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('div', {
                            className:
                                'mb-4 bg-gray-700 rounded animate-pulse w-4/5 md:w-1/3 h-5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'mb-2 bg-gray-700 rounded animate-pulse h-3.5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'mb-2 bg-gray-700 rounded animate-pulse h-3.5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'mb-2 bg-gray-700 rounded animate-pulse h-3.5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'mb-2 bg-gray-700 rounded animate-pulse h-3.5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'mb-2 bg-gray-700 rounded animate-pulse h-3.5',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'my-8 bg-gray-700 rounded animate-pulse h-[250px]',
                        }),
                        (0, s.jsx)('div', {
                            className:
                                'ml-auto bg-gray-700 rounded animate-pulse w-full md:w-1/3 h-6',
                        }),
                    ],
                })
            }
            function S(e) {
                let { error: a } = e
                return (0, s.jsxs)('p', {
                    className: 'py-6 text-red-500',
                    children: [
                        'Oops! Looks like something went wrong: ',
                        a.message,
                        '.',
                        (0, s.jsx)('br', {}),
                        'Please try again later, by refreshing the page.',
                    ],
                })
            }
            _.displayName = 'Button'
            var D = t(5239)
            function E(e) {
                let { data: a } = e
                if (!a) return null
                let { name: t, title: l, description: r } = a,
                    n = r.split('|')
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)('h6', {
                            className: 'text-secondary text-xl mb-4',
                            children: [t, ': ', l],
                        }),
                        (0, s.jsxs)('div', {
                            className:
                                'flex items-center flex-col md:flex-row mt-8 md:mt-0',
                            children: [
                                (0, s.jsx)('div', {
                                    className:
                                        'relative rounded-full overflow-hidden flex-shrink-0 mb-8 md:mb-0 md:mr-8',
                                    style: { width: '100px', height: '100px' },
                                    children: (0, s.jsx)(D.default, {
                                        src: '/images/img/sagar.jpeg',
                                        alt: 'Sagar Sawuck',
                                        fill: !0,
                                        className: 'object-cover',
                                    }),
                                }),
                                (0, s.jsx)('div', {
                                    children: n.map((e, a) =>
                                        (0, s.jsxs)(
                                            'p',
                                            {
                                                className: 'mb-2',
                                                children: ['- ', e],
                                            },
                                            ''.concat(e, '-').concat(a)
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                })
            }
            function T() {
                let {
                    data: e,
                    error: a,
                    isLoading: t,
                } = L('/data/about.json', 'about section data')
                return (0, s.jsx)(z, {
                    id: 'about',
                    className: 'pb-12 mb-20',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto px-4',
                        children: [
                            (0, s.jsx)(E, { data: e }),
                            t && (0, s.jsx)(R, {}),
                            a && (0, s.jsx)(S, { error: a }),
                        ],
                    }),
                })
            }
            var M = t(2987)
            let Y = u.bL
            u.l9
            let P = u.ZL
            u.bm
            let F = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    u.hJ,
                    (0, m._)(
                        {
                            ref: a,
                            className: o(
                                'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                t
                            ),
                        },
                        l
                    )
                )
            })
            F.displayName = u.hJ.displayName
            let V = l.forwardRef((e, a) => {
                var { className: t, children: l } = e,
                    r = (0, h._)(e, ['className', 'children'])
                return (0, s.jsxs)(P, {
                    children: [
                        (0, s.jsx)(F, {}),
                        (0, s.jsxs)(
                            u.UC,
                            (0, x._)(
                                (0, m._)(
                                    {
                                        ref: a,
                                        className: o(
                                            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                            t
                                        ),
                                    },
                                    r
                                ),
                                {
                                    children: [
                                        l,
                                        (0, s.jsxs)(u.bm, {
                                            className:
                                                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                                            children: [
                                                (0, s.jsx)(p.A, {
                                                    className: 'h-4 w-4',
                                                }),
                                                (0, s.jsx)('span', {
                                                    className: 'sr-only',
                                                    children: 'Close',
                                                }),
                                            ],
                                        }),
                                    ],
                                }
                            )
                        ),
                    ],
                })
            })
            V.displayName = u.UC.displayName
            let Z = (e) => {
                var { className: a } = e,
                    t = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    'div',
                    (0, m._)(
                        {
                            className: o(
                                'flex flex-col space-y-1.5 text-center sm:text-left',
                                a
                            ),
                        },
                        t
                    )
                )
            }
            Z.displayName = 'DialogHeader'
            let B = (e) => {
                var { className: a } = e,
                    t = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    'div',
                    (0, m._)(
                        {
                            className: o(
                                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                                a
                            ),
                        },
                        t
                    )
                )
            }
            B.displayName = 'DialogFooter'
            let I = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    u.hE,
                    (0, m._)(
                        {
                            ref: a,
                            className: o(
                                'text-lg font-semibold leading-none tracking-tight',
                                t
                            ),
                        },
                        l
                    )
                )
            })
            ;(I.displayName = u.hE.displayName),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        u.VY,
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'text-sm text-muted-foreground',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = u.VY.displayName)
            var O = t(859)
            function U(e) {
                let { link: a, title: t, color: l = 'primary' } = e,
                    r = {
                        primary: 'text-primary',
                        secondary: 'text-secondary',
                        textPrimary: 'text-foreground',
                    }
                return a
                    ? (0, s.jsxs)('a', {
                          href: a,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          className: o(
                              'inline-flex items-center hover:underline',
                              r[l]
                          ),
                          title: 'Open website link in a new tab',
                          children: [
                              t,
                              (0, s.jsx)(O.A, {
                                  className: 'ml-1 h-4 w-4 translate-y-[2px]',
                              }),
                          ],
                      })
                    : (0, s.jsx)('span', { className: r[l], children: t })
            }
            let G = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    'div',
                    (0, m._)(
                        {
                            ref: a,
                            className: o(
                                'rounded-lg border bg-card text-card-foreground shadow-sm',
                                t
                            ),
                        },
                        l
                    )
                )
            })
            ;(G.displayName = 'Card'),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        'div',
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'flex flex-col space-y-1.5 p-6',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = 'CardHeader'),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        'h3',
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'text-2xl font-semibold leading-none tracking-tight',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = 'CardTitle'),
                (l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        'p',
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'text-sm text-muted-foreground',
                                    t
                                ),
                            },
                            l
                        )
                    )
                }).displayName = 'CardDescription')
            let H = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    'div',
                    (0, m._)({ ref: a, className: o('p-6 pt-0', t) }, l)
                )
            })
            H.displayName = 'CardContent'
            let J = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    'div',
                    (0, m._)(
                        {
                            ref: a,
                            className: o('flex items-center p-6 pt-0', t),
                        },
                        l
                    )
                )
            })
            function q(e) {
                let { title: a, link: t, thumb: l } = e,
                    r = () => {
                        window.open(t, '_blank', 'noopener,noreferrer')
                    }
                return (0, s.jsxs)(G, {
                    className:
                        'max-w-[350px] mb-10 cursor-pointer hover:shadow-xl transition-shadow',
                    title: 'Click to open link',
                    onClick: r,
                    children: [
                        (0, s.jsx)('div', {
                            className: 'relative w-full h-[200px]',
                            children: (0, s.jsx)(D.default, {
                                src: '/'.concat(l),
                                alt: a,
                                fill: !0,
                                className: 'object-cover rounded-t-lg',
                            }),
                        }),
                        (0, s.jsx)(H, {
                            className: 'pt-6',
                            children: (0, s.jsx)('h5', {
                                className: 'text-xl',
                                children: a,
                            }),
                        }),
                        (0, s.jsx)(J, {
                            className: 'p-4 pt-0',
                            children: (0, s.jsx)(_, {
                                className: 'w-full',
                                size: 'sm',
                                variant: 'secondary',
                                onClick: (e) => {
                                    e.stopPropagation(), r()
                                },
                                children: 'Open link',
                            }),
                        }),
                    ],
                })
            }
            function X(e) {
                let { live: a } = e
                return a && 0 !== a.length
                    ? (0, s.jsxs)('div', {
                          className: 'space-y-4',
                          children: [
                              (0, s.jsx)('p', {
                                  className: 'text-secondary text-lg',
                                  children: 'Live:',
                              }),
                              (0, s.jsx)('div', {
                                  className:
                                      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
                                  children: a.map((e, a) =>
                                      (0, s.jsx)(
                                          q,
                                          {
                                              title: e.title,
                                              link: e.link,
                                              thumb: e.thumb,
                                          },
                                          a
                                      )
                                  ),
                              }),
                          ],
                      })
                    : null
            }
            J.displayName = 'CardFooter'
            var Q = t(4484)
            let W = Q.bL,
                $ = l.forwardRef((e, a) => {
                    var { className: t } = e,
                        l = (0, h._)(e, ['className'])
                    return (0, s.jsx)(
                        Q.B8,
                        (0, m._)(
                            {
                                ref: a,
                                className: o(
                                    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
                                    t
                                ),
                            },
                            l
                        )
                    )
                })
            $.displayName = Q.B8.displayName
            let K = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    Q.l9,
                    (0, m._)(
                        {
                            ref: a,
                            className: o(
                                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                                t
                            ),
                        },
                        l
                    )
                )
            })
            K.displayName = Q.l9.displayName
            let ee = l.forwardRef((e, a) => {
                var { className: t } = e,
                    l = (0, h._)(e, ['className'])
                return (0, s.jsx)(
                    Q.UC,
                    (0, m._)(
                        {
                            ref: a,
                            className: o(
                                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                t
                            ),
                        },
                        l
                    )
                )
            })
            ee.displayName = Q.UC.displayName
            var ea = t(9451),
                et = t(627),
                es = t(2508)
            function el(e) {
                let { images: a } = e,
                    { mobile: t, tablet: r, desktop: n } = a,
                    i = n ? 'desktop' : r ? 'tablet' : 'mobile',
                    [o, c] = (0, l.useState)(i)
                return n || r || t
                    ? (0, s.jsxs)('div', {
                          className: 'space-y-4',
                          children: [
                              (0, s.jsx)('p', {
                                  className: 'text-secondary text-lg',
                                  children: 'Preview:',
                              }),
                              (0, s.jsxs)(W, {
                                  value: o,
                                  onValueChange: c,
                                  className: 'w-full',
                                  children: [
                                      (0, s.jsxs)($, {
                                          className: 'grid w-full grid-cols-3',
                                          children: [
                                              n &&
                                                  (0, s.jsxs)(K, {
                                                      value: 'desktop',
                                                      className:
                                                          'flex items-center gap-2',
                                                      children: [
                                                          (0, s.jsx)(ea.A, {
                                                              className:
                                                                  'h-4 w-4',
                                                          }),
                                                          'Desktop',
                                                      ],
                                                  }),
                                              r &&
                                                  (0, s.jsxs)(K, {
                                                      value: 'tablet',
                                                      className:
                                                          'flex items-center gap-2',
                                                      children: [
                                                          (0, s.jsx)(et.A, {
                                                              className:
                                                                  'h-4 w-4',
                                                          }),
                                                          'Tablet',
                                                      ],
                                                  }),
                                              t &&
                                                  (0, s.jsxs)(K, {
                                                      value: 'mobile',
                                                      className:
                                                          'flex items-center gap-2',
                                                      children: [
                                                          (0, s.jsx)(es.A, {
                                                              className:
                                                                  'h-4 w-4',
                                                          }),
                                                          'Mobile',
                                                      ],
                                                  }),
                                          ],
                                      }),
                                      n &&
                                          (0, s.jsx)(ee, {
                                              value: 'desktop',
                                              className: 'mt-4',
                                              children: (0, s.jsx)('div', {
                                                  className:
                                                      'flex justify-center',
                                                  children: (0, s.jsx)('div', {
                                                      className:
                                                          'relative w-full max-w-full',
                                                      children: (0, s.jsx)(
                                                          D.default,
                                                          {
                                                              src: '/'.concat(
                                                                  n
                                                              ),
                                                              alt: 'Desktop preview',
                                                              width: 1200,
                                                              height: 800,
                                                              className:
                                                                  'object-contain w-auto max-w-full',
                                                          }
                                                      ),
                                                  }),
                                              }),
                                          }),
                                      r &&
                                          (0, s.jsx)(ee, {
                                              value: 'tablet',
                                              className: 'mt-4',
                                              children: (0, s.jsx)('div', {
                                                  className:
                                                      'flex justify-center',
                                                  children: (0, s.jsx)('div', {
                                                      className:
                                                          'relative w-full max-w-full',
                                                      children: (0, s.jsx)(
                                                          D.default,
                                                          {
                                                              src: '/'.concat(
                                                                  r
                                                              ),
                                                              alt: 'Tablet preview',
                                                              width: 800,
                                                              height: 600,
                                                              className:
                                                                  'object-contain w-auto max-w-full',
                                                          }
                                                      ),
                                                  }),
                                              }),
                                          }),
                                      t &&
                                          (0, s.jsx)(ee, {
                                              value: 'mobile',
                                              className: 'mt-4',
                                              children: (0, s.jsx)('div', {
                                                  className:
                                                      'flex justify-center',
                                                  children: (0, s.jsx)('div', {
                                                      className:
                                                          'relative w-full max-w-full',
                                                      children: (0, s.jsx)(
                                                          D.default,
                                                          {
                                                              src: '/'.concat(
                                                                  t
                                                              ),
                                                              alt: 'Mobile preview',
                                                              width: 400,
                                                              height: 600,
                                                              className:
                                                                  'object-contain w-auto max-w-full',
                                                          }
                                                      ),
                                                  }),
                                              }),
                                          }),
                                  ],
                              }),
                          ],
                      })
                    : null
            }
            function er(e) {
                let { item: a } = e,
                    {
                        images: t,
                        title: l,
                        description: r,
                        tech: n,
                        client: i,
                        clientLink: o,
                        role: c,
                        roleDescription: d,
                        challenges: m,
                        live: x,
                    } = a
                return (0, s.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                        (0, s.jsxs)('div', {
                            className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'flex justify-center',
                                    children: (0, s.jsx)('div', {
                                        className:
                                            'relative w-full max-w-full max-h-[70vh]',
                                        children: (0, s.jsx)(D.default, {
                                            src: '/'.concat(t.thumb),
                                            alt: l,
                                            width: 800,
                                            height: 600,
                                            className:
                                                'object-contain w-auto max-w-full max-h-[70vh]',
                                        }),
                                    }),
                                }),
                                (0, s.jsxs)('div', {
                                    className: 'space-y-4',
                                    children: [
                                        (0, s.jsx)('p', {
                                            className: 'text-foreground',
                                            children: r,
                                        }),
                                        n &&
                                            (0, s.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Technologies:',
                                                    ' ',
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: (function (
                                                            e
                                                        ) {
                                                            let a =
                                                                    arguments.length >
                                                                        1 &&
                                                                    void 0 !==
                                                                        arguments[1]
                                                                        ? arguments[1]
                                                                        : ', ',
                                                                t = e.length
                                                            return e.map(
                                                                (e, s) =>
                                                                    s !== t - 1
                                                                        ? ''
                                                                              .concat(
                                                                                  e
                                                                              )
                                                                              .concat(
                                                                                  a
                                                                              )
                                                                        : ''.concat(
                                                                              e
                                                                          )
                                                            )
                                                        })(n).join(''),
                                                    }),
                                                ],
                                            }),
                                        i &&
                                            (0, s.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Client:',
                                                    ' ',
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: (0, s.jsx)(
                                                            U,
                                                            {
                                                                link: o,
                                                                title: i,
                                                                color: 'textPrimary',
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        c &&
                                            (0, s.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Role:',
                                                    ' ',
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: c,
                                                    }),
                                                ],
                                            }),
                                        d &&
                                            (0, s.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Role description:',
                                                    ' ',
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: d,
                                                    }),
                                                ],
                                            }),
                                        m &&
                                            (0, s.jsxs)('div', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Challenges:',
                                                    ' ',
                                                    (0, s.jsx)('ul', {
                                                        className:
                                                            'text-foreground list-disc list-inside mt-2 space-y-1',
                                                        children: m.map(
                                                            (e, a) =>
                                                                (0, s.jsx)(
                                                                    'li',
                                                                    {
                                                                        children:
                                                                            e,
                                                                    },
                                                                    a
                                                                )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)(X, { live: x }),
                        (0, s.jsx)(el, { images: t }),
                    ],
                })
            }
            function en(e) {
                let { open: a, handleClose: t, item: l } = e,
                    { title: r, titleLink: n } = l
                return (0, s.jsx)(Y, {
                    open: a,
                    onOpenChange: t,
                    children: (0, s.jsxs)(V, {
                        className: 'max-w-6xl max-h-[90vh] overflow-y-auto',
                        children: [
                            (0, s.jsx)(Z, {
                                children: (0, s.jsxs)('div', {
                                    className:
                                        'flex justify-between items-center',
                                    children: [
                                        (0, s.jsx)(I, {
                                            className: 'text-2xl',
                                            children: (0, s.jsx)(U, {
                                                link: n,
                                                title: r,
                                                color: 'secondary',
                                            }),
                                        }),
                                        (0, s.jsx)(_, {
                                            variant: 'ghost',
                                            size: 'icon',
                                            onClick: t,
                                            className: 'ml-auto',
                                            'aria-label': 'close',
                                            children: (0, s.jsx)(p.A, {
                                                className: 'h-4 w-4',
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, s.jsx)('div', {
                                className: 'border-t border-border my-4',
                            }),
                            (0, s.jsx)(er, { item: l }),
                            (0, s.jsx)(B, {
                                children: (0, s.jsx)(_, {
                                    onClick: t,
                                    variant: 'default',
                                    children: 'Close',
                                }),
                            }),
                        ],
                    }),
                })
            }
            function ei(e) {
                var a
                let { item: t } = e,
                    [r, n] = (0, l.useState)(!1),
                    i = () => {
                        n(!0)
                    },
                    o = (t.images && t.images.thumb) || null
                return (0, s.jsxs)('div', {
                    className: 'mt-6 mb-8',
                    children: [
                        (0, s.jsxs)(G, {
                            className:
                                'mx-auto min-w-[240px] max-w-[400px] cursor-pointer hover:shadow-xl transition-shadow',
                            onClick: i,
                            title: 'Click to learn more',
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'relative w-full h-[240px]',
                                    children:
                                        o &&
                                        (0, s.jsx)(D.default, {
                                            src: '/'.concat(o),
                                            alt: t.title,
                                            fill: !0,
                                            className: 'object-cover',
                                        }),
                                }),
                                (0, s.jsxs)(H, {
                                    className: 'min-h-[150px] pt-6',
                                    children: [
                                        (0, s.jsx)('h5', {
                                            className:
                                                'text-secondary text-2xl mb-4',
                                            children: t.title,
                                        }),
                                        (0, s.jsx)('p', {
                                            className: 'text-gray-400 text-sm',
                                            children:
                                                ((a = t.description),
                                                a.length > 320
                                                    ? ''.concat(
                                                          a.substring(0, 317),
                                                          '...'
                                                      )
                                                    : a),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(J, {
                                    className: 'p-4 pt-0',
                                    children: (0, s.jsxs)(_, {
                                        className:
                                            'w-full bg-secondary hover:bg-[#e64a19] text-white',
                                        size: 'sm',
                                        variant: 'secondary',
                                        onClick: (e) => {
                                            e.stopPropagation(), i()
                                        },
                                        children: [
                                            (0, s.jsx)(M.A, {
                                                className: 'mr-2 h-4 w-4',
                                            }),
                                            'Learn more',
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsx)(en, {
                            open: r,
                            handleClose: () => {
                                n(!1)
                            },
                            item: t,
                        }),
                    ],
                })
            }
            function eo() {
                return (0, s.jsx)('div', {
                    className: 'mt-6 mb-8',
                    children: (0, s.jsxs)(G, {
                        className: 'mx-auto min-w-[240px] max-w-[400px]',
                        children: [
                            (0, s.jsx)('div', {
                                className:
                                    'w-full h-[240px] bg-gray-700 rounded-t-lg animate-pulse',
                            }),
                            (0, s.jsxs)(H, {
                                className: 'min-h-[150px] pt-6',
                                children: [
                                    (0, s.jsx)('div', {
                                        className:
                                            'h-6 w-40 bg-gray-700 rounded animate-pulse mb-4',
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: 'space-y-2',
                                        children: [
                                            (0, s.jsx)('div', {
                                                className:
                                                    'h-4 bg-gray-700 rounded animate-pulse',
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'h-4 bg-gray-700 rounded animate-pulse',
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'h-4 bg-gray-700 rounded animate-pulse',
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'h-4 bg-gray-700 rounded animate-pulse',
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'h-4 bg-gray-700 rounded animate-pulse',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(J, {
                                className: 'p-4 pt-0',
                                children: (0, s.jsx)('div', {
                                    className:
                                        'w-full h-10 bg-gray-700 rounded animate-pulse',
                                }),
                            }),
                        ],
                    }),
                })
            }
            function ec(e) {
                let { items: a, loading: t } = e
                return (0, s.jsx)('div', {
                    className: 'flex-grow overflow-hidden py-12 pb-16',
                    children: (0, s.jsxs)('div', {
                        className:
                            'grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center',
                        children: [
                            t && [1, 2, 3].map((e) => (0, s.jsx)(eo, {}, e)),
                            !t &&
                                a.length > 0 &&
                                a.map((e) => (0, s.jsx)(ei, { item: e }, e.id)),
                        ],
                    }),
                })
            }
            function ed() {
                let {
                    data: e,
                    error: a,
                    isLoading: t,
                } = L('/data/portfolio.json', 'portfolio')
                return (0, s.jsx)(z, {
                    id: 'portfolio',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto px-4',
                        children: [
                            (0, s.jsx)('h2', {
                                className: 'text-4xl font-secondary mb-4',
                                children: 'Portfolio',
                            }),
                            (0, s.jsx)('p', {
                                className: 'text-secondary mb-8',
                                children:
                                    'Dedicated to some of the best professional work through my career as a web developer',
                            }),
                            a
                                ? (0, s.jsx)(S, { error: a })
                                : (0, s.jsx)(ec, {
                                      loading: t,
                                      items: e || [],
                                  }),
                        ],
                    }),
                })
            }
            var em = t(9633)
            function ex(e) {
                let { event: a } = e
                return (0, s.jsxs)('div', {
                    className:
                        'bg-[#263238] rounded-lg shadow-lg p-6 my-8 mx-0 md:m-4',
                    children: [
                        (0, s.jsxs)('h6', {
                            className: 'text-secondary text-xl mb-4 text-left',
                            children: [
                                a.title,
                                ' - ',
                                a.company,
                                ' (',
                                a.location,
                                ')',
                            ],
                        }),
                        (0, s.jsx)('p', {
                            className: 'whitespace-pre-wrap text-left',
                            children: a.description,
                        }),
                    ],
                })
            }
            function eh(e) {
                let { event: a, isLast: t } = e
                return (0, s.jsxs)('div', {
                    className: 'flex items-start mb-8 w-full relative',
                    children: [
                        (0, s.jsxs)('div', {
                            className: 'flex items-start w-full md:hidden',
                            children: [
                                (0, s.jsxs)('div', {
                                    className:
                                        'flex flex-col items-center mr-4 relative z-10 flex-shrink-0',
                                    children: [
                                        (0, s.jsx)('div', {
                                            className:
                                                'w-12 h-12 rounded-full bg-secondary flex items-center justify-center',
                                            children: (0, s.jsx)(em.A, {
                                                className: 'text-white',
                                                size: 24,
                                            }),
                                        }),
                                        !t &&
                                            (0, s.jsx)('div', {
                                                className:
                                                    'w-0.5 bg-secondary min-h-[80px] mt-2 flex-grow',
                                            }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: 'flex-1 min-w-0',
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: 'mb-4',
                                            children: (0, s.jsxs)('h6', {
                                                className:
                                                    'text-secondary text-xl font-secondary',
                                                children: [
                                                    a.startDate,
                                                    ' - ',
                                                    a.endDate,
                                                ],
                                            }),
                                        }),
                                        (0, s.jsx)(ex, { event: a }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: 'hidden md:flex items-start w-full',
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'flex-1 text-right pr-8 min-w-0',
                                    children: (0, s.jsxs)('h6', {
                                        className:
                                            'text-secondary text-xl font-secondary',
                                        children: [
                                            a.startDate,
                                            ' - ',
                                            a.endDate,
                                        ],
                                    }),
                                }),
                                (0, s.jsxs)('div', {
                                    className:
                                        'flex flex-col items-center mx-4 relative z-10 flex-shrink-0',
                                    children: [
                                        (0, s.jsx)('div', {
                                            className:
                                                'w-12 h-12 rounded-full bg-secondary flex items-center justify-center',
                                            children: (0, s.jsx)(em.A, {
                                                className: 'text-white',
                                                size: 24,
                                            }),
                                        }),
                                        !t &&
                                            (0, s.jsx)('div', {
                                                className:
                                                    'w-0.5 bg-secondary min-h-[80px] mt-2 flex-grow',
                                            }),
                                    ],
                                }),
                                (0, s.jsx)('div', {
                                    className: 'flex-1 pl-8 min-w-0',
                                    children: (0, s.jsx)(ex, { event: a }),
                                }),
                            ],
                        }),
                    ],
                })
            }
            function eu(e) {
                let { events: a } = e
                return (0, s.jsx)('div', {
                    className: 'flex flex-col',
                    children: a.map((e, t) =>
                        (0, s.jsx)(
                            eh,
                            { event: e, isLast: t === a.length - 1 },
                            t
                        )
                    ),
                })
            }
            function ef() {
                let {
                    data: e,
                    error: a,
                    isLoading: t,
                } = L('/data/career.json', 'career section data')
                return (0, s.jsxs)('div', {
                    className: 'max-w-7xl mx-auto px-4 py-16',
                    id: 'career',
                    children: [
                        (0, s.jsx)('h2', {
                            className: 'text-4xl font-secondary mb-8',
                            children: 'Career',
                        }),
                        e && (0, s.jsx)(eu, { events: e }),
                        t &&
                            (0, s.jsx)('div', {
                                className:
                                    'w-full h-[500px] bg-gray-700 rounded animate-pulse',
                            }),
                        a && (0, s.jsx)(S, { error: a }),
                    ],
                })
            }
            var ep = t(4684),
                ej = t(7378),
                eg = t(7333),
                ev = t(9602),
                eN = t(7161),
                eb = t(64),
                ey = t(3586)
            function ew(e) {
                let { data: a } = e,
                    {
                        github: t,
                        instagram: l,
                        linkedIn: r,
                        twitter: n,
                        stackblitz: i,
                        codeSandbox: o,
                        youtube: c,
                        soundcloud: d,
                    } = a
                return (0, s.jsxs)('div', {
                    className:
                        'text-center md:text-right pt-8 md:pt-0 mb-4 md:mb-0',
                    children: [
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to Github',
                            title: 'Link to Github',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: t,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(ep.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to Twitter',
                            title: 'Link to Twitter',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: n,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(ej.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to LinkedIn',
                            title: 'Link to LinkedIn',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: r,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(eg.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to Stackblitz',
                            title: 'Link to Stackblitz',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: i,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(ev.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to CodeSandbox',
                            title: 'Link to CodeSandbox',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: o,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsxs)('svg', {
                                    width: '23',
                                    height: '23',
                                    fill: 'none',
                                    viewBox: '0 0 23 23',
                                    children: [
                                        (0, s.jsx)('path', {
                                            fill: 'currentColor',
                                            fillRule: 'evenodd',
                                            d: 'M11.5 11.617v11.17a.897.897 0 00.497-.142l8.944-5.111c.354-.202.498-.516.498-.923V6.247a.87.87 0 00-.143-.497l-9.51 5.373a.568.568 0 00-.286.494zm4.97 6.414c0 .284-.107.426-.356.568l-2.981 1.703c-.213.142-.497.072-.497-.212v-7.596c0-.203.179-.467.355-.568l6.815-3.904c.189-.11.354.065.354.284v4.046c0 .21-.098.398-.284.497l-3.052 1.633c-.185.098-.355.287-.355.496v3.053z',
                                            clipRule: 'evenodd',
                                        }),
                                        (0, s.jsx)('path', {
                                            fill: 'currentColor',
                                            fillRule: 'evenodd',
                                            d: 'M1.562 16.611V6.247c0-.408.214-.792.568-.994L10.79.355c.187-.099.497-.142.71-.142.213 0 .541.053.71.142l8.59 4.898c.17.1.4.332.496.497l-9.512 5.395a.572.572 0 00-.284.497v11.145c-.194 0-.393-.042-.568-.142l-8.731-5.04c-.354-.202-.64-.586-.64-.994zM2.84 8.305v4.047c0 .284.07.426.354.568l2.982 1.703a.585.585 0 01.355.568v2.84c0 .284.07.426.355.568l2.981 1.703c.284.142.497.071.497-.213v-7.595a.585.585 0 00-.355-.568L3.336 8.092c-.212-.141-.496-.07-.496.213zm11.642-4.827L11.855 4.97a.645.645 0 01-.71 0L8.52 3.479a.588.588 0 00-.568 0L4.685 5.323c-.284.142-.284.426 0 .568l6.531 3.762c.175.1.393.1.568 0l6.53-3.762c.214-.142.285-.426 0-.568L15.05 3.478a.588.588 0 00-.567 0z',
                                            clipRule: 'evenodd',
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to Instagram',
                            title: 'Link to Instagram',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: l,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(eN.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to YouTube',
                            title: 'Link to YouTube',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: c,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(eb.A, { size: 32 }),
                            }),
                        }),
                        (0, s.jsx)(_, {
                            variant: 'ghost',
                            size: 'icon',
                            className:
                                'text-secondary hover:text-secondary hover:bg-transparent',
                            'aria-label': 'Link to Soundcloud',
                            title: 'Link to Soundcloud',
                            asChild: !0,
                            children: (0, s.jsx)('a', {
                                href: d,
                                target: '_blank',
                                rel: 'noreferrer',
                                children: (0, s.jsx)(ey.A, { size: 32 }),
                            }),
                        }),
                    ],
                })
            }
            var ek = t(3664)
            let e_ = (e) => {
                let { email: a } = e
                return (0, s.jsxs)('div', {
                    className:
                        'relative overflow-hidden mb-8 md:mb-24 h-[224px] md:h-[400px]',
                    children: [
                        (0, s.jsx)('a', {
                            href: 'mailto:'.concat(a),
                            title: 'Send mail',
                            className:
                                'absolute z-10 flex w-full h-full transition-all duration-300 hover:[&_svg]:translate-y-[25%] hover:[&_svg]:scale-110 hover:[&_span]:underline',
                            children: (0, s.jsxs)('h4', {
                                className:
                                    'absolute flex items-center text-secondary top-0 left-0 w-full text-center md:top-[5%] md:text-left md:w-auto',
                                children: [
                                    (0, s.jsx)(ek.A, {
                                        className: 'mr-6 translate-y-[25%]',
                                        size: 32,
                                    }),
                                    (0, s.jsx)('span', {
                                        children: 'Get in touch',
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsxs)('svg', {
                            className: 'opacity-80 w-full h-full rotate-[5deg]',
                            viewBox: '0 0 3387 1270',
                            children: [
                                (0, s.jsx)('path', {
                                    id: 'planePath',
                                    className:
                                        'stroke-[#D9DADA] stroke-[0.5%] stroke-dasharray-[1%_2%] stroke-linecap-round fill-none',
                                    d: 'M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179',
                                }),
                                (0, s.jsxs)('g', {
                                    id: 'plane',
                                    children: [
                                        (0, s.jsx)('polygon', {
                                            className: 'fill-[#D9DADA]',
                                            points: '-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 ',
                                        }),
                                        (0, s.jsx)('polygon', {
                                            className: 'fill-[#C5C6C6]',
                                            points: '199,0 -141,-10 -163,63 -123,9 ',
                                        }),
                                        (0, s.jsx)('polygon', {
                                            className: 'fill-[#AEAFB0]',
                                            points: '-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 ',
                                        }),
                                        (0, s.jsx)('path', {
                                            className: 'fill-[#9D9E9E]',
                                            d: 'M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z',
                                        }),
                                        (0, s.jsx)('polygon', {
                                            className: 'fill-[#D9DADA]',
                                            points: '-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 ',
                                        }),
                                    ],
                                }),
                                (0, s.jsx)('animateMotion', {
                                    href: '#plane',
                                    dur: '8s',
                                    repeatCount: 'indefinite',
                                    rotate: 'auto',
                                    children: (0, s.jsx)('mpath', {
                                        href: '#planePath',
                                    }),
                                }),
                            ],
                        }),
                    ],
                })
            }
            function eC() {
                let { data: e, isLoading: a } = L(
                    '/data/about.json',
                    'about section data'
                )
                if (a || !e) return null
                let { social: t } = e,
                    { email: l } = t
                return (0, s.jsx)('div', {
                    className: 'max-w-7xl mx-auto px-4 flex justify-center',
                    children: (0, s.jsxs)('section', {
                        id: 'contact',
                        children: [
                            (0, s.jsx)(e_, { email: l }),
                            (0, s.jsx)(ew, { data: t }),
                        ],
                    }),
                })
            }
            function ez() {
                let e = new Date().getFullYear()
                return (0, s.jsx)('footer', {
                    className: 'bg-primary w-full',
                    children: (0, s.jsxs)('div', {
                        className:
                            'flex justify-center items-center h-[60px] px-4',
                        children: [
                            (0, s.jsxs)('p', {
                                className: 'pr-4 text-sm',
                                children: [
                                    '\xa9 ',
                                    e,
                                    ' - Designed & developed by',
                                ],
                            }),
                            (0, s.jsx)('p', {
                                className: 'text-sm',
                                children: (0, s.jsx)('a', {
                                    className: 'text-secondary hover:underline',
                                    href: 'https://github.com/sagarsys',
                                    rel: 'noreferrer',
                                    target: '_blank',
                                    children: 'sagarsys',
                                }),
                            }),
                        ],
                    }),
                })
            }
            var eA = t(6497),
                eL = t(1733),
                eR = t(2108)
            function eS(e) {
                let { children: a } = e,
                    [t, r] = (0, l.useState)(!1)
                return (
                    (0, l.useEffect)(() => {
                        let e = window.scrollY,
                            a = !1,
                            t = () => {
                                let t = window.scrollY
                                t > 100 && t > e ? r(!0) : t <= 100 && r(!1),
                                    (e = t),
                                    (a = !1)
                            },
                            s = () => {
                                a || (window.requestAnimationFrame(t), (a = !0))
                            }
                        return (
                            t(),
                            window.addEventListener('scroll', s, {
                                passive: !0,
                            }),
                            () => window.removeEventListener('scroll', s)
                        )
                    }, []),
                    (0, s.jsx)(eA.N, {
                        children:
                            t &&
                            (0, s.jsx)(eL.P.div, {
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0 },
                                transition: { duration: 0.2, ease: 'easeOut' },
                                className: 'fixed bottom-8 right-8 z-50',
                                onClick: c,
                                role: 'presentation',
                                children:
                                    a ||
                                    (0, s.jsx)(_, {
                                        size: 'icon',
                                        variant: 'secondary',
                                        className:
                                            'rounded-full h-10 w-10 p-0 bg-secondary hover:bg-[#e64a19] text-white shadow-lg',
                                        'aria-label': 'scroll back to top',
                                        children: (0, s.jsx)(eR.A, {
                                            className: 'h-4 w-4',
                                        }),
                                    }),
                            }),
                    })
                )
            }
            function eD() {
                return (0, s.jsxs)('div', {
                    className: 'min-h-screen',
                    children: [
                        (0, s.jsx)('div', {
                            id: 'back-to-top-anchor',
                            className: 'h-0 min-h-0',
                        }),
                        (0, s.jsx)(C, {}),
                        (0, s.jsx)(A, {}),
                        (0, s.jsx)(T, {}),
                        (0, s.jsx)(ed, {}),
                        (0, s.jsx)(ef, {}),
                        (0, s.jsx)(eC, {}),
                        (0, s.jsx)(ez, {}),
                        (0, s.jsx)(eS, {}),
                    ],
                })
            }
        },
    },
    (e) => {
        e.O(0, [316, 441, 255, 358], () => e((e.s = 919))), (_N_E = e.O())
    },
])
