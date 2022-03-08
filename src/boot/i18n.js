import { createI18n } from "vue-i18n";
import messages from "../i18n";

export default ({ app }) => {
  // Create i18n instance
  const i18n = createI18n({
    locale: "en-US",
    messages,
  });

  app.use(i18n);
};
