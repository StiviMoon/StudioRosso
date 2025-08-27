// Configuración de Google Analytics para Studio Rosso Agency
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Reemplaza con tu ID real de GA4

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_dimension1: 'user_type',
        custom_dimension2: 'page_category'
      }
    });
  }
};

// Trackear eventos personalizados
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Trackear vistas de página
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url
    });
  }
};

// Trackear formularios enviados
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName, 1);
};

// Trackear clics en botones
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', 'engagement', `${buttonName}_${location}`, 1);
};

// Trackear tiempo en página
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', 'engagement', 'page_engagement', seconds);
};

// Trackear interacciones con carruseles
export const trackCarouselInteraction = (carouselName, action) => {
  trackEvent('carousel_interaction', 'engagement', `${carouselName}_${action}`, 1);
};

// Trackear descargas de recursos
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', 'engagement', `${fileType}_${fileName}`, 1);
};

// Trackear errores
export const trackError = (errorType, errorMessage) => {
  trackEvent('error', 'error', `${errorType}_${errorMessage}`, 1);
};
