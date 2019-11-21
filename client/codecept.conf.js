exports.config = {
  tests: "./tests/codeceptjs/*.test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://localhost:3000",
      browser: "chrome"
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: "client",
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"]
    }
  }
};
