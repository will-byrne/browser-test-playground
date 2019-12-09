import React, { useState } from "react";

interface Props {
  setMessage: (message: string) => void;
}

const Form = ({ setMessage }: Props): JSX.Element => {
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [favouriteColour, setFavouriteColour] = useState<string>();
  //  const [file, setFile] = useState<File>();

  const nameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const ageChange = (event: React.FormEvent<HTMLInputElement>) => {
    setAge(Number.parseInt(event.currentTarget.value));
  };
  const favColourChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setFavouriteColour(event.currentTarget.value);
  };

  const submitForm = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    const response = await fetch("/submit", {
      method: "POST",
      body: JSON.stringify({ name, age, favouriteColour }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    response.text().then((text: string): void => {
      setMessage(text);
    });
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={name} onChange={nameChange} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          name="age"
          type="number"
          min={0}
          step={1}
          value={age}
          onChange={ageChange}
        />
      </div>
      <div>
        <label htmlFor="favouriteColour">Favourite Colour</label>
        <select
          name="favouriteColour"
          value={favouriteColour}
          onChange={favColourChange}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="glitter">Glitter</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments">Comments</label>
        <textarea name="comments" rows={10}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
