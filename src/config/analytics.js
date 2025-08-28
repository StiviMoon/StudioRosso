// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-B3YGHVFK5W';

// Initialize Google Analytics
export const initializeGA = () => {
  if (typeof window !== 'undefined') {
    // Check if gtag is already loaded
    if (!window.gtag) {
      console.warn('Google Analytics not loaded');
      return;
    }

    // Configure default settings
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: false, // We'll handle this manually
    });
  }
};

// Track page view
export const pageview = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  });
};

// Track external links
export const trackExternalLink = (url, linkText) => {
  event({
    action: 'click',
    category: 'outbound',
    label: `${linkText}_${url}`,
  });
};
