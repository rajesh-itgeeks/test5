// export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
export const GA_MEASUREMENT_ID = "G-3H51YNXV4V";

export const pageview = (url) => {
  if (process.env.NODE_ENV !== "development") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (process.env.NODE_ENV !== "development") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
