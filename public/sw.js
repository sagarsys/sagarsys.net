if (!self.define) {
    let e,
        a = {}
    const i = (i, b) => (
        (i = new URL(i + '.js', b).href),
        a[i] ||
            new Promise((a) => {
                if ('document' in self) {
                    const e = document.createElement('script')
                    ;(e.src = i), (e.onload = a), document.head.appendChild(e)
                } else (e = i), importScripts(i), a()
            }).then(() => {
                let e = a[i]
                if (!e)
                    throw new Error(`Module ${i} didn’t register its module`)
                return e
            })
    )
    self.define = (b, s) => {
        const d =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href
        if (a[d]) return
        let c = {}
        const f = (e) => i(e, d),
            r = { module: { uri: d }, exports: c, require: f }
        a[d] = Promise.all(b.map((e) => r[e] || f(e))).then((e) => (s(...e), c))
    }
}
define(['./workbox-4754cb34'], function (e) {
    'use strict'
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: '/_next/static/XG2SND6RKyHJs8LeVb2I0/_buildManifest.js',
                    revision: '1e6afa622286451832b21c9f54210d5b',
                },
                {
                    url: '/_next/static/XG2SND6RKyHJs8LeVb2I0/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                {
                    url: '/_next/static/chunks/223-4d82c5d0fa437100.js',
                    revision: '4d82c5d0fa437100',
                },
                {
                    url: '/_next/static/chunks/255-c520f79d4610dfd8.js',
                    revision: 'c520f79d4610dfd8',
                },
                {
                    url: '/_next/static/chunks/30a37ab2-d02367c36e430f93.js',
                    revision: 'd02367c36e430f93',
                },
                {
                    url: '/_next/static/chunks/388.17bededa0bbe7b2a.js',
                    revision: '17bededa0bbe7b2a',
                },
                {
                    url: '/_next/static/chunks/464-ffeebefcb2754c53.js',
                    revision: 'ffeebefcb2754c53',
                },
                {
                    url: '/_next/static/chunks/4bd1b696-c023c6e3521b1417.js',
                    revision: 'c023c6e3521b1417',
                },
                {
                    url: '/_next/static/chunks/619-e486f5444eed8003.js',
                    revision: 'e486f5444eed8003',
                },
                {
                    url: '/_next/static/chunks/840.027af5fc2857a18c.js',
                    revision: '027af5fc2857a18c',
                },
                {
                    url: '/_next/static/chunks/862-5d264795459b0dd5.js',
                    revision: '5d264795459b0dd5',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-3e2566542598b567.js',
                    revision: '3e2566542598b567',
                },
                {
                    url: '/_next/static/chunks/app/blog/%5Bslug%5D/page-a2a56c34582c18f0.js',
                    revision: 'a2a56c34582c18f0',
                },
                {
                    url: '/_next/static/chunks/app/blog/page-aa1571d3b0eaf421.js',
                    revision: 'aa1571d3b0eaf421',
                },
                {
                    url: '/_next/static/chunks/app/layout-71edd9a5ddc897be.js',
                    revision: '71edd9a5ddc897be',
                },
                {
                    url: '/_next/static/chunks/app/page-8e641e0c0e3f8a9a.js',
                    revision: '8e641e0c0e3f8a9a',
                },
                {
                    url: '/_next/static/chunks/framework-4e51298db41fcfd4.js',
                    revision: '4e51298db41fcfd4',
                },
                {
                    url: '/_next/static/chunks/main-app-8ec082718c910659.js',
                    revision: '8ec082718c910659',
                },
                {
                    url: '/_next/static/chunks/main-cd43a997b0fdabf2.js',
                    revision: 'cd43a997b0fdabf2',
                },
                {
                    url: '/_next/static/chunks/pages/_app-7d307437aca18ad4.js',
                    revision: '7d307437aca18ad4',
                },
                {
                    url: '/_next/static/chunks/pages/_error-cb2a52f75f2162e2.js',
                    revision: 'cb2a52f75f2162e2',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-90345910a9e89109.js',
                    revision: '90345910a9e89109',
                },
                {
                    url: '/_next/static/css/60dd14b9e2b65500.css',
                    revision: '60dd14b9e2b65500',
                },
                {
                    url: '/_next/static/media/1dcb4bb6f2068eb9-s.p.woff2',
                    revision: 'edbd9796e75a5a68aa089993d7e39544',
                },
                {
                    url: '/_next/static/media/2a98db71c72ba4f8-s.woff2',
                    revision: '4c9b555d73d89670e93747111f906295',
                },
                {
                    url: '/_next/static/media/2addaca4aa9bc55e-s.woff2',
                    revision: '56e66fc00a492eafcd32262ee7a97de7',
                },
                {
                    url: '/_next/static/media/46da155f10b47d3d-s.woff2',
                    revision: 'f1c763b088cfa2f46fc977b8849b9585',
                },
                {
                    url: '/_next/static/media/56b5d6ac638045ae-s.p.woff2',
                    revision: '8bdf6f4d57ea5d8fc7a68876275b878f',
                },
                {
                    url: '/_next/static/media/5ed273b77d2a1951-s.p.woff2',
                    revision: 'a191bea1aee41bdfec4c17b0e6e0cdba',
                },
                {
                    url: '/_next/static/media/631ab6d518ee0b08-s.woff2',
                    revision: 'e377e6d21b44af923d625870e88b2af8',
                },
                {
                    url: '/_next/static/media/7ee3602ffc3ee29c-s.woff2',
                    revision: '5738087e7f5241c2cb8926bb814d2156',
                },
                {
                    url: '/_next/static/media/81f2f04080433cef-s.woff2',
                    revision: 'e08208d06e69743d90220785bbad7e98',
                },
                {
                    url: '/_next/static/media/8a292e25fa9a379e-s.woff2',
                    revision: 'e50266420764b0c35e38cfd9ee015f54',
                },
                {
                    url: '/_next/static/media/acf5ccc94200d5d1-s.woff2',
                    revision: '18b32e38404c482cb7f971ebb1e98538',
                },
                {
                    url: '/_next/static/media/bcc312cbdaabfe7a-s.woff2',
                    revision: '40e2a71c1473650534891166772d071d',
                },
                {
                    url: '/_next/static/media/c95d4fce0b415528-s.p.woff2',
                    revision: 'ebf116db5193ca6a5d87b8eb6dc85df7',
                },
                {
                    url: '/_next/static/media/dee70ee4f5df5000-s.woff2',
                    revision: '0027c9d8a2644865f9af2e3c23210089',
                },
                {
                    url: '/_next/static/media/e3bec91e60544e8d-s.woff2',
                    revision: '8c2f35a6e8032e2b0b04b686f8df6fff',
                },
                {
                    url: '/_next/static/media/ea77d7ab4d36f67a-s.woff2',
                    revision: '91ccb36f386999cf0a26933b97cd007b',
                },
                {
                    url: '/_next/static/media/ed9cb87f7cefa820-s.p.woff2',
                    revision: 'ecc0a99f19582ed89d64847feae32fba',
                },
                {
                    url: '/_next/static/media/ef9d7e3625c86286-s.woff2',
                    revision: 'a24a5da127d5e9cee5968f2d46b908ee',
                },
                {
                    url: '/_next/static/media/f42a00bcd372c41e-s.woff2',
                    revision: '95776128cb2fd486589d6636e8c90b4e',
                },
                {
                    url: '/_next/static/media/f9fa7964f036c69d-s.p.woff2',
                    revision: '1f99eee4cc0cf2f72bd3b95eac1ef4f5',
                },
                {
                    url: '/assets/Sagar-Sawuck-CV-2025.pdf',
                    revision: '9037a3bb1633d1dd5e9c25615ae45031',
                },
                {
                    url: '/favicon.ico',
                    revision: '3cd32fe6d5582af43884c9070a2cb3ab',
                },
                {
                    url: '/fonts/neuropol_nova_cnd_bold-webfont.eot',
                    revision: '0ffb1ec6d54818ad570a709701870778',
                },
                {
                    url: '/fonts/neuropol_nova_cnd_bold-webfont.svg',
                    revision: '08a7a072c2df05a95b7ab25015cde4d9',
                },
                {
                    url: '/fonts/neuropol_nova_cnd_bold-webfont.ttf',
                    revision: '98eae64dacadf2923c365ba5235759af',
                },
                {
                    url: '/fonts/neuropol_nova_cnd_bold-webfont.woff',
                    revision: '68562aeb2ad0ff45dafe96842d190e47',
                },
                {
                    url: '/fonts/neuropol_nova_cnd_bold-webfont.woff2',
                    revision: 'd912c57f8437d43fee7698ab958d3567',
                },
                {
                    url: '/images/acme/acme-desktop-large.webp',
                    revision: 'c055fb88261eb57eb83bafd12a81d164',
                },
                {
                    url: '/images/acme/acme-desktop-medium.webp',
                    revision: 'e0e86e6527d73518047237f154db1db6',
                },
                {
                    url: '/images/acme/acme-desktop-thumb.webp',
                    revision: 'aecbf3c834280f6f11acf4401b42f6b4',
                },
                {
                    url: '/images/acme/acme-desktop.jpg',
                    revision: '15ede15dfd2febb16cefafa6898b6992',
                },
                {
                    url: '/images/acme/acme-desktop.webp',
                    revision: '2ecf283c7e3d4b7ea944e2959438241e',
                },
                {
                    url: '/images/acme/acme-mobile.jpg',
                    revision: 'f381d38f67726c90494feebb68bea86d',
                },
                {
                    url: '/images/acme/acme-mobile.webp',
                    revision: '2569190302f9f9f9bcb5a397a8df9ca2',
                },
                {
                    url: '/images/acme/acme-tablet.jpg',
                    revision: 'f9c4c35af32e38d53651edb89fc3d46f',
                },
                {
                    url: '/images/acme/acme-tablet.webp',
                    revision: '88ac3cd98b04a200b90f8bf1b3c6f806',
                },
                {
                    url: '/images/acme/acme-thumb.jpg',
                    revision: '3b8e6b11cb5f34c89805deb3976f543f',
                },
                {
                    url: '/images/acme/acme-thumb.webp',
                    revision: '02c97ee191f13e79bc2ee6037243edec',
                },
                {
                    url: '/images/actievandedag/actievandedag-large.webp',
                    revision: '083c6c0f004484fa76422ae89705182b',
                },
                {
                    url: '/images/actievandedag/actievandedag-medium.webp',
                    revision: 'b34d17b3909197ada8c187939445b4ad',
                },
                {
                    url: '/images/actievandedag/actievandedag-mobile.png',
                    revision: '22950a5eefa14303dd98fbe82547d0fb',
                },
                {
                    url: '/images/actievandedag/actievandedag-mobile.webp',
                    revision: 'a84160b6b65f24cfc0dab84a5ad48624',
                },
                {
                    url: '/images/actievandedag/actievandedag-thumb.webp',
                    revision: '17af8ff659d0d7cb6b2fbaaa77358b82',
                },
                {
                    url: '/images/actievandedag/actievandedag.mp4',
                    revision: 'c1bed6ef4b2f1bbf234c9f49a5aa2c8b',
                },
                {
                    url: '/images/actievandedag/actievandedag.png',
                    revision: '068db3df4df85f236c40b7d11b3b1d28',
                },
                {
                    url: '/images/actievandedag/actievandedag.webp',
                    revision: '9d1c4097bad0d69c94a8c932c4d6b2ba',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile-medium.webp',
                    revision: '364e804e4f80f8ce6216315bb1dc5bd6',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile-thumb.webp',
                    revision: 'cae760338e4e372269a2589bb936633f',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile.png',
                    revision: 'e9b48e987e961f4f6423b159d96b6b8c',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile.webp',
                    revision: '61ec29f406a40656cabb0a7501a68caf',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile_1-medium.webp',
                    revision: '966dcc228d6e129052ff0de1493380e1',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile_1-thumb.webp',
                    revision: '373bd60c373e1bb479853ed75a492a08',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile_1.png',
                    revision: 'b0dd871f027eb2bbb4449b4af5e4dfc1',
                },
                {
                    url: '/images/actievandedag/actievandedag_mobile_1.webp',
                    revision: '0f40190107cd2923218f4a0db2c2038f',
                },
                {
                    url: '/images/bfast/bfast-desktop-large.webp',
                    revision: '95094cbf4bf125026183449315acf1e4',
                },
                {
                    url: '/images/bfast/bfast-desktop-medium.webp',
                    revision: '720c8e51b79bf42fab6ea64d01b957d3',
                },
                {
                    url: '/images/bfast/bfast-desktop-thumb.webp',
                    revision: '8864e268a7a0c4ce8089763496f5d155',
                },
                {
                    url: '/images/bfast/bfast-desktop.jpg',
                    revision: 'f44b1ca76777aed76733ac6803639c3e',
                },
                {
                    url: '/images/bfast/bfast-desktop.webp',
                    revision: '808f45c8b4f266e3d73f5dae0625da5b',
                },
                {
                    url: '/images/bfast/bfast-thumb-medium.webp',
                    revision: '9a748d23a71eb6fa36defa7bf1039c95',
                },
                {
                    url: '/images/bfast/bfast-thumb-thumb.webp',
                    revision: '35370ffba7fef8a6dbd8266a8666f090',
                },
                {
                    url: '/images/bfast/bfast-thumb.jpg',
                    revision: '2e79bda3b770791ad21c32a7f80f5cd5',
                },
                {
                    url: '/images/bfast/bfast-thumb.webp',
                    revision: '199ae399d60bd47e56ee53ecf31fb841',
                },
                {
                    url: '/images/biocom/biocom-desktop-large.webp',
                    revision: 'ec05c24e0d66a7ae98c2cd0b7bf08305',
                },
                {
                    url: '/images/biocom/biocom-desktop-medium.webp',
                    revision: 'e7ed5d99b35d89319aaf38ed12c86c3e',
                },
                {
                    url: '/images/biocom/biocom-desktop-thumb.webp',
                    revision: 'ef26b2e6bdb29310bde44013ac276729',
                },
                {
                    url: '/images/biocom/biocom-desktop.jpg',
                    revision: 'd7514b347e5654cc106e50fce66e5b68',
                },
                {
                    url: '/images/biocom/biocom-desktop.webp',
                    revision: 'f9f76a46f6a18dd1fbae09adce7a4009',
                },
                {
                    url: '/images/biocom/biocom-mobile.jpg',
                    revision: '70cfe73e59fed0603e033b3fc80f94e0',
                },
                {
                    url: '/images/biocom/biocom-mobile.webp',
                    revision: '85ccd66b36fd71974d9a8d59aa7aff59',
                },
                {
                    url: '/images/biocom/biocom-tablet.jpg',
                    revision: '1f7a126c9aa9ac17db92dd216b1b8dd3',
                },
                {
                    url: '/images/biocom/biocom-tablet.webp',
                    revision: '50a1fed25079e42155431235dfb875c2',
                },
                {
                    url: '/images/biocom/biocom-thumb.jpg',
                    revision: 'c75f764a0de8791853dd9edf8a89a6ff',
                },
                {
                    url: '/images/biocom/biocom-thumb.webp',
                    revision: 'f8ca80f49b216d64b9af27bf0684eabe',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/gha-in-action-medium.webp',
                    revision: 'aedb044b3aa1ef50ff21510a9488d7e9',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/gha-in-action-thumb.webp',
                    revision: 'e72f536ebd436ca1560befd60c17ec3a',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/gha-in-action.png',
                    revision: '7a0cc8e16f2fefe646a69e18b7649b30',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/gha-in-action.webp',
                    revision: 'c3aa90eeaa919c6b8e154bb3223ed78c',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/github-actions-dashboard-large.webp',
                    revision: 'df86894b444f2dadc86309a789ca385d',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/github-actions-dashboard-medium.webp',
                    revision: 'c0091d2b34103f7889117504248d3940',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/github-actions-dashboard-thumb.webp',
                    revision: 'f3a908500b34c36bca6cff48752d08c0',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/github-actions-dashboard.png',
                    revision: 'f0efea75f4db23b67f07d013cffb35a9',
                },
                {
                    url: '/images/blog/02-frontend-automation-with-github-actions-and-aws/github-actions-dashboard.webp',
                    revision: '90c7ae9260553be8c1b3b2749dd9cda3',
                },
                {
                    url: '/images/blog/default-1-large.webp',
                    revision: '07595fc41e60bb982080bde205688f4f',
                },
                {
                    url: '/images/blog/default-1-medium.webp',
                    revision: '769fb9922d7e8218f28261328c8dad61',
                },
                {
                    url: '/images/blog/default-1-thumb.webp',
                    revision: '5775c4437ed116e131af85194cf8e150',
                },
                {
                    url: '/images/blog/default-1.jpg',
                    revision: 'ceea285adf30b22a89e7dc9e9397c45b',
                },
                {
                    url: '/images/blog/default-1.webp',
                    revision: '81b48bdf847fbb09ae7f15ebaa43cbb9',
                },
                {
                    url: '/images/blog/default-large.webp',
                    revision: '067fb3e5b15504be50c5eb545286c403',
                },
                {
                    url: '/images/blog/default-medium.webp',
                    revision: '2a8253047d344761768a7c99b2a2f3c8',
                },
                {
                    url: '/images/blog/default-thumb.webp',
                    revision: '9578db37672d8e0b85bef3eb4528d70e',
                },
                {
                    url: '/images/blog/default.jpg',
                    revision: '159e170cbdf514ccb2c4bac5940eaf2a',
                },
                {
                    url: '/images/blog/default.webp',
                    revision: 'eaaacc14b682b204edffe760127149b3',
                },
                {
                    url: '/images/github/bengalivo-desktop-large.webp',
                    revision: 'bafb194f0b440aff0734dfc68a395f6a',
                },
                {
                    url: '/images/github/bengalivo-desktop-medium.webp',
                    revision: '95bf22145facc749c120405ff05b7115',
                },
                {
                    url: '/images/github/bengalivo-desktop-thumb.webp',
                    revision: 'f4936a344082eb30dfd601ae73b1909e',
                },
                {
                    url: '/images/github/bengalivo-desktop.png',
                    revision: '3559de029f9b25faf922d3a2a4126c96',
                },
                {
                    url: '/images/github/bengalivo-desktop.webp',
                    revision: 'd7146e0f486a0e1ad0613eda3ab79d2f',
                },
                {
                    url: '/images/github/bengalivo-large.webp',
                    revision: '50f542602e9ce91897da2e2b498ac326',
                },
                {
                    url: '/images/github/bengalivo-medium.webp',
                    revision: '25db3d4f9f221cdb5efa2478eb57bd36',
                },
                {
                    url: '/images/github/bengalivo-mobile.png',
                    revision: '9aee6a5323d8cb636560379c981e5cc5',
                },
                {
                    url: '/images/github/bengalivo-thumb.webp',
                    revision: '2b305c6d836315eb8126dc2fbc7b55ee',
                },
                {
                    url: '/images/github/bengalivo.png',
                    revision: 'f8b48a6d4d66ee89b1573ea4e43e004b',
                },
                {
                    url: '/images/github/bengalivo.webp',
                    revision: '08530bd8879c20ed3db6bb834fd37a27',
                },
                {
                    url: '/images/github/default.webp',
                    revision: 'ae7fced9266690b10aa094cade812bd8',
                },
                {
                    url: '/images/github/sagarsys.net-large.webp',
                    revision: '94633f8852168b9b356018b260d2c238',
                },
                {
                    url: '/images/github/sagarsys.net-medium.webp',
                    revision: '95d84a979a91ab7edf624cafb0033ead',
                },
                {
                    url: '/images/github/sagarsys.net-thumb.webp',
                    revision: '6e8ac083e9b820dcc81285612a344af4',
                },
                {
                    url: '/images/github/sagarsys.net.png',
                    revision: 'd9647cedf22029c8bc0b91298ddd3414',
                },
                {
                    url: '/images/github/sagarsys.net.webp',
                    revision: '137683db484ac5d52e0cb7ed8102b094',
                },
                {
                    url: '/images/github/sagarsys.net_mobile-medium.webp',
                    revision: '0a2868059c08833d98b15c3673de35b6',
                },
                {
                    url: '/images/github/sagarsys.net_mobile-thumb.webp',
                    revision: 'e947b22ebf710cbd5e149dda19bc0973',
                },
                {
                    url: '/images/github/sagarsys.net_mobile.png',
                    revision: '6f9cdc1357d5b6062b0a40d53f1b2502',
                },
                {
                    url: '/images/github/sagarsys.net_mobile.webp',
                    revision: '5441f94d3e01e7f1b6a449fd3e9454b5',
                },
                {
                    url: '/images/github/sagavortex-large.webp',
                    revision: '5d6da0077876baa04e6f730c067e9699',
                },
                {
                    url: '/images/github/sagavortex-medium.webp',
                    revision: '8e6ff3c55108eb0e8f68c470a56d35d0',
                },
                {
                    url: '/images/github/sagavortex-thumb.webp',
                    revision: '0a248fe02aaa8d1363e2593bb46f4ff6',
                },
                {
                    url: '/images/github/sagavortex.png',
                    revision: 'c796a329b9c0ba8da796ccde0f40e42d',
                },
                {
                    url: '/images/github/sagavortex.webp',
                    revision: '54c5e3c31ffd76b7afec188a1770fa98',
                },
                {
                    url: '/images/github/sagavortex_mobile.png',
                    revision: '20048452dfbed4cf65ca818e5a0b6024',
                },
                {
                    url: '/images/github/sagavortex_mobile.webp',
                    revision: '75da6476011d85aa65b8d02b8bdb2636',
                },
                {
                    url: '/images/github/tomato-farm-large.webp',
                    revision: '45fc63f07d694f9edea488d2e67546a2',
                },
                {
                    url: '/images/github/tomato-farm-medium.webp',
                    revision: 'c76bc2bb73544779cd92d522c812c5f1',
                },
                {
                    url: '/images/github/tomato-farm-thumb.webp',
                    revision: 'e0f665d83907d056ab8b8d1480d6f75a',
                },
                {
                    url: '/images/github/tomato-farm.png',
                    revision: 'dc45350b9f37a59e087fc465e60e6c6c',
                },
                {
                    url: '/images/github/tomato-farm.webp',
                    revision: '54defb3a404674cb9677f5877e2003a3',
                },
                {
                    url: '/images/kaufman/espace-kaufman-thumb.jpg',
                    revision: 'd4615feac30d37d2ff3c713aef26e5f3',
                },
                {
                    url: '/images/kaufman/espace-kaufman-thumb.webp',
                    revision: '82ad4a0568fda84999325c53c489a94f',
                },
                {
                    url: '/images/kaufman/kaufman-desktop-large.webp',
                    revision: '9bd055d1273b32654943463fda650ee3',
                },
                {
                    url: '/images/kaufman/kaufman-desktop-medium.webp',
                    revision: 'a94a9b57dc334295deb108844bb5723f',
                },
                {
                    url: '/images/kaufman/kaufman-desktop-thumb.webp',
                    revision: '079cf2b63eb900f0beba78a3cca80552',
                },
                {
                    url: '/images/kaufman/kaufman-desktop.jpg',
                    revision: 'd408a1c8c0016d69cfdc0cea21c32a94',
                },
                {
                    url: '/images/kaufman/kaufman-desktop.webp',
                    revision: '8bc087070cb7f147e83d0109621afdd8',
                },
                {
                    url: '/images/kaufman/kaufman-mobile.jpg',
                    revision: '8a68cde3982c851e45cdb467866df030',
                },
                {
                    url: '/images/kaufman/kaufman-mobile.webp',
                    revision: 'bc21f26797e71396e52b1a0e992f6331',
                },
                {
                    url: '/images/kaufman/kaufman-tablet-large.webp',
                    revision: 'c495328aafd0184477ec0d181fba9800',
                },
                {
                    url: '/images/kaufman/kaufman-tablet-medium.webp',
                    revision: '8bcb7ddfa3684e8c02f4e4c1cb52e9c8',
                },
                {
                    url: '/images/kaufman/kaufman-tablet-thumb.webp',
                    revision: 'e94d748fb01267964630e45b1d20bb9b',
                },
                {
                    url: '/images/kaufman/kaufman-tablet.jpg',
                    revision: '28726e419bcd015b7527b972e4cad159',
                },
                {
                    url: '/images/kaufman/kaufman-tablet.webp',
                    revision: '4cb66d2bdc59e94a726c087d05d337eb',
                },
                {
                    url: '/images/kaufman/kaufman-thumb.jpg',
                    revision: 'b44be8cd7929af8e08db47e3983d138f',
                },
                {
                    url: '/images/kaufman/kaufman-thumb.webp',
                    revision: '0d546aca913ad65b4365b00495aaf46b',
                },
                {
                    url: '/images/p&g/ariel-desktop-large.webp',
                    revision: 'b5095a1f1ab7a065be469bc86b4538a2',
                },
                {
                    url: '/images/p&g/ariel-desktop-medium.webp',
                    revision: '5e005e533a63850d5a9991f5d0c5796b',
                },
                {
                    url: '/images/p&g/ariel-desktop-thumb.webp',
                    revision: 'eff59f7b2ab53c628dfbc69e5bc49074',
                },
                {
                    url: '/images/p&g/ariel-desktop.jpg',
                    revision: 'f7d34998da0e13e8559f4a197c8f527d',
                },
                {
                    url: '/images/p&g/ariel-desktop.webp',
                    revision: '76d2bf7148f536911501bd79c6ea7f3c',
                },
                {
                    url: '/images/p&g/ariel-mobile.jpg',
                    revision: 'c114a833b142aae1aa9a5515e077501a',
                },
                {
                    url: '/images/p&g/ariel-mobile.webp',
                    revision: '8d6cb269f7f4481c20d934e0f39062e4',
                },
                {
                    url: '/images/p&g/ariel-tablet-medium.webp',
                    revision: '3e13b8d8757111b7e676211cca74455b',
                },
                {
                    url: '/images/p&g/ariel-tablet-thumb.webp',
                    revision: '8172297d899bb57011dcba7bca81ec47',
                },
                {
                    url: '/images/p&g/ariel-tablet.jpg',
                    revision: 'cb73809b6be67e7df4d16971bbe644ef',
                },
                {
                    url: '/images/p&g/ariel-tablet.webp',
                    revision: '488a0e3eb7ac8f30d8b093f55a65ad56',
                },
                {
                    url: '/images/p&g/ariel-thumb.jpg',
                    revision: 'd735ff42d1187ff49f4fa3d520aed0f0',
                },
                {
                    url: '/images/p&g/ariel-thumb.webp',
                    revision: '13ee245e2795c3889cbef1dfc99e3bee',
                },
                {
                    url: '/images/p&g/pampers-thumb.jpg',
                    revision: '358e7025537664de3761f958f82dafe8',
                },
                {
                    url: '/images/p&g/pampers-thumb.webp',
                    revision: '41ce206b1f7027e5f657c1b138c59f83',
                },
                {
                    url: '/images/p&g/supersavvyme-thumb.jpg',
                    revision: '05b3dd24fe57a1ddc24b0fd06c1ca5d5',
                },
                {
                    url: '/images/p&g/supersavvyme-thumb.webp',
                    revision: '14b76e903e77aa6b638094a2499b86dc',
                },
                {
                    url: '/images/pesawheel/desktop-large.webp',
                    revision: '8611be5c761c0cac0f69280251c249d1',
                },
                {
                    url: '/images/pesawheel/desktop-medium.webp',
                    revision: 'ee45df9542c44e6f34122c8bf4f7525b',
                },
                {
                    url: '/images/pesawheel/desktop-thumb.webp',
                    revision: 'd5416c742893baede3abe93a89f0a4be',
                },
                {
                    url: '/images/pesawheel/desktop.png',
                    revision: '0643ffc119e1958e4a57fb99c0a93d78',
                },
                {
                    url: '/images/pesawheel/desktop.webp',
                    revision: '50635075405ea17dabd38f3ccbeec31e',
                },
                {
                    url: '/images/pesawheel/pesawheel-desktop-large.webp',
                    revision: '8b32426f9a5596c2d657e9d90f61a73a',
                },
                {
                    url: '/images/pesawheel/pesawheel-desktop-medium.webp',
                    revision: '17b72a5d987ad46b4423517dc17e9f7f',
                },
                {
                    url: '/images/pesawheel/pesawheel-desktop-thumb.webp',
                    revision: '96d2c77c0456128723ffdc8c7f0097d5',
                },
                {
                    url: '/images/pesawheel/pesawheel-desktop.jpg',
                    revision: '1517d3d2279acfd42e1b04dcad3de384',
                },
                {
                    url: '/images/pesawheel/pesawheel-desktop.webp',
                    revision: '10b37a579a0122b9e7e1bd1c2d48a159',
                },
                {
                    url: '/images/pesawheel/pesawheel-mobile.jpg',
                    revision: 'b54c84f3b291ce94f666d81442bbf98b',
                },
                {
                    url: '/images/pesawheel/pesawheel-mobile.webp',
                    revision: 'd794bf3f50124d5f505881ebba043d65',
                },
                {
                    url: '/images/publispeak/air-liquide.png',
                    revision: 'efa158d068399fc24f2801cae56c2287',
                },
                {
                    url: '/images/publispeak/air-liquide.webp',
                    revision: '65652cc6afeb28ea3dff93db46c38948',
                },
                {
                    url: '/images/publispeak/csr-en.png',
                    revision: '9b114a2249cca5ecf694e7644b0c77f2',
                },
                {
                    url: '/images/publispeak/csr-en.webp',
                    revision: 'bb88dee187dcb3aa76b9e7d6cc1b738d',
                },
                {
                    url: '/images/publispeak/loreal.png',
                    revision: '361f16c00fba04f7a1ba98807ae63a5c',
                },
                {
                    url: '/images/publispeak/loreal.webp',
                    revision: '276c8882d55816a40ada8a7854e6e4f5',
                },
                {
                    url: '/images/publispeak/paribas.png',
                    revision: '81a5e552abacebc705a26f0fb74338be',
                },
                {
                    url: '/images/publispeak/paribas.webp',
                    revision: '302536f24a78352fa58b0e6d5b21943e',
                },
                {
                    url: '/images/publispeak/publispeak-desktop-large.webp',
                    revision: 'f40ad52c779f8f4db7164ec2bd0a6866',
                },
                {
                    url: '/images/publispeak/publispeak-desktop-medium.webp',
                    revision: '94af37213c534fede119063d8e4267d6',
                },
                {
                    url: '/images/publispeak/publispeak-desktop-thumb.webp',
                    revision: 'fccf30ff759448190fbebc74e6b32059',
                },
                {
                    url: '/images/publispeak/publispeak-desktop.jpg',
                    revision: 'fbea14c22e93d57650f9285aca1e7777',
                },
                {
                    url: '/images/publispeak/publispeak-desktop.webp',
                    revision: '9d5dd037d99447d08f08e9b88a6ca2a6',
                },
                {
                    url: '/images/publispeak/publispeak-medium.webp',
                    revision: 'ebe81289fac4663f7de592a216911134',
                },
                {
                    url: '/images/publispeak/publispeak-mobile.jpg',
                    revision: '0bf0589b8811e8ee9c669254905ac18a',
                },
                {
                    url: '/images/publispeak/publispeak-mobile.webp',
                    revision: '376dac48159adcac26271c0615599cd5',
                },
                {
                    url: '/images/publispeak/publispeak-tablet.jpg',
                    revision: '9c70aedfeeab5382bc9a2f6ab84609d7',
                },
                {
                    url: '/images/publispeak/publispeak-tablet.webp',
                    revision: 'd90c0bb686322b50457b1193bddc72c4',
                },
                {
                    url: '/images/publispeak/publispeak-thumb.webp',
                    revision: '69ed7f0290bc6dfc8adb4cf0f33cd909',
                },
                {
                    url: '/images/publispeak/publispeak.png',
                    revision: 'f98dc5e7a44dcec3f8f83f7ee8b0f776',
                },
                {
                    url: '/images/publispeak/publispeak.webp',
                    revision: 'ef469a21bb8891c55137ac41878544cb',
                },
                {
                    url: '/images/sagar-large.webp',
                    revision: '2cec0b958bd87c6a2df295dcc1af57e9',
                },
                {
                    url: '/images/sagar-medium.webp',
                    revision: '31830cae0b47df2fe47115e054d36fab',
                },
                {
                    url: '/images/sagar-thumb.webp',
                    revision: 'a8991e4ae47e67c3a05b32be36511ee3',
                },
                {
                    url: '/images/sagar.jpg',
                    revision: '6c3d64315479a1519dc3ecc4ebdb342f',
                },
                {
                    url: '/images/sagar.webp',
                    revision: '73d08101bc81169683feceba42622517',
                },
                {
                    url: '/images/sagarsys_og_img-medium.webp',
                    revision: '43866e5e43cce446a984c74b1def52c1',
                },
                {
                    url: '/images/sagarsys_og_img-thumb.webp',
                    revision: '793fcfdf31a35c2a5eb7b9662b32a888',
                },
                {
                    url: '/images/sagarsys_og_img.png',
                    revision: '5eed2b587c3d29e2aedbf88707650ab7',
                },
                {
                    url: '/images/sagarsys_og_img.webp',
                    revision: '629112257aa4ce93ddc9f4a9d66a5d89',
                },
                {
                    url: '/logo192.png',
                    revision: '33dbdd0177549353eeeb785d02c294af',
                },
                {
                    url: '/logo512.png',
                    revision: '917515db74ea8d1aee6a246cfbcc0b45',
                },
                {
                    url: '/manifest.json',
                    revision: '97c6a738f63c8ca415902fe9cff36e58',
                },
                {
                    url: '/offline.html',
                    revision: '27fc648dbdb385970bf8e156fbb9c957',
                },
                {
                    url: '/robots.txt',
                    revision: 'fa1ded1ed7c11438a9b0385b1e112850',
                },
                {
                    url: '/sagarsys.net screenshot.png',
                    revision: 'd9647cedf22029c8bc0b91298ddd3414',
                },
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({
                            request: e,
                            response: a,
                            event: i,
                            state: b,
                        }) =>
                            a && 'opaqueredirect' === a.type
                                ? new Response(a.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: a.headers,
                                  })
                                : a,
                    },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.CacheFirst({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 2592e3,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.NetworkFirst({
                cacheName: 'next-data',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/api\.github\.com\/.*/i,
            new e.NetworkFirst({
                cacheName: 'github-api',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 3600,
                    }),
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ request: e }) => 'document' === e.destination,
            new e.NetworkFirst({
                cacheName: 'pages',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET'
        )
})
