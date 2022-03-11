import ga from "./analytics.js";

export default ({ router }) => {
  const sessionId = Math.floor(Math.random() * 1000);

  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, sessionId);
  });
};
