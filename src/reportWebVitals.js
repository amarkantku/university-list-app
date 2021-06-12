/**
 * Create React App includes a built-in tool for measuring the real life performance of your app. 
 * It measures a set of metrics that aim to capture the user experience of a web page.
 * 
 * CLS: Cumulative Layout Shift
 * FID: First Input Delay
 * FCP: First Contentful Paint
 * LCP: Largest Contentful Paint
 * TTFB: Time To First Byte
 * 
 * @param {*} onPerfEntry 
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
