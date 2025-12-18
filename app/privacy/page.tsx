import ScrollTop from '@/components/features/navigation/ScrollTop'
import Breadcrumb from '@/components/features/navigation/Breadcrumb'
import { Shield } from 'lucide-react'

export const metadata = {
    title: 'Privacy Policy | Sagar Sawuck',
    description:
        'Privacy policy for sagarsys.net. Learn about how we collect, use, and protect your personal information.',
    robots: {
        index: true,
        follow: true,
    },
}

/**
 * Privacy Policy Page
 *
 * GDPR-compliant privacy policy covering data collection, usage, and user rights
 */
export default function PrivacyPage() {
    const lastUpdated = 'December 18, 2024'

    return (
        <div className="min-h-screen relative">
            {/* Fixed elements */}
            <div id="back-to-top-anchor" className="h-0 min-h-0" />
            <ScrollTop />

            {/* Page content */}
            <main className="relative z-10 pt-24">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Privacy Policy' },
                        ]}
                    />

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-secondary" />
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                Privacy Policy
                            </h1>
                        </div>
                        <p className="text-gray-400">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none space-y-8">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Introduction
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                Welcome to sagarsys.net. This privacy policy
                                explains how I collect, use, and protect your
                                personal information when you visit this
                                website. I am committed to ensuring that your
                                privacy is protected and I comply with the
                                General Data Protection Regulation (GDPR) and
                                other applicable data protection laws.
                            </p>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                By using this website, you agree to the
                                collection and use of information in accordance
                                with this policy.
                            </p>
                        </section>

                        {/* Information I Collect */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Information I Collect
                            </h2>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                Automatically Collected Information
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                When you visit this website, I automatically
                                collect certain information about your device
                                and browsing behavior, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>Browser type and version</li>
                                <li>Operating system and device information</li>
                                <li>IP address (anonymized in analytics)</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website (if applicable)</li>
                                <li>
                                    Performance metrics (Web Vitals) for site
                                    optimization
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                Information You Provide
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I do not actively collect personal information
                                unless you choose to contact me directly. If you
                                reach out via email or contact forms, I may
                                collect:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>Name and email address</li>
                                <li>
                                    Any information you choose to include in
                                    your message
                                </li>
                            </ul>
                        </section>

                        {/* How I Use Your Information */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                How I Use Your Information
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I use the collected information for the
                                following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    <strong className="text-secondary">
                                        Website Analytics:
                                    </strong>{' '}
                                    To understand how visitors use the site and
                                    improve content and user experience
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Performance Monitoring:
                                    </strong>{' '}
                                    To measure and optimize website performance
                                    (loading speed, responsiveness)
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Communication:
                                    </strong>{' '}
                                    To respond to your inquiries if you contact
                                    me
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Security:
                                    </strong>{' '}
                                    To protect against malicious activity and
                                    ensure site security
                                </li>
                            </ul>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I do <strong>NOT</strong> sell, rent, or share
                                your personal information with third parties for
                                marketing purposes.
                            </p>
                        </section>

                        {/* Cookies and Tracking */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Cookies and Tracking Technologies
                            </h2>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                What Are Cookies?
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                Cookies are small text files stored on your
                                device that help websites remember your
                                preferences and understand how you use the site.
                            </p>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                Types of Cookies I Use
                            </h3>

                            <div className="space-y-4 mb-4">
                                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <h4 className="text-white font-semibold mb-2">
                                        Essential Cookies (Always Active)
                                    </h4>
                                    <p className="text-gray-300 text-sm">
                                        These cookies are necessary for the
                                        website to function properly. They
                                        include:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 text-sm space-y-1">
                                        <li>
                                            Theme preference (dark/light mode)
                                        </li>
                                        <li>Cookie consent preference</li>
                                        <li>Session state</li>
                                    </ul>
                                </div>

                                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <h4 className="text-white font-semibold mb-2">
                                        Analytics Cookies (Optional)
                                    </h4>
                                    <p className="text-gray-300 text-sm">
                                        These cookies collect anonymous usage
                                        data to help improve the website:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 text-sm space-y-1">
                                        <li>
                                            Google Analytics (_ga, _gid, _gat)
                                        </li>
                                        <li>Page views and session duration</li>
                                        <li>
                                            Performance metrics (Web Vitals)
                                        </li>
                                        <li>Traffic sources</li>
                                    </ul>
                                    <p className="text-gray-400 text-xs mt-2">
                                        You can opt out of these cookies through
                                        the cookie consent banner.
                                    </p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                Managing Cookies
                            </h3>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                You can control cookies through:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    The cookie consent banner that appears on
                                    your first visit
                                </li>
                                <li>
                                    Your browser settings (most browsers allow
                                    you to block cookies)
                                </li>
                                <li>Browser extensions or privacy tools</li>
                            </ul>
                        </section>

                        {/* Third-Party Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Third-Party Services
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                This website uses the following third-party
                                services:
                            </p>

                            <div className="space-y-4 mb-4">
                                <div>
                                    <h4 className="text-white font-semibold mb-2">
                                        Google Analytics & Google Tag Manager
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-2">
                                        I use Google Analytics to understand how
                                        visitors use this website. Google
                                        Analytics collects information
                                        anonymously and reports website trends
                                        without identifying individual visitors.
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Privacy Policy:{' '}
                                        <a
                                            href="https://policies.google.com/privacy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:underline"
                                        >
                                            Google Privacy Policy
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-2">
                                        GitHub
                                    </h4>
                                    <p className="text-gray-300 text-sm mb-2">
                                        Project information is fetched from
                                        GitHub&apos;s public API to display my
                                        open-source contributions.
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Privacy Policy:{' '}
                                        <a
                                            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:underline"
                                        >
                                            GitHub Privacy Statement
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Your Rights (GDPR) */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Your Rights Under GDPR
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                If you are located in the European Economic Area
                                (EEA), you have certain data protection rights
                                under GDPR:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    <strong className="text-secondary">
                                        Right to Access:
                                    </strong>{' '}
                                    Request a copy of personal data I hold about
                                    you
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Rectification:
                                    </strong>{' '}
                                    Request correction of inaccurate data
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Erasure:
                                    </strong>{' '}
                                    Request deletion of your personal data
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Restrict Processing:
                                    </strong>{' '}
                                    Request limitation on how I use your data
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Data Portability:
                                    </strong>{' '}
                                    Receive your data in a portable format
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Object:
                                    </strong>{' '}
                                    Object to processing of your personal data
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Right to Withdraw Consent:
                                    </strong>{' '}
                                    Withdraw consent at any time (clear cookies
                                    in browser)
                                </li>
                            </ul>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                To exercise any of these rights, please contact
                                me using the information provided below.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Data Retention
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I retain your information only for as long as
                                necessary:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    <strong>Analytics data:</strong> Retained by
                                    Google Analytics according to their data
                                    retention settings (typically 14-26 months)
                                </li>
                                <li>
                                    <strong>Cookie consent:</strong> Stored
                                    locally on your device for 6 months, then
                                    expires
                                </li>
                                <li>
                                    <strong>Contact information:</strong> If you
                                    contact me, I retain your email only as long
                                    as needed to respond
                                </li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Data Security
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I take the security of your data seriously and
                                implement appropriate technical measures to
                                protect it:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    HTTPS encryption for all data transmission
                                </li>
                                <li>
                                    No storage of sensitive personal information
                                    on this website
                                </li>
                                <li>
                                    Regular security updates and best practices
                                </li>
                                <li>
                                    Limited data collection (only what&apos;s
                                    necessary)
                                </li>
                            </ul>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                However, no method of transmission over the
                                internet is 100% secure. While I strive to
                                protect your information, I cannot guarantee
                                absolute security.
                            </p>
                        </section>

                        {/* Do Not Track */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Do Not Track (DNT)
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I respect the Do Not Track (DNT) browser
                                setting. If you have DNT enabled in your
                                browser, analytics scripts will not be loaded
                                regardless of your cookie consent choice.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Children&apos;s Privacy
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                This website is not intended for children under
                                the age of 16. I do not knowingly collect
                                personal information from children. If you
                                believe I have inadvertently collected
                                information from a child, please contact me
                                immediately.
                            </p>
                        </section>

                        {/* International Data Transfers */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                International Data Transfers
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                This website is hosted and operated from the
                                Netherlands. If you access this website from
                                outside the European Economic Area (EEA), your
                                information may be transferred to and stored in
                                servers located in different countries.
                            </p>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                By using this website, you consent to the
                                transfer of your information to countries that
                                may have different data protection laws than
                                your country of residence.
                            </p>
                        </section>

                        {/* Changes to Privacy Policy */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                I may update this privacy policy from time to
                                time. Any changes will be posted on this page
                                with an updated revision date. I encourage you
                                to review this policy periodically for any
                                changes.
                            </p>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                Continued use of the website after changes are
                                posted constitutes your acceptance of the
                                updated policy.
                            </p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Contact Information
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                If you have any questions about this privacy
                                policy, your data, or wish to exercise your
                                rights under GDPR, please contact me:
                            </p>
                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <p className="text-gray-200 mb-2">
                                    <strong className="text-white">
                                        Name:
                                    </strong>{' '}
                                    Sagar Sawuck
                                </p>
                                <p className="text-gray-200 mb-2">
                                    <strong className="text-white">
                                        Email:
                                    </strong>{' '}
                                    <a
                                        href="mailto:contact@sagarsys.net"
                                        className="text-secondary hover:underline"
                                    >
                                        contact@sagarsys.net
                                    </a>
                                </p>
                                <p className="text-gray-200">
                                    <strong className="text-white">
                                        Location:
                                    </strong>{' '}
                                    Netherlands
                                </p>
                            </div>
                            <p className="text-gray-200 leading-relaxed mt-4">
                                I will respond to your inquiry within 30 days,
                                as required by GDPR.
                            </p>
                        </section>

                        {/* Legal Basis */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Legal Basis for Processing (GDPR)
                            </h2>
                            <p className="text-gray-200 leading-relaxed mb-4">
                                Under GDPR, I process your personal data based
                                on the following legal grounds:
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-200">
                                <li>
                                    <strong className="text-secondary">
                                        Consent:
                                    </strong>{' '}
                                    For analytics cookies and tracking (you
                                    provide explicit consent via the banner)
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Legitimate Interest:
                                    </strong>{' '}
                                    For essential website functionality and
                                    security
                                </li>
                                <li>
                                    <strong className="text-secondary">
                                        Contract Performance:
                                    </strong>{' '}
                                    If you contact me for professional services
                                </li>
                            </ul>
                        </section>

                        {/* Footer */}
                        <section className="mt-12 pt-8 border-t border-slate-700">
                            <p className="text-gray-400 text-sm">
                                This privacy policy is effective as of{' '}
                                {lastUpdated} and was last reviewed on this
                                date. I am committed to protecting your privacy
                                and ensuring transparency in how I handle your
                                data.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
        </div>
    )
}
