import { Selector } from "testcafe";

fixture`Form`.page`http://localhost:3000/`;

const colourSelect = Selector("select");
const colourOptions = colourSelect.find("option");

test("Can submit", async t => {
  await t
    .typeText(Selector("input[name=name]"), "Sparkles the Unicorn")
    .typeText(Selector("input[name=age]"), "9000")
    .click(colourSelect)
    .click(colourOptions.withText("Glitter"))
    .click("button")
    .expect(Selector("h2").textContent, { timeout: 2000 })
    .eql(
      "Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter"
    );
});
