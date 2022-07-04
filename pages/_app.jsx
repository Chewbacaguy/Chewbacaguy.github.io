import { useEffect } from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
