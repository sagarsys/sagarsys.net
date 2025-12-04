;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
        1326: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => p })
            var s = t(1983),
                r = t(5849),
                l = t(5155),
                n = t(2115),
                i = t(1075),
                o = t(3664),
                c = t(4684),
                d = t(7333),
                m = t(8085),
                x = t(6639),
                h = t(7003),
                u = t(2063)
            function p(e) {
                let {
                        email: a = 'sagar.sawuck@gmail.com',
                        github: t = 'https://github.com/sagarsys',
                        linkedin: p = 'https://linkedin.com/in/sagarsys/',
                    } = e,
                    { colors: g } = (0, u.X)(),
                    [f, b] = (0, n.useState)({
                        name: '',
                        email: '',
                        message: '',
                    })
                return (0, l.jsx)('section', {
                    id: 'contact',
                    className: 'py-20 md:py-32 px-6 relative',
                    children: (0, l.jsxs)('div', {
                        className: 'max-w-6xl mx-auto',
                        children: [
                            (0, l.jsx)(x.default, {
                                title: 'Get In Touch',
                                subtitle:
                                    "Let's build something amazing together",
                            }),
                            (0, l.jsxs)('div', {
                                className:
                                    'grid md:grid-cols-2 gap-8 md:gap-12',
                                children: [
                                    (0, l.jsxs)(i.P.div, {
                                        className: 'space-y-6',
                                        initial: { opacity: 0, x: -30 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        children: [
                                            (0, l.jsx)(i.P.a, {
                                                href: 'mailto:'.concat(a),
                                                className: 'block',
                                                whileHover: { y: -5 },
                                                children: (0, l.jsx)('div', {
                                                    className:
                                                        'bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group',
                                                    children: (0, l.jsxs)(
                                                        'div',
                                                        {
                                                            className:
                                                                'flex items-center gap-4 mb-3',
                                                            children: [
                                                                (0, l.jsx)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'w-12 h-12 rounded-full flex items-center justify-center',
                                                                        style: {
                                                                            background:
                                                                                'linear-gradient(135deg, '
                                                                                    .concat(
                                                                                        g.from,
                                                                                        ', '
                                                                                    )
                                                                                    .concat(
                                                                                        g.via,
                                                                                        ', '
                                                                                    )
                                                                                    .concat(
                                                                                        g.to,
                                                                                        ')'
                                                                                    ),
                                                                        },
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                o.A,
                                                                                {
                                                                                    className:
                                                                                        'w-6 h-6 text-white',
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, l.jsxs)(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'flex-1',
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'text-sm text-gray-400',
                                                                                        children:
                                                                                            'Email',
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    'p',
                                                                                    {
                                                                                        className:
                                                                                            'font-semibold text-lg text-white group-hover:text-secondary transition-colors',
                                                                                        children:
                                                                                            a,
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            }),
                                            (0, l.jsxs)('div', {
                                                className:
                                                    'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md',
                                                children: [
                                                    (0, l.jsx)('p', {
                                                        className:
                                                            'text-sm text-gray-400 mb-4',
                                                        children:
                                                            'Connect with me',
                                                    }),
                                                    (0, l.jsxs)('div', {
                                                        className: 'flex gap-3',
                                                        children: [
                                                            (0, l.jsx)(i.P.a, {
                                                                href: t,
                                                                target: '_blank',
                                                                rel: 'noopener noreferrer',
                                                                className:
                                                                    'w-10 h-10 rounded-full bg-slate-700 text-gray-300 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all',
                                                                whileHover: {
                                                                    scale: 1.1,
                                                                    y: -3,
                                                                },
                                                                'aria-label':
                                                                    'GitHub',
                                                                children: (0,
                                                                l.jsx)(c.A, {
                                                                    className:
                                                                        'w-5 h-5',
                                                                }),
                                                            }),
                                                            (0, l.jsx)(i.P.a, {
                                                                href: p,
                                                                target: '_blank',
                                                                rel: 'noopener noreferrer',
                                                                className:
                                                                    'w-10 h-10 rounded-full bg-slate-700 text-gray-300 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all',
                                                                whileHover: {
                                                                    scale: 1.1,
                                                                    y: -3,
                                                                },
                                                                'aria-label':
                                                                    'LinkedIn',
                                                                children: (0,
                                                                l.jsx)(d.A, {
                                                                    className:
                                                                        'w-5 h-5',
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(i.P.div, {
                                        initial: { opacity: 0, x: 30 },
                                        whileInView: { opacity: 1, x: 0 },
                                        viewport: { once: !0 },
                                        children: (0, l.jsxs)('form', {
                                            onSubmit: (e) => {
                                                e.preventDefault()
                                                let t = encodeURIComponent(
                                                        'Portfolio Contact from '.concat(
                                                            f.name
                                                        )
                                                    ),
                                                    s = encodeURIComponent(
                                                        'From: '
                                                            .concat(
                                                                f.name,
                                                                '\nEmail: '
                                                            )
                                                            .concat(
                                                                f.email,
                                                                '\n\nMessage:\n'
                                                            )
                                                            .concat(f.message)
                                                    )
                                                window.location.href = 'mailto:'
                                                    .concat(a, '?subject=')
                                                    .concat(t, '&body=')
                                                    .concat(s)
                                            },
                                            className: 'space-y-4',
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    children: [
                                                        (0, l.jsx)('label', {
                                                            htmlFor: 'name',
                                                            className:
                                                                'block text-sm font-medium mb-2',
                                                            children: 'Name',
                                                        }),
                                                        (0, l.jsx)('input', {
                                                            type: 'text',
                                                            id: 'name',
                                                            required: !0,
                                                            value: f.name,
                                                            onChange: (e) =>
                                                                b(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            f
                                                                        ),
                                                                        {
                                                                            name: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
                                                                ),
                                                            className:
                                                                'w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all',
                                                            placeholder:
                                                                'Your name',
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsxs)('div', {
                                                    children: [
                                                        (0, l.jsx)('label', {
                                                            htmlFor: 'email',
                                                            className:
                                                                'block text-sm font-medium mb-2',
                                                            children: 'Email',
                                                        }),
                                                        (0, l.jsx)('input', {
                                                            type: 'email',
                                                            id: 'email',
                                                            required: !0,
                                                            value: f.email,
                                                            onChange: (e) =>
                                                                b(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            f
                                                                        ),
                                                                        {
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
                                                                ),
                                                            className:
                                                                'w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all',
                                                            placeholder:
                                                                'your@email.com',
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsxs)('div', {
                                                    children: [
                                                        (0, l.jsx)('label', {
                                                            htmlFor: 'message',
                                                            className:
                                                                'block text-sm font-medium mb-2',
                                                            children: 'Message',
                                                        }),
                                                        (0, l.jsx)('textarea', {
                                                            id: 'message',
                                                            required: !0,
                                                            rows: 6,
                                                            value: f.message,
                                                            onChange: (e) =>
                                                                b(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            f
                                                                        ),
                                                                        {
                                                                            message:
                                                                                e
                                                                                    .target
                                                                                    .value,
                                                                        }
                                                                    )
                                                                ),
                                                            className:
                                                                'w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none',
                                                            placeholder:
                                                                'Your message...',
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(i.P.div, {
                                                    whileHover: { scale: 1.02 },
                                                    whileTap: { scale: 0.98 },
                                                    children: (0, l.jsxs)(h.$, {
                                                        type: 'submit',
                                                        className:
                                                            'w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group',
                                                        style: {
                                                            background:
                                                                'linear-gradient(135deg, '
                                                                    .concat(
                                                                        g.from,
                                                                        ', '
                                                                    )
                                                                    .concat(
                                                                        g.via,
                                                                        ', '
                                                                    )
                                                                    .concat(
                                                                        g.to,
                                                                        ')'
                                                                    ),
                                                        },
                                                        children: [
                                                            (0, l.jsx)(m.A, {
                                                                className:
                                                                    'w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform',
                                                            }),
                                                            'Send Message',
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                })
            }
        },
        1527: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => D })
            var s = t(1983),
                r = t(5849),
                l = t(5155),
                n = t(2115),
                i = t(1075),
                o = t(5239),
                c = t(5880),
                d = t(4684),
                m = t(4033),
                x = t(7476),
                h = t(7389),
                u = t(8714),
                p = t(5229),
                g = t(5016)
            let f = u.bL
            u.l9
            let b = u.ZL
            u.bm
            let v = n.forwardRef((e, a) => {
                var { className: t } = e,
                    r = (0, h._)(e, ['className'])
                return (0, l.jsx)(
                    u.hJ,
                    (0, s._)(
                        {
                            ref: a,
                            className: (0, g.cn)(
                                'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                t
                            ),
                        },
                        r
                    )
                )
            })
            v.displayName = u.hJ.displayName
            let y = n.forwardRef((e, a) => {
                var { className: t, children: n } = e,
                    i = (0, h._)(e, ['className', 'children'])
                return (0, l.jsxs)(b, {
                    children: [
                        (0, l.jsx)(v, {}),
                        (0, l.jsxs)(
                            u.UC,
                            (0, r._)(
                                (0, s._)(
                                    {
                                        ref: a,
                                        className: (0, g.cn)(
                                            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                            t
                                        ),
                                    },
                                    i
                                ),
                                {
                                    children: [
                                        n,
                                        (0, l.jsxs)(u.bm, {
                                            className:
                                                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
                                            children: [
                                                (0, l.jsx)(p.A, {
                                                    className: 'h-4 w-4',
                                                }),
                                                (0, l.jsx)('span', {
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
            y.displayName = u.UC.displayName
            let w = (e) => {
                var { className: a } = e,
                    t = (0, h._)(e, ['className'])
                return (0, l.jsx)(
                    'div',
                    (0, s._)(
                        {
                            className: (0, g.cn)(
                                'flex flex-col space-y-1.5 text-center sm:text-left',
                                a
                            ),
                        },
                        t
                    )
                )
            }
            w.displayName = 'DialogHeader'
            let j = n.forwardRef((e, a) => {
                var { className: t } = e,
                    r = (0, h._)(e, ['className'])
                return (0, l.jsx)(
                    u.hE,
                    (0, s._)(
                        {
                            ref: a,
                            className: (0, g.cn)(
                                'text-lg font-semibold leading-none tracking-tight',
                                t
                            ),
                        },
                        r
                    )
                )
            })
            ;(j.displayName = u.hE.displayName),
                (n.forwardRef((e, a) => {
                    var { className: t } = e,
                        r = (0, h._)(e, ['className'])
                    return (0, l.jsx)(
                        u.VY,
                        (0, s._)(
                            {
                                ref: a,
                                className: (0, g.cn)(
                                    'text-sm text-muted-foreground',
                                    t
                                ),
                            },
                            r
                        )
                    )
                }).displayName = u.VY.displayName)
            var N = t(4484)
            let k = N.bL,
                P = n.forwardRef((e, a) => {
                    var { className: t } = e,
                        r = (0, h._)(e, ['className'])
                    return (0, l.jsx)(
                        N.B8,
                        (0, s._)(
                            {
                                ref: a,
                                className: (0, g.cn)(
                                    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
                                    t
                                ),
                            },
                            r
                        )
                    )
                })
            P.displayName = N.B8.displayName
            let C = n.forwardRef((e, a) => {
                var { className: t } = e,
                    r = (0, h._)(e, ['className'])
                return (0, l.jsx)(
                    N.l9,
                    (0, s._)(
                        {
                            ref: a,
                            className: (0, g.cn)(
                                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                                t
                            ),
                        },
                        r
                    )
                )
            })
            C.displayName = N.l9.displayName
            let _ = n.forwardRef((e, a) => {
                var { className: t } = e,
                    r = (0, h._)(e, ['className'])
                return (0, l.jsx)(
                    N.UC,
                    (0, s._)(
                        {
                            ref: a,
                            className: (0, g.cn)(
                                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                t
                            ),
                        },
                        r
                    )
                )
            })
            _.displayName = N.UC.displayName
            var A = t(9451),
                E = t(627),
                I = t(2508)
            function S(e) {
                let { images: a } = e,
                    { desktop: t, tablet: s, mobile: r } = a,
                    n = [t, s, r].filter(Boolean).length
                if (0 === n) return null
                if (1 === n) {
                    let e = t || s || r
                    return (0, l.jsx)('div', {
                        className: 'my-8',
                        children: (0, l.jsx)('div', {
                            className:
                                'relative w-full rounded-lg overflow-hidden border border-slate-700',
                            children: (0, l.jsx)(o.default, {
                                src: '/'.concat(e),
                                alt: 'Project preview',
                                width: 1200,
                                height: 800,
                                className: 'w-full h-auto',
                                unoptimized: !0,
                            }),
                        }),
                    })
                }
                return (0, l.jsx)('div', {
                    className: 'my-8',
                    children: (0, l.jsxs)(k, {
                        defaultValue: 'desktop',
                        className: 'w-full',
                        children: [
                            (0, l.jsxs)(P, {
                                className: 'grid w-full grid-cols-3 mb-6',
                                children: [
                                    t &&
                                        (0, l.jsxs)(C, {
                                            value: 'desktop',
                                            className:
                                                'flex items-center gap-2',
                                            children: [
                                                (0, l.jsx)(A.A, {
                                                    className: 'w-4 h-4',
                                                }),
                                                (0, l.jsx)('span', {
                                                    className:
                                                        'hidden sm:inline',
                                                    children: 'Desktop',
                                                }),
                                            ],
                                        }),
                                    s &&
                                        (0, l.jsxs)(C, {
                                            value: 'tablet',
                                            className:
                                                'flex items-center gap-2',
                                            children: [
                                                (0, l.jsx)(E.A, {
                                                    className: 'w-4 h-4',
                                                }),
                                                (0, l.jsx)('span', {
                                                    className:
                                                        'hidden sm:inline',
                                                    children: 'Tablet',
                                                }),
                                            ],
                                        }),
                                    r &&
                                        (0, l.jsxs)(C, {
                                            value: 'mobile',
                                            className:
                                                'flex items-center gap-2',
                                            children: [
                                                (0, l.jsx)(I.A, {
                                                    className: 'w-4 h-4',
                                                }),
                                                (0, l.jsx)('span', {
                                                    className:
                                                        'hidden sm:inline',
                                                    children: 'Mobile',
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            t &&
                                (0, l.jsx)(_, {
                                    value: 'desktop',
                                    children: (0, l.jsx)('div', {
                                        className:
                                            'relative w-full rounded-lg overflow-hidden border border-slate-700',
                                        children: (0, l.jsx)(o.default, {
                                            src: '/'.concat(t),
                                            alt: 'Desktop view',
                                            width: 1200,
                                            height: 800,
                                            className: 'w-full h-auto',
                                            unoptimized: !0,
                                        }),
                                    }),
                                }),
                            s &&
                                (0, l.jsx)(_, {
                                    value: 'tablet',
                                    children: (0, l.jsx)('div', {
                                        className:
                                            'relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-slate-700',
                                        children: (0, l.jsx)(o.default, {
                                            src: '/'.concat(s),
                                            alt: 'Tablet view',
                                            width: 768,
                                            height: 1024,
                                            className: 'w-full h-auto',
                                            unoptimized: !0,
                                        }),
                                    }),
                                }),
                            r &&
                                (0, l.jsx)(_, {
                                    value: 'mobile',
                                    children: (0, l.jsx)('div', {
                                        className:
                                            'relative w-full max-w-md mx-auto rounded-lg overflow-hidden border border-slate-700',
                                        children: (0, l.jsx)(o.default, {
                                            src: '/'.concat(r),
                                            alt: 'Mobile view',
                                            width: 375,
                                            height: 812,
                                            className: 'w-full h-auto',
                                            unoptimized: !0,
                                        }),
                                    }),
                                }),
                        ],
                    }),
                })
            }
            function F(e) {
                let { item: a } = e,
                    {
                        images: t,
                        title: s,
                        description: r,
                        tech: n,
                        client: i,
                        clientLink: c,
                        role: d,
                        roleDescription: m,
                        challenges: x,
                        live: h,
                    } = a
                return (0, l.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                        (0, l.jsxs)('div', {
                            className: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                            children: [
                                (0, l.jsx)('div', {
                                    className: 'flex justify-center',
                                    children: (0, l.jsx)('div', {
                                        className:
                                            'relative w-full max-w-full max-h-[70vh]',
                                        children: (0, l.jsx)(o.default, {
                                            src: '/'.concat(t.thumb),
                                            alt: s,
                                            width: 800,
                                            height: 600,
                                            className:
                                                'object-contain w-auto max-w-full max-h-[70vh]',
                                        }),
                                    }),
                                }),
                                (0, l.jsxs)('div', {
                                    className: 'space-y-4',
                                    children: [
                                        (0, l.jsx)('p', {
                                            className: 'text-foreground',
                                            children: r,
                                        }),
                                        n &&
                                            (0, l.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Technologies:',
                                                    ' ',
                                                    (0, l.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: (0, g.mD)(
                                                            n
                                                        ).join(''),
                                                    }),
                                                ],
                                            }),
                                        i &&
                                            (0, l.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Client:',
                                                    ' ',
                                                    c
                                                        ? (0, l.jsx)('a', {
                                                              href: c,
                                                              target: '_blank',
                                                              rel: 'noopener noreferrer',
                                                              className:
                                                                  'text-foreground hover:text-secondary hover:underline',
                                                              children: i,
                                                          })
                                                        : (0, l.jsx)('span', {
                                                              className:
                                                                  'text-foreground',
                                                              children: i,
                                                          }),
                                                ],
                                            }),
                                        d &&
                                            (0, l.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Role:',
                                                    ' ',
                                                    (0, l.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: d,
                                                    }),
                                                ],
                                            }),
                                        m &&
                                            (0, l.jsxs)('p', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Role description:',
                                                    ' ',
                                                    (0, l.jsx)('span', {
                                                        className:
                                                            'text-foreground',
                                                        children: m,
                                                    }),
                                                ],
                                            }),
                                        x &&
                                            (0, l.jsxs)('div', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Challenges:',
                                                    ' ',
                                                    (0, l.jsx)('ul', {
                                                        className:
                                                            'text-foreground list-disc list-inside mt-2 space-y-1',
                                                        children: x.map(
                                                            (e, a) =>
                                                                (0, l.jsx)(
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
                        h &&
                            h.length > 0 &&
                            (0, l.jsxs)('div', {
                                className: 'my-8',
                                children: [
                                    (0, l.jsx)('h3', {
                                        className:
                                            'text-xl font-bold mb-4 text-secondary',
                                        children: 'Live Examples',
                                    }),
                                    (0, l.jsx)('div', {
                                        className: 'grid grid-cols-2 gap-4',
                                        children: h.map((e, a) =>
                                            (0, l.jsxs)(
                                                'a',
                                                {
                                                    href: e.link,
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    className:
                                                        'group border border-slate-700 rounded-lg overflow-hidden hover:border-secondary transition-colors',
                                                    children: [
                                                        (0, l.jsx)('div', {
                                                            className:
                                                                'relative h-32',
                                                            children: (0,
                                                            l.jsx)(o.default, {
                                                                src: '/'.concat(
                                                                    e.thumb
                                                                ),
                                                                alt: e.title,
                                                                fill: !0,
                                                                className:
                                                                    'object-cover group-hover:scale-105 transition-transform',
                                                                unoptimized: !0,
                                                            }),
                                                        }),
                                                        (0, l.jsx)('div', {
                                                            className: 'p-3',
                                                            children: (0,
                                                            l.jsx)('p', {
                                                                className:
                                                                    'text-sm font-medium text-gray-300 group-hover:text-secondary transition-colors',
                                                                children:
                                                                    e.title,
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                a
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        (0, l.jsx)(S, { images: t }),
                    ],
                })
            }
            function z(e) {
                let { open: a, handleClose: t, item: s } = e,
                    { title: r, titleLink: n } = s
                return (0, l.jsx)(f, {
                    open: a,
                    onOpenChange: t,
                    children: (0, l.jsxs)(y, {
                        className: 'max-w-6xl max-h-[90vh] overflow-y-auto',
                        children: [
                            (0, l.jsx)(w, {
                                children: (0, l.jsx)(j, {
                                    className: 'text-2xl',
                                    children: n
                                        ? (0, l.jsx)('a', {
                                              href: n,
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                              className:
                                                  'text-secondary hover:underline',
                                              children: r,
                                          })
                                        : (0, l.jsx)('span', { children: r }),
                                }),
                            }),
                            (0, l.jsx)('div', {
                                className: 'border-t border-border my-4',
                            }),
                            (0, l.jsx)(F, { item: s }),
                        ],
                    }),
                })
            }
            var H = t(7003)
            function D(e) {
                let { projects: a } = e,
                    [t, h] = (0, n.useState)(null),
                    [u, p] = (0, n.useState)(!1),
                    g = u ? a : a.slice(0, 9),
                    f = a.length > 9
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(i.P.div, {
                            className:
                                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
                            variants: x.bK,
                            initial: 'hidden',
                            whileInView: 'show',
                            viewport: { once: !0, margin: '-100px' },
                            children: g.map((e) => {
                                var a
                                return (0, l.jsx)(
                                    i.P.div,
                                    {
                                        className: 'group cursor-pointer',
                                        variants: x.Rf,
                                        whileHover: { y: -10 },
                                        onClick: () => h(e),
                                        children: (0, l.jsxs)('div', {
                                            className:
                                                'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all',
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    className:
                                                        'relative h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-slate-700',
                                                    children: [
                                                        (null ==
                                                        (a =
                                                            e.frontmatter
                                                                .images)
                                                            ? void 0
                                                            : a.thumb) &&
                                                            (0, l.jsx)(
                                                                o.default,
                                                                {
                                                                    src: '/'.concat(
                                                                        e
                                                                            .frontmatter
                                                                            .images
                                                                            .thumb
                                                                    ),
                                                                    alt: e
                                                                        .frontmatter
                                                                        .title,
                                                                    fill: !0,
                                                                    className:
                                                                        'object-cover group-hover:scale-110 transition-transform duration-500',
                                                                    unoptimized:
                                                                        !0,
                                                                }
                                                            ),
                                                        (0, l.jsx)('div', {
                                                            className:
                                                                'absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsxs)('div', {
                                                    className: 'p-6',
                                                    children: [
                                                        (0, l.jsxs)('div', {
                                                            className:
                                                                'flex items-start justify-between mb-3',
                                                            children: [
                                                                (0, l.jsx)(
                                                                    'h3',
                                                                    {
                                                                        className:
                                                                            'text-xl font-bold group-hover:text-secondary transition-colors',
                                                                        children:
                                                                            e
                                                                                .frontmatter
                                                                                .title,
                                                                    }
                                                                ),
                                                                e.frontmatter
                                                                    .featured &&
                                                                    (0, l.jsx)(
                                                                        'span',
                                                                        {
                                                                            className:
                                                                                'px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full font-semibold',
                                                                            children:
                                                                                'Featured',
                                                                        }
                                                                    ),
                                                            ],
                                                        }),
                                                        (0, l.jsx)('p', {
                                                            className:
                                                                'text-sm text-gray-400 mb-4 line-clamp-2',
                                                            children:
                                                                e.frontmatter
                                                                    .description,
                                                        }),
                                                        (0, l.jsxs)('div', {
                                                            className:
                                                                'flex flex-wrap gap-2 mb-4',
                                                            children: [
                                                                e.frontmatter.tech
                                                                    .slice(0, 3)
                                                                    .map((e) =>
                                                                        (0,
                                                                        l.jsx)(
                                                                            'span',
                                                                            {
                                                                                className:
                                                                                    'px-2 py-1 text-xs bg-gray-100 dark:bg-slate-700 rounded-full',
                                                                                children:
                                                                                    e,
                                                                            },
                                                                            e
                                                                        )
                                                                    ),
                                                                e.frontmatter
                                                                    .tech
                                                                    .length >
                                                                    3 &&
                                                                    (0, l.jsxs)(
                                                                        'span',
                                                                        {
                                                                            className:
                                                                                'px-2 py-1 text-xs text-gray-500',
                                                                            children:
                                                                                [
                                                                                    '+',
                                                                                    e
                                                                                        .frontmatter
                                                                                        .tech
                                                                                        .length -
                                                                                        3,
                                                                                ],
                                                                        }
                                                                    ),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)('div', {
                                                            className:
                                                                'flex gap-3',
                                                            children: [
                                                                e.frontmatter
                                                                    .liveUrl &&
                                                                    (0, l.jsxs)(
                                                                        'a',
                                                                        {
                                                                            href: e
                                                                                .frontmatter
                                                                                .liveUrl,
                                                                            target: '_blank',
                                                                            rel: 'noopener noreferrer',
                                                                            className:
                                                                                'flex items-center gap-1 text-sm text-secondary hover:underline',
                                                                            onClick:
                                                                                (
                                                                                    e
                                                                                ) =>
                                                                                    e.stopPropagation(),
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    l.jsx)(
                                                                                        c.A,
                                                                                        {
                                                                                            className:
                                                                                                'w-4 h-4',
                                                                                        }
                                                                                    ),
                                                                                    'Live',
                                                                                ],
                                                                        }
                                                                    ),
                                                                e.frontmatter
                                                                    .githubUrl &&
                                                                    (0, l.jsxs)(
                                                                        'a',
                                                                        {
                                                                            href: e
                                                                                .frontmatter
                                                                                .githubUrl,
                                                                            target: '_blank',
                                                                            rel: 'noopener noreferrer',
                                                                            className:
                                                                                'flex items-center gap-1 text-sm text-gray-400 hover:text-secondary hover:underline',
                                                                            onClick:
                                                                                (
                                                                                    e
                                                                                ) =>
                                                                                    e.stopPropagation(),
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    l.jsx)(
                                                                                        d.A,
                                                                                        {
                                                                                            className:
                                                                                                'w-4 h-4',
                                                                                        }
                                                                                    ),
                                                                                    'Code',
                                                                                ],
                                                                        }
                                                                    ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    e.slug
                                )
                            }),
                        }),
                        f &&
                            !u &&
                            (0, l.jsx)(i.P.div, {
                                className: 'flex justify-center mt-12',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: (0, l.jsxs)(H.$, {
                                    onClick: () => p(!0),
                                    variant: 'outline',
                                    size: 'lg',
                                    className: 'group',
                                    children: [
                                        'Load More Projects (',
                                        a.length - 9,
                                        ' more)',
                                        (0, l.jsx)(m.A, {
                                            className:
                                                'ml-2 h-4 h-4 group-hover:translate-y-1 transition-transform',
                                        }),
                                    ],
                                }),
                            }),
                        t &&
                            (0, l.jsx)(z, {
                                open: !!t,
                                handleClose: () => h(null),
                                item: (0, r._)(
                                    (0, s._)({ id: t.slug }, t.frontmatter),
                                    { description: t.content }
                                ),
                            }),
                    ],
                })
            }
        },
        2063: (e, a, t) => {
            'use strict'
            t.d(a, { X: () => n })
            var s = t(2115),
                r = t(5379)
            let l = [
                {
                    name: 'purple-pink',
                    light: { from: '#9333ea', via: '#ec4899', to: '#9333ea' },
                    dark: { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' },
                },
                {
                    name: 'blue-cyan',
                    light: { from: '#2563eb', via: '#06b6d4', to: '#2563eb' },
                    dark: { from: '#60a5fa', via: '#22d3ee', to: '#60a5fa' },
                },
                {
                    name: 'orange-red',
                    light: { from: '#ea580c', via: '#dc2626', to: '#ea580c' },
                    dark: { from: '#fb923c', via: '#f87171', to: '#fb923c' },
                },
                {
                    name: 'green-emerald',
                    light: { from: '#16a34a', via: '#059669', to: '#16a34a' },
                    dark: { from: '#4ade80', via: '#34d399', to: '#4ade80' },
                },
                {
                    name: 'violet-fuchsia',
                    light: { from: '#7c3aed', via: '#c026d3', to: '#7c3aed' },
                    dark: { from: '#a78bfa', via: '#e879f9', to: '#a78bfa' },
                },
            ]
            function n() {
                let [e, a] = (0, s.useState)(0),
                    { theme: t } = (0, r.D)()
                ;(0, s.useEffect)(() => {
                    a(Math.floor(Date.now() / 3e4) % l.length)
                    let e = setInterval(() => {
                        a((e) => (e + 1) % l.length)
                    }, 3e4)
                    return () => clearInterval(e)
                }, [])
                let n = l[e],
                    i = 'dark' === t ? n.dark : n.light
                return {
                    gradient: n,
                    colors: i,
                    gradientIndex: e,
                    cssGradient: 'linear-gradient(135deg, '
                        .concat(i.from, ' 0%, ')
                        .concat(i.via, ' 50%, ')
                        .concat(i.to, ' 100%)'),
                    textGradientClasses: 'from-['
                        .concat(i.from, '] via-[')
                        .concat(i.via, '] to-[')
                        .concat(i.to, ']'),
                }
            }
        },
        3447: (e, a, t) => {
            Promise.resolve().then(t.bind(t, 6320)),
                Promise.resolve().then(t.bind(t, 4539)),
                Promise.resolve().then(t.bind(t, 9891)),
                Promise.resolve().then(t.bind(t, 1326)),
                Promise.resolve().then(t.bind(t, 8743)),
                Promise.resolve().then(t.bind(t, 8892)),
                Promise.resolve().then(t.bind(t, 7864)),
                Promise.resolve().then(t.bind(t, 1527)),
                Promise.resolve().then(t.bind(t, 7874)),
                Promise.resolve().then(t.bind(t, 6639)),
                Promise.resolve().then(t.bind(t, 9252))
        },
        4539: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => E })
            var s = t(5155),
                r = t(2115),
                l = t(5993),
                n = t(508),
                i = t(9602),
                o = t(9633),
                c = t(8734),
                d = t(3664),
                m = t(9540),
                x = t(1543),
                h = t(1075),
                u = t(5016)
            function p() {
                return (0, s.jsxs)(h.P.a, {
                    onClick: u.IK,
                    className:
                        'font-neuropol text-3xl md:text-4xl cursor-pointer relative group',
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: [
                        (0, s.jsx)('span', {
                            className:
                                'bg-gradient-to-r from-secondary via-orange-500 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient',
                            children: 'SAGARSYS',
                        }),
                        (0, s.jsx)(h.P.div, {
                            className:
                                'absolute inset-0 blur-xl bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10',
                            animate: { scale: [1, 1.1, 1] },
                            transition: { duration: 2, repeat: 1 / 0 },
                        }),
                    ],
                })
            }
            var g = t(1983),
                f = t(5849),
                b = t(7389),
                v = t(8714),
                y = t(3101),
                w = t(5229)
            let j = v.bL,
                N = v.l9
            v.bm
            let k = v.ZL,
                P = r.forwardRef((e, a) => {
                    var { className: t } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.hJ,
                        (0, f._)(
                            (0, g._)(
                                {
                                    className: (0, u.cn)(
                                        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        t
                                    ),
                                },
                                r
                            ),
                            { ref: a }
                        )
                    )
                })
            P.displayName = v.hJ.displayName
            let C = (0, y.F)(
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
                _ = r.forwardRef((e, a) => {
                    var { side: t = 'right', className: r, children: l } = e,
                        n = (0, b._)(e, ['side', 'className', 'children'])
                    return (0, s.jsxs)(k, {
                        children: [
                            (0, s.jsx)(P, {}),
                            (0, s.jsxs)(
                                v.UC,
                                (0, f._)(
                                    (0, g._)(
                                        {
                                            ref: a,
                                            className: (0, u.cn)(
                                                C({ side: t }),
                                                r
                                            ),
                                        },
                                        n
                                    ),
                                    {
                                        children: [
                                            (0, s.jsx)(v.hE, {
                                                className: 'sr-only',
                                                children: 'Navigation Menu',
                                            }),
                                            l,
                                            (0, s.jsxs)(v.bm, {
                                                className:
                                                    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                                                children: [
                                                    (0, s.jsx)(w.A, {
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
            ;(_.displayName = v.UC.displayName),
                (r.forwardRef((e, a) => {
                    var { className: t } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.hE,
                        (0, g._)(
                            {
                                ref: a,
                                className: (0, u.cn)(
                                    'text-lg font-semibold text-foreground',
                                    t
                                ),
                            },
                            r
                        )
                    )
                }).displayName = v.hE.displayName),
                (r.forwardRef((e, a) => {
                    var { className: t } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.VY,
                        (0, g._)(
                            {
                                ref: a,
                                className: (0, u.cn)(
                                    'text-sm text-muted-foreground',
                                    t
                                ),
                            },
                            r
                        )
                    )
                }).displayName = v.VY.displayName)
            var A = t(7003)
            function E() {
                let [e, a] = (0, r.useState)(!1),
                    [t, u] = (0, r.useState)(!0),
                    [g, f] = (0, r.useState)(0),
                    { scrollY: b } = (0, x.L)(),
                    v = [
                        { name: 'home', label: 'Home', icon: l.A },
                        { name: 'about', label: 'About', icon: n.A },
                        { name: 'skills', label: 'Skills', icon: i.A },
                        { name: 'experience', label: 'Experience', icon: o.A },
                        { name: 'projects', label: 'Projects', icon: c.A },
                        { name: 'contact', label: 'Contact', icon: d.A },
                    ]
                ;(0, r.useEffect)(() => {
                    let e = b.on('change', (e) => {
                        let a = e - g
                        e < 100 ? u(!0) : a > 5 ? u(!1) : a < -5 && u(!0), f(e)
                    })
                    return () => e()
                }, [b, g])
                let y = (e, t) => {
                    e.preventDefault()
                    let s = document.getElementById(t)
                    if (s) {
                        let e =
                            window.innerWidth < 768
                                ? s.offsetTop
                                : s.offsetTop - 60
                        window.scrollTo({ top: e, behavior: 'smooth' }), a(!1)
                    }
                }
                return (0, s.jsx)(h.P.header, {
                    className: 'sticky top-0 left-0 right-0 z-50',
                    initial: { y: 0 },
                    animate: { y: t ? 0 : -100 },
                    transition: { duration: 0.3 },
                    children: (0, s.jsx)('div', {
                        className:
                            'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-sm',
                        children: (0, s.jsxs)('nav', {
                            className:
                                'max-w-7xl mx-auto flex items-center justify-between px-6 h-[60px]',
                            children: [
                                (0, s.jsx)('div', {
                                    className: 'flex-shrink-0',
                                    children: (0, s.jsx)(p, {}),
                                }),
                                (0, s.jsx)('div', {
                                    className:
                                        'hidden md:flex items-center gap-1',
                                    children: v.map((e) =>
                                        (0, s.jsxs)(
                                            h.P.a,
                                            {
                                                href: '#'.concat(e.name),
                                                onClick: (a) => y(a, e.name),
                                                className:
                                                    'flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-secondary transition-colors cursor-pointer font-medium rounded-lg hover:bg-secondary/5',
                                                whileHover: { y: -2 },
                                                children: [
                                                    (0, s.jsx)(e.icon, {
                                                        className: 'w-4 h-4',
                                                    }),
                                                    (0, s.jsx)('span', {
                                                        children: e.label,
                                                    }),
                                                ],
                                            },
                                            e.name
                                        )
                                    ),
                                }),
                                (0, s.jsx)('div', {
                                    className:
                                        'md:hidden flex items-center gap-2',
                                    children: (0, s.jsxs)(j, {
                                        open: e,
                                        onOpenChange: a,
                                        children: [
                                            (0, s.jsx)(N, {
                                                asChild: !0,
                                                children: (0, s.jsx)(A.$, {
                                                    variant: 'ghost',
                                                    size: 'icon',
                                                    className:
                                                        'text-gray-300 hover:text-secondary',
                                                    'aria-label': 'menu',
                                                    children: (0, s.jsx)(m.A, {
                                                        className: 'h-6 w-6',
                                                    }),
                                                }),
                                            }),
                                            (0, s.jsx)(_, {
                                                side: 'right',
                                                className:
                                                    'w-[280px] bg-slate-900/95 backdrop-blur-md border-slate-700',
                                                children: (0, s.jsx)('nav', {
                                                    className:
                                                        'flex flex-col space-y-2 mt-8',
                                                    'aria-label':
                                                        'mobile navigation',
                                                    children: v.map((e) =>
                                                        (0, s.jsxs)(
                                                            'a',
                                                            {
                                                                href: '#'.concat(
                                                                    e.name
                                                                ),
                                                                onClick: (a) =>
                                                                    y(
                                                                        a,
                                                                        e.name
                                                                    ),
                                                                className:
                                                                    'flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all font-medium',
                                                                children: [
                                                                    (0, s.jsx)(
                                                                        e.icon,
                                                                        {
                                                                            className:
                                                                                'w-5 h-5',
                                                                        }
                                                                    ),
                                                                    (0, s.jsx)(
                                                                        'span',
                                                                        {
                                                                            children:
                                                                                e.label,
                                                                        }
                                                                    ),
                                                                ],
                                                            },
                                                            e.name
                                                        )
                                                    ),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                })
            }
        },
        5016: (e, a, t) => {
            'use strict'
            t.d(a, { IK: () => i, cn: () => l, mD: () => n })
            var s = t(2821),
                r = t(5889)
            function l() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
                    a[t] = arguments[t]
                return (0, r.QP)((0, s.$)(a))
            }
            function n(e) {
                let a =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : ', ',
                    t = e.length
                return e.map((e, s) =>
                    s !== t - 1 ? ''.concat(e).concat(a) : ''.concat(e)
                )
            }
            let i = (e) => {
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
        },
        6320: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => l })
            var s = t(5155),
                r = t(1075)
            function l(e) {
                let { data: a } = e
                if (!a) return null
                let { name: t, image: l = '/images/sagar.jpg' } = a.frontmatter,
                    n = (function (e) {
                        let a = e.split('\n'),
                            t = [],
                            r = [],
                            l = 0,
                            n = () => {
                                r.length > 0 &&
                                    (t.push(
                                        (0, s.jsx)(
                                            'ul',
                                            {
                                                className: 'space-y-2 my-4',
                                                children: r.map((e, a) =>
                                                    (0, s.jsxs)(
                                                        'li',
                                                        {
                                                            className:
                                                                'flex gap-3',
                                                            children: [
                                                                (0, s.jsx)(
                                                                    'span',
                                                                    {
                                                                        className:
                                                                            'text-secondary mt-1',
                                                                        children:
                                                                            '→',
                                                                    }
                                                                ),
                                                                (0, s.jsx)(
                                                                    'span',
                                                                    {
                                                                        dangerouslySetInnerHTML:
                                                                            {
                                                                                __html: i(
                                                                                    e
                                                                                ),
                                                                            },
                                                                    }
                                                                ),
                                                            ],
                                                        },
                                                        a
                                                    )
                                                ),
                                            },
                                            'list-'.concat(l++)
                                        )
                                    ),
                                    (r = []))
                            },
                            i = (e) =>
                                (e = (e = (e = (e = (e = e.replace(
                                    /\*\*(.+?)\*\*/g,
                                    '<strong class="text-secondary font-semibold">$1</strong>'
                                )).replace(
                                    /__(.+?)__/g,
                                    '<strong class="text-secondary font-semibold">$1</strong>'
                                )).replace(
                                    /\*(.+?)\*/g,
                                    '<em class="text-gray-300">$1</em>'
                                )).replace(
                                    /_(.+?)_/g,
                                    '<em class="text-gray-300">$1</em>'
                                )).replace(
                                    /`(.+?)`/g,
                                    '<code class="px-2 py-1 bg-slate-700 rounded text-sm text-secondary">$1</code>'
                                ))
                        for (let e = 0; e < a.length; e++) {
                            let o = a[e].trim()
                            if (o) {
                                if (o.startsWith('## ')) {
                                    n()
                                    let e = o.replace('## ', '')
                                    t.push(
                                        (0, s.jsx)(
                                            'h3',
                                            {
                                                className:
                                                    'text-2xl font-bold text-white mt-8 mb-4',
                                                children: e,
                                            },
                                            'h3-'.concat(l++)
                                        )
                                    )
                                    continue
                                }
                                if (o.startsWith('### ')) {
                                    n()
                                    let e = o.replace('### ', '')
                                    t.push(
                                        (0, s.jsx)(
                                            'h4',
                                            {
                                                className:
                                                    'text-xl font-bold text-white mt-6 mb-3',
                                                children: e,
                                            },
                                            'h4-'.concat(l++)
                                        )
                                    )
                                    continue
                                }
                                if (o.startsWith('- ') || o.startsWith('* ')) {
                                    let e = o.replace(/^[-*] /, '')
                                    r.push(e)
                                    continue
                                }
                                n(),
                                    t.push(
                                        (0, s.jsx)(
                                            'p',
                                            {
                                                className:
                                                    'text-gray-300 leading-relaxed mb-4',
                                                dangerouslySetInnerHTML: {
                                                    __html: i(o),
                                                },
                                            },
                                            'p-'.concat(l++)
                                        )
                                    )
                            }
                        }
                        return n(), t
                    })(a.content)
                return (0, s.jsxs)('div', {
                    className:
                        'grid md:grid-cols-2 gap-12 md:gap-16 items-center',
                    children: [
                        (0, s.jsx)(r.P.div, {
                            className: 'order-2 md:order-1',
                            initial: { opacity: 0, x: -50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, margin: '-100px' },
                            transition: {
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                            },
                            children: (0, s.jsxs)('div', {
                                className:
                                    'relative aspect-square max-w-md mx-auto',
                                children: [
                                    (0, s.jsx)(r.P.div, {
                                        className:
                                            'absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl',
                                        animate: {
                                            scale: [1, 1.1, 1],
                                            opacity: [0.5, 0.7, 0.5],
                                        },
                                        transition: {
                                            duration: 4,
                                            repeat: 1 / 0,
                                        },
                                    }),
                                    (0, s.jsx)('div', {
                                        className:
                                            'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden p-4 shadow-xl',
                                        children: (0, s.jsx)('div', {
                                            className:
                                                'relative w-full h-full rounded-2xl overflow-hidden bg-slate-700',
                                            children: (0, s.jsx)('img', {
                                                src: l,
                                                alt: t,
                                                className:
                                                    'w-full h-full object-cover',
                                                loading: 'eager',
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, s.jsx)(r.P.div, {
                            className: 'order-1 md:order-2',
                            initial: { opacity: 0, x: 50 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: !0, margin: '-100px' },
                            transition: {
                                duration: 0.6,
                                ease: [0.25, 0.1, 0.25, 1],
                            },
                            children: (0, s.jsx)(r.P.div, {
                                className: 'space-y-2',
                                initial: { opacity: 0 },
                                whileInView: { opacity: 1 },
                                viewport: { once: !0 },
                                transition: { delay: 0.3 },
                                children: n,
                            }),
                        }),
                    ],
                })
            }
            t(2115)
        },
        6639: (e, a, t) => {
            'use strict'
            t.r(a), t.d(a, { default: () => n })
            var s = t(5155),
                r = t(1075),
                l = t(2063)
            function n(e) {
                let { title: a, subtitle: t, centered: n = !0 } = e,
                    { colors: i } = (0, l.X)()
                return (0, s.jsxs)(r.P.div, {
                    className: n
                        ? 'text-center mb-16 md:mb-24'
                        : 'mb-16 md:mb-24',
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0, margin: '-100px' },
                    transition: { duration: 0.6 },
                    children: [
                        (0, s.jsxs)('div', {
                            className: 'relative '.concat(
                                n ? 'flex flex-col items-center' : ''
                            ),
                            children: [
                                (0, s.jsx)('h2', {
                                    className:
                                        'text-4xl md:text-6xl font-bold mb-2',
                                    children: (0, s.jsx)('span', {
                                        className:
                                            'bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000',
                                        style: {
                                            backgroundImage:
                                                'linear-gradient(135deg, '
                                                    .concat(i.from, ' 0%, ')
                                                    .concat(i.via, ' 50%, ')
                                                    .concat(i.to, ' 100%)'),
                                        },
                                        children: a,
                                    }),
                                }),
                                (0, s.jsx)(r.P.div, {
                                    className:
                                        'h-2 rounded-full mb-6 w-48 md:w-64',
                                    style: {
                                        background: 'linear-gradient(90deg, '
                                            .concat(i.from, ', ')
                                            .concat(i.via, ', ')
                                            .concat(i.to, ')'),
                                    },
                                    initial: { scaleX: 0 },
                                    whileInView: { scaleX: 1 },
                                    viewport: { once: !0 },
                                    transition: { duration: 0.8, delay: 0.2 },
                                }),
                            ],
                        }),
                        t &&
                            (0, s.jsx)('p', {
                                className: 'text-lg md:text-xl text-gray-400',
                                children: t,
                            }),
                    ],
                })
            }
        },
        7003: (e, a, t) => {
            'use strict'
            t.d(a, { $: () => m })
            var s = t(1983),
                r = t(7389),
                l = t(5155),
                n = t(2115),
                i = t(2467),
                o = t(3101),
                c = t(5016)
            let d = (0, o.F)(
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
                m = n.forwardRef((e, a) => {
                    var {
                            className: t,
                            variant: n,
                            size: o,
                            asChild: m = !1,
                        } = e,
                        x = (0, r._)(e, [
                            'className',
                            'variant',
                            'size',
                            'asChild',
                        ])
                    let h = m ? i.DX : 'button'
                    return (0, l.jsx)(
                        h,
                        (0, s._)(
                            {
                                className: (0, c.cn)(
                                    d({ variant: n, size: o, className: t })
                                ),
                                ref: a,
                            },
                            x
                        )
                    )
                })
            m.displayName = 'Button'
        },
        7476: (e, a, t) => {
            'use strict'
            t.d(a, { Rf: () => r, bK: () => s })
            let s = {
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.3,
                        },
                    },
                },
                r = {
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                }
        },
        7864: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => n })
            var s = t(5155),
                r = t(2115),
                l = t(5379)
            function n() {
                let e = (0, r.useRef)(null),
                    { theme: a } = (0, l.D)(),
                    t = (0, r.useRef)([]),
                    n = (0, r.useRef)({ x: 0, y: 0 }),
                    i = (0, r.useRef)(0),
                    o = (0, r.useRef)(0)
                return (
                    (0, r.useEffect)(() => {
                        let a,
                            s = e.current
                        if (!s) return
                        let r = s.getContext('2d')
                        if (!r) return
                        let l = () => {
                            ;(s.width = window.innerWidth),
                                (s.height = window.innerHeight)
                        }
                        l()
                        let c = window.innerWidth < 768 ? 30 : 60
                        if (0 === t.current.length)
                            for (let e = 0; e < c; e++)
                                t.current.push({
                                    x: Math.random() * s.width,
                                    y: Math.random() * s.height,
                                    vx: (Math.random() - 0.5) * 0.3,
                                    vy: (Math.random() - 0.5) * 0.3,
                                    hue: 60 * Math.random() + 240,
                                })
                        !(function e() {
                            if (!r || !s) return
                            let l =
                                0.7 -
                                0.3 *
                                    (i.current /
                                        (document.documentElement.scrollHeight -
                                            window.innerHeight))
                            r.clearRect(0, 0, s.width, s.height),
                                (o.current = (o.current + 0.1) % 360),
                                t.current.forEach((e, a) => {
                                    ;(e.x += e.vx),
                                        (e.y += e.vy),
                                        (e.x < 0 || e.x > s.width) &&
                                            (e.vx *= -1),
                                        (e.y < 0 || e.y > s.height) &&
                                            (e.vy *= -1),
                                        (e.x = Math.max(
                                            0,
                                            Math.min(s.width, e.x)
                                        )),
                                        (e.y = Math.max(
                                            0,
                                            Math.min(s.height, e.y)
                                        )),
                                        (e.hue = (o.current + 6 * a) % 360)
                                    let n = 'hsla('
                                        .concat(
                                            260 +
                                                40 *
                                                    Math.sin(
                                                        (e.hue * Math.PI) / 180
                                                    ),
                                            ', 70%, 65%, '
                                        )
                                        .concat(l, ')')
                                    r.beginPath(),
                                        r.arc(e.x, e.y, 2, 0, 2 * Math.PI),
                                        (r.fillStyle = n),
                                        r.fill(),
                                        t.current.forEach((t, s) => {
                                            if (a === s) return
                                            let n = e.x - t.x,
                                                i = e.y - t.y,
                                                o = Math.sqrt(n * n + i * i)
                                            if (o < 120) {
                                                let a = 'hsla('
                                                    .concat(
                                                        260 +
                                                            40 *
                                                                Math.sin(
                                                                    (e.hue *
                                                                        Math.PI) /
                                                                        180
                                                                ),
                                                        ', 70%, 65%, '
                                                    )
                                                    .concat(
                                                        (1 - o / 120) * l * 0.5,
                                                        ')'
                                                    )
                                                r.beginPath(),
                                                    r.moveTo(e.x, e.y),
                                                    r.lineTo(t.x, t.y),
                                                    (r.strokeStyle = a),
                                                    (r.lineWidth = 0.5),
                                                    r.stroke()
                                            }
                                        })
                                }),
                                (a = requestAnimationFrame(e))
                        })()
                        let d = () => {
                                l()
                            },
                            m = () => {
                                i.current = window.scrollY
                            },
                            x = (e) => {
                                n.current = { x: e.clientX, y: e.clientY }
                            }
                        return (
                            window.addEventListener('resize', d, {
                                passive: !0,
                            }),
                            window.addEventListener('scroll', m, {
                                passive: !0,
                            }),
                            window.addEventListener('mousemove', x, {
                                passive: !0,
                            }),
                            () => {
                                cancelAnimationFrame(a),
                                    window.removeEventListener('resize', d),
                                    window.removeEventListener('scroll', m),
                                    window.removeEventListener('mousemove', x)
                            }
                        )
                    }, [a]),
                    (0, s.jsx)('canvas', {
                        ref: e,
                        className: 'fixed inset-0 pointer-events-none z-0',
                        style: { mixBlendMode: 'screen' },
                    })
                )
            }
        },
        7874: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => d })
            var s = t(5155),
                r = t(2115),
                l = t(6497),
                n = t(1075),
                i = t(5016),
                o = t(7003),
                c = t(2108)
            function d(e) {
                let { children: a } = e,
                    [t, d] = (0, r.useState)(!1)
                return (
                    (0, r.useEffect)(() => {
                        let e = window.scrollY,
                            a = !1,
                            t = () => {
                                let t = window.scrollY
                                t > 100 && t > e ? d(!0) : t <= 100 && d(!1),
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
                    (0, s.jsx)(l.N, {
                        children:
                            t &&
                            (0, s.jsx)(n.P.div, {
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0 },
                                transition: { duration: 0.2, ease: 'easeOut' },
                                className: 'fixed bottom-8 right-8 z-50',
                                onClick: i.IK,
                                role: 'presentation',
                                children:
                                    a ||
                                    (0, s.jsx)(o.$, {
                                        size: 'icon',
                                        variant: 'secondary',
                                        className:
                                            'rounded-full h-10 w-10 p-0 bg-secondary hover:bg-[#e64a19] text-white shadow-lg',
                                        'aria-label': 'scroll back to top',
                                        children: (0, s.jsx)(c.A, {
                                            className: 'h-4 w-4',
                                        }),
                                    }),
                            }),
                    })
                )
            }
        },
        8743: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => u })
            var s = t(5155),
                r = t(1075),
                l = t(4684),
                n = t(7333),
                i = t(7378),
                o = t(7161),
                c = t(64),
                d = t(3586),
                m = t(9602),
                x = t(2063)
            let h = {
                github: l.A,
                linkedin: n.A,
                twitter: i.A,
                instagram: o.A,
                youtube: c.A,
                soundcloud: d.A,
                stackblitz: m.A,
                codeSandbox: m.A,
            }
            function u(e) {
                let { contactInfo: a } = e,
                    { colors: t } = (0, x.X)(),
                    l = a
                        ? [
                              { name: 'GitHub', key: 'github', url: a.github },
                              {
                                  name: 'LinkedIn',
                                  key: 'linkedin',
                                  url: a.linkedin,
                              },
                              {
                                  name: 'Twitter',
                                  key: 'twitter',
                                  url: a.twitter,
                              },
                              {
                                  name: 'Instagram',
                                  key: 'instagram',
                                  url: a.instagram,
                              },
                              {
                                  name: 'YouTube',
                                  key: 'youtube',
                                  url: a.youtube,
                              },
                              {
                                  name: 'SoundCloud',
                                  key: 'soundcloud',
                                  url: a.soundcloud,
                              },
                              {
                                  name: 'StackBlitz',
                                  key: 'stackblitz',
                                  url: a.stackblitz,
                              },
                              {
                                  name: 'CodeSandbox',
                                  key: 'codeSandbox',
                                  url: a.codeSandbox,
                              },
                          ]
                        : []
                return (0, s.jsx)('footer', {
                    className:
                        'relative py-12 px-6 border-t border-gray-200 dark:border-slate-800',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                            (0, s.jsx)(r.P.div, {
                                className:
                                    'flex flex-wrap justify-center gap-4 mb-8',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: l.map((e, a) => {
                                    let t = h[e.key]
                                    return t
                                        ? (0, s.jsx)(
                                              r.P.a,
                                              {
                                                  href: e.url,
                                                  target: '_blank',
                                                  rel: 'noopener noreferrer',
                                                  className:
                                                      'w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:shadow-lg transition-all group',
                                                  initial: {
                                                      opacity: 0,
                                                      scale: 0.8,
                                                  },
                                                  whileInView: {
                                                      opacity: 1,
                                                      scale: 1,
                                                  },
                                                  viewport: { once: !0 },
                                                  transition: {
                                                      delay: 0.05 * a,
                                                  },
                                                  whileHover: {
                                                      scale: 1.1,
                                                      y: -3,
                                                  },
                                                  title: e.name,
                                                  'aria-label': e.name,
                                                  children: (0, s.jsx)(t, {
                                                      className:
                                                          'w-5 h-5 text-gray-300 group-hover:text-white transition-colors',
                                                  }),
                                              },
                                              e.key
                                          )
                                        : null
                                }),
                            }),
                            (0, s.jsxs)(r.P.div, {
                                className: 'text-center text-sm text-gray-400',
                                initial: { opacity: 0 },
                                whileInView: { opacity: 1 },
                                viewport: { once: !0 },
                                transition: { delay: 0.5 },
                                children: [
                                    (0, s.jsxs)('p', {
                                        className: 'mb-2',
                                        children: [
                                            'Designed & Built by',
                                            ' ',
                                            (0, s.jsx)('span', {
                                                className:
                                                    'font-semibold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000',
                                                style: {
                                                    backgroundImage:
                                                        'linear-gradient(90deg, '
                                                            .concat(
                                                                t.from,
                                                                ', '
                                                            )
                                                            .concat(t.via, ', ')
                                                            .concat(t.to, ')'),
                                                },
                                                children: 'Sagar Sawuck',
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)('p', {
                                        children: [
                                            '\xa9 ',
                                            new Date().getFullYear(),
                                            ' All rights reserved.',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                })
            }
        },
        8892: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => g })
            var s = t(5155),
                r = t(3350),
                l = t(9770),
                n = t(1075),
                i = t(5740),
                o = t(9867),
                c = t(4684),
                d = t(7333),
                m = t(3664),
                x = t(8803),
                h = t(2115),
                u = t(7476),
                p = t(2063)
            function g(e) {
                let {
                        email: a = 'sagar.sawuck@gmail.com',
                        github: t = 'https://github.com/sagarsys',
                        linkedin: g = 'https://linkedin.com/in/sagarsys/',
                    } = e,
                    { colors: f } = (0, p.X)(),
                    b = (0, r.d)(0),
                    v = (0, r.d)(0),
                    y = window.innerWidth,
                    w = window.innerHeight,
                    j = (0, l.G)(b, [0, y], [-20, 20]),
                    N = (0, l.G)(v, [0, w], [-20, 20]),
                    k = (0, l.G)(b, [0, y], [20, -20]),
                    P = (0, l.G)(v, [0, w], [20, -20])
                return (
                    (0, h.useEffect)(() => {
                        let e = (e) => {
                            b.set(e.clientX), v.set(e.clientY)
                        }
                        return (
                            window.addEventListener('mousemove', e),
                            () => window.removeEventListener('mousemove', e)
                        )
                    }, [b, v]),
                    (0, s.jsxs)('section', {
                        id: 'home',
                        className:
                            'relative min-h-screen flex items-center justify-center overflow-hidden',
                        children: [
                            (0, s.jsxs)('div', {
                                className:
                                    'absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950',
                                children: [
                                    (0, s.jsx)('div', {
                                        className:
                                            'absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]',
                                    }),
                                    (0, s.jsx)('div', {
                                        className:
                                            'absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]',
                                    }),
                                ],
                            }),
                            (0, s.jsx)(n.P.div, {
                                className:
                                    'absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl',
                                style: { x: j, y: N },
                                animate: { scale: [1, 1.2, 1] },
                                transition: {
                                    duration: 8,
                                    repeat: 1 / 0,
                                    ease: 'easeInOut',
                                },
                            }),
                            (0, s.jsx)(n.P.div, {
                                className:
                                    'absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl',
                                style: { x: k, y: P },
                                animate: { scale: [1, 1.3, 1] },
                                transition: {
                                    duration: 10,
                                    repeat: 1 / 0,
                                    ease: 'easeInOut',
                                },
                            }),
                            (0, s.jsx)(n.P.div, {
                                className:
                                    'absolute top-1/4 right-1/4 opacity-20',
                                animate: { y: [0, -20, 0], rotate: [0, 5, 0] },
                                transition: {
                                    duration: 6,
                                    repeat: 1 / 0,
                                    ease: 'easeInOut',
                                },
                                children: (0, s.jsx)(i.A, {
                                    className: 'w-10 h-10 text-purple-500',
                                }),
                            }),
                            (0, s.jsxs)(n.P.div, {
                                className:
                                    'relative z-10 max-w-5xl mx-auto px-6 text-center',
                                variants: u.bK,
                                initial: 'hidden',
                                animate: 'show',
                                children: [
                                    (0, s.jsx)(n.P.p, {
                                        className:
                                            'text-secondary text-lg md:text-xl mb-4',
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.5,
                                        },
                                        children: 'Hi, my name is',
                                    }),
                                    (0, s.jsx)(n.P.h1, {
                                        className:
                                            'text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight',
                                        initial: { opacity: 0, y: 30 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { duration: 1, delay: 0.8 },
                                        children: (0, s.jsx)('span', {
                                            className:
                                                'bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-1000 inline-block',
                                            style: {
                                                backgroundImage:
                                                    'linear-gradient(135deg, '
                                                        .concat(f.from, ' 0%, ')
                                                        .concat(f.via, ' 50%, ')
                                                        .concat(f.to, ' 100%)'),
                                            },
                                            children: 'Sagar Sawuck',
                                        }),
                                    }),
                                    (0, s.jsxs)(n.P.h2, {
                                        className:
                                            'text-2xl md:text-4xl lg:text-5xl leading-[1.14] font-bold text-gray-800 dark:text-gray-400 mb-8 md:mb-12',
                                        variants: u.Rf,
                                        children: [
                                            (0, s.jsx)(n.P.span, {
                                                className: 'inline-block',
                                                animate: {
                                                    backgroundPosition: [
                                                        '0% 50%',
                                                        '100% 50%',
                                                        '0% 50%',
                                                    ],
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: 1 / 0,
                                                    ease: 'linear',
                                                },
                                                style: {
                                                    backgroundImage:
                                                        'linear-gradient(90deg, '
                                                            .concat(
                                                                f.from,
                                                                ', '
                                                            )
                                                            .concat(f.via, ', ')
                                                            .concat(f.to, ', ')
                                                            .concat(
                                                                f.from,
                                                                ')'
                                                            ),
                                                    backgroundSize: '200% auto',
                                                    WebkitBackgroundClip:
                                                        'text',
                                                    WebkitTextFillColor:
                                                        'transparent',
                                                    backgroundClip: 'text',
                                                },
                                                children:
                                                    'Senior Fullstack Developer',
                                            }),
                                            ' with 10+ years of experience. I build',
                                            ' ',
                                            (0, s.jsx)(n.P.span, {
                                                className: 'inline-block',
                                                animate: {
                                                    backgroundPosition: [
                                                        '0% 50%',
                                                        '100% 50%',
                                                        '0% 50%',
                                                    ],
                                                },
                                                transition: {
                                                    duration: 5,
                                                    repeat: 1 / 0,
                                                    ease: 'linear',
                                                },
                                                style: {
                                                    backgroundImage:
                                                        'linear-gradient(90deg, '
                                                            .concat(
                                                                f.from,
                                                                ', '
                                                            )
                                                            .concat(f.via, ', ')
                                                            .concat(f.to, ', ')
                                                            .concat(
                                                                f.from,
                                                                ')'
                                                            ),
                                                    backgroundSize: '200% auto',
                                                    WebkitBackgroundClip:
                                                        'text',
                                                    WebkitTextFillColor:
                                                        'transparent',
                                                    backgroundClip: 'text',
                                                },
                                                children:
                                                    'exceptional digital experiences for people',
                                            }),
                                            ' ',
                                            '.',
                                        ],
                                    }),
                                    (0, s.jsx)(n.P.div, {
                                        className:
                                            'flex flex-wrap justify-center gap-3 mb-8 md:mb-12',
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        transition: {
                                            duration: 0.8,
                                            delay: 1.6,
                                        },
                                        children: [
                                            'TypeScript',
                                            'React',
                                            'Next.js',
                                            'Node.js',
                                            'AWS',
                                        ].map((e, a) =>
                                            (0, s.jsx)(
                                                n.P.span,
                                                {
                                                    className:
                                                        'px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium border border-slate-700/50 shadow-sm hover:shadow-md transition-all cursor-default',
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1,
                                                    },
                                                    transition: {
                                                        delay: 1.8 + 0.15 * a,
                                                        duration: 0.5,
                                                    },
                                                    whileHover: {
                                                        y: -2,
                                                        boxShadow:
                                                            '0 10px 30px '.concat(
                                                                f.via,
                                                                '30'
                                                            ),
                                                    },
                                                    children: e,
                                                },
                                                e
                                            )
                                        ),
                                    }),
                                    (0, s.jsxs)(n.P.div, {
                                        className:
                                            'flex flex-col sm:flex-row items-center justify-center gap-4 mb-8',
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.8,
                                            delay: 2.5,
                                        },
                                        children: [
                                            (0, s.jsxs)(n.P.button, {
                                                onClick: () => {
                                                    window.open(
                                                        '/cv.pdf',
                                                        '_blank'
                                                    )
                                                },
                                                className:
                                                    'relative inline-flex items-center gap-3 px-8 py-4 backdrop-blur-md rounded-full border shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden',
                                                style: {
                                                    background:
                                                        'linear-gradient(135deg, '
                                                            .concat(
                                                                f.from,
                                                                ', '
                                                            )
                                                            .concat(f.via, ', ')
                                                            .concat(f.to, ')'),
                                                    borderColor: f.via,
                                                },
                                                whileHover: {
                                                    y: -5,
                                                    scale: 1.02,
                                                },
                                                whileTap: { scale: 0.98 },
                                                children: [
                                                    (0, s.jsx)(o.A, {
                                                        className:
                                                            'w-5 h-5 text-white relative z-10 group-hover:animate-bounce',
                                                    }),
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'font-semibold text-white relative z-10',
                                                        children: 'Download CV',
                                                    }),
                                                    (0, s.jsx)(n.P.div, {
                                                        className:
                                                            'absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent',
                                                        animate: {
                                                            x: [
                                                                '-200%',
                                                                '200%',
                                                            ],
                                                        },
                                                        transition: {
                                                            duration: 3,
                                                            repeat: 1 / 0,
                                                            ease: 'linear',
                                                            repeatDelay: 1,
                                                        },
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)(n.P.button, {
                                                onClick: () => {
                                                    let e =
                                                        document.getElementById(
                                                            'projects'
                                                        )
                                                    e &&
                                                        e.scrollIntoView({
                                                            behavior: 'smooth',
                                                        })
                                                },
                                                className:
                                                    'inline-flex items-center gap-2 px-8 py-4 text-gray-300 hover:text-secondary transition-colors font-semibold',
                                                whileHover: { x: 5 },
                                                children: [
                                                    'View Projects',
                                                    (0, s.jsx)(n.P.span, {
                                                        animate: {
                                                            x: [0, 5, 0],
                                                        },
                                                        transition: {
                                                            duration: 1.5,
                                                            repeat: 1 / 0,
                                                        },
                                                        children: '→',
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)(n.P.div, {
                                        className:
                                            'flex items-center justify-center gap-4',
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                            duration: 0.8,
                                            delay: 2.8,
                                        },
                                        children: [
                                            (0, s.jsx)(n.P.a, {
                                                href: t,
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                                className:
                                                    'w-10 h-10 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center hover:border-white transition-all',
                                                whileHover: {
                                                    scale: 1.15,
                                                    y: -3,
                                                },
                                                'aria-label': 'GitHub',
                                                children: (0, s.jsx)(c.A, {
                                                    className: 'w-5 h-5',
                                                }),
                                            }),
                                            (0, s.jsx)(n.P.a, {
                                                href: g,
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                                className:
                                                    'w-10 h-10 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center hover:border-[#0A66C2] transition-all',
                                                whileHover: {
                                                    scale: 1.15,
                                                    y: -3,
                                                },
                                                'aria-label': 'LinkedIn',
                                                children: (0, s.jsx)(d.A, {
                                                    className: 'w-5 h-5',
                                                }),
                                            }),
                                            (0, s.jsx)(n.P.a, {
                                                href: 'mailto:'.concat(a),
                                                className:
                                                    'w-10 h-10 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center hover:border-secondary transition-all',
                                                whileHover: {
                                                    scale: 1.15,
                                                    y: -3,
                                                },
                                                'aria-label': 'Email',
                                                children: (0, s.jsx)(m.A, {
                                                    className: 'w-5 h-5',
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)(n.P.div, {
                                className:
                                    'absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer',
                                animate: { y: [0, 10, 0] },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    ease: 'easeInOut',
                                },
                                onClick: () => {
                                    let e = document.getElementById('about')
                                    null == e ||
                                        e.scrollIntoView({ behavior: 'smooth' })
                                },
                                children: (0, s.jsxs)('div', {
                                    className:
                                        'flex flex-col items-center gap-2',
                                    children: [
                                        (0, s.jsx)('span', {
                                            className: 'text-sm font-medium',
                                            children: 'Scroll Down',
                                        }),
                                        (0, s.jsx)(x.A, {
                                            className: 'w-6 h-6',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    })
                )
            }
        },
        9252: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => d })
            var s = t(5155),
                r = t(1075),
                l = t(7476),
                n = t(6639),
                i = t(2063),
                o = t(457)
            let c = [
                {
                    name: 'Next.js',
                    icon: o.wlC,
                    color: '#000000',
                    darkColor: '#FFFFFF',
                },
                {
                    name: 'React',
                    icon: o.GWR,
                    color: '#61DAFB',
                    darkColor: '#61DAFB',
                },
                {
                    name: 'TypeScript',
                    icon: o.cyb,
                    color: '#3178C6',
                    darkColor: '#3178C6',
                },
                {
                    name: 'Tailwind CSS',
                    icon: o.IR8,
                    color: '#06B6D4',
                    darkColor: '#06B6D4',
                },
                {
                    name: 'JavaScript',
                    icon: o.AeH,
                    color: '#F7DF1E',
                    darkColor: '#F7DF1E',
                },
                {
                    name: 'HTML5',
                    icon: o.$gB,
                    color: '#E34F26',
                    darkColor: '#E34F26',
                },
                {
                    name: 'CSS3',
                    icon: o.jrh,
                    color: '#1572B6',
                    darkColor: '#1572B6',
                },
                {
                    name: 'Node.js',
                    icon: o.h$$,
                    color: '#339933',
                    darkColor: '#339933',
                },
                {
                    name: 'Express',
                    icon: o.t5I,
                    color: '#000000',
                    darkColor: '#FFFFFF',
                },
                {
                    name: 'GraphQL',
                    icon: o.S9M,
                    color: '#E10098',
                    darkColor: '#E10098',
                },
                {
                    name: 'PostgreSQL',
                    icon: o.$Wy,
                    color: '#4169E1',
                    darkColor: '#4169E1',
                },
                {
                    name: 'MongoDB',
                    icon: o.$pK,
                    color: '#47A248',
                    darkColor: '#47A248',
                },
                {
                    name: 'AWS',
                    icon: o.gqN,
                    color: '#FF9900',
                    darkColor: '#FF9900',
                },
                {
                    name: 'Docker',
                    icon: o.tih,
                    color: '#2496ED',
                    darkColor: '#2496ED',
                },
                {
                    name: 'Git',
                    icon: o.rYG,
                    color: '#F05032',
                    darkColor: '#F05032',
                },
                {
                    name: 'Figma',
                    icon: o.lNO,
                    color: '#F24E1E',
                    darkColor: '#F24E1E',
                },
            ]
            function d() {
                let { colors: e } = (0, i.X)()
                return (0, s.jsx)('section', {
                    id: 'skills',
                    className: 'py-20 md:py-32 px-6 relative',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                            (0, s.jsx)(n.default, {
                                title: 'Skills & Technologies',
                                subtitle:
                                    'The magical tools I use to bring ideas to life',
                            }),
                            (0, s.jsx)(r.P.div, {
                                className:
                                    'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-6',
                                variants: l.bK,
                                initial: 'hidden',
                                whileInView: 'show',
                                viewport: { once: !0, margin: '-100px' },
                                children: c.map((e, a) => {
                                    let t = e.icon
                                    return (0, s.jsx)(
                                        r.P.div,
                                        {
                                            className: 'group relative',
                                            variants: l.Rf,
                                            children: (0, s.jsxs)(r.P.div, {
                                                className:
                                                    'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl p-3 md:p-8 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer overflow-hidden',
                                                whileHover: {
                                                    scale: 1.05,
                                                    y: -5,
                                                },
                                                transition: { duration: 0.2 },
                                                children: [
                                                    (0, s.jsx)(r.P.div, {
                                                        className:
                                                            'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                                                        style: {
                                                            background:
                                                                'radial-gradient(circle at center, '.concat(
                                                                    e.color,
                                                                    '20, transparent 70%)'
                                                                ),
                                                        },
                                                    }),
                                                    (0, s.jsx)(r.P.div, {
                                                        className:
                                                            'text-3xl md:text-5xl mb-1 md:mb-3 relative z-10',
                                                        whileHover: {
                                                            rotate: [
                                                                0, -5, 5, 0,
                                                            ],
                                                            scale: 1.1,
                                                        },
                                                        transition: {
                                                            duration: 0.3,
                                                        },
                                                        children: (0, s.jsx)(
                                                            t,
                                                            {
                                                                style: {
                                                                    color: e.color,
                                                                },
                                                                className:
                                                                    'dark:opacity-90',
                                                            }
                                                        ),
                                                    }),
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-xs md:text-base font-medium text-gray-300 relative z-10 text-center',
                                                        children: e.name,
                                                    }),
                                                    (0, s.jsx)(r.P.div, {
                                                        className:
                                                            'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100',
                                                        animate: {
                                                            x: [
                                                                '-100%',
                                                                '100%',
                                                            ],
                                                        },
                                                        transition: {
                                                            duration: 1.5,
                                                            repeat: 1 / 0,
                                                            repeatDelay: 1,
                                                        },
                                                    }),
                                                ],
                                            }),
                                        },
                                        e.name
                                    )
                                }),
                            }),
                        ],
                    }),
                })
            }
        },
        9891: (e, a, t) => {
            'use strict'
            t.d(a, { default: () => d })
            var s = t(5155),
                r = t(2115),
                l = t(9633),
                n = t(1075)
            function i(e) {
                let { event: a, content: t, isLast: r } = e
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
                                        (0, s.jsx)(n.P.div, {
                                            className:
                                                'w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg',
                                            whileHover: {
                                                scale: 1.1,
                                                rotate: 5,
                                            },
                                            children: (0, s.jsx)(l.A, {
                                                className: 'text-white',
                                                size: 20,
                                            }),
                                        }),
                                        !r &&
                                            (0, s.jsx)('div', {
                                                className:
                                                    'w-0.5 bg-gradient-to-b from-secondary to-transparent min-h-[100px] mt-2 flex-grow',
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
                                                    'text-secondary text-lg font-secondary font-semibold',
                                                children: [
                                                    a.startDate,
                                                    ' - ',
                                                    a.endDate,
                                                ],
                                            }),
                                        }),
                                        (0, s.jsxs)(n.P.div, {
                                            className:
                                                'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all',
                                            whileHover: { y: -2 },
                                            children: [
                                                (0, s.jsx)('h6', {
                                                    className:
                                                        'text-xl font-bold mb-2 text-white',
                                                    children: a.title,
                                                }),
                                                (0, s.jsxs)('h6', {
                                                    className:
                                                        'text-secondary text-lg mb-4',
                                                    children: [
                                                        a.company,
                                                        ' • ',
                                                        a.location,
                                                    ],
                                                }),
                                                (0, s.jsx)('div', {
                                                    className:
                                                        'text-sm text-gray-400 whitespace-pre-wrap mb-4',
                                                    children: t,
                                                }),
                                                a.tags &&
                                                    a.tags.length > 0 &&
                                                    (0, s.jsx)('div', {
                                                        className:
                                                            'flex flex-wrap gap-2',
                                                        children: a.tags.map(
                                                            (e) =>
                                                                (0, s.jsx)(
                                                                    'span',
                                                                    {
                                                                        className:
                                                                            'px-3 py-1 text-xs bg-secondary/10 dark:bg-secondary/20 text-secondary rounded-full font-medium',
                                                                        children:
                                                                            e,
                                                                    },
                                                                    e
                                                                )
                                                        ),
                                                    }),
                                            ],
                                        }),
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
                                            'text-secondary text-xl font-secondary font-semibold',
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
                                        (0, s.jsx)(n.P.div, {
                                            className:
                                                'w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg',
                                            whileHover: {
                                                scale: 1.1,
                                                rotate: 5,
                                            },
                                            children: (0, s.jsx)(l.A, {
                                                className: 'text-white',
                                                size: 24,
                                            }),
                                        }),
                                        !r &&
                                            (0, s.jsx)('div', {
                                                className:
                                                    'w-0.5 bg-gradient-to-b from-secondary to-transparent min-h-[120px] mt-2 flex-grow',
                                            }),
                                    ],
                                }),
                                (0, s.jsx)('div', {
                                    className: 'flex-1 pl-8 min-w-0',
                                    children: (0, s.jsxs)(n.P.div, {
                                        className:
                                            'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all',
                                        whileHover: { y: -5 },
                                        children: [
                                            (0, s.jsx)('h6', {
                                                className:
                                                    'text-2xl font-bold mb-2 text-white',
                                                children: a.title,
                                            }),
                                            (0, s.jsxs)('h6', {
                                                className:
                                                    'text-secondary text-lg mb-4',
                                                children: [
                                                    a.company,
                                                    ' • ',
                                                    a.location,
                                                ],
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'text-sm text-gray-400 whitespace-pre-wrap mb-4',
                                                children: t,
                                            }),
                                            a.tags &&
                                                a.tags.length > 0 &&
                                                (0, s.jsx)('div', {
                                                    className:
                                                        'flex flex-wrap gap-2',
                                                    children: a.tags.map((e) =>
                                                        (0, s.jsx)(
                                                            'span',
                                                            {
                                                                className:
                                                                    'px-3 py-1 text-xs bg-secondary/10 dark:bg-secondary/20 text-secondary rounded-full font-medium',
                                                                children: e,
                                                            },
                                                            e
                                                        )
                                                    ),
                                                }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                })
            }
            var o = t(7003),
                c = t(4033)
            function d(e) {
                let { experiences: a } = e,
                    [t, l] = (0, r.useState)(!1),
                    d = t ? a : a.slice(0, 5),
                    m = a.length > 5
                return (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)('div', {
                            className: 'flex flex-col',
                            children: d.map((e, r) =>
                                (0, s.jsx)(
                                    n.P.div,
                                    {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                            delay: 0.1 * r,
                                            duration: 0.5,
                                        },
                                        children: (0, s.jsx)(i, {
                                            event: e.frontmatter,
                                            content: e.content,
                                            isLast: t
                                                ? r === a.length - 1
                                                : r === d.length - 1,
                                        }),
                                    },
                                    e.slug
                                )
                            ),
                        }),
                        m &&
                            !t &&
                            (0, s.jsx)(n.P.div, {
                                className: 'flex justify-center mt-12',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: (0, s.jsxs)(o.$, {
                                    onClick: () => l(!0),
                                    variant: 'outline',
                                    size: 'lg',
                                    className: 'group',
                                    children: [
                                        'Show More Experiences (',
                                        a.length - 5,
                                        ' more)',
                                        (0, s.jsx)(c.A, {
                                            className:
                                                'ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform',
                                        }),
                                    ],
                                }),
                            }),
                    ],
                })
            }
        },
    },
    (e) => {
        e.O(0, [362, 549, 441, 255, 358], () => e((e.s = 3447))), (_N_E = e.O())
    },
])
