import faker from "faker";
import puppeteer from "puppeteer";

const person = {
  name: faker.name.firstName() + " " + faker.name.lastName(),
  age: faker.random.number({ min: 0, max: 100, precision: 1 }),
  colour: faker.random.arrayElement(["red", "blue", "green", "glitter"])
};

describe("Form", (): void => {
  test("can submit", async (): Promise<void> => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: false
    });
    let page = await browser.newPage();
    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ""
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector("form");
    await page.click("input[name=name]");
    await page.type("input[name=name]", person.name);
    await page.click("input[name=age]");
    await page.type("input[name=age]", person.age.toString());
    await page.select("select", person.colour);
    await page.click("input[type=submit]");

    await page.waitForSelector("h2");

    const message = page.$eval("h2", e => e.innerHTML);

    expect(message).toBe(
      `Recieved ${person.name} who is ${person.age} years old and their favourite colour is ${person.colour}`
    );

    await browser.close();
  }, 30000);
});
