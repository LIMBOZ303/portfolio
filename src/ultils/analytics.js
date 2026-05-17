const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export const initGA = () => {
    if (!GA_MEASUREMENT_ID) {
        console.warn('Google Analytics Measurement ID is missing')
        return
    }

    if (window.gtag) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    function gtag() {
        window.dataLayer.push(arguments)
    }

    window.gtag = gtag

    window.gtag('js', new Date())

    window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: true,
    })
}

export const trackEvent = ({ action, category, label, value }) => {
    if (!window.gtag) return

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
    })
}