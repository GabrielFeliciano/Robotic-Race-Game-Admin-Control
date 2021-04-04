import '../styles/globals.css';
import '../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mosaic-component/react-mosaic-component.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
