import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-B3YGHVFK5W', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  // Function to track custom events
  const trackEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  // Function to track page views manually
  const trackPageView = (url, title) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-B3YGHVFK5W', {
        page_path: url,
        page_title: title,
      });
    }
  };

  return { trackEvent, trackPageView };
};
