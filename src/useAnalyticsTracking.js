import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function useAnalyticsTracking() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.set({page: location.pathname + location.search});
    ReactGA.send('pageview');
  }, [location]);
}
