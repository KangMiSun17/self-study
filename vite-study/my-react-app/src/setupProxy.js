const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dev-api.cremao.co.kr/cremao-service",
      changeOrigin: true,
    })
  );
};
