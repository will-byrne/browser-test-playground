import { Form, Results } from "./page-objects";

fixture`Form`.page`http://localhost:3000/`;

test("Can submit", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit2", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit3", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit4", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit5", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit6", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit7", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit8", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit9", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});

test("Can submit10", async () => {
  await Form.formVisible();
  await Form.setName();
  await Form.setAge();
  await Form.setFavouriteColour();
  await Form.setComments();
  await Form.submit();
  await Results.checkMessage("Recieved Sparkles the Unicorn who is 9000 years old and their favourite colour is glitter");
});
