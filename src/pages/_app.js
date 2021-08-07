import '../public/styles/global.css'
import ReactGA from 'react-ga';
import { isWindow } from '../utils/common';
import { GA_TRACKING_ID } from '../utils/contants';

ReactGA.initialize(GA_TRACKING_ID);

if (isWindow()) {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}