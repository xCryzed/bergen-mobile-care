import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "QDN09M9JUgD7y8BpD",
  SERVICE_ID: "service_b21lebl",
  TEMPLATE_ID: "template_7q95w3b",
};

export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

export const sendEmail = async (templateParams: Record<string, string>) => {
  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return { success: true, result };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};
