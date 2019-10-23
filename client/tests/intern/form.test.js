const { describe, it } = intern.getPlugin("interface.bdd");
const { assert } = intern.getPlugin("chai");

describe("form", () => {
  it("should submit", async test => {
    const { remote } = test;

    await remote
      .get("http://localhost:3000")
      .findByName("name")
      .type("Sparkles the Unicorn")
      .end()
      .findByName("age")
      .type("9000")
      .end()
      .findByName("favouriteColour")
      .click()
      .end()
      .findByCssSelector('option[value="glitter"]')
      .click()
      .end()
      .findByTagName("button")
      .click()
      .end()
      .sleep(5000)
      .findByTagName("h2")
      .getVisibleText()
      .then(text => {
        assert.equal(
          text,
          "Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter"
        );
      });
  });
});
