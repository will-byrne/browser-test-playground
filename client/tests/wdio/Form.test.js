const assert = require("assert");

describe("Frorm.tsx", () => {
  it("should allow a person to be added", () => {
    browser.url("http://localhost:3000");
    const form = $("form");
    assert(form.isDisplayed(), true);
    $("input[name=name]").setValue("Sparkles the Unicorn");
    $("input[name=age]").setValue(9000);
    $("select").selectByAttribute("value", "glitter");
    $("button").click();
    const response = $("h2");
    response.waitForExist(5000);
    assert(
      response.getText(),
      "Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter"
    );
  });
});

