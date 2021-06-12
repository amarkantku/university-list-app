export const sendToAnalytics = (metric) => {
    // const url = 'https://domain.com/analytics';
    if (navigator.sendBeacon) {
        // const status = navigator.sendBeacon(url, metric);
        // console.log(metric);
    } else {
        // No Beacon. Maybe fall back to XHR?
    }
}

export default sendToAnalytics;
