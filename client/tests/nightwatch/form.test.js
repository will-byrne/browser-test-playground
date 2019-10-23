module.exports = {
  "Test Form": function(browser) {
    browser
      .url("http://localhost:3000")
      .waitForElementVisible("form")
      .setValue("input[name=name]", "Sparkles the Unicorn")
      .setValue("input[name=age]", "9000")
      .setValue("select", "glitter")
      .click("button")
      .waitForElementVisible("h2")
      .assert.containsText(
        "h2",
        "Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter"
      )
      .end();
  }
};
