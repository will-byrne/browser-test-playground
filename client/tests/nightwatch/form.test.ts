import { NightwatchBrowser } from 'nightwatch';

export = {
  'Test Form': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form2': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form3': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form4': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form5': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form6': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form7': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form8': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form9': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
  'Test Form10': async function(browser: NightwatchBrowser): Promise<void> {
    const form = browser.page.Form();
    const results = browser.page.Results();
    await form.navigate();
    await form.formVisible();
    await form.setName();
    await form.setAge();
    await form.setFavouriteColour();
    await form.setComments();
    await form.submit();
    await results.checkMessage('Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter');
    browser.end();
  },
};
