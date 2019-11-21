Feature("Form.test.js");

Scenario("test something", I => {
  I.amOnPage("http:localhost:3000");
  I.seeElement("form");
  I.fillField("name", "Sparkles the Unicorn");
  I.fillField("age", 9000);
  I.selectOption("favouriteColour", "glitter");
  I.click("Submit");
  I.see(
    "Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter"
  );
});

