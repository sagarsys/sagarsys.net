;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
        83: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => h })
            var s = a(5155),
                r = a(1075),
                l = a(2115),
                n = a(6497),
                i = a(368),
                o = a(7937),
                c = a(7713),
                d = a(2063)
            function m(e) {
                let { content: t } = e,
                    [a, m] = (0, l.useState)(0),
                    [h, x] = (0, l.useState)(!1),
                    [u, f] = (0, l.useState)(0),
                    p = (0, l.useRef)(null),
                    { colors: g, mounted: b } = (0, d.X)(),
                    v = b
                        ? g
                        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }
                ;(0, l.useEffect)(() => {
                    let e = () => x(window.innerWidth < 768)
                    return (
                        e(),
                        window.addEventListener('resize', e),
                        () => window.removeEventListener('resize', e)
                    )
                }, [])
                let y = t
                        .split(/(?=^## )/gm)
                        .filter(Boolean)
                        .map((e) => {
                            let t = e.trim().split('\n'),
                                a = t[0] || ''
                            return a.startsWith('## ')
                                ? {
                                      title: a.replace('## ', ''),
                                      content: t.slice(1).join('\n').trim(),
                                  }
                                : null
                        })
                        .filter((e) => null !== e),
                    w = (e) => {
                        f(e),
                            1 === e
                                ? a < y.length - 1 && m(a + 1)
                                : a > 0 && m(a - 1)
                    },
                    j = (e) => {
                        m(e)
                        let t = p.current
                        t &&
                            t.scrollTo({
                                left: t.clientWidth * e,
                                behavior: 'smooth',
                            })
                    }
                return h
                    ? (0, s.jsxs)('div', {
                          className: 'relative w-full',
                          style: {
                              '--scroll-color-from': v.from,
                              '--scroll-color-to': v.via,
                          },
                          children: [
                              (0, s.jsx)('div', {
                                  className: 'relative min-h-[400px]',
                                  children: (0, s.jsx)(n.N, {
                                      initial: !1,
                                      custom: u,
                                      mode: 'wait',
                                      children: (0, s.jsx)(
                                          r.P.div,
                                          {
                                              custom: u,
                                              variants: {
                                                  enter: (e) => ({
                                                      x: e > 0 ? 300 : -300,
                                                      opacity: 0,
                                                  }),
                                                  center: { x: 0, opacity: 1 },
                                                  exit: (e) => ({
                                                      x: e > 0 ? -300 : 300,
                                                      opacity: 0,
                                                  }),
                                              },
                                              initial: 'enter',
                                              animate: 'center',
                                              exit: 'exit',
                                              transition: {
                                                  x: {
                                                      type: 'spring',
                                                      stiffness: 300,
                                                      damping: 30,
                                                  },
                                                  opacity: { duration: 0.2 },
                                              },
                                              children: (0, s.jsxs)('div', {
                                                  className:
                                                      'bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-6 flex flex-col shadow-2xl',
                                                  children: [
                                                      (0, s.jsx)('h3', {
                                                          className:
                                                              'text-2xl font-bold mb-4',
                                                          children: (0, s.jsx)(
                                                              'span',
                                                              {
                                                                  className:
                                                                      'bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000',
                                                                  style: {
                                                                      backgroundImage:
                                                                          'linear-gradient(135deg, '
                                                                              .concat(
                                                                                  v.from,
                                                                                  ', '
                                                                              )
                                                                              .concat(
                                                                                  v.via,
                                                                                  ', '
                                                                              )
                                                                              .concat(
                                                                                  v.to,
                                                                                  ')'
                                                                              ),
                                                                  },
                                                                  children:
                                                                      y[a]
                                                                          .title,
                                                              }
                                                          ),
                                                      }),
                                                      (0, s.jsx)('div', {
                                                          className:
                                                              'space-y-2',
                                                          children: (0, c.G)(
                                                              y[a].content
                                                          ),
                                                      }),
                                                  ],
                                              }),
                                          },
                                          a
                                      ),
                                  }),
                              }),
                              a > 0 &&
                                  (0, s.jsx)('button', {
                                      onClick: () => w(-1),
                                      className:
                                          'absolute left-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20',
                                      children: (0, s.jsx)(i.A, {
                                          className: 'w-5 h-5 text-white',
                                      }),
                                  }),
                              a < y.length - 1 &&
                                  (0, s.jsx)('button', {
                                      onClick: () => w(1),
                                      className:
                                          'absolute right-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20',
                                      children: (0, s.jsx)(o.A, {
                                          className: 'w-5 h-5 text-white',
                                      }),
                                  }),
                              (0, s.jsx)('div', {
                                  className: 'flex justify-center gap-2 mt-6',
                                  children: y.map((e, t) =>
                                      (0, s.jsx)(
                                          'button',
                                          {
                                              onClick: () => {
                                                  m(t)
                                              },
                                              className:
                                                  'h-2 rounded-full transition-all '.concat(
                                                      t === a
                                                          ? 'w-8 bg-secondary'
                                                          : 'w-2 bg-slate-600'
                                                  ),
                                          },
                                          t
                                      )
                                  ),
                              }),
                              (0, s.jsxs)('div', {
                                  className:
                                      'text-center mt-3 text-sm text-gray-500',
                                  children: [a + 1, ' / ', y.length],
                              }),
                          ],
                      })
                    : (0, s.jsxs)('div', {
                          className: 'relative w-full',
                          style: {
                              '--scroll-color-from': v.from,
                              '--scroll-color-to': v.via,
                          },
                          children: [
                              (0, s.jsx)('div', {
                                  ref: p,
                                  className:
                                      'overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth',
                                  onScroll: () => {
                                      let e = p.current
                                      e &&
                                          m(
                                              Math.round(
                                                  e.scrollLeft / e.clientWidth
                                              )
                                          )
                                  },
                                  style: {
                                      scrollbarWidth: 'none',
                                      msOverflowStyle: 'none',
                                  },
                                  children: (0, s.jsx)('div', {
                                      className: 'flex',
                                      children: y.map((e, t) =>
                                          (0, s.jsx)(
                                              'div',
                                              {
                                                  className:
                                                      'w-full flex-shrink-0 snap-center',
                                                  children: (0, s.jsxs)('div', {
                                                      className:
                                                          'bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-12 h-[600px] flex flex-col shadow-2xl',
                                                      children: [
                                                          (0, s.jsx)('h3', {
                                                              className:
                                                                  'text-4xl font-bold mb-6',
                                                              children: (0,
                                                              s.jsx)('span', {
                                                                  className:
                                                                      'bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000',
                                                                  style: {
                                                                      backgroundImage:
                                                                          'linear-gradient(135deg, '
                                                                              .concat(
                                                                                  v.from,
                                                                                  ', '
                                                                              )
                                                                              .concat(
                                                                                  v.via,
                                                                                  ', '
                                                                              )
                                                                              .concat(
                                                                                  v.to,
                                                                                  ')'
                                                                              ),
                                                                  },
                                                                  children:
                                                                      e.title,
                                                              }),
                                                          }),
                                                          (0, s.jsx)('div', {
                                                              className:
                                                                  'space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2',
                                                              children: (0,
                                                              c.G)(e.content),
                                                          }),
                                                      ],
                                                  }),
                                              },
                                              t
                                          )
                                      ),
                                  }),
                              }),
                              a > 0 &&
                                  (0, s.jsx)(r.P.button, {
                                      onClick: () => j(a - 1),
                                      className:
                                          'absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20',
                                      whileHover: { scale: 1.1 },
                                      whileTap: { scale: 0.9 },
                                      children: (0, s.jsx)(i.A, {
                                          className: 'w-6 h-6 text-white',
                                      }),
                                  }),
                              a < y.length - 1 &&
                                  (0, s.jsx)(r.P.button, {
                                      onClick: () => j(a + 1),
                                      className:
                                          'absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20',
                                      whileHover: { scale: 1.1 },
                                      whileTap: { scale: 0.9 },
                                      children: (0, s.jsx)(o.A, {
                                          className: 'w-6 h-6 text-white',
                                      }),
                                  }),
                              (0, s.jsx)('div', {
                                  className: 'flex justify-center gap-2 mt-8',
                                  children: y.map((e, t) =>
                                      (0, s.jsx)(
                                          r.P.button,
                                          {
                                              onClick: () => j(t),
                                              className:
                                                  'h-2 rounded-full transition-all '.concat(
                                                      t === a
                                                          ? 'w-8 bg-secondary'
                                                          : 'w-2 bg-slate-600 hover:bg-slate-500'
                                                  ),
                                              whileHover: { scale: 1.2 },
                                              whileTap: { scale: 0.9 },
                                          },
                                          t
                                      )
                                  ),
                              }),
                              (0, s.jsxs)('div', {
                                  className:
                                      'text-center mt-4 text-sm text-gray-500',
                                  children: [a + 1, ' / ', y.length],
                              }),
                          ],
                      })
            }
            function h(e) {
                let { data: t } = e
                if (!t) return null
                let { name: a, image: l = '/images/sagar.jpg' } = t.frontmatter
                return (0, s.jsxs)('div', {
                    className: 'grid md:grid-cols-2 gap-8 md:gap-16',
                    children: [
                        (0, s.jsx)(r.P.div, {
                            className:
                                'order-2 md:order-1 md:sticky md:top-24 md:h-fit',
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0 },
                            transition: { duration: 0.6 },
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
                                                alt: a,
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
                            className: 'order-1 md:order-2 w-full',
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0 },
                            transition: { duration: 0.6 },
                            children: (0, s.jsx)(m, { content: t.content }),
                        }),
                    ],
                })
            }
        },
        1326: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => y })
            var s = a(1983),
                r = a(5849),
                l = a(5155),
                n = a(2115),
                i = a(1075),
                o = a(4684),
                c = a(7333),
                d = a(7378),
                m = a(7161),
                h = a(64),
                x = a(3586),
                u = a(9602),
                f = a(3664),
                p = a(8085),
                g = a(6639),
                b = a(7003),
                v = a(2063)
            function y(e) {
                let {
                        email: t = 'sagar.sawuck@gmail.com',
                        github: a = 'https://github.com/sagarsys',
                        linkedin: y = 'https://linkedin.com/in/sagarsys/',
                    } = e,
                    { colors: w, mounted: j } = (0, v.X)(),
                    N = j
                        ? w
                        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' },
                    [k, P] = (0, n.useState)({
                        name: '',
                        email: '',
                        message: '',
                    }),
                    C = [
                        {
                            name: 'GitHub',
                            url: a,
                            icon: o.A,
                            hoverColor: 'hover:bg-white hover:text-gray-900',
                        },
                        {
                            name: 'LinkedIn',
                            url: y,
                            icon: c.A,
                            hoverColor: 'hover:bg-[#0A66C2] hover:text-white',
                        },
                        {
                            name: 'Twitter',
                            url: 'https://twitter.com/sagarsys',
                            icon: d.A,
                            hoverColor: 'hover:bg-[#1DA1F2] hover:text-white',
                        },
                        {
                            name: 'Instagram',
                            url: 'https://instagram.com/sagarsys',
                            icon: m.A,
                            hoverColor: 'hover:bg-[#E4405F] hover:text-white',
                        },
                        {
                            name: 'YouTube',
                            url: 'https://www.youtube.com/channel/UCZmvx7n2wV69KSXeH8VZcZg',
                            icon: h.A,
                            hoverColor: 'hover:bg-[#FF0000] hover:text-white',
                        },
                        {
                            name: 'SoundCloud',
                            url: 'https://soundcloud.com/sagarsys',
                            icon: x.A,
                            hoverColor: 'hover:bg-[#FF5500] hover:text-white',
                        },
                        {
                            name: 'StackBlitz',
                            url: 'https://stackblitz.com/@sagarsys',
                            icon: u.A,
                            hoverColor: 'hover:bg-[#1389FD] hover:text-white',
                        },
                        {
                            name: 'CodeSandbox',
                            url: 'https://codesandbox.io/u/sagarsys/',
                            icon: u.A,
                            hoverColor: 'hover:bg-black hover:text-white',
                        },
                    ]
                return (0, l.jsx)('section', {
                    id: 'contact',
                    className: 'py-20 md:py-32 px-6 relative',
                    children: (0, l.jsxs)('div', {
                        className: 'max-w-6xl mx-auto',
                        children: [
                            (0, l.jsx)(g.default, {
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
                                                href: 'mailto:'.concat(t),
                                                className: 'block',
                                                whileHover: { y: -5 },
                                                children: (0, l.jsx)('div', {
                                                    className:
                                                        'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group',
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
                                                                                        N.from,
                                                                                        ', '
                                                                                    )
                                                                                    .concat(
                                                                                        N.via,
                                                                                        ', '
                                                                                    )
                                                                                    .concat(
                                                                                        N.to,
                                                                                        ')'
                                                                                    ),
                                                                        },
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                f.A,
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
                                                                                            t,
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
                                                    (0, l.jsx)('div', {
                                                        className:
                                                            'flex flex-wrap justify-start gap-3',
                                                        children: C.map(
                                                            (e, t) => {
                                                                let a = e.icon
                                                                return (0,
                                                                l.jsx)(
                                                                    i.P.a,
                                                                    {
                                                                        href: e.url,
                                                                        target: '_blank',
                                                                        rel: 'noopener noreferrer',
                                                                        className:
                                                                            'w-12 h-12 rounded-full bg-slate-700 text-gray-300 flex items-center justify-center transition-all '.concat(
                                                                                e.hoverColor
                                                                            ),
                                                                        initial:
                                                                            {
                                                                                opacity: 0,
                                                                                scale: 0.8,
                                                                            },
                                                                        whileInView:
                                                                            {
                                                                                opacity: 1,
                                                                                scale: 1,
                                                                            },
                                                                        viewport:
                                                                            {
                                                                                once: !0,
                                                                            },
                                                                        transition:
                                                                            {
                                                                                delay:
                                                                                    0.05 *
                                                                                    t,
                                                                            },
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.1,
                                                                                y: -3,
                                                                            },
                                                                        'aria-label':
                                                                            e.name,
                                                                        title: e.name,
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                a,
                                                                                {
                                                                                    className:
                                                                                        'w-5 h-5',
                                                                                }
                                                                            ),
                                                                    },
                                                                    e.name
                                                                )
                                                            }
                                                        ),
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
                                                let a = encodeURIComponent(
                                                        'Portfolio Contact from '.concat(
                                                            k.name
                                                        )
                                                    ),
                                                    s = encodeURIComponent(
                                                        'From: '
                                                            .concat(
                                                                k.name,
                                                                '\nEmail: '
                                                            )
                                                            .concat(
                                                                k.email,
                                                                '\n\nMessage:\n'
                                                            )
                                                            .concat(k.message)
                                                    )
                                                window.location.href = 'mailto:'
                                                    .concat(t, '?subject=')
                                                    .concat(a, '&body=')
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
                                                            value: k.name,
                                                            onChange: (e) =>
                                                                P(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            k
                                                                        ),
                                                                        {
                                                                            name: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
                                                                ),
                                                            className:
                                                                'w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-white',
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
                                                            value: k.email,
                                                            onChange: (e) =>
                                                                P(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            k
                                                                        ),
                                                                        {
                                                                            email: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
                                                                ),
                                                            className:
                                                                'w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-white',
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
                                                            value: k.message,
                                                            onChange: (e) =>
                                                                P(
                                                                    (0, r._)(
                                                                        (0,
                                                                        s._)(
                                                                            {},
                                                                            k
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
                                                                'w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none text-white',
                                                            placeholder:
                                                                'Your message...',
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)(i.P.div, {
                                                    whileHover: { scale: 1.02 },
                                                    whileTap: { scale: 0.98 },
                                                    children: (0, l.jsxs)(b.$, {
                                                        type: 'submit',
                                                        className:
                                                            'w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group text-white',
                                                        style: {
                                                            background:
                                                                'linear-gradient(135deg, '
                                                                    .concat(
                                                                        N.from,
                                                                        ', '
                                                                    )
                                                                    .concat(
                                                                        N.via,
                                                                        ', '
                                                                    )
                                                                    .concat(
                                                                        N.to,
                                                                        ')'
                                                                    ),
                                                        },
                                                        children: [
                                                            (0, l.jsx)(p.A, {
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
        1527: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => H })
            var s = a(1983),
                r = a(5849),
                l = a(5155),
                n = a(2115),
                i = a(1075),
                o = a(5239),
                c = a(5880),
                d = a(4684),
                m = a(4033),
                h = a(7476),
                x = a(7389),
                u = a(8714),
                f = a(5229),
                p = a(5016)
            let g = u.bL
            u.l9
            let b = u.ZL
            u.bm
            let v = n.forwardRef((e, t) => {
                var { className: a } = e,
                    r = (0, x._)(e, ['className'])
                return (0, l.jsx)(
                    u.hJ,
                    (0, s._)(
                        {
                            ref: t,
                            className: (0, p.cn)(
                                'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                a
                            ),
                        },
                        r
                    )
                )
            })
            v.displayName = u.hJ.displayName
            let y = n.forwardRef((e, t) => {
                var { className: a, children: n } = e,
                    i = (0, x._)(e, ['className', 'children'])
                return (0, l.jsxs)(b, {
                    children: [
                        (0, l.jsx)(v, {}),
                        (0, l.jsxs)(
                            u.UC,
                            (0, r._)(
                                (0, s._)(
                                    {
                                        ref: t,
                                        className: (0, p.cn)(
                                            'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                                            a
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
                                                (0, l.jsx)(f.A, {
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
                var { className: t } = e,
                    a = (0, x._)(e, ['className'])
                return (0, l.jsx)(
                    'div',
                    (0, s._)(
                        {
                            className: (0, p.cn)(
                                'flex flex-col space-y-1.5 text-center sm:text-left',
                                t
                            ),
                        },
                        a
                    )
                )
            }
            w.displayName = 'DialogHeader'
            let j = n.forwardRef((e, t) => {
                var { className: a } = e,
                    r = (0, x._)(e, ['className'])
                return (0, l.jsx)(
                    u.hE,
                    (0, s._)(
                        {
                            ref: t,
                            className: (0, p.cn)(
                                'text-lg font-semibold leading-none tracking-tight',
                                a
                            ),
                        },
                        r
                    )
                )
            })
            ;(j.displayName = u.hE.displayName),
                (n.forwardRef((e, t) => {
                    var { className: a } = e,
                        r = (0, x._)(e, ['className'])
                    return (0, l.jsx)(
                        u.VY,
                        (0, s._)(
                            {
                                ref: t,
                                className: (0, p.cn)(
                                    'text-sm text-muted-foreground',
                                    a
                                ),
                            },
                            r
                        )
                    )
                }).displayName = u.VY.displayName)
            var N = a(4484)
            let k = N.bL,
                P = n.forwardRef((e, t) => {
                    var { className: a } = e,
                        r = (0, x._)(e, ['className'])
                    return (0, l.jsx)(
                        N.B8,
                        (0, s._)(
                            {
                                ref: t,
                                className: (0, p.cn)(
                                    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
                                    a
                                ),
                            },
                            r
                        )
                    )
                })
            P.displayName = N.B8.displayName
            let C = n.forwardRef((e, t) => {
                var { className: a } = e,
                    r = (0, x._)(e, ['className'])
                return (0, l.jsx)(
                    N.l9,
                    (0, s._)(
                        {
                            ref: t,
                            className: (0, p.cn)(
                                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                                a
                            ),
                        },
                        r
                    )
                )
            })
            C.displayName = N.l9.displayName
            let _ = n.forwardRef((e, t) => {
                var { className: a } = e,
                    r = (0, x._)(e, ['className'])
                return (0, l.jsx)(
                    N.UC,
                    (0, s._)(
                        {
                            ref: t,
                            className: (0, p.cn)(
                                'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                a
                            ),
                        },
                        r
                    )
                )
            })
            _.displayName = N.UC.displayName
            var A = a(9451),
                S = a(627),
                E = a(2508)
            function I(e) {
                let { images: t } = e,
                    { desktop: a, tablet: s, mobile: r } = t,
                    n = [a, s, r].filter(Boolean).length
                if (0 === n) return null
                if (1 === n) {
                    let e = a || s || r
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
                                    a &&
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
                                                (0, l.jsx)(S.A, {
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
                                                (0, l.jsx)(E.A, {
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
                            a &&
                                (0, l.jsx)(_, {
                                    value: 'desktop',
                                    children: (0, l.jsx)('div', {
                                        className:
                                            'relative w-full rounded-lg overflow-hidden border border-slate-700',
                                        children: (0, l.jsx)(o.default, {
                                            src: '/'.concat(a),
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
            function z(e) {
                let { item: t } = e,
                    {
                        images: a,
                        title: s,
                        description: r,
                        tech: n,
                        client: i,
                        clientLink: c,
                        role: d,
                        roleDescription: m,
                        challenges: h,
                        live: x,
                    } = t
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
                                            src: '/'.concat(a.thumb),
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
                                                        children: (0, p.mD)(
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
                                        h &&
                                            (0, l.jsxs)('div', {
                                                className: 'text-secondary',
                                                children: [
                                                    'Challenges:',
                                                    ' ',
                                                    (0, l.jsx)('ul', {
                                                        className:
                                                            'text-foreground list-disc list-inside mt-2 space-y-1',
                                                        children: h.map(
                                                            (e, t) =>
                                                                (0, l.jsx)(
                                                                    'li',
                                                                    {
                                                                        children:
                                                                            e,
                                                                    },
                                                                    t
                                                                )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        x &&
                            x.length > 0 &&
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
                                        children: x.map((e, t) =>
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
                                                t
                                            )
                                        ),
                                    }),
                                ],
                            }),
                        (0, l.jsx)(I, { images: a }),
                    ],
                })
            }
            function F(e) {
                let { open: t, handleClose: a, item: s } = e,
                    { title: r, titleLink: n } = s
                return (0, l.jsx)(g, {
                    open: t,
                    onOpenChange: a,
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
                            (0, l.jsx)(z, { item: s }),
                        ],
                    }),
                })
            }
            var D = a(7003)
            function H(e) {
                let { projects: t } = e,
                    [a, x] = (0, n.useState)(null),
                    [u, f] = (0, n.useState)(!1),
                    p = u ? t : t.slice(0, 9),
                    g = t.length > 9
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(i.P.div, {
                            className:
                                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
                            variants: h.bK,
                            initial: 'hidden',
                            whileInView: 'show',
                            viewport: { once: !0, margin: '-100px' },
                            children: p.map((e) => {
                                var t
                                return (0, l.jsx)(
                                    i.P.div,
                                    {
                                        className: 'group cursor-pointer',
                                        variants: h.Rf,
                                        whileHover: { y: -10 },
                                        onClick: () => x(e),
                                        children: (0, l.jsxs)('div', {
                                            className:
                                                'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all',
                                            children: [
                                                (0, l.jsxs)('div', {
                                                    className:
                                                        'relative h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-slate-700',
                                                    children: [
                                                        (null ==
                                                        (t =
                                                            e.frontmatter
                                                                .images)
                                                            ? void 0
                                                            : t.thumb) &&
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
                        g &&
                            !u &&
                            (0, l.jsx)(i.P.div, {
                                className: 'flex justify-center mt-12',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: (0, l.jsxs)(D.$, {
                                    onClick: () => f(!0),
                                    variant: 'outline',
                                    size: 'lg',
                                    className: 'group',
                                    children: [
                                        'Load More Projects (',
                                        t.length - 9,
                                        ' ',
                                        'more)',
                                        (0, l.jsx)(m.A, {
                                            className:
                                                'ml-2 h-4 h-4 group-hover:translate-y-1 transition-transform',
                                        }),
                                    ],
                                }),
                            }),
                        a &&
                            (0, l.jsx)(F, {
                                open: !!a,
                                handleClose: () => x(null),
                                item: (0, r._)(
                                    (0, s._)({ id: a.slug }, a.frontmatter),
                                    { description: a.content }
                                ),
                            }),
                    ],
                })
            }
        },
        2063: (e, t, a) => {
            'use strict'
            a.d(t, { X: () => n })
            var s = a(2115),
                r = a(5379)
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
                let [e, t] = (0, s.useState)(0),
                    [a, n] = (0, s.useState)(!1),
                    { theme: i } = (0, r.D)()
                ;(0, s.useEffect)(() => {
                    n(!0)
                    let e = setInterval(() => {
                        t((e) => (e + 1) % l.length)
                    }, 3e4)
                    return () => clearInterval(e)
                }, [])
                let o = l[e],
                    c = 'dark' === i ? o.dark : o.light
                return {
                    gradient: o,
                    colors: c,
                    gradientIndex: e,
                    cssGradient: 'linear-gradient(135deg, '
                        .concat(c.from, ' 0%, ')
                        .concat(c.via, ' 50%, ')
                        .concat(c.to, ' 100%)'),
                    textGradientClasses: 'from-['
                        .concat(c.from, '] via-[')
                        .concat(c.via, '] to-[')
                        .concat(c.to, ']'),
                    mounted: a,
                }
            }
        },
        2683: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 83)),
                Promise.resolve().then(a.bind(a, 4539)),
                Promise.resolve().then(a.bind(a, 9891)),
                Promise.resolve().then(a.bind(a, 1326)),
                Promise.resolve().then(a.bind(a, 8743)),
                Promise.resolve().then(a.bind(a, 8892)),
                Promise.resolve().then(a.bind(a, 7864)),
                Promise.resolve().then(a.bind(a, 1527)),
                Promise.resolve().then(a.bind(a, 8709)),
                Promise.resolve().then(a.bind(a, 7874)),
                Promise.resolve().then(a.bind(a, 6639)),
                Promise.resolve().then(a.bind(a, 9252))
        },
        4539: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => S })
            var s = a(5155),
                r = a(2115),
                l = a(5993),
                n = a(508),
                i = a(9602),
                o = a(9633),
                c = a(8734),
                d = a(3664),
                m = a(9540),
                h = a(1543),
                x = a(1075),
                u = a(5016)
            function f() {
                return (0, s.jsxs)(x.P.a, {
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
                        (0, s.jsx)(x.P.div, {
                            className:
                                'absolute inset-0 blur-xl bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10',
                            animate: { scale: [1, 1.1, 1] },
                            transition: { duration: 2, repeat: 1 / 0 },
                        }),
                    ],
                })
            }
            var p = a(1983),
                g = a(5849),
                b = a(7389),
                v = a(8714),
                y = a(3101),
                w = a(5229)
            let j = v.bL,
                N = v.l9
            v.bm
            let k = v.ZL,
                P = r.forwardRef((e, t) => {
                    var { className: a } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.hJ,
                        (0, g._)(
                            (0, p._)(
                                {
                                    className: (0, u.cn)(
                                        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                                        a
                                    ),
                                },
                                r
                            ),
                            { ref: t }
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
                _ = r.forwardRef((e, t) => {
                    var { side: a = 'right', className: r, children: l } = e,
                        n = (0, b._)(e, ['side', 'className', 'children'])
                    return (0, s.jsxs)(k, {
                        children: [
                            (0, s.jsx)(P, {}),
                            (0, s.jsxs)(
                                v.UC,
                                (0, g._)(
                                    (0, p._)(
                                        {
                                            ref: t,
                                            className: (0, u.cn)(
                                                C({ side: a }),
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
                (r.forwardRef((e, t) => {
                    var { className: a } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.hE,
                        (0, p._)(
                            {
                                ref: t,
                                className: (0, u.cn)(
                                    'text-lg font-semibold text-foreground',
                                    a
                                ),
                            },
                            r
                        )
                    )
                }).displayName = v.hE.displayName),
                (r.forwardRef((e, t) => {
                    var { className: a } = e,
                        r = (0, b._)(e, ['className'])
                    return (0, s.jsx)(
                        v.VY,
                        (0, p._)(
                            {
                                ref: t,
                                className: (0, u.cn)(
                                    'text-sm text-muted-foreground',
                                    a
                                ),
                            },
                            r
                        )
                    )
                }).displayName = v.VY.displayName)
            var A = a(7003)
            function S() {
                let [e, t] = (0, r.useState)(!1),
                    [a, u] = (0, r.useState)(!0),
                    [p, g] = (0, r.useState)(0),
                    { scrollY: b } = (0, h.L)(),
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
                        let t = e - p
                        e < 100 ? u(!0) : t > 5 ? u(!1) : t < -5 && u(!0), g(e)
                    })
                    return () => e()
                }, [b, p])
                let y = (e, a) => {
                    e.preventDefault()
                    let s = document.getElementById(a)
                    if (s) {
                        let e =
                            window.innerWidth < 768
                                ? s.offsetTop
                                : s.offsetTop - 60
                        window.scrollTo({ top: e, behavior: 'smooth' }), t(!1)
                    }
                }
                return (0, s.jsx)(x.P.header, {
                    className: 'sticky top-0 left-0 right-0 z-50',
                    initial: { y: 0 },
                    animate: { y: a ? 0 : -100 },
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
                                    children: (0, s.jsx)(f, {}),
                                }),
                                (0, s.jsx)('div', {
                                    className:
                                        'hidden md:flex items-center gap-1',
                                    children: v.map((e) =>
                                        (0, s.jsxs)(
                                            x.P.a,
                                            {
                                                href: '#'.concat(e.name),
                                                onClick: (t) => y(t, e.name),
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
                                        onOpenChange: t,
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
                                                                onClick: (t) =>
                                                                    y(
                                                                        t,
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
        5016: (e, t, a) => {
            'use strict'
            a.d(t, { IK: () => i, cn: () => l, mD: () => n })
            var s = a(2821),
                r = a(5889)
            function l() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a]
                return (0, r.QP)((0, s.$)(t))
            }
            function n(e) {
                let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : ', ',
                    a = e.length
                return e.map((e, s) =>
                    s !== a - 1 ? ''.concat(e).concat(t) : ''.concat(e)
                )
            }
            let i = (e) => {
                try {
                    let e = document.querySelector('#back-to-top-anchor')
                    e
                        ? ((function () {
                              let { location: e, history: t } = window
                              try {
                                  if ('pushState' in t)
                                      t.pushState(
                                          null,
                                          document.title,
                                          e.pathname + e.search
                                      )
                                  else {
                                      let t = document.body.scrollTop,
                                          a = document.body.scrollLeft
                                      ;(e.hash = ''),
                                          (document.body.scrollTop = t),
                                          (document.body.scrollLeft = a)
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
        6639: (e, t, a) => {
            'use strict'
            a.r(t), a.d(t, { default: () => n })
            var s = a(5155),
                r = a(1075),
                l = a(2063)
            function n(e) {
                let { title: t, subtitle: a, centered: n = !0 } = e,
                    { colors: i, mounted: o } = (0, l.X)(),
                    c = o
                        ? i
                        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }
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
                                                    .concat(c.from, ' 0%, ')
                                                    .concat(c.via, ' 50%, ')
                                                    .concat(c.to, ' 100%)'),
                                        },
                                        children: t,
                                    }),
                                }),
                                (0, s.jsx)(r.P.div, {
                                    className:
                                        'h-2 rounded-full mb-6 w-48 md:w-64',
                                    style: {
                                        background: 'linear-gradient(90deg, '
                                            .concat(c.from, ', ')
                                            .concat(c.via, ', ')
                                            .concat(c.to, ')'),
                                    },
                                    initial: { scaleX: 0 },
                                    whileInView: { scaleX: 1 },
                                    viewport: { once: !0 },
                                    transition: { duration: 0.8, delay: 0.2 },
                                }),
                            ],
                        }),
                        a &&
                            (0, s.jsx)('p', {
                                className: 'text-lg md:text-xl text-gray-400',
                                children: a,
                            }),
                    ],
                })
            }
        },
        7003: (e, t, a) => {
            'use strict'
            a.d(t, { $: () => m })
            var s = a(1983),
                r = a(7389),
                l = a(5155),
                n = a(2115),
                i = a(2467),
                o = a(3101),
                c = a(5016)
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
                m = n.forwardRef((e, t) => {
                    var {
                            className: a,
                            variant: n,
                            size: o,
                            asChild: m = !1,
                        } = e,
                        h = (0, r._)(e, [
                            'className',
                            'variant',
                            'size',
                            'asChild',
                        ])
                    let x = m ? i.DX : 'button'
                    return (0, l.jsx)(
                        x,
                        (0, s._)(
                            {
                                className: (0, c.cn)(
                                    d({ variant: n, size: o, className: a })
                                ),
                                ref: t,
                            },
                            h
                        )
                    )
                })
            m.displayName = 'Button'
        },
        7476: (e, t, a) => {
            'use strict'
            a.d(t, { Rf: () => r, bK: () => s })
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
        7713: (e, t, a) => {
            'use strict'
            a.d(t, { G: () => r })
            var s = a(5155)
            function r(e) {
                let t = e.split('\n'),
                    a = [],
                    r = [],
                    l = 0,
                    n = () => {
                        r.length > 0 &&
                            (a.push(
                                (0, s.jsx)(
                                    'ul',
                                    {
                                        className: 'space-y-2 my-4',
                                        children: r.map((e, t) =>
                                            (0, s.jsxs)(
                                                'li',
                                                {
                                                    className: 'flex gap-3',
                                                    children: [
                                                        (0, s.jsx)('span', {
                                                            className:
                                                                'text-secondary mt-1',
                                                            children: '→',
                                                        }),
                                                        (0, s.jsx)('span', {
                                                            dangerouslySetInnerHTML:
                                                                {
                                                                    __html: i(
                                                                        e
                                                                    ),
                                                                },
                                                        }),
                                                    ],
                                                },
                                                t
                                            )
                                        ),
                                    },
                                    'list-'.concat(l++)
                                )
                            ),
                            (r = []))
                    },
                    i = (e) =>
                        (e = (e = (e = (e = e.replace(
                            /\[(.+?)\]\((.+?)\)/g,
                            '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-secondary hover:underline hover:text-orange-500 transition-colors">$1</a>'
                        )).replace(
                            /\*\*(.+?)\*\*/g,
                            '<strong class="text-secondary font-semibold">$1</strong>'
                        )).replace(
                            /__(.+?)__/g,
                            '<strong class="text-secondary font-semibold">$1</strong>'
                        )).replace(
                            /`(.+?)`/g,
                            '<code class="px-2 py-1 bg-slate-700 rounded text-sm text-secondary">$1</code>'
                        ))
                for (let e = 0; e < t.length; e++) {
                    let o = t[e].trim()
                    if (o) {
                        if (o.startsWith('## ')) {
                            n()
                            let e = o.replace('## ', '')
                            a.push(
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
                            a.push(
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
                            a.push(
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
                return n(), a
            }
            a(2115)
        },
        7864: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => n })
            var s = a(5155),
                r = a(2115),
                l = a(5379)
            function n() {
                let e = (0, r.useRef)(null),
                    { theme: t } = (0, l.D)(),
                    a = (0, r.useRef)([]),
                    n = (0, r.useRef)({ x: 0, y: 0 }),
                    i = (0, r.useRef)(0),
                    o = (0, r.useRef)(0)
                return (
                    (0, r.useEffect)(() => {
                        let t,
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
                        if (0 === a.current.length)
                            for (let e = 0; e < c; e++)
                                a.current.push({
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
                                a.current.forEach((e, t) => {
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
                                        (e.hue = (o.current + 6 * t) % 360)
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
                                        a.current.forEach((a, s) => {
                                            if (t === s) return
                                            let n = e.x - a.x,
                                                i = e.y - a.y,
                                                o = Math.sqrt(n * n + i * i)
                                            if (o < 120) {
                                                let t = 'hsla('
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
                                                    r.lineTo(a.x, a.y),
                                                    (r.strokeStyle = t),
                                                    (r.lineWidth = 0.5),
                                                    r.stroke()
                                            }
                                        })
                                }),
                                (t = requestAnimationFrame(e))
                        })()
                        let d = () => {
                                l()
                            },
                            m = () => {
                                i.current = window.scrollY
                            },
                            h = (e) => {
                                n.current = { x: e.clientX, y: e.clientY }
                            }
                        return (
                            window.addEventListener('resize', d, {
                                passive: !0,
                            }),
                            window.addEventListener('scroll', m, {
                                passive: !0,
                            }),
                            window.addEventListener('mousemove', h, {
                                passive: !0,
                            }),
                            () => {
                                cancelAnimationFrame(t),
                                    window.removeEventListener('resize', d),
                                    window.removeEventListener('scroll', m),
                                    window.removeEventListener('mousemove', h)
                            }
                        )
                    }, [t]),
                    (0, s.jsx)('canvas', {
                        ref: e,
                        className: 'fixed inset-0 pointer-events-none z-0',
                        style: { mixBlendMode: 'screen' },
                    })
                )
            }
        },
        7874: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => d })
            var s = a(5155),
                r = a(2115),
                l = a(6497),
                n = a(1075),
                i = a(5016),
                o = a(7003),
                c = a(2108)
            function d(e) {
                let { children: t } = e,
                    [a, d] = (0, r.useState)(!1)
                return (
                    (0, r.useEffect)(() => {
                        let e = window.scrollY,
                            t = !1,
                            a = () => {
                                let a = window.scrollY
                                a > 100 && a > e ? d(!0) : a <= 100 && d(!1),
                                    (e = a),
                                    (t = !1)
                            },
                            s = () => {
                                t || (window.requestAnimationFrame(a), (t = !0))
                            }
                        return (
                            a(),
                            window.addEventListener('scroll', s, {
                                passive: !0,
                            }),
                            () => window.removeEventListener('scroll', s)
                        )
                    }, []),
                    (0, s.jsx)(l.N, {
                        children:
                            a &&
                            (0, s.jsx)(n.P.div, {
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0 },
                                transition: { duration: 0.2, ease: 'easeOut' },
                                className: 'fixed bottom-8 right-8 z-50',
                                onClick: i.IK,
                                role: 'presentation',
                                children:
                                    t ||
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
        8709: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => l })
            var s = a(2115),
                r = a(2063)
            function l() {
                let { colors: e } = (0, r.X)()
                return (
                    (0, s.useEffect)(() => {
                        document.documentElement.style.setProperty(
                            '--scroll-color-from',
                            e.from
                        ),
                            document.documentElement.style.setProperty(
                                '--scroll-color-to',
                                e.via
                            )
                    }, [e]),
                    null
                )
            }
        },
        8743: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => d })
            var s = a(5155),
                r = a(1075),
                l = a(4684),
                n = a(7333),
                i = a(3664),
                o = a(2063)
            let c = { github: l.A, linkedin: n.A, email: i.A }
            function d(e) {
                let { contactInfo: t } = e,
                    { colors: a, mounted: l } = (0, o.X)(),
                    n = l
                        ? a
                        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' },
                    i = t
                        ? [
                              { name: 'GitHub', key: 'github', url: t.github },
                              {
                                  name: 'LinkedIn',
                                  key: 'linkedin',
                                  url: t.linkedin,
                              },
                              {
                                  name: 'Email',
                                  key: 'email',
                                  url: 'mailto:'.concat(t.email),
                              },
                          ]
                        : []
                return (0, s.jsx)('footer', {
                    className: 'relative py-12 px-6 border-t border-slate-800',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                            (0, s.jsx)(r.P.div, {
                                className:
                                    'flex flex-wrap justify-center gap-4 mb-8',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: i.map((e, t) => {
                                    let a = c[e.key]
                                    return a
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
                                                      delay: 0.05 * t,
                                                  },
                                                  whileHover: {
                                                      scale: 1.1,
                                                      y: -3,
                                                  },
                                                  title: e.name,
                                                  'aria-label': e.name,
                                                  children: (0, s.jsx)(a, {
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
                                                                n.from,
                                                                ', '
                                                            )
                                                            .concat(n.via, ', ')
                                                            .concat(n.to, ')'),
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
        8892: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => p })
            var s = a(5155),
                r = a(3350),
                l = a(9770),
                n = a(1075),
                i = a(5740),
                o = a(9867),
                c = a(4684),
                d = a(7333),
                m = a(3664),
                h = a(8803),
                x = a(2115),
                u = a(7476),
                f = a(2063)
            function p(e) {
                let {
                        email: t = 'sagar.sawuck@gmail.com',
                        github: a = 'https://github.com/sagarsys',
                        linkedin: p = 'https://linkedin.com/in/sagarsys/',
                    } = e,
                    { colors: g, mounted: b } = (0, f.X)(),
                    v = b
                        ? g
                        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' },
                    y = (0, r.d)(0),
                    w = (0, r.d)(0),
                    j = window.innerWidth,
                    N = window.innerHeight,
                    k = (0, l.G)(y, [0, j], [-20, 20]),
                    P = (0, l.G)(w, [0, N], [-20, 20]),
                    C = (0, l.G)(y, [0, j], [20, -20]),
                    _ = (0, l.G)(w, [0, N], [20, -20])
                return (
                    (0, x.useEffect)(() => {
                        let e = (e) => {
                            y.set(e.clientX), w.set(e.clientY)
                        }
                        return (
                            window.addEventListener('mousemove', e),
                            () => window.removeEventListener('mousemove', e)
                        )
                    }, [y, w]),
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
                                style: { x: k, y: P },
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
                                style: { x: C, y: _ },
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
                                                        .concat(v.from, ' 0%, ')
                                                        .concat(v.via, ' 50%, ')
                                                        .concat(v.to, ' 100%)'),
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
                                                                v.from,
                                                                ', '
                                                            )
                                                            .concat(v.via, ', ')
                                                            .concat(v.to, ', ')
                                                            .concat(
                                                                v.from,
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
                                            ' ',
                                            'with 10+ years of experience. I build',
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
                                                                v.from,
                                                                ', '
                                                            )
                                                            .concat(v.via, ', ')
                                                            .concat(v.to, ', ')
                                                            .concat(
                                                                v.from,
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
                                            'Javascript',
                                            'React',
                                            'Next.js',
                                            'Node.js',
                                            'Prisma',
                                        ].map((e, t) =>
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
                                                        delay: 1.8 + 0.15 * t,
                                                        duration: 0.5,
                                                    },
                                                    whileHover: {
                                                        y: -2,
                                                        boxShadow:
                                                            '0 10px 30px '.concat(
                                                                v.via,
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
                                                        '/assets/Sagar-Sawuck-CV-2025.pdf',
                                                        '_blank'
                                                    )
                                                },
                                                className:
                                                    'relative inline-flex items-center gap-3 px-8 py-4 backdrop-blur-md rounded-full border shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden',
                                                style: {
                                                    background:
                                                        'linear-gradient(135deg, '
                                                            .concat(
                                                                v.from,
                                                                ', '
                                                            )
                                                            .concat(v.via, ', ')
                                                            .concat(v.to, ')'),
                                                    borderColor: v.via,
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
                                                href: a,
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
                                                href: p,
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
                                                href: 'mailto:'.concat(t),
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
                                        (0, s.jsx)(h.A, {
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
        9252: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => h })
            var s = a(5155),
                r = a(2115),
                l = a(1075),
                n = a(4033),
                i = a(6639),
                o = a(2063),
                c = a(7003),
                d = a(457)
            let m = [
                { name: 'TypeScript', icon: d.cyb, color: '#3178C6' },
                { name: 'JavaScript', icon: d.AeH, color: '#F7DF1E' },
                { name: 'React', icon: d.GWR, color: '#61DAFB' },
                { name: 'HTML5', icon: d.$gB, color: '#E34F26' },
                { name: 'CSS3', icon: d.jrh, color: '#1572B6' },
                { name: 'Next.js', icon: d.wlC, color: '#ffffff' },
                { name: 'Node.js', icon: d.h$$, color: '#339933' },
                { name: 'Express', icon: d.t5I, color: '#ffffff' },
                { name: 'Prisma', icon: d.bzD, color: '#2D3748' },
                { name: 'Jest', icon: d.tT5, color: '#C21325' },
                { name: 'Vitest', icon: d.yep, color: '#6E9F18' },
                { name: 'Cypress', icon: d.CCo, color: '#ffffff' },
                { name: 'GitHub Actions', icon: d.R6r, color: '#2088FF' },
                { name: 'Webpack', icon: d.Kkd, color: '#8DD6F9' },
                { name: 'AWS', icon: d.jNz, color: '#FF9900' },
                { name: 'Docker', icon: d.tih, color: '#2496ED' },
                { name: 'Git', icon: d.rYG, color: '#F05032' },
                { name: 'Angular', icon: d.h47, color: '#DD0031' },
                { name: 'Vue.js', icon: d.Zmg, color: '#4FC08D' },
                { name: 'Svelte', icon: d.Qmm, color: '#FF3E00' },
                { name: 'NestJS', icon: d.Owm, color: '#E0234E' },
                { name: 'Fastify', icon: d.pdj, color: '#fffff0' },
                { name: 'OpenAPI', icon: d.hgj, color: '#6BA539' },
                { name: 'Jasmine', icon: d.et2, color: '#8A4182' },
                { name: 'MongoDB', icon: d.$pK, color: '#47A248' },
                { name: 'DynamoDB', icon: d.F8G, color: '#4053D6' },
                { name: 'MySQL', icon: d.z33, color: '#4479A1' },
                { name: 'PostgreSQL', icon: d.$Wy, color: '#4169E1' },
                { name: 'Sequelize', icon: d.uw, color: '#52B0E7' },
                { name: 'GCP', icon: d.lpS, color: '#4285F4' },
                { name: 'Kubernetes', icon: d.tev, color: '#326CE5' },
                { name: 'Helm', icon: d.hOD, color: '#0F1689' },
                { name: 'GitLab CI', icon: d.k4g, color: '#FC6D26' },
                { name: 'Vite', icon: d.zUm, color: '#646CFF' },
                { name: 'npm', icon: d.cC7, color: '#CB3837' },
                { name: 'Yarn', icon: d.$mD, color: '#2C8EBB' },
                { name: 'pnpm', icon: d.MdY, color: '#F69220' },
                { name: 'WebStorm', icon: d.Ewh, color: '#6e6' },
                { name: 'IntelliJ', icon: d.PHd, color: '#fff' },
            ]
            function h() {
                let { colors: e } = (0, o.X)(),
                    [t, a] = (0, r.useState)(!1),
                    d = t ? m : m.slice(0, 16),
                    h = m.length > 16
                return (0, s.jsx)('section', {
                    id: 'skills',
                    className: 'py-20 md:py-32 px-6 relative',
                    children: (0, s.jsxs)('div', {
                        className: 'max-w-7xl mx-auto',
                        children: [
                            (0, s.jsx)(i.default, {
                                title: 'Skills & Technologies',
                                subtitle:
                                    'The magical tools I use to bring ideas to life',
                            }),
                            (0, s.jsx)('div', {
                                className:
                                    'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4',
                                children: d.map((e, t) => {
                                    let a = e.icon
                                    return (0, s.jsx)(
                                        l.P.div,
                                        {
                                            className: 'group relative',
                                            initial: { opacity: 0, scale: 0.8 },
                                            animate: { opacity: 1, scale: 1 },
                                            transition: {
                                                delay: 0.02 * t,
                                                duration: 0.3,
                                            },
                                            children: (0, s.jsxs)(l.P.div, {
                                                className:
                                                    'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl md:rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center aspect-square hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer overflow-hidden',
                                                whileHover: {
                                                    scale: 1.05,
                                                    y: -5,
                                                },
                                                transition: { duration: 0.2 },
                                                children: [
                                                    (0, s.jsx)(l.P.div, {
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
                                                    (0, s.jsx)(l.P.div, {
                                                        className:
                                                            'text-3xl md:text-4xl mb-1 md:mb-2 relative z-10',
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
                                                            a,
                                                            {
                                                                style: {
                                                                    color: e.color,
                                                                },
                                                                className:
                                                                    'opacity-90',
                                                            }
                                                        ),
                                                    }),
                                                    (0, s.jsx)('span', {
                                                        className:
                                                            'text-sm pt-1 font-medium text-gray-300 relative z-10 text-center leading-tight',
                                                        children: e.name,
                                                    }),
                                                    (0, s.jsx)(l.P.div, {
                                                        className:
                                                            'absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100',
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
                            h &&
                                !t &&
                                (0, s.jsx)(l.P.div, {
                                    className: 'flex justify-center mt-12',
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: { opacity: 1, y: 0 },
                                    viewport: { once: !0 },
                                    children: (0, s.jsxs)(c.$, {
                                        onClick: () => a(!0),
                                        variant: 'outline',
                                        size: 'lg',
                                        className: 'group',
                                        children: [
                                            'Show More Skills (',
                                            m.length - 16,
                                            ' more)',
                                            (0, s.jsx)(n.A, {
                                                className:
                                                    'ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform',
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                })
            }
        },
        9891: (e, t, a) => {
            'use strict'
            a.d(t, { default: () => m })
            var s = a(5155),
                r = a(2115),
                l = a(9633),
                n = a(1075),
                i = a(7713)
            function o(e) {
                let { event: t, content: a, isLast: r } = e,
                    o = (0, i.G)(a)
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
                                                    t.startDate,
                                                    ' - ',
                                                    t.endDate,
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
                                                    children: t.title,
                                                }),
                                                (0, s.jsxs)('h6', {
                                                    className:
                                                        'text-secondary text-lg mb-4',
                                                    children: [
                                                        t.company,
                                                        ' • ',
                                                        t.location,
                                                    ],
                                                }),
                                                (0, s.jsx)('div', {
                                                    className:
                                                        'text-sm space-y-2 mb-4',
                                                    children: o,
                                                }),
                                                t.tags &&
                                                    t.tags.length > 0 &&
                                                    (0, s.jsx)('div', {
                                                        className:
                                                            'flex flex-wrap gap-2',
                                                        children: t.tags.map(
                                                            (e) =>
                                                                (0, s.jsx)(
                                                                    'span',
                                                                    {
                                                                        className:
                                                                            'px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full font-medium',
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
                                            t.startDate,
                                            ' - ',
                                            t.endDate,
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
                                                children: t.title,
                                            }),
                                            (0, s.jsxs)('h6', {
                                                className:
                                                    'text-secondary text-lg mb-4',
                                                children: [
                                                    t.company,
                                                    ' • ',
                                                    t.location,
                                                ],
                                            }),
                                            (0, s.jsx)('div', {
                                                className:
                                                    'text-sm space-y-2 mb-4',
                                                children: o,
                                            }),
                                            t.tags &&
                                                t.tags.length > 0 &&
                                                (0, s.jsx)('div', {
                                                    className:
                                                        'flex flex-wrap gap-2',
                                                    children: t.tags.map((e) =>
                                                        (0, s.jsx)(
                                                            'span',
                                                            {
                                                                className:
                                                                    'px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full font-medium',
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
            var c = a(7003),
                d = a(4033)
            function m(e) {
                let { experiences: t } = e,
                    [a, l] = (0, r.useState)(!1),
                    i = a ? t : t.slice(0, 5),
                    m = t.length > 5
                return (0, s.jsxs)('div', {
                    children: [
                        (0, s.jsx)('div', {
                            className: 'flex flex-col',
                            children: i.map((e, r) =>
                                (0, s.jsx)(
                                    n.P.div,
                                    {
                                        initial: { opacity: 0, y: 20 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: {
                                            delay: 0.1 * r,
                                            duration: 0.5,
                                        },
                                        children: (0, s.jsx)(o, {
                                            event: e.frontmatter,
                                            content: e.content,
                                            isLast: a
                                                ? r === t.length - 1
                                                : r === i.length - 1,
                                        }),
                                    },
                                    e.slug
                                )
                            ),
                        }),
                        m &&
                            !a &&
                            (0, s.jsx)(n.P.div, {
                                className: 'flex justify-center mt-12',
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                children: (0, s.jsxs)(c.$, {
                                    onClick: () => l(!0),
                                    variant: 'outline',
                                    size: 'lg',
                                    className: 'group',
                                    children: [
                                        'Show More Experiences (',
                                        t.length - 5,
                                        ' more)',
                                        (0, s.jsx)(d.A, {
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
        e.O(0, [362, 800, 441, 255, 358], () => e((e.s = 2683))), (_N_E = e.O())
    },
])
