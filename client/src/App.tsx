import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import ResultPage from "./ResultPage";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>();
  return (
    <div className="App">
        {!message ? <Form setMessage={setMessage} /> : <ResultPage message={message}/>}
    </div>
  );
};

export default App;
