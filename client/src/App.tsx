import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>();
  return (
    <div className="App">
      <Form setMessage={setMessage} />
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default App;
